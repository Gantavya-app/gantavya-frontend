export function shortenText(text, maxLength) {
  if (text && text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`
  }
  return text
}
