const fs = require('fs');
const path = require('path');
['zh', 'en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  content.footer.legal = lang === 'zh' ? '法律与隐私' : lang === 'en' ? 'Legal & Privacy' : lang === 'pl' ? 'Kwestie prawne i prywatność' : lang === 'ru' ? 'Правовая информация и конфиденциальность' : 'Rechtliches & Datenschutz';
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log('Updated ' + lang);
});
