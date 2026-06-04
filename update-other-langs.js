const fs = require('fs');
const path = require('path');

const data = {
  en: {
    intro: {
      title: "Explore Pole Mokotowskie",
      description: "To be honest, stepping into Pole Mokotowskie for the first time, you will be instantly healed by this endless open green space. Unlike meticulously manicured gardens, this is Warsaw's unique relaxed wilderness. Large, flat lawns stretch into the distance, and the wind blows through the grass in gentle waves, clean and vast.\n\nI visited on a sunny afternoon; the air was crisp and clear, and distant city buildings loomed, perfectly accentuating the park's tranquility. The trail around the lake is lush with vegetation, the water surface is calm, and waterfowl occasionally swim by, adding a touch of liveliness.\n\nLocals are scattered around in twos and threes—some chatting on picnic mats, some jogging or cycling along the trails, and children running freely and flying kites on the open lawns. There are no crowded tourists, no commercial noise, only the peace and ease of everyday life.\n\nThe most moving quality here is the perfect balance between city and nature. Being in the bustling downtown area, yet having a wilderness away from the noise. Above is the complete sky, below is the soft grass. You can sit anywhere, empty your mind, and let time flow slowly."
    },
    knowledge: {
      title: "Discover the Charm of Pole Mokotowskie",
      sections: [
        {
          id: "history",
          title: "A Century of History",
          content: "The land of Pole Mokotowskie has a long history. Originally an empty wasteland and buffer green space on the outskirts of the city, it was incorporated into the city's overall planning as Warsaw expanded. After World War II, Warsaw underwent massive reconstruction, and the city urgently needed large public green spaces to relieve the urban pace. This wilderness was officially transformed into a public city park.\n\nIn the early stages of construction, basic greening and simple trails were the main focus, emphasizing the open, original landscape and retaining the site's wild texture. Following several rounds of light upgrades, lakes, leisure facilities, sports grounds, and memorial landscapes were added, gradually perfecting its functions and becoming a comprehensive urban leisure green space.\n\nOver the centuries, this land has evolved from suburban wasteland to an ecological barrier for post-war urban restoration, and now to a city living room shared by all. It has witnessed the breaking and rebirth of Warsaw, carries the daily memories of generations of locals, and stands quietly in the center of the city, embracing the fireworks and stories of the entire city with vast greenery."
        },
        {
          id: "architecture",
          title: "Architectural Features",
          content: "Dominated by vast, endless native lawns, complemented by artificial lakes, tree-lined trails, landscape groves, and small rest plazas. The site is open and spacious with a transparent view. Minimalist memorial installations, leisure sculptures, and a lakeside boardwalk are distributed throughout the park, gently integrating natural landscapes with urban public facilities.\n\nWith a modern urban ecological planning style, it discards complex landscaping in favor of simplicity and nature. Large open wilderness paired with linear tree-lined avenues creates a relaxed and transparent layout, combining practical leisure attributes with natural wildness."
        },
        {
          id: "culture",
          title: "Cultural Value",
          content: "It is the core venue for Warsaw citizens' daily relaxation, sports, picnics, and festival activities, carrying the local relaxed urban life culture. Open-air markets, outdoor performances, public welfare activities, and sports events are frequently held here, serving as an important manifestation of Warsaw's urban vitality and inclusive atmosphere.\n\nAs a super-large green space in the center of the city, it is not only the first choice for citizens' daily leisure but also an important part of Warsaw's urban identity. Every weekend and holiday, it becomes a popular place for local family and friend gatherings."
        },
        {
          id: "experience",
          title: "Core Experience",
          content: "Enter the park in the early morning, walk slowly along the tree-lined trails, breathe the fresh air, and feel the rare quiet moment in the city. In the afternoon, spread out a picnic mat on the lawn, chat and daydream with friends, and watch children chasing and playing on the grass. At dusk, stroll along the lakeside boardwalk, admire the city skyline reflected on the lake, and watch the sunset plate the entire wilderness in warm golden tones.\n\nThere is no need to deliberately arrange anything; the best experience here is to slow down, wander casually, and let the fatigue of city life slowly dissipate in this green wilderness."
        }
      ]
    },
    hours: {
      title: "Opening Hours",
      outdoor: "Entire Park",
      outdoorTime: "Open all day, all year round, no closure limits",
      restrooms: "Public Rest Areas",
      restroomsTime: "Accessible all day",
      trails: "Trails and Lawns",
      trailsTime: "Open 24/7",
      tip: "Recommended to visit in the early morning or evening for soft light and mild breezes, avoiding midday sun and peak crowds."
    },
    tickets: {
      title: "Ticket Prices",
      outdoor: "Outdoor Lawns and Trails",
      outdoorPrice: "Completely free, no entry fee",
      lake: "Lake Landscape Area",
      lakePrice: "Free admission, explore freely",
      plaza: "Leisure Plazas",
      plazaPrice: "Free admission",
      activities: "Temporary Amusement Projects",
      activitiesPrice: "Seasonal activities require separate payment",
      card: "Warsaw Public Transport Ticket",
      cardPrice: "Recommended to buy a Warsaw public transport day ticket, suitable for visiting multiple attractions."
    },
    transport: {
      title: "Transportation",
      airport: "From Warsaw Chopin Airport",
      airportDesc: "Take the SKM (urban rapid rail) or bus lines directly to the city center, then transfer to a short-distance tram or bus to reach the park in about 30 minutes. Taxis and ride-hailing are convenient, especially with luggage.",
      train: "From Warsaw Central Station",
      trainDesc: "Take a city tram, metro, or short-distance bus, and you can reach the park entrance in 15 minutes. Public transport is frequent and transfers are easy.",
      city: "From Core Attractions",
      cityDesc: "From the Old Town or Palace of Culture and Science, take cross-district buses for an easy round trip. Also suitable for long-distance walking and city cycling.",
      public: "Surrounding Public Transport",
      publicDesc: "The park is surrounded by bus and tram stops, making commuting within the city very convenient. A Warsaw public transport day ticket is recommended.",
      tips: "Travel Tips",
      tipsDesc: "Parking around the park is limited, so public transport is preferred. Warsaw is generally safe, and daily travel is secure."
    },
    route: {
      title: "Tour Route",
      overview: "Recommended to enter in the early morning or evening from the main entrance. Walk slowly along the tree-lined avenues, pass the lakeside landscape belt, and enjoy the water and greenery. Cross the central great lawn to feel the wilderness view, check in at the minimalist memorials and leisure plazas, and finally sit and rest at the edge of the lawn. The whole pace is relaxed, taking about 1.5 hours purely walking, or half a day for slow strolling, photography, and relaxing.",
      steps: [
        "Get off at the public transport stop, walk to the park's main entrance, and enter the wide tree-lined main road.",
        "Walk slowly along the tree-lined trail, enjoying the trees and lush greenery along the way, and breathe the fresh air.",
        "Walk around the artificial lake boardwalk, closely observe the water landscape and resting waterfowl, and take photos of the waterfront scenery.",
        "Cross the central open great lawn, experience the endless wilderness view, and feel the pure natural atmosphere.",
        "Head to the park's small memorial areas and art installations to understand the site's cultural background and urban imprint.",
        "Wander through niche forest paths, avoid the crowds, and experience quiet and private natural corners.",
        "Stop and rest in the flat areas of the lawn, experiencing the daily atmosphere of locals picnicking and relaxing.",
        "Slowly return along the outer trails, enjoying the unique scenery where the city skyline blends with the green space."
      ],
      supplements: [
        "The park's lawns are vast, so comfortable and light shoes are recommended for long walks.",
        "The grass can be wet and muddy after rain, so check the weather before going.",
        "Care for the natural environment, do not litter, and do not trample or damage vegetation.",
        "There is no mandatory clearance at night; the lighting is simple and soft, suitable for quiet walks, but walking with a companion is recommended."
      ]
    }
  },
  pl: {
    intro: {
      title: "Odkryj Pole Mokotowskie",
      description: "Szczerze mówiąc, wchodząc na Pole Mokotowskie po raz pierwszy, zostaniesz natychmiast uleczony przez tę bezkresną otwartą zieloną przestrzeń. W przeciwieństwie do starannie wypielęgnowanych ogrodów, jest to wyjątkowa zrelaksowana dzicz Warszawy. Duże, płaskie trawniki ciągną się w dal, a wiatr wieje przez trawę w delikatnych falach, czysto i przestronnie.\n\nOdwiedziłem to miejsce w słoneczne popołudnie; powietrze było rześkie i czyste, a w oddali majaczyły budynki miejskie, idealnie podkreślając spokój parku. Ścieżka wokół jeziora jest bujna od roślinności, powierzchnia wody jest spokojna, a ptactwo wodne czasami przepływa, dodając odrobinę życia.\n\nMiejscowi są rozsiani po dwie, trzy osoby - niektórzy rozmawiają na matach piknikowych, inni uprawiają jogging lub jeżdżą na rowerze wzdłuż ścieżek, a dzieci biegają swobodnie i puszczają latawce na otwartych trawnikach. Nie ma tu tłumów turystów, nie ma komercyjnego hałasu, jest tylko spokój i łatwość codziennego życia.\n\nNajbardziej poruszającą cechą jest tu idealna równowaga między miastem a naturą. Będąc w tętniącym życiem centrum miasta, a jednocześnie mając dzicz z dala od hałasu. W górze jest pełne niebo, w dole miękka trawa. Możesz usiąść gdziekolwiek, oczyścić umysł i pozwolić czasowi płynąć powoli."
    },
    knowledge: {
      title: "Odkryj urok Pola Mokotowskiego",
      sections: [
        {
          id: "history",
          title: "Wiek historii",
          content: "Teren Pola Mokotowskiego ma długą historię. Początkowo był to pusty nieużytek i buforowa przestrzeń zielona na obrzeżach miasta, ale wraz z rozbudową Warszawy został włączony do ogólnego planowania przestrzennego. Po II wojnie światowej Warszawa przeszła masową odbudowę, a miasto pilnie potrzebowało dużych publicznych terenów zielonych, aby złagodzić miejskie tempo. Ta dzicz została oficjalnie przekształcona w publiczny park miejski.\n\nWe wczesnych etapach budowy skupiono się na podstawowym zazielenieniu i prostych ścieżkach, podkreślając otwarty, oryginalny krajobraz i zachowując dziką teksturę miejsca. Po kilku rundach lekkich modernizacji dodano jeziora, obiekty rekreacyjne, boiska sportowe i krajobrazy pamięci, stopniowo doskonaląc jego funkcje i stając się kompleksową miejską zieloną przestrzenią rekreacyjną.\n\nPrzez wieki ta ziemia ewoluowała z podmiejskich nieużytków do bariery ekologicznej dla powojennej odbudowy miasta, a teraz do miejskiego salonu dzielonego przez wszystkich. Była świadkiem upadku i odrodzenia Warszawy, niesie codzienne wspomnienia pokoleń mieszkańców i stoi cicho w centrum miasta, obejmując rozległą zielenią historie całego miasta."
        },
        {
          id: "architecture",
          title: "Cechy architektoniczne",
          content: "Zdominowany przez rozległe, niekończące się rodzime trawniki, uzupełnione sztucznymi jeziorami, wysadzanymi drzewami ścieżkami, gajami krajobrazowymi i małymi placami wypoczynkowymi. Teren jest otwarty i przestronny, z przejrzystym widokiem. Minimalistyczne instalacje pamięci, rzeźby rekreacyjne i promenada nad jeziorem są rozmieszczone w całym parku, delikatnie integrując naturalne krajobrazy z miejskimi obiektami publicznymi.\n\nDzięki nowoczesnemu stylowi miejskiego planowania ekologicznego odrzuca skomplikowane kształtowanie krajobrazu na rzecz prostoty i natury. Duża otwarta dzicz w połączeniu z liniowymi alejami wysadzanymi drzewami tworzy zrelaksowany i przejrzysty układ, łącząc praktyczne atrybuty rekreacyjne z naturalną dzikością."
        },
        {
          id: "culture",
          title: "Wartość kulturowa",
          content: "Jest to główne miejsce codziennego relaksu, uprawiania sportu, pikników i imprez festiwalowych mieszkańców Warszawy, niosące ze sobą lokalną, zrelaksowaną kulturę życia miejskiego. Często odbywają się tu targi na świeżym powietrzu, występy plenerowe, akcje charytatywne i imprezy sportowe, co jest ważnym przejawem witalności miasta i integracyjnej atmosfery Warszawy.\n\nJako super duża przestrzeń zielona w centrum miasta, jest to nie tylko pierwszy wybór na codzienny wypoczynek obywateli, ale także ważna część tożsamości miejskiej Warszawy. W każdy weekend i święta staje się popularnym miejscem spotkań lokalnych rodzin i przyjaciół."
        },
        {
          id: "experience",
          title: "Kluczowe doświadczenie",
          content: "Wejdź do parku wczesnym rankiem, spaceruj powoli wysadzanymi drzewami ścieżkami, oddychaj świeżym powietrzem i poczuj rzadki w mieście moment ciszy. Po południu rozłóż matę piknikową na trawniku, porozmawiaj i pomarz ze znajomymi, a także popatrz na dzieci goniące się i bawiące na trawie. O zmierzchu wybierz się na spacer promenadą nad jeziorem, podziwiaj panoramę miasta odbijającą się w jeziorze i obserwuj zachód słońca, który pokrywa całą dzicz ciepłymi, złotymi tonami.\n\nNie trzeba niczego celowo organizować; najlepszym doświadczeniem jest zwolnienie tempa, swobodne wędrówki i pozwolenie, aby zmęczenie miejskim życiem powoli ulotniło się w tej zielonej dziczy."
        }
      ]
    },
    hours: {
      title: "Godziny otwarcia",
      outdoor: "Cały park",
      outdoorTime: "Otwarte cały dzień, przez cały rok",
      restrooms: "Publiczne miejsca odpoczynku",
      restroomsTime: "Dostępne cały dzień",
      trails: "Ścieżki i trawniki",
      trailsTime: "Otwarte 24/7",
      tip: "Zaleca się wizytę wczesnym rankiem lub wieczorem, unikając południowego słońca i tłumów."
    },
    tickets: {
      title: "Ceny biletów",
      outdoor: "Trawniki i ścieżki",
      outdoorPrice: "Całkowicie za darmo",
      lake: "Teren jeziora",
      lakePrice: "Wstęp wolny",
      plaza: "Place rekreacyjne",
      plazaPrice: "Wstęp wolny",
      activities: "Tymczasowe atrakcje",
      activitiesPrice: "Atrakcje sezonowe wymagają oddzielnej opłaty",
      card: "Bilet komunikacji miejskiej w Warszawie",
      cardPrice: "Zaleca się zakup biletu dobowego ZTM, odpowiedniego do zwiedzania wielu atrakcji."
    },
    transport: {
      title: "Transport",
      airport: "Z lotniska Chopina",
      airportDesc: "Wsiądź w pociąg SKM lub autobus bezpośrednio do centrum miasta, a następnie przesiądź się w tramwaj lub autobus, aby dotrzeć do parku w około 30 minut. Taksówki i Uber są wygodne z bagażem.",
      train: "Z Dworca Centralnego",
      trainDesc: "Wsiądź w tramwaj, metro lub autobus, a dotrzesz do wejścia do parku w 15 minut.",
      city: "Z głównych atrakcji",
      cityDesc: "Ze Starego Miasta lub Pałacu Kultury i Nauki jedź autobusem lub tramwajem. Park jest też dostępny pieszo lub rowerem miejskim Veturilo.",
      public: "Transport publiczny w okolicy",
      publicDesc: "Park jest otoczony przystankami autobusowymi i tramwajowymi oraz stacją metra Pole Mokotowskie. Zalecany jest bilet dobowy ZTM.",
      tips: "Wskazówki",
      tipsDesc: "Liczba miejsc parkingowych wokół parku jest ograniczona, preferowany jest transport publiczny. Okolica jest bezpieczna."
    },
    route: {
      title: "Trasa zwiedzania",
      overview: "Zaleca się wejście wczesnym rankiem lub wieczorem od głównego wejścia. Spaceruj powoli alejami wysadzanymi drzewami, mijaj pas krajobrazowy nad jeziorem i ciesz się wodą i zielenią. Przejdź przez centralny wielki trawnik, zamelduj się przy minimalistycznych pomnikach i placach rekreacyjnych, a na koniec usiądź i odpocznij na skraju trawnika.",
      steps: [
        "Wysiądź na przystanku komunikacji miejskiej i wejdź szeroką, wysadzaną drzewami główną drogą.",
        "Spaceruj powoli, ciesząc się drzewami i bujną zielenią po drodze.",
        "Przejdź się promenadą wokół sztucznego jeziora, obserwuj ptactwo wodne.",
        "Przejdź przez centralny, otwarty wielki trawnik i poczuj naturalną atmosferę.",
        "Udaj się do małych obszarów pamięci i instalacji artystycznych parku.",
        "Spaceruj niszowymi leśnymi ścieżkami, omijając tłumy.",
        "Zatrzymaj się i odpocznij na trawniku, doświadczając codziennej atmosfery piknikujących mieszkańców.",
        "Powoli wracaj zewnętrznymi ścieżkami, ciesząc się panoramą miasta."
      ],
      supplements: [
        "Trawniki w parku są ogromne, więc na długie spacery zalecane są wygodne buty.",
        "Trawa może być mokra po deszczu.",
        "Dbaj o środowisko naturalne, nie śmieć i nie niszcz roślinności.",
        "Park jest dostępny w nocy, oświetlenie jest łagodne, ale zaleca się spacery z osobą towarzyszącą."
      ]
    }
  },
  ru: {
    intro: {
      title: "Исследуйте Поле Мокотовское",
      description: "Честно говоря, оказавшись на Поле Мокотовском в первый раз, вы мгновенно исцелитесь этим бескрайним открытым зеленым пространством. В отличие от тщательно ухоженных садов, это уникальная расслабленная дикая природа Варшавы. Большие плоские лужайки тянутся вдаль, а ветер дует сквозь траву нежными волнами, чисто и просторно.\n\nЯ побывал здесь солнечным днем; воздух был свежим и чистым, а вдалеке виднелись городские здания, идеально подчеркивая спокойствие парка. Тропа вокруг озера утопает в зелени, поверхность воды спокойна, и водоплавающие птицы время от времени проплывают мимо, добавляя немного оживления.\n\nМестные жители рассредоточены по двое-трое - кто-то болтает на ковриках для пикника, кто-то бегает или катается на велосипеде по тропинкам, а дети свободно бегают и запускают воздушных змеев на открытых лужайках. Здесь нет толп туристов, нет коммерческого шума, только покой и легкость повседневной жизни.\n\nСамое трогательное здесь - идеальный баланс между городом и природой. Находясь в шумном центре города, но при этом имея дикую природу вдали от шума. Наверху - бескрайнее небо, внизу - мягкая трава. Вы можете сесть где угодно, освободить свой разум и позволить времени течь медленно."
    },
    knowledge: {
      title: "Откройте для себя очарование Поля Мокотовского",
      sections: [
        {
          id: "history",
          title: "Век истории",
          content: "Земля Поля Мокотовского имеет долгую историю. Изначально это был пустырь и буферная зеленая зона на окраине города, но по мере расширения Варшавы она была включена в общий план развития города. После Второй мировой войны Варшава подверглась масштабной реконструкции, и городу срочно понадобились большие общественные зеленые пространства. Эта территория была официально преобразована в общественный городской парк.\n\nНа ранних этапах строительства основное внимание уделялось базовому озеленению и простым тропам, с сохранением дикой текстуры места. После нескольких этапов модернизации были добавлены озера, зоны отдыха, спортивные площадки и мемориальные ландшафты.\n\nНа протяжении веков эта земля превратилась из пригородного пустыря в экологический барьер для послевоенного восстановления города, а теперь и в городскую гостиную. Она стала свидетелем разрушения и возрождения Варшавы и тихо стоит в центре города."
        },
        {
          id: "architecture",
          title: "Архитектурные особенности",
          content: "Преобладают огромные, бесконечные лужайки, дополненные искусственными озерами, обсаженными деревьями тропами, ландшафтными рощами и небольшими площадями для отдыха. Место открытое и просторное, с прозрачным видом. Минималистичные мемориальные инсталляции и набережная у озера мягко интегрируют природные ландшафты с городскими объектами.\n\nБлагодаря современному стилю городского экологического планирования, здесь отказались от сложного ландшафтного дизайна в пользу простоты и природы."
        },
        {
          id: "culture",
          title: "Культурная ценность",
          content: "Это главное место для ежедневного отдыха горожан Варшавы, занятий спортом, пикников и фестивальных мероприятий. Здесь часто проводятся рынки под открытым небом, выступления, благотворительные акции и спортивные мероприятия, что является важным проявлением городской жизненной силы Варшавы.\n\nКак сверхбольшое зеленое пространство в центре города, это не только первый выбор для ежедневного отдыха граждан, но и важная часть городской идентичности Варшавы."
        },
        {
          id: "experience",
          title: "Главный опыт",
          content: "Войдите в парк ранним утром, медленно прогуляйтесь по обсаженным деревьями тропинкам, подышите свежим воздухом и почувствуйте редкий момент тишины в городе. Днем расстелите коврик для пикника на лужайке, пообщайтесь с друзьями и посмотрите, как дети играют на траве. В сумерках прогуляйтесь по набережной у озера, полюбуйтесь панорамой города и посмотрите на закат.\n\nНет необходимости что-то специально организовывать; лучший опыт здесь - это замедлиться и позволить усталости от городской жизни раствориться в этой зеленой дикой природе."
        }
      ]
    },
    hours: {
      title: "Часы работы",
      outdoor: "Весь парк",
      outdoorTime: "Открыт весь день, круглый год",
      restrooms: "Зоны отдыха",
      restroomsTime: "Доступны весь день",
      trails: "Тропы и лужайки",
      trailsTime: "Открыты 24/7",
      tip: "Рекомендуется посещать ранним утром или вечером, чтобы избежать полуденного солнца и толп людей."
    },
    tickets: {
      title: "Цены на билеты",
      outdoor: "Лужайки и тропы",
      outdoorPrice: "Совершенно бесплатно",
      lake: "Зона озера",
      lakePrice: "Свободный вход",
      plaza: "Площади для отдыха",
      plazaPrice: "Свободный вход",
      activities: "Временные аттракционы",
      activitiesPrice: "Сезонные мероприятия оплачиваются отдельно",
      card: "Проездной билет Варшавы",
      cardPrice: "Рекомендуется купить дневной проездной на общественный транспорт Варшавы."
    },
    transport: {
      title: "Транспорт",
      airport: "Из аэропорта имени Шопена",
      airportDesc: "Сядьте на поезд SKM или автобус прямо до центра города, затем пересядьте на трамвай или автобус, чтобы добраться до парка примерно за 30 минут.",
      train: "С Центрального вокзала",
      trainDesc: "Сядьте на городской трамвай, метро или автобус, и вы сможете добраться до входа в парк за 15 минут.",
      city: "От главных достопримечательностей",
      cityDesc: "Из Старого города или Дворца культуры и науки сядьте на автобус. Также подходит для пеших прогулок и езды на велосипеде.",
      public: "Общественный транспорт",
      publicDesc: "Парк окружен автобусными и трамвайными остановками, рядом станция метро. Рекомендуется дневной проездной билет.",
      tips: "Советы для поездки",
      tipsDesc: "Парковка вокруг парка ограничена, поэтому предпочтительнее общественный транспорт. Район безопасный."
    },
    route: {
      title: "Маршрут",
      overview: "Рекомендуется войти ранним утром или вечером с главного входа. Медленно прогуляйтесь по обсаженным деревьями аллеям, пройдите мимо ландшафтного пояса у озера. Пересеките центральный большой газон, чтобы почувствовать вид на дикую природу, отметьтесь у мемориалов, и, наконец, посидите и отдохните на краю лужайки.",
      steps: [
        "Выйдите на остановке общественного транспорта и войдите на широкую главную дорогу.",
        "Медленно прогуляйтесь по тропе, наслаждаясь деревьями и пышной зеленью.",
        "Прогуляйтесь по набережной вокруг искусственного озера, понаблюдайте за водоплавающими птицами.",
        "Пересеките центральный большой газон и почувствуйте атмосферу чистой природы.",
        "Отправляйтесь к небольшим мемориальным зонам и арт-инсталляциям парка.",
        "Побродите по лесным тропинкам, избегая толпы.",
        "Остановитесь и отдохните на газоне, наблюдая за местными жителями на пикниках.",
        "Медленно возвращайтесь по внешним тропам, наслаждаясь панорамой города."
      ],
      supplements: [
        "Лужайки в парке обширны, поэтому для долгих прогулок рекомендуется удобная обувь.",
        "Трава может быть мокрой и грязной после дождя.",
        "Берегите природу, не мусорите и не топчите растения.",
        "Ночью парк открыт, освещение мягкое, но рекомендуется гулять с компаньоном."
      ]
    }
  },
  de: {
    intro: {
      title: "Entdecken Sie Pole Mokotowskie",
      description: "Ehrlich gesagt, wenn Sie Pole Mokotowskie zum ersten Mal betreten, werden Sie sofort von diesem endlosen, offenen Grünraum geheilt. Im Gegensatz zu sorgfältig gepflegten Gärten ist dies Warschaus einzigartige, entspannte Wildnis. Große, flache Rasenflächen erstrecken sich in die Ferne, und der Wind weht in sanften Wellen durch das Gras, sauber und weit.\n\nIch besuchte den Park an einem sonnigen Nachmittag; die Luft war frisch und klar, und in der Ferne zeichneten sich städtische Gebäude ab, die die Ruhe des Parks perfekt unterstrichen. Der Weg um den See ist üppig bewachsen, die Wasseroberfläche ist ruhig, und Wasservögel schwimmen gelegentlich vorbei und verleihen dem Ort einen Hauch von Lebendigkeit.\n\nEinheimische verteilen sich in Zweier- und Dreiergruppen - einige plaudern auf Picknickdecken, andere joggen oder radeln entlang der Wege, und Kinder rennen frei herum und lassen Drachen auf den offenen Rasenflächen steigen. Es gibt keine überfüllten Touristen, keinen kommerziellen Lärm, nur den Frieden und die Leichtigkeit des Alltags.\n\nDie bewegendste Eigenschaft hier ist das perfekte Gleichgewicht zwischen Stadt und Natur. In der belebten Innenstadt zu sein, aber dennoch eine Wildnis abseits des Lärms zu haben. Oben ist der weite Himmel, unten das weiche Gras. Sie können sich überall hinsetzen, Ihren Geist leeren und die Zeit langsam verstreichen lassen."
    },
    knowledge: {
      title: "Entdecken Sie den Charme von Pole Mokotowskie",
      sections: [
        {
          id: "history",
          title: "Ein Jahrhundert Geschichte",
          content: "Das Land von Pole Mokotowskie hat eine lange Geschichte. Ursprünglich ein leeres Ödland und eine grüne Pufferzone am Rande der Stadt, wurde es im Zuge der Stadterweiterung in die Gesamtplanung Warschaus einbezogen. Nach dem Zweiten Weltkrieg wurde Warschau massiv wiederaufgebaut, und die Stadt brauchte dringend große öffentliche Grünflächen, um das städtische Tempo zu drosseln. Diese Wildnis wurde offiziell in einen öffentlichen Stadtpark umgewandelt.\n\nIn den frühen Phasen des Baus lag das Hauptaugenmerk auf grundlegender Begrünung und einfachen Wegen. Nach mehreren leichten Modernisierungsrunden wurden Seen, Freizeiteinrichtungen, Sportplätze und Gedenklandschaften hinzugefügt.\n\nIm Laufe der Jahrhunderte hat sich dieses Land von einem Vorstadtödland zu einer ökologischen Barriere für die städtische Restaurierung der Nachkriegszeit entwickelt und ist nun ein städtisches Wohnzimmer. Es war Zeuge des Zerbrechens und der Wiedergeburt Warschaus und steht ruhig im Zentrum der Stadt."
        },
        {
          id: "architecture",
          title: "Architektonische Merkmale",
          content: "Dominiert von riesigen, endlosen einheimischen Rasenflächen, ergänzt durch künstliche Seen, baumgesäumte Wege, Landschaftshaine und kleine Ruheplätze. Das Gelände ist offen und weitläufig. Minimalistische Gedenkinstallationen und eine Uferpromenade am See sind im gesamten Park verteilt und integrieren sanft natürliche Landschaften mit städtischen öffentlichen Einrichtungen.\n\nMit einem modernen städtischen ökologischen Planungsstil verwirft es komplexe Landschaftsgestaltung zugunsten von Einfachheit und Natur."
        },
        {
          id: "culture",
          title: "Kultureller Wert",
          content: "Es ist der zentrale Ort für die tägliche Entspannung, Sport, Picknicks und Festivalaktivitäten der Warschauer Bürger. Hier finden häufig Open-Air-Märkte, Freiluftaufführungen und Sportveranstaltungen statt, was eine wichtige Manifestation der städtischen Vitalität Warschaus ist.\n\nAls supergroße Grünfläche im Zentrum der Stadt ist es nicht nur die erste Wahl für die tägliche Freizeitgestaltung der Bürger, sondern auch ein wichtiger Teil der städtischen Identität Warschaus."
        },
        {
          id: "experience",
          title: "Kernelement",
          content: "Betreten Sie den Park am frühen Morgen, spazieren Sie langsam die baumgesäumten Wege entlang, atmen Sie die frische Luft ein und spüren Sie den seltenen ruhigen Moment in der Stadt. Am Nachmittag breiten Sie eine Picknickdecke auf dem Rasen aus, plaudern Sie mit Freunden und beobachten Sie Kinder beim Spielen auf dem Gras. In der Dämmerung spazieren Sie an der Uferpromenade entlang und beobachten den Sonnenuntergang.\n\nEs besteht keine Notwendigkeit, etwas absichtlich zu arrangieren; die beste Erfahrung hier ist es, langsamer zu werden, lässig zu wandern und die Müdigkeit des Stadtlebens langsam in dieser grünen Wildnis verfliegen zu lassen."
        }
      ]
    },
    hours: {
      title: "Öffnungszeiten",
      outdoor: "Gesamter Park",
      outdoorTime: "Ganztägig geöffnet, ganzjährig",
      restrooms: "Öffentliche Ruhebereiche",
      restroomsTime: "Ganztägig zugänglich",
      trails: "Wege und Rasenflächen",
      trailsTime: "24/7 geöffnet",
      tip: "Es wird empfohlen, den Park am frühen Morgen oder Abend zu besuchen, um die Mittagssonne und Menschenmassen zu vermeiden."
    },
    tickets: {
      title: "Ticketpreise",
      outdoor: "Rasenflächen und Wege",
      outdoorPrice: "Komplett kostenlos",
      lake: "Seenlandschaft",
      lakePrice: "Freier Eintritt",
      plaza: "Freizeitplätze",
      plazaPrice: "Freier Eintritt",
      activities: "Temporäre Vergnügungsprojekte",
      activitiesPrice: "Saisonale Aktivitäten erfordern eine separate Zahlung",
      card: "Warschauer ÖPNV-Ticket",
      cardPrice: "Es wird empfohlen, ein Warschauer ÖPNV-Tagesticket zu kaufen."
    },
    transport: {
      title: "Transport",
      airport: "Vom Chopin-Flughafen Warschau",
      airportDesc: "Nehmen Sie die SKM-Bahn oder Buslinien direkt ins Stadtzentrum, steigen Sie dann in eine Straßenbahn oder einen Bus um, um den Park in etwa 30 Minuten zu erreichen.",
      train: "Vom Warschauer Hauptbahnhof",
      trainDesc: "Nehmen Sie eine Straßenbahn, U-Bahn oder einen Bus, und Sie können den Parkeingang in 15 Minuten erreichen.",
      city: "Von den Hauptattraktionen",
      cityDesc: "Von der Altstadt oder dem Kulturpalast nehmen Sie Busse oder Straßenbahnen. Auch für Stadtradfahren geeignet.",
      public: "Öffentliche Verkehrsmittel",
      publicDesc: "Der Park ist von Bus- und Straßenbahnhaltestellen umgeben, U-Bahn-Station Pole Mokotowskie. Ein Tagesticket wird empfohlen.",
      tips: "Reisetipps",
      tipsDesc: "Das Parken rund um den Park ist begrenzt, öffentliche Verkehrsmittel werden bevorzugt. Die Gegend ist sicher."
    },
    route: {
      title: "Rundgang",
      overview: "Es wird empfohlen, am frühen Morgen oder Abend durch den Haupteingang den Park zu betreten. Gehen Sie langsam die baumgesäumten Alleen entlang, passieren Sie den Landschaftsgürtel am See. Überqueren Sie den zentralen großen Rasen, checken Sie bei den minimalistischen Denkmälern ein und sitzen Sie schließlich am Rand des Rasens.",
      steps: [
        "Steigen Sie an der Haltestelle der öffentlichen Verkehrsmittel aus und betreten Sie die breite Hauptstraße.",
        "Gehen Sie langsam den Weg entlang und genießen Sie die üppige Begrünung.",
        "Spazieren Sie auf der Promenade um den künstlichen See und beobachten Sie Wasservögel.",
        "Überqueren Sie den offenen zentralen Rasen und spüren Sie die reine Naturatmosphäre.",
        "Besuchen Sie die kleinen Gedenkbereiche und Kunstinstallationen des Parks.",
        "Wandern Sie auf versteckten Waldwegen, abseits der Massen.",
        "Machen Sie eine Pause auf dem Rasen und erleben Sie die entspannte Atmosphäre der Einheimischen.",
        "Kehren Sie langsam über die äußeren Wege zurück und genießen Sie die Skyline der Stadt."
      ],
      supplements: [
        "Die Rasenflächen des Parks sind riesig, bequeme Schuhe werden für lange Spaziergänge empfohlen.",
        "Das Gras kann nach Regen nass und schlammig sein.",
        "Achten Sie auf die natürliche Umgebung, werfen Sie keinen Müll weg und beschädigen Sie nicht die Vegetation.",
        "Der Park ist nachts nicht geschlossen, die Beleuchtung ist weich, aber es wird empfohlen, in Begleitung zu gehen."
      ]
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
  console.log(`Updated all sections for ${lang}`);
});
