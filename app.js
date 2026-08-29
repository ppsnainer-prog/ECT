/**
 * ЕЦТ Скрипты v2.6 — единый список отработок + привязка к скриптам
 * Автор: @Alekssandr991
 */

const DEFAULT_CARS = [
  {
    "id": "car_1",
    "brand": "LADA",
    "model": "Vesta",
    "price": "1 250 000 ₽",
    "transmission": "Механика / Автомат",
    "description": "Современный седан, просторный салон, хорошая управляемость.",
    "country": "RUS",
    "engine": "1.6 л",
    "power": "106 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "vesta"
    ]
  },
  {
    "id": "car_2",
    "brand": "LADA",
    "model": "Granta",
    "price": "850 000 ₽",
    "transmission": "Механика / Робот",
    "description": "Бюджетный седан, надёжный и неприхотливый.",
    "country": "RUS",
    "engine": "1.6 л",
    "power": "87 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "granta"
    ]
  },
  {
    "id": "car_3",
    "brand": "LADA",
    "model": "Granta Hatchback",
    "price": "900 000 ₽",
    "transmission": "Механика / Робот",
    "description": "Компактный хетчбэк, манёвренный и экономичный.",
    "country": "RUS",
    "engine": "1.6 л",
    "power": "87 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "granta hatchback"
    ]
  },
  {
    "id": "car_4",
    "brand": "LADA",
    "model": "Niva Travel",
    "price": "1 350 000 ₽",
    "transmission": "Механика",
    "description": "Компактный внедорожник, полный привод, для бездорожья.",
    "country": "RUS",
    "engine": "1.8 л",
    "power": "122 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "niva travel"
    ]
  },
  {
    "id": "car_5",
    "brand": "LADA",
    "model": "Niva Legend",
    "price": "1 150 000 ₽",
    "transmission": "Механика",
    "description": "Легендарный внедорожник, настоящая классика.",
    "country": "RUS",
    "engine": "1.7 л",
    "power": "83 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "niva legend"
    ]
  },
  {
    "id": "car_6",
    "brand": "LADA",
    "model": "XRAY",
    "price": "1 300 000 ₽",
    "transmission": "Механика / Робот",
    "description": "Компактный кроссовер, динамичный дизайн.",
    "country": "RUS",
    "engine": "1.6 л",
    "power": "113 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "xray"
    ]
  },
  {
    "id": "car_7",
    "brand": "LADA",
    "model": "XRAY Cross",
    "price": "1 450 000 ₽",
    "transmission": "Механика / Автомат",
    "description": "Кросс-версия XRAY с увеличенным клиренсом.",
    "country": "RUS",
    "engine": "1.8 л",
    "power": "122 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "xray cross"
    ]
  },
  {
    "id": "car_8",
    "brand": "LADA",
    "model": "Largus",
    "price": "1 100 000 ₽",
    "transmission": "Механика",
    "description": "Просторный универсал, вместительный салон.",
    "country": "RUS",
    "engine": "1.6 л",
    "power": "106 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "largus"
    ]
  },
  {
    "id": "car_9",
    "brand": "LADA",
    "model": "e-Largus",
    "price": "2 800 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический универсал, экологичный.",
    "country": "RUS",
    "engine": "электрический",
    "power": "150 л.с.",
    "fuel": "электро",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "e-largus"
    ]
  },
  {
    "id": "car_10",
    "brand": "LADA",
    "model": "Revolution",
    "price": "3 500 000 ₽",
    "transmission": "Робот",
    "description": "Спортивное купе.",
    "country": "RUS",
    "engine": "1.8 л",
    "power": "150 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "revolution"
    ]
  },
  {
    "id": "car_11",
    "brand": "LADA",
    "model": "Niva Pickup",
    "price": "1 250 000 ₽",
    "transmission": "Механика",
    "description": "Грузопассажирский пикап на базе Niva.",
    "country": "RUS",
    "engine": "1.7 л",
    "power": "83 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "niva pickup"
    ]
  },
  {
    "id": "car_12",
    "brand": "BMW",
    "model": "3 Series",
    "price": "3 800 000 ₽",
    "transmission": "Автомат",
    "description": "Спортивный седан премиум-класса.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "184 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "3 series"
    ]
  },
  {
    "id": "car_13",
    "brand": "BMW",
    "model": "5 Series",
    "price": "4 500 000 ₽",
    "transmission": "Автомат",
    "description": "Бизнес-седан с отличной динамикой.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "249 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "5 series"
    ]
  },
  {
    "id": "car_14",
    "brand": "BMW",
    "model": "1 Series",
    "price": "2 800 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный хетчбэк премиум-класса.",
    "country": "DEU",
    "engine": "1.5 л",
    "power": "136 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "1 series"
    ]
  },
  {
    "id": "car_15",
    "brand": "BMW",
    "model": "X3",
    "price": "5 200 000 ₽",
    "transmission": "Автомат",
    "description": "Премиальный компактный кроссовер.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "184 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "x3"
    ]
  },
  {
    "id": "car_16",
    "brand": "BMW",
    "model": "X5",
    "price": "7 500 000 ₽",
    "transmission": "Автомат",
    "description": "Премиальный внедорожник, роскошь и мощь.",
    "country": "DEU",
    "engine": "3.0 л",
    "power": "340 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "x5"
    ]
  },
  {
    "id": "car_17",
    "brand": "BMW",
    "model": "M4",
    "price": "9 000 000 ₽",
    "transmission": "Автомат",
    "description": "Спортивное купе M-серии.",
    "country": "DEU",
    "engine": "3.0 л",
    "power": "510 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "m4"
    ]
  },
  {
    "id": "car_18",
    "brand": "BMW",
    "model": "i4",
    "price": "6 200 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический спортседан.",
    "country": "DEU",
    "engine": "электрический",
    "power": "340 л.с.",
    "fuel": "электро",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "i4"
    ]
  },
  {
    "id": "car_19",
    "brand": "BMW",
    "model": "2 Series Gran Tourer",
    "price": "3 200 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный минивэн на 7 мест.",
    "country": "DEU",
    "engine": "1.5 л",
    "power": "136 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "2 series gran tourer"
    ]
  },
  {
    "id": "car_20",
    "brand": "Audi",
    "model": "A4",
    "price": "3 500 000 ₽",
    "transmission": "Автомат",
    "description": "Бизнес-седан с полным приводом.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "190 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "ауди",
      "audi",
      "a4"
    ]
  },
  {
    "id": "car_21",
    "brand": "Audi",
    "model": "A3 Sportback",
    "price": "2 700 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный хетчбэк премиум-класса.",
    "country": "DEU",
    "engine": "1.4 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "ауди",
      "audi",
      "a3 sportback"
    ]
  },
  {
    "id": "car_22",
    "brand": "Audi",
    "model": "Q5",
    "price": "4 800 000 ₽",
    "transmission": "Автомат",
    "description": "Популярный кроссовер.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "249 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "ауди",
      "audi",
      "q5"
    ]
  },
  {
    "id": "car_23",
    "brand": "Audi",
    "model": "Q7",
    "price": "7 000 000 ₽",
    "transmission": "Автомат",
    "description": "Большой семиместный внедорожник.",
    "country": "DEU",
    "engine": "3.0 л",
    "power": "340 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "ауди",
      "audi",
      "q7"
    ]
  },
  {
    "id": "car_24",
    "brand": "Audi",
    "model": "RS5",
    "price": "8 500 000 ₽",
    "transmission": "Автомат",
    "description": "Спортивное купе.",
    "country": "DEU",
    "engine": "2.9 л",
    "power": "450 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "ауди",
      "audi",
      "rs5"
    ]
  },
  {
    "id": "car_25",
    "brand": "Audi",
    "model": "e-tron GT",
    "price": "8 000 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический спорткар.",
    "country": "DEU",
    "engine": "электрический",
    "power": "476 л.с.",
    "fuel": "электро",
    "tags": [
      "ауди",
      "audi",
      "e-tron gt"
    ]
  },
  {
    "id": "car_26",
    "brand": "Mercedes",
    "model": "C-Class",
    "price": "3 800 000 ₽",
    "transmission": "Автомат",
    "description": "Бизнес-седан.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "204 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "c-class"
    ]
  },
  {
    "id": "car_27",
    "brand": "Mercedes",
    "model": "E-Class",
    "price": "4 800 000 ₽",
    "transmission": "Автомат",
    "description": "Премиальный бизнес-седан.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "258 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "e-class"
    ]
  },
  {
    "id": "car_28",
    "brand": "Mercedes",
    "model": "A-Class",
    "price": "2 800 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный хетчбэк.",
    "country": "DEU",
    "engine": "1.3 л",
    "power": "163 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "a-class"
    ]
  },
  {
    "id": "car_29",
    "brand": "Mercedes",
    "model": "GLC",
    "price": "4 500 000 ₽",
    "transmission": "Автомат",
    "description": "Популярный кроссовер.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "258 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "glc"
    ]
  },
  {
    "id": "car_30",
    "brand": "Toyota",
    "model": "Camry",
    "price": "3 200 000 ₽",
    "transmission": "Автомат",
    "description": "Бизнес-седан, надёжность и комфорт.",
    "country": "JPN",
    "engine": "2.5 л",
    "power": "200 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "camry"
    ]
  },
  {
    "id": "car_31",
    "brand": "Toyota",
    "model": "Corolla",
    "price": "2 000 000 ₽",
    "transmission": "Вариатор",
    "description": "Популярный седан.",
    "country": "JPN",
    "engine": "1.6 л",
    "power": "122 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "corolla"
    ]
  },
  {
    "id": "car_32",
    "brand": "Toyota",
    "model": "Corolla Hatchback",
    "price": "2 200 000 ₽",
    "transmission": "Вариатор",
    "description": "Компактный хетчбэк.",
    "country": "JPN",
    "engine": "1.8 л",
    "power": "140 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "corolla hatchback"
    ]
  },
  {
    "id": "car_33",
    "brand": "Toyota",
    "model": "RAV4",
    "price": "3 500 000 ₽",
    "transmission": "Вариатор",
    "description": "Популярный кроссовер.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "rav4"
    ]
  },
  {
    "id": "car_34",
    "brand": "Toyota",
    "model": "Land Cruiser 300",
    "price": "9 000 000 ₽",
    "transmission": "Автомат",
    "description": "Флагманский внедорожник.",
    "country": "JPN",
    "engine": "3.5 л",
    "power": "415 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "land cruiser 300"
    ]
  },
  {
    "id": "car_35",
    "brand": "Toyota",
    "model": "Hilux",
    "price": "4 200 000 ₽",
    "transmission": "Автомат",
    "description": "Надёжный пикап.",
    "country": "JPN",
    "engine": "2.8 л",
    "power": "204 л.с.",
    "fuel": "Дизель",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "hilux"
    ]
  },
  {
    "id": "car_36",
    "brand": "Toyota",
    "model": "GR Supra",
    "price": "6 000 000 ₽",
    "transmission": "Автомат",
    "description": "Спортивное купе.",
    "country": "JPN",
    "engine": "3.0 л",
    "power": "340 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "gr supra"
    ]
  },
  {
    "id": "car_37",
    "brand": "Toyota",
    "model": "bZ4X",
    "price": "4 500 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический кроссовер.",
    "country": "JPN",
    "engine": "электрический",
    "power": "204 л.с.",
    "fuel": "электро",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "bz4x"
    ]
  },
  {
    "id": "car_38",
    "brand": "Hyundai",
    "model": "Sonata",
    "price": "2 800 000 ₽",
    "transmission": "Автомат",
    "description": "Стильный седан.",
    "country": "KOR",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "sonata"
    ]
  },
  {
    "id": "car_39",
    "brand": "Hyundai",
    "model": "i30",
    "price": "2 000 000 ₽",
    "transmission": "Автомат",
    "description": "Европейский хетчбэк.",
    "country": "KOR",
    "engine": "1.6 л",
    "power": "130 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "i30"
    ]
  },
  {
    "id": "car_40",
    "brand": "Hyundai",
    "model": "Tucson",
    "price": "3 000 000 ₽",
    "transmission": "Автомат",
    "description": "Современный кроссовер.",
    "country": "KOR",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "tucson"
    ]
  },
  {
    "id": "car_41",
    "brand": "Hyundai",
    "model": "Santa Fe",
    "price": "4 000 000 ₽",
    "transmission": "Автомат",
    "description": "Большой кроссовер.",
    "country": "KOR",
    "engine": "2.5 л",
    "power": "200 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "santa fe"
    ]
  },
  {
    "id": "car_42",
    "brand": "Hyundai",
    "model": "Ioniq 5",
    "price": "4 500 000 ₽",
    "transmission": "Электропривод",
    "description": "Футуристичный электромобиль.",
    "country": "KOR",
    "engine": "электрический",
    "power": "217 л.с.",
    "fuel": "электро",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "ioniq 5"
    ]
  },
  {
    "id": "car_43",
    "brand": "Kia",
    "model": "K5",
    "price": "2 700 000 ₽",
    "transmission": "Автомат",
    "description": "Элегантный седан.",
    "country": "KOR",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "киа",
      "kia",
      "кия",
      "k5"
    ]
  },
  {
    "id": "car_44",
    "brand": "Kia",
    "model": "Ceed",
    "price": "2 100 000 ₽",
    "transmission": "Автомат",
    "description": "Европейский хетчбэк.",
    "country": "KOR",
    "engine": "1.6 л",
    "power": "130 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "киа",
      "kia",
      "кия",
      "ceed"
    ]
  },
  {
    "id": "car_45",
    "brand": "Kia",
    "model": "Sportage",
    "price": "3 100 000 ₽",
    "transmission": "Автомат",
    "description": "Популярный кроссовер.",
    "country": "KOR",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "киа",
      "kia",
      "кия",
      "sportage"
    ]
  },
  {
    "id": "car_46",
    "brand": "Kia",
    "model": "Sorento",
    "price": "4 200 000 ₽",
    "transmission": "Автомат",
    "description": "Большой кроссовер.",
    "country": "KOR",
    "engine": "2.5 л",
    "power": "200 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "киа",
      "kia",
      "кия",
      "sorento"
    ]
  },
  {
    "id": "car_47",
    "brand": "Kia",
    "model": "EV6",
    "price": "5 500 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический кроссовер.",
    "country": "KOR",
    "engine": "электрический",
    "power": "229 л.с.",
    "fuel": "электро",
    "tags": [
      "киа",
      "kia",
      "кия",
      "ev6"
    ]
  },
  {
    "id": "car_48",
    "brand": "Volkswagen",
    "model": "Passat",
    "price": "3 000 000 ₽",
    "transmission": "Автомат",
    "description": "Немецкий бизнес-седан.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "190 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "passat"
    ]
  },
  {
    "id": "car_49",
    "brand": "Volkswagen",
    "model": "Golf",
    "price": "2 200 000 ₽",
    "transmission": "Автомат",
    "description": "Легендарный хетчбэк.",
    "country": "DEU",
    "engine": "1.4 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "golf"
    ]
  },
  {
    "id": "car_50",
    "brand": "Volkswagen",
    "model": "Tiguan",
    "price": "3 200 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный кроссовер.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "180 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "tiguan"
    ]
  },
  {
    "id": "car_51",
    "brand": "Volkswagen",
    "model": "ID.4",
    "price": "4 800 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический кроссовер.",
    "country": "DEU",
    "engine": "электрический",
    "power": "204 л.с.",
    "fuel": "электро",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "id.4"
    ]
  },
  {
    "id": "car_52",
    "brand": "Volkswagen",
    "model": "Caddy",
    "price": "2 500 000 ₽",
    "transmission": "Автомат",
    "description": "Практичный компактвэн.",
    "country": "DEU",
    "engine": "2.0 л",
    "power": "102 л.с.",
    "fuel": "Дизель",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "caddy"
    ]
  },
  {
    "id": "car_53",
    "brand": "Geely",
    "model": "Monjaro",
    "price": "3 500 000 ₽",
    "transmission": "Автомат",
    "description": "Премиальный китайский кроссовер.",
    "country": "CHN",
    "engine": "2.0 л",
    "power": "238 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "джили",
      "geely",
      "гели",
      "monjaro"
    ]
  },
  {
    "id": "car_54",
    "brand": "Geely",
    "model": "Emgrand",
    "price": "1 800 000 ₽",
    "transmission": "Вариатор",
    "description": "Бюджетный седан.",
    "country": "CHN",
    "engine": "1.5 л",
    "power": "122 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "джили",
      "geely",
      "гели",
      "emgrand"
    ]
  },
  {
    "id": "car_55",
    "brand": "Geely",
    "model": "Geometry C",
    "price": "3 000 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический кроссовер.",
    "country": "CHN",
    "engine": "электрический",
    "power": "204 л.с.",
    "fuel": "электро",
    "tags": [
      "джили",
      "geely",
      "гели",
      "geometry c"
    ]
  },
  {
    "id": "car_56",
    "brand": "Ford",
    "model": "Mondeo",
    "price": "2 800 000 ₽",
    "transmission": "Автомат",
    "description": "Бизнес-седан.",
    "country": "USA",
    "engine": "2.0 л",
    "power": "200 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "форд",
      "ford",
      "mondeo"
    ]
  },
  {
    "id": "car_57",
    "brand": "Ford",
    "model": "Focus",
    "price": "2 000 000 ₽",
    "transmission": "Автомат",
    "description": "Популярный хетчбэк.",
    "country": "USA",
    "engine": "1.6 л",
    "power": "120 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "форд",
      "ford",
      "focus"
    ]
  },
  {
    "id": "car_58",
    "brand": "Ford",
    "model": "Kuga",
    "price": "2 800 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный кроссовер.",
    "country": "USA",
    "engine": "2.0 л",
    "power": "180 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "форд",
      "ford",
      "kuga"
    ]
  },
  {
    "id": "car_59",
    "brand": "Ford",
    "model": "Mustang",
    "price": "6 500 000 ₽",
    "transmission": "Автомат",
    "description": "Легендарный спорткар.",
    "country": "USA",
    "engine": "5.0 л",
    "power": "450 л.с.",
    "fuel": "АИ-98",
    "tags": [
      "форд",
      "ford",
      "mustang"
    ]
  },
  {
    "id": "car_60",
    "brand": "Ford",
    "model": "Ranger",
    "price": "3 800 000 ₽",
    "transmission": "Автомат",
    "description": "Надёжный пикап.",
    "country": "USA",
    "engine": "2.0 л",
    "power": "170 л.с.",
    "fuel": "Дизель",
    "tags": [
      "форд",
      "ford",
      "ranger"
    ]
  },
  {
    "id": "car_61",
    "brand": "Honda",
    "model": "Accord",
    "price": "3 000 000 ₽",
    "transmission": "Автомат",
    "description": "Японский бизнес-седан.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "190 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "хонда",
      "honda",
      "accord"
    ]
  },
  {
    "id": "car_62",
    "brand": "Honda",
    "model": "Civic Hatchback",
    "price": "2 500 000 ₽",
    "transmission": "Вариатор",
    "description": "Спортивный хетчбэк.",
    "country": "JPN",
    "engine": "1.5 л",
    "power": "180 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "хонда",
      "honda",
      "civic hatchback"
    ]
  },
  {
    "id": "car_63",
    "brand": "Honda",
    "model": "CR-V",
    "price": "3 500 000 ₽",
    "transmission": "Вариатор",
    "description": "Популярный кроссовер.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "хонда",
      "honda",
      "cr-v"
    ]
  },
  {
    "id": "car_64",
    "brand": "Nissan",
    "model": "Altima",
    "price": "2 600 000 ₽",
    "transmission": "Вариатор",
    "description": "Комфортный седан.",
    "country": "JPN",
    "engine": "2.5 л",
    "power": "180 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "altima"
    ]
  },
  {
    "id": "car_65",
    "brand": "Nissan",
    "model": "Qashqai",
    "price": "2 700 000 ₽",
    "transmission": "Вариатор",
    "description": "Популярный кроссовер.",
    "country": "JPN",
    "engine": "1.3 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "qashqai"
    ]
  },
  {
    "id": "car_66",
    "brand": "Nissan",
    "model": "X-Trail",
    "price": "3 200 000 ₽",
    "transmission": "Вариатор",
    "description": "Большой кроссовер.",
    "country": "JPN",
    "engine": "2.5 л",
    "power": "171 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "x-trail"
    ]
  },
  {
    "id": "car_67",
    "brand": "Nissan",
    "model": "Navara",
    "price": "3 500 000 ₽",
    "transmission": "Автомат",
    "description": "Практичный пикап.",
    "country": "JPN",
    "engine": "2.3 л",
    "power": "190 л.с.",
    "fuel": "Дизель",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "navara"
    ]
  },
  {
    "id": "car_68",
    "brand": "Mazda",
    "model": "6",
    "price": "2 800 000 ₽",
    "transmission": "Автомат",
    "description": "Стильный седан.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мазда",
      "mazda",
      "6"
    ]
  },
  {
    "id": "car_69",
    "brand": "Mazda",
    "model": "3",
    "price": "2 200 000 ₽",
    "transmission": "Автомат",
    "description": "Динамичный хетчбэк.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мазда",
      "mazda",
      "3"
    ]
  },
  {
    "id": "car_70",
    "brand": "Mazda",
    "model": "CX-5",
    "price": "3 200 000 ₽",
    "transmission": "Автомат",
    "description": "Кроссовер.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мазда",
      "mazda",
      "cx-5"
    ]
  },
  {
    "id": "car_71",
    "brand": "Mitsubishi",
    "model": "Outlander",
    "price": "3 000 000 ₽",
    "transmission": "Вариатор",
    "description": "Просторный кроссовер.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "мицубиси",
      "mitsubishi",
      "митсубиси",
      "мицу",
      "outlander"
    ]
  },
  {
    "id": "car_72",
    "brand": "Mitsubishi",
    "model": "L200",
    "price": "3 500 000 ₽",
    "transmission": "Автомат",
    "description": "Надёжный пикап.",
    "country": "JPN",
    "engine": "2.4 л",
    "power": "154 л.с.",
    "fuel": "Дизель",
    "tags": [
      "мицубиси",
      "mitsubishi",
      "митсубиси",
      "мицу",
      "l200"
    ]
  },
  {
    "id": "car_73",
    "brand": "Renault",
    "model": "Logan",
    "price": "1 200 000 ₽",
    "transmission": "Механика",
    "description": "Бюджетный седан.",
    "country": "FRA",
    "engine": "1.6 л",
    "power": "82 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "рено",
      "renault",
      "logan"
    ]
  },
  {
    "id": "car_74",
    "brand": "Renault",
    "model": "Megane",
    "price": "2 000 000 ₽",
    "transmission": "Автомат",
    "description": "Французский хетчбэк.",
    "country": "FRA",
    "engine": "1.6 л",
    "power": "115 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "рено",
      "renault",
      "megane"
    ]
  },
  {
    "id": "car_75",
    "brand": "Renault",
    "model": "Duster",
    "price": "1 800 000 ₽",
    "transmission": "Механика",
    "description": "Доступный кроссовер.",
    "country": "FRA",
    "engine": "1.6 л",
    "power": "114 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "рено",
      "renault",
      "duster"
    ]
  },
  {
    "id": "car_76",
    "brand": "Renault",
    "model": "Kangoo",
    "price": "2 200 000 ₽",
    "transmission": "Механика",
    "description": "Компактный фургон.",
    "country": "FRA",
    "engine": "1.5 л",
    "power": "90 л.с.",
    "fuel": "Дизель",
    "tags": [
      "рено",
      "renault",
      "kangoo"
    ]
  },
  {
    "id": "car_77",
    "brand": "Peugeot",
    "model": "308",
    "price": "2 200 000 ₽",
    "transmission": "Автомат",
    "description": "Французский хетчбэк.",
    "country": "FRA",
    "engine": "1.6 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "пежо",
      "peugeot",
      "308"
    ]
  },
  {
    "id": "car_78",
    "brand": "Peugeot",
    "model": "3008",
    "price": "3 000 000 ₽",
    "transmission": "Автомат",
    "description": "Кроссовер.",
    "country": "FRA",
    "engine": "1.6 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "пежо",
      "peugeot",
      "3008"
    ]
  },
  {
    "id": "car_79",
    "brand": "Skoda",
    "model": "Octavia",
    "price": "2 500 000 ₽",
    "transmission": "Автомат",
    "description": "Просторный лифтбек.",
    "country": "CZE",
    "engine": "1.4 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "шкода",
      "skoda",
      "octavia"
    ]
  },
  {
    "id": "car_80",
    "brand": "Skoda",
    "model": "Rapid",
    "price": "1 800 000 ₽",
    "transmission": "Автомат",
    "description": "Бюджетный лифтбек.",
    "country": "CZE",
    "engine": "1.6 л",
    "power": "110 л.с.",
    "fuel": "АИ-92",
    "tags": [
      "шкода",
      "skoda",
      "rapid"
    ]
  },
  {
    "id": "car_81",
    "brand": "Skoda",
    "model": "Kodiaq",
    "price": "3 500 000 ₽",
    "transmission": "Автомат",
    "description": "Большой семиместный кроссовер.",
    "country": "CZE",
    "engine": "2.0 л",
    "power": "180 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "шкода",
      "skoda",
      "kodiaq"
    ]
  },
  {
    "id": "car_82",
    "brand": "Volvo",
    "model": "S60",
    "price": "3 500 000 ₽",
    "transmission": "Автомат",
    "description": "Безопасный седан.",
    "country": "SWE",
    "engine": "2.0 л",
    "power": "190 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "вольво",
      "volvo",
      "s60"
    ]
  },
  {
    "id": "car_83",
    "brand": "Volvo",
    "model": "XC60",
    "price": "4 500 000 ₽",
    "transmission": "Автомат",
    "description": "Безопасный кроссовер.",
    "country": "SWE",
    "engine": "2.0 л",
    "power": "250 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "вольво",
      "volvo",
      "xc60"
    ]
  },
  {
    "id": "car_84",
    "brand": "Volvo",
    "model": "XC90",
    "price": "6 500 000 ₽",
    "transmission": "Автомат",
    "description": "Флагманский внедорожник.",
    "country": "SWE",
    "engine": "2.0 л",
    "power": "320 л.с.",
    "fuel": "АИ-95",
    "tags": [
      "вольво",
      "volvo",
      "xc90"
    ]
  },
  {
    "id": "car_85",
    "brand": "Volvo",
    "model": "C40 Recharge",
    "price": "5 000 000 ₽",
    "transmission": "Электропривод",
    "description": "Электрический кроссовер-купе.",
    "country": "SWE",
    "engine": "электрический",
    "power": "408 л.с.",
    "fuel": "электро",
    "tags": [
      "вольво",
      "volvo",
      "c40 recharge"
    ]
  }
];

