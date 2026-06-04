const fs = require('fs');
const path = require('path');

const data = {
  en: {
    hero: {
      title: "Pole Mokotowskie",
      subtitle: "Warsaw's Huge Central Green Space & Local Leisure Spot",
      rating: "4.7(26,663)",
      reviewCount: "26,663 reviews",
      hours: "Open 24 hours",
      openMaps: "View Location"
    },
    basicInfo: {
      title: "Basic Information",
      officialName: "Official Name",
      officialNameValue: "Pole Mokotowskie",
      type: "Attraction Type",
      typeValue: "Urban Park, Large Green Space, Leisure Field",
      country: "Country",
      countryValue: "Poland",
      city: "City",
      cityValue: "Warsaw",
      googleRating: "Google Rating",
      phone: "Phone",
      address: "Address",
      addressValue: "al. Niepodległości, Warszawa, Poland",
      plusCode: "Plus Code",
      plusCodeValue: "6273+39 Warsaw, Poland"
    }
  },
  pl: {
    hero: {
      title: "Pole Mokotowskie",
      subtitle: "Ogromna centralna przestrzeń zielona Warszawy",
      rating: "4.7(26,663)",
      reviewCount: "26,663 opinii",
      hours: "Otwarte całą dobę",
      openMaps: "Zobacz lokalizację"
    },
    basicInfo: {
      title: "Podstawowe informacje",
      officialName: "Oficjalna nazwa",
      officialNameValue: "Pole Mokotowskie",
      type: "Typ atrakcji",
      typeValue: "Park miejski, teren zielony",
      country: "Kraj",
      countryValue: "Polska",
      city: "Miasto",
      cityValue: "Warszawa",
      googleRating: "Ocena w Google",
      phone: "Telefon",
      address: "Adres",
      addressValue: "al. Niepodległości, Warszawa, Polska",
      plusCode: "Plus Code",
      plusCodeValue: "6273+39 Warszawa, Polska"
    }
  },
  ru: {
    hero: {
      title: "Поле Мокотовское",
      subtitle: "Огромное центральное зеленое пространство Варшавы",
      rating: "4.7(26,663)",
      reviewCount: "26,663 отзывов",
      hours: "Открыто 24 часа",
      openMaps: "Посмотреть на карте"
    },
    basicInfo: {
      title: "Основная информация",
      officialName: "Официальное название",
      officialNameValue: "Pole Mokotowskie",
      type: "Тип достопримечательности",
      typeValue: "Городской парк, зеленая зона",
      country: "Страна",
      countryValue: "Польша",
      city: "Город",
      cityValue: "Варшава",
      googleRating: "Рейтинг Google",
      phone: "Телефон",
      address: "Адрес",
      addressValue: "al. Niepodległości, Warszawa, Польша",
      plusCode: "Plus Code",
      plusCodeValue: "6273+39 Варшава, Польша"
    }
  },
  de: {
    hero: {
      title: "Pole Mokotowskie",
      subtitle: "Warschaus riesige zentrale Grünfläche",
      rating: "4.7(26,663)",
      reviewCount: "26,663 Bewertungen",
      hours: "24 Stunden geöffnet",
      openMaps: "Standort ansehen"
    },
    basicInfo: {
      title: "Basisinformationen",
      officialName: "Offizieller Name",
      officialNameValue: "Pole Mokotowskie",
      type: "Art der Attraktion",
      typeValue: "Stadtpark, Grünanlage",
      country: "Land",
      countryValue: "Polen",
      city: "Stadt",
      cityValue: "Warschau",
      googleRating: "Google-Bewertung",
      phone: "Telefon",
      address: "Adresse",
      addressValue: "al. Niepodległości, Warszawa, Polen",
      plusCode: "Plus Code",
      plusCodeValue: "6273+39 Warschau, Polen"
    }
  }
};

['en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  Object.keys(data[lang]).forEach(section => {
    content[section] = data[lang][section];
  });
  
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log(`Updated hero and basicInfo for ${lang}`);
});
