export function getHeadings(content: string) {
  const regex = /^(##|###)\s+(.*)$/gm;
  const headings = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    headings.push({
      level: match[1] === "##" ? 2 : 3,
      text: match[2],
      id: match[2]
        .toLowerCase()
        .replace(/[^\w]+/g, "-"),
    });
  }

  return headings;
}
