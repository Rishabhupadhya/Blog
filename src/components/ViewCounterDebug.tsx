"use client";

import { useEffect, useState } from "react";

/**
 * Debug component to test if view counter API is working
 * Add this temporarily to any page to test
 */
export default function ViewCounterDebug({ slug }: { slug: string }) {
  const [status, setStatus] = useState<string>("Testing...");
  const [views, setViews] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState<string>("");

  useEffect(() => {
    const test = async () => {
      try {
        const url = `/api/views/${encodeURIComponent(slug)}`;
        setApiUrl(url);
        setStatus("Fetching views...");
        
        console.log("🔍 Testing view counter API:", url);
        
        const response = await fetch(url);
        console.log("📡 Response status:", response.status);
        
        const data = await response.json();
        console.log("📊 Response data:", data);
        
        setStatus("✅ API Working!");
        setViews(data.views);
        setError(null);
      } catch (err) {
        console.error("❌ View counter error:", err);
        setStatus("❌ API Error");
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };

    test();
  }, [slug]);

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#FF6B6B",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
      fontSize: "14px",
      zIndex: 99999,
      maxWidth: "350px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      border: "3px solid white"
    }}>
      <div style={{ fontWeight: "bold", marginBottom: "12px", fontSize: "16px" }}>
        🔍 VIEW COUNTER DEBUG
      </div>
      <div style={{ marginBottom: "8px" }}>
        <strong>Status:</strong> {status}
      </div>
      <div style={{ marginBottom: "8px" }}>
        <strong>Slug:</strong> {slug}
      </div>
      <div style={{ marginBottom: "8px", fontSize: "12px", wordBreak: "break-all" }}>
        <strong>API:</strong> {apiUrl}
      </div>
      {views !== null && (
        <div style={{ marginBottom: "8px", fontSize: "18px", fontWeight: "bold" }}>
          <strong>Views:</strong> {views}
        </div>
      )}
      {error && (
        <div style={{ color: "#FFE66D", marginTop: "8px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      <div style={{ marginTop: "12px", fontSize: "11px", opacity: 0.9, borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "8px" }}>
        Check browser console for detailed logs
      </div>
    </div>
  );
}
