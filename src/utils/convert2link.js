export default function al2link(str) {
  if (typeof str !== "string") {
    str = str.toString();
  }

  const link = "https://pin.it/30T4rLD"

  const newStr = str.replace(/a#/g, `<a href="${link}" target="_blank">`)
  return newStr.replace(/#a/g, '</a>')
}
