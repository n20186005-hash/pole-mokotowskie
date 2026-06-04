const fs = require('fs');
const path = require('path');
const files = ['zh', 'en', 'pl', 'ru', 'de'].map(l => path.join('src', 'messages', `${l}.json`));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8').toLowerCase();
  const match = content.match(/denmark|løkken|aalborg|north sea|rubjerg|丹麦|洛肯|奥尔堡|北海/);
  if (match) {
    console.log('Found in ' + f + ' : ' + match[0]);
  } else {
    console.log('Clean in ' + f);
  }
});
