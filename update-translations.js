const fs = require('fs');
const path = require('path');
const data = {
  'pl.json': { viewMore: 'Pokaż więcej zdjęć', viewLess: 'Pokaż mniej zdjęć', viewAll: 'Zobacz więcej zdjęć w Google Maps' },
  'ru.json': { viewMore: 'Показать больше фото', viewLess: 'Показать меньше фото', viewAll: 'Смотреть больше фото на Google Картах' },
  'de.json': { viewMore: 'Mehr Fotos anzeigen', viewLess: 'Weniger Fotos anzeigen', viewAll: 'Weitere Fotos auf Google Maps ansehen' }
};

Object.entries(data).forEach(([file, texts]) => {
  const p = path.join('src', 'messages', file);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  content.gallery.viewMore = texts.viewMore;
  content.gallery.viewLess = texts.viewLess;
  content.gallery.viewAll = texts.viewAll;
  content.gallery.captions = Array.from({length: 18}, (_, i) => `Photo ${i+1}`);
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log('Updated ' + file);
});