const STORAGE_KEY = 'ect_scripts_data_v1';
const SETTINGS_KEY = 'ect_scripts_settings_v1';
const CLOUD_CFG_KEY = 'ect_cloud_cfg_v1';

let state = {
  scripts: [],
  // Единый список отработок (библиотека). Контент хранится здесь.
  // { id, title, text, categories: string[], children: [], updatedAt }
  // Привязка к скрипту: script.otabotkiIds = [id, ...]
  sharedOtabotki: [],
  cars: [],
  catalogQuery: '',
  catalogBrand: '',
  settings: {
    theme: 'dark',
    sidebarCollapsed: true // всегда узкая панель
  },
  homeQuery: '',
  cloud: {
    enabled: true,
    provider: 'sheets', // 'sheets' | 'jsonbin'
    // Google Apps Script web app URL
    sheetsUrl: 'https://script.google.com/macros/s/AKfycbxk9hWog0sAruR4QRCM0t-oOFJTDvkHoA9mHy12ixT3dKWspy0Q2Pkiy85lJRnt_BlewA/exec',
    // legacy JSONBin (опционально)
    binId: '',
    apiKey: '',
    private: false,
    useAccessKey: false,
    lastSync: null,
    status: 'local'
  },
  currentUser: '',
  currentPage: 'home',
  currentScriptId: null,
  searchQuery: '',
  otabotkiQuery: '',
  otabotkiCat: '',
  otabotkiScriptFilter: '',
  expandedNodes: {},
  collapsedBlocks: {}
};

let syncTimer = null;


/* ========== Team Login ========== */
const LOGIN_SESSION_KEY = 'ect_team_session_v1';
const TEAM_USERS = {
  "Александр": "c5462988bb257279b044955b10dbf91c2ca52d554fbee6420e0417bb19885bcd",
  "Айнур": "4469046f17cb23745587338fc1cc3abdf03ec46a5be90c897dd12a4c572b2141",
  "Илья": "20382b54089ec59d6fb16d96a1564584ddf84e6a3ae25f32c6386a4452b755d7",
  "Екатерина": "08d3aaa39c7f45b481909dda7e0494f5f4a21b126ef1aa5405e3d0e5e20379c5",
  "Общая": "a555c6ff72cb2148406184ce4c9326e2f85f8ede4b5ec6cd32cc5ba06317ab48"
};

async function sha256Hex(value) {
  // Web Crypto работает только в secure context (HTTPS/localhost).
  // На GitHub Pages это нормально, но при открытии index.html напрямую
  // crypto.subtle может отсутствовать. Поэтому есть JS-fallback.
  if (window.crypto && window.crypto.subtle) {
    const data = new TextEncoder().encode(value);
    const hash = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  function rotr(n, x) { return (x >>> n) | (x << (32 - n)); }
  const K = [
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
  ];
  const H0 = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const bytes = Array.from(new TextEncoder().encode(value));
  const bitLen = bytes.length * 8;
  bytes.push(0x80);
  while ((bytes.length % 64) !== 56) bytes.push(0);
  for (let i = 7; i >= 0; i--) bytes.push((bitLen / 2 ** (i * 8)) & 0xff);
  const H = H0.slice();
  for (let off = 0; off < bytes.length; off += 64) {
    const w = new Array(64);
    for (let i = 0; i < 16; i++) {
      const j = off + i * 4;
      w[i] = ((bytes[j] << 24) | (bytes[j+1] << 16) | (bytes[j+2] << 8) | bytes[j+3]) >>> 0;
    }
    for (let i = 16; i < 64; i++) {
      const x = w[i-15], y = w[i-2];
      const s0 = rotr(7,x) ^ rotr(18,x) ^ (x >>> 3);
      const s1 = rotr(17,y) ^ rotr(19,y) ^ (y >>> 10);
      w[i] = (w[i-16] + s0 + w[i-7] + s1) >>> 0;
    }
    let [a,b,c,d,e,f,g,h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr(6,e) ^ rotr(11,e) ^ rotr(25,e);
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + K[i] + w[i]) >>> 0;
      const S0 = rotr(2,a) ^ rotr(13,a) ^ rotr(22,a);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + maj) >>> 0;
      h=g; g=f; f=e; e=(d+t1)>>>0; d=c; c=b; b=a; a=(t1+t2)>>>0;
    }
    H[0]=(H[0]+a)>>>0; H[1]=(H[1]+b)>>>0; H[2]=(H[2]+c)>>>0; H[3]=(H[3]+d)>>>0;
    H[4]=(H[4]+e)>>>0; H[5]=(H[5]+f)>>>0; H[6]=(H[6]+g)>>>0; H[7]=(H[7]+h)>>>0;
  }
  return H.map(x => x.toString(16).padStart(8,'0')).join('');
}

function canEdit() {
  return state.currentUser !== 'Общая';
}

function isCommonAccount() {
  return state.currentUser === 'Общая';
}

function applyAccountPermissions() {
  const common = isCommonAccount();

  // Общая: только просмотр. Скрываем настройки и операции изменения/импорта.
  document.querySelectorAll('.nav-item[data-page="settings"]').forEach(el => {
    el.hidden = common;
  });

  const exportBtn = document.getElementById('exportData');
  const importBtn = document.getElementById('importData');
  if (exportBtn) exportBtn.hidden = common;
  if (importBtn) importBtn.hidden = common;

  const addBtn = document.getElementById('addScriptBtn');
  if (addBtn) addBtn.hidden = common;

  const badge = document.getElementById('currentUserBadge');
  if (badge) badge.textContent = state.currentUser ? `👤 ${state.currentUser}` : '';
}

function safeSessionGet(key) {
  try { return window.sessionStorage ? window.sessionStorage.getItem(key) || '' : ''; }
  catch (e) { console.warn('sessionStorage unavailable:', e); return ''; }
}

function safeSessionSet(key, value) {
  try { if (window.sessionStorage) window.sessionStorage.setItem(key, value); }
  catch (e) { console.warn('sessionStorage unavailable:', e); }
}

function safeSessionRemove(key) {
  try { if (window.sessionStorage) window.sessionStorage.removeItem(key); }
  catch (e) { console.warn('sessionStorage unavailable:', e); }
}

function getCurrentUser() {
  return safeSessionGet(LOGIN_SESSION_KEY);
}

function showAppAfterLogin(user) {
  safeSessionSet(LOGIN_SESSION_KEY, user);
  state.currentUser = user;
  const login = document.getElementById('loginScreen');
  const appRoot = document.getElementById('app');
  if (login) login.hidden = true;
  if (appRoot) appRoot.hidden = false;
  applyAccountPermissions();
}

function logout() {
  stopAutoSync();
  safeSessionRemove(LOGIN_SESSION_KEY);
  state.currentUser = '';
  const appRoot = document.getElementById('app');
  const login = document.getElementById('loginScreen');
  if (appRoot) appRoot.hidden = true;
  if (login) {
    login.hidden = false;
    const password = document.getElementById('loginPassword');
    const error = document.getElementById('loginError');
    if (password) password.value = '';
    if (error) error.textContent = '';
  }
}

async function login() {
  const user = document.getElementById('loginUser')?.value || '';
  const password = document.getElementById('loginPassword')?.value || '';
  const error = document.getElementById('loginError');
  const button = document.getElementById('loginButton');

  if (!user || !password) {
    if (error) error.textContent = 'Выберите пользователя и введите пароль.';
    return;
  }

  if (button) { button.disabled = true; button.textContent = 'Проверяем…'; }
  try {
    const hash = await sha256Hex(password);
    if (TEAM_USERS[user] && hash === TEAM_USERS[user]) {
      if (error) error.textContent = '';
      showAppAfterLogin(user);
      await startApplication();
      return;
    }
    if (error) error.textContent = 'Неверный пользователь или пароль.';
    const passwordEl = document.getElementById('loginPassword');
    if (passwordEl) { passwordEl.value = ''; passwordEl.focus(); }
  } catch (e) {
    console.error('Login error:', e);
    if (error) error.textContent = 'Не удалось проверить вход. Обновите страницу и попробуйте снова.';
  } finally {
    if (button) { button.disabled = false; button.textContent = 'Войти'; }
  }
}

