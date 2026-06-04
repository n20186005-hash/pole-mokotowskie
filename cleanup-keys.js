const fs = require('fs');
const path = require('path');
['zh', 'en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  delete content.mapSection;
  delete content.officialManagement;
  delete content.recommendations;
  
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log('Cleaned up keys in ' + lang);
});
