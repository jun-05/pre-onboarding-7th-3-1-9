export function setTextBold(originText: string, targetText: string) {
  const text = originText.replaceAll(targetText, '<strong>' + targetText + '</strong>');
  return text;
}
