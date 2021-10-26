const sections = {
  'Photos': true,
  'Story': true,
  'Event': true,
  'WeddingParty': true,
  'Clients': false,
  'Contact': false,
}

export default function showHideSection(sectionName) {
  return sectionName ? sections[sectionName] : null
}