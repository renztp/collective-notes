export function shortenParagraph(paragraph: string, maxLength?: number | undefined): string {
  const defaultMaxLength: number = maxLength ? maxLength : 42;
  console.log(paragraph)
  if (paragraph.length <= defaultMaxLength) {
      return paragraph;
  }
  return paragraph.substr(0, maxLength).trim() + '...';
}