import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { action, text, context } = body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: "API Key missing" }, { status: 500 });
        }

        // 1. Discovery: Find out what models this key actually supports
        let availableModelNames: string[] = [];
        try {
            const listUrl = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;
            const listRes = await fetch(listUrl);
            const listData = await listRes.json();
            availableModelNames = listData.models
                ?.filter((m: any) => m.supportedGenerationMethods.includes("generateContent"))
                .map((m: any) => m.name.replace("models/", "")) || [];
            console.log("[AI Route] Discovered models:", availableModelNames);
        } catch (e) {
            console.error("[AI Route] Model discovery failed");
        }

        // 2. Decide on the model to use (Prefer Flash, then Pro)
        const preferredModels = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-pro", "gemini-1.5-pro"];
        const modelToUse = availableModelNames.find(m => preferredModels.includes(m)) || availableModelNames[0] || "gemini-1.5-flash";

        console.log(`[AI Route] Proceeding with model: ${modelToUse}`);

        const prompt = action === "summarize"
            ? `Summarize this in 2 sentences: ${text.slice(0, 5000)}`
            : `Explain this term in 50 words: ${text}`;

        // 3. Execution with Fallback Endpoints
        const endpoints = [
            `https://generativelanguage.googleapis.com/v1/models/${modelToUse}:generateContent?key=${apiKey}`,
            `https://generativelanguage.googleapis.com/v1beta/models/${modelToUse}:generateContent?key=${apiKey}`
        ];

        for (const url of endpoints) {
            try {
                console.log(`[AI Route] Trying endpoint: ${url.split('?')[0]}`);
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
                });

                const data = await res.json();
                if (res.ok) {
                    const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
                    return NextResponse.json({ output });
                }
                console.warn(`[AI Route] Endpoint failed: ${res.status}`, data.error?.message);
            } catch (err) {
                console.error(`[AI Route] Fetch error for ${url}:`, err);
            }
        }

        // 4. Final Error Report
        return NextResponse.json({
            error: `Could not find a working AI model. Discovered: ${availableModelNames.join(', ') || 'None'}. Please ensure your API key is from Google AI Studio and has Gemini access.`
        }, { status: 502 });

    } catch (error: any) {
        console.error("[AI Route] Fatal Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
