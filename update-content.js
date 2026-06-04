const fs = require('fs');
const path = require('path');

const photoSpotsData = {
  zh: {
    title: "拍照机位",
    spots: [
      { name: "林荫大道", desc: "两侧高大树木，早晨阳光穿透树叶，非常适合拍摄小清新散步照" },
      { name: "中央大草坪", desc: "开阔的绿色草坪，以蓝天白云或城市天际线为背景，适合拍摄野餐和奔跑的画面" },
      { name: "生态湖泊", desc: "平静的湖面可以拍到周边树木和天空的倒影，水鸟游过增添灵动感" },
      { name: "纪念广场雕塑", desc: "充满历史厚重感的雕塑，与现代公园形成对比，适合人文街拍" },
      { name: "宠物游乐区", desc: "抓拍狗狗们自由奔跑和社交的欢乐瞬间" }
    ],
    tips: "拍照补充说明",
    tipsContent: "华沙光线柔和，清晨或傍晚的“黄金时刻”最适合拍摄；公园内绿植丰富，建议穿着浅色或亮色系衣物，能与环境形成更好对比；拍摄野生动物和水鸟时请保持安全距离，不要惊扰它们。"
  },
  en: {
    title: "Photo Spots",
    spots: [
      { name: "Tree-lined Avenues", desc: "Tall trees on both sides, morning sunlight piercing through leaves, perfect for fresh walking shots" },
      { name: "Central Great Lawn", desc: "Open green lawns with blue sky or city skyline as background, great for picnic and running shots" },
      { name: "Eco Lake", desc: "Calm water reflecting surrounding trees and sky, waterfowls adding a lively touch" },
      { name: "Memorial Plaza Sculptures", desc: "Sculptures full of history contrasting with the modern park, suitable for street photography" },
      { name: "Pet Play Area", desc: "Capture joyful moments of dogs running freely and socializing" }
    ],
    tips: "Photography Tips",
    tipsContent: "Warsaw's light is soft, making the 'golden hours' in early morning or late afternoon the best time for shooting. The park is rich in greenery, so wearing light or bright-colored clothing creates a better contrast. Please keep a safe distance when photographing wildlife and waterfowls."
  },
  pl: {
    title: "Miejsca na zdjęcia",
    spots: [
      { name: "Aleje wysadzane drzewami", desc: "Wysokie drzewa po obu stronach, poranne światło słoneczne przebijające przez liście, idealne na świeże ujęcia ze spaceru" },
      { name: "Centralny Wielki Trawnik", desc: "Otwarte zielone trawniki z błękitnym niebem lub panoramą miasta w tle, idealne na piknik i ujęcia w biegu" },
      { name: "Jezioro ekologiczne", desc: "Spokojna woda odbijająca okoliczne drzewa i niebo, ptactwo wodne dodające ożywienia" },
      { name: "Rzeźby na Placu Pamięci", desc: "Rzeźby pełne historii kontrastujące z nowoczesnym parkiem, odpowiednie do fotografii ulicznej" },
      { name: "Strefa zabaw dla zwierząt", desc: "Uchwyć radosne chwile psów swobodnie biegających i bawiących się ze sobą" }
    ],
    tips: "Wskazówki fotograficzne",
    tipsContent: "Światło w Warszawie jest miękkie, dzięki czemu 'złote godziny' wczesnym rankiem lub późnym popołudniem to najlepszy czas na robienie zdjęć. Park jest bogaty w zieleń, dlatego noszenie jasnych ubrań tworzy lepszy kontrast. Prosimy o zachowanie bezpiecznej odległości podczas fotografowania dzikiej przyrody."
  },
  ru: {
    title: "Места для фото",
    spots: [
      { name: "Тенистые аллеи", desc: "Высокие деревья по обеим сторонам, утренние солнечные лучи пробиваются сквозь листву, идеально для свежих снимков" },
      { name: "Центральный большой газон", desc: "Открытые зеленые лужайки на фоне голубого неба или городского пейзажа, отлично подходят для пикников" },
      { name: "Эко-озеро", desc: "Спокойная вода отражает окружающие деревья и небо, водоплавающие птицы добавляют оживления" },
      { name: "Скульптуры на площади Памяти", desc: "Скульптуры, полные истории, контрастирующие с современным парком, подходят для уличной фотографии" },
      { name: "Зона для игр с животными", desc: "Снимайте радостные моменты, когда собаки свободно бегают и играют" }
    ],
    tips: "Советы по фотосъемке",
    tipsContent: "Свет в Варшаве мягкий, что делает 'золотые часы' ранним утром или поздним вечером лучшим временем для съемки. В парке много зелени, поэтому одежда светлых или ярких тонов создает лучший контраст. Пожалуйста, соблюдайте безопасную дистанцию при фотографировании диких животных."
  },
  de: {
    title: "Fotospots",
    spots: [
      { name: "Baumgesäumte Alleen", desc: "Hohe Bäume auf beiden Seiten, morgendliches Sonnenlicht durchdringt die Blätter, perfekt für frische Spaziergangsfotos" },
      { name: "Zentraler großer Rasen", desc: "Offene grüne Rasenflächen mit blauem Himmel oder Stadtsilhouette im Hintergrund, toll für Picknick- und Laufaufnahmen" },
      { name: "Öko-See", desc: "Ruhiges Wasser, das die umliegenden Bäume und den Himmel widerspiegelt, Wasservögel sorgen für Lebendigkeit" },
      { name: "Skulpturen am Gedenkplatz", desc: "Geschichtsträchtige Skulpturen im Kontrast zum modernen Park, geeignet für Straßenfotografie" },
      { name: "Hundespielplatz", desc: "Fangen Sie freudige Momente von frei laufenden und spielenden Hunden ein" }
    ],
    tips: "Fotografie-Tipps",
    tipsContent: "Das Licht in Warschau ist weich, was die 'goldenen Stunden' am frühen Morgen oder späten Nachmittag zur besten Zeit für Aufnahmen macht. Der Park ist reich an Grün, so dass helle oder farbenfrohe Kleidung einen besseren Kontrast bietet. Bitte halten Sie beim Fotografieren von Wildtieren einen sicheren Abstand ein."
  }
};

const hotelsData = {
  zh: {
    title: "住宿建议",
    hotels: [
      { name: "华沙市中心高端酒店", desc: "距离公园仅几站地铁，周边商业繁华，适合追求高品质住宿体验的游客", price: "价格因季节浮动" },
      { name: "莫科托夫区精品公寓", desc: "紧邻公园，步行即可入园晨跑，生活气息浓厚，周边有许多特色咖啡馆", price: "价格因季节浮动" },
      { name: "华沙中央火车站周边住宿", desc: "交通极其便利，适合短途停留或需乘坐火车前往其他城市的旅客", price: "价格因季节浮动" },
      { name: "肖邦机场附近快捷酒店", desc: "适合早晚航班过境旅客，乘坐公共交通半小时内可直达公园", price: "价格因季节浮动" }
    ],
    supplements: "住宿补充说明",
    supplementsContent: "华沙夏季气候宜人，但早晚可能有温差，建议备件薄外套；公园周边的莫科托夫区（Mokotów）治安良好，是华沙非常受欢迎的居住区；如果喜欢安静，建议选择不临街的房型；旺季（夏季和节假日）建议提前预订。"
  },
  en: {
    title: "Accommodation",
    hotels: [
      { name: "Downtown Warsaw Premium Hotels", desc: "Just a few metro stops from the park, bustling commercial area, perfect for high-quality stays", price: "Prices vary by season" },
      { name: "Mokotów Boutique Apartments", desc: "Right next to the park, walking distance for morning runs, great local vibe with many cafes", price: "Prices vary by season" },
      { name: "Warsaw Central Station Area", desc: "Extremely convenient transport, suitable for short stays or travelers needing to catch trains", price: "Prices vary by season" },
      { name: "Chopin Airport Transit Hotels", desc: "Ideal for early/late flights, direct public transport to the park within half an hour", price: "Prices vary by season" }
    ],
    supplements: "Accommodation Notes",
    supplementsContent: "Warsaw's summer is pleasant, but there can be a temperature difference between morning and evening, so a light jacket is recommended. The Mokotów district around the park is very safe and popular. If you prefer quiet, choose rooms not facing the street. Booking in advance is recommended during peak seasons."
  },
  pl: {
    title: "Zakwaterowanie",
    hotels: [
      { name: "Hotele premium w centrum Warszawy", desc: "Zaledwie kilka stacji metra od parku, tętniąca życiem okolica handlowa, idealne na pobyt wysokiej jakości", price: "Ceny zależą od sezonu" },
      { name: "Apartamenty butikowe na Mokotowie", desc: "Tuż przy parku, w odległości krótkiego spaceru na poranny bieg, świetny lokalny klimat z wieloma kawiarniami", price: "Ceny zależą od sezonu" },
      { name: "Okolice Dworca Centralnego", desc: "Niezwykle dogodny transport, odpowiedni na krótkie pobyty lub dla podróżnych łapiących pociągi", price: "Ceny zależą od sezonu" },
      { name: "Hotele tranzytowe przy Lotnisku Chopina", desc: "Idealne w przypadku wczesnych/późnych lotów, bezpośredni dojazd transportem publicznym do parku w pół godziny", price: "Ceny zależą od sezonu" }
    ],
    supplements: "Uwagi do zakwaterowania",
    supplementsContent: "Lato w Warszawie jest przyjemne, ale rano i wieczorem może wystąpić różnica temperatur, dlatego zaleca się lekką kurtkę. Dzielnica Mokotów wokół parku jest bardzo bezpieczna i popularna. Jeśli wolisz ciszę, wybierz pokoje niewychodzące na ulicę. W szczycie sezonu zaleca się rezerwację z wyprzedzeniem."
  },
  ru: {
    title: "Размещение",
    hotels: [
      { name: "Отели премиум-класса в центре Варшавы", desc: "Всего в нескольких остановках метро от парка, оживленный торговый район, идеально подходит для качественного отдыха", price: "Цены варьируются в зависимости от сезона" },
      { name: "Бутик-апартаменты в Мокотове", desc: "Прямо рядом с парком, в нескольких минутах ходьбы для утренних пробежек, отличная местная атмосфера со множеством кафе", price: "Цены варьируются в зависимости от сезона" },
      { name: "Район Центрального вокзала Варшавы", desc: "Чрезвычайно удобный транспорт, подходит для короткого пребывания или для тех, кому нужно сесть на поезд", price: "Цены варьируются в зависимости от сезона" },
      { name: "Транзитные отели аэропорта Шопена", desc: "Идеально подходит для ранних/поздних рейсов, прямой общественный транспорт до парка за полчаса", price: "Цены варьируются в зависимости от сезона" }
    ],
    supplements: "Примечания по размещению",
    supplementsContent: "Лето в Варшаве приятное, но между утром и вечером может быть разница температур, поэтому рекомендуется легкая куртка. Район Мокотов вокруг парка очень безопасен и популярен. Если вы предпочитаете тишину, выбирайте номера, окна которых не выходят на улицу. В пик сезона рекомендуется бронировать заранее."
  },
  de: {
    title: "Unterkünfte",
    hotels: [
      { name: "Premium-Hotels in der Warschauer Innenstadt", desc: "Nur wenige U-Bahn-Stationen vom Park entfernt, belebtes Geschäftsviertel, perfekt für hochwertige Aufenthalte", price: "Preise variieren je nach Saison" },
      { name: "Boutique-Apartments in Mokotów", desc: "Direkt neben dem Park, zu Fuß erreichbar für morgendliche Läufe, tolle lokale Atmosphäre mit vielen Cafés", price: "Preise variieren je nach Saison" },
      { name: "Bereich Warschau Hauptbahnhof", desc: "Extrem bequemer Transport, geeignet für Kurzaufenthalte oder Reisende, die Züge nehmen müssen", price: "Preise variieren je nach Saison" },
      { name: "Transithotels am Chopin-Flughafen", desc: "Ideal für frühe/späte Flüge, direkte öffentliche Verkehrsmittel zum Park in einer halben Stunde", price: "Preise variieren je nach Saison" }
    ],
    supplements: "Hinweise zur Unterkunft",
    supplementsContent: "Der Sommer in Warschau ist angenehm, aber es kann einen Temperaturunterschied zwischen Morgen und Abend geben, daher wird eine leichte Jacke empfohlen. Das Viertel Mokotów rund um den Park ist sehr sicher und beliebt. Wenn Sie es ruhig mögen, wählen Sie Zimmer, die nicht zur Straße zeigen. Eine frühzeitige Buchung wird in der Hochsaison empfohlen."
  }
};

['zh', 'en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  if (photoSpotsData[lang]) {
    content.photoSpots = photoSpotsData[lang];
  }
  if (hotelsData[lang]) {
    content.hotels = hotelsData[lang];
  }
  
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log(`Updated ${lang} photoSpots and hotels`);
});
