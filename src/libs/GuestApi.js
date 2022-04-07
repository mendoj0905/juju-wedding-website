import axios from "axios";
import Guest from "./Guest";

const RSVP = 'rsvp';

class GuestApi {
  constructor() {
    this.baseUrl = 'https://api.wedding.justinmendoza.net';
    this.guestPathApi = '/api/guests';
    this.guestApi = this.baseUrl + this.guestPathApi;
  }

  async search(name) {
    const response = await axios.post(`${this.guestApi}/search`, { name });

    if (response.data.success === false) {
      return false;
    }
    
    const { isAttending, email, familyMembers, children, plusOne, childrenAttending } = response.data;

    const guest = new Guest(name, isAttending, email, familyMembers, children, plusOne, childrenAttending);
    return guest;
  }

  async updateAttending(name, isAttending) {
    await axios.patch(`${this.guestApi}/${RSVP}`, { name, isAttending });
  }

  async updatePlusOne(plusOneName, familyMembersName) {
    const prevFamily = { name: familyMembersName };
    const newGuest = { name: plusOneName, familyMembers: [ prevFamily ] };

    const newGuestResponse = await axios.post(`${this.guestApi}`, newGuest);
    await axios.patch(`${this.guestApi}/${RSVP}`, { name: prevFamily.name, familyMembers: newGuestResponse.data.familyMembers, plusOne: false} );
  };

  async updateEmail(name, email) {
    await axios.patch(`${this.guestApi}/${RSVP}`, { name, email })
  }

  async updateMembers(members) {
    members.forEach(async member => {
      this.updateAttending(member.name, member.isAttending);
    });
  }

  async updateKids(members, kids) { 
    members.forEach(async member => {
      await axios.patch(`${this.guestApi}/${RSVP}`, { name: member.name, children: kids});
    });
  }

}

export default GuestApi;
