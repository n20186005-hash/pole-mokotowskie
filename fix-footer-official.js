const fs = require('fs');
const path = require('path');
['en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  if (content.footer && content.footer.officialResourcesTitle) {
    content.footer.official = content.footer.officialResourcesTitle;
    delete content.footer.officialResourcesTitle;
  }
  
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
});