// Авторизация управляется index.html (единый синхронный обработчик).
// Здесь намеренно НЕ устанавливаем второй обработчик кнопки входа.
async function requireLogin() {
  return false;
}

async function startApplication() {
  ensureCarsModel();
  // 1) Только локальные данные — мгновенно, без сети
  try {
    loadLocalSettings();
    applyTheme();
  } catch (e) { console.warn(e); }

  try {
    loadLocalScripts();
  } catch (e) {
    console.warn(e);
    state.scripts = state.scripts || [];
  }

  try {
    // Панель всегда узкая — больше места под скрипты
    state.settings.sidebarCollapsed = true;
    document.getElementById('sidebar')?.classList.add('collapsed');
  } catch (_) {}

  try {
    if (!window.__ectEventsBound) {
      bindGlobalEvents();
      window.__ectEventsBound = true;
    } else if (typeof applyAccountPermissions === 'function') {
      applyAccountPermissions();
    }
  } catch (e) {
    console.error('bindGlobalEvents error', e);
  }

  try {
    navigate('home');
  } catch (e) {
    console.error('navigate error', e);
    const content = document.getElementById('content');
    if (content) {
      content.innerHTML = '<div class="empty-state"><p>Ошибка отрисовки. Нажмите F5.</p></div>';
    }
  }

  // 2) Облако — только в фоне, не блокирует вход
  setTimeout(() => {
    syncCloudInBackground();
    try { startAutoSync(); } catch (_) {}
  }, 50);
}

async function syncCloudInBackground() {
  if (!state.cloud.enabled) return;
  if (window.__ectCloudSyncing) return;
  window.__ectCloudSyncing = true;
  try {
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts)) {
      state.scripts = remote.scripts;
      try { saveLocalScripts(); } catch (_) {}
      try {
        if (state.currentPage === 'home' || state.currentPage === 'scripts' || state.currentPage === 'script') {
          render();
        }
      } catch (_) {}
      try { toast('Данные загружены из облака'); } catch (_) {}
    }
  } catch (e) {
    console.warn('background cloud sync failed', e);
  } finally {
    window.__ectCloudSyncing = false;
  }
}


/* ========== Persistence ========== */
function loadLocalSettings() {
  try {
    const rawS = localStorage.getItem(SETTINGS_KEY);
    if (rawS) state.settings = { ...state.settings, ...JSON.parse(rawS) };
  } catch (e) {}
  try {
    const rawC = localStorage.getItem(CLOUD_CFG_KEY);
    if (rawC) {
      const c = JSON.parse(rawC);
      if (c.provider) state.cloud.provider = c.provider;
      if (c.sheetsUrl) state.cloud.sheetsUrl = c.sheetsUrl;
      if (c.binId) state.cloud.binId = c.binId;
      if (c.apiKey) state.cloud.apiKey = c.apiKey;
      if (c.private !== undefined) state.cloud.private = c.private;
      state.cloud.useAccessKey = false;
    }
  } catch (e) {}
  state.cloud.enabled = state.cloud.provider === 'sheets'
    ? !!(state.cloud.sheetsUrl && state.cloud.sheetsUrl.includes('script.google.com'))
    : !!(state.cloud.binId && state.cloud.apiKey);
  try {
    const cb = localStorage.getItem('ect_collapsed_blocks');
    if (cb) state.collapsedBlocks = JSON.parse(cb);
  } catch (e) {}
}

function saveLocalSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  localStorage.setItem(CLOUD_CFG_KEY, JSON.stringify({
    provider: state.cloud.provider,
    sheetsUrl: state.cloud.sheetsUrl,
    binId: state.cloud.binId,
    apiKey: state.cloud.apiKey,
    private: state.cloud.private,
    useAccessKey: false
  }));
  localStorage.setItem('ect_collapsed_blocks', JSON.stringify(state.collapsedBlocks));
}

function loadLocalScripts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      state.scripts = data.scripts || [];
      if (Array.isArray(data.sharedOtabotki)) state.sharedOtabotki = data.sharedOtabotki;
    }
  } catch (e) {}
  if (state.scripts.length === 0) {
    state.scripts = getDemoScripts();
    saveLocalScripts();
  }
  if (!Array.isArray(state.sharedOtabotki)) state.sharedOtabotki = [];
  ensureOtabotkiModel();
}

function saveLocalScripts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    scripts: state.scripts,
    sharedOtabotki: state.sharedOtabotki || []
  }));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/** Миграция: старые script.otabotki → библиотека + otabotkiIds */
function migrateOtabotkiToLibrary() {
  if (!Array.isArray(state.sharedOtabotki)) state.sharedOtabotki = [];
  const byId = new Map(state.sharedOtabotki.map(o => [o.id, o]));

  for (const s of state.scripts) {
    if (!Array.isArray(s.otabotkiIds)) s.otabotkiIds = [];

    // Уже в новом формате
    if (s.otabotkiIds.length && (!s.otabotki || !s.otabotki.length)) continue;

    const embedded = s.otabotki || [];
    for (const item of embedded) {
      if (!item || !item.id) continue;
      // Ссылка на библиотеку
      if (item.libId || item.sharedId) {
        const lid = item.libId || item.sharedId;
        if (!s.otabotkiIds.includes(lid)) s.otabotkiIds.push(lid);
        if (!byId.has(lid) && item.title) {
          const entry = {
            id: lid,
            title: item.title,
            text: item.text || '',
            categories: s.category ? [s.category] : [],
            children: item.children || [],
            updatedAt: Date.now()
          };
          state.sharedOtabotki.push(entry);
          byId.set(lid, entry);
        }
        continue;
      }
      // Полная копия — кладём в библиотеку тем же id
      if (!byId.has(item.id)) {
        const cats = s.category ? [s.category] : [];
        const entry = {
          id: item.id,
          title: item.title || 'Без названия',
          text: item.text || '',
          categories: cats,
          children: item.children || [],
          updatedAt: Date.now()
        };
        state.sharedOtabotki.push(entry);
        byId.set(item.id, entry);
      } else {
        const existing = byId.get(item.id);
        if (s.category && !(existing.categories || []).includes(s.category)) {
          existing.categories = [...(existing.categories || []), s.category];
        }
      }
      if (!s.otabotkiIds.includes(item.id)) s.otabotkiIds.push(item.id);
    }
  }
}

function ensureOtabotkiModel() {
  migrateOtabotkiToLibrary();
}

function getLibOtabotka(id) {
  return (state.sharedOtabotki || []).find(o => o.id === id) || null;
}

/** Отработки, привязанные к скрипту (из библиотеки) */
function resolveScriptOtabotki(script) {
  if (!script) return [];
  ensureOtabotkiModel();
  const ids = script.otabotkiIds || [];
  return ids.map(id => getLibOtabotka(id)).filter(Boolean);
}

function scriptsUsingOtabotka(otId) {
  return state.scripts.filter(s => (s.otabotkiIds || []).includes(otId));
}

function upsertLibCategories(entry, category) {
  if (!entry) return;
  if (!Array.isArray(entry.categories)) entry.categories = [];
  const c = (category || '').trim();
  if (c && !entry.categories.some(x => x.toLowerCase() === c.toLowerCase())) {
    entry.categories.push(c);
  }
}

function allCategoriesFromScripts() {
  return [...new Set(state.scripts.map(s => (s.category || '').trim()).filter(Boolean))].sort();
}

function getDemoScripts() {
  // ... (без изменений, можно оставить как было)
  return [
    {
      id: uid(),
      title: 'Входящий звонок — запись на приём',
      category: 'Медицина',
      content: `<p>Здравствуйте, оператор [Имя], единый центр телефонии. Чем могу помочь?</p>
<p>Клиент: Хочу записаться к терапевту.</p>
<p>— Подскажите, пожалуйста, ФИО и номер СНИЛС.<br>
— Какой город / поликлиника?<br>
— Есть предпочтения по дате и времени?</p>
<p>[Проверка свободных слотов]</p>
<p>— Есть талон на [дата] в [время]. Записываю вас?<br>
— Запись подтверждена. Вам придёт SMS с напоминанием.<br>
Спасибо за обращение, до свидания!</p>`,
      plainContent: 'Здравствуйте, оператор [Имя], единый центр телефонии. Чем могу помочь?\nКлиент: Хочу записаться к терапевту.\n— Подскажите, пожалуйста, ФИО и номер СНИЛС.\n— Какой город / поликлиника?\n— Есть предпочтения по дате и времени?\n[Проверка свободных слотов]\n— Есть талон на [дата] в [время]. Записываю вас?\n— Запись подтверждена. Вам придёт SMS с напоминанием.\nСпасибо за обращение, до свидания!',
      otabotki: [
        { id: uid(), title: 'Нет свободных талонов', text: 'К сожалению, сейчас свободных талонов нет. Могу сформировать заявку в лист ожидания — вам перезвонят из поликлиники. Сформировать?', children: [] },
        { id: uid(), title: 'Клиент не знает СНИЛС', text: 'Можете назвать дату рождения и адрес регистрации — попробуем найти вас в системе.', children: [] }
      ],
      shtrafy: [
        { id: uid(), title: 'Не представился', text: 'Штраф 50 ₽. Обязательно называть имя в начале разговора.', children: [] },
        { id: uid(), title: 'Не предложил лист ожидания', text: 'При отсутствии талонов обязательно предлагать лист ожидания. Штраф 100 ₽.', children: [] }
      ],
      opens: 0,
      createdAt: Date.now() - 86400000 * 3,
      updatedAt: Date.now() - 86400000
    },
    {
      id: uid(),
      title: 'Исходящий — подтверждение записи',
      category: 'Медицина',
      content: `<p>Здравствуйте, [Имя Клиента]! Это оператор [Имя] из единого центра телефонии.<br>
Звоню подтвердить вашу запись к [специалист] на [дата] в [время].<br>
Вы сможете прийти?</p>
<p>Если да:<br>
— Отлично, ждём вас. Возьмите с собой паспорт и полис.<br>
Если нет:<br>
— Хотите перенести запись? На какую дату удобнее?</p>`,
      plainContent: 'Здравствуйте, [Имя Клиента]! Это оператор [Имя] из единого центра телефонии.\nЗвоню подтвердить вашу запись к [специалист] на [дата] в [время].\nВы сможете прийти?\nЕсли да:\n— Отлично, ждём вас. Возьмите с собой паспорт и полис.\nЕсли нет:\n— Хотите перенести запись? На какую дату удобнее?',
      otabotki: [
        { id: uid(), title: 'Клиент передумал', text: 'Поняла. Запись отменяю. Если понадобится — звоните, будем рады помочь.', children: [] }
      ],
      shtrafy: [],
      opens: 0,
      createdAt: Date.now() - 86400000 * 5,
      updatedAt: Date.now() - 86400000 * 2
    },
    {
      id: uid(),
      title: 'Авто — консультация по марке',
      category: 'Авто',
      content: `<p>Здравствуйте! Единый центр телефонии, оператор [Имя].<br>
Интересует автомобиль [марка/модель]?</p>
<p>— Какой год выпуска рассматриваете?<br>
— Бюджет?<br>
— Новый или с пробегом?<br>
— Город покупки?</p>
<p>[Используйте автокаталог для подбора]</p>
<p>Могу предложить несколько вариантов и передать контакты дилера.</p>`,
      plainContent: 'Здравствуйте! Единый центр телефонии, оператор [Имя].\nИнтересует автомобиль [марка/модель]?\n— Какой год выпуска рассматриваете?\n— Бюджет?\n— Новый или с пробегом?\n— Город покупки?\n[Используйте автокаталог для подбора]\nМогу предложить несколько вариантов и передать контакты дилера.',
      otabotki: [
        { id: uid(), title: 'Слишком дорого', text: 'Понимаю. Есть варианты в более доступном сегменте / с пробегом. Рассмотреть?', children: [] }
      ],
      shtrafy: [
        { id: uid(), title: 'Не использовал каталог', text: 'При консультации по авто обязательно сверяться с актуальным каталогом.', children: [] }
      ],
      opens: 0,
      createdAt: Date.now() - 86400000,
      updatedAt: Date.now()
    }
  ];
}

/* ========== Cloud (JSONBin) с поддержкой приватных бинов ========== */
function getCloudHeaders() {
  const key = (state.cloud.apiKey || '').trim();
  return {
    'Content-Type': 'application/json',
    'X-Master-Key': key
  };
}

async function fetchWithTimeout(url, options = {}, ms = 10000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...options, signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

async function cloudFetch() {
  if (!state.cloud.enabled) return null;
  state.cloud.status = 'syncing';
  updateSyncBadge();
  try {
    if (state.cloud.provider === 'sheets') {
      const url = (state.cloud.sheetsUrl || '').trim();
      if (!url) throw new Error('Нет URL Google Apps Script');
      const res = await fetchWithTimeout(url, { method: 'GET' }, 12000);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const json = await res.json();
      if (json && json.error) throw new Error(json.error);
      const record = json.record || json;
      if (record && record.storage === 'rows') state.cloud.rowStorage = true;
      state.cloud.status = 'ok';
      state.cloud.lastSync = Date.now();
      updateSyncBadge();
      return record;
    }

    // JSONBin fallback
    const headers = getCloudHeaders();
    const res = await fetchWithTimeout(
      `https://api.jsonbin.io/v3/b/${state.cloud.binId}/latest`,
      { headers },
      4000
    );
    if (!res.ok) {
      if (res.status === 401) toast('Ошибка 401 — неверный Master Key JSONBin.', 'error');
      else if (res.status === 403) toast('Ошибка 403 — доступ JSONBin запрещён / лимит.', 'error');
      state.cloud.status = 'error';
      updateSyncBadge();
      return null;
    }
    const json = await res.json();
    const record = json.record || json;
    state.cloud.status = 'ok';
    state.cloud.lastSync = Date.now();
    updateSyncBadge();
    return record;
  } catch (e) {
    console.warn('Cloud fetch error', e);
    state.cloud.status = 'error';
    updateSyncBadge();
    return null;
  }
}

async function postSheets(url, payload, timeoutMs) {
  const res = await fetchWithTimeout(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
    redirect: 'follow',
    mode: 'cors',
    credentials: 'omit'
  }, timeoutMs || 60000);

  let json = null;
  let textBody = '';
  try {
    textBody = await res.text();
    json = JSON.parse(textBody);
  } catch (_) {}
  return { res, json, textBody };
}

function splitTextChunks(text, size) {
  const s = String(text == null ? '' : text);
  const parts = [];
  for (let i = 0; i < s.length; i += size) parts.push(s.substring(i, i + size));
  return parts.length ? parts : [''];
}

async function cloudSaveChunked(url, scripts, updatedAt) {
  const CHUNK = 35000;
  await postSheets(url, { op: 'begin', count: scripts.length, updatedAt, version: 1 }, 30000);

  for (const script of scripts) {
    const copy = { ...script };
    const pendingChunks = [];
    const pack = (field, value, isJson) => {
      const text = isJson ? JSON.stringify(value == null ? [] : value) : String(value == null ? '' : value);
      if (text.length <= CHUNK) return;
      if (isJson) copy[field] = [];
      else copy[field] = '';
      const parts = splitTextChunks(text, CHUNK);
      parts.forEach((textPart, part) => {
        pendingChunks.push({ op: 'chunk', id: copy.id, field, part, total: parts.length, text: textPart });
      });
    };
    pack('content', copy.content, false);
    pack('plainContent', copy.plainContent, false);
    pack('otabotki', copy.otabotki, true);
    pack('shtrafy', copy.shtrafy, true);

    const up = await postSheets(url, { op: 'upsert', script: copy }, 60000);
    if (up.json && up.json.ok === false) throw new Error(up.json.error || 'upsert failed');
    for (const ch of pendingChunks) {
      const cr = await postSheets(url, ch, 60000);
      if (cr.json && cr.json.ok === false) throw new Error(cr.json.error || 'chunk failed');
    }
  }

  const done = await postSheets(url, { op: 'commit', updatedAt, version: 1 }, 60000);
  if (done.json && done.json.ok === false) throw new Error(done.json.error || 'commit failed');
  return true;
}

async function verifyCloudScripts(url, localScripts) {
  await new Promise(r => setTimeout(r, 500));
  const check = await fetchWithTimeout(url, { method: 'GET', credentials: 'omit' }, 20000);
  if (!check.ok) return false;
  const remote = await check.json();
  const remoteRecord = remote && (remote.record || remote);
  if (!remoteRecord || !Array.isArray(remoteRecord.scripts)) return false;
  const localIds = localScripts.map(s => s.id).sort().join(',');
  const remoteIds = remoteRecord.scripts.map(s => s.id).sort().join(',');
  return localIds === remoteIds && remoteRecord.scripts.length === localScripts.length;
}

