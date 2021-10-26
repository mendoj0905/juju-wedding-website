const sections = {
  'Photos': true,
  'Our Story': false,
  'Story': false,
  'Event': false,
  'WeddingParty': false,
  'Wedding Party': false,
  'Travel': false,
  'Clients': false,
  'RSVP': false,
}

export default function showHideSection(sectionName) {
  return sectionName ? sections[sectionName] : null
}