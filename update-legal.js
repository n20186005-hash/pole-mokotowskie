const fs = require('fs');
const path = require('path');

const locales = ['zh', 'en', 'pl', 'ru', 'de'];
const data = {
  zh: {
    privacy: {
      title: "隐私政策",
      lastUpdated: "最后更新时间：2026年5月",
      sections: [
        {
          heading: "我们收集的信息",
          content: "我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：\n\n• 浏览数据（IP 地址、浏览器类型、访问页面）\n• Cookie 和类似技术\n• 您通过联系表格或电子邮件自愿提供的任何信息"
        },
        {
          heading: "我们如何使用您的信息",
          content: "我们使用收集到的信息用于：\n\n• 改善网站内容和用户体验\n• 分析流量和使用模式\n• 回应请求\n• 遵守我们的法律义务"
        },
        {
          heading: "第三方服务",
          content: "我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）、谷歌分析（用于流量分析）和 Unsplash（用于图片）。这些服务均有各自的隐私政策。"
        },
        {
          heading: "您的权利",
          content: "根据《通用数据保护条例》(GDPR)及相关法规，您享有以下权利：\n\n• 访问您的个人数据\n• 要求更正或删除\n• 反对处理\n• 向监管机构提出投诉"
        }
      ]
    },
    terms: {
      title: "服务条款",
      lastUpdated: "最后更新时间：2026年5月",
      sections: [
        {
          heading: "访问和使用",
          content: "访问和使用本网站，即表示您同意受这些服务条款的约束。"
        },
        {
          heading: "内容使用",
          content: "本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。"
        },
        {
          heading: "信息的准确性",
          content: "我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。"
        },
        {
          heading: "知识产权",
          content: "本网站设计和原创内容受版权保护。图片来自 Unsplash，并已获得其许可。Google 地图数据的使用符合 Google 的服务条款。"
        },
        {
          heading: "责任限制",
          content: "本网站按“现状”提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。"
        }
      ]
    },
    cookieSettings: {
      title: "Cookie 设置",
      description: "我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。",
      lastUpdated: "最后更新时间：2026年5月",
      essential: {
        title: "必要 Cookie",
        description: "这些 Cookie 对于网站正常运行至关重要，无法禁用。",
        badge: "始终保持活跃"
      },
      analytics: {
        title: "分析型 Cookie (Google Analytics)",
        description: "它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。"
      },
      preferences: {
        title: "偏好 Cookie (用户偏好)",
        description: "它们会记住您的设置，例如语言和主题偏好。"
      },
      marketing: {
        title: "营销 Cookie (个性化广告)",
        description: "它们用于展示相关广告并衡量广告活动的有效性。"
      },
      consent: "您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。",
      save: "保存偏好设置",
      saved: "偏好已保存！",
      rejectAll: "拒绝一切",
      active: "激活",
      inactive: "停用"
    },
    footerLinks: {
      privacyLink: "隐私政策",
      termsLink: "服务条款",
      cookiesLink: "Cookie 设置"
    }
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: May 2026",
      sections: [
        {
          heading: "Information We Collect",
          content: "We only collect the minimum amount of data necessary to provide our services. This data may include:\n\n• Browsing data (IP address, browser type, visited pages)\n• Cookies and similar technologies\n• Any information you voluntarily provide via contact forms or email"
        },
        {
          heading: "How We Use Your Information",
          content: "We use the collected information to:\n\n• Improve website content and user experience\n• Analyze traffic and usage patterns\n• Respond to requests\n• Comply with our legal obligations"
        },
        {
          heading: "Third-Party Services",
          content: "Our website may use third-party services, such as Google Maps (for embedded maps and location data), Google Analytics (for traffic analysis), and Unsplash (for images). These services have their own privacy policies."
        },
        {
          heading: "Your Rights",
          content: "Under the General Data Protection Regulation (GDPR) and related laws, you have the right to:\n\n• Access your personal data\n• Request correction or deletion\n• Object to processing\n• Lodge a complaint with a supervisory authority"
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: May 2026",
      sections: [
        {
          heading: "Access and Use",
          content: "By accessing and using this website, you agree to be bound by these Terms of Service."
        },
        {
          heading: "Content Usage",
          content: "All content on this website is for informational purposes only. We are an independent third-party travel information website, not affiliated with any tourist attractions, government agencies, or commercial operators."
        },
        {
          heading: "Accuracy of Information",
          content: "We strive to provide accurate and timely information, but cannot guarantee its completeness or accuracy. Itineraries, conditions, and services are subject to change without notice. Always verify important information through official channels before traveling."
        },
        {
          heading: "Intellectual Property",
          content: "The design and original content of this website are protected by copyright. Images are sourced from Unsplash and used with permission. The use of Google Maps data complies with Google's terms of service."
        },
        {
          heading: "Limitation of Liability",
          content: "This website is provided on an \"as is\" basis without any warranties. We are not responsible for any losses arising from the use of information on this site, including but not limited to travel decisions based on our content."
        }
      ]
    },
    cookieSettings: {
      title: "Cookie Settings",
      description: "We use cookies to improve your browsing experience. You can manage your preferences below.",
      lastUpdated: "Last updated: May 2026",
      essential: {
        title: "Essential Cookies",
        description: "These cookies are crucial for the basic functioning of the website and cannot be disabled.",
        badge: "Always active"
      },
      analytics: {
        title: "Analytics Cookies (Google Analytics)",
        description: "They help us understand how visitors interact with our website by collecting anonymous usage data."
      },
      preferences: {
        title: "Preference Cookies (User Preferences)",
        description: "They remember your settings, such as language and theme preferences."
      },
      marketing: {
        title: "Marketing Cookies (Personalized Ads)",
        description: "They are used to display relevant advertisements and measure the effectiveness of ad campaigns."
      },
      consent: "You can change your cookie settings at any time. Please note that disabling certain cookies may affect website functionality.",
      save: "Save Preferences",
      saved: "Preferences saved!",
      rejectAll: "Reject All",
      active: "Active",
      inactive: "Inactive"
    },
    footerLinks: {
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Service",
      cookiesLink: "Cookie Settings"
    }
  },
  pl: {
    privacy: {
      title: "Polityka Prywatności",
      lastUpdated: "Ostatnia aktualizacja: Maj 2026",
      sections: [
        {
          heading: "Informacje, które zbieramy",
          content: "Zbieramy tylko minimalną ilość danych niezbędnych do świadczenia naszych usług. Dane te mogą obejmować:\n\n• Dane przeglądania (adres IP, typ przeglądarki, odwiedzane strony)\n• Pliki cookie i podobne technologie\n• Wszelkie informacje podane dobrowolnie za pośrednictwem formularzy kontaktowych lub poczty e-mail"
        },
        {
          heading: "Jak wykorzystujemy Twoje informacje",
          content: "Zebrane informacje wykorzystujemy do:\n\n• Poprawy treści strony i doświadczeń użytkowników\n• Analizy ruchu i wzorców użytkowania\n• Odpowiadania na prośby\n• Przestrzegania naszych obowiązków prawnych"
        },
        {
          heading: "Usługi stron trzecich",
          content: "Nasza strona może korzystać z usług stron trzecich, takich jak Google Maps (do osadzonych map i danych o lokalizacji), Google Analytics (do analizy ruchu) i Unsplash (do obrazów). Usługi te mają własne polityki prywatności."
        },
        {
          heading: "Twoje prawa",
          content: "Zgodnie z ogólnym rozporządzeniem o ochronie danych (RODO) i powiązanymi przepisami, masz prawo do:\n\n• Dostępu do swoich danych osobowych\n• Żądania sprostowania lub usunięcia\n• Sprzeciwu wobec przetwarzania\n• Wniesienia skargi do organu nadzorczego"
        }
      ]
    },
    terms: {
      title: "Warunki korzystania z usług",
      lastUpdated: "Ostatnia aktualizacja: Maj 2026",
      sections: [
        {
          heading: "Dostęp i użytkowanie",
          content: "Uzyskując dostęp i korzystając z tej strony internetowej, wyrażasz zgodę na przestrzeganie niniejszych Warunków korzystania z usług."
        },
        {
          heading: "Wykorzystanie treści",
          content: "Wszystkie treści na tej stronie służą wyłącznie celom informacyjnym. Jesteśmy niezależną witryną z informacjami turystycznymi strony trzeciej, niepowiązaną z żadnymi atrakcjami turystycznymi, agencjami rządowymi ani operatorami komercyjnymi."
        },
        {
          heading: "Dokładność informacji",
          content: "Dokładamy wszelkich starań, aby dostarczać dokładne i aktualne informacje, ale nie możemy zagwarantować ich kompletności ani dokładności. Plany podróży, warunki i usługi mogą ulec zmianie bez powiadomienia. Przed podróżą zawsze weryfikuj ważne informacje za pośrednictwem oficjalnych kanałów."
        },
        {
          heading: "Własność intelektualna",
          content: "Projekt i oryginalna treść tej witryny są chronione prawem autorskim. Obrazy pochodzą z Unsplash i są używane za zgodą. Korzystanie z danych Google Maps jest zgodne z warunkami korzystania z usług Google."
        },
        {
          heading: "Ograniczenie odpowiedzialności",
          content: "Niniejsza strona internetowa jest udostępniana w stanie, w jakim się znajduje, bez jakichkolwiek gwarancji. Nie ponosimy odpowiedzialności za jakiekolwiek straty wynikające z korzystania z informacji na tej stronie, w tym między innymi za decyzje dotyczące podróży podjęte na podstawie naszych treści."
        }
      ]
    },
    cookieSettings: {
      title: "Ustawienia plików cookie",
      description: "Używamy plików cookie, aby poprawić Twoje wrażenia z przeglądania. Możesz zarządzać swoimi preferencjami poniżej.",
      lastUpdated: "Ostatnia aktualizacja: Maj 2026",
      essential: {
        title: "Niezbędne pliki cookie",
        description: "Te pliki cookie są kluczowe dla podstawowego funkcjonowania strony internetowej i nie można ich wyłączyć.",
        badge: "Zawsze aktywne"
      },
      analytics: {
        title: "Analityczne pliki cookie (Google Analytics)",
        description: "Pomagają nam zrozumieć, w jaki sposób odwiedzający wchodzą w interakcję z naszą witryną, zbierając anonimowe dane o użytkowaniu."
      },
      preferences: {
        title: "Pliki cookie preferencji (Preferencje użytkownika)",
        description: "Zapamiętują Twoje ustawienia, takie jak preferencje językowe i motywy."
      },
      marketing: {
        title: "Marketingowe pliki cookie (Spersonalizowane reklamy)",
        description: "Są używane do wyświetlania odpowiednich reklam i mierzenia skuteczności kampanii reklamowych."
      },
      consent: "Możesz zmienić ustawienia plików cookie w dowolnym momencie. Należy pamiętać, że wyłączenie niektórych plików cookie może wpłynąć na funkcjonalność witryny.",
      save: "Zapisz preferencje",
      saved: "Preferencje zapisane!",
      rejectAll: "Odrzuć wszystkie",
      active: "Aktywne",
      inactive: "Nieaktywne"
    },
    footerLinks: {
      privacyLink: "Polityka prywatności",
      termsLink: "Warunki korzystania",
      cookiesLink: "Ustawienia plików cookie"
    }
  },
  ru: {
    privacy: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: май 2026 г.",
      sections: [
        {
          heading: "Информация, которую мы собираем",
          content: "Мы собираем только минимальный объем данных, необходимых для предоставления наших услуг. Эти данные могут включать:\n\n• Данные просмотра (IP-адрес, тип браузера, посещенные страницы)\n• Файлы cookie и аналогичные технологии\n• Любую информацию, которую вы добровольно предоставляете через контактные формы или по электронной почте"
        },
        {
          heading: "Как мы используем вашу информацию",
          content: "Мы используем собранную информацию для:\n\n• Улучшения содержания сайта и пользовательского опыта\n• Анализа трафика и моделей использования\n• Ответов на запросы\n• Соблюдения наших юридических обязательств"
        },
        {
          heading: "Сторонние сервисы",
          content: "Наш веб-сайт может использовать сторонние сервисы, такие как Google Maps (для встроенных карт и данных о местоположении), Google Analytics (для анализа трафика) и Unsplash (для изображений). У этих сервисов есть собственные политики конфиденциальности."
        },
        {
          heading: "Ваши права",
          content: "В соответствии с Общим регламентом по защите данных (GDPR) и соответствующими законами вы имеете право:\n\n• Получать доступ к своим личным данным\n• Запрашивать исправление или удаление\n• Возражать против обработки\n• Подавать жалобу в надзорный орган"
        }
      ]
    },
    terms: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление: май 2026 г.",
      sections: [
        {
          heading: "Доступ и использование",
          content: "Получая доступ к этому веб-сайту и используя его, вы соглашаетесь соблюдать настоящие Условия использования."
        },
        {
          heading: "Использование контента",
          content: "Весь контент на этом веб-сайте предназначен только для информационных целей. Мы являемся независимым сторонним веб-сайтом с туристической информацией, не связанным ни с какими туристическими достопримечательностями, государственными учреждениями или коммерческими операторами."
        },
        {
          heading: "Точность информации",
          content: "Мы стремимся предоставлять точную и своевременную информацию, но не можем гарантировать ее полноту или точность. Маршруты, условия и услуги могут быть изменены без предварительного уведомления. Всегда проверяйте важную информацию через официальные каналы перед поездкой."
        },
        {
          heading: "Интеллектуальная собственность",
          content: "Дизайн и оригинальный контент этого веб-сайта защищены авторским правом. Изображения получены из Unsplash и используются с разрешения. Использование данных Google Maps соответствует условиям обслуживания Google."
        },
        {
          heading: "Ограничение ответственности",
          content: "Этот веб-сайт предоставляется на условиях «как есть» без каких-либо гарантий. Мы не несем ответственности за любые убытки, возникающие в результате использования информации на этом сайте, включая, помимо прочего, решения о поездках, принятые на основе нашего контента."
        }
      ]
    },
    cookieSettings: {
      title: "Настройки Cookie",
      description: "Мы используем файлы cookie для улучшения вашего опыта просмотра. Вы можете управлять своими настройками ниже.",
      lastUpdated: "Последнее обновление: май 2026 г.",
      essential: {
        title: "Необходимые файлы cookie",
        description: "Эти файлы cookie имеют решающее значение для базового функционирования веб-сайта и не могут быть отключены.",
        badge: "Всегда активны"
      },
      analytics: {
        title: "Аналитические файлы cookie (Google Analytics)",
        description: "Они помогают нам понять, как посетители взаимодействуют с нашим веб-сайтом, собирая анонимные данные об использовании."
      },
      preferences: {
        title: "Файлы cookie предпочтений (Пользовательские предпочтения)",
        description: "Они запоминают ваши настройки, такие как языковые предпочтения и темы."
      },
      marketing: {
        title: "Маркетинговые файлы cookie (Персонализированная реклама)",
        description: "Они используются для отображения релевантной рекламы и измерения эффективности рекламных кампаний."
      },
      consent: "Вы можете изменить настройки файлов cookie в любое время. Обратите внимание, что отключение определенных файлов cookie может повлиять на функциональность веб-сайта.",
      save: "Сохранить настройки",
      saved: "Настройки сохранены!",
      rejectAll: "Отклонить все",
      active: "Активно",
      inactive: "Неактивно"
    },
    footerLinks: {
      privacyLink: "Политика конфиденциальности",
      termsLink: "Условия использования",
      cookiesLink: "Настройки Cookie"
    }
  },
  de: {
    privacy: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: Mai 2026",
      sections: [
        {
          heading: "Informationen, die wir sammeln",
          content: "Wir sammeln nur die minimale Menge an Daten, die zur Bereitstellung unserer Dienste erforderlich ist. Diese Daten können umfassen:\n\n• Browserdaten (IP-Adresse, Browsertyp, besuchte Seiten)\n• Cookies und ähnliche Technologien\n• Alle Informationen, die Sie freiwillig über Kontaktformulare oder per E-Mail angeben"
        },
        {
          heading: "Wie wir Ihre Informationen verwenden",
          content: "Wir verwenden die gesammelten Informationen, um:\n\n• Den Inhalt der Website und die Benutzererfahrung zu verbessern\n• Traffic und Nutzungsmuster zu analysieren\n• Auf Anfragen zu antworten\n• Unseren gesetzlichen Verpflichtungen nachzukommen"
        },
        {
          heading: "Dienste von Drittanbietern",
          content: "Unsere Website kann Dienste von Drittanbietern nutzen, wie z. B. Google Maps (für eingebettete Karten und Standortdaten), Google Analytics (für die Traffic-Analyse) und Unsplash (für Bilder). Diese Dienste haben ihre eigenen Datenschutzrichtlinien."
        },
        {
          heading: "Ihre Rechte",
          content: "Gemäß der Datenschutz-Grundverordnung (DSGVO) und verwandten Gesetzen haben Sie das Recht:\n\n• Auf Ihre personenbezogenen Daten zuzugreifen\n• Berichtigung oder Löschung zu beantragen\n• Der Verarbeitung zu widersprechen\n• Eine Beschwerde bei einer Aufsichtsbehörde einzureichen"
        }
      ]
    },
    terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: Mai 2026",
      sections: [
        {
          heading: "Zugang und Nutzung",
          content: "Durch den Zugriff auf und die Nutzung dieser Website erklären Sie sich mit diesen Nutzungsbedingungen einverstanden."
        },
        {
          heading: "Inhaltsnutzung",
          content: "Alle Inhalte auf dieser Website dienen nur zu Informationszwecken. Wir sind eine unabhängige Reiseinformations-Website von Drittanbietern, die mit keinen Touristenattraktionen, Regierungsbehörden oder kommerziellen Betreibern verbunden ist."
        },
        {
          heading: "Genauigkeit der Informationen",
          content: "Wir bemühen uns, genaue und aktuelle Informationen bereitzustellen, können jedoch nicht für deren Vollständigkeit oder Genauigkeit garantieren. Reiserouten, Bedingungen und Dienstleistungen können ohne vorherige Ankündigung geändert werden. Überprüfen Sie wichtige Informationen immer über offizielle Kanäle, bevor Sie reisen."
        },
        {
          heading: "Geistiges Eigentum",
          content: "Das Design und der ursprüngliche Inhalt dieser Website sind urheberrechtlich geschützt. Bilder stammen von Unsplash und werden mit Genehmigung verwendet. Die Nutzung von Google Maps-Daten entspricht den Nutzungsbedingungen von Google."
        },
        {
          heading: "Haftungsbeschränkung",
          content: "Diese Website wird \"wie besehen\" ohne jegliche Garantien zur Verfügung gestellt. Wir haften nicht für Verluste, die sich aus der Nutzung von Informationen auf dieser Website ergeben, einschließlich, aber nicht beschränkt auf Reiseentscheidungen, die auf unseren Inhalten basieren."
        }
      ]
    },
    cookieSettings: {
      title: "Cookie-Einstellungen",
      description: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern. Sie können Ihre Einstellungen unten verwalten.",
      lastUpdated: "Zuletzt aktualisiert: Mai 2026",
      essential: {
        title: "Notwendige Cookies",
        description: "Diese Cookies sind für die grundlegende Funktionalität der Website von entscheidender Bedeutung und können nicht deaktiviert werden.",
        badge: "Immer aktiv"
      },
      analytics: {
        title: "Analyse-Cookies (Google Analytics)",
        description: "Sie helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie anonyme Nutzungsdaten sammeln."
      },
      preferences: {
        title: "Präferenz-Cookies (Benutzereinstellungen)",
        description: "Sie speichern Ihre Einstellungen wie Sprachpräferenzen und Themen."
      },
      marketing: {
        title: "Marketing-Cookies (Personalisierte Werbung)",
        description: "Sie werden verwendet, um relevante Anzeigen anzuzeigen und die Wirksamkeit von Werbekampagnen zu messen."
      },
      consent: "Sie können Ihre Cookie-Einstellungen jederzeit ändern. Bitte beachten Sie, dass die Deaktivierung bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.",
      save: "Einstellungen speichern",
      saved: "Einstellungen gespeichert!",
      rejectAll: "Alle ablehnen",
      active: "Aktiv",
      inactive: "Inaktiv"
    },
    footerLinks: {
      privacyLink: "Datenschutzrichtlinie",
      termsLink: "Nutzungsbedingungen",
      cookiesLink: "Cookie-Einstellungen"
    }
  }
};

const srcDir = path.join(__dirname, 'src', 'messages');

locales.forEach(locale => {
  const filePath = path.join(srcDir, `${locale}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(fileContent);
    
    json.privacy = data[locale].privacy;
    json.terms = data[locale].terms;
    json.cookieSettings = data[locale].cookieSettings;
    
    if (json.footer) {
      json.footer.privacyLink = data[locale].footerLinks.privacyLink;
      json.footer.termsLink = data[locale].footerLinks.termsLink;
      json.footer.cookiesLink = data[locale].footerLinks.cookiesLink;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf-8');
    console.log(`Updated ${locale}.json`);
  } else {
    console.log(`${locale}.json not found`);
  }
});