async function cloudSave() {
  if (typeof isCommonAccount === 'function' && isCommonAccount()) return false;
  if (!state.cloud.enabled) return false;
  state.cloud.status = 'syncing';
  updateSyncBadge();
  try {
    const payload = {
      op: 'replace',
      scripts: state.scripts,
      sharedOtabotki: state.sharedOtabotki || [],
      updatedAt: Date.now(),
      version: 1
    };

    if (state.cloud.provider === 'sheets') {
      const url = (state.cloud.sheetsUrl || '').trim();
      if (!url) throw new Error('Нет URL Google Apps Script');

      let json = null;
      let res = null;
      let textBody = '';
      try {
        const posted = await postSheets(url, payload, 60000);
        res = posted.res;
        json = posted.json;
        textBody = posted.textBody;
      } catch (netErr) {
        if (state.cloud.rowStorage) {
          await cloudSaveChunked(url, state.scripts, payload.updatedAt);
        } else {
          throw netErr;
        }
      }

      if (json && json.ok === false) {
        const err = String(json.error || '');
        if (/50,?000|maximum of 50/i.test(err) || err.indexOf('characters') !== -1) {
          throw new Error('Скрипт слишком большой для старого API. Вставьте новый Code.gs и сделайте НОВУЮ ВЕРСИЮ развёртывания.');
        }
        throw new Error(json.error || 'save failed');
      }

      if (json && json.ok === true && json.op === 'replace') state.cloud.rowStorage = true;

      if (json && !(json.ok === true) && res && !res.ok) {
        const ok = await verifyCloudScripts(url, state.scripts);
        if (!ok) {
          throw new Error('HTTP ' + res.status + (textBody ? (': ' + textBody.slice(0, 100)) : ''));
        }
      }

      const verified = await verifyCloudScripts(url, state.scripts);
      if (!verified) {
        throw new Error('Таблица не приняла полный текст. Обновите Code.gs и нажмите «Новая версия» в развёртывании.');
      }

      state.cloud.status = 'ok';
      state.cloud.lastSync = Date.now();
      updateSyncBadge();
      return true;
    }

    const headers = getCloudHeaders();
    const res = await fetchWithTimeout(
      `https://api.jsonbin.io/v3/b/${state.cloud.binId}`,
      { method: 'PUT', headers, body: JSON.stringify(payload) },
      4000
    );
    if (!res.ok) {
      if (res.status === 401) toast('Ошибка 401 — неверный Master Key JSONBin.', 'error');
      else if (res.status === 403) toast('Ошибка 403 — лимит JSONBin или доступ запрещён.', 'error');
      state.cloud.status = 'error';
      updateSyncBadge();
      return false;
    }
    state.cloud.status = 'ok';
    state.cloud.lastSync = Date.now();
    updateSyncBadge();
    return true;
  } catch (e) {
    console.warn('Cloud save error', e);
    state.cloud.status = 'error';
    updateSyncBadge();
    toast('Ошибка сохранения в облако: ' + (e.message || e), 'error');
    return false;
  }
}

async function loadData() {
  try {
    loadLocalSettings();
    applyTheme();
  } catch (e) {
    console.warn('settings load', e);
  }

  // Всегда сначала поднимаем локальные данные, чтобы UI не ждал сеть.
  try {
    loadLocalScripts();
  } catch (e) {
    console.warn('local scripts', e);
    state.scripts = state.scripts || [];
  }

  if (!state.cloud.enabled) return;

  try {
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts)) {
      state.scripts = remote.scripts;
      if (Array.isArray(remote.sharedOtabotki)) state.sharedOtabotki = remote.sharedOtabotki;
      ensureOtabotkiModel();
      try { saveLocalScripts(); } catch (_) {}
    }
    // Не блокируем вход на cloudSave — сохранение уйдёт в фоне при правках
  } catch (e) {
    console.warn('cloud load skipped', e);
    state.cloud.status = 'error';
    updateSyncBadge();
  }
}

async function saveData() {
  if (isCommonAccount()) return false;
  saveLocalScripts();
  if (state.cloud.enabled) {
    const ok = await cloudSave();
    return ok;
  }
  return true;
}

function startAutoSync() {
  stopAutoSync();
  if (!state.cloud.enabled) return;
  syncTimer = setInterval(async () => {
    if (document.hidden) return;
    if (window.__ectCloudSyncing) return;
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts)) {
      const remoteStr = JSON.stringify(remote.scripts.map(s => String(s.id) + ':' + String(s.updatedAt || 0)).sort());
      const localStr = JSON.stringify(state.scripts.map(s => String(s.id) + ':' + String(s.updatedAt || 0)).sort());
      const remoteShared = JSON.stringify(remote.sharedOtabotki || []);
      const localShared = JSON.stringify(state.sharedOtabotki || []);
      if (remoteStr !== localStr || remoteShared !== localShared) {
        state.scripts = remote.scripts;
        if (Array.isArray(remote.sharedOtabotki)) state.sharedOtabotki = remote.sharedOtabotki;
        ensureOtabotkiModel();
        saveLocalScripts();
        if (state.currentPage === 'scripts' || state.currentPage === 'home' || state.currentPage === 'script' || state.currentPage === 'otabotki') {
          render();
        }
        toast('Данные обновлены из облака');
      }
    }
  }, 12000);
}

function stopAutoSync() {
  if (syncTimer) {
    clearInterval(syncTimer);
    syncTimer = null;
  }
}

function updateSyncBadge() {
  const el = document.getElementById('syncBadge');
  if (!el) return;
  if (!state.cloud.enabled) {
    el.textContent = 'Локально';
    el.className = 'sync-badge local';
    return;
  }
  const map = {
    syncing: ['Синхронизация…', 'syncing'],
    ok: ['Облако ✓', 'ok'],
    error: ['Ошибка облака', 'error'],
    local: ['Локально', 'local']
  };
  const [text, cls] = map[state.cloud.status] || map.local;
  el.textContent = text;
  el.className = 'sync-badge ' + cls;
}

/* ========== Theme ========== */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.settings.theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = state.settings.theme === 'dark' ? '☀️' : '🌙';
}

/* ========== UI helpers ========== */
function toast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function openModal(title, bodyHtml, footerHtml) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalFooter').innerHTML = footerHtml || '';
  document.getElementById('modalOverlay').hidden = false;
}

function closeModal() {
  document.getElementById('modalOverlay').hidden = true;
}

function formatDate(ts) {
  return new Date(ts).toLocaleDateString('ru-RU', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}

/* ========== Navigation ========== */
function navigate(page, scriptId = null) {
  if (page === 'settings' && isCommonAccount()) {
    toast('Для аккаунта «Общая» настройки недоступны.', 'error');
    page = 'home';
  }
  state.currentPage = page;
  state.currentScriptId = scriptId;
  if (page !== 'script') state.currentTab = 'content';

  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page || (page === 'script' && el.dataset.page === 'scripts'));
  });

  const titles = {
    home: 'Главная',
    scripts: 'Скрипты',
    otabotki: 'Каталог отработок',
    catalog: 'Автокаталог',
    settings: 'Настройки',
    script: 'Скрипт'
  };
  document.getElementById('pageTitle').textContent = titles[page] || page;

  const addBtn = document.getElementById('addScriptBtn');
  if (addBtn) {
    addBtn.style.display = (page === 'scripts') ? 'inline-flex' : 'none';
    addBtn.hidden = isCommonAccount();
  }

  if (page === 'script' && scriptId) {
    const scr = state.scripts.find(s => s.id === scriptId);
    if (scr) {
      scr.opens = (scr.opens || 0) + 1;
      saveLocalScripts();
    }
  }

  render();
}

/* ========== Render (без изменений, кроме настроек) ========== */
const SEARCH_FOCUS_IDS = ['homeSearch', 'searchInput', 'otabotkiSearch', 'catalogSearch', 'pickOtabotkaSearch'];

function captureSearchFocus() {
  const active = document.activeElement;
  if (!active || !SEARCH_FOCUS_IDS.includes(active.id)) return null;
  return {
    id: active.id,
    start: typeof active.selectionStart === 'number' ? active.selectionStart : null,
    end: typeof active.selectionEnd === 'number' ? active.selectionEnd : null
  };
}

function restoreSearchFocus(saved) {
  if (!saved || !saved.id) return;
  const el = document.getElementById(saved.id);
  if (!el) return;
  el.focus({ preventScroll: true });
  try {
    if (saved.start != null && saved.end != null && typeof el.setSelectionRange === 'function') {
      el.setSelectionRange(saved.start, saved.end);
    }
  } catch (_) {}
}

function render() {
  const savedFocus = captureSearchFocus();
  const content = document.getElementById('content');
  switch (state.currentPage) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'scripts': content.innerHTML = renderScriptsList(); break;
    case 'script': content.innerHTML = renderScriptDetail(); break;
    case 'otabotki': content.innerHTML = renderOtabotkiCatalog(); break;
    case 'catalog': content.innerHTML = renderCatalog(); break;
    case 'settings': content.innerHTML = renderSettings(); break;
    default: content.innerHTML = '<p>Страница не найдена</p>';
  }
  updateSyncBadge();
  // Восстанавливаем фокус и позицию курсора после полной перерисовки
  if (savedFocus) {
    // requestAnimationFrame — после вставки DOM
    requestAnimationFrame(() => restoreSearchFocus(savedFocus));
  }
}

function matchQuery(text, q) {
  if (!q) return true;
  const hay = String(text || '').toLowerCase();
  return q.split(/\s+/).filter(Boolean).every(w => hay.includes(w));
}

/** Марки + короткие теги/опечатки для быстрого поиска */
const CAR_BRANDS = [
  { name: 'Toyota', tags: ['тойота', 'тайота', 'таота', 'тоета', 'toyota', 'тойта'] },
  { name: 'Lada', tags: ['лада', 'ваз', 'lada', 'жигули'] },
  { name: 'Hyundai', tags: ['хендай', 'хундай', 'хёндай', 'hyundai', 'хендэ'] },
  { name: 'Kia', tags: ['киа', 'kia', 'кия'] },
  { name: 'BMW', tags: ['бмв', 'bmw', 'беха', 'бимер'] },
  { name: 'Mercedes', tags: ['мерседес', 'mercedes', 'мерс', 'benz', 'бенц'] },
  { name: 'Audi', tags: ['ауди', 'audi'] },
  { name: 'Volkswagen', tags: ['фольксваген', 'volkswagen', 'vw', 'фольц', 'фолькс'] },
  { name: 'Nissan', tags: ['ниссан', 'nissan', 'нисан'] },
  { name: 'Honda', tags: ['хонда', 'honda'] },
  { name: 'Mazda', tags: ['мазда', 'mazda'] },
  { name: 'Mitsubishi', tags: ['мицубиси', 'mitsubishi', 'митсубиси', 'мицу'] },
  { name: 'Renault', tags: ['рено', 'renault'] },
  { name: 'Skoda', tags: ['шкода', 'skoda'] },
  { name: 'Ford', tags: ['форд', 'ford'] },
  { name: 'Geely', tags: ['джили', 'geely', 'гели'] },
  { name: 'Chery', tags: ['чери', 'chery', 'chary'] },
  { name: 'Haval', tags: ['хавал', 'haval', 'хавейл'] },
  { name: 'Changan', tags: ['чанган', 'changan'] },
  { name: 'Exeed', tags: ['эксид', 'exeed', 'ексид'] },
  { name: 'Volvo', tags: ['вольво', 'volvo'] },
  { name: 'Lexus', tags: ['лексус', 'lexus'] },
  { name: 'Land Rover', tags: ['ленд ровер', 'land rover', 'ренж', 'range'] },
  { name: 'Porsche', tags: ['порше', 'porsche'] },
  { name: 'Subaru', tags: ['субару', 'subaru'] },
  { name: 'Suzuki', tags: ['сузуки', 'suzuki'] },
  { name: 'Peugeot', tags: ['пежо', 'peugeot'] },
  { name: 'Citroen', tags: ['ситроен', 'citroen', 'citroën'] },
  { name: 'Opel', tags: ['опель', 'opel'] },
  { name: 'Chevrolet', tags: ['шевроле', 'chevrolet', 'шеви'] },
  { name: 'GAZ', tags: ['газ', 'gaz', 'газель'] },
  { name: 'UAZ', tags: ['уаз', 'uaz'] },
  { name: 'Genesis', tags: ['генезис', 'genesis'] },
  { name: 'Infiniti', tags: ['инфинити', 'infiniti'] },
  { name: 'Jeep', tags: ['джип', 'jeep'] },
  { name: 'Tesla', tags: ['тесла', 'tesla'] },
  { name: 'BYD', tags: ['бид', 'byd'] },
  { name: 'Omoda', tags: ['омода', 'omoda'] },
  { name: 'Jaecoo', tags: ['джаеку', 'jaecoo', 'jaeco'] },
  { name: 'Tank', tags: ['танк', 'tank'] },
  { name: 'Moskvich', tags: ['москвич', 'moskvich'] }
];

function searchCarBrands(q) {
  const query = (q || '').toLowerCase().trim();
  if (!query) return CAR_BRANDS.slice(0, 12);
  const words = query.split(/\s+/).filter(Boolean);
  return CAR_BRANDS.filter(b => {
    const hay = [b.name.toLowerCase(), ...(b.tags || [])].join(' ');
    return words.every(w => hay.includes(w) || b.name.toLowerCase().includes(w));
  }).slice(0, 24);
}

function shortTitle(t, n = 72) {
  const s = String(t || '');
  return s.length > n ? s.slice(0, n).trim() + '…' : s;
}


function ensureCarsModel() {
  if (!Array.isArray(state.cars) || state.cars.length === 0) {
    try {
      const raw = localStorage.getItem('ect_cars_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) state.cars = parsed;
      }
    } catch (e) {}
  }
  if (!Array.isArray(state.cars) || state.cars.length === 0) {
    state.cars = DEFAULT_CARS.map(c => ({ ...c, tags: [...(c.tags || [])] }));
  }
  // normalize tags
  state.cars.forEach(c => {
    if (!Array.isArray(c.tags)) c.tags = [];
    c.tags = c.tags.map(t => String(t).toLowerCase().trim()).filter(Boolean);
  });
}

function persistCarsLocal() {
  try { localStorage.setItem('ect_cars_v1', JSON.stringify(state.cars || [])); } catch (e) {}
}

function searchCars(q) {
  ensureCarsModel();
  const query = (q || '').toLowerCase().trim();
  if (!query) return state.cars.slice();
  const words = query.split(/\s+/).filter(Boolean);
  return state.cars.filter(c => {
    const hay = [c.brand, c.model, c.price, c.description, c.transmission, c.engine, c.power, c.fuel, ...(c.tags || [])]
      .join(' ').toLowerCase();
    return words.every(w => hay.includes(w));
  });
}

function renderHome() {
  ensureOtabotkiModel();
  const q = (state.homeQuery || '').toLowerCase().trim();
  const total = state.scripts.length;
  const otCount = (state.sharedOtabotki || []).length;

  let scripts = state.scripts.slice();
  let otabotki = buildOtabotkiIndex();
  ensureCarsModel();
  let cars = searchCars(q).slice(0, q ? 24 : 12);

  if (q) {
    scripts = scripts.filter(s => matchQuery(
      [s.title, s.category, s.plainContent].join(' '), q
    ));
    otabotki = otabotki.filter(o => matchQuery(
      [o.title, o.text, o.categories.join(' '), o.scriptTitles.join(' ')].join(' '), q
    ));
  }

  scripts = [...scripts].sort((a, b) => {
    if (q) return a.title.localeCompare(b.title, 'ru');
    return (b.opens || 0) - (a.opens || 0) || b.updatedAt - a.updatedAt;
  }).slice(0, q ? 24 : 10);

  otabotki = (q ? otabotki : otabotki.slice(0, 10)).slice(0, q ? 24 : 10);

  return `
    <div class="home-quick">
      <div class="home-search-wrap card">
        <label class="home-search-label" for="homeSearch">Быстрый поиск</label>
        <input type="search" class="home-search-input" id="homeSearch"
          placeholder="Скрипт, отработка или авто (тайота, бмв, киа)…"
          value="${escapeAttr(state.homeQuery || '')}" autocomplete="off" />
        <div class="home-search-meta">
          <span>${total} скриптов · ${otCount} отработок · ${(state.cars || []).length} авто</span>
          ${q
            ? `<span>Найдено: <b>${scripts.length}</b> / <b>${otabotki.length}</b> / <b>${cars.length}</b> авто</span>`
            : '<span>Один поиск — скрипты, отработки и машины</span>'}
        </div>
        <div class="home-quick-actions">
          <button class="btn btn-sm btn-outline" data-action="nav" data-page="scripts">Скрипты</button>
          <button class="btn btn-sm btn-outline" data-action="nav" data-page="otabotki">Отработки</button>
          <button class="btn btn-sm btn-outline" data-action="nav" data-page="catalog">Автокаталог</button>
          ${canEdit() ? '<button class="btn btn-sm btn-primary" data-action="add-script">+ Скрипт</button>' : ''}
        </div>
      </div>

      <div class="home-results home-results-3">
        <section class="card home-col">
          <div class="section-title">
            <span>📜 Скрипты</span>
            <button class="btn btn-sm btn-outline" data-action="nav" data-page="scripts">Все →</button>
          </div>
          ${scripts.length === 0
            ? `<div class="home-empty">${q ? 'Ничего не найдено' : 'Нет скриптов'}</div>`
            : `<div class="home-list">${scripts.map(s => `
                <button type="button" class="home-row" data-action="open-script" data-id="${s.id}">
                  <span class="home-row-title">${escapeHtml(shortTitle(s.title, 90))}</span>
                  <span class="home-row-meta">
                    ${s.category ? `<span class="badge badge-primary">${escapeHtml(s.category)}</span>` : ''}
                    ${(s.otabotkiIds || []).length ? `<span class="badge badge-teal">🔄 ${(s.otabotkiIds || []).length}</span>` : ''}
                    ${(s.opens || 0) ? `<span class="badge">👁 ${s.opens}</span>` : ''}
                  </span>
                </button>
              `).join('')}</div>`
          }
        </section>

        <section class="card home-col">
          <div class="section-title">
            <span>🔄 Отработки</span>
            <button class="btn btn-sm btn-outline" data-action="nav" data-page="otabotki">Все →</button>
          </div>
          ${otabotki.length === 0
            ? `<div class="home-empty">${q ? 'Ничего не найдено' : 'Нет отработок'}</div>`
            : `<div class="home-list">${otabotki.map(o => `
                <button type="button" class="home-row" ${o.scripts[0] ? `data-action="open-script" data-id="${o.scripts[0].id}"` : 'disabled'}>
                  <span class="home-row-title">${escapeHtml(shortTitle(o.title, 80))}</span>
                  <span class="home-row-meta">
                    ${o.categories.slice(0, 2).map(c => `<span class="badge badge-primary">${escapeHtml(c)}</span>`).join('') || '<span class="badge">—</span>'}
                    <span class="badge badge-teal">${o.scripts.length} скр.</span>
                  </span>
                </button>
              `).join('')}</div>`
          }
        </section>

        <section class="card home-col">
          <div class="section-title">
            <span>🚗 Авто</span>
            <button class="btn btn-sm btn-outline" data-action="nav" data-page="catalog">Каталог →</button>
          </div>
          ${cars.length === 0
            ? `<div class="home-empty">${q ? 'Не найдено — попробуйте тег (тайота, бмв)' : 'Введите марку или тег'}</div>`
            : `<div class="home-list home-cars">${cars.map(c => `
                <button type="button" class="home-row home-car-row" data-action="nav" data-page="catalog" title="Теги: ${(c.tags || []).slice(0, 6).join(', ')}">
                  <span class="home-row-title">${escapeHtml(c.brand)} ${escapeHtml(c.model)}</span>
                  <span class="home-row-meta home-car-tags">
                    ${c.price ? `<span class="badge">${escapeHtml(c.price)}</span>` : ''}
                    ${(c.tags || []).slice(0, 3).map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
                  </span>
                </button>
              `).join('')}</div>`
          }
        </section>
      </div>
    </div>
  `;
}

