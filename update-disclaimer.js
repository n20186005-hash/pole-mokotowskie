const fs = require('fs');
const path = require('path');
const disclaimers = {
  zh: '本网站是一个独立的第三方旅游信息项目。我们不隶属于当地政府或任何其他官方机构。',
  en: 'This website is an independent third-party tourist information project. We are not affiliated with the local government or any other official institutions.',
  pl: 'Ta strona jest niezależnym projektem informacji turystycznej osób trzecich. Nie jesteśmy powiązani z władzami lokalnymi ani żadnymi innymi oficjalnymi instytucjami.',
  ru: 'Этот веб-сайт является независимым сторонним туристическим информационным проектом. Мы не связаны с местными органами власти или какими-либо другими официальными учреждениями.',
  de: 'Diese Website ist ein unabhängiges Touristeninformationsprojekt von Drittanbietern. Wir sind nicht mit der lokalen Regierung oder anderen offiziellen Institutionen verbunden.'
};

['zh', 'en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  content.footer.disclaimer = disclaimers[lang];
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log('Updated disclaimer for ' + lang);
});
