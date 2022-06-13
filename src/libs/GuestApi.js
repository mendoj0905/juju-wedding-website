import axios from "axios";
import Guest from "./Guest";

const RSVP = 'rsvp';

class GuestApi {
  constructor() {
    // this.baseUrl = 'http://localhost:4000';
    this.baseUrl = 'https://api.wedding.justinmendoza.net';
    this.guestPathApi = '/api/guests';
    this.photoPathApi = '/api/photos';
    this.guestApi = this.baseUrl + this.guestPathApi;
    this.photoApi = this.baseUrl + this.photoPathApi;
  }

  async get(name) {
    const response = await axios.post(`${this.guestApi}/search`, { name });

    if (response.data.success === false) {
      return false;
    }

    const guest = new Guest(response.data);
    return guest;
  }

  async v2Search(name) {
    const response = await axios.post(`${this.guestApi}/v2/search`, { name });

    if (response.data.success === false) {
      return false
    }

    if (response.data.length === 1) {
      const guest = new Guest(response.data[0])
      return guest
    }

    return response.data
  }

  async updateAttending(name, isAttending) {
    await axios.patch(`${this.guestApi}/${RSVP}`, { name, isAttending });
  }

  async updatePlusOne(plusOneName, familyMembersName) {
    const prevFamily = { name: familyMembersName };
    const newGuest = { name: plusOneName, familyMembers: [prevFamily] };

    const newGuestResponse = await axios.post(`${this.guestApi}`, newGuest);
    await axios.patch(`${this.guestApi}/${RSVP}`, { name: prevFamily.name, familyMembers: newGuestResponse.data.familyMembers, plusOne: false });
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
      await axios.patch(`${this.guestApi}/${RSVP}`, { name: member.name, children: kids });
    });
  }

  async getPhotos(id) {
    const response = await axios.post(`${this.photoApi}`, { id });
    const { photos } = response.data;
    return photos;
  }

}

export default GuestApi;