function renderScriptsList() {
  const q = state.searchQuery.toLowerCase().trim();
  let list = state.scripts;
  if (q) {
    list = list.filter(s =>
      s.title.toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q) ||
      (s.plainContent || '').toLowerCase().includes(q)
    );
  }
  list = [...list].sort((a, b) => b.updatedAt - a.updatedAt);

  return `
    <div class="search-bar">
      <input type="search" class="search-input" id="searchInput" placeholder="Поиск по названию, категории, тексту..." value="${escapeAttr(state.searchQuery)}">
      <button class="btn btn-primary" data-action="add-script">+ Новый скрипт</button>
    </div>
    ${list.length === 0
      ? `<div class="empty-state">
          <div class="empty-icon">📜</div>
          <p>${q ? 'Ничего не найдено' : 'Скриптов пока нет'}</p>
          <button class="btn btn-primary" style="margin-top:14px" data-action="add-script">+ Добавить первый</button>
        </div>`
      : `<div class="card-grid">${list.map(s => `
          <article class="card script-card">
            <div class="script-card-body card-interactive" data-action="open-script" data-id="${s.id}">
              <h3>${escapeHtml(s.title)}</h3>
              <div class="script-meta">
                ${s.category ? `<span class="badge badge-primary">${escapeHtml(s.category)}</span>` : ''}
                <span class="badge badge-teal">🔄 ${(s.otabotkiIds || []).length || countTree(s.otabotki || [])}</span>
                <span class="badge badge-danger">⚠ ${countTree(s.shtrafy || [])}</span>
                <span class="badge">👁 ${s.opens || 0}</span>
              </div>
              <p class="script-card-date">${formatDate(s.updatedAt)}</p>
            </div>
            ${canEdit() ? `<div class="script-card-footer">
              <button class="btn btn-outline btn-sm" data-action="edit-script" data-id="${s.id}">✏️ Редактировать</button>
              <button class="btn btn-danger btn-sm" data-action="delete-script" data-id="${s.id}">🗑 Удалить</button>
            </div>` : ''}
          </article>
        `).join('')}</div>`
    }
  `;
}

function countTree(items) {
  if (!items) return 0;
  let n = items.length;
  for (const it of items) n += countTree(it.children);
  return n;
}

function renderTreeItems(items, scriptId, type, depth = 0) {
  if (!items || !items.length) return '';
  return items.map(item => {
    const hasChildren = item.children && item.children.length > 0;
    const expKey = type + ':' + item.id;
    const expanded = state.expandedNodes[expKey] !== false;
    const isOpen = state.collapsedBlocks[item.id] !== true;
    return `
      <div class="tree-node" style="margin-left:${depth * 14}px">
        <div class="crm-hint crm-hint-${type === 'otabotki' ? 'otabotka' : 'shtraf'}" 
             data-action="toggle-item-text" data-id="${item.id}">
          <div class="crm-hint-title">
            <span class="tree-title-row">
              ${hasChildren ? `<button class="tree-toggle" data-action="toggle-node" data-key="${expKey}">${expanded ? '▼' : '▶'}</button>` : '<span class="tree-dot">•</span>'}
              <span>${escapeHtml(item.title)}</span>
            </span>
            <span class="item-actions">
              <button class="btn-icon" data-action="add-child-item" data-sid="${scriptId}" data-type="${type}" data-pid="${item.id}" title="Добавить вложенную">➕</button>
              <button class="btn-icon" data-action="edit-item" data-sid="${scriptId}" data-type="${type}" data-iid="${item.id}" title="Редактировать">✏️</button>
              <button class="btn-icon" data-action="delete-item" data-sid="${scriptId}" data-type="${type}" data-iid="${item.id}" title="Удалить">🗑</button>
              <span class="expand-icon ${isOpen ? 'open' : ''}" data-action="toggle-item-text" data-id="${item.id}">${isOpen ? '▲' : '▼'}</span>
            </span>
          </div>
          ${item.text ? `<div class="crm-hint-text ${isOpen ? 'open' : ''}">${escapeHtml(item.text)}</div>` : ''}
        </div>
        ${hasChildren && expanded ? renderTreeItems(item.children, scriptId, type, depth + 1) : ''}
      </div>
    `;
  }).join('');
}

function renderScriptDetail() {
  const script = state.scripts.find(s => s.id === state.currentScriptId);
  if (!script) {
    return `<div class="empty-state"><p>Скрипт не найден</p>
      <button class="btn btn-outline" data-action="nav" data-page="scripts">← К списку</button></div>`;
  }

  const otabotki = resolveScriptOtabotki(script);
  const shtrafy = script.shtrafy || [];
  
  const otabotkiCollapsed = state.collapsedBlocks['otabotki_' + script.id] === true;
  const shtrafyCollapsed = state.collapsedBlocks['shtrafy_' + script.id] === true;

  return `
    <div class="script-detail-full">
      <div class="script-detail-top">
        <div class="script-detail-top-left">
          <button class="btn btn-sm btn-outline" data-action="nav" data-page="scripts">← Назад</button>
          <span style="font-size:0.9rem;color:var(--text-muted)">${escapeHtml(script.category || 'Без категории')}</span>
        </div>
        <div class="actions-row">
          <button class="btn btn-outline btn-sm" data-action="edit-script" data-id="${script.id}">✏️ Редактировать</button>
          <button class="btn btn-danger btn-sm" data-action="delete-script" data-id="${script.id}">🗑 Удалить</button>
        </div>
      </div>

      <div class="crm-layout">
        <aside class="crm-side">
          <section class="crm-block">
            <div class="crm-block-head crm-block-head-script">
              <span>📄 ${escapeHtml(script.title)}</span>
              <span class="badge">👁 ${script.opens || 0}</span>
            </div>
            <div class="crm-block-body" style="padding:12px; gap:4px;">
              <div style="font-size:0.85rem;color:var(--text-muted)">Обновлён ${formatDate(script.updatedAt)}</div>
            </div>
          </section>

          <section class="crm-block">
            <div class="crm-block-head crm-block-head-teal" data-action="toggle-block" data-key="otabotki_${script.id}">
              <span>🔄 Отработки <span class="badge badge-teal">${countTree(otabotki)}</span></span>
              <span>
                <button class="btn btn-sm btn-ghost" data-action="pick-otabotka" data-id="${script.id}" title="Из списка">📋</button>
                <button class="btn btn-sm btn-ghost" data-action="add-item" data-id="${script.id}" data-type="otabotki" title="Создать новую">+</button>
                <span class="expand-icon ${otabotkiCollapsed ? '' : 'open'}">${otabotkiCollapsed ? '▼' : '▲'}</span>
              </span>
            </div>
            <div class="crm-block-body ${otabotkiCollapsed ? 'collapsed' : ''}">
              ${otabotki.length === 0
                ? '<div class="crm-empty">Нет отработок. Создайте (+) или возьмите из списка (📋)</div>'
                : renderTreeItems(otabotki, script.id, 'otabotki')}
            </div>
          </section>

          <section class="crm-block">
            <div class="crm-block-head crm-block-head-danger" data-action="toggle-block" data-key="shtrafy_${script.id}">
              <span>⚠ Штрафы <span class="badge badge-danger">${countTree(shtrafy)}</span></span>
              <span>
                <button class="btn btn-sm btn-ghost" data-action="add-item" data-id="${script.id}" data-type="shtrafy" title="Добавить">+</button>
                <span class="expand-icon ${shtrafyCollapsed ? '' : 'open'}">${shtrafyCollapsed ? '▼' : '▲'}</span>
              </span>
            </div>
            <div class="crm-block-body ${shtrafyCollapsed ? 'collapsed' : ''}">
              ${shtrafy.length === 0
                ? '<div class="crm-empty">Пока нет штрафов</div>'
                : renderTreeItems(shtrafy, script.id, 'shtrafy')}
            </div>
          </section>
        </aside>

        <main class="crm-script">
          <div class="crm-script-label">📄 Текст скрипта</div>
          <div class="crm-script-body">${sanitizeScriptHtml(script.content || '')}</div>
        </main>
      </div>
    </div>
  `;
}

function buildOtabotkiIndex() {
  ensureOtabotkiModel();
  return (state.sharedOtabotki || []).map(o => {
    const used = scriptsUsingOtabotka(o.id);
    const scriptTitles = used.map(s => s.title);
    const scriptCats = [...new Set(used.map(s => s.category || 'Без категории').filter(Boolean))];
    const cats = [...new Set([...(o.categories || []), ...scriptCats])];
    return {
      id: o.id,
      title: o.title || '',
      text: o.text || '',
      categories: cats,
      scripts: used.map(s => ({ id: s.id, title: s.title, category: s.category || '' })),
      scriptTitles,
      childrenCount: countTree(o.children || [])
    };
  });
}

