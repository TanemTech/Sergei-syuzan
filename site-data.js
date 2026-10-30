(function(global){
  'use strict';
  const data={
  "schemaVersion": 1,
  "mode": "production",
  "country": "RU",
  "locales": [
    "ru",
    "en"
  ],
  "defaultLocale": "ru",
  "salon": {
    "name": {
      "ru": "Сюзан",
      "en": "Syuzan",
      "hy": "Сюзан"
    },
    "kind": {
      "ru": "Салон красоты",
      "en": "Beauty salon",
      "hy": "Салон красоты"
    },
    "city": {
      "ru": "г. Котельники",
      "en": "Kotelniki",
      "hy": "г. Котельники"
    },
    "address": {
      "ru": "2-й Покровский проезд, 10",
      "en": "10, 2nd Pokrovsky Passage",
      "hy": "2-й Покровский проезд, 10"
    },
    "fullAddress": {
      "ru": "Московская область, г. Котельники, 2-й Покровский проезд, 10",
      "en": "10, 2nd Pokrovsky Passage, Kotelniki, Moscow Region, Russia",
      "hy": "Московская область, г. Котельники, 2-й Покровский проезд, 10"
    },
    "heroDescription": {
      "ru": "Ваша красота. Ваша уверенность.",
      "en": "Your beauty. Your confidence.",
      "hy": "Ваша красота. Ваша уверенность."
    },
    "about": {
      "ru": "В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.",
      "en": "Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.",
      "hy": "В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом."
    }
  },
  "schedule": {
    "timezone": "Europe/Moscow",
    "periods": [
      {
        "days": [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "open": "10:00",
        "close": "21:00"
      }
    ],
    "fallback": {
      "ru": "Ежедневно, 10:00–21:00",
      "en": "Daily, 10:00 AM–9:00 PM",
      "hy": "Ежедневно, 10:00–21:00"
    }
  },
  "contacts": {
    "phone": "+7 (968) 520-95-43",
    "phoneLabel": {
      "ru": "Позвонить",
      "en": "Call",
      "hy": "Позвонить"
    },
    "messengerUrl": "",
    "messengerLabel": {
      "ru": "Написать",
      "en": "Message",
      "hy": "Написать"
    },
    "messengerHandle": "",
    "mapUrl": "https://yandex.ru/maps/org/syuzan/161199825933/?ll=37.855734%2C55.661759&z=14",
    "mapEmbedUrl": "https://yandex.ru/map-widget/v1/?ll=37.855734%2C55.661759&z=17&pt=37.855734%2C55.661759,pm2rdm",
    "reviewsUrl": "https://yandex.ru/maps/org/syuzan/161199825933/reviews/",
    "booking": [
      {
        "type": "dikidi",
        "label": {
          "ru": "Записаться онлайн",
          "en": "Book online",
          "hy": "Записаться онлайн"
        },
        "url": "https://dikidi.net/ka/765489"
      }
    ]
  },
  "rating": {
    "value": 4.5,
    "count": 159
  },
  "media": {
    "logo": "logo.png",
    "hero": [
      {
        "src": "hero.webp",
        "alt": {
          "ru": "Интерьер салона «Сюзан»",
          "en": "Interior of Syuzan salon",
          "hy": "Интерьер салона «Сюзан»"
        }
      }
    ],
    "about": "profile.webp",
    "portfolio": [
      {
        "src": "gallery-01.webp",
        "alt": {
          "ru": "Интерьер салона",
          "en": "Salon interior",
          "hy": "Интерьер салона"
        }
      },
      {
        "src": "gallery-02.webp",
        "alt": {
          "ru": "Зона ресепшена",
          "en": "Reception area",
          "hy": "Зона ресепшена"
        }
      },
      {
        "src": "gallery-03.webp",
        "alt": {
          "ru": "Вход в салон",
          "en": "Salon entrance",
          "hy": "Вход в салон"
        }
      },
      {
        "src": "gallery-04.webp",
        "alt": {
          "ru": "Работа парикмахера",
          "en": "Hair styling in progress",
          "hy": "Работа парикмахера"
        }
      },
      {
        "src": "gallery-05.webp",
        "alt": {
          "ru": "Короткая женская стрижка",
          "en": "Short women's haircut",
          "hy": "Короткая женская стрижка"
        }
      },
      {
        "src": "gallery-06.webp",
        "alt": {
          "ru": "Длинные светлые волосы",
          "en": "Long blonde hair",
          "hy": "Длинные светлые волосы"
        }
      },
      {
        "src": "gallery-07.webp",
        "alt": {
          "ru": "Длинные тёмные волосы",
          "en": "Long dark hair",
          "hy": "Длинные тёмные волосы"
        }
      },
      {
        "src": "gallery-08.webp",
        "alt": {
          "ru": "Вечерняя причёска",
          "en": "Evening hairstyle",
          "hy": "Вечерняя причёска"
        }
      },
      {
        "src": "gallery-09.webp",
        "alt": {
          "ru": "Кудрявые волосы",
          "en": "Curly hair",
          "hy": "Кудрявые волосы"
        }
      },
      {
        "src": "gallery-10.webp",
        "alt": {
          "ru": "Собранная причёска",
          "en": "Updo hairstyle",
          "hy": "Собранная причёска"
        }
      },
      {
        "src": "gallery-11.webp",
        "alt": {
          "ru": "Стрижка каре",
          "en": "Bob haircut",
          "hy": "Стрижка каре"
        }
      },
      {
        "src": "gallery-12.webp",
        "alt": {
          "ru": "Маникюр с блестящим покрытием",
          "en": "Glitter manicure",
          "hy": "Маникюр с блестящим покрытием"
        }
      },
      {
        "src": "gallery-13.webp",
        "alt": {
          "ru": "Маникюр с синим покрытием",
          "en": "Blue manicure",
          "hy": "Маникюр с синим покрытием"
        }
      },
      {
        "src": "gallery-14.webp",
        "alt": {
          "ru": "Светлый маникюр с дизайном",
          "en": "Light manicure with nail art",
          "hy": "Светлый маникюр с дизайном"
        }
      },
      {
        "src": "gallery-15.webp",
        "alt": {
          "ru": "Красный маникюр",
          "en": "Red manicure",
          "hy": "Красный маникюр"
        }
      },
      {
        "src": "gallery-16.webp",
        "alt": {
          "ru": "Маникюр с художественным дизайном",
          "en": "Manicure with nail art",
          "hy": "Маникюр с художественным дизайном"
        }
      },
      {
        "src": "gallery-17.webp",
        "alt": {
          "ru": "Маникюр с тонким дизайном",
          "en": "Manicure with fine-line art",
          "hy": "Маникюр с тонким дизайном"
        }
      },
      {
        "src": "gallery-18.webp",
        "alt": {
          "ru": "Процедура педикюра",
          "en": "Pedicure treatment",
          "hy": "Процедура педикюра"
        }
      },
      {
        "src": "gallery-19.webp",
        "alt": {
          "ru": "Педикюр с блестящим покрытием",
          "en": "Glitter pedicure",
          "hy": "Педикюр с блестящим покрытием"
        }
      },
      {
        "src": "gallery-20.webp",
        "alt": {
          "ru": "Оформление бровей и ресниц",
          "en": "Brow and lash styling",
          "hy": "Оформление бровей и ресниц"
        }
      },
      {
        "src": "gallery-21.webp",
        "alt": {
          "ru": "Макияж глаз",
          "en": "Eye makeup",
          "hy": "Макияж глаз"
        }
      },
      {
        "src": "gallery-22.webp",
        "alt": {
          "ru": "Вечерний макияж",
          "en": "Evening makeup",
          "hy": "Вечерний макияж"
        }
      },
      {
        "src": "gallery-23.webp",
        "alt": {
          "ru": "Профессиональный макияж",
          "en": "Professional makeup",
          "hy": "Профессиональный макияж"
        }
      },
      {
        "src": "gallery-24.webp",
        "alt": {
          "ru": "Макияж с акцентом на глаза",
          "en": "Eye-focused makeup",
          "hy": "Макияж с акцентом на глаза"
        }
      },
      {
        "src": "gallery-25.webp",
        "alt": {
          "ru": "Свадебный образ",
          "en": "Bridal look",
          "hy": "Свадебный образ"
        }
      },
      {
        "src": "gallery-26.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-27.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-28.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-29.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-30.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-31.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-32.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-33.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-34.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-35.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-36.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-37.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-38.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-39.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-40.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-41.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-42.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-43.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-44.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-45.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-46.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-47.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-48.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-49.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-50.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-51.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-52.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-53.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-54.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      },
      {
        "src": "gallery-55.webp",
        "alt": {
          "ru": "Фотография работ салона «Сюзан»",
          "en": "A photo of work at Syuzan salon",
          "hy": "Լուսանկար «Սյուզան» սրահի աշխատանքներից"
        }
      }
    ],
    "gallery": {
      "Салон": [
        {
          "src": "gallery-01.webp",
          "alt": {
            "ru": "Интерьер салона",
            "en": "Salon interior",
            "hy": "Интерьер салона"
          }
        },
        {
          "src": "gallery-02.webp",
          "alt": {
            "ru": "Зона ресепшена",
            "en": "Reception area",
            "hy": "Зона ресепшена"
          }
        },
        {
          "src": "gallery-03.webp",
          "alt": {
            "ru": "Вход в салон",
            "en": "Salon entrance",
            "hy": "Вход в салон"
          }
        }
      ],
      "Волосы": [
        {
          "src": "gallery-04.webp",
          "alt": {
            "ru": "Работа парикмахера",
            "en": "Hair styling in progress",
            "hy": "Работа парикмахера"
          }
        },
        {
          "src": "gallery-05.webp",
          "alt": {
            "ru": "Короткая женская стрижка",
            "en": "Short women's haircut",
            "hy": "Короткая женская стрижка"
          }
        },
        {
          "src": "gallery-06.webp",
          "alt": {
            "ru": "Длинные светлые волосы",
            "en": "Long blonde hair",
            "hy": "Длинные светлые волосы"
          }
        },
        {
          "src": "gallery-07.webp",
          "alt": {
            "ru": "Длинные тёмные волосы",
            "en": "Long dark hair",
            "hy": "Длинные тёмные волосы"
          }
        },
        {
          "src": "gallery-08.webp",
          "alt": {
            "ru": "Вечерняя причёска",
            "en": "Evening hairstyle",
            "hy": "Вечерняя причёска"
          }
        },
        {
          "src": "gallery-09.webp",
          "alt": {
            "ru": "Кудрявые волосы",
            "en": "Curly hair",
            "hy": "Кудрявые волосы"
          }
        },
        {
          "src": "gallery-10.webp",
          "alt": {
            "ru": "Собранная причёска",
            "en": "Updo hairstyle",
            "hy": "Собранная причёска"
          }
        },
        {
          "src": "gallery-11.webp",
          "alt": {
            "ru": "Стрижка каре",
            "en": "Bob haircut",
            "hy": "Стрижка каре"
          }
        }
      ],
      "Ногти": [
        {
          "src": "gallery-12.webp",
          "alt": {
            "ru": "Маникюр с блестящим покрытием",
            "en": "Glitter manicure",
            "hy": "Маникюр с блестящим покрытием"
          }
        },
        {
          "src": "gallery-13.webp",
          "alt": {
            "ru": "Маникюр с синим покрытием",
            "en": "Blue manicure",
            "hy": "Маникюр с синим покрытием"
          }
        },
        {
          "src": "gallery-14.webp",
          "alt": {
            "ru": "Светлый маникюр с дизайном",
            "en": "Light manicure with nail art",
            "hy": "Светлый маникюр с дизайном"
          }
        },
        {
          "src": "gallery-15.webp",
          "alt": {
            "ru": "Красный маникюр",
            "en": "Red manicure",
            "hy": "Красный маникюр"
          }
        },
        {
          "src": "gallery-16.webp",
          "alt": {
            "ru": "Маникюр с художественным дизайном",
            "en": "Manicure with nail art",
            "hy": "Маникюр с художественным дизайном"
          }
        },
        {
          "src": "gallery-17.webp",
          "alt": {
            "ru": "Маникюр с тонким дизайном",
            "en": "Manicure with fine-line art",
            "hy": "Маникюр с тонким дизайном"
          }
        }
      ],
      "Педикюр": [
        {
          "src": "gallery-18.webp",
          "alt": {
            "ru": "Процедура педикюра",
            "en": "Pedicure treatment",
            "hy": "Процедура педикюра"
          }
        },
        {
          "src": "gallery-19.webp",
          "alt": {
            "ru": "Педикюр с блестящим покрытием",
            "en": "Glitter pedicure",
            "hy": "Педикюр с блестящим покрытием"
          }
        }
      ],
      "Брови и ресницы": [
        {
          "src": "gallery-20.webp",
          "alt": {
            "ru": "Оформление бровей и ресниц",
            "en": "Brow and lash styling",
            "hy": "Оформление бровей и ресниц"
          }
        },
        {
          "src": "gallery-21.webp",
          "alt": {
            "ru": "Макияж глаз",
            "en": "Eye makeup",
            "hy": "Макияж глаз"
          }
        }
      ],
      "Макияж": [
        {
          "src": "gallery-22.webp",
          "alt": {
            "ru": "Вечерний макияж",
            "en": "Evening makeup",
            "hy": "Вечерний макияж"
          }
        },
        {
          "src": "gallery-23.webp",
          "alt": {
            "ru": "Профессиональный макияж",
            "en": "Professional makeup",
            "hy": "Профессиональный макияж"
          }
        },
        {
          "src": "gallery-24.webp",
          "alt": {
            "ru": "Макияж с акцентом на глаза",
            "en": "Eye-focused makeup",
            "hy": "Макияж с акцентом на глаза"
          }
        },
        {
          "src": "gallery-25.webp",
          "alt": {
            "ru": "Свадебный образ",
            "en": "Bridal look",
            "hy": "Свадебный образ"
          }
        }
      ]
    },
    "desktopGalleryLimits": {
      "Салон": 3,
      "Волосы": 8,
      "Ногти": 6,
      "Педикюр": 2,
      "Брови и ресницы": 2,
      "Макияж": 4
    }
  },
  "categoryLabels": {
    "Волосы": {
      "ru": "Волосы",
      "en": "Hair",
      "hy": "Волосы"
    },
    "Маникюр": {
      "ru": "Маникюр",
      "en": "Manicure",
      "hy": "Маникюр"
    },
    "Педикюр": {
      "ru": "Педикюр",
      "en": "Pedicure",
      "hy": "Педикюр"
    },
    "Брови и ресницы": {
      "ru": "Брови и ресницы",
      "en": "Brows and lashes",
      "hy": "Брови и ресницы"
    },
    "Эпиляция": {
      "ru": "Эпиляция",
      "en": "Hair removal",
      "hy": "Эпиляция"
    },
    "Макияж": {
      "ru": "Макияж",
      "en": "Makeup",
      "hy": "Макияж"
    },
    "Другое": {
      "ru": "Другое",
      "en": "Other",
      "hy": "Другое"
    }
  },
  "categoryOrder": [
    "Волосы",
    "Маникюр",
    "Педикюр",
    "Брови и ресницы",
    "Эпиляция",
    "Макияж",
    "Другое"
  ],
  "services": [
    {
      "id": "svc-001",
      "category": "Волосы",
      "title": {
        "ru": "Плетение 1 косы",
        "en": "One braid",
        "hy": "Плетение 1 косы"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-002",
      "category": "Волосы",
      "title": {
        "ru": "Плетение всех видов кос",
        "en": "Braiding — all styles",
        "hy": "Плетение всех видов кос"
      },
      "price": "450 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-003",
      "category": "Волосы",
      "title": {
        "ru": "Снятие африканских кос",
        "en": "Removal of African braids",
        "hy": "Снятие африканских кос"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-004",
      "category": "Волосы",
      "title": {
        "ru": "Детски прически с косами",
        "en": "Children's hairstyles with braids",
        "hy": "Детски прически с косами"
      },
      "price": "1 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-005",
      "category": "Волосы",
      "title": {
        "ru": "Десткие прически на короткие волосы",
        "en": "Children's hairstyles — short hair",
        "hy": "Десткие прически на короткие волосы"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-006",
      "category": "Волосы",
      "title": {
        "ru": "Детские прически на средние волосы",
        "en": "Children's hairstyles — medium hair",
        "hy": "Детские прически на средние волосы"
      },
      "price": "700 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-007",
      "category": "Волосы",
      "title": {
        "ru": "Детские прически на длинные волосы",
        "en": "Children's hairstyles — long hair",
        "hy": "Детские прически на длинные волосы"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-008",
      "category": "Волосы",
      "title": {
        "ru": "Детские прически на длину свыше 40 см",
        "en": "Children's hairstyles — hair over 40 cm",
        "hy": "Детские прически на длину свыше 40 см"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-009",
      "category": "Волосы",
      "title": {
        "ru": "Десткая челка",
        "en": "Children's fringe trim",
        "hy": "Десткая челка"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-010",
      "category": "Волосы",
      "title": {
        "ru": "Детское подравнивание волос",
        "en": "Children's hair trim",
        "hy": "Детское подравнивание волос"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-011",
      "category": "Волосы",
      "title": {
        "ru": "Детская стрижка каре",
        "en": "Children's bob haircut",
        "hy": "Детская стрижка каре"
      },
      "price": "650 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-012",
      "category": "Волосы",
      "title": {
        "ru": "Детская модельная стрижка",
        "en": "Children's haircut",
        "hy": "Детская модельная стрижка"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-013",
      "category": "Волосы",
      "title": {
        "ru": "Женское подравнивание волос на короткие волосы",
        "en": "Women's trim — short hair",
        "hy": "Женское подравнивание волос на короткие волосы"
      },
      "price": "350 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-014",
      "category": "Волосы",
      "title": {
        "ru": "Женское подравнивание волос на средние волосы",
        "en": "Women's trim — medium hair",
        "hy": "Женское подравнивание волос на средние волосы"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-015",
      "category": "Волосы",
      "title": {
        "ru": "Женское подравнивание волос на длинные волосы",
        "en": "Women's trim — long hair",
        "hy": "Женское подравнивание волос на длинные волосы"
      },
      "price": "650 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-016",
      "category": "Волосы",
      "title": {
        "ru": "Женская челка",
        "en": "Women's fringe trim",
        "hy": "Женская челка"
      },
      "price": "350 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-017",
      "category": "Волосы",
      "title": {
        "ru": "Каре",
        "en": "Bob haircut",
        "hy": "Каре"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-018",
      "category": "Волосы",
      "title": {
        "ru": "Женская креативная стрижка",
        "en": "Women's creative haircut",
        "hy": "Женская креативная стрижка"
      },
      "price": "700 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-019",
      "category": "Волосы",
      "title": {
        "ru": "Женская стрижка на короткие волосы",
        "en": "Women's haircut — short hair",
        "hy": "Женская стрижка на короткие волосы"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-020",
      "category": "Волосы",
      "title": {
        "ru": "Женская стрижка на средние волосы",
        "en": "Women's haircut — medium hair",
        "hy": "Женская стрижка на средние волосы"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-021",
      "category": "Волосы",
      "title": {
        "ru": "Женская стрижка на длинные волосы",
        "en": "Women's haircut — long hair",
        "hy": "Женская стрижка на длинные волосы"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-022",
      "category": "Волосы",
      "title": {
        "ru": "Мытье",
        "en": "Hair wash",
        "hy": "Мытье"
      },
      "price": "200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-023",
      "category": "Волосы",
      "title": {
        "ru": "Укладка на короткие волосы",
        "en": "Styling — short hair",
        "hy": "Укладка на короткие волосы"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-024",
      "category": "Волосы",
      "title": {
        "ru": "Укладка на средкие волосы",
        "en": "Styling — medium hair",
        "hy": "Укладка на средкие волосы"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-025",
      "category": "Волосы",
      "title": {
        "ru": "Укладка на длинные волосы",
        "en": "Styling — long hair",
        "hy": "Укладка на длинные волосы"
      },
      "price": "2 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-026",
      "category": "Волосы",
      "title": {
        "ru": "Локоны",
        "en": "Curls",
        "hy": "Локоны"
      },
      "price": "1 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-027",
      "category": "Волосы",
      "title": {
        "ru": "Сушка короткие волосы",
        "en": "Blow-dry — short hair",
        "hy": "Сушка короткие волосы"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-028",
      "category": "Волосы",
      "title": {
        "ru": "Сушка средние волосы",
        "en": "Blow-dry — medium hair",
        "hy": "Сушка средние волосы"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-029",
      "category": "Волосы",
      "title": {
        "ru": "Сушка длинные волосы",
        "en": "Blow-dry — long hair",
        "hy": "Сушка длинные волосы"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-030",
      "category": "Волосы",
      "title": {
        "ru": "Мужская стрижка 1 - 2 насадки",
        "en": "Men's clipper haircut (1–2 guards)",
        "hy": "Мужская стрижка 1 - 2 насадки"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-031",
      "category": "Волосы",
      "title": {
        "ru": "Модельная стрижка",
        "en": "Men's model haircut",
        "hy": "Модельная стрижка"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-032",
      "category": "Волосы",
      "title": {
        "ru": "Классическая стрижка",
        "en": "Classic men's haircut",
        "hy": "Классическая стрижка"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-033",
      "category": "Волосы",
      "title": {
        "ru": "Мужская креативная стрижка",
        "en": "Men's creative haircut",
        "hy": "Мужская креативная стрижка"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-034",
      "category": "Волосы",
      "title": {
        "ru": "Мужская укладка волос",
        "en": "Men's hair styling",
        "hy": "Мужская укладка волос"
      },
      "price": "100 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-035",
      "category": "Волосы",
      "title": {
        "ru": "Мужское мытье",
        "en": "Men's hair wash",
        "hy": "Мужское мытье"
      },
      "price": "200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-036",
      "category": "Волосы",
      "title": {
        "ru": "Стрижка горячими ножницами",
        "en": "Hot-scissors haircut",
        "hy": "Стрижка горячими ножницами"
      },
      "price": "850 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-037",
      "category": "Волосы",
      "title": {
        "ru": "Подравнивание горячими ножницами",
        "en": "Hot-scissors trim",
        "hy": "Подравнивание горячими ножницами"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-038",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание корней при коротких волосах",
        "en": "Root coloring — short hair",
        "hy": "Окрашивание корней при коротких волосах"
      },
      "price": "2 200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-039",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание корней при средних волосах",
        "en": "Root coloring — medium hair",
        "hy": "Окрашивание корней при средних волосах"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-040",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание корней при длинных волосах",
        "en": "Root coloring — long hair",
        "hy": "Окрашивание корней при длинных волосах"
      },
      "price": "3 300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-041",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание корней при длине свыше 40 см",
        "en": "Root coloring — hair over 40 cm",
        "hy": "Окрашивание корней при длине свыше 40 см"
      },
      "price": "4 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-042",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание коротких волос",
        "en": "Hair coloring — short hair",
        "hy": "Окрашивание коротких волос"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-043",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание средних волос",
        "en": "Hair coloring — medium hair",
        "hy": "Окрашивание средних волос"
      },
      "price": "2 900 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-044",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание длинных волос",
        "en": "Hair coloring — long hair",
        "hy": "Окрашивание длинных волос"
      },
      "price": "3 900 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-045",
      "category": "Волосы",
      "title": {
        "ru": "Окрашивание длины свыше 40 см",
        "en": "Hair coloring — hair over 40 cm",
        "hy": "Окрашивание длины свыше 40 см"
      },
      "price": "5 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-046",
      "category": "Волосы",
      "title": {
        "ru": "Мелирование на шапку (до средней длины)",
        "en": "Cap highlights (up to medium length)",
        "hy": "Мелирование на шапку (до средней длины)"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-047",
      "category": "Волосы",
      "title": {
        "ru": "Мелирование (фольга) короткие волосы",
        "en": "Foil highlights — short hair",
        "hy": "Мелирование (фольга) короткие волосы"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-048",
      "category": "Волосы",
      "title": {
        "ru": "Мелирование (фольга) средние волосы",
        "en": "Foil highlights — medium hair",
        "hy": "Мелирование (фольга) средние волосы"
      },
      "price": "3 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-049",
      "category": "Волосы",
      "title": {
        "ru": "Мелирование (фольга) длинные волосы",
        "en": "Foil highlights — long hair",
        "hy": "Мелирование (фольга) длинные волосы"
      },
      "price": "4 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-050",
      "category": "Волосы",
      "title": {
        "ru": "Химия на короткие волосы",
        "en": "Perm — short hair",
        "hy": "Химия на короткие волосы"
      },
      "price": "2 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-051",
      "category": "Волосы",
      "title": {
        "ru": "Химия на средние волосы",
        "en": "Perm — medium hair",
        "hy": "Химия на средние волосы"
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-052",
      "category": "Волосы",
      "title": {
        "ru": "Химия на длинные волосы",
        "en": "Perm — long hair",
        "hy": "Химия на длинные волосы"
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-053",
      "category": "Волосы",
      "title": {
        "ru": "Химия на длину свыше 40 см",
        "en": "Perm — hair over 40 cm",
        "hy": "Химия на длину свыше 40 см"
      },
      "price": "4 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-054",
      "category": "Волосы",
      "title": {
        "ru": "Биохимия на короткие волосы",
        "en": "Bio perm — short hair",
        "hy": "Биохимия на короткие волосы"
      },
      "price": "2 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-055",
      "category": "Волосы",
      "title": {
        "ru": "Биохимия на средние волосы",
        "en": "Bio perm — medium hair",
        "hy": "Биохимия на средние волосы"
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-056",
      "category": "Волосы",
      "title": {
        "ru": "Биохимия на длинные волосы",
        "en": "Bio perm — long hair",
        "hy": "Биохимия на длинные волосы"
      },
      "price": "4 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-057",
      "category": "Волосы",
      "title": {
        "ru": "Биохимия на длину свыше 40 см",
        "en": "Bio perm — hair over 40 cm",
        "hy": "Биохимия на длину свыше 40 см"
      },
      "price": "5 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-058",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое выпрямление волос (короткие)3500",
        "en": "Keratin hair straightening — short hair",
        "hy": "Кератиновое выпрямление волос (короткие)3500"
      },
      "price": "3 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-059",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое выпрямление волос (средние)",
        "en": "Keratin hair straightening — medium hair",
        "hy": "Кератиновое выпрямление волос (средние)"
      },
      "price": "4 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-060",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое выпрямление волос (длинные)",
        "en": "Keratin hair straightening — long hair",
        "hy": "Кератиновое выпрямление волос (длинные)"
      },
      "price": "4 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-061",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое выпрямление волос (свыше 40 см)",
        "en": "Keratin hair straightening — hair over 40 cm",
        "hy": "Кератиновое выпрямление волос (свыше 40 см)"
      },
      "price": "8 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-062",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое восстановление волос (короткие)",
        "en": "Keratin hair repair — short hair",
        "hy": "Кератиновое восстановление волос (короткие)"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-063",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое восстановление волос (средние)",
        "en": "Keratin hair repair — medium hair",
        "hy": "Кератиновое восстановление волос (средние)"
      },
      "price": "1 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-064",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое восстановление волос (длинные)",
        "en": "Keratin hair repair — long hair",
        "hy": "Кератиновое восстановление волос (длинные)"
      },
      "price": "3 200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-065",
      "category": "Волосы",
      "title": {
        "ru": "Кератиновое восстановление волос (свыше 40 см)",
        "en": "Keratin hair repair — hair over 40 cm",
        "hy": "Кератиновое восстановление волос (свыше 40 см)"
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-066",
      "category": "Волосы",
      "title": {
        "ru": "Ламинирование волос (короткие)",
        "en": "Hair lamination — short hair",
        "hy": "Ламинирование волос (короткие)"
      },
      "price": "1 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-067",
      "category": "Волосы",
      "title": {
        "ru": "Ламинирование волос (средние)",
        "en": "Hair lamination — medium hair",
        "hy": "Ламинирование волос (средние)"
      },
      "price": "2 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-068",
      "category": "Волосы",
      "title": {
        "ru": "Ламинирование волос (длинные)",
        "en": "Hair lamination — long hair",
        "hy": "Ламинирование волос (длинные)"
      },
      "price": "3 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-069",
      "category": "Волосы",
      "title": {
        "ru": "Биозавивка",
        "en": "Bio wave",
        "hy": "Биозавивка"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-070",
      "category": "Маникюр",
      "title": {
        "ru": "Аппаратный / комби маникюр (жен.)",
        "en": "E-file / combined manicure (women)",
        "hy": "Аппаратный / комби маникюр (жен.)"
      },
      "price": "700 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-071",
      "category": "Маникюр",
      "title": {
        "ru": "Аппаратный / комби маникюр (муж.)",
        "en": "E-file / combined manicure (men)",
        "hy": "Аппаратный / комби маникюр (муж.)"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-072",
      "category": "Маникюр",
      "title": {
        "ru": "Парафиновая ванна",
        "en": "Paraffin hand bath",
        "hy": "Парафиновая ванна"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-073",
      "category": "Маникюр",
      "title": {
        "ru": "Парафиновая ванна (с маникюром)",
        "en": "Paraffin bath with manicure",
        "hy": "Парафиновая ванна (с маникюром)"
      },
      "price": "1 100 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-074",
      "category": "Маникюр",
      "title": {
        "ru": "Покрытие шеллак",
        "en": "Shellac application",
        "hy": "Покрытие шеллак"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-075",
      "category": "Маникюр",
      "title": {
        "ru": "Покрытие френч",
        "en": "French coating",
        "hy": "Покрытие френч"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-076",
      "category": "Маникюр",
      "title": {
        "ru": "Покрытие ногтей лаком",
        "en": "Nail polish application",
        "hy": "Покрытие ногтей лаком"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-077",
      "category": "Маникюр",
      "title": {
        "ru": "Снятие шеллак",
        "en": "Shellac removal",
        "hy": "Снятие шеллак"
      },
      "price": "200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-078",
      "category": "Маникюр",
      "title": {
        "ru": "Снятие геля / акрила",
        "en": "Gel / acrylic removal",
        "hy": "Снятие геля / акрила"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-079",
      "category": "Маникюр",
      "title": {
        "ru": "Дизайн 1 ногтя",
        "en": "Nail design — one nail",
        "hy": "Дизайн 1 ногтя"
      },
      "price": "50 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-080",
      "category": "Маникюр",
      "title": {
        "ru": "Дизайн 1 ногтя (красками)",
        "en": "Nail art with paint — one nail",
        "hy": "Дизайн 1 ногтя (красками)"
      },
      "price": "150 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-081",
      "category": "Маникюр",
      "title": {
        "ru": "Дизайн 1 ногтя (мраморный)",
        "en": "Marble nail design — one nail",
        "hy": "Дизайн 1 ногтя (мраморный)"
      },
      "price": "200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-082",
      "category": "Маникюр",
      "title": {
        "ru": "Стразы",
        "en": "Rhinestones",
        "hy": "Стразы"
      },
      "price": "10 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-083",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление ногтей (гель, акрил, база)",
        "en": "Nail strengthening (gel, acrylic or base)",
        "hy": "Укрепление ногтей (гель, акрил, база)"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-084",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление ногтей (пудра)",
        "en": "Nail strengthening (powder)",
        "hy": "Укрепление ногтей (пудра)"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-085",
      "category": "Маникюр",
      "title": {
        "ru": "Наращивание ногтей",
        "en": "Nail extensions",
        "hy": "Наращивание ногтей"
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-086",
      "category": "Маникюр",
      "title": {
        "ru": "Наращивание френч",
        "en": "French nail extensions",
        "hy": "Наращивание френч"
      },
      "price": "3 200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-087",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция наращивания",
        "en": "Nail extension correction",
        "hy": "Коррекция наращивания"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-088",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция наращивания френч",
        "en": "French nail extension correction",
        "hy": "Коррекция наращивания френч"
      },
      "price": "2 700 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-089",
      "category": "Маникюр",
      "title": {
        "ru": "Снятие наращивания",
        "en": "Nail extension removal",
        "hy": "Снятие наращивания"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-090",
      "category": "Маникюр",
      "title": {
        "ru": "Ремонт нарощенного ногтя",
        "en": "Repair of one extended nail",
        "hy": "Ремонт нарощенного ногтя"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-091",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция наращивания \"аквариумное\"",
        "en": "Aquarium-style nail extension correction",
        "hy": "Коррекция наращивания \"аквариумное\""
      },
      "price": "4 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-092",
      "category": "Педикюр",
      "title": {
        "ru": "Smart - педикюр (жен.)",
        "en": "Smart pedicure (women)",
        "hy": "Smart - педикюр (жен.)"
      },
      "price": "1 400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-093",
      "category": "Педикюр",
      "title": {
        "ru": "Smart - педикюр (муж.)",
        "en": "Smart pedicure (men)",
        "hy": "Smart - педикюр (муж.)"
      },
      "price": "1 400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-094",
      "category": "Педикюр",
      "title": {
        "ru": "Комби - педикюр (жен.)",
        "en": "Combined pedicure (women)",
        "hy": "Комби - педикюр (жен.)"
      },
      "price": "1 200 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-095",
      "category": "Педикюр",
      "title": {
        "ru": "Комби - педикюр (муж.)",
        "en": "Combined pedicure (men)",
        "hy": "Комби - педикюр (муж.)"
      },
      "price": "1 400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-096",
      "category": "Педикюр",
      "title": {
        "ru": "Обработка только ногтей или стоп (жен.)",
        "en": "Nail or foot care only (women)",
        "hy": "Обработка только ногтей или стоп (жен.)"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-097",
      "category": "Педикюр",
      "title": {
        "ru": "Обработка только ногтей или стоп (муж.)",
        "en": "Nail or foot care only (men)",
        "hy": "Обработка только ногтей или стоп (муж.)"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-098",
      "category": "Педикюр",
      "title": {
        "ru": "Покрытие гель - лак",
        "en": "Gel polish application",
        "hy": "Покрытие гель - лак"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-099",
      "category": "Педикюр",
      "title": {
        "ru": "Покрытие лаком",
        "en": "Nail polish application",
        "hy": "Покрытие лаком"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-100",
      "category": "Педикюр",
      "title": {
        "ru": "Лечебное покрытие",
        "en": "Therapeutic coating",
        "hy": "Лечебное покрытие"
      },
      "price": "100 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-101",
      "category": "Педикюр",
      "title": {
        "ru": "Снятие лака",
        "en": "Nail polish removal",
        "hy": "Снятие лака"
      },
      "price": "50 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-102",
      "category": "Педикюр",
      "title": {
        "ru": "Ремонт 1 ногтя",
        "en": "Repair of one nail",
        "hy": "Ремонт 1 ногтя"
      },
      "price": "150 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-103",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Архитектура бровей",
        "en": "Brow shaping / architecture",
        "hy": "Архитектура бровей"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-104",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Коррекция бровей",
        "en": "Brow shaping",
        "hy": "Коррекция бровей"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-105",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Коррекция бровей + воск",
        "en": "Brow shaping + wax",
        "hy": "Коррекция бровей + воск"
      },
      "price": "750 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-106",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание бровей (краска)",
        "en": "Brow tinting (dye)",
        "hy": "Окрашивание бровей (краска)"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-107",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание бровей (хна)",
        "en": "Brow tinting (henna)",
        "hy": "Окрашивание бровей (хна)"
      },
      "price": "750 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-108",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание ресниц",
        "en": "Lash tinting",
        "hy": "Окрашивание ресниц"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-109",
      "category": "Эпиляция",
      "title": {
        "ru": "Верхняя губа (воск)",
        "en": "Upper lip waxing",
        "hy": "Верхняя губа (воск)"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-110",
      "category": "Эпиляция",
      "title": {
        "ru": "Область лба (воск)",
        "en": "Forehead waxing",
        "hy": "Область лба (воск)"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-111",
      "category": "Эпиляция",
      "title": {
        "ru": "Подбородок (воск)",
        "en": "Chin waxing",
        "hy": "Подбородок (воск)"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-112",
      "category": "Эпиляция",
      "title": {
        "ru": "Щеки (воск)",
        "en": "Cheek waxing",
        "hy": "Щеки (воск)"
      },
      "price": "300 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-113",
      "category": "Эпиляция",
      "title": {
        "ru": "Нос и уши (воск)",
        "en": "Nose and ears waxing",
        "hy": "Нос и уши (воск)"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-114",
      "category": "Эпиляция",
      "title": {
        "ru": "Верхняя губа (шугаринг)",
        "en": "Upper lip sugaring",
        "hy": "Верхняя губа (шугаринг)"
      },
      "price": "400 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-115",
      "category": "Эпиляция",
      "title": {
        "ru": "Область лба (шугаринг)",
        "en": "Forehead sugaring",
        "hy": "Область лба (шугаринг)"
      },
      "price": "350 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-116",
      "category": "Эпиляция",
      "title": {
        "ru": "Подбородок (шугаринг)",
        "en": "Chin sugaring",
        "hy": "Подбородок (шугаринг)"
      },
      "price": "350 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-117",
      "category": "Эпиляция",
      "title": {
        "ru": "Щеки (шугаринг)",
        "en": "Cheek sugaring",
        "hy": "Щеки (шугаринг)"
      },
      "price": "350 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-118",
      "category": "Эпиляция",
      "title": {
        "ru": "Нос и уши (шугаринг)",
        "en": "Nose and ears sugaring",
        "hy": "Нос и уши (шугаринг)"
      },
      "price": "550 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-119",
      "category": "Эпиляция",
      "title": {
        "ru": "Область подмышечной впадины (воск)",
        "en": "Underarm waxing",
        "hy": "Область подмышечной впадины (воск)"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-120",
      "category": "Эпиляция",
      "title": {
        "ru": "Область подмышечной впадины (шугаринг)",
        "en": "Underarm sugaring",
        "hy": "Область подмышечной впадины (шугаринг)"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-121",
      "category": "Эпиляция",
      "title": {
        "ru": "Область голени (воск)",
        "en": "Lower leg waxing",
        "hy": "Область голени (воск)"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-122",
      "category": "Эпиляция",
      "title": {
        "ru": "Область голени (шугаринг)",
        "en": "Lower leg sugaring",
        "hy": "Область голени (шугаринг)"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-123",
      "category": "Эпиляция",
      "title": {
        "ru": "Область бедра (воск)",
        "en": "Thigh waxing",
        "hy": "Область бедра (воск)"
      },
      "price": "550 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-124",
      "category": "Эпиляция",
      "title": {
        "ru": "Область бедра (шугаринг)",
        "en": "Thigh sugaring",
        "hy": "Область бедра (шугаринг)"
      },
      "price": "650 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-125",
      "category": "Эпиляция",
      "title": {
        "ru": "Краевое бикини (воск)",
        "en": "Bikini line waxing",
        "hy": "Краевое бикини (воск)"
      },
      "price": "700 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-126",
      "category": "Эпиляция",
      "title": {
        "ru": "Краевое бикини (шугаринг)",
        "en": "Bikini line sugaring",
        "hy": "Краевое бикини (шугаринг)"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-127",
      "category": "Эпиляция",
      "title": {
        "ru": "Глубокое бикини (воск)",
        "en": "Full bikini waxing",
        "hy": "Глубокое бикини (воск)"
      },
      "price": "1 700 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-128",
      "category": "Эпиляция",
      "title": {
        "ru": "Глубокое бикини (шугаринг)",
        "en": "Full bikini sugaring",
        "hy": "Глубокое бикини (шугаринг)"
      },
      "price": "1 800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-129",
      "category": "Эпиляция",
      "title": {
        "ru": "Область ягодиц (воск)",
        "en": "Buttocks waxing",
        "hy": "Область ягодиц (воск)"
      },
      "price": "350 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-130",
      "category": "Эпиляция",
      "title": {
        "ru": "Область ягодиц (шугаринг)",
        "en": "Buttocks sugaring",
        "hy": "Область ягодиц (шугаринг)"
      },
      "price": "450 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-131",
      "category": "Эпиляция",
      "title": {
        "ru": "Область рук до логтя (воск)",
        "en": "Arms to elbow waxing",
        "hy": "Область рук до логтя (воск)"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-132",
      "category": "Эпиляция",
      "title": {
        "ru": "Область рук до логтя (шугаринг)",
        "en": "Arms to elbow sugaring",
        "hy": "Область рук до логтя (шугаринг)"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-133",
      "category": "Эпиляция",
      "title": {
        "ru": "Область рук полностью (воск)",
        "en": "Full arms waxing",
        "hy": "Область рук полностью (воск)"
      },
      "price": "800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-134",
      "category": "Эпиляция",
      "title": {
        "ru": "Область рук полностью (шугаринг)",
        "en": "Full arms sugaring",
        "hy": "Область рук полностью (шугаринг)"
      },
      "price": "900 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-135",
      "category": "Эпиляция",
      "title": {
        "ru": "Область спины (воск)",
        "en": "Back waxing",
        "hy": "Область спины (воск)"
      },
      "price": "550 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-136",
      "category": "Эпиляция",
      "title": {
        "ru": "Область спины (шугаринг)",
        "en": "Back sugaring",
        "hy": "Область спины (шугаринг)"
      },
      "price": "650 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-137",
      "category": "Эпиляция",
      "title": {
        "ru": "Область живота (воск)",
        "en": "Abdomen waxing",
        "hy": "Область живота (воск)"
      },
      "price": "500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-138",
      "category": "Эпиляция",
      "title": {
        "ru": "Область живота (шугаринг)",
        "en": "Abdomen sugaring",
        "hy": "Область живота (шугаринг)"
      },
      "price": "600 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-139",
      "category": "Эпиляция",
      "title": {
        "ru": "Бикини дизайн (воск)",
        "en": "Bikini design (wax)",
        "hy": "Бикини дизайн (воск)"
      },
      "price": "900 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-140",
      "category": "Эпиляция",
      "title": {
        "ru": "Бикини дизайн (шугаринг)",
        "en": "Bikini design (sugaring)",
        "hy": "Бикини дизайн (шугаринг)"
      },
      "price": "1 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-141",
      "category": "Другое",
      "title": {
        "ru": "Пирсинг (цена с изделием)",
        "en": "Piercing (jewelry included)",
        "hy": "Пирсинг (цена с изделием)"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-142",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Наращивание ресниц (классика)",
        "en": "Eyelash extensions — classic",
        "hy": "Наращивание ресниц (классика)"
      },
      "price": "2 800 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-143",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Наращивание ресниц (2D)",
        "en": "Eyelash extensions — 2D",
        "hy": "Наращивание ресниц (2D)"
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-144",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Наращивание ресниц (3D)",
        "en": "Eyelash extensions — 3D",
        "hy": "Наращивание ресниц (3D)"
      },
      "price": "3 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-145",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Эффекты лучики / изгиб L / стрелка / мокрый",
        "en": "Lash effects: wispy / L curl / eyeliner / wet look",
        "hy": "Эффекты лучики / изгиб L / стрелка / мокрый"
      },
      "price": "3 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-146",
      "category": "Брови и ресницы",
      "title": {
        "ru": "Снятие чужого наращивания ресниц",
        "en": "Removal of extensions applied elsewhere",
        "hy": "Снятие чужого наращивания ресниц"
      },
      "price": "450 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-147",
      "category": "Макияж",
      "title": {
        "ru": "Дневной макияж",
        "en": "Day makeup",
        "hy": "Дневной макияж"
      },
      "price": "2 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-148",
      "category": "Макияж",
      "title": {
        "ru": "Вечерний макияж",
        "en": "Evening makeup",
        "hy": "Вечерний макияж"
      },
      "price": "3 500 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "svc-149",
      "category": "Макияж",
      "title": {
        "ru": "Свадебный макияж",
        "en": "Bridal makeup",
        "hy": "Свадебный макияж"
      },
      "price": "5 000 ₽",
      "duration": "",
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    }
  ],
  "team": [],
  "reviews": [
    {
      "id": "review-001",
      "author": {
        "ru": "Мария Х.",
        "en": "Мария Х.",
        "hy": "Мария Х."
      },
      "text": {
        "ru": "Потрясающий салон !!!! Самый лучший ❤️❤️❤️❤️❤️❤️ тот который я всю жизнь искала !!! Мастер Сюзанна самая лучшая от бога !!!💋💋💋 Золотые руки , творит чудеса и воплощает мечты !!! Мои волосы были в ужасном состоянии , я доверилась Сюзанне и это был моим лучшим выбором в жизни !!! Не каждый мастер способен превращать в волосы в чудо !! Безумно любит свою работу и это видно в самом результате !! уже 2 года хожу в салон и каждый раз как первый незабываемый!! Атмосфера , обслуживающий персонал на высоте !!! Приходя в салон , в первую очередь получаешь релакс 💆‍♀️ от мастера, и хочется возвращаться скорее и получать удовольствие!!! Благодаря Сюзанне я люблю свои волосы , и они стали прекрасными !! От всех получаю комплименты, целую руки мастеру !!🥰🥰🥰 Сюзанна волшебница ❤️‍🔥",
        "en": "An absolutely wonderful salon — the best I have ever found! Master Syuzanna is truly gifted. She works wonders and brings dreams to life. My hair was in terrible condition, and trusting Syuzanna was the best decision. Not every stylist can transform hair like that. You can see how much she loves her work in the results. I have been coming for two years, and every visit feels special. The atmosphere and staff are excellent. You come in and immediately relax; you want to return as soon as possible. Thanks to Syuzanna, I love my hair and receive compliments all the time. She is a magician!",
        "hy": "Потрясающий салон !!!! Самый лучший ❤️❤️❤️❤️❤️❤️ тот который я всю жизнь искала !!! Мастер Сюзанна самая лучшая от бога !!!💋💋💋 Золотые руки , творит чудеса и воплощает мечты !!! Мои волосы были в ужасном состоянии , я доверилась Сюзанне и это был моим лучшим выбором в жизни !!! Не каждый мастер способен превращать в волосы в чудо !! Безумно любит свою работу и это видно в самом результате !! уже 2 года хожу в салон и каждый раз как первый незабываемый!! Атмосфера , обслуживающий персонал на высоте !!! Приходя в салон , в первую очередь получаешь релакс 💆‍♀️ от мастера, и хочется возвращаться скорее и получать удовольствие!!! Благодаря Сюзанне я люблю свои волосы , и они стали прекрасными !! От всех получаю комплименты, целую руки мастеру !!🥰🥰🥰 Сюзанна волшебница ❤️‍🔥"
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "Яндекс Карты"
      },
      "url": "https://yandex.ru/maps/org/syuzan/161199825933/reviews/"
    },
    {
      "id": "review-002",
      "author": {
        "ru": "Надежда Бочкарева",
        "en": "Nadezhda Bochkareva",
        "hy": "Надежда Бочкарева"
      },
      "text": {
        "ru": "Прекрасный салон. Любовь с первой стрижки у великолепной Сюзан. Всегда идеальные , красивые, ухоженные волосы !) Первый раз когда сделала уход , мой супруг был в восторге сказал: «что -то на богатом 🤣» Последние творение - это сложное окрашивание Аиртач . Просто восторг, обожаю , благодарю 🙏",
        "en": "A wonderful salon. I fell in love with it from my very first haircut with the amazing Syuzan. My hair is always perfect, beautiful and well cared for! The first time I had a treatment, my husband was delighted and said, “That looks expensive 🤣”. The latest creation was a complex AirTouch coloring. I am absolutely delighted — I love it. Thank you 🙏",
        "hy": "Прекрасный салон. Любовь с первой стрижки у великолепной Сюзан. Всегда идеальные , красивые, ухоженные волосы !) Первый раз когда сделала уход , мой супруг был в восторге сказал: «что -то на богатом 🤣» Последние творение - это сложное окрашивание Аиртач . Просто восторг, обожаю , благодарю 🙏"
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "Яндекс Карты"
      },
      "url": "https://yandex.ru/maps/org/syuzan/161199825933/reviews/"
    },
    {
      "id": "review-003",
      "author": {
        "ru": "Лиза В.",
        "en": "Лиза В.",
        "hy": "Лиза В."
      },
      "text": {
        "ru": "Один из лучших салонов, которые я посещала. Приятные, улыбчивые работники, хорошо выполняющие свою работу, сделали мой день! Точно приду ещё. Отдельное спасибо парикмахеру Изабелле, за прекрасную прическу)",
        "en": "One of the best salons I have visited. The friendly, smiling staff do their work very well and made my day! I will definitely come again. Special thanks to hairdresser Isabella for the wonderful hairstyle.",
        "hy": "Один из лучших салонов, которые я посещала. Приятные, улыбчивые работники, хорошо выполняющие свою работу, сделали мой день! Точно приду ещё. Отдельное спасибо парикмахеру Изабелле, за прекрасную прическу)"
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "Яндекс Карты"
      },
      "url": "https://yandex.ru/maps/org/syuzan/161199825933/reviews/"
    },
    {
      "id": "review-004",
      "author": {
        "ru": "LED_PRO l.",
        "en": "LED_PRO l.",
        "hy": "LED_PRO l."
      },
      "text": {
        "ru": "Замечательный салон🌺 Вожу сына с 1 годика на стрижку к Сюзанне, самый лучший мастер! У нее талант в работе с малышами, она умеет расположить ребенка, подготовить, грамотно отвлечь, найти контакт и очень быстро и аккуратно постричь, даже если он непоседа. В салоне для таких малышей есть сиденье-машинка, что при первом опыте стрижки очень помогает развлечь ребенка и сместить фокус от процесса. Мой сын даже не успевает понять, что его постригли. Поэтому если вы ищете место в Котельниках, где бережно и с заботой сделают первые стрижки вашему малышу, то приходите именно сюда. Знаю, что Сюзанна еще и отличный колорист и очень опытный мастер-профессионал. Очень рекомендую к посещению!",
        "en": "A wonderful salon 🌺 I have been bringing my son here for haircuts since he was one year old. Syuzanna is the best stylist! She has a real talent for working with little children: she puts them at ease, prepares them, gently distracts them, builds rapport and gives a quick, careful haircut, even when a child cannot sit still. The salon has a little car-shaped seat that makes a child's first haircut easier and more fun. My son barely realizes he has been trimmed. If you are looking for a place in Kotelniki where your little one will receive a gentle and caring first haircut, this is the place. I also know Syuzanna is an excellent colorist and a highly experienced professional. I highly recommend visiting!",
        "hy": "Замечательный салон🌺 Вожу сына с 1 годика на стрижку к Сюзанне, самый лучший мастер! У нее талант в работе с малышами, она умеет расположить ребенка, подготовить, грамотно отвлечь, найти контакт и очень быстро и аккуратно постричь, даже если он непоседа. В салоне для таких малышей есть сиденье-машинка, что при первом опыте стрижки очень помогает развлечь ребенка и сместить фокус от процесса. Мой сын даже не успевает понять, что его постригли. Поэтому если вы ищете место в Котельниках, где бережно и с заботой сделают первые стрижки вашему малышу, то приходите именно сюда. Знаю, что Сюзанна еще и отличный колорист и очень опытный мастер-профессионал. Очень рекомендую к посещению!"
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "Яндекс Карты"
      },
      "url": "https://yandex.ru/maps/org/syuzan/161199825933/reviews/"
    },
    {
      "id": "review-005",
      "author": {
        "ru": "Наталия К.",
        "en": "Наталия К.",
        "hy": "Наталия К."
      },
      "text": {
        "ru": "Прекрасный салон, очень светлый и уютный! Сюзанна - хозяйка салона и мастер от Бога, всегда очень улыбчивая и гостеприимная (всегда угощает ароматным кофе ), время пролетает незаметно, а результат всегда впечатляет. Спасибо, за мое преображение и за душевные беседы, лучшее окрашивание и стрижку мне делают только тут! Желаю процветания !",
        "en": "A wonderful salon, very bright and cozy! Syuzanna, the owner and a truly gifted stylist, is always cheerful and welcoming (she even treats guests to delicious coffee). Time flies by, and the results are always impressive. Thank you for my transformation and our lovely conversations. The best coloring and haircuts are done here! Wishing you continued success!",
        "hy": "Прекрасный салон, очень светлый и уютный! Сюзанна - хозяйка салона и мастер от Бога, всегда очень улыбчивая и гостеприимная (всегда угощает ароматным кофе ), время пролетает незаметно, а результат всегда впечатляет. Спасибо, за мое преображение и за душевные беседы, лучшее окрашивание и стрижку мне делают только тут! Желаю процветания !"
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "Яндекс Карты"
      },
      "url": "https://yandex.ru/maps/org/syuzan/161199825933/reviews/"
    },
    {
      "id": "review-006",
      "author": {
        "ru": "Елизавета копанова",
        "en": "Elizaveta Kopanova",
        "hy": "Елизавета копанова"
      },
      "text": {
        "ru": "Я была в этом салоне впервые и осталась в полном восторге! Атмосфера очень уютная и приятная, персонал вежливый и внимательный. Мой мастер, Сюзана, проконсультировала меня по поводу волос,дала хорошие советы, делала снятие нарощенных волос,все аккуратно,нежно,делала комплименты,у нее золотые руки!Человек любит свою работу,и делает все с душой.Однозначно рекомендую этот салон всем, кто ценит качество и профессионализм!🫶🏻",
        "en": "It was my first visit to this salon, and I was absolutely delighted! The atmosphere is very cozy and pleasant, and the staff are polite and attentive. My stylist, Syuzana, advised me about my hair and gave me helpful recommendations. She carefully and gently removed my hair extensions, was lovely and complimentary, and truly has golden hands. She loves her work and puts her heart into everything she does. I definitely recommend this salon to anyone who values quality and professionalism! 🫶🏻",
        "hy": "Я была в этом салоне впервые и осталась в полном восторге! Атмосфера очень уютная и приятная, персонал вежливый и внимательный. Мой мастер, Сюзана, проконсультировала меня по поводу волос,дала хорошие советы, делала снятие нарощенных волос,все аккуратно,нежно,делала комплименты,у нее золотые руки!Человек любит свою работу,и делает все с душой.Однозначно рекомендую этот салон всем, кто ценит качество и профессионализм!🫶🏻"
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "Яндекс Карты"
      },
      "url": "https://yandex.ru/maps/org/syuzan/161199825933/reviews/"
    }
  ]
};
  const rows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
      if(value.ru)rows.push([value.ru,value.hy,value.en]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(data);
  global.TANEM_SITE_DATA=data;
  global.TANEM_SITE_I18N_ROWS=rows;
})(window);
