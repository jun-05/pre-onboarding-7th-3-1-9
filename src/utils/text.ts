export function parseTextBold(originText: string, targetText: string) {
  const text = originText.replaceAll(targetText, '<strong>' + targetText + '</strong>');
  return text;
}