function renderOtabotkiCatalog() {
  const q = (state.otabotkiQuery || '').toLowerCase().trim();
  const catFilter = state.otabotkiCat || '';
  const scriptFilter = state.otabotkiScriptFilter || '';
  const canChange = canEdit();

  let list = buildOtabotkiIndex();

  const categories = [...new Set([
    ...list.flatMap(x => x.categories),
    ...allCategoriesFromScripts()
  ])].filter(Boolean).sort((a, b) => a.localeCompare(b, 'ru'));

  const scriptOptions = state.scripts
    .map(s => ({ id: s.id, title: s.title, category: s.category || '' }))
    .sort((a, b) => a.title.localeCompare(b.title, 'ru'));

  if (catFilter) {
    list = list.filter(x => x.categories.some(c => c === catFilter));
  }
  if (scriptFilter) {
    list = list.filter(x => x.scripts.some(s => s.id === scriptFilter));
  }
  if (q) {
    list = list.filter(x => {
      const hay = [
        x.title,
        x.text,
        x.categories.join(' '),
        x.scriptTitles.join(' '),
        x.scripts.map(s => s.category).join(' ')
      ].join(' ').toLowerCase();
      // Поддержка нескольких слов: все должны встретиться
      return q.split(/\s+/).filter(Boolean).every(word => hay.includes(word));
    });
  }

  list = list.sort((a, b) => a.title.localeCompare(b.title, 'ru'));

  return `
    <div class="card" style="margin-bottom:16px;padding:14px 16px">
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between">
        <div>
          <strong>Список отработок</strong>
          <p style="margin:4px 0 0;font-size:0.85rem;color:var(--text-muted)">
            Все отработки в одном месте. Создайте здесь или в скрипте — они появятся в списке.
            В скрипт можно добавить из списка (📋) или написать новую (+).
          </p>
        </div>
        ${canChange ? `<button class="btn btn-primary btn-sm" data-action="add-shared-otabotka">+ Новая отработка</button>` : ''}
      </div>
    </div>

    <div class="search-bar" style="flex-wrap:wrap">
      <input type="search" class="search-input" id="otabotkiSearch"
        placeholder="Поиск: название, текст, категория, скрипт (несколько слов)..."
        value="${escapeAttr(state.otabotkiQuery || '')}" style="flex:1;min-width:220px">
      <select class="search-input" id="otabotkiCat" style="flex:0 0 160px;cursor:pointer">
        <option value="">Все категории</option>
        ${categories.map(c => `<option value="${escapeAttr(c)}" ${c === catFilter ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
      </select>
      <select class="search-input" id="otabotkiScriptFilter" style="flex:0 0 220px;cursor:pointer">
        <option value="">Все скрипты</option>
        ${scriptOptions.map(s => `<option value="${s.id}" ${s.id === scriptFilter ? 'selected' : ''}>${escapeHtml(s.title)}${s.category ? ' · ' + escapeHtml(s.category) : ''}</option>`).join('')}
      </select>
    </div>
    <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:16px">
      Найдено: <b>${list.length}</b> из ${(state.sharedOtabotki || []).length}
    </p>

    ${list.length === 0
      ? '<div class="empty-state"><div class="empty-icon">🔄</div><p>Отработок не найдено. Создайте первую.</p></div>'
      : `<div class="ot-grid">${list.map(item => `
          <article class="ot-card">
            <div class="ot-card-body">
              <h3 class="ot-card-title">${escapeHtml(item.title)}</h3>
              <div class="ot-card-badges">
                ${item.categories.map(c => `<span class="badge badge-primary">${escapeHtml(c)}</span>`).join('') || '<span class="badge">Без категории</span>'}
                <span class="badge badge-teal">${item.scripts.length} скрипт(ов)</span>
              </div>
              ${item.scripts.length
                ? `<div class="ot-card-scripts">${item.scripts.slice(0, 4).map(s =>
                    `<button type="button" class="ot-script-chip" data-action="open-script" data-id="${s.id}" title="${escapeAttr(s.title)}">${escapeHtml(shortTitle(s.title, 36))}${s.category ? ' · ' + escapeHtml(s.category) : ''}</button>`
                  ).join('')}${item.scripts.length > 4 ? `<span class="ot-more">+${item.scripts.length - 4}</span>` : ''}</div>`
                : '<p class="ot-card-hint">Не привязана к скриптам</p>'}
              ${item.text ? `<p class="ot-card-text">${escapeHtml(item.text.slice(0, 160))}${item.text.length > 160 ? '…' : ''}</p>` : ''}
            </div>
            ${canChange ? `<div class="ot-card-footer">
              <button class="btn btn-outline btn-sm" data-action="edit-shared-otabotka" data-id="${item.id}">✏️ Править</button>
              <button class="btn btn-outline btn-sm" data-action="attach-otabotka-prompt" data-id="${item.id}">➕ В скрипт</button>
              <button class="btn btn-danger btn-sm" data-action="delete-shared-otabotka" data-id="${item.id}">🗑</button>
            </div>` : ''}
          </article>
        `).join('')}</div>`
    }
  `;
}

function renderCatalog() {
  ensureCarsModel();
  const q = (state.catalogQuery || '').toLowerCase().trim();
  const brandFilter = state.catalogBrand || '';
  const canChange = canEdit();

  let list = searchCars(q);
  if (brandFilter) {
    list = list.filter(c => c.brand === brandFilter);
  }
  list = [...list].sort((a, b) => {
    const ba = a.brand.localeCompare(b.brand, 'ru');
    return ba !== 0 ? ba : a.model.localeCompare(b.model, 'ru');
  });

  const brands = [...new Set((state.cars || []).map(c => c.brand))].sort((a, b) => a.localeCompare(b, 'ru'));

  return `
    <div class="catalog-toolbar card">
      <div class="catalog-toolbar-row">
        <div>
          <strong>Автокаталог</strong>
          <p class="catalog-hint">Поиск по марке, модели и <b>тегам</b> (тайота, бмв, киа…). Теги помогают при опечатках.</p>
        </div>
        ${canChange ? `<button class="btn btn-primary btn-sm" data-action="add-car">+ Автомобиль</button>` : ''}
      </div>
      <div class="catalog-filters">
        <input type="search" class="search-input" id="catalogSearch"
          placeholder="Поиск: тайота, бмв, vesta, цена…"
          value="${escapeAttr(state.catalogQuery || '')}" style="flex:1;min-width:200px">
        <select class="search-input" id="catalogBrand" style="flex:0 0 180px;cursor:pointer">
          <option value="">Все марки</option>
          ${brands.map(b => `<option value="${escapeAttr(b)}" ${b === brandFilter ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
        </select>
      </div>
      <p class="catalog-count">Найдено: <b>${list.length}</b> из ${(state.cars || []).length}</p>
    </div>

    ${list.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🚗</div><p>Ничего не найдено. Измените запрос или добавьте авто.</p></div>`
      : `<div class="car-grid">${list.map(c => `
          <article class="car-card">
            <div class="car-card-body">
              <div class="car-card-top">
                <h3 class="car-card-title">${escapeHtml(c.brand)} <span class="car-model">${escapeHtml(c.model)}</span></h3>
                ${c.country ? `<span class="badge">${escapeHtml(c.country)}</span>` : ''}
              </div>
              ${c.price ? `<div class="car-price">${escapeHtml(c.price)}</div>` : ''}
              <div class="car-specs">
                ${c.engine ? `<span class="car-spec">${escapeHtml(c.engine)}</span>` : ''}
                ${c.power ? `<span class="car-spec">${escapeHtml(c.power)}</span>` : ''}
                ${c.fuel ? `<span class="car-spec">${escapeHtml(c.fuel)}</span>` : ''}
                ${c.transmission ? `<span class="car-spec">${escapeHtml(c.transmission)}</span>` : ''}
              </div>
              ${c.description ? `<p class="car-desc">${escapeHtml(c.description)}</p>` : ''}
              ${(c.tags && c.tags.length) ? `<div class="car-tags">${c.tags.slice(0, 8).map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
            </div>
            ${canChange ? `<div class="car-card-footer">
              <button class="btn btn-outline btn-sm" data-action="edit-car" data-id="${escapeAttr(c.id)}">✏️ Править</button>
              <button class="btn btn-danger btn-sm" data-action="delete-car" data-id="${escapeAttr(c.id)}">🗑</button>
            </div>` : ''}
          </article>
        `).join('')}</div>`
    }
  `;
}

function showCarModal(id) {
  if (isCommonAccount()) { toast('Только просмотр', 'error'); return; }
  ensureCarsModel();
  const item = id ? (state.cars || []).find(c => c.id === id) : null;
  openModal(
    item ? 'Редактировать автомобиль' : 'Новый автомобиль',
    `<div class="form-group"><label>Марка</label><input type="text" id="fCarBrand" value="${escapeAttr(item ? item.brand : '')}" placeholder="Toyota"></div>
     <div class="form-group"><label>Модель</label><input type="text" id="fCarModel" value="${escapeAttr(item ? item.model : '')}" placeholder="Camry"></div>
     <div class="form-group"><label>Цена</label><input type="text" id="fCarPrice" value="${escapeAttr(item ? item.price : '')}" placeholder="2 500 000 ₽"></div>
     <div class="form-group"><label>КПП</label><input type="text" id="fCarTrans" value="${escapeAttr(item ? item.transmission : '')}" placeholder="Автомат"></div>
     <div class="form-row-2">
       <div class="form-group"><label>Двигатель</label><input type="text" id="fCarEngine" value="${escapeAttr(item ? item.engine : '')}" placeholder="2.0 л"></div>
       <div class="form-group"><label>Мощность</label><input type="text" id="fCarPower" value="${escapeAttr(item ? item.power : '')}" placeholder="150 л.с."></div>
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Топливо</label><input type="text" id="fCarFuel" value="${escapeAttr(item ? item.fuel : '')}" placeholder="АИ-95"></div>
       <div class="form-group"><label>Страна</label><input type="text" id="fCarCountry" value="${escapeAttr(item ? item.country : '')}" placeholder="JPN"></div>
     </div>
     <div class="form-group"><label>Описание</label><textarea id="fCarDesc" rows="3">${escapeHtml(item ? (item.description || '') : '')}</textarea></div>
     <div class="form-group"><label>Теги / запасные названия</label>
       <input type="text" id="fCarTags" value="${escapeAttr(item ? (item.tags || []).join(', ') : '')}"
         placeholder="тайота, таота, toyota, камри — через запятую">
       <p class="field-hint">По этим словам будет находиться авто при быстром поиске (опечатки, сокращения).</p>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-car" ${item ? `data-id="${item.id}"` : ''}>Сохранить</button>`
  );
}

async function saveCar(id) {
  if (isCommonAccount()) return;
  ensureCarsModel();
  const brand = document.getElementById('fCarBrand')?.value.trim();
  const model = document.getElementById('fCarModel')?.value.trim();
  if (!brand || !model) { toast('Укажите марку и модель', 'error'); return; }
  const tags = (document.getElementById('fCarTags')?.value || '')
    .split(/[,;]+/).map(s => s.trim().toLowerCase()).filter(Boolean);
  // auto-add brand lower
  if (!tags.includes(brand.toLowerCase())) tags.unshift(brand.toLowerCase());

  const payload = {
    brand,
    model,
    price: document.getElementById('fCarPrice')?.value.trim() || '',
    transmission: document.getElementById('fCarTrans')?.value.trim() || '',
    engine: document.getElementById('fCarEngine')?.value.trim() || '',
    power: document.getElementById('fCarPower')?.value.trim() || '',
    fuel: document.getElementById('fCarFuel')?.value.trim() || '',
    country: document.getElementById('fCarCountry')?.value.trim() || '',
    description: document.getElementById('fCarDesc')?.value.trim() || '',
    tags
  };

  if (id) {
    const item = state.cars.find(c => c.id === id);
    if (!item) { toast('Не найдено', 'error'); return; }
    Object.assign(item, payload);
  } else {
    state.cars.push({ id: uid(), ...payload });
  }
  persistCarsLocal();
  closeModal();
  toast('Автомобиль сохранён');
  render();
}

async function deleteCar(id) {
  if (isCommonAccount()) return;
  ensureCarsModel();
  state.cars = (state.cars || []).filter(c => c.id !== id);
  persistCarsLocal();
  toast('Удалено');
  render();
}


function renderSettings() {
  const s = state.settings;
  const c = state.cloud;
  return `
    <div class="settings-section card">
      <h3>☁ Облачное хранилище (Google Таблица)</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:14px;line-height:1.6">
        Данные хранятся в <a href="https://docs.google.com/spreadsheets/d/10gitlvnBGl9i-wXtBZU3yfSCtu5SiIfitKAMeu0GweA/edit" target="_blank" rel="noopener" style="color:var(--primary)">Google Таблице</a>.<br>
        1. Открой таблицу → <b>Расширения → Apps Script</b><br>
        2. Вставь код из файла <code>Code.gs</code> → Сохрани<br>
        3. <b>Развернуть → Веб-приложение</b> → доступ «Все» → скопируй URL<br>
        4. Вставь URL ниже и нажми «Подключить»
      </p>
      <div class="form-group">
        <label>URL веб-приложения Apps Script</label>
        <input type="text" id="cfgSheetsUrl" value="${escapeAttr(c.sheetsUrl || '')}" placeholder="https://script.google.com/macros/s/..../exec">
      </div>
      <div class="actions-row">
        <button class="btn btn-primary btn-sm" data-action="save-cloud">Подключить / Сохранить</button>
        <button class="btn btn-outline btn-sm" data-action="sync-now">Обновить сейчас</button>
        <button class="btn btn-outline btn-sm" data-action="disconnect-cloud">Отключить облако</button>
      </div>
      <p style="margin-top:12px;font-size:0.85rem;color:var(--text-muted)">
        Статус: <strong>${c.enabled ? (c.status === 'ok' ? 'подключено (Google Sheets)' : c.status) : 'только локально'}</strong>
        ${c.lastSync ? ' · последняя синхронизация: ' + new Date(c.lastSync).toLocaleTimeString('ru-RU') : ''}
      </p>
    </div>

    <div class="settings-section card">
      <h3>Тема оформления</h3>
      <div class="layout-options">
        <div class="layout-option ${s.theme === 'dark' ? 'active' : ''}" data-action="set-theme" data-theme="dark">🌙 Тёмная</div>
        <div class="layout-option ${s.theme === 'light' ? 'active' : ''}" data-action="set-theme" data-theme="light">☀️ Светлая</div>
      </div>
    </div>

    <div class="settings-section card">
      <h3>Локальные данные</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:14px">
        Экспорт/импорт JSON — запасной способ переноса.
      </p>
      <div class="actions-row">
        <button class="btn btn-primary btn-sm" data-action="export">📥 Экспорт JSON</button>
        <button class="btn btn-outline btn-sm" data-action="import-click">📤 Импорт JSON</button>
        <button class="btn btn-danger btn-sm" data-action="reset">🗑 Сбросить локально</button>
        <button class="btn btn-outline btn-sm" data-action="clean-backgrounds">🧹 Убрать чёрные подложки</button>
      </div>
    </div>
  `;
}

/* ========== Actions ========== */
function showAddScriptModal() {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  openModal(
    'Новый скрипт',
    `<div class="form-group"><label>Название</label><input type="text" id="fTitle" placeholder="Например: Входящий звонок"></div>
     <div class="form-group"><label>Категория</label><input type="text" id="fCategory" placeholder="Медицина, Авто..."></div>
     <div class="form-group"><label>Текст скрипта</label>
       <div class="editor-toolbar">
         <button class="color-btn red" data-action="apply-color" data-color="#ef4444" title="Красный (Ctrl+1)"></button>
         <button class="color-btn blue" data-action="apply-color" data-color="#3b82f6" title="Синий (Ctrl+2)"></button>
         <button class="color-btn yellow" data-action="apply-color" data-color="#fbbf24" title="Жёлтый (Ctrl+3)"></button>
         <button class="color-btn orange" data-action="apply-color" data-color="#f97316" title="Оранжевый (Ctrl+4)"></button>
         <button class="color-btn green" data-action="apply-color" data-color="#22c55e" title="Зелёный (Ctrl+5)"></button>
         <button class="color-btn purple" data-action="apply-color" data-color="#a855f7" title="Фиолетовый (Ctrl+6)"></button>
         <button class="toolbar-btn" data-action="editor-cmd" data-cmd="bold" title="Жирный (Ctrl+B)"><b>B</b></button>
         <button class="toolbar-btn" data-action="editor-cmd" data-cmd="italic" title="Курсив (Ctrl+I)"><i>I</i></button>
         <button class="toolbar-btn" data-action="editor-cmd" data-cmd="underline" title="Подчёркнутый (Ctrl+U)"><u>U</u></button>
         <button class="toolbar-btn" data-action="editor-clear-format" title="Убрать формат (Ctrl+0)">✕</button>
         <span class="toolbar-hint">Выделите текст · Ctrl+1…6 цвет</span>
       </div>
       <div class="editor-content" id="editorContent" contenteditable="true" spellcheck="true"></div>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-new-script">Сохранить</button>`
  );
  setTimeout(() => {
    const ed = document.getElementById('editorContent');
    if (ed) {
      ed.focus();
      bindEditorPasteCleanup(ed);
    }
  }, 100);
}

async function saveNewScript() {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const title = document.getElementById('fTitle')?.value.trim();
  const category = document.getElementById('fCategory')?.value.trim() || '';
  const editor = document.getElementById('editorContent');
  const content = sanitizeScriptHtml(editor ? editor.innerHTML : '');
  if (!title) { toast('Укажите название', 'error'); return; }
  const plainContent = editor ? editor.textContent : '';
  const script = {
    id: uid(), title, category, content, plainContent,
    otabotki: [], otabotkiIds: [], shtrafy: [],
    opens: 0,
    createdAt: Date.now(), updatedAt: Date.now()
  };
  state.scripts.push(script);
  const saved = await saveData();
  closeModal();
  if (saved) {
    toast('Скрипт создан и отправлен в облако');
  } else {
    toast('Скрипт сохранён локально, но в облако не отправлен', 'error');
  }
  navigate('script', script.id);
}

function showEditScriptModal(id) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const script = state.scripts.find(s => s.id === id);
  if (!script) return;
  openModal(
    'Редактировать скрипт',
    `<div class="form-group"><label>Название</label><input type="text" id="fTitle" value="${escapeAttr(script.title)}"></div>
     <div class="form-group"><label>Категория</label><input type="text" id="fCategory" value="${escapeAttr(script.category || '')}"></div>
     <div class="form-group"><label>Текст скрипта</label>
       <div class="editor-toolbar">
         <button class="color-btn red" data-action="apply-color" data-color="#ef4444" title="Красный (Ctrl+1)"></button>
         <button class="color-btn blue" data-action="apply-color" data-color="#3b82f6" title="Синий (Ctrl+2)"></button>
         <button class="color-btn yellow" data-action="apply-color" data-color="#fbbf24" title="Жёлтый (Ctrl+3)"></button>
         <button class="color-btn orange" data-action="apply-color" data-color="#f97316" title="Оранжевый (Ctrl+4)"></button>
         <button class="color-btn green" data-action="apply-color" data-color="#22c55e" title="Зелёный (Ctrl+5)"></button>
         <button class="color-btn purple" data-action="apply-color" data-color="#a855f7" title="Фиолетовый (Ctrl+6)"></button>
         <button class="toolbar-btn" data-action="editor-cmd" data-cmd="bold" title="Жирный (Ctrl+B)"><b>B</b></button>
         <button class="toolbar-btn" data-action="editor-cmd" data-cmd="italic" title="Курсив (Ctrl+I)"><i>I</i></button>
         <button class="toolbar-btn" data-action="editor-cmd" data-cmd="underline" title="Подчёркнутый (Ctrl+U)"><u>U</u></button>
         <button class="toolbar-btn" data-action="editor-clear-format" title="Убрать формат (Ctrl+0)">✕</button>
         <span class="toolbar-hint">Выделите текст · Ctrl+1…6 цвет</span>
       </div>
       <div class="editor-content" id="editorContent" contenteditable="true" spellcheck="true">${sanitizeScriptHtml(script.content || '')}</div>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-edit-script" data-id="${id}">Сохранить</button>`
  );
  setTimeout(() => {
    const ed = document.getElementById('editorContent');
    if (!ed) return;
    bindEditorPasteCleanup(ed);
    ed.focus();
    try {
      const range = document.createRange();
      range.selectNodeContents(ed);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (_) {}
  }, 100);
}

async function saveEditScript(id) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const script = state.scripts.find(s => s.id === id);
  if (!script) return;
  const title = document.getElementById('fTitle')?.value.trim();
  if (!title) { toast('Укажите название', 'error'); return; }
  script.title = title;
  script.category = document.getElementById('fCategory')?.value.trim() || '';
  const editor = document.getElementById('editorContent');
  script.content = sanitizeScriptHtml(editor ? editor.innerHTML : '');
  script.plainContent = editor ? editor.textContent : '';
  script.updatedAt = Date.now();
  const saved = await saveData();
  closeModal();
  if (saved) {
    toast('Скрипт обновлён в облаке');
  } else {
    toast('Скрипт обновлён локально, но в облако не отправлен', 'error');
  }
  render();
}

function confirmDeleteScript(id) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  openModal(
    'Удалить скрипт?',
    '<p>Скрипт и все связанные отработки/штрафы будут удалены.</p>',
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-danger" data-action="confirm-delete-script" data-id="${id}">Удалить</button>`
  );
}

async function deleteScript(id) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  state.scripts = state.scripts.filter(s => s.id !== id);
  await saveData();
  closeModal();
  toast('Скрипт удалён');
  navigate('scripts');
}

function findInTree(items, id, parentList = null) {
  if (!items) return null;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) return { item: items[i], list: items, index: i, parentList };
    if (items[i].children) {
      const found = findInTree(items[i].children, id, items[i]);
      if (found) return found;
    }
  }
  return null;
}

function showAddItemModal(scriptId, type, parentId = null) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const label = type === 'otabotki' ? 'отработку' : 'штраф';
  const nested = parentId ? ' (вложенную)' : '';
  const note = type === 'otabotki' && !parentId
    ? '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:10px">Новая отработка попадёт в общий список и в этот скрипт.</p>'
    : '';
  openModal(
    `Добавить ${label}${nested}`,
    `${note}<div class="form-group"><label>Заголовок</label><input type="text" id="fItemTitle" placeholder="Краткое название"></div>
     <div class="form-group"><label>Текст</label><textarea id="fItemText" placeholder="Описание..."></textarea></div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-new-item" data-id="${scriptId}" data-type="${type}" ${parentId ? `data-pid="${parentId}"` : ''}>Добавить</button>`
  );
  setTimeout(() => document.getElementById('fItemTitle')?.focus(), 80);
}

