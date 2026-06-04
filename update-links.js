const fs = require('fs');
const path = require('path');

const links = {
  zh: {
    link1: "波兰共和国外交与签证",
    link2: "波兰国家旅游局",
    link3: "波兰国家遗产研究院",
    link4: "华沙市政府",
    link5: "波兰国家图书馆",
    link6: "马佐夫舍省政府"
  },
  en: {
    link1: "Ministry of Foreign Affairs Republic of Poland",
    link2: "Polish Tourism Organisation",
    link3: "National Institute of Cultural Heritage",
    link4: "City of Warsaw",
    link5: "National Library of Poland",
    link6: "Mazovia Province Government"
  },
  pl: {
    link1: "Ministerstwo Spraw Zagranicznych RP",
    link2: "Polska Organizacja Turystyczna",
    link3: "Narodowy Instytut Dziedzictwa",
    link4: "Urząd m.st. Warszawy",
    link5: "Biblioteka Narodowa",
    link6: "Samorząd Województwa Mazowieckiego"
  },
  ru: {
    link1: "Министерство иностранных дел Республики Польша",
    link2: "Польская туристическая организация",
    link3: "Национальный институт наследия",
    link4: "Мэрия Варшавы",
    link5: "Национальная библиотека Польши",
    link6: "Правительство Мазовецкого воеводства"
  },
  de: {
    link1: "Ministerium für auswärtige Angelegenheiten",
    link2: "Polnische Tourismusorganisation",
    link3: "Nationales Institut für Kulturerbe",
    link4: "Stadtverwaltung Warschau",
    link5: "Nationalbibliothek von Polen",
    link6: "Regierung der Woiwodschaft Masowien"
  }
};

['zh', 'en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  if (!content.footer) content.footer = {};
  content.footer.officialLinks = links[lang];
  
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log(`Added officialLinks for ${lang}`);
});
