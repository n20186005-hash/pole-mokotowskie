const fs = require('fs');
const path = require('path');

const introData = {
  en: {
    visitGuide: {
      title: "Travel Tips",
      items: [
        "Recommended to visit in the early morning or evening for soft light and mild breeze, avoiding midday sun and peak crowds",
        "Public lawns, trails, and lake landscapes are completely free to explore",
        "The lawn area is vast, comfortable light shoes are recommended for long walks",
        "Care for the natural environment, do not litter, and do not trample vegetation"
      ]
    },
    alsoKnownAs: {
      title: "Park Features",
      items: [
        "Warsaw's largest and most representative urban public green space",
        "An important landmark of the Polish capital's modern urban planning",
        "Witness to Warsaw's post-war reconstruction and urban ecological upgrade",
        "An important carrier of local cultural life and urban memory"
      ]
    }
  },
  pl: {
    visitGuide: {
      title: "Wskazówki dla odwiedzających",
      items: [
        "Zaleca się wizytę wczesnym rankiem lub wieczorem, aby uniknąć słońca w południe i tłumów",
        "Publiczne trawniki, ścieżki i krajobrazy nad jeziorem są całkowicie darmowe",
        "Teren trawników jest ogromny, wygodne lekkie buty są zalecane na długie spacery",
        "Dbaj o środowisko naturalne, nie śmieć i nie niszcz roślinności"
      ]
    },
    alsoKnownAs: {
      title: "Cechy parku",
      items: [
        "Największa i najbardziej reprezentatyjna miejska przestrzeń zielona w Warszawie",
        "Ważny punkt orientacyjny nowoczesnego planowania urbanistycznego stolicy Polski",
        "Świadek powojennej odbudowy Warszawy i miejskiej modernizacji ekologicznej",
        "Ważny nośnik lokalnego życia kulturalnego i pamięci miasta"
      ]
    }
  },
  ru: {
    visitGuide: {
      title: "Советы туристам",
      items: [
        "Рекомендуется посещать ранним утром или вечером, чтобы избежать полуденного солнца и толп",
        "Общественные газоны, тропы и ландшафты у озера совершенно бесплатны для изучения",
        "Площадь газонов огромна, для долгих прогулок рекомендуется удобная легкая обувь",
        "Берегите природную среду, не мусорите и не топчите растения"
      ]
    },
    alsoKnownAs: {
      title: "Особенности парка",
      items: [
        "Самое большое и репрезентативное городское общественное зеленое пространство Варшавы",
        "Важная достопримечательность современного городского планирования польской столицы",
        "Свидетель послевоенного восстановления Варшавы и городской экологической модернизации",
        "Важный носитель местной культурной жизни и памяти города"
      ]
    }
  },
  de: {
    visitGuide: {
      title: "Reisetipps",
      items: [
        "Es wird empfohlen, am frühen Morgen oder Abend zu besuchen, um die Mittagssonne und Menschenmassen zu vermeiden",
        "Öffentliche Rasenflächen, Wege und Seenlandschaften sind völlig kostenlos",
        "Die Rasenfläche ist riesig, bequeme leichte Schuhe werden für lange Spaziergänge empfohlen",
        "Achten Sie auf die natürliche Umgebung, werfen Sie keinen Müll weg und zertrampeln Sie keine Vegetation"
      ]
    },
    alsoKnownAs: {
      title: "Parkmerkmale",
      items: [
        "Warschaus größter und repräsentativster städtischer öffentlicher Grünraum",
        "Ein wichtiges Wahrzeichen der modernen Stadtplanung der polnischen Hauptstadt",
        "Zeuge des Wiederaufbaus und der städtischen ökologischen Aufwertung Warschaus nach dem Krieg",
        "Ein wichtiger Träger des lokalen kulturellen Lebens und des städtischen Gedächtnisses"
      ]
    }
  }
};

['en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  content.intro.visitGuide = introData[lang].visitGuide;
  content.intro.alsoKnownAs = introData[lang].alsoKnownAs;
  
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log(`Updated intro additions for ${lang}`);
});
