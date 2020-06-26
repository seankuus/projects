const readline = require('readline-sync');
let date = new Date;
let today = date.getDate();

console.log('Can I ride Apex today? Press enter to continue');
readline.question();

if (today % 2 === 0) {
  console.log('Yes, you can');
  } else {
    console.log('Sorry bruh, gotta wait a day');
  }