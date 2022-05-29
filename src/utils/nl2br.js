export default function nl2br(str) {
  if (typeof str !== "string") {
    str = str.toString();
  }

  return str.replace(/\r\n/g, "<br />").replace(/\n|\r/g, "<br />");
}

// export default function al2link(str, link) {
//   if (typeof str !== "string") {
//     str = str.toString();
//   }

//   str.replace(/\a\n/g, '<a href="${link}">')
// }
