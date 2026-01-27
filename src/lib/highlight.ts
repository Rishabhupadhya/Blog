export function highlight(text: string, query?: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(
    regex,
    `<mark class="bg-cyan-400/20 text-cyan-300">$1</mark>`
  );
}
