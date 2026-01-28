// lib/getHeadings.ts

export type Heading = {
  id: string;
  text: string;
  level: number;
};

export function getHeadings(source: string): Heading[] {
  return source
    .split("\n")
    .filter((line) => line.match(/^#{1,3}\s/)) // h1, h2, h3
    .map((line) => {
      const level = line.match(/^#{1,3}/)?.[0].length ?? 1;
      const text = line.replace(/^#{1,3}\s*/, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      return { id, text, level };
    });
}
