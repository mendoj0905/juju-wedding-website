const sections = {
  'Photos': true,
  'Accommodations': true,
  'Our Story': true,
  'Story': true,
  'Event': false,
  'WeddingDetails': false,
  'Wedding Details': false,
  'WeddingParty': false,
  'Wedding Party': false,
  'Travel': false,
  'Clients': false,
  'RSVP': false,
}

export default function showHideSection(sectionName) {
  return sectionName ? sections[sectionName] : null
}