const sections = {
  'Photos': true,
  'Our Story': true,
  'Story': true,
  'Event': false,
  'WeddingDetails': true,
  'Wedding Details': true,
  'WeddingParty': false,
  'Wedding Party': false,
  'Travel': false,
  'Clients': false,
  'RSVP': false,
}

export default function showHideSection(sectionName) {
  return sectionName ? sections[sectionName] : null
}