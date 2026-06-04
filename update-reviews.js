const fs = require('fs');
const path = require('path');

const reviews = {
  zh: [
    { author: "Michał K.", rating: 5, date: "2周前", text: "华沙市中心最棒的公园！周末带孩子和狗狗来这里野餐简直太完美了。绿地面积非常大，完全不会觉得拥挤。最近公园重新修整了湖区，风景更漂亮了。" },
    { author: "Anna S.", rating: 5, date: "1个月前", text: "我每天早上都会来这里跑步。四季的景色都很美，特别是秋天树叶变黄的时候。公园里有很多供人休息的长椅，也有很好的自行车道。强烈推荐给喜欢自然的人。" },
    { author: "David W.", rating: 4, date: "3个月前", text: "一个巨大的城市绿肺。交通非常方便，地铁站出来走几步就到了。唯一的缺点是周末下午人真的很多，有些受欢迎的草坪区域很难找到空位。不过整体来说是个非常适合放松的地方。" },
    { author: "Piotr M.", rating: 5, date: "2个月前", text: "非常棒的休闲场所！这里有专门的狗狗游乐区，还有很多可以供人们烧烤和野餐的区域。新修的池塘很漂亮，夏天的时候特别清爽。" },
    { author: "Kasia J.", rating: 5, date: "3周前", text: "简直是华沙的中央公园。天气好的时候大家都喜欢来这里。滑板、自行车、轮滑爱好者都能在这里找到乐趣。强烈推荐大家去里面的几家小餐馆喝杯啤酒。" },
    { author: "Tomasz L.", rating: 4, date: "5个月前", text: "对于家庭出游来说是一个很好的选择。儿童游乐设施很新很安全。只是有时候停车位不太好找，建议大家尽量乘坐公共交通过来。" },
    { author: "Elena R.", rating: 5, date: "半年前", text: "作为在华沙生活的外国人，这是我最喜欢的周末去处。有大片的草坪可以躺着看书，非常惬意。整个公园的维护和绿化都做得非常棒。" },
    { author: "Krzysztof B.", rating: 5, date: "1周前", text: "改造后的莫科托夫斯基原野令人惊叹。移除了旧的混凝土水池，换成了自然生态湖泊，现在有更多的小动物和鸟类了，这是城市规划的绝佳典范。" }
  ],
  en: [
    { author: "Michał K.", rating: 5, date: "2 weeks ago", text: "The best park in central Warsaw! Weekend picnics here with kids and dogs are just perfect. Huge green areas so it never feels too crowded. The recently renovated lake area looks beautiful." },
    { author: "Anna S.", rating: 5, date: "1 month ago", text: "I come here for a run every morning. The scenery is beautiful in all seasons, especially in autumn when leaves turn yellow. Plenty of benches to rest and great bike paths. Highly recommended." },
    { author: "David W.", rating: 4, date: "3 months ago", text: "A massive green lung for the city. Very easy to reach by metro. The only downside is it gets really crowded on weekend afternoons, hard to find an empty spot on popular lawns. Still a great place to relax." },
    { author: "Piotr M.", rating: 5, date: "2 months ago", text: "Great place for recreation! There's a dedicated dog park and many areas for BBQ and picnics. The newly built ponds are very pretty and refreshing in summer." },
    { author: "Kasia J.", rating: 5, date: "3 weeks ago", text: "It's basically Warsaw's Central Park. Everyone loves coming here when the weather is good. Skaters, cyclists, and rollerbladers can all find their fun. Highly recommend grabbing a beer at one of the small pubs inside." },
    { author: "Tomasz L.", rating: 4, date: "5 months ago", text: "A very good choice for family outings. The children's playgrounds are new and safe. Just sometimes hard to find a parking spot, so I suggest using public transport." },
    { author: "Elena R.", rating: 5, date: "6 months ago", text: "As a foreigner living in Warsaw, this is my favorite weekend spot. Large lawns to just lie down and read a book, very relaxing. The maintenance and landscaping of the whole park are excellent." },
    { author: "Krzysztof B.", rating: 5, date: "1 week ago", text: "The revitalized Pole Mokotowskie is amazing. Removing the old concrete pools and replacing them with a natural ecological lake brought more animals and birds. A brilliant example of urban planning." }
  ],
  pl: [
    { author: "Michał K.", rating: 5, date: "2 tygodnie temu", text: "Najlepszy park w centrum Warszawy! Weekendowe pikniki z dziećmi i psami są tu po prostu idealne. Ogromne tereny zielone, więc nigdy nie czuje się tu tłoku. Niedawno odnowiony obszar z jeziorem wygląda pięknie." },
    { author: "Anna S.", rating: 5, date: "miesiąc temu", text: "Przychodzę tu codziennie rano biegać. Krajobrazy są piękne o każdej porze roku, szczególnie jesienią. Dużo ławek do odpoczynku i świetne ścieżki rowerowe. Gorąco polecam." },
    { author: "David W.", rating: 4, date: "3 miesiące temu", text: "Ogromne zielone płuco miasta. Bardzo łatwy dojazd metrem. Jedynym minusem są tłumy w weekendowe popołudnia, ciężko znaleźć wolne miejsce na popularnych trawnikach. Ale to wciąż świetne miejsce na relaks." },
    { author: "Piotr M.", rating: 5, date: "2 miesiące temu", text: "Świetne miejsce na rekreację! Jest specjalny wybieg dla psów i wiele miejsc na grilla i piknik. Nowo wybudowane stawy są bardzo ładne i orzeźwiające latem." },
    { author: "Kasia J.", rating: 5, date: "3 tygodnie temu", text: "To w zasadzie warszawski Central Park. Wszyscy lubią tu przychodzić, gdy jest ładna pogoda. Rolkarze, rowerzyści mogą tu znaleźć coś dla siebie. Bardzo polecam napić się piwa w jednej z małych knajpek wewnątrz." },
    { author: "Tomasz L.", rating: 4, date: "5 miesięcy temu", text: "Bardzo dobry wybór na rodzinne wyjścia. Place zabaw dla dzieci są nowe i bezpieczne. Tylko czasami trudno znaleźć miejsce parkingowe, więc sugeruję korzystanie z transportu publicznego." },
    { author: "Elena R.", rating: 5, date: "pół roku temu", text: "Jako obcokrajowiec mieszkający w Warszawie, to moje ulubione miejsce na weekend. Duże trawniki, żeby po prostu położyć się i poczytać książkę, bardzo relaksujące. Utrzymanie i architektura krajobrazu całego parku są doskonałe." },
    { author: "Krzysztof B.", rating: 5, date: "tydzień temu", text: "Zrewitalizowane Pole Mokotowskie jest niesamowite. Usunięcie starych betonowych basenów i zastąpienie ich naturalnym jeziorem ekologicznym przyciągnęło więcej zwierząt i ptaków. Genialny przykład planowania przestrzennego." }
  ],
  ru: [
    { author: "Michał K.", rating: 5, date: "2 недели назад", text: "Лучший парк в центре Варшавы! Пикники на выходных с детьми и собаками здесь просто идеальны. Огромные зеленые территории, поэтому никогда не бывает слишком тесно. Недавно отремонтированная зона озера выглядит красиво." },
    { author: "Anna S.", rating: 5, date: "месяц назад", text: "Я прихожу сюда на пробежку каждое утро. Пейзажи красивы во все времена года, особенно осенью. Много скамеек для отдыха и отличные велосипедные дорожки. Очень рекомендую." },
    { author: "David W.", rating: 4, date: "3 месяца назад", text: "Огромные зеленые легкие города. Очень легко добраться на метро. Единственный минус - в выходные дни очень многолюдно. Тем не менее, отличное место для отдыха." },
    { author: "Piotr M.", rating: 5, date: "2 месяца назад", text: "Отличное место для отдыха! Есть специальная площадка для собак и много мест для барбекю и пикников. Недавно построенные пруды очень красивые и освежающие летом." },
    { author: "Kasia J.", rating: 5, date: "3 недели назад", text: "По сути, это Центральный парк Варшавы. Все любят приходить сюда в хорошую погоду. Скейтеры, велосипедисты и роллеры найдут здесь развлечение по душе. Очень рекомендую выпить пива в одном из небольших пабов." },
    { author: "Tomasz L.", rating: 4, date: "5 месяцев назад", text: "Очень хороший выбор для семейных прогулок. Детские площадки новые и безопасные. Иногда трудно найти парковочное место, поэтому я предлагаю использовать общественный транспорт." },
    { author: "Elena R.", rating: 5, date: "полгода назад", text: "Как иностранец, живущий в Варшаве, это мое любимое место для выходных. Большие газоны, где можно просто полежать и почитать книгу, очень расслабляет. Уход и ландшафтный дизайн всего парка превосходны." },
    { author: "Krzysztof B.", rating: 5, date: "неделю назад", text: "Обновленное Поле Мокотовское удивительно. Удаление старых бетонных бассейнов и замена их естественным экологическим озером привлекло больше животных и птиц. Блестящий пример городского планирования." }
  ],
  de: [
    { author: "Michał K.", rating: 5, date: "vor 2 Wochen", text: "Der beste Park im Zentrum Warschaus! Wochenendpicknicks hier mit Kindern und Hunden sind einfach perfekt. Riesige Grünflächen, so dass es sich nie zu überfüllt anfühlt. Der kürzlich renovierte Seebereich sieht wunderschön aus." },
    { author: "Anna S.", rating: 5, date: "vor 1 Monat", text: "Ich komme jeden Morgen hierher zum Laufen. Die Landschaft ist zu allen Jahreszeiten schön, besonders im Herbst. Viele Bänke zum Ausruhen und tolle Radwege. Sehr zu empfehlen." },
    { author: "David W.", rating: 4, date: "vor 3 Monaten", text: "Eine massive grüne Lunge für die Stadt. Sehr einfach mit der U-Bahn zu erreichen. Der einzige Nachteil ist, dass es an Wochenendnachmittagen sehr voll wird. Trotzdem ein toller Ort zum Entspannen." },
    { author: "Piotr M.", rating: 5, date: "vor 2 Monaten", text: "Toller Ort für Erholung! Es gibt einen eigenen Hundepark und viele Bereiche für Grillen und Picknicks. Die neu gebauten Teiche sind sehr hübsch und im Sommer erfrischend." },
    { author: "Kasia J.", rating: 5, date: "vor 3 Wochen", text: "Es ist im Grunde der Central Park von Warschau. Jeder liebt es, hierher zu kommen, wenn das Wetter gut ist. Skater, Radfahrer und Inlineskater finden hier alle ihren Spaß. Sehr zu empfehlen." },
    { author: "Tomasz L.", rating: 4, date: "vor 5 Monaten", text: "Eine sehr gute Wahl für Familienausflüge. Die Kinderspielplätze sind neu und sicher. Nur manchmal ist es schwer, einen Parkplatz zu finden, daher empfehle ich die öffentlichen Verkehrsmittel." },
    { author: "Elena R.", rating: 5, date: "vor 6 Monaten", text: "Als Ausländerin, die in Warschau lebt, ist dies mein Lieblingsort für das Wochenende. Große Rasenflächen, um einfach zu liegen und ein Buch zu lesen, sehr entspannend. Die Pflege des gesamten Parks ist hervorragend." },
    { author: "Krzysztof B.", rating: 5, date: "vor 1 Woche", text: "Das revitalisierte Pole Mokotowskie ist erstaunlich. Das Entfernen der alten Betonbecken und der Ersatz durch einen natürlichen ökologischen See brachte mehr Tiere und Vögel. Ein brillantes Beispiel für Stadtplanung." }
  ]
};

const viewMoreText = {
  zh: "在 Google Maps 查看更多评价",
  en: "View more reviews on Google Maps",
  pl: "Zobacz więcej opinii w Google Maps",
  ru: "Смотреть больше отзывов на Google Картах",
  de: "Weitere Bewertungen auf Google Maps ansehen"
};

['zh', 'en', 'pl', 'ru', 'de'].forEach(lang => {
  const p = path.join('src', 'messages', `${lang}.json`);
  let content = JSON.parse(fs.readFileSync(p, 'utf8'));
  content.reviews.items = reviews[lang];
  content.reviews.viewMore = viewMoreText[lang];
  fs.writeFileSync(p, JSON.stringify(content, null, 2));
  console.log('Updated ' + lang);
});