async function saveNewItem(scriptId, type, parentId = null) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  const title = document.getElementById('fItemTitle')?.value.trim();
  const textVal = document.getElementById('fItemText')?.value.trim() || '';
  if (!title) { toast('Укажите заголовок', 'error'); return; }

  if (type === 'otabotki') {
    ensureOtabotkiModel();
    if (parentId) {
      // Вложенная — в children библиотечной записи
      const parent = getLibOtabotka(parentId) || findInTree(
        (script.otabotkiIds || []).map(id => getLibOtabotka(id)).filter(Boolean).flatMap(function walk(n) {
          return [n, ...(n.children || []).flatMap(c => walk(c))];
        }),
        parentId
      )?.item;
      // Ищем parent в библиотеке (включая children)
      let parentNode = null;
      const findParent = (items) => {
        for (const it of items || []) {
          if (it.id === parentId) return it;
          const f = findParent(it.children);
          if (f) return f;
        }
        return null;
      };
      parentNode = findParent(state.sharedOtabotki);
      if (!parentNode) {
        // fallback: parent is top-level lib
        parentNode = getLibOtabotka(parentId);
      }
      if (parentNode) {
        if (!parentNode.children) parentNode.children = [];
        parentNode.children.push({ id: uid(), title, text: textVal, children: [] });
        parentNode.updatedAt = Date.now();
      } else {
        toast('Родительская отработка не найдена', 'error');
        return;
      }
    } else {
      const id = uid();
      const entry = {
        id,
        title,
        text: textVal,
        categories: script.category ? [script.category] : [],
        children: [],
        updatedAt: Date.now()
      };
      state.sharedOtabotki.push(entry);
      if (!script.otabotkiIds) script.otabotkiIds = [];
      if (!script.otabotkiIds.includes(id)) script.otabotkiIds.push(id);
    }
  } else {
    const node = { id: uid(), title, text: textVal, children: [] };
    if (!script[type]) script[type] = [];
    if (parentId) {
      const found = findInTree(script[type], parentId);
      if (found) {
        if (!found.item.children) found.item.children = [];
        found.item.children.push(node);
      } else {
        script[type].push(node);
      }
    } else {
      script[type].push(node);
    }
  }

  script.updatedAt = Date.now();
  const saved = await saveData();
  closeModal();
  toast(saved ? 'Добавлено и отправлено в облако' : 'Добавлено локально, но в облако не отправлено', saved ? undefined : 'error');
  render();
}

function showEditItemModal(scriptId, type, itemId) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;

  let item = null;
  if (type === 'otabotki') {
    const findInLib = (items) => {
      for (const it of items || []) {
        if (it.id === itemId) return it;
        const f = findInLib(it.children);
        if (f) return f;
      }
      return null;
    };
    item = findInLib(state.sharedOtabotki);
  } else {
    const found = findInTree(script[type] || [], itemId);
    item = found ? found.item : (script[type] || []).find(i => i.id === itemId);
  }
  if (!item) return;
  openModal(
    'Редактировать',
    `<div class="form-group"><label>Заголовок</label><input type="text" id="fItemTitle" value="${escapeAttr(item.title)}"></div>
     <div class="form-group"><label>Текст</label><textarea id="fItemText">${escapeHtml(item.text || '')}</textarea></div>
     ${type === 'otabotki' ? '<p style="font-size:0.85rem;color:var(--text-muted)">Изменения видны во всех скриптах, где есть эта отработка.</p>' : ''}`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-edit-item" data-sid="${scriptId}" data-type="${type}" data-iid="${itemId}">Сохранить</button>`
  );
}

async function saveEditItem(scriptId, type, itemId) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  const title = document.getElementById('fItemTitle')?.value.trim();
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  const text = document.getElementById('fItemText')?.value || '';

  if (type === 'otabotki') {
    const findInLib = (items) => {
      for (const it of items || []) {
        if (it.id === itemId) return it;
        const f = findInLib(it.children);
        if (f) return f;
      }
      return null;
    };
    const item = findInLib(state.sharedOtabotki);
    if (!item) { toast('Отработка не найдена', 'error'); return; }
    item.title = title;
    item.text = text;
    item.updatedAt = Date.now();
    upsertLibCategories(item, script.category);
  } else {
    const found = findInTree(script[type] || [], itemId);
    const item = found ? found.item : (script[type] || []).find(i => i.id === itemId);
    if (!item) return;
    item.title = title;
    item.text = text;
  }
  script.updatedAt = Date.now();
  const saved = await saveData();
  closeModal();
  toast(saved ? 'Сохранено в облаке' : 'Сохранено локально, но не в облаке', saved ? undefined : 'error');
  render();
}

async function deleteItem(scriptId, type, itemId) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;

  if (type === 'otabotki') {
    // Отвязать от скрипта (в библиотеке остаётся)
    script.otabotkiIds = (script.otabotkiIds || []).filter(id => id !== itemId);
    // Если вложенная — удалить из children родителя в библиотеке
    const removeChild = (items) => {
      for (let i = 0; i < (items || []).length; i++) {
        if (items[i].id === itemId) {
          items.splice(i, 1);
          return true;
        }
        if (removeChild(items[i].children)) return true;
      }
      return false;
    };
    if (!(script.otabotkiIds || []).includes(itemId)) {
      // возможно вложенная
      removeChild(state.sharedOtabotki);
    }
  } else {
    const found = findInTree(script[type] || [], itemId);
    if (found) {
      found.list.splice(found.index, 1);
    } else {
      script[type] = (script[type] || []).filter(i => i.id !== itemId);
    }
  }
  script.updatedAt = Date.now();
  await saveData();
  toast(type === 'otabotki' ? 'Убрано из скрипта' : 'Удалено');
  render();
}

function setTheme(theme) {
  state.settings.theme = theme;
  applyTheme();
  saveLocalSettings();
  render();
}

function exportData() {
  const data = {
    scripts: state.scripts,
    sharedOtabotki: state.sharedOtabotki || [],
    exportedAt: new Date().toISOString(),
    version: 2
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ect-scripts-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Экспорт выполнен');
}

function importData(file) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data.scripts)) throw new Error('Нет массива scripts');
      state.scripts = data.scripts;
      if (Array.isArray(data.sharedOtabotki)) state.sharedOtabotki = data.sharedOtabotki;
      ensureOtabotkiModel();
      await saveData();
      toast(`Импортировано: ${state.scripts.length} скриптов, ${(state.sharedOtabotki || []).length} отработок`);
      navigate('scripts');
    } catch (err) {
      toast('Ошибка импорта: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

function confirmReset() {
  openModal(
    'Сбросить локальные данные?',
    '<p>Локальные скрипты будут заменены демо. Если облако подключено — потом можно снова загрузить из облака.</p>',
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-danger" data-action="confirm-reset">Сбросить</button>`
  );
}

async function resetAll() {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  state.scripts = getDemoScripts();
  saveLocalScripts();
  closeModal();
  toast('Локальные данные сброшены');
  navigate('home');
}

async function saveCloudConfig() {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const sheetsUrl = document.getElementById('cfgSheetsUrl')?.value.trim() || '';
  state.cloud.provider = 'sheets';
  state.cloud.sheetsUrl = sheetsUrl;
  state.cloud.enabled = !!(sheetsUrl && sheetsUrl.includes('script.google.com'));
  saveLocalSettings();

  if (state.cloud.enabled) {
    toast('Подключаем Google Таблицу…');
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts) && remote.scripts.length > 0) {
      state.scripts = remote.scripts;
      saveLocalScripts();
      toast('Загружено из таблицы: ' + state.scripts.length + ' скриптов');
      startAutoSync();
    } else if (remote && Array.isArray(remote.scripts)) {
      const ok = await cloudSave();
      toast(ok ? 'Таблица подключена, данные записаны' : 'Чтение OK, запись не удалась — проверьте развёртывание Apps Script', ok ? 'success' : 'error');
      if (ok) startAutoSync();
    } else {
      toast('Не удалось подключиться. Проверьте URL веб-приложения и доступ «Все».', 'error');
      state.cloud.status = 'error';
    }
  } else {
    stopAutoSync();
    toast('Вставьте URL вида https://script.google.com/macros/s/.../exec', 'error');
  }
  render();
}

function disconnectCloud() {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  state.cloud.enabled = false;
  state.cloud.sheetsUrl = '';
  state.cloud.binId = '';
  state.cloud.apiKey = '';
  state.cloud.private = false;
  state.cloud.status = 'local';
  saveLocalSettings();
  stopAutoSync();
  toast('Облако отключено — данные только локально');
  render();
}

async function syncNow() {
  if (!state.cloud.enabled) {
    toast('Сначала подключите облако', 'error');
    return;
  }
  const remote = await cloudFetch();
  if (remote && Array.isArray(remote.scripts)) {
    state.scripts = remote.scripts;
    saveLocalScripts();
    toast('Синхронизировано: ' + state.scripts.length + ' скриптов');
    render();
  } else {
    toast('Не удалось загрузить из облака', 'error');
  }
}

function toggleBlock(key) {
  state.collapsedBlocks[key] = state.collapsedBlocks[key] === true ? false : true;
  saveLocalSettings();
  render();
}

function toggleItemText(id) {
  state.collapsedBlocks[id] = state.collapsedBlocks[id] === true ? false : true;
  saveLocalSettings();
  render();
}


