const sections = {
  'Photos': true,
  'Our Story': true,
  'Story': true,
  'WeddingParty': true,
  'Wedding Party': true,
  'Accommodations': true,
  'Things To Do / See': true,
  'ThingsToDoSee': true,
  'Travel': true,
  'FAQ': true,
}

export default function showHideSection(sectionName) {
  return sectionName ? sections[sectionName] : null
}