const sections = {
  // Links
  'Photos': true,
  'Our Story': true,
  'Wedding Party': true,
  'Travel': true,
  'Things To Do / See': true,
  'FAQ': true,
  // Sections
  'OurStory': true,
  'WeddingParty': true,
  'ThingsToDoSee': true,
  // Deperacated
  'Accommodations': false,
}

export default function showHideSection(sectionName) {
  return sectionName ? sections[sectionName] : null
}