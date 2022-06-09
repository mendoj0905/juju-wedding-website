import axios from 'axios';
import csv from 'fast-csv';
import fs from 'fs';

// const baseWeddingApiUrl = 'https://api.wedding.justinmendoza.net';
const baseWeddingApiUrl = 'http://localhost:4000';
const guests = '/api/guests';

fs.createReadStream('guestList.csv')
  .pipe(csv.parse())
  .on('error', e => console.error(e))
  .on('data', async (row) => {

    let guest = {};
    let familyMembers = [];

    for (let i = 0; i < row.length; i++) {
      if (i == 0) {
        guest.name = row[0];
      }
      if (row[i] == '+' ) {
        guest.plusOne = true;
      }
      else if (row[i].includes('children')) {
        guest.childrenAttending = true;
      } 
      else if (i > 0){
        familyMembers.push({ name: row[i]});
      }
    }
    if(familyMembers.length >= 1) {
      guest.familyMembers = familyMembers;
    }
   
    console.log(guest);
    const response = await axios.post(baseWeddingApiUrl + guests, guest);
    console.log(response.data);

  })
  .on('end', rowCount => console.log(`Parsed ${rowCount} rows`))