function sanitizeScriptHtml(html) {
  if (!html) return '';
  try {
    // Грубая зачистка style-атрибутов до парсинга DOM
    html = String(html)
      .replace(/\s*background(-color|-image)?\s*:\s*[^;"]+;?/gi, '')
      .replace(/\s*bgcolor\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');

    const tmp = document.createElement('div');
    tmp.innerHTML = html;

    const walk = (el) => {
      if (el.nodeType !== 1) return;
      el.removeAttribute('bgcolor');
      // Word / Google Docs мусор
      if (el.className && /Mso|Apple-|docs-/i.test(String(el.className))) {
        el.removeAttribute('class');
      }

      if (el.hasAttribute('style')) {
        let st = el.getAttribute('style') || '';
        st = st
          .replace(/background(-color|-image|-position|-size|-repeat|-attachment)?\s*:\s*[^;]+;?/gi, '')
          .replace(/background\s*:\s*[^;]+;?/gi, '')
          .replace(/color\s*:\s*(#000|#000000|black|rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)|rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*[\d.]+\s*\))\s*;?/gi, '')
          .replace(/;;+/g, ';')
          .trim();
        if (!st || st === ';') el.removeAttribute('style');
        else el.setAttribute('style', st);
      }

      // Инлайн через CSSOM
      if (el.style) {
        el.style.removeProperty('background');
        el.style.removeProperty('background-color');
        el.style.removeProperty('background-image');
      }

      Array.from(el.children || []).forEach(walk);
    };

    Array.from(tmp.children).forEach(walk);
    // также все вложенные
    tmp.querySelectorAll('*').forEach(walk);

    return tmp.innerHTML;
  } catch (e) {
    console.warn('sanitize failed', e);
    return String(html).replace(/background[^;"]*;?/gi, '');
  }
}

function cleanAllScriptsBackgrounds() {
  let n = 0;
  for (const s of state.scripts) {
    const before = s.content || '';
    const after = sanitizeScriptHtml(before);
    if (after !== before) {
      s.content = after;
      s.updatedAt = Date.now();
      n++;
    }
  }
  return n;
}


function bindEditorPasteCleanup(editor) {
  if (!editor || editor.dataset.pasteBound === '1') return;
  editor.dataset.pasteBound = '1';
  editor.addEventListener('paste', (e) => {
    e.preventDefault();
    const clip = e.clipboardData || window.clipboardData;
    let html = clip.getData('text/html');
    let text = clip.getData('text/plain');
    if (html) {
      html = sanitizeScriptHtml(html);
      document.execCommand('insertHTML', false, html);
    } else if (text) {
      document.execCommand('insertText', false, text);
    }
  });
}

function applyColor(color) {
  const editor = document.getElementById('editorContent');
  if (!editor) {
    toast('Откройте редактор скрипта', 'error');
    return;
  }
  editor.focus();
  const sel = window.getSelection();
  if (!sel.rangeCount) {
    toast('Сначала выделите текст', 'error');
    return;
  }
  const range = sel.getRangeAt(0);
  if (!editor.contains(range.commonAncestorContainer)) {
    toast('Выделите текст внутри редактора', 'error');
    return;
  }
  if (range.collapsed) {
    toast('Выделите текст для окрашивания (зажмите мышью)', 'error');
    return;
  }
  // document.execCommand надёжнее сохраняет выделение
  try {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, color);
  } catch (e) {
    const span = document.createElement('span');
    span.style.color = color;
    span.appendChild(range.extractContents());
    range.insertNode(span);
  }
}

function applyEditorCommand(cmd, value = null) {
  const editor = document.getElementById('editorContent');
  if (!editor) return;
  editor.focus();
  try {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand(cmd, false, value);
  } catch (e) {
    console.warn(e);
  }
}

function removeEditorColor() {
  applyEditorCommand('removeFormat');
}

const EDITOR_COLOR_MAP = {
  '1': '#ef4444', // красный
  '2': '#3b82f6', // синий
  '3': '#fbbf24', // жёлтый
  '4': '#f97316', // оранжевый
  '5': '#22c55e', // зелёный
  '6': '#a855f7'  // фиолетовый
};

function isEditorFocused() {
  const ed = document.getElementById('editorContent');
  return ed && (document.activeElement === ed || ed.contains(document.activeElement));
}

function openQuickSearch() {
  if (typeof isCommonAccount === 'function' && false) {}
  const q = prompt('Быстрый поиск скрипта (название / категория):', state.searchQuery || '');
  if (q === null) return;
  state.searchQuery = q.trim();
  navigate('scripts');
  setTimeout(() => {
    const input = document.getElementById('searchInput');
    if (input) {
      input.value = state.searchQuery;
      input.focus();
    }
  }, 50);
}

function openQuickJump() {
  if (!state.scripts.length) {
    toast('Нет скриптов', 'error');
    return;
  }
  const list = state.scripts
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title, 'ru'))
    .map((s, i) => (i + 1) + '. ' + s.title + (s.category ? ' [' + s.category + ']' : ''))
    .join('\n');
  const ans = prompt('Открыть скрипт — введите номер или часть названия:\n\n' + list.slice(0, 1500));
  if (!ans) return;
  const n = parseInt(ans, 10);
  const sorted = state.scripts.slice().sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  let found = null;
  if (!isNaN(n) && n >= 1 && n <= sorted.length) {
    found = sorted[n - 1];
  } else {
    const q = ans.toLowerCase();
    found = sorted.find(s => s.title.toLowerCase().includes(q) || (s.category || '').toLowerCase().includes(q));
  }
  if (found) navigate('script', found.id);
  else toast('Скрипт не найден', 'error');
}

function showHotkeysHelp() {
  openModal(
    'Горячие клавиши',
    `<div style="line-height:1.7;font-size:0.95rem">
      <p><b>Глобально</b></p>
      <ul style="padding-left:18px;margin:8px 0 16px">
        <li><code>Ctrl + I</code> — новый скрипт</li>
        <li><code>Ctrl + Q</code> — поиск скрипта (переход по списку)</li>
        <li><code>Ctrl + B</code> — быстрый поиск скриптов</li>
        <li><code>Ctrl + /</code> — эта справка</li>
        <li><code>Esc</code> — закрыть окно / назад</li>
      </ul>
      <p><b>В редакторе скрипта</b> (выделите текст)</p>
      <ul style="padding-left:18px;margin:8px 0">
        <li><code>Ctrl + 1</code> — <span style="color:#ef4444">красный</span></li>
        <li><code>Ctrl + 2</code> — <span style="color:#3b82f6">синий</span></li>
        <li><code>Ctrl + 3</code> — <span style="color:#fbbf24">жёлтый</span></li>
        <li><code>Ctrl + 4</code> — <span style="color:#f97316">оранжевый</span></li>
        <li><code>Ctrl + 5</code> — <span style="color:#22c55e">зелёный</span></li>
        <li><code>Ctrl + 6</code> — <span style="color:#a855f7">фиолетовый</span></li>
        <li><code>Ctrl + 0</code> — убрать цвет / формат</li>
        <li><code>Ctrl + B</code> — жирный</li>
        <li><code>Ctrl + I</code> — курсив</li>
        <li><code>Ctrl + U</code> — подчёркнутый</li>
      </ul>
      <p style="margin-top:12px;color:var(--text-muted);font-size:0.88rem">В редакторе Ctrl+B / Ctrl+I работают как жирный/курсив. Снаружи редактора — поиск и новый скрипт.</p>
    </div>`,
    `<button class="btn btn-primary" data-action="close-modal">Понятно</button>`
  );
}

/* ========== Events ========== */
function handleClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;

  const editActions = new Set([
    'add-script', 'edit-script', 'delete-script', 'confirm-delete-script',
    'add-car', 'edit-car', 'delete-car', 'save-car',
    'add-item', 'edit-item', 'delete-item', 'save-new-script',
    'save-edit-script', 'save-new-item', 'add-child-item', 'save-edit-item',
    'save-cloud', 'disconnect-cloud', 'reset', 'confirm-reset',
    'import-click', 'export',
    'add-shared-otabotka', 'edit-shared-otabotka', 'save-shared-otabotka',
    'delete-shared-otabotka', 'pick-otabotka', 'attach-otabotka',
    'attach-otabotka-prompt', 'confirm-attach-otabotka'
  ]);

  if (isCommonAccount() && editActions.has(action)) {
    toast('Аккаунт «Общая» доступен только для просмотра.', 'error');
    return;
  }

  if (isCommonAccount() && action === 'nav' && el.dataset.page === 'settings') {
    toast('Для аккаунта «Общая» настройки недоступны.', 'error');
    return;
  }

  switch (action) {
    case 'nav': navigate(el.dataset.page); break;
    case 'open-script': navigate('script', el.dataset.id); break;
    case 'add-script': showAddScriptModal(); break;
    case 'edit-script': showEditScriptModal(el.dataset.id); break;
    case 'add-car': showCarModal(null); break;
    case 'edit-car': showCarModal(el.dataset.id); break;
    case 'delete-car': deleteCar(el.dataset.id); break;
    case 'save-car': saveCar(el.dataset.id || null); break;
    case 'delete-script': confirmDeleteScript(el.dataset.id); break;
    case 'confirm-delete-script': deleteScript(el.dataset.id); break;
    case 'add-item': showAddItemModal(el.dataset.id, el.dataset.type); break;
    case 'edit-item': showEditItemModal(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'delete-item': deleteItem(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'save-new-script': saveNewScript(); break;
    case 'save-edit-script': saveEditScript(el.dataset.id); break;
    case 'save-new-item': saveNewItem(el.dataset.id, el.dataset.type, el.dataset.pid || null); break;
    case 'add-child-item': showAddItemModal(el.dataset.sid, el.dataset.type, el.dataset.pid); break;
    case 'toggle-node': {
      const k = el.dataset.key;
      state.expandedNodes[k] = state.expandedNodes[k] === false ? true : false;
      render();
      break;
    }
    case 'save-edit-item': saveEditItem(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'close-modal': closeModal(); break;
    case 'set-theme': setTheme(el.dataset.theme); break;
    case 'export': exportData(); break;
    case 'import-click': document.getElementById('importFile').click(); break;
    case 'reset': confirmReset(); break;
    case 'confirm-reset': resetAll(); break;
    case 'save-cloud': saveCloudConfig(); break;
    case 'disconnect-cloud': disconnectCloud(); break;
    case 'sync-now': syncNow(); break;
    case 'toggle-block': toggleBlock(el.dataset.key); break;
    case 'toggle-item-text': toggleItemText(el.dataset.id); break;
    case 'apply-color': applyColor(el.dataset.color); break;
    case 'clean-backgrounds': {
      const n = cleanAllScriptsBackgrounds();
      saveData().then(ok => {
        toast(n ? ('Очищено подложек в ' + n + ' скриптах') : 'Подложек не найдено');
        render();
      });
      break;
    }
    case 'editor-cmd': applyEditorCommand(el.dataset.cmd); break;
    case 'editor-clear-format': removeEditorColor(); break;
    case 'hotkeys-help': showHotkeysHelp(); break;
    case 'add-shared-otabotka': showSharedOtabotkaModal(); break;
    case 'edit-shared-otabotka': showSharedOtabotkaModal(el.dataset.id); break;
    case 'save-shared-otabotka': saveSharedOtabotka(el.dataset.id || null); break;
    case 'delete-shared-otabotka': deleteSharedOtabotka(el.dataset.id); break;
    case 'pick-otabotka': showPickOtabotkaModal(el.dataset.id); break;
    case 'attach-otabotka': attachOtabotkaToScript(el.dataset.sid, el.dataset.oid); break;
    case 'attach-otabotka-prompt': promptAttachOtabotka(el.dataset.id); break;
    case 'confirm-attach-otabotka': confirmAttachOtabotka(el.dataset.id); break;
  }
}

/* ========== Единый список отработок ========== */
function showSharedOtabotkaModal(id) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const item = id ? (state.sharedOtabotki || []).find(x => x.id === id) : null;
  const cats = allCategoriesFromScripts();
  const selected = new Set(item ? (item.categories || []) : []);
  const catsHtml = cats.length
    ? `<div class="cat-check-list">${cats.map(c => `
        <label class="cat-check-item">
          <input type="checkbox" class="shared-cat-cb" value="${escapeAttr(c)}" ${selected.has(c) ? 'checked' : ''}>
          <span class="cat-check-text">${escapeHtml(c)}</span>
        </label>`).join('')}</div>`
    : '<p style="color:var(--text-muted);font-size:0.9rem">Категории появятся после назначения у скриптов.</p>';
  openModal(
    item ? 'Редактировать отработку' : 'Новая отработка',
    `<div class="form-group"><label>Заголовок</label><input type="text" id="fSharedTitle" value="${escapeAttr(item ? item.title : '')}" placeholder="Например: Нет в наличии"></div>
     <div class="form-group"><label>Текст</label><textarea id="fSharedText" rows="6">${escapeHtml(item ? (item.text || '') : '')}</textarea></div>
     <div class="form-group"><label>Категории</label>
       ${catsHtml}
       <input type="text" id="fSharedCatsExtra" class="cat-extra-input" placeholder="Или новые через запятую: Авто, Медицина..." value="">
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-shared-otabotka" ${item ? `data-id="${item.id}"` : ''}>Сохранить</button>`
  );
}

async function saveSharedOtabotka(id) {
  if (isCommonAccount()) return;
  const title = document.getElementById('fSharedTitle')?.value.trim();
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  const text = document.getElementById('fSharedText')?.value || '';
  const cats = [];
  document.querySelectorAll('.shared-cat-cb:checked').forEach(cb => cats.push(cb.value));
  const extra = (document.getElementById('fSharedCatsExtra')?.value || '')
    .split(/[,;]+/).map(s => s.trim()).filter(Boolean);
  for (const c of extra) if (!cats.includes(c)) cats.push(c);

  if (!Array.isArray(state.sharedOtabotki)) state.sharedOtabotki = [];
  if (id) {
    const item = state.sharedOtabotki.find(x => x.id === id);
    if (!item) { toast('Не найдено', 'error'); return; }
    item.title = title;
    item.text = text;
    item.categories = cats;
    item.updatedAt = Date.now();
  } else {
    state.sharedOtabotki.push({
      id: uid(),
      title,
      text,
      categories: cats,
      children: [],
      updatedAt: Date.now()
    });
  }
  const saved = await saveData();
  closeModal();
  toast(saved ? 'Отработка сохранена' : 'Сохранено локально', saved ? undefined : 'error');
  render();
}

async function deleteSharedOtabotka(id) {
  if (isCommonAccount()) return;
  if (!confirm('Удалить отработку из списка и отвязать от всех скриптов?')) return;
  state.sharedOtabotki = (state.sharedOtabotki || []).filter(x => x.id !== id);
  for (const s of state.scripts) {
    if (s.otabotkiIds) s.otabotkiIds = s.otabotkiIds.filter(x => x !== id);
  }
  await saveData();
  toast('Удалено');
  render();
}

function showPickOtabotkaModal(scriptId) {
  if (isCommonAccount()) { toast('Аккаунт «Общая» доступен только для просмотра.', 'error'); return; }
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  ensureOtabotkiModel();
  const attached = new Set(script.otabotkiIds || []);
  const cat = (script.category || '').toLowerCase();
  let list = (state.sharedOtabotki || []).slice();
  // Сначала из той же категории
  list.sort((a, b) => {
    const ac = (a.categories || []).some(c => c.toLowerCase() === cat) ? 0 : 1;
    const bc = (b.categories || []).some(c => c.toLowerCase() === cat) ? 0 : 1;
    if (ac !== bc) return ac - bc;
    return (a.title || '').localeCompare(b.title || '', 'ru');
  });

  openModal(
    'Добавить отработку из списка',
    `<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:10px">Скрипт: <b>${escapeHtml(script.title)}</b>${script.category ? ' · ' + escapeHtml(script.category) : ''}</p>
     <div class="form-group"><input type="search" id="pickOtabotkaSearch" placeholder="Фильтр по названию / тексту..." class="search-input"></div>
     <div id="pickOtabotkaList" style="max-height:360px;overflow:auto;display:flex;flex-direction:column;gap:8px">
       ${list.length === 0 ? '<p style="color:var(--text-muted)">Список пуст — создайте отработку (+)</p>' :
         list.map(o => {
           const on = attached.has(o.id);
           const cats = (o.categories || []).join(', ');
           return `<div class="card" data-pick-row style="padding:10px 12px;margin:0" data-title="${escapeAttr((o.title + ' ' + (o.text || '') + ' ' + cats).toLowerCase())}">
             <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">
               <div style="min-width:0">
                 <div style="font-weight:600">${escapeHtml(o.title)}</div>
                 ${cats ? `<div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px">${escapeHtml(cats)}</div>` : ''}
                 ${o.text ? `<div style="font-size:0.82rem;color:var(--text-muted);margin-top:4px;white-space:pre-wrap">${escapeHtml(o.text.slice(0, 120))}${o.text.length > 120 ? '…' : ''}</div>` : ''}
               </div>
               ${on
                 ? '<span class="badge badge-teal">уже в скрипте</span>'
                 : `<button class="btn btn-primary btn-sm" data-action="attach-otabotka" data-sid="${scriptId}" data-oid="${o.id}">Добавить</button>`}
             </div>
           </div>`;
         }).join('')}
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Закрыть</button>`
  );
  setTimeout(() => {
    const inp = document.getElementById('pickOtabotkaSearch');
    inp?.addEventListener('input', () => {
      const q = (inp.value || '').toLowerCase().trim();
      document.querySelectorAll('[data-pick-row]').forEach(row => {
        const t = row.getAttribute('data-title') || '';
        row.style.display = !q || q.split(/\s+/).every(w => t.includes(w)) ? '' : 'none';
      });
    });
    inp?.focus();
  }, 50);
}

async function attachOtabotkaToScript(scriptId, otId) {
  if (isCommonAccount()) return;
  const script = state.scripts.find(s => s.id === scriptId);
  const item = getLibOtabotka(otId);
  if (!script || !item) return;
  if (!script.otabotkiIds) script.otabotkiIds = [];
  if (script.otabotkiIds.includes(otId)) {
    toast('Уже добавлена');
    return;
  }
  script.otabotkiIds.push(otId);
  upsertLibCategories(item, script.category);
  script.updatedAt = Date.now();
  const saved = await saveData();
  toast(saved ? 'Добавлено в скрипт' : 'Добавлено локально', saved ? undefined : 'error');
  // обновить модалку списка, если открыта
  if (document.getElementById('pickOtabotkaList')) {
    showPickOtabotkaModal(scriptId);
  } else {
    closeModal();
  }
  render();
}

function promptAttachOtabotka(otId) {
  if (isCommonAccount()) return;
  const item = getLibOtabotka(otId);
  if (!item) return;
  const options = state.scripts
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title, 'ru'))
    .map(s => {
      const has = (s.otabotkiIds || []).includes(otId);
      return `<label style="display:flex;align-items:center;gap:8px;margin:4px 0;cursor:pointer;opacity:${has ? 0.5 : 1}">
        <input type="checkbox" class="attach-script-cb" value="${s.id}" ${has ? 'checked disabled' : ''}>
        <span>${escapeHtml(s.title)}${s.category ? ' <span style="color:var(--text-muted)">[' + escapeHtml(s.category) + ']</span>' : ''}${has ? ' — уже есть' : ''}</span>
      </label>`;
    }).join('');
  openModal(
    'Добавить в скрипты: ' + item.title,
    `<div style="max-height:360px;overflow:auto">${options || '<p>Нет скриптов</p>'}</div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="confirm-attach-otabotka" data-id="${otId}">Добавить</button>`
  );
}

async function confirmAttachOtabotka(otId) {
  const item = getLibOtabotka(otId);
  if (!item) return;
  let n = 0;
  document.querySelectorAll('.attach-script-cb:checked:not(:disabled)').forEach(cb => {
    const s = state.scripts.find(x => x.id === cb.value);
    if (!s) return;
    if (!s.otabotkiIds) s.otabotkiIds = [];
    if (!s.otabotkiIds.includes(otId)) {
      s.otabotkiIds.push(otId);
      upsertLibCategories(item, s.category);
      s.updatedAt = Date.now();
      n++;
    }
  });
  if (!n) { toast('Не выбрано новых скриптов'); return; }
  const saved = await saveData();
  closeModal();
  toast(saved ? `Добавлено в ${n} скрипт(ов)` : `Локально: ${n}`);
  render();
}

function bindGlobalEvents() {
  const currentUserBadge = document.getElementById('currentUserBadge');
  if (currentUserBadge) {
    const user = state.currentUser || getCurrentUser();
    currentUserBadge.textContent = user ? `👤 ${user}` : '';
  }
  document.getElementById('logoutBtn')?.addEventListener('click', logout);

  document.addEventListener('click', handleClick);

  document.getElementById('hotkeysBtn')?.addEventListener('click', showHotkeysHelp);
  document.getElementById('quickSearchBtn')?.addEventListener('click', openQuickSearch);

  document.getElementById('themeToggle').addEventListener('click', () => {
    state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveLocalSettings();
  });

  document.getElementById('addScriptBtn').addEventListener('click', showAddScriptModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  function closeMobileSidebar() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebarBackdrop');
    if (sb) sb.classList.remove('open');
    if (bd) bd.classList.remove('show');
  }

  function openMobileSidebar() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebarBackdrop');
    if (sb) sb.classList.add('open');
    if (bd) bd.classList.add('show');
  }

  document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    const sb = document.getElementById('sidebar');
    if (sb?.classList.contains('open')) closeMobileSidebar();
    else openMobileSidebar();
  });

  document.getElementById('sidebarBackdrop')?.addEventListener('click', closeMobileSidebar);

  // Закрывать меню после навигации на телефоне
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 768px)').matches) closeMobileSidebar();
    });
  });

  document.getElementById('exportData').addEventListener('click', () => {
    if (isCommonAccount()) return;
    exportData();
  });
  document.getElementById('importData').addEventListener('click', () => {
    if (isCommonAccount()) return;
    document.getElementById('importFile').click();
  });
  document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) importData(file);
    e.target.value = '';
  });

  document.addEventListener('input', (e) => {
    const id = e.target && e.target.id;
    if (!id) return;

    if (id === 'searchInput') {
      state.searchQuery = e.target.value;
      clearTimeout(window._searchTimer);
      window._searchTimer = setTimeout(() => {
        if (state.currentPage === 'scripts') render();
      }, 220);
      return;
    }
    if (id === 'otabotkiSearch') {
      state.otabotkiQuery = e.target.value;
      clearTimeout(window._otTimer);
      window._otTimer = setTimeout(() => {
        if (state.currentPage === 'otabotki') render();
      }, 220);
      return;
    }
    if (id === 'homeSearch') {
      state.homeQuery = e.target.value;
      clearTimeout(window._homeTimer);
      window._homeTimer = setTimeout(() => {
        if (state.currentPage === 'home') render();
      }, 220);
      return;
    }
    if (id === 'catalogSearch') {
      state.catalogQuery = e.target.value;
      clearTimeout(window._catTimer);
      window._catTimer = setTimeout(() => {
        if (state.currentPage === 'catalog') render();
      }, 220);
      return;
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target.id === 'otabotkiCat') {
      state.otabotkiCat = e.target.value;
      if (state.currentPage === 'otabotki') render();
    }
    if (e.target.id === 'otabotkiScriptFilter') {
      state.otabotkiScriptFilter = e.target.value;
      if (state.currentPage === 'otabotki') render();
    }
    if (e.target.id === 'catalogBrand') {
      state.catalogBrand = e.target.value;
      if (state.currentPage === 'catalog') render();
    }
  });

  document.addEventListener('keydown', (e) => {
    const mod = e.ctrlKey || e.metaKey;
    const tag = (e.target && e.target.tagName) || '';
    const inField = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

    if (e.key === 'Escape') {
      const modal = document.getElementById('modalOverlay');
      if (modal && !modal.hidden) {
        closeModal();
        return;
      }
      if (state.currentPage === 'script') {
        navigate('scripts');
      }
      return;
    }

    // Справка
    if (mod && (e.key === '/' || e.key === '.')) {
      e.preventDefault();
      showHotkeysHelp();
      return;
    }

    // В редакторе: цвета + стандартный bold/italic/underline (не перехватываем B/I/U)
    if (mod && isEditorFocused()) {
      if (EDITOR_COLOR_MAP[e.key]) {
        e.preventDefault();
        applyColor(EDITOR_COLOR_MAP[e.key]);
        return;
      }
      if (e.key === '0') {
        e.preventDefault();
        removeEditorColor();
        return;
      }
      // Ctrl+B/I/U — браузер/execCommand сам обработает в contenteditable
      return;
    }

    // Глобально (не в редакторе и не в полях ввода, кроме спец. случаев)
    // Ctrl+I — новый скрипт
    if (mod && (e.key === 'i' || e.key === 'I') && !inField) {
      if (typeof isCommonAccount === 'function' && isCommonAccount()) return;
      e.preventDefault();
      showAddScriptModal();
      return;
    }

    // Ctrl+Q — поиск / переход к скрипту
    if (mod && (e.key === 'q' || e.key === 'Q')) {
      e.preventDefault();
      openQuickJump();
      return;
    }

    // Ctrl+B — быстрый поиск скриптов
    if (mod && (e.key === 'b' || e.key === 'B') && !inField) {
      e.preventDefault();
      openQuickSearch();
      return;
    }
  });

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });
  applyAccountPermissions();
}

/* ========== Init ========== */
// Авторизация запускается из index.html после нажатия «Войти».
// Не запускаем requireLogin() автоматически.