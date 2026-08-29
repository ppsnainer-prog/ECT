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
    "bodyType": "Седан",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "vesta",
      "седан",
      "sedan"
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
    "bodyType": "Седан",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "granta",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "granta hatchback",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "niva travel",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "niva legend",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "xray",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "xray cross",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Компактвэн",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "largus",
      "компактвэн",
      "compactvan",
      "минивэн",
      "minivan"
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
    "bodyType": "Электромобили",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "e-largus",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Купе",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "revolution",
      "купе",
      "coupe"
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
    "bodyType": "Пикап",
    "tags": [
      "лада",
      "ваз",
      "lada",
      "жигули",
      "niva pickup",
      "пикап",
      "pickup"
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
    "bodyType": "Седан",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "3 series",
      "седан",
      "sedan"
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
    "bodyType": "Седан",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "5 series",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "1 series",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "x3",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "x5",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Купе",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "m4",
      "купе",
      "coupe"
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
    "bodyType": "Электромобили",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "i4",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Компактвэн",
    "tags": [
      "бмв",
      "bmw",
      "беха",
      "бимер",
      "2 series gran tourer",
      "компактвэн",
      "compactvan",
      "минивэн",
      "minivan"
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
    "bodyType": "Седан",
    "tags": [
      "ауди",
      "audi",
      "a4",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "ауди",
      "audi",
      "a3 sportback",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "ауди",
      "audi",
      "q5",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "ауди",
      "audi",
      "q7",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Купе",
    "tags": [
      "ауди",
      "audi",
      "rs5",
      "купе",
      "coupe"
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
    "bodyType": "Электромобили",
    "tags": [
      "ауди",
      "audi",
      "e-tron gt",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Седан",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "c-class",
      "седан",
      "sedan"
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
    "bodyType": "Седан",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "e-class",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "a-class",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "мерседес",
      "mercedes",
      "мерс",
      "benz",
      "бенц",
      "glc",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Седан",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "camry",
      "седан",
      "sedan"
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
    "bodyType": "Седан",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "corolla",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "corolla hatchback",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "rav4",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "land cruiser 300",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Пикап",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "hilux",
      "пикап",
      "pickup"
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
    "bodyType": "Купе",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "gr supra",
      "купе",
      "coupe"
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
    "bodyType": "Электромобили",
    "tags": [
      "тойота",
      "тайота",
      "таота",
      "тоета",
      "toyota",
      "тойта",
      "bz4x",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Седан",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "sonata",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "i30",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "tucson",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "santa fe",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Электромобили",
    "tags": [
      "хендай",
      "хундай",
      "хёндай",
      "hyundai",
      "хендэ",
      "ioniq 5",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Седан",
    "tags": [
      "киа",
      "kia",
      "кия",
      "k5",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "киа",
      "kia",
      "кия",
      "ceed",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "киа",
      "kia",
      "кия",
      "sportage",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "киа",
      "kia",
      "кия",
      "sorento",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Электромобили",
    "tags": [
      "киа",
      "kia",
      "кия",
      "ev6",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Седан",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "passat",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "golf",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "tiguan",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Электромобили",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "id.4",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Компактвэн",
    "tags": [
      "фольксваген",
      "volkswagen",
      "vw",
      "фольц",
      "фолькс",
      "caddy",
      "компактвэн",
      "compactvan",
      "минивэн",
      "minivan"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "джили",
      "geely",
      "гели",
      "monjaro",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Седан",
    "tags": [
      "джили",
      "geely",
      "гели",
      "emgrand",
      "седан",
      "sedan"
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
    "bodyType": "Электромобили",
    "tags": [
      "джили",
      "geely",
      "гели",
      "geometry c",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
    "bodyType": "Седан",
    "tags": [
      "форд",
      "ford",
      "mondeo",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "форд",
      "ford",
      "focus",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Кроссовер",
    "tags": [
      "форд",
      "ford",
      "kuga",
      "кроссовер",
      "crossover",
      "suv"
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
    "bodyType": "Купе",
    "tags": [
      "форд",
      "ford",
      "mustang",
      "купе",
      "coupe"
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
    "bodyType": "Пикап",
    "tags": [
      "форд",
      "ford",
      "ranger",
      "пикап",
      "pickup"
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
    "bodyType": "Седан",
    "tags": [
      "хонда",
      "honda",
      "accord",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "хонда",
      "honda",
      "civic hatchback",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "хонда",
      "honda",
      "cr-v",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Седан",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "altima",
      "седан",
      "sedan"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "qashqai",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "x-trail",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Пикап",
    "tags": [
      "ниссан",
      "nissan",
      "нисан",
      "navara",
      "пикап",
      "pickup"
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
    "bodyType": "Седан",
    "tags": [
      "мазда",
      "mazda",
      "6",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "мазда",
      "mazda",
      "3",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "мазда",
      "mazda",
      "cx-5",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "мицубиси",
      "mitsubishi",
      "митсубиси",
      "мицу",
      "outlander",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Пикап",
    "tags": [
      "мицубиси",
      "mitsubishi",
      "митсубиси",
      "мицу",
      "l200",
      "пикап",
      "pickup"
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
    "bodyType": "Седан",
    "tags": [
      "рено",
      "renault",
      "logan",
      "седан",
      "sedan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "рено",
      "renault",
      "megane",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "рено",
      "renault",
      "duster",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Компактвэн",
    "tags": [
      "рено",
      "renault",
      "kangoo",
      "компактвэн",
      "compactvan",
      "минивэн",
      "minivan"
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
    "bodyType": "Хетчбэк",
    "tags": [
      "пежо",
      "peugeot",
      "308",
      "хетчбэк",
      "хетчбек",
      "hatchback",
      "хэтчбек"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "пежо",
      "peugeot",
      "3008",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Седан",
    "tags": [
      "шкода",
      "skoda",
      "octavia",
      "седан",
      "sedan"
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
    "bodyType": "Седан",
    "tags": [
      "шкода",
      "skoda",
      "rapid",
      "седан",
      "sedan"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "шкода",
      "skoda",
      "kodiaq",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Седан",
    "tags": [
      "вольво",
      "volvo",
      "s60",
      "седан",
      "sedan"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "вольво",
      "volvo",
      "xc60",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "вольво",
      "volvo",
      "xc90",
      "внедорожник",
      "suv",
      "джип",
      "кроссовер",
      "crossover",
      "внедорожник / suv"
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
    "bodyType": "Электромобили",
    "tags": [
      "вольво",
      "volvo",
      "c40 recharge",
      "электро",
      "электромобиль",
      "electric",
      "ev",
      "электромобили"
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
  catalogBody: '',
  catalogCountry: '',
  leaderboardSettings: { viewCanSee: false },
  leaderboardManual: [],
  leaderboardPeriod: 'month',
  goalsStore: {},
  rulesQuery: '',
  rulesCategory: '',
  rulesSource: '',
  sharedPenalties: [],
  calls: [],
  callsQuery: '',
  callsStatus: '',
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

const EXTRA_USERS_KEY = 'ect_extra_users_v1';
// { name, passwordHash, role: 'edit' | 'view' }
let extraUsers = [];

function loadExtraUsers() {
  try {
    const raw = localStorage.getItem(EXTRA_USERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) extraUsers = parsed;
    }
  } catch (e) { extraUsers = []; }
  if (!Array.isArray(extraUsers)) extraUsers = [];
}

function persistExtraUsers() {
  try { localStorage.setItem(EXTRA_USERS_KEY, JSON.stringify(extraUsers)); } catch (e) {}
}

function isAdminUser() {
  return state.currentUser === 'Александр';
}

function getAllLoginNames() {
  loadExtraUsers();
  const names = Object.keys(TEAM_USERS);
  for (const u of extraUsers) {
    if (u && u.name && !names.includes(u.name)) names.push(u.name);
  }
  return names;
}

function getUserRole(name) {
  if (!name) return 'view';
  if (name === 'Общая') return 'view';
  if (TEAM_USERS[name]) return 'edit'; // built-in editors
  loadExtraUsers();
  const u = extraUsers.find(x => x.name === name);
  return (u && u.role) || 'view';
}

async function findUserPasswordHash(name) {
  if (TEAM_USERS[name]) return TEAM_USERS[name];
  loadExtraUsers();
  const u = extraUsers.find(x => x.name === name);
  return u ? u.passwordHash : null;
}


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
  if (!state.currentUser) return false;
  if (state.currentUser === 'Общая') return false;
  return getUserRole(state.currentUser) === 'edit';
}

function isCommonAccount() {
  // «только просмотр» — Общая или участник с ролью view
  if (state.currentUser === 'Общая') return true;
  if (!state.currentUser) return true;
  return getUserRole(state.currentUser) === 'view';
}

function applyAccountPermissions() {
  const common = isCommonAccount();

  // Общая: только просмотр. Скрываем настройки и операции изменения/импорта.
  document.querySelectorAll('.nav-item[data-page="settings"]').forEach(el => {
    el.hidden = common;
  });
  document.querySelectorAll('.nav-item[data-page="leaderboard"]').forEach(el => {
    el.hidden = !canSeeLeaderboard();
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
    loadExtraUsers();
    const expectedHash = await findUserPasswordHash(user);
    if (expectedHash && hash === expectedHash) {
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
  loadExtraUsers();
  ensureCarsModel();
  loadCallsMeta();
  loadLeaderboardData();
  loadGoalsStore();
  loadSharedPenalties();
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
      if (Array.isArray(data.sharedPenalties)) state.sharedPenalties = data.sharedPenalties;
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
    sharedOtabotki: state.sharedOtabotki || [],
      sharedPenalties: state.sharedPenalties || []
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
      sharedPenalties: state.sharedPenalties || [],
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

const PROFILE_UI_KEY = 'ect_profile_ui_v1';
const PROFILE_PRESETS = [
  { id: 'blue', name: 'Синий', primary: '#5b8def', accent: '#a78bfa' },
  { id: 'teal', name: 'Бирюза', primary: '#2dd4bf', accent: '#5b8def' },
  { id: 'violet', name: 'Фиолетовый', primary: '#8b5cf6', accent: '#ec4899' },
  { id: 'green', name: 'Зелёный', primary: '#22c55e', accent: '#14b8a6' },
  { id: 'orange', name: 'Оранжевый', primary: '#f97316', accent: '#fbbf24' },
  { id: 'rose', name: 'Розовый', primary: '#f43f5e', accent: '#a78bfa' },
  { id: 'cyan', name: 'Голубой', primary: '#06b6d4', accent: '#3b82f6' },
  { id: 'amber', name: 'Янтарный', primary: '#d97706', accent: '#f59e0b' }
];

function loadAllProfileUI() {
  try {
    const raw = localStorage.getItem(PROFILE_UI_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch (_) {}
  return {};
}

function getProfileUI(user) {
  const all = loadAllProfileUI();
  const u = user || state.currentUser;
  return all[u] || { preset: 'blue', primary: '#5b8def', accent: '#a78bfa' };
}

function saveProfileUI(user, data) {
  const all = loadAllProfileUI();
  all[user || state.currentUser] = data;
  try { localStorage.setItem(PROFILE_UI_KEY, JSON.stringify(all)); } catch (_) {}
}

function applyProfileUI() {
  const ui = getProfileUI(state.currentUser);
  const root = document.documentElement;
  if (ui.primary) {
    root.style.setProperty('--primary', ui.primary);
    root.style.setProperty('--primary-hover', ui.primary);
    root.style.setProperty('--primary-soft', ui.primary + '26');
  }
  if (ui.accent) {
    root.style.setProperty('--accent', ui.accent);
    root.style.setProperty('--accent-soft', ui.accent + '26');
  }
  if (ui.navTint) {
    root.style.setProperty('--nav-active-bg', ui.navTint);
  } else {
    root.style.removeProperty('--nav-active-bg');
  }
}

function showProfileEditor() {
  const ui = getProfileUI(state.currentUser);
  openModal(
    'Профиль и оформление',
    `<p class="catalog-hint" style="margin-bottom:12px">Настройки только для <b>${escapeHtml(state.currentUser || '')}</b> — на этом устройстве.</p>
     <div class="form-group"><label>Готовая палитра</label>
       <div class="profile-presets">
         ${PROFILE_PRESETS.map(p => `
           <button type="button" class="profile-preset ${ui.preset === p.id ? 'active' : ''}"
             data-action="pick-profile-preset" data-id="${p.id}"
             style="--swatch-a:${p.primary};--swatch-b:${p.accent}" title="${escapeAttr(p.name)}">
             <span class="profile-preset-swatch"></span>
             <span>${escapeHtml(p.name)}</span>
           </button>
         `).join('')}
       </div>
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Основной цвет (кнопки, акценты)</label>
         <input type="color" id="fProfilePrimary" value="${escapeAttr(ui.primary || '#5b8def')}">
       </div>
       <div class="form-group"><label>Доп. цвет</label>
         <input type="color" id="fProfileAccent" value="${escapeAttr(ui.accent || '#a78bfa')}">
       </div>
     </div>
     <div class="form-group"><label>Тема</label>
       <select id="fProfileTheme" class="search-input" style="width:100%">
         <option value="dark" ${state.settings.theme === 'dark' ? 'selected' : ''}>Тёмная</option>
         <option value="light" ${state.settings.theme === 'light' ? 'selected' : ''}>Светлая</option>
       </select>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-profile-ui">Сохранить</button>`
  );
}

function pickProfilePreset(id) {
  const p = PROFILE_PRESETS.find(x => x.id === id);
  if (!p) return;
  const primary = document.getElementById('fProfilePrimary');
  const accent = document.getElementById('fProfileAccent');
  if (primary) primary.value = p.primary;
  if (accent) accent.value = p.accent;
  document.querySelectorAll('.profile-preset').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });
  window.__profilePresetId = id;
}

function saveProfileUIFromModal() {
  const primary = document.getElementById('fProfilePrimary')?.value || '#5b8def';
  const accent = document.getElementById('fProfileAccent')?.value || '#a78bfa';
  const theme = document.getElementById('fProfileTheme')?.value || 'dark';
  const preset = window.__profilePresetId || getProfileUI().preset || 'custom';
  saveProfileUI(state.currentUser, { primary, accent, preset });
  state.settings.theme = theme;
  applyTheme();
  applyProfileUI();
  saveLocalSettings();
  closeModal();
  toast('Оформление сохранено');
  render();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.settings.theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = state.settings.theme === 'dark' ? '☀️' : '🌙';
  applyProfileUI();
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
  if (page === 'leaderboard' && !canSeeLeaderboard()) {
    toast('Лидерборд недоступен для вашего аккаунта.', 'error');
    page = 'home';
  }
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
    calls: 'Звонки',
    leaderboard: 'Лидерборд',
    goals: 'Цель',
    rules: 'Правила',
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
const SEARCH_FOCUS_IDS = ['homeSearch', 'searchInput', 'otabotkiSearch', 'catalogSearch', 'callsSearch', 'pickOtabotkaSearch', 'rulesSearch'];

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
    case 'calls': content.innerHTML = renderCalls(); break;
    case 'leaderboard': content.innerHTML = renderLeaderboard(); break;
    case 'goals': content.innerHTML = renderGoals(); break;
    case 'rules': content.innerHTML = renderRules(); break;
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
    state.cars = DEFAULT_CARS.map(c => ({
      ...c,
      bodyType: c.bodyType || '',
      tags: [...(c.tags || [])]
    }));
  }
  // Подтянуть bodyType из DEFAULT_CARS, если у сохранённых авто его нет
  const defMap = new Map(DEFAULT_CARS.map(d => [d.brand + '|' + d.model, d]));
  let countryChanged = false;
  state.cars.forEach(c => {
    if (!Array.isArray(c.tags)) c.tags = [];
    c.tags = c.tags.map(t => String(t).toLowerCase().trim()).filter(Boolean);
    if (!c.bodyType) {
      const d = defMap.get((c.brand || '') + '|' + (c.model || ''));
      if (d && d.bodyType) c.bodyType = d.bodyType;
      else c.bodyType = '';
    }
    const norm = normalizeCountryCode(c.country);
    if (c.country !== norm) {
      c.country = norm;
      countryChanged = true;
    }
  });
  if (countryChanged) {
    try { persistCarsLocal(); } catch (_) {}
  }
}

/* ========== Calls (Звонки) — metadata in state, audio in IndexedDB ========== */
const CALLS_META_KEY = 'ect_calls_meta_v1';
const CALLS_DB_NAME = 'ect_calls_db';
const CALLS_STORE = 'audio';

function openCallsDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(CALLS_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(CALLS_STORE)) {
        db.createObjectStore(CALLS_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbPutAudio(id, blob) {
  const db = await openCallsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CALLS_STORE, 'readwrite');
    tx.objectStore(CALLS_STORE).put(blob, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function idbGetAudio(id) {
  const db = await openCallsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CALLS_STORE, 'readonly');
    const req = tx.objectStore(CALLS_STORE).get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function idbDeleteAudio(id) {
  const db = await openCallsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(CALLS_STORE, 'readwrite');
    tx.objectStore(CALLS_STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function loadCallsMeta() {
  try {
    const raw = localStorage.getItem(CALLS_META_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) state.calls = parsed;
    }
  } catch (e) {}
  if (!Array.isArray(state.calls)) state.calls = [];
}

function persistCallsMeta() {
  try {
    localStorage.setItem(CALLS_META_KEY, JSON.stringify(state.calls || []));
  } catch (e) {
    console.warn('calls meta save failed', e);
  }
}

const CALL_STATUSES = [
  { id: 'success', label: 'Успешный', badge: 'badge-teal' },
  { id: 'penalty', label: 'Штраф', badge: 'badge-danger' },
  { id: 'success_penalty', label: 'Успешный со штрафом', badge: 'badge-primary' },
  { id: 'funny', label: 'Смешные', badge: 'badge-warning' }
];

function callStatusLabel(id) {
  return (CALL_STATUSES.find(s => s.id === id) || {}).label || id || '—';
}
function callStatusBadge(id) {
  return (CALL_STATUSES.find(s => s.id === id) || {}).badge || 'badge';
}

function pluralRu(n, one, few, many) {
  const abs = Math.abs(Number(n)) || 0;
  const n10 = abs % 10;
  const n100 = abs % 100;
  if (n10 === 1 && n100 !== 11) return one;
  if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return few;
  return many;
}

function formatWorkTime(minutes) {
  const m = Math.max(0, Math.round(Number(minutes) || 0));
  const h = Math.floor(m / 60);
  const mm = m % 60;
  if (h <= 0) return mm + ' мин';
  if (mm === 0) return h + ' ' + pluralRu(h, 'час', 'часа', 'часов');
  return h + ' ' + pluralRu(h, 'час', 'часа', 'часов') + ' ' + mm + ' мин';
}

function formatDuration(sec) {
  if (!sec || !isFinite(sec)) return '0:00';
  const s = Math.floor(sec % 60);
  const m = Math.floor(sec / 60) % 60;
  const h = Math.floor(sec / 3600);
  if (h > 0) return h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  return m + ':' + String(s).padStart(2, '0');
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
    const cm = countryMeta(c.country);
    const hay = [
      c.brand, c.model, c.price, c.description, c.transmission,
      c.engine, c.power, c.fuel, c.bodyType || '', c.country || '',
      cm.name, cm.flag, ...(c.tags || [])
    ].join(' ').toLowerCase();
    return words.every(w => hay.includes(w));
  });
}

const COUNTRY_LABELS = {
  RUS: { name: 'Россия', flag: '🇷🇺' },
  DEU: { name: 'Германия', flag: '🇩🇪' },
  JPN: { name: 'Япония', flag: '🇯🇵' },
  KOR: { name: 'Корея', flag: '🇰🇷' },
  CHN: { name: 'Китай', flag: '🇨🇳' },
  USA: { name: 'США', flag: '🇺🇸' },
  FRA: { name: 'Франция', flag: '🇫🇷' },
  CZE: { name: 'Чехия', flag: '🇨🇿' },
  SWE: { name: 'Швеция', flag: '🇸🇪' },
  GBR: { name: 'Великобритания', flag: '🇬🇧' },
  ITA: { name: 'Италия', flag: '🇮🇹' },
  OTHER: { name: 'Другое', flag: '🌍' }
};

// Алиасы → канонический код (чтобы RU и RUS, CN и CHN, «Китай» не дублировались)
const COUNTRY_ALIASES = {
  RU: 'RUS', RUS: 'RUS', RUSSIA: 'RUS', РОССИЯ: 'RUS', РФ: 'RUS',
  DE: 'DEU', DEU: 'DEU', GER: 'DEU', GERMANY: 'DEU', ГЕРМАНИЯ: 'DEU',
  JP: 'JPN', JPN: 'JPN', JAPAN: 'JPN', ЯПОНИЯ: 'JPN',
  KR: 'KOR', KOR: 'KOR', KOREA: 'KOR', КОРЕЯ: 'KOR',
  CN: 'CHN', CHN: 'CHN', CHINA: 'CHN', КИТАЙ: 'CHN',
  US: 'USA', USA: 'USA', 'UNITED STATES': 'USA', США: 'USA',
  FR: 'FRA', FRA: 'FRA', FRANCE: 'FRA', ФРАНЦИЯ: 'FRA',
  CZ: 'CZE', CZE: 'CZE', CZECH: 'CZE', ЧЕХИЯ: 'CZE',
  SE: 'SWE', SWE: 'SWE', SWEDEN: 'SWE', ШВЕЦИЯ: 'SWE',
  GB: 'GBR', UK: 'GBR', GBR: 'GBR', BRITAIN: 'GBR', ВЕЛИКОБРИТАНИЯ: 'GBR', АНГЛИЯ: 'GBR',
  IT: 'ITA', ITA: 'ITA', ITALY: 'ITA', ИТАЛИЯ: 'ITA',
  OTHER: 'OTHER', ДРУГОЕ: 'OTHER'
};

const CUSTOM_COUNTRIES_KEY = 'ect_custom_countries_v1';

function loadCustomCountries() {
  try {
    const raw = localStorage.getItem(CUSTOM_COUNTRIES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.filter(c => c && c.code && c.name);
    }
  } catch (_) {}
  return [];
}

function persistCustomCountries(list) {
  try { localStorage.setItem(CUSTOM_COUNTRIES_KEY, JSON.stringify(list || [])); } catch (_) {}
}

function normalizeCountryCode(raw) {
  if (!raw) return 'OTHER';
  const s = String(raw).trim();
  if (!s) return 'OTHER';
  const upper = s.toUpperCase();
  if (COUNTRY_ALIASES[upper]) return COUNTRY_ALIASES[upper];
  // уже канонический из COUNTRY_LABELS
  if (COUNTRY_LABELS[upper]) return upper;
  // кастомные
  const customs = loadCustomCountries();
  const byCode = customs.find(c => c.code.toUpperCase() === upper);
  if (byCode) return byCode.code.toUpperCase();
  const byName = customs.find(c => c.name.toLowerCase() === s.toLowerCase());
  if (byName) return byName.code.toUpperCase();
  // свободный текст → код из транслита/усечения
  const code = upper.replace(/[^A-ZА-Я0-9]/gi, '').slice(0, 12) || 'CUSTOM';
  return code;
}

function countryMeta(code) {
  const c = normalizeCountryCode(code);
  if (COUNTRY_LABELS[c]) return { code: c, ...COUNTRY_LABELS[c] };
  const customs = loadCustomCountries();
  const found = customs.find(x => x.code.toUpperCase() === c);
  if (found) return { code: c, name: found.name, flag: found.flag || '🌍' };
  // неизвестный код — показываем как имя
  return { code: c, name: String(code || c), flag: '🌍' };
}

function allCountryOptions() {
  const list = Object.keys(COUNTRY_LABELS)
    .filter(k => k !== 'OTHER')
    .map(code => ({ code, ...COUNTRY_LABELS[code] }));
  const customs = loadCustomCountries();
  for (const c of customs) {
    if (!list.some(x => x.code === c.code.toUpperCase())) {
      list.push({ code: c.code.toUpperCase(), name: c.name, flag: c.flag || '🌍' });
    }
  }
  list.push({ code: 'OTHER', name: 'Другое', flag: '🌍' });
  list.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  return list;
}

function addCustomCountry(name, flag) {
  const n = String(name || '').trim();
  if (!n) return null;
  const code = normalizeCountryCode(n);
  // if maps to known standard, don't duplicate as custom
  if (COUNTRY_LABELS[code]) return code;
  const list = loadCustomCountries();
  if (!list.some(c => c.code.toUpperCase() === code)) {
    list.push({ code, name: n, flag: flag || '🌍' });
    persistCustomCountries(list);
  }
  return code;
}


const DEFAULT_RULES = [
  {
    "id": "general_na_op",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "Не актуально",
    "subtitle": "Ошибки оператора",
    "tone": "danger",
    "items": [
      "Не актуально оператор перепутал город проекта и не исправился",
      "Не актуально оператор не уточнил наличие гражданства Пункт ТОЛЬКО ГРАЖДАНЕ РФ/вопрос скрипта",
      "Не актуально оператор не выявил актуальность приезда в течение 7/14 дней",
      "Не актуально перевод на менеджера полностью отсутствует в диалоге",
      "Не актуально оператор упустил единственный вопрос скрипта* или не получил никакого ответа на заданный вопрос",
      "Не актуально невежливый диалог со стороны оператора",
      "Не актуально оператор говорит с клиентом на «ТЫ»",
      "Не актуально оператор использует мат в диалоге с клиентом",
      "Не актуально оператор ведёт диалог от лица другой компании",
      "Не актуально клиент настаивает на связи в мессенджере*, но оператор не отработал",
      "Не актуально оператор не выявил имя клиента",
      "Не актуально оператор использует некорректную формулировку* вопроса приезда в течение 7/14 дней",
      "Не актуально оператор использует расплывчатую формулировку* вопроса приезда в течение 7/14 дней",
      "Не актуально оператор \"душит\" клиента, вопрос задано более 5-раз",
      "Не актуально оператор не задал 2 или более вопроса скрипта, или задал, но не получил на них ответы",
      "Не актуально клиент настаивает на связи после 22:00*, оператор не отработал",
      "Не актуально нет звонка",
      "Не актуально брак звонка",
      "Не актуально оператор ведёт диалог с несовершеннолетним",
      "Не актуально явный бытовой шум на фоне у оператора",
      "Не актуально клиент с явными речевыми нарушениями",
      "Не актуально покупку планирует близкий родственник*, но на вопрос/вопросы скрипта были получены нечёткие ответы",
      "Не актуально покупку планирует третье лицо*, но на вопрос/вопросы скрипта были получены нечёткие ответы"
    ]
  },
  {
    "id": "general_na_cl",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "Не актуально",
    "subtitle": "Актуальность клиента",
    "tone": "warning",
    "items": [
      "Не актуально клиент отказался от связи* с менеджером",
      "Не актуально клиент не заинтересован в покупке авто",
      "Не актуально клиент не заинтересован в покупке в предусмотренный проектом срок (указываем срок)",
      "Не актуально клиент не рассматривает способ оплаты*, предусмотренный проектом (указываем способ оплаты)",
      "Не актуально клиент не заинтересован в приезде в течение 7/14 дней*",
      "Не актуально территориальное местонахождение клиента не отвечает требованиям проекта, а также не отвечает внутренним условиям +80 км от указанного города* (указываем условие: ТОЛЬКО ГОРОД и т.д.)",
      "Не актуально клиент рассматривает бюджет, который не соответствует требованиям проекта (указываем минимальный бюджет)",
      "Не актуально клиент планирует сдать в трейд-ин авто на иностранных номерах",
      "Не актуально клиент является бывшим заключённым, рассматривает кредит",
      "Не актуально клиент инвалид 1 группы и рассматривает кредитование",
      "Не актуально клиенту более 70-ти лет, рассматривает кредитование",
      "Не актуально конфликтный клиент",
      "Не актуально клиент планирует к покупке авто*, которого нет в АЦ",
      "Не актуально клиент ведёт несерьёзный диалог/подшучивает",
      "Не актуально клиент в нетрезвом состоянии",
      "Не актуально клиент отказался называть своё имя",
      "Не актуально клиент представился не своим именем",
      "Не актуально клиент рассматривает покупку как ЮР.Лицо*",
      "Не актуально клиент находится за пределами Российской Федерации",
      "Не актуально клиент проходит процедуру банкротства",
      "Не актуально срок перезвона в автоцентр не более 3х дней",
      "Не актуально клиент уже сотрудничает/договорился с нашей компанией"
    ]
  },
  {
    "id": "general_z0_op",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "0%",
    "subtitle": "Ошибки оператора",
    "tone": "danger",
    "items": [
      "0% Оператор путает скрипт, единоразово упоминая название другой компании",
      "0% Оператор использовал мат до того, как клиент взял трубку, клиент не услышал",
      "0% Оператор озвучил настоящее название АЦ вместо указанного в СРМ",
      "0% Оператор назначил звонок после 22:00, но клиент не настаивал на этом времени",
      "0% Клиент попросил направить дополнительную информацию (ссылку, фото и т.д.) на мессенджер, оператор соглашается или подтверждает, что это сделает менеджер",
      "0% Пропуск вопроса скрипта (указываем какой вопрос пропущен)",
      "0% Не выявлена актуальность (указываем актуальность чего)",
      "0% Клиент не готов принять звонок в ближайшее время*, оператор не уточнил удобное время и не записал его в ИНФО",
      "0% Пункт СПРОСИТЬ ПРОПИСКУ*: оператор не выявил регион прописки клиента",
      "0% Пункт УЗНАТЬ И ЗАНЕСТИ БЮДЖЕТ: клиент не определился с бюджетом, но оператор не сориентировал по минимальному бюджету АЦ и не получил согласие",
      "0% Оператор в ходе диалога не проговорил название компании/город",
      "0% Оператор использует некорректную формулировку вопроса",
      "0% По скрипту необходимо проговорить НОВЫЙ/БУ авто, оператор не проговорил",
      "0% Оператор \"зажевал\" важную информацию (указываем какую)",
      "0% Оператор представился сотрудником компании Victory/ЕЦТ, вместо прописанного проектом названия компании",
      "0% Оператор назвал фактическое место своего нахождения, вместо города, указанного в скрипте",
      "0% Оператор использует некорректную отработку*"
    ]
  },
  {
    "id": "general_z0_fl",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "0%",
    "subtitle": "Заполнение / ответы",
    "tone": "danger",
    "items": [
      "0% Пункт СТРОГОЕ ЗАПОЛНЕНИЕ ЗАЯВКИ*: оператор допустил ошибку в заполнении (указываем какую)",
      "0% Клиент не дал чёткого ответа на вопрос о приезде в течение 7/14 дней",
      "0% Клиент планирует покупку авто, только после продажи своего",
      "0% Покупку рассматривает третье лицо, но на все вопросы без уговоров получены чёткие ответы",
      "0% Покупку планирует близкий родственник, на все вопросы без уговоров получены чёткие ответы, но покупка не является совместной"
    ]
  },
  {
    "id": "general_z50_op",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "50%",
    "subtitle": "Ошибки оператора",
    "tone": "warning",
    "items": [
      "50% Вопрос скрипта был задан более трёх раз с целью получения чёткого положительного ответа",
      "50% Объединение вопросов скрипта",
      "50% Оператор перепутал город проекта, но исправился и назвал верный",
      "50% Клиент не дал согласия* на перевод на менеджера",
      "50% Оператор не проговорил, что менеджер свяжется в ближайшее время, когда это прописано в скрипте",
      "50% Оператор не проговорил название компании/город в начале диалога, хотя этого требует скрипт",
      "50% Клиент рассматривает кредит и проговорил, что он пенсионер/получает пенсию, но оператор не уточнил его возраст",
      "50% Клиент рассматривает кредит и проговорил, что он инвалид, но оператор не уточнил какой группы",
      "50% По проекту доступен и наличный расчёт, и кредитование, клиент рассматривает оба способа оплаты, но оператор не уточнил гражданство клиента с нерусским именем/акцентом",
      "50% Оператор ведёт неконструктивный диалог (более 10 минут)",
      "50% Оператор использует расплывчатую формулировку вопроса",
      "50% Пункт УЗНАТЬ И ЗАНЕСТИ МАРКУ ИЛИ БЮДЖЕТ: клиент не определился ни с маркой, ни с бюджетом, а оператор не сориентировал по минимальному бюджету АЦ и не получил согласие",
      "50% Оператор не проговорил, кто свяжется с клиентом (менеджер, специалист и т.д.)",
      "50% Оператор проговорил, что сам свяжется с клиентом",
      "50% В скрипте прописано конкретное время, когда с клиентом свяжется менеджер, но оператор его не проговорил",
      "50% Покупку планирует близкий родственник, на всё получены чёткие ответы, но оператор не уточнил, совместная ли будет покупка*",
      "50% Пункт УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬ, оператор задаёт вопрос только о марке клиента, впоследствии клиент называет только марку без модели",
      "50% Клиент назвал 3 марки, оператор записал \"не определился\"",
      "50% Клиент назвал 3 или более марок, оператор указал одну",
      "50% Пункт УТОЧНИТЬ/ЗАНЕСТИ ГОРОД КЛИЕНТА, оператор выявил только регион",
      "50% Оператор представился компанией \"Авто.ру\", вместо Партнёрской компании Авто.ру/Партнёрской компании Автосалонов",
      "50% В скрипте не прописан адрес, оператор называет выдуманный",
      "50% Оператор назвал неверный адрес"
    ]
  },
  {
    "id": "general_z50_fl",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "50%",
    "subtitle": "Заполнение",
    "tone": "warning",
    "items": [
      "50% Некорректное заполнение заявки* (указываем что неверно)",
      "50% Полностью отсутствует заполнение заявки",
      "50% Оператор не записал номер клиента, по которому ему будет удобнее связаться",
      "50% Клиент не дал чёткий ответ на вопрос (указываем какой вопрос)"
    ]
  },
  {
    "id": "general_z75_op",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "75%",
    "subtitle": "Ошибки оператора",
    "tone": "teal",
    "items": [
      "75% Ошибка в ударении названия компании",
      "75% Оператор не поздоровался в начале диалога",
      "75% Оператор не представился по имени",
      "75% Оператор более 3-х раз использовал уменьшительно-ласкательную форму слов",
      "75% Оператор назвал наименование компании без вопроса клиента"
    ]
  },
  {
    "id": "general_z75_fl",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "75%",
    "subtitle": "Заполнение",
    "tone": "teal",
    "items": [
      "75% Орфографическая ошибка (указываем какая)",
      "75% Нарушена пунктуация в заполнении заявки",
      "75% Не соблюдена последовательность заполнения заявки",
      "75% Оператор записал имя клиента в неполной форме",
      "75% Оператор не указал, с чем именно не определился клиент, ограничившись фразой «не определился»",
      "75% Оператор не указал пояснение/единицу измерения после числа",
      "75% Пункт УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬ, оператор указал только МАРКУ, когда клиент назвал и модель",
      "75% Пункт УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬ, оператор указал только МОДЕЛЬ, когда клиент назвал и марку",
      "75% Оператор неверно записал дату для связи/время для связи"
    ]
  },
  {
    "id": "solyanka_na_op",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "Не актуально",
    "subtitle": "Ошибки оператора",
    "tone": "danger",
    "items": [
      "Не актуально оператор перепутал город проекта и не исправился",
      "Не актуально перевод на менеджера полностью отсутствует в диалоге",
      "Не актуально оператор упустил единственный вопрос скрипта или не получил никакого ответа на заданный вопрос",
      "Не актуально невежливый диалог со стороны оператора",
      "Не актуально оператор говорит с клиентом на «ТЫ»",
      "Не актуально оператор использует мат в диалоге с клиентом",
      "Не актуально оператор ведёт диалог от лица другой компании",
      "Не актуально клиент настаивает на связи в мессенджере, но оператор не отработал",
      "Не актуально оператор не выявил имя клиента",
      "Не актуально клиент настаивает на связи после 22:00, оператор не отработал",
      "Не актуально оператор \"душит\" клиента, вопрос задано более 5-раз",
      "Не актуально оператор не задал 2 или более вопроса скрипта, или не получил на них ответы",
      "Не актуально оператор не уточнил наличие гражданства Пункт ТОЛЬКО ГРАЖДАНЕ РФ/вопрос скрипта",
      "Не актуально нет звонка",
      "Не актуально брак звонка",
      "Не актуально оператор ведёт диалог с несовершеннолетним",
      "Не актуально явный бытовой шум на фоне у оператора",
      "Не актуально покупку/получение услуги планирует близкий родственник, но на вопрос/вопросы скрипта были получены нечёткие ответы",
      "Не актуально покупку/получение услуги планирует третье лицо, но на вопрос/вопросы скрипта были получены нечёткие ответы"
    ]
  },
  {
    "id": "solyanka_na_cl",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "Не актуально",
    "subtitle": "Актуальность клиента",
    "tone": "warning",
    "items": [
      "Не актуально клиент отказался от связи с менеджером",
      "Не актуально клиент не заинтересован в покупке/получении услуги",
      "Не актуально клиент не заинтересован в покупке/получении услуги в предусмотренный проектом срок (указываем срок)",
      "Не актуально клиент не рассматривает способ оплаты, предусмотренный проектом (указываем способ оплаты)",
      "Не актуально территориальное местонахождение клиента не отвечает требованиям проекта, а также не отвечает внутренним условиям +80 км от указанного города (указываем условие: ТОЛЬКО ГОРОД и т.д.)",
      "Не актуально территориальное местонахождение/местопроживания клиента не отвечает требованиям проекта",
      "Не актуально клиент рассматривает бюджет, который не соответствует требованиям проекта (указываем минимальный бюджет)",
      "Не актуально конфликтный клиент",
      "Не актуально клиент ведёт несерьёзный диалог/подшучивает",
      "Не актуально клиент в нетрезвом состоянии",
      "Не актуально клиент отказался называть своё имя",
      "Не актуально клиент представился не своим именем",
      "Не актуально клиент уже записан в другую стоматологическую клинику*",
      "Не актуально клиент с явными речевыми нарушениями",
      "Не актуально клиент находится за пределами Российской Федерации",
      "Не актуально срок перезвона по солянке не более 14ти дней",
      "Не актуально клиент уже сотрудничает/договорился с нашей компанией"
    ]
  },
  {
    "id": "solyanka_z0_op",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "0%",
    "subtitle": "Ошибки оператора",
    "tone": "danger",
    "items": [
      "0% Оператор путает скрипт, единоразово упоминая название другой компании",
      "0% Оператор использовал мат до того, как клиент взял трубку, клиент не услышал",
      "0% Оператор озвучил настоящее название компании вместо указанного в СРМ",
      "0% Оператор назначил звонок после 22:00, но клиент не настаивал на этом времени",
      "0% Клиент попросил направить дополнительную информацию (ссылку, фото и т.д.) на мессенджер, оператор соглашается или подтверждает, что это сделает менеджер",
      "0% Пропуск вопроса скрипта (указываем какой вопрос пропущен)",
      "0% Не выявлена актуальность (указываем актуальность чего)",
      "0% Клиент не готов принять звонок в ближайшее время, оператор не уточнил удобное время и не записал его в ИНФО",
      "0% Пункт СПРОСИТЬ ПРОПИСКУ: оператор не выявил регион прописки клиента",
      "0% Пункт УЗНАТЬ И ЗАНЕСТИ БЮДЖЕТ: клиент не определился с бюджетом, но оператор не сориентировал по минимальному бюджету и не получил согласие",
      "0% Оператор в ходе диалога не проговорил название компании/город",
      "0% Оператор использует некорректную формулировку вопроса",
      "0% По скрипту необходимо проговорить состояние НОВЫЙ/БУ(, оператор не проговорил",
      "0% Оператор \"зажевал\" важную информацию (указываем какую)",
      "0% Оператор представился сотрудником компании Victory/ЕЦТ, вместо прописанного проектом названия компании",
      "0% Оператор назвал фактическое место своего нахождения, вместо города, указанного в скрипте",
      "0% Оператор использует некорректную отработку"
    ]
  },
  {
    "id": "solyanka_z0_fl",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "0%",
    "subtitle": "Заполнение / ответы",
    "tone": "danger",
    "items": [
      "0% Пункт СТРОГОЕ ЗАПОЛНЕНИЕ ЗАЯВКИ: оператор допустил ошибку в заполнении (указываем какую)",
      "0% Клиент планирует покупку продукта, только после продажи своего имущества",
      "0% Покупку рассматривает третье лицо, но на все вопросы без уговоров получены чёткие ответы",
      "0% Необходимо указать ИП, оператор не уточнил полное ФИО клиента"
    ]
  },
  {
    "id": "solyanka_z50_op",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "50%",
    "subtitle": "Ошибки оператора",
    "tone": "warning",
    "items": [
      "50% Вопрос скрипта был задан более трёх раз с целью получения чёткого положительного ответа",
      "50% Объединение вопросов скрипта",
      "50% Оператор перепутал город проекта, но исправился и назвал верный",
      "50% Клиент не дал согласия на перевод на менеджера",
      "50% Оператор не проговорил, что менеджер свяжется в ближайшее время, когда это прописано в скрипте",
      "50% Оператор не проговорил название компании/город в начале диалога, хотя этого требует скрипт",
      "50% Оператор ведёт неконструктивный диалог (более 10 минут)",
      "50% Оператор использует расплывчатую формулировку вопроса",
      "50% Оператор не проговорил, кто свяжется с клиентом (менеджер, специалист и т.д.)",
      "50% Оператор проговорил, что сам свяжется с клиентом",
      "50% В скрипте прописано конкретное время, когда с клиентом свяжется менеджер, но оператор его не проговорил",
      "50% Проект по доставке авто/НЕ АВТОСАЛОН, оператор проговорил, что это автосалон",
      "50% Пункт УТОЧНИТЬ/ЗАНЕСТИ ГОРОД КЛИЕНТА, оператор выявил только регион",
      "50% Оператор назвал неверный адрес",
      "50% В скрипте не прописан адрес, оператор называет выдуманный"
    ]
  },
  {
    "id": "solyanka_z50_fl",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "50%",
    "subtitle": "Заполнение",
    "tone": "warning",
    "items": [
      "50% Некорректное заполнение заявки (указываем что неверно)",
      "50% Полностью отсутствует заполнение заявки",
      "50% Оператор не записал номер клиента, по которому ему будет удобнее связаться",
      "50% Клиент не дал чёткий ответ на вопрос (указываем какой вопрос)"
    ]
  },
  {
    "id": "solyanka_z75_op",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "75%",
    "subtitle": "Ошибки оператора",
    "tone": "teal",
    "items": [
      "75% Ошибка в ударении названия компании",
      "75% Оператор не поздоровался в начале диалога",
      "75% Оператор не представился по имени",
      "75% Оператор более 3-х раз использовал уменьшительно-ласкательную форму слов",
      "75% Оператор назвал наименование компании без вопроса клиента"
    ]
  },
  {
    "id": "solyanka_z75_fl",
    "source": "solyanka",
    "sourceLabel": "Солянка",
    "category": "75%",
    "subtitle": "Заполнение",
    "tone": "teal",
    "items": [
      "75% Орфографическая ошибка (указываем какая)",
      "75% Нарушена пунктуация в заполнении заявки",
      "75% Не соблюдена последовательность заполнения заявки",
      "75% Оператор записал имя клиента в неполной форме",
      "75% Оператор не указал, с чем именно не определился клиент, ограничившись фразой «не определился»",
      "75% Оператор не указал пояснение/единицу измерения после числа",
      "75% Пункт УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬ, оператор указал только МАРКУ, когда клиент назвал и модель",
      "75% Пункт УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬ, оператор указал только МОДЕЛЬ, когда клиент назвал и марку",
      "75% Оператор неверно записал дату для связи/время для связи"
    ]
  },
  {
    "id": "spk_na",
    "source": "spk",
    "sourceLabel": "СПК",
    "category": "Не актуально",
    "subtitle": "Служба по контракту",
    "tone": "danger",
    "items": [
      "В диалоге с женщиной выяснилось, что службу рассматривает супруг, брат, сын, но оператор не уточнил имя и номер телефона заинтересованного лица - Не актуально",
      "Пункт \"ИДТИ СТРОГО ПО СКРИПТУ\": пропуск вопроса - Не актуально (но если в главном нет данного пункта, то ставим успешно в 0%)",
      "Если женщина рассматривает службу по контракту для себя - Не актуально"
    ]
  },
  {
    "id": "spk_ok",
    "source": "spk",
    "sourceLabel": "СПК",
    "category": "Успешно",
    "subtitle": "Служба по контракту",
    "tone": "teal",
    "items": [
      "В диалоге с женщиной выяснилось, что службу рассматривает супруг, брат, сын, оператор также уточнил имя и номер телефона заинтересованного лица - успешно в 100%",
      "Пункт \"ИДТИ СТРОГО ПО СКРИПТУ\": можно менять вопросы местами - успешно в 100%",
      "Если клиент не служил/не служит на данный момент, то не штрафуем оператора за пропуск вопросов: по контракту или срочная, комиссован или нет - успешно в 100%",
      "Клиент не назвал конкретный город, но оператор выявил регион - успешно в 100%",
      "Специальное звание ≠ воинскому званию (например, у клиента спец звание - лейтенант, а воинское - сержант) - успешно в 100%",
      "У клиента есть ограничения, но они не входят в перечень неактуальных заболеваний - успешно в 100%",
      "У клиента есть ограничения, но он их не назвал - успешно в 100%",
      "У клиента есть непогашенная судимость, но она не входит в список неактуальных статей - успешно в 100%",
      "У клиента категория «Д», но болезнь не входит в перечень неактуальных заболеваний - успешно в 100%",
      "У клиента отсутствует гражданство РФ - успешно в 100%",
      "Если клиент находится в данный момент под следствием - успешно в 100%",
      "Клиент находится в местах лишения свободы (или у него электронный браслет) - успешно в 100%",
      "Оператор самостоятельно уточняет наличие заболеваний/перечисляет их - успешно в 0%",
      "У клиента имеется непогашенная судимость, но не выявлено, по какой статье - успешно в 0%"
    ]
  },
  {
    "id": "calc_c0",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "НЕ АКТУАЛЬНО",
    "tone": "warning",
    "items": [
      "≥⑸",
      "Пример того как считать заявки, в которых допущено более одной ошибки",
      "ПЕРВАЯ ОШИБКА",
      "⑶",
      "⑶",
      "⑵",
      "⑶",
      "⑵",
      "⑴"
    ]
  },
  {
    "id": "calc_c1",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "СИЛЬНО ВЛИЯЕТ НА АКТУАЛЬНОСТЬ",
    "tone": "warning",
    "items": [
      "⑶",
      "ВТОРАЯ ОШИБКА",
      "⑶",
      "⑵",
      "⑵",
      "⑴",
      "⑴",
      "⑴"
    ]
  },
  {
    "id": "calc_c2",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "ВЛИЯЕТ НА АКТУАЛЬНОСТЬ",
    "tone": "warning",
    "items": [
      "⑵",
      "РЕЗУЛЬТАТ",
      "⑹",
      "⑸",
      "⑷",
      "⑷",
      "⑶",
      "⑵"
    ]
  },
  {
    "id": "calc_c3",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "СЛАБО ВЛИЯЕТ НА АКТУАЛЬНОСТЬ",
    "tone": "warning",
    "items": [
      "⑴",
      "НЕ АКТУАЛЬНО",
      "НЕ АКТУАЛЬНО",
      "0%",
      "0%",
      "0%",
      "0%"
    ]
  },
  {
    "id": "calc_c4",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "НЕ ВЛИЯЕТ НА АКТУАЛЬНОСТЬ",
    "tone": "warning",
    "items": [
      "⓪"
    ]
  },
  {
    "id": "calc_c5",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "Базовые правила комбинаций:",
    "tone": "danger",
    "items": [
      "75% + 75% = 50%"
    ]
  },
  {
    "id": "calc_c6",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "Комбинации",
    "tone": "danger",
    "items": [
      "75% + 75% + 75% = 50%"
    ]
  },
  {
    "id": "calc_c7",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "Комбинации",
    "tone": "danger",
    "items": [
      "50% + 50% = 0%"
    ]
  },
  {
    "id": "calc_c8",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "Комбинации",
    "tone": "danger",
    "items": [
      "0% + 75% = 0%"
    ]
  },
  {
    "id": "handbook_all",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "Справочные материалы",
    "tone": "warning",
    "items": [
      "БЛИЗКИЕ РОДСТВЕННИКИПАПА, МАМА, МУЖ, ЖЕНА, ДОЧЬ, СЫНВСЕ ОСТАЛЬНЫЕ ЯВЛЯЮТСЯ ТРЕТЬИМИ ЛИЦАМИ",
      "АВТОИНФОРМАЦИЯ ПО КОЛ-ВУ АВТО В ИНФО",
      "1. Клиент назвал 3 или более марки, необходимо записать хотя бы две, иначе 50%",
      "2. Клиент назвал 2 марки, достаточно записать одну",
      "3. Клиент назвал 3 марки, опер записал не определился, 50%",
      "4. Клиент назвал 10 или более марок, нужно записать хотя бы 3 марки, либо не определилсяМАРКИ НА РУССКОМЭти марки допустимы для записи на русском: Москвич, ЗАЗ, ВАЗ, ГАЗ, УАЗАВТО КОТОРЫХ НЕТ В АЦНЕ АКТУАЛЬНЫЕ АВТО ЕСЛИ ИНОГО НЕ УКАЗАНО В ГЛАВНОМ: - Авто стоимостью более 10млн- Авто выпуска до 2000-х годов- Гибридные авто- Электрокары - Минивэны- Микроавтобусы- Лимузины- Кабриолеты-Новые премиум марки-Спорткары- Любые фургоны, грузовой транспорт- Авто на газуМИНИМАЛЬНЫЕ ЦЕНЫ НА АВТО, ЕСЛИ ОНИ НЕ УКАЗАНЫ В СКРИПТЕ: БУ ОТ 350тыс, НОВЫЕ ОТ 600тыс",
      "Пункт в ГЛАВНОМ: ИДТИ СТРОГО ПО СКРИПТУ",
      "1. Можно менять вопросы местами",
      "2. Можно КОРРЕКТНО переформулировать вопрос скрипта",
      "3. Некорректная/расплывчатая формулировка вопроса - Не актуально",
      "4. Пропуск вопроса из скрипта - Не актуально",
      "5. Можно использовать отработки, только если они есть после вопроса",
      "6. Использовано больше отработок, чем доступно по скрипу - Не актуально",
      "ЮР. ЛИЦА В АЦЕсли в ац присутствует такой способ оплаты как лизинг, то в этом случае юр.лица пропускаем",
      "МУЛЬТИБРЕНДОВЫЕ АЦ И ОФИЦАЛЬНЫЕ ДИЛЕРЫОператор представляющий мультибрендовый АЦ может говорить клиенту, что АЦ является офицальным дилллером",
      "Пункт в ГЛАВНОМ: НЕ УГОВАРИВАТЬ",
      "4. Можно использовать отработки, только если они есть после вопроса5.. Использовано больше отработок, чем доступно по скрипу - Не актуально",
      "ПРОПИСКАЕсли в главном есть пункт СПРОСИТЬ ПРОПИСКУ - УТОЧНЯЕМ ПРОПИСКУ У ВСЕХ",
      "ГРАЖДАНСТВОУТОЧНЯЕМ ГРАЖДАНСТВО:",
      "1. По условиям скрипта ТОЛЬКО ГРАЖДАНЕ РФ, у клиента не русское имя/акцент",
      "2. В скрипте прописан вопрос о гражданстве",
      "Пункт в ГЛАВНОМ: УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬЕсли необходимо выявить марку и модель, а опер задаёт вопрос только касательно марки: \"Подскажите какая марка вас интересует?\" Ставим 50% Оператор не выявил модельЕсли вопрос задаётся: \"Подскажите какая марка и модель вас интересует?\", а клиент называет только марку - не штрафуемЕсли вопрос задаётся: \"Подскажите какой автомобиль вас интересует?\", а клиент называет только марку - не штрафуем",
      "НЕЗАИНТЕРЕСОВАННЫЕ ЛИЦА АЦ",
      "1. Если клиент говорит, что покупку планирует близкий родственник, но сам не даёт чётких ответов, а оператор не взял номер заинтересованного - Не актуально",
      "2. Если клиент говорит, что покупку планирует близкий родственник, даёт чёткие ответы, но оператор не уточнил, совместная ли покупка - 50%",
      "3. Если клиент говорит, что он планирует покупку совместно с близким родственником и что решение они будут принимать вместе - 100%",
      "4. Если клиент говорит, что покупку планирует третье лицо, оператор не взял номер заинтересованного, но клиент чётко отвечает на все вопросы, и клиента не пришлось уговаривать - 0%",
      "5. Если клиент говорит, что покупку планирует близкий родственник, даёт чёткие ответы, но покупка не совместная - 0%",
      "МЕССЕНДЖЕРЫБез штрафа:",
      "1. Клиент не настаивает на связи через мессенджер, просто упомянул в начале или середине диалога",
      "2. Клиент попросил направить дополнительную информацию(ссылку и т.п) на мессенджер, оператор в свою очередь проигнорировал это, либо сказал, что об этом клиент может договориться с менеджером.Штраф 0%",
      "1. Клиент попросил направить дополнительную информацию(ссылку и т.п) на мессенджер, оператор подтверждает, что это сделает менеджерНе актуально:",
      "1. Клиент настаивает на связи в мессенджере, опер не отрабатывает",
      "2. Клиент настаивает на связи в мессенджере, опер соглашается",
      "В СКРИПТЕ НЕ ПРОПИСАНО БЛИЖАЙШЕЕ ВРЕМЯ И НЕТ ВОПРОСА ДЛЯ УТОЧНЕНИЯ УДОБНОГО ВРЕМЕНИ ДЛЯ СВЯЗИЕсли оператор проговаривает, что менеджер свяжется в ближайшее время/в течение дня НЕ СЧИТАЕТСЯ НАЗНАЧЕННЫМ ВРЕМЕНЕМ - ставим 100%ПРИМЕР ВОПРОСА:Отлично, тогда я передаю Ваш контакт менеджеру автосалона, он свяжется с Вами и сориентирует по автомобилям в наличии. Согласны?",
      "КРЕДИТОВАНИЕК нему относим: Кредит, Частичный кредит",
      "ЕДИНСТВЕННЫЙ ВОПРОС СКРИПТАПод единственным вопросом скрипта подразумевается любой вопрос, который не является вступительным, не касается имени и не относится к согласию на перевод",
      "НЕЗАИНТЕРЕСОВАННЫЕ ЛИЦА СОЛЯНКАЕсли клиент в ходе разговора упоминает, что услугу рассматривает близкий родственник, и сам даёт на все вопросы точные ответы - 100%.Если клиент говорит, что услугу рассматривает близкий родственник, но сам не может дать точные ответы - Не актуальноЕсли клиент говорит, что услугу рассматривает третье лицо, и сам даёт на все вопросы точные ответы, и оператору не пришлось его уговаривать - 0%Если клиент говорит, что услугу рассматривает третье лицо, но сам не может дать точные ответы - Не актуально",
      "ЧЁТКИЙ/НЕЧЁТКИЙ ОТВЕТОЦЕНИВАЕМ ЗАЯВКУ ПО ПОСЛЕДНЕМУ ОТВЕТУ КЛИЕНТАПРИМЕР:-В течение 30 дней покупку рассматриваете?-Возможно да-Ну, а если всё устроит то рассмотрите? -Не знаю, наверноеВ данном примере, оценка 50%, тк последним ответом было: наверноПРИМЕР:-В течение 30 дней покупку рассматриваете?-Не знаю-Ну, а если всё устроит то рассмотрели бы-Да, возможноВ данном примере, оценка 100%, тк присутствует частица ДА",
      "Связь 9:00 - 22:00Оператор, если скрипт его не ограничивает, может назначать время для связи в промежутке между 9:00 - 22:00 включительно",
      "ОТКАЗАЛСЯ/НЕ ДАЛ СОГЛАСИЯ НА СВЯЗЬ С МЕНЕДЖЕРОМОтказался - клиент явно выразил нежелание общаться с менеджером. Например, сказал: «Не хочу разговаривать», «Отстаньте», «Не надо со мной связываться»Не дал согласия - клиент не совершил активного действия, подтверждающего согласие. Он мог промолчать, уклониться от ответа, сказать «подумаю» или прервать разговор до момента запроса согласия",
      "Критерий +80 кмСчитаем не в радиусе, а по кратчайшему пути по дорогеРАБОТАЕТ: Если перемещается клиент. Расстояние считается от местоположения клиента до ЦЕНТРА города, где он готов получить услугу или совершить покупку.НЕ РАБОТАЕТ:",
      "1. Если перемещается объект (товар, недвижимость). Расстояние не учитывается, так как объект находится на фиксированной локации и не может быть перемещен в указанный город клиентом.",
      "2. Если речь идёт о месте проживания клиента",
      "3. Если проектом является СТОМАТОЛОГИЯПРИМЕР: Продажа недвижимости/Ремонт квартир ТОЛЬКО ЕКАТЕРИНБУРГ - ЗНАЧИТ РАБОТАЕМ ТОЛЬКО И ТОЛЬКО ПО ЕКАТЕРИНБУРГУ - Берёзовский, Ревда, Верхняя Пышма - НЕ АКТУАЛЬНО\"",
      "ИП СЧИТАЕТСЯ ЮР.ЛИЦОМ",
      "ПОДМЕНА ВОПРОСА УТВЕРЖДЕНИЕМЭто псевдовопрос, когда оператор не спрашивает о намерении или факте, а сам утверждает нечто от лица собеседника, а затем просит лишь подтвердить это утверждениеОсновные признаки подменыВ первой части - утверждение о клиенте, которое он не делал.В конце - короткий вопрос: «хорошо?», «да?», «не так ли?», «правда?» и т.п.ПРИМЕРЫ:Я передам менеджеру, что в течение 30 дней вы рассмотрите покупку, хорошо?Я отмечу, что вы посетите нашу стоматологию в течение 14 дней, хорошо?",
      "БЛИЖАЙШЕЕ ВРЕМЯ = ДО ОДНОГО ЧАСА/В ТЕЧЕНИЕ ЧАСА",
      "НОРМА ЗАПОЛНЕНИЯ ЗАЯВОКОБЫЧНЫЕ СКРИПТЫ- за пробелы/другие знаки разделения – НЕ ШТРАФУЕМ- за ошибку в нерусских именах – НЕ ШТРАФУЕМ- за лишнюю информацию – НЕ ШТРАФУЕМ (КК сам должен удалить при необходимости)- если заявка заполнена следующим образом: «Игорь, не определился» – ШТРАФ 75% (прописываем полностью с чем именно не определился)- если опер перепутал даты для связи – ШТРАФ 75%- дополнительный номер телефона – МОЖНО УКАЗЫВАТЬПРИМЕР ЗАПОЛНЕНИЯ- за ошибку в нерусских именах – НЕ ШТРАФУЕМ- за кавычки/пробелы – НЕ ШТРАФУЕМ- за другие знаки разделения – ШТРАФ 75%- за лишнюю информацию – ШТРАФ 75%- когда примером заполнения не предусмотрено удобное время для связи, а оператор записал – оценка: НЕ АКТУАЛЬНО, но если оператору удалось получить согласие на ближайшее время – пропускаем БЕЗ ШТРАФА- дополнительный номер телефона – МОЖНО УКАЗЫВАТЬПункт СТРОГОЕ ЗАПОЛНЕНИЕ ЗАЯВКИ:- за ошибку в нерусских именах – НЕ ШТРАФУЕМ- за кавычки/пробелы – НЕ ШТРАФУЕМ- за другие знаки разделения – ШТРАФ 0%- за некорректное заполнение заявки – ШТРАФ 0%- когда примером заполнения не предусмотрено удобное время для связи, а оператор записал – оценка: НЕ АКТУАЛЬНО, но если оператору удалось получить согласие на ближайшее время – пропускаем БЕЗ ШТРАФА- дополнительный номер телефона – МОЖНО УКАЗЫВАТЬ",
      "КАЛЬКУЛЯТОР ШТРАФОВБазовые правила комбинаций:75% + 75% = 50%75% + 75% + 75% = 50%50% + 50% = 0%0% + 75% = 0%Каждому критерию или ошибке присваивается вес, указанный в примечании к нему. Все веса делятся на 4 уровня влияния на актуальность:Вес 3 - сильно влияетВес 2 - влияетВес 1 - слабо влияетВес 0 - не влияетЧтобы определить, актуальна ли заявка, нужно сложить веса всех имеющихся ошибок. Если сумма равна 5 или больше, заявка признаётся не актуальной.Правила сочетания весов (примеры):Комбинация ошибок Сумма весов ИтогСильно (3) + Сильно (3) 6 Не актуальноСильно (3) + Влияет (2) 5 Не актуальноВлияет (2) + Влияет (2) 4 АктуальноСильно (3) + Слабо (1) 4 АктуальноВлияет (2) + Слабо (1) 3 АктуальноСлабо (1) + Слабо (1) 2 АктуальноВо всех случаях, когда сумма меньше 5, заявка считается актуальной.",
      "ДАВЛЕНИЕДавление - это когда вопрос или фраза заставляют клиента ответить определённым образом под угрозой негативных последствийПризнаки давления:",
      "1. Ультиматумы («иначе…», «если нет, то…»)",
      "2. Угрозы (потеря скидки, ухудшение условий, отказ в передаче контакта)ПРИМЕРЫ: Назовите ваш бюджет, пожалуйста, иначе не могу пропустить заявкуЕсли вы не купите в ближайшие 30 дней, условия могут ухудшиться. Лучше ведь сейчас, да?Мы работаем, только если в течение 30 дней покупку рассмотритеУ нас только в этом месяце скидки, если не купите, дальше их может и не быть, рассмотрите покупку в течение 30 дней?",
      "СЛОВА/ФРАЗЫ РАЗМЫВАЮЩИЕ ОБЯЗАТЕЛЬСТВА, УСЛОВИЯ, ТОЧНОСТЬЭто слова, которые делают вопрос неконкретным, позволяя клиенту дать уклончивый, необязывающий или приблизительный ответПримеры: в перспективе, условно, в теории, возможно, как вариант, может быть, в идеале, допустим, чисто гипотетически, наверное, ориентировочно, приблизительно, где-то, около, плюс-минус, почти, примерно, в районе, более-менее и т.д.Также отдельно стоит выделить формулировку: В ближайший месяц - размывает условие (срок)На будущее в течение \"срок\" (Пример: На будущее в течение 30 дней покупку рассмотрите?) - размывает обязательство + условие",
      "ЛОЖНАЯ ГРАНИЦАЛожные границы - это фраза, в вопросе числового или иного порога, которая не соответствует реальным условиям предложения, и вводит клиента в заблуждение относительно того, что он может получить.Пример: В ГЛАВНОМ СУММА ДОЛГА (От 250 тыс) - Оператор задаёт вопрос: Сумма всех ваших долгов до 300 тыс?В ГЛАВНОМ БЮДЖЕТ (От 900 тыс) - Оператор задаёт вопрос: Вы в бюджете до 910 тыс рассматриваете?",
      "СПОСОБЫ ОПЛАТЫ АВТОСАЛОНЫ: - если в ГЛАВНОМ нет пункта «ТОЛЬКО КРЕДИТ», это означает, что оплата за наличный расчет допустима - по наличию рассрочки/лизинга и др. ориентируемся на информацию, указанную в разделе «ЧТО У НАС ЕСТЬ» - если лизинга нет в списке, то АЦ работает ТОЛЬКО С ФИЗ. ЛИЦАМИСОЛЯНКА: - если в скрипте не указана информация о вариантах оплаты, то наличные/кредит/рассрочку/лизинг - ПРОПУСКАЕМ",
      "ЛОЯЛЬНОСТЬ ШТРАФ БЕЗ УСПЕХА - Если допущена данная ошибка ставим оценку НЕ АКТУАЛЬНОУМЕРЕННЫЙ УРОВЕНЬ - Оцениваем допущенную ошибку, также как и всегда,т.е если в таблице 0%, ставим 0%, если 50% ставим 50% и так далее",
      "КОРРЕКТНОСТЬ ФОРМУЛИРОВКИКорректность формулировки вопроса определяется таким образом: Шаг",
      "1. Определите тип вопросаЗакрытый - предполагает односложный ответ (да, нет, хорошо, согласен, не рассматриваю, возможно и т.д)Полуоткрытый - требует конкретного значения (сумма, этаж, марка, район и т.д)Шаг",
      "2. Сравните вопрос с пунктами типа вопросаКОРРЕКТНАЯ ФОРМУЛИРОВКА - В случае, если все пункты выполняются, оценка 100%РАСПЛЫВЧАТАЯ ФОРМУЛИРОВКА - В случае если один из пунктов присутствует, оценка 50%НЕКОРРЕКТНАЯ ФОРМУЛИРОВКА - В случае, если один из этих пунктов присутствует, оценка 0%Если вопрос сочитает пункт из РАСПЛЫВЧАТОЙ и НЕКОРРЕКТНОЙ формулировки, то ставиться оценка за НЕКОРРЕКТНУЮ ФОРМУЛИРОВКУШаг",
      "3. Поставьте оценку",
      "ВВОДНЫЕ ПАРАМЕТРЫ Это конкретные данные, которые оператор должен узнать у клиента по скриптуПростыми словами, это ответы на вопросы/условия ключевых вопросов скрипта: район, город, сроки( например: когда планирует покупку), бесплатная консультация, марка и тд.",
      "ПРИВОЗ АВТО ИЗ-ЗА ГРАНИЦЫ Минимальный бюджет от 500 тыс, если иного не указано в скриптеПропускаем легковые автомобили (как коммерческого, так и грузового типа), если скриптом не предусмотрено иное, в том числе и минивэны)",
      "ИНН КОМПАНИИ/НАЗВАНИЕ КОМПАНИИЕсли клиент отказался называть ИНН/компанию, но заинтересован в услугах - оценка: 100%Не работает, если проектом предусмотрена другая оценка",
      "НЕКОРРЕКНАЯ ОТРАБОТКА В ХОДЕ ДИАЛОГА«ни к чему не обязывает/привязывает»«если понравится- купите, если нет то нет»ОЦЕНКА: 0%",
      "ПУНКТ В ГЛАВНОМ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ И МОДЕЛЬЮ/МАРКОЙ ИЛИ МОДЕЛЬЮЕСЛИ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ И МОДЕЛЬЮ - НЕ АКТУАЛЬНОСтавим оценку не актуально, когда клиент не определился, как с маркой, так и с моделью. Но если клиент определился хотя бы с маркой, то пропускаем в 100%ЕСЛИ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ/МОДЕЛЬЮ - НЕ АКТУАЛЬНОСтавим оценку не актуально, когда клиент не определился хотя бы с одним: либо с маркой, либо с модельюЕСЛИ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ ИЛИ МОДЕЛЬЮ - НЕ АКТУАЛЬНОСтавим оценку не актуально, когда клиент не определился хотя бы с одним: либо с маркой, либо с моделью",
      "СОЛЯНКА - ПРОЕКТЫ ОБУЧЕНИЕ/АВТОШКОЛАВ случае, если в скрипте ОБУЧЕНИЯ не предусмотрено ограничений - Пропускаем от 15 лет и вышеВ случае, если в скрипте АВТОШКОЛЫ не предусмотрено ограничений - Пропускаем от 16 лет и выше",
      "ВОЗРАСТНОЕ ОГРАНИЧЕНИЕПо кредиту/ипотеке/рассрочке С 21 ГОДА ДО 70 ЛЕТ ВКЛЮЧИТЕЛЬНО",
      "ВНЕШНИЕ ФАКТОРЫ (услуга/покупка зависит от внешних факторов «если получится, если выздоровеете» и тд) - пропускаем",
      "МЕСТОНАХОЖДЕНИЕ/МЕСТО ПРОЖИВАНИЯМЕСТО ОКАЗАНИЯ УСЛУГИЕсли нужно уточнить местонахождение:",
      "1. Какой у вас город? - 0%",
      "2. Из какого города звоните? - 100%",
      "3. Из какого вы города - 100%Если нужно уточнить место проживания:",
      "2. Из какого города звоните? - 0%",
      "3. Из какого вы города - 100%Если нужно уточнить место оказания услуги:",
      "3. Из какого вы города - 0%",
      "ГОРОД ПРОЕКТАЕсли в скрипте не прописан город компании, оператор вправе говорить, что звонит из Москвы",
      "КВАРТИРЫЕсли клиент запрашивает цену на 1-ком квартиру, а оператор называет цену на студию - оценка НЕ АКТУАЛЬНО"
    ]
  },
  {
    "id": "important_c1",
    "source": "important",
    "sourceLabel": "Важные моменты",
    "category": "Важные моменты",
    "subtitle": "НЕ АКТУАЛЬНО",
    "tone": "danger",
    "items": [
      "В проектах, где актуальна только Тюменская область, ХМАО и ЯНАО НЕ БЕРЕМ, это отдельные автономные округа",
      "В АЦ НЕТ: авто ДО 2000х г / Lada Priora, Daewoo Matiz и подобных моделей / НОВЫХ авто премиум сегмента / авто ОТ 10 млн / гибридов, электрокаров / минивэнов, спорткаров и др.",
      "Клиент рассматривает кредит, но является бывшим заключенным - оценка: НЕ АКТУАЛЬНО",
      "Если н-р клиент рассматривает 1-комнатную квартиру, а опер озвучил цену за студию - оценка: НЕ АКТУАЛЬНО",
      "Клиент говорит, что уже записан в другую стоматологическую клинику - оценка: НЕ АКТУАЛЬНО"
    ]
  },
  {
    "id": "important_c2",
    "source": "important",
    "sourceLabel": "Важные моменты",
    "category": "Важные моменты",
    "subtitle": "УСПЕШНО СО ШТРАФОМ",
    "tone": "warning",
    "items": [
      "Если оператор не озвучил В НАЧАЛЕ диалога город/название компании - оценка: 50%",
      "Если в скрипте написано н-р: «интересовались покупкой НОВОГО автомобиля в Москве?», а оператор за весь диалог вообще не уточнил, что в АЦ только новые - оценка: 0%",
      "В проектах, где нужно узнать название компании, если клиент является ИП, то опер должен уточнить ПОЛНОЕ ФИО, в противном случае - оценка: 0%",
      "По скрипту нужно уточнить марку ИЛИ бюджет (н-р УЗНАТЬ И ЗАНЕСТИ МАРКУ ИЛИ БЮДЖЕТ (от 300 тыс): если клиент не определился ни с чем, а оператор не сориентировал по минимальному бюджету и не получил согласие - оценка: 50%",
      "В скрипте вопрос про бюджет стоит ОТДЕЛЬНЫМ пунктом (н-р УЗНАТЬ И ЗАНЕСТИ БЮДЖЕТ (от 6 млн): если клиент не определился, оператор не сориентировал по минимальному бюджету и не получил согласие - оценка: 0%",
      "Если оператор не уточнил кто именно свяжется с клиентом (менеджер, специалист и тд) - оценка: 50%",
      "Если оператор озвучивает настоящее название проекта, хотя у них указано другое (например, АЦ «Мартен Лада», а у оператора — «Официальный дилер Лада») - оценка: 0%",
      "Если в скрипте указано конкретное время перезвона (н-р «менеджер свяжется в течение 15 минут»), но оператор его не озвучил - оценка: 50%",
      "Если оператор договорился на звонок после 22:00, клиенту не принципиально - оценка: 0% (КК меняет время в заявке)",
      "НЕ АВТОСАЛОН: если оператор сказал, что это автосалон - оценка: 50%"
    ]
  },
  {
    "id": "important_c3",
    "source": "important",
    "sourceLabel": "Важные моменты",
    "category": "Важные моменты",
    "subtitle": "УСПЕШНО БЕЗ ШТРАФА",
    "tone": "warning",
    "items": [
      "Если в скрипте ничего не указано насчет премиум сегмента, клиент рассматривает н-р Ауди, и в ходе диалога ни клиент ни опер не уточняют состояние авто (новый или БУ) - оценка: 100%",
      "В скриптах, где нет вопроса о приезде: если клиент находится в другом регионе, но по диалогу понятно, что он готов рассмотреть покупку в актуальном городе - оценка: 100%",
      "Если клиент говорит, что он в госпитале, но, например, на вопрос о 30 днях отвечает, что готов, и его состояние никак не мешает совершить покупку - оценка: 100%",
      "Во всех проектах, если клиент обращался в компанию месяц назад - оценка: 100%",
      "Если клиент просто хочет оформить кредит на родителей/детей/супруга, то оператору не нужно уточнять, является ли покупка совместной - оценка: 100%",
      "Если клиент не готов говорить в ближ время, но опер отработал возражение и получил согласие - оценка: 100%",
      "Проект Россия/Victory Group VDL/Лидогенерация: самозанятых пропускаем в зависимости от сферы деятельности",
      "ПРИЗЫВАНЕТ: если клиент смотрит для племянника/внука/молодого человека и т д, на все дал точные ответы - оценка: 100%",
      "АВТОШКОЛА: диалог с 16 летними пропускаем - оценка: 100%",
      "АВТО С АУКЦИОНОВ: если клиент рассматривает trade-in, в скрипте не указано обратного - оценка: 100%",
      "Если клиент отказался называть ИНН/компанию, но заинтересован в услугах - оценка: 100%",
      "«В ближайшее время» = в течение часа",
      "ПРОЕКТЫ ПО НЕДВИЖИМОСТИ: если клиент является риелтором, а в скрипте не указано обратного, и на все вопросы получены точные ответы - оценка: 100%",
      "Если на вопрос о марке и модели клиент назвал только марку - оценка: 100% (оператору необязательно задавать уточняющий вопрос про модель)"
    ]
  },
  {
    "id": "answers_c0",
    "source": "answers",
    "sourceLabel": "Чёткие / нечёткие",
    "category": "ЧЁТКИЙ ОТВЕТ",
    "subtitle": "ЧЁТКИЙ ОТВЕТ",
    "tone": "teal",
    "items": [
      "Клиент РАССМОТРЕЛ ВОЗМОЖНОСТЬ И ГОТОВ / частичка ДА",
      "Да",
      "Возможно Да",
      "Наверное Да",
      "Думаю Да",
      "Почему бы и нет",
      "Угу, Ага",
      "Рассмотрю",
      "Теоретически да",
      "Давай/Хорошо",
      "Можно посмотреть/Можно попробовать",
      "Давайте посмотрим",
      "Вполне",
      "Если все устроит",
      "Скорее всего",
      "Может быть приеду/рассмотрю",
      "Может быть в течение месяца",
      "и тд..."
    ]
  },
  {
    "id": "answers_c1",
    "source": "answers",
    "sourceLabel": "Чёткие / нечёткие",
    "category": "50% НЕЧЁТКИЙ ОТВЕТ",
    "subtitle": "50% НЕЧЁТКИЙ ОТВЕТ",
    "tone": "teal",
    "items": [
      "Клиент НЕ ИСКЛЮЧАЕТ ВОЗМОЖНОСТЬ",
      "Возможно",
      "Может быть",
      "Наверное",
      "Не исключаю",
      "Есть такая возможность",
      "Есть такая вероятность",
      "Да, в течение месяца-полтора(срок 30 дней)",
      "В течение месяца-двух(срок 30 дней)",
      "и тд..."
    ]
  },
  {
    "id": "answers_c3",
    "source": "answers",
    "sourceLabel": "Чёткие / нечёткие",
    "category": "0% НЕ ВЫЯВЛЕНА АКТУАЛЬНОСТЬ",
    "subtitle": "0% НЕ ВЫЯВЛЕНА АКТУАЛЬНОСТЬ",
    "tone": "danger",
    "items": [
      "Клиент ЕЩЕ НЕ ДУМАЛ НАД РАССМОТРЕНИЕМ ВОЗМОЖНОСТИ",
      "Не знаю",
      "Видно будет",
      "Без понятия",
      "Подумаю",
      "Пока не решил",
      "Смотря какая цена/ставка",
      "Можно подумать",
      "Да не знаю",
      "Да подумаю",
      "и тд..."
    ]
  },
  {
    "id": "questions_intro",
    "source": "questions",
    "sourceLabel": "Корректность вопроса",
    "category": "Корректность",
    "subtitle": "Типы вопросов",
    "tone": "warning",
    "items": [
      "ЗАКРЫТЫЙ ВОПРОС*Пример: Подскажите, рассматриваете покупку в течение 30 дней?Подскажите, рассматриваете покупку в кредит?Подскажите, готовы посетить нашу стоматологию в течение 14 дней?Подскажите, готовы приехать в наш автоцентр в течение 7 дней?",
      "ПОЛУОТКРЫТЫЙ ВОПРОС*Пример: Подскажите, в каком бюджете рассматриваете автомобиль?Подскажите, на каком этаже рассматриваете квартиру?Подскажите, какую марку авто рассматриваете?Подскажите, в каком районе рассматриваете занятия фитнесом?",
      "ЗАКРЫТЫЙ ВОПРОС - ЭТО ВОПРОС КОТОРЫЙ ПРЕДПОЛОГАЕТ ОДНОСЛОЖНЫЙ ОТВЕТ(Да или Нет) А ТАКЖЕ ДРУГИЕ ЛАКОНИЧНЫЕ ФОРМЫ (Хорошо, Согласен, Не рассматриваю, Возможно)",
      "ПОЛУОТКРЫТЫЙ ВОПРОС - ЭТО ВОПРОС КОТОРЫЙ ТРЕБУЕТ КОНКРЕТНОЙ ИНФОРМАЦИИ (Этаж, Марка, Район, Сроки и т.д)"
    ]
  },
  {
    "id": "questions_c0",
    "source": "questions",
    "sourceLabel": "Корректность вопроса",
    "category": "Корректность",
    "subtitle": "0% НЕКОРРЕКТНАЯ формулировка*",
    "tone": "danger",
    "items": [
      "1. Не имеет привязку к действию, хотя это необходимо (покупка, приезд, посещение и т.д)2. Отсутсвуют вводные параметры*, хотя они необходимы (Пример 30 дней, 7 дней, 14 дней/бесплатная консультация и т.д)",
      "В случае, если один из этих пунктов присутствует, оценка 0%",
      "ПРИМЕРЫ:",
      "В течение месяца рассмотрите?",
      "Первоначальный взнос 20 процентов будет? / Вы с первоначальным взносом планируете покупку? (по скрипту нужно узнать наличие ПВ)",
      "Подскажите, вы для себя смотрите? (Вопрос в скрипте звучит: Подскажите, вы являетесь риелтором?)"
    ]
  },
  {
    "id": "questions_c1",
    "source": "questions",
    "sourceLabel": "Корректность вопроса",
    "category": "Корректность",
    "subtitle": "50% РАСПЛЫВЧАТАЯ формулировка*",
    "tone": "danger",
    "items": [
      "1. Наличие слов/фраз, размывающих обязательства/условия/точность* (Примерно, Где-то, В районе, Около, Плюс-минус и т.д)2. Подмена вопроса утверждением* (Пример: «Я передам, что вы рассмотрите… хорошо?» «Я отмечу, что вы посетите… хорошо?»)3. Давление* (Если вы не купите в этом месяце, цена вырастет, купите в течение 30 дней?)4. Ложные границы* (В скрипте от 900тыс, оператор задаёт вопрос: Рассмотрите бюджет до 910 тыс)",
      "В случае если один из пунктов присутствует, оценка 50%",
      "ПРИМЕРЫ:",
      "У нас только в этом месяце скидки, если не купите дальше их может и не быть, рассмотрите покупку в течение 30 дней?",
      "Грубо говоря в течение 30 дней рассмотрите покупку?",
      "Я помечу, что если вас всё устроит, то вы рассматриваете покупку в течние месяца?",
      "Условно, если всё устроит, то купите в течение 30 дней?",
      "В теории, вы купите авто в течение 30 дней?",
      "Примерно в течение 14 дней будете готовы посетить клинику?",
      "Покупку на будущее в течение 30 дней рассмотрите?",
      "Готовы рассмотреть покупку в ближайший месяц?",
      "Не исключаете/допускаете вариант покупки в течение 30 дней?",
      "Рассмотрите покупку в течение 30 дней, есть такая вероятность?",
      "Если не дадите согласие, то не смогу передать заявку, вы в течение 30 дней рассмотрите покупку?",
      "Возможно рассмотрите покупку в течение 30 дней?",
      "Может быть, если условия устроят купите в течение 30 дней?",
      "Когда подберете, тогда и рассмотрите покупку в течение 30 дней?",
      "Когда всё понравится, тогда и рассмотрите покупку в течение 30 дней?",
      "Вы покупкой авто в Екатеринбурге интересовались, или пока отложили вопрос?",
      "Я помечу, что вы в кредит планируете, хорошо?",
      "Кредит, частичное кредитование или что выгоднее будет рассмотрите?",
      "Когда сами решите, тогда и рассмотрите покупку в течение 30 дней?"
    ]
  },
  {
    "id": "questions_c2",
    "source": "questions",
    "sourceLabel": "Корректность вопроса",
    "category": "Корректность",
    "subtitle": "100% КОРРЕКТНАЯ ФОРМУЛИРОВКА*",
    "tone": "danger",
    "items": [
      "1. Закрытый вопрос, который предполагает односложный ответ2. Имеет привязку к действию, когда это необходимо (Покупка, приезд, посещение и т.д) 3. Имеет вводные параметры, когда это необходимо (Пример 30 дней, 7 дней, 14 дней/бесплатная консультация/бюджет и т.д)4. Без слов/фраз, размывающих обязательства/условия/точность (Примерно, Где-то, В районе, Около, Плюс-минус и т.д)5. Не подменяющий вопрос утверждением (Нельзя: «Я передам, что вы рассмотрите… хорошо?» «Я отмечу, что вы посетите… хорошо?»)6. Отсутствует давление7. Нет ложных границ",
      "В случае, если все пункты выполняются, оценка 100%",
      "ПРИМЕРЫ:",
      "Подскажите, если менеджер подберет автомобиль, который вас полностью устроит по всем параметрам и по стоимости, готовы рассмотреть к приобретению автомобиль в течение 14 дней?",
      "Подскажите, готовы рассмотреть покупку в течение месяца?",
      "Подскажите, готовы рассмотреть покупку в течение 30 дней?",
      "Подскажите, готовы приехать в АЦ в течение 14 дней?",
      "Подскажите, готовы посетить нашу стоматологию в течение 14 дней?",
      "Подскажие готовы посетить бесплатную консультацию в течение 14 дней?",
      "Подскажите, актуально для вас посетить клинику для консультации?",
      "Покупу авто в бюджете от 900 тыс рассмотрите?",
      "В бюджете от 900 тыс рассматриваете?",
      "Вы в Москве находитесь?(если нужно выявить местонахождение)",
      "Если всё устроит, рассмотрите покупку в течение 30 дней?",
      "Если всё устроит, посетите нашу клинику для бесплатной косультации в течение 7 дней?",
      "Подскажите, вы являетесь риелтором?",
      "Подскажите, вы для себя смотрите или риелтор?",
      "Подскажите, есть ли первоначальный взнос 20 процентов на покупку квартиры?",
      "Вы покупкой авто в Екатеринбурге интересовались?",
      "Когда мы подберём вам авто, рассмотрите покупку в течение 30 дней?"
    ]
  },
  {
    "id": "questions_c3",
    "source": "questions",
    "sourceLabel": "Корректность вопроса",
    "category": "Корректность",
    "subtitle": "0% НЕКОРРЕКТНАЯ формулировка",
    "tone": "danger",
    "items": [
      "1. Не имеет привязки к вводному параметру",
      "В случае, если один из этих пунктов присутствует, оценка 0%",
      "ПРИМЕРЫ:",
      "В каком городе проживаете? (по скрипту нужно узнать текущее местонахождение клиента)",
      "В каком городе находитесь? (по скрипту нужно узнать текущее место проживания клиента)"
    ]
  },
  {
    "id": "questions_c4",
    "source": "questions",
    "sourceLabel": "Корректность вопроса",
    "category": "Корректность",
    "subtitle": "50% РАСПЛЫВЧАТАЯ формулировка",
    "tone": "danger",
    "items": [
      "1. Наличие слов/фраз, размывающих обязательства/условия/точность (Примерно, Где-то, В районе, Около, Плюс-минус и т.д)2. Присутствует давление(Назовите бюджет, иначен не могу пропустить заявку, какой у вас бюджет?)",
      "В случае если один из пунктов присутствует, оценка 50%",
      "ПРИМЕРЫ:",
      "Кредит или частично/частичная оплата?",
      "Около какого бюджета рассматривали квартиру?",
      "Вы в каком бюджете плюс-минус смотрите?",
      "В теории, в каком бюджете рассмотрите квартиру?",
      "На будущее какой бюджет рассматривали?",
      "Ну хотя бы примерно на каком этаже квартиру смотрите?",
      "Не могу пропустить заявку, без ИНН, назвите пожалуйста"
    ]
  },
  {
    "id": "questions_c5",
    "source": "questions",
    "sourceLabel": "Корректность вопроса",
    "category": "Корректность",
    "subtitle": "100% КОРРЕКТНАЯ ФОРМУЛИРОВКА",
    "tone": "danger",
    "items": [
      "1. Полуоткрытый вопрос, который предполагает ответ с наличием конкретной информации 2. Имеет привязку к вводному параметру (Бюджет, Этаж, Марка, Район, Сроки и т.д.)3.Без слов/фраз, размывающих обязательства/условия/точность (Примерно, Где-то, В районе, Около, Плюс-минус и т.д)4. Отсутствует давление",
      "В случае, если все эти пункты выполняются, оценка 100%",
      "ПРИМЕРЫ:",
      "Подскажите, в каком городе вы находитесь?",
      "Подскажите, какой автомобиль рассматриваете?",
      "Подскажите, в каком районе рассматриваете покупку?",
      "Подскажите, в каком бюджете рассматриваете покупку?",
      "Подскажите, скольки комнатную квартиру рассматриваете?",
      "Подскажите, в каком регионе вы территориально находитесь?",
      "Подскажите, какое у вас звание?"
    ]
  },
  {
    "id": "brands_1",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "LADA",
    "tone": "danger",
    "items": [
      "1111 Ока",
      "ВАЗ 2101",
      "ВАЗ 2103",
      "ВАЗ 2104",
      "ВАЗ 2105",
      "ВАЗ 2106",
      "ВАЗ 2107",
      "ВАЗ 2108",
      "ВАЗ 2109",
      "ВАЗ 201099",
      "ВАЗ 2110",
      "ВАЗ 2111",
      "ВАЗ 2112",
      "ВАЗ 2113",
      "ВАЗ 2114",
      "ВАЗ 2123",
      "ВАЗ 2115",
      "ВАЗ 2120",
      "LARGUS(если фургон)",
      "ВАЗ 2129",
      "ВАЗ 2328",
      "ВАЗ 2329",
      "El Lada",
      "Revolution",
      "X-Cross 5",
      "Priora",
      "ВИС",
      "ВАЗ 2102",
      "Марки (Ультра Прем.)",
      "Bentley",
      "Rolls-Royce",
      "Aurus",
      "Maybach",
      "Morgan"
    ]
  },
  {
    "id": "brands_2",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "AUDI",
    "tone": "danger",
    "items": [
      "100",
      "80",
      "200",
      "50",
      "90",
      "920",
      "e-Tron",
      "e-Tron GT",
      "e-Tron S",
      "e-Tron S sprotback",
      "Front",
      "NSU RO 80",
      "Quattro",
      "Audi V8",
      "S2 Coupe",
      "S4",
      "R8",
      "RS 7 II",
      "RS Q8",
      "TT RS",
      "Премиум сегмент",
      "Acura",
      "Alfa Romeo",
      "Aston Martin",
      "Audi",
      "Bentley",
      "BMW",
      "Bugatti",
      "Cadillac",
      "Chrysler",
      "Ferrari",
      "Genesis",
      "Hongqi",
      "Infiniti",
      "Jaguar",
      "Koenigsegg",
      "Lamborghini",
      "Land Rover",
      "Lexus",
      "Lincoln",
      "Lixiang",
      "Lotus",
      "Maserati",
      "McLaren",
      "Mercedes-Benz",
      "Mini",
      "Pagani",
      "Polestar",
      "Porsche",
      "Range Rover",
      "Rolls Royce",
      "Tesla",
      "Volvo",
      "W Motors",
      "Zeekr"
    ]
  },
  {
    "id": "brands_3",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "BMW",
    "tone": "danger",
    "items": [
      "Z8",
      "Z4 M",
      "Z3 M",
      "XM",
      "X6M",
      "New Class",
      "M8",
      "M7",
      "i4",
      "326",
      "E9",
      "i8",
      "501",
      "321",
      "IX2",
      "M1",
      "i7",
      "E3",
      "z1",
      "iX3",
      "3200",
      "503",
      "600",
      "502",
      "507",
      "3/15",
      "340"
    ]
  },
  {
    "id": "brands_4",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Chevrolet",
    "tone": "danger",
    "items": [
      "Camaro",
      "Zafira",
      "Express",
      "Van",
      "Astro",
      "Apache",
      "3000",
      "Corsica",
      "Vectra",
      "Bel Air",
      "C/K",
      "Corvair",
      "Fleetmaster",
      "Citation",
      "Celebrity",
      "C10",
      "Lumina",
      "Spin",
      "Master",
      "Metro",
      "Nova",
      "Corvette",
      "Chevelle",
      "Blazer K5",
      "SSR",
      "El Camino",
      "Special DeLuxe",
      "Lumina APV",
      "Damas",
      "Starcraft",
      "Bolt EUV",
      "Beretta",
      "Alero",
      "Corsa",
      "Chevette",
      "Bolt",
      "Trans Sport",
      "Menlo",
      "Standart"
    ]
  },
  {
    "id": "brands_5",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Daewoo",
    "tone": "danger",
    "items": [
      "Leganza",
      "Matiz",
      "Nexia",
      "Arcadia",
      "Damas",
      "Korando",
      "Rezzo",
      "Espero",
      "LeMans",
      "Musso",
      "G2X",
      "Royale",
      "Chairman",
      "Matiz Creative",
      "Tico",
      "Kalos",
      "Nubria",
      "Prince"
    ]
  },
  {
    "id": "brands_6",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "FORD",
    "tone": "danger",
    "items": [
      "Transit",
      "Mustang",
      "Laser",
      "Granada",
      "Bronco",
      "Tourneo Connect",
      "Sierra",
      "Scorpio",
      "Escort",
      "Probe",
      "Ranchero",
      "Torino",
      "Country",
      "GT 40",
      "Bronco 2",
      "Flex",
      "Telstar",
      "Galaxy",
      "Fusion (North America) (гибрид)",
      "LTD",
      "Country Squire",
      "ThunderBird",
      "Cortina",
      "Cougar",
      "Transit Connect",
      "Mainline",
      "Freestar",
      "Fairlane",
      "Tempo",
      "F-2",
      "Custom",
      "Bronco 2",
      "Model A",
      "S-MAX",
      "Mustang Mach-E",
      "Econoline",
      "Aerostar",
      "Galaxie",
      "GPA",
      "Transit Custom",
      "Edge (если гибрид)",
      "Anglia",
      "Fairmount",
      "Model T",
      "Econovan",
      "Freda",
      "Tourneo Custom",
      "M151",
      "Galaxy",
      "GT",
      "Falcon",
      "Zephyr",
      "SPECTRON",
      "Orion",
      "Capri",
      "Taunus",
      "Aspire"
    ]
  },
  {
    "id": "brands_7",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Honda",
    "tone": "danger",
    "items": [
      "e:NS1",
      "Elysion",
      "Partner",
      "e:NP1",
      "Stepwgn",
      "Prelude",
      "Logo",
      "CR-X",
      "Street",
      "Jade",
      "Domani",
      "N360",
      "S2000",
      "Ballade",
      "Today",
      "Ascot",
      "e",
      "Saber",
      "S500",
      "Horizon",
      "145",
      "Orthia",
      "S600",
      "Vamos",
      "Acty",
      "Rafaga",
      "Beat",
      "N-VAN",
      "Capa",
      "Vigor",
      "Integra SJ",
      "Z",
      "Concerto"
    ]
  },
  {
    "id": "brands_8",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Hyundai",
    "tone": "danger",
    "items": [
      "Grand Starex",
      "Starex",
      "Galoper",
      "Staria",
      "H-1",
      "Grace",
      "Custo",
      "IONIQ",
      "Kona",
      "Custin",
      "Scoupe",
      "H200",
      "Entourage",
      "Santamo",
      "Pony",
      "Excel",
      "Marcia",
      "IONIQ 5"
    ]
  },
  {
    "id": "brands_9",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "KIA",
    "tone": "danger",
    "items": [
      "Carnival",
      "Shuma",
      "Clarus",
      "Sedona",
      "Visto",
      "Concord",
      "EV6",
      "Towner",
      "EV9",
      "Capital",
      "Niro",
      "Avella",
      "Retona",
      "Mentor",
      "EV5",
      "Pregio",
      "Enterprise",
      "Potentia",
      "elan",
      "Soul EV"
    ]
  },
  {
    "id": "brands_10",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Mazda",
    "tone": "danger",
    "items": [
      "323",
      "MX-3",
      "Capella",
      "Bongo",
      "Revue",
      "Carol",
      "E-Series",
      "Etude",
      "Persona",
      "Proceed Marvie",
      "Proceed Levante",
      "616",
      "Eunos 500",
      "Scrum",
      "Xedos 9",
      "Efini MS-6",
      "Mazda MX5",
      "Autozam AZ-3",
      "121",
      "RX-5",
      "Autozam AZ-1",
      "Efini MS-8",
      "R360",
      "Eunos 100",
      "Chantez",
      "1000"
    ]
  },
  {
    "id": "brands_11",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Mercedes",
    "tone": "danger",
    "items": [
      "G-класс после 2015",
      "Viano",
      "W123",
      "S-Class AMG",
      "Maybach S-class",
      "AMG GT",
      "Maybach GT",
      "Vito",
      "SLK",
      "W120",
      "GLS AMG",
      "Vaneo",
      "W111",
      "EQC",
      "EQE AMG",
      "R-class",
      "Citan",
      "EQS",
      "SLC AMG",
      "V-Class",
      "EQB",
      "SLR",
      "Marco Polo"
    ]
  },
  {
    "id": "brands_12",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Nissan",
    "tone": "danger",
    "items": [
      "Serena",
      "NV200",
      "AD",
      "Vanette",
      "Leaf",
      "100NX",
      "180SX",
      "200SX",
      "240SX",
      "280ZX",
      "300ZX",
      "350Z",
      "370Z",
      "Ariya",
      "Auster",
      "Bassara",
      "BE-1",
      "Caravan",
      "Cherry",
      "Clipper Rio",
      "Crew",
      "Elgrand",
      "Exa",
      "Fairlady Z",
      "Figaro",
      "Homy",
      "GT-R",
      "Hypermini",
      "Lafesta I",
      "Langley",
      "Largo",
      "Liberta Villa",
      "Livina",
      "Quest",
      "NV100 Clipper",
      "NV350 Caravan",
      "Lucino",
      "Urvan",
      "Primastar",
      "NV300",
      "Stanza",
      "Z",
      "NX Coupe",
      "Pao"
    ]
  },
  {
    "id": "brands_13",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Opel",
    "tone": "danger",
    "items": [
      "Kadett",
      "Omega",
      "Sintra",
      "Vivaro",
      "Calibra",
      "Tigra",
      "Zafira Life",
      "Cascada",
      "GT",
      "Speedster",
      "Manta"
    ]
  },
  {
    "id": "brands_14",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Peugeot",
    "tone": "danger",
    "items": [
      "Bipper",
      "Expert",
      "806",
      "iOn",
      "RCZ",
      "308(если гибрид)",
      "402",
      "Partner (если фургон)",
      "508(если гибрид)",
      "Traveller",
      "5008(если гибрид или минивэн)",
      "2008(если гибрид или электро)",
      "208(если гибрид или элекро)",
      "605",
      "Rifter",
      "807",
      "504",
      "205",
      "104",
      "604",
      "204",
      "403",
      "205 GTi",
      "309",
      "202",
      "304",
      "505",
      "404",
      "203",
      "201",
      "305"
    ]
  },
  {
    "id": "brands_15",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Renault",
    "tone": "danger",
    "items": [
      "Megan e-Tech",
      "Wind",
      "Twizy",
      "Trafic",
      "Sprot spider",
      "City K-ZE",
      "Fuego",
      "Fregate",
      "Caravelle",
      "Captur (если гибрид)",
      "6",
      "Sport Spider",
      "10",
      "4",
      "25",
      "21",
      "Espace",
      "Rodeo",
      "Austral(если гибрид)",
      "8",
      "Trafic",
      "Fuego",
      "18",
      "Vivastella",
      "14",
      "Fregate",
      "ZOE",
      "16",
      "5",
      "4cv",
      "11",
      "30",
      "Cite K-ZE",
      "Dauphine",
      "12",
      "17",
      "Floride",
      "Megane E-Tech",
      "20",
      "Rafale"
    ]
  },
  {
    "id": "brands_16",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Skoda",
    "tone": "danger",
    "items": [
      "Felicia",
      "Enyaq Cope RS",
      "Enyaq",
      "Favorit",
      "105",
      "120",
      "Enyaq RS",
      "Forman",
      "Popular",
      "1200",
      "Favorit",
      "Enyaq Cope",
      "100",
      "Octavia RS(если гибрид)",
      "Kodiaq (если гибрид)"
    ]
  },
  {
    "id": "brands_17",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Suzuki",
    "tone": "danger",
    "items": [
      "Landy",
      "Cappuccino",
      "Swace",
      "Carry",
      "Xbee",
      "Wagon R+",
      "APV",
      "Cara",
      "Eeco",
      "Twin",
      "Samurai",
      "Fronte"
    ]
  },
  {
    "id": "brands_18",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Toyota",
    "tone": "danger",
    "items": [
      "VellFire",
      "Mark 2",
      "Cresta",
      "Land cruiser (до определ. года)",
      "Carina",
      "Chaser",
      "Estima",
      "Sprinter Carib",
      "Esquire",
      "Alphard",
      "Supra",
      "Sprinter",
      "Sienna"
    ]
  },
  {
    "id": "brands_19",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Volkswagen",
    "tone": "danger",
    "items": [
      "Multivan",
      "Caravelle",
      "Sharan",
      "Tiguan(если гибрид)",
      "Touareg (если гибрид)",
      "ID.4",
      "ID.6",
      "Transporter",
      "Caddy (фургон)",
      "Tayron(если гибрид)",
      "California",
      "Quantum",
      "EuroVan",
      "181",
      "Karmann - Ghia",
      "Viloran",
      "k70",
      "Magotan (если гибрид)",
      "Type 2",
      "Eos",
      "Type 1",
      "up!",
      "SpaceFox",
      "Arteon (если гибрид)",
      "XL1",
      "Golf Country",
      "ID.3",
      "ID,Buzz",
      "Type 166",
      "Type 82",
      "Derby",
      "Type 4",
      "Vento",
      "Type 3",
      "LLTIS",
      "Touareg R",
      "Taro",
      "Corrado",
      "ID.5",
      "Routan",
      "ID.7"
    ]
  },
  {
    "id": "brands_20",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Lifan",
    "tone": "danger",
    "items": [
      "650 EV"
    ]
  },
  {
    "id": "brands_21",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "ГАЗ",
    "tone": "danger",
    "items": [
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет"
    ]
  },
  {
    "id": "brands_22",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Citroen",
    "tone": "danger",
    "items": [
      "C4(если электро)",
      "Berlingo(если фургон)",
      "C4 Picasso",
      "C3(если электро)",
      "C5 Aircross(если гибрид)",
      "SpaceTourer",
      "Jumpy",
      "Xsara Picasso",
      "DS5(если гибрид)",
      "C4 SpaceTourer",
      "C5 X(если гибрид)",
      "C8",
      "BX",
      "Evasion",
      "Nemo",
      "DS",
      "GS",
      "Visa",
      "2 CV",
      "Ami EV",
      "SM",
      "AX",
      "CX",
      "Ami",
      "LN",
      "Dyane",
      "E-Mehari",
      "C-ZERO",
      "ZX",
      "Traction Avant"
    ]
  },
  {
    "id": "brands_23",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Dodge",
    "tone": "danger",
    "items": [
      "Caravan",
      "Colt",
      "600",
      "WC",
      "Super Bee",
      "Polara",
      "Challenger",
      "Diplomat",
      "Stealth",
      "RAM Van",
      "MayFair",
      "Custom Royal",
      "Aries",
      "D8",
      "Shadow",
      "Spirit",
      "Viper",
      "Dynasty",
      "Monaco",
      "Daytona",
      "Raider",
      "D/W",
      "Ramcharger",
      "Omni",
      "Hornet(если гибрид)",
      "Lancer",
      "Charger Daytona",
      "RAM"
    ]
  },
  {
    "id": "brands_24",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Cadillac",
    "tone": "danger",
    "items": [
      "62",
      "Cater",
      "Fleetwood",
      "LSE",
      "Lyriq",
      "Sixty",
      "314",
      "Eldorado",
      "Allante",
      "341",
      "Brougham",
      "Optiq",
      "Model 30",
      "XLR"
    ]
  },
  {
    "id": "brands_25",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Land Rover",
    "tone": "danger",
    "items": [
      "Range Rover(если гибрид)",
      "Range Rover Sport(если гибрид)",
      "Range Rover Evoque(если гибрид)",
      "Range Rover Velar(если гибрид)",
      "Defender(если гибрид)",
      "Discovery Sport(если гибрид)",
      "Series III",
      "Series I",
      "Series II"
    ]
  },
  {
    "id": "brands_26",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Lexus",
    "tone": "danger",
    "items": [
      "RX(если гибрид)",
      "NX(если гибрид)",
      "ES(если гибрид)",
      "GX(если гибрид)",
      "GS(если гибрид)",
      "LS(если гибрид)",
      "CT",
      "UX(если гибрид и электро)",
      "TX",
      "LC",
      "RZ",
      "RC(если гибрид)",
      "LM",
      "HS",
      "LFA",
      "RC F",
      "LBX"
    ]
  },
  {
    "id": "brands_27",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "УАЗ",
    "tone": "danger",
    "items": [
      "SIMBIR",
      "Astero",
      "3160",
      "469"
    ]
  },
  {
    "id": "brands_28",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Subaru",
    "tone": "danger",
    "items": [
      "Impreza(если гибрид)",
      "XV(если гибрид)",
      "Impreza WRX STi",
      "Justy(если минивэн)",
      "Stella",
      "BRZ",
      "Traviq",
      "Sambar",
      "SVX",
      "Dias Wagon",
      "Leone",
      "WRX STi",
      "Domingo",
      "Alcyone",
      "Chiffon",
      "Brat",
      "Bistro",
      "Libero",
      "Vivio",
      "1000",
      "360",
      "XT",
      "Rex",
      "Solterra",
      "Bighorn"
    ]
  },
  {
    "id": "brands_29",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "ТагАЗ",
    "tone": "danger",
    "items": [
      "Aquila"
    ]
  },
  {
    "id": "brands_30",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Mitsubishi",
    "tone": "danger",
    "items": [
      "ASX(если гибрид)",
      "Delica",
      "Celeste",
      "Grandis",
      "i-Miev",
      "Eclipse Cross(если гибрид)",
      "Jeep J",
      "Diamante",
      "GTO",
      "Bravo",
      "500",
      "FTO",
      "Debonair",
      "Lancer Ralliant",
      "Lancer EVO",
      "Savrin",
      "L300",
      "Sigma",
      "Eterna",
      "Minicab",
      "Delica D:3",
      "Space Gear",
      "Tredia",
      "Pistachio",
      "Pajero Junior",
      "Emeraude",
      "3000 GT",
      "Starion",
      "Freeca",
      "L400",
      "Legnum",
      "Eclipse (если кабриолет)",
      "Sapporo",
      "Cordia",
      "Delica D:5",
      "Aspire",
      "Dignity"
    ]
  },
  {
    "id": "brands_31",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Porsche",
    "tone": "danger",
    "items": [
      "Taycan",
      "Macan",
      "911 GT2",
      "911 S/T",
      "Carrera GT",
      "Cayman",
      "356",
      "959",
      "911 R",
      "928",
      "Boxster",
      "911 GT3",
      "968",
      "944",
      "911",
      "918 Spyder",
      "Cayman GT4",
      "914",
      "924"
    ]
  },
  {
    "id": "brands_32",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Jaguar",
    "tone": "danger",
    "items": [
      "F-Pace (если гибрид)",
      "Mark 2",
      "XK(если кабриолет)",
      "E-Pace (если гибрид)",
      "S-Type",
      "e-Type",
      "XJ220",
      "I-Pace",
      "Mark IX",
      "XJS",
      "XKR",
      "F-Type"
    ]
  },
  {
    "id": "brands_33",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Volvo",
    "tone": "danger",
    "items": [
      "XC90(если гибрид)",
      "XC60(если гибрид)",
      "S60(если гибрид)",
      "S90(если гибрид)",
      "XC40(если гибрид/электро)",
      "V60(если гибрид)",
      "850",
      "940",
      "240 Series",
      "V90(если гибрид)",
      "740",
      "960",
      "460",
      "760",
      "300 Series",
      "Laplander",
      "440",
      "EX30",
      "C40",
      "EM90",
      "260 Series",
      "140 Series",
      "480",
      "EX90",
      "66",
      "164",
      "P1800",
      "EC40",
      "PV544",
      "780",
      "P1900",
      "PV444",
      "EX40",
      "120 Series"
    ]
  },
  {
    "id": "brands_34",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Smart",
    "tone": "danger",
    "items": [
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет"
    ]
  },
  {
    "id": "brands_35",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Hummer",
    "tone": "danger",
    "items": [
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет",
      "Любых нет"
    ]
  },
  {
    "id": "brands_36",
    "source": "brands",
    "sourceLabel": "Марки вне списка",
    "category": "Марки / модели",
    "subtitle": "Iran Khodro",
    "tone": "danger",
    "items": [
      "Arisun",
      "Paykan",
      "Sahra",
      "Samand",
      "Sarir",
      "Soren",
      "Runna"
    ]
  },
  {
    "id": "mistakes_c0",
    "source": "mistakes",
    "sourceLabel": "Частые ошибки",
    "category": "Частые ошибки",
    "subtitle": "Ошибка:",
    "tone": "danger",
    "items": [
      "Часто встречаются ошибки со стороны оператора по официальным дилерским центрам или же где в начале диалога нужно проговорить слово НОВОГО или С ПРОБЕГОМ, операторы не проговаривают слово и не уточняют в дальнейшем какое состояние авто нужно клиенту",
      "часто когда говорят, что рассматривают досрочное погашение, операторы не отрабатывают возражение и не ориентируют клиента, что досрочное погашение от 6 месяцев.",
      "операторы не ищут в поисковике марку и модель которую озвучил им клиент, хотя если бы этим занимались и увидели бы что допустим Kia Carnival (это минивэн) тут же могли бы перезвонить и попробовать пересадить клиента с минивэна, электрокара, гибрида и т.д",
      "проработать с операторами такие скрипты где премиум сегмент - не актуально, очень часто пропускаются заявки где клиента интересует премиум сегмент, но это также можно отработать и сделать заявку актуальной",
      "Оператор задает вопрос по скрипту но не получает именно на него ответ (напр. готовы ПРИЕХАТЬ в n-город? если «да»-акт,если «нет» -не акт.кл отвечает «живу в соседнем городе могу ПРИЕЗЖАТЬ».в данном случае именно переезд не выявлен). Операторы не получают именно точных ответов на приезд в течение 7/14 дней.если нет точного,то «не акт»-повторно не уточняют данные моменты. Местоположение кл не равно прописка",
      "Опера часто не проговаривают слово покупка/приобретение при уточненение актуальности покупки в течение конкретного времени.",
      "Около 30% оперов забывают уточнять бюджет в скриптах , где бюджет начинается от 900 тыс. 1 млн. 10млн.",
      "Частая ошибка оперов, вопрос по прописке задают так: Прописаны в России, либо же вы же не прописаны в ЛНР, ДНР и т.д.",
      "Некоторые опера предлагают рассмотреть совместную покупку с родственником, когда у клиентов проблемы с пропиской, гражданмство либо КИ.",
      "Часто встречаются ошибки где клиент утверждает, что он пенсионер, старый и т.д, где понятно, что клиент \"в возрасте\" в таком случае мы всегда уточняем возраст клиента, чтобы в дальнейшем не было недоразумений",
      "также есть ошибки где изначально на вопрос клиент отвечает положительно (допустим часто встречающийся момент: актуальна покупка в течение 30 дней? клиент отвечает да, а затем в разговоре когда речь идет уже о переводе на менеджера говорит перезвоните через месяц. В таком случае ответ на вопрос актуальности покупки в течение 30 дней теряет свой смысл и оператору нужно повторно переуточнить",
      "если клиент в ходе диалога говорит, что рассматривает покупку после продажи своего авто или подмечает тот факт, что нужно сначала разобраться со своей машиной и выставить ее на продажу, то в таком случае оператор должен клиенту предложить trade-in и получить ПОЛОЖИТЕЛЬНЫЙ ОТВЕТ",
      "Операторы часто стали некорректно формулировать вопрос кредитования: \"Рассматриваете покупку в кредит или частичное кредитование?, - Не знаю пока не определился -Ну то есть от условий зависит парвильно понимаю? -Да\"(по факту актуальность кредитования не выявлена, опер просто узнал что все зависит от условий, а то что клиент намеренно или заранее соглашается с условиями АЦ информации мы не получаем)"
    ]
  },
  {
    "id": "mistakes_c1",
    "source": "mistakes",
    "sourceLabel": "Частые ошибки",
    "category": "Частые ошибки",
    "subtitle": "Критерий:",
    "tone": "warning",
    "items": [
      "В таком случае оператор получит штраф в 0%--- Это является важным вопросом скрипта",
      "Такая заявка пойдет в статус \"не актуально\", так как клиент может закрыть кредит и за 5 дней---- такой варинт не допустим",
      "Всем известно, что такие заявки уходят в статус \"не актуально\"--- лид мы теряем, в свою очередь оператор даже не постарался переориентировать оператора на другой допустимый вариант.",
      "Такая заявка так же пойдет в статус \"не актуально\"",
      "НЕ АКТУАЛЬНО, лид так же теряем только по причине того, что оператор не уточнил актуальность приезда в течение n-днейТак же отсутвие точного ответа на вопрос приезда в актуальный город--- статус \"не актуально\"",
      "Такая заявка уйдет в статус успешно, но 0%",
      "Заявка уйдет в 0%, но в случае, если в диалоге есть намек на покупку авто за несоответствующую сумму, не называя ее, заявка уйдет в \"не актуально\"",
      "заявка уйдет в 0%, в случае если так же по диалогу понятно, что клиент прописан в не актуальном для нас регионе--- заявка уйдет в статус \"не актуально\"",
      "Заявка не актуальна.",
      "Тут все зависит от клиента, если по голосу слышно, что там все совсем плохо, может быть \"не актуально\", но как пропуск вопроса это 50%",
      "Это уже расценивается, как пропуск вопроса в 0% процентов",
      "Если оператор ничего не уточнил, заявка уходит в статус \"не актуально\"",
      "заявка в 0% как пропуск вопроса."
    ]
  },
  {
    "id": "mistakes_c2",
    "source": "mistakes",
    "sourceLabel": "Частые ошибки",
    "category": "Частые ошибки",
    "subtitle": "Решение:",
    "tone": "warning",
    "items": [
      "Решение достаточно простое, нужно просто читать скрипт, в скрипте прописаны все самые важные моменты, уход от скрипта гарантирует ошибку из-за невнимательности",
      "В критерии прописан этот момент, если клиента интересует досрочное погашение, оператор может уточнить, что оно доступно только ерез 6 месяцев с момента его оформления, если же клиенту нужно раньше закрыть, в таком случае можно постараться отработать это возрвжение.",
      "Поиск марки, которая интересует клиента- занимает 2 минуты, это можно делать прямо во время диалога с клиентом, и в этот же момент отработать возражение и попытаться предложить клиенту альтернативный, но допустимый вариант, исходя из критериев.",
      "В этой же таблице, есть лист \"Марки модели, которых нет\" там есть список авто премиум сегмент, достаточно просто иметь его перед глазами, чтобы не допускать такой ошибки, либо же после диалога с клиентом перепроверить, и перезвонить с целью уточнить, что таких марок у нас нет, может быть клиент готов рассмотреть вариант, не относящийся к премиум\"",
      "В любом проекте, где есть возможность уточнения актуальности приезда в актуальный город в течение 7/14 дней, ножно это использовать, в ином случае заявка перестанет быть актуальной.",
      "Очень важно проговаривать ключевые слова \"покупка\" или \"приобритение\", т.к. только с использованием этих терминов мы получаем конкретный ответ от клиента. Термин \"рассмотрение в течение 30 дней\" или \"останется актуальной в течение 30 дней\"- не являются верными, мы не получаем понимания того, что клиент готов именно купить авто!!!",
      "Бюджет- один из важнейших критериев по проектам, достаточно так же просто обращать внимание на этот момент, и проговаривать клиенту о том, что бюджет на покупку авто ограничен.",
      "Большенство не актуальных для нас регионов итак находятся на территории РФ, вопрос по типу: \"Вы прописаны в России?\" не выявляет актуальное место прописки клиента---- вопроса о прописке клиента не было",
      "Если у клиента плохая КИ, прописка в неблагоприятном регионе, нет гражданства РФ, вопрос совместной покупке тут не уместен, в данном случае можно поступить так: Уточнить у клиента, каким образом он собирается совершать покупку, если ему не одобрят кредит по одной из причин выше, тогда клиент можнт сказать, что планирует оформлять кредит на кого-либо.",
      "Это работает в оба направления, если слышно, что клиент по голосу ребенок, так же важно уточнить его возраст, если слышно что пенсионер, или он сам об этом сказал, надо уточнить возраст в том числе, в противном случае заявка будет не актуальной, поэтому лучше всего на этапе диалога сразу уточнить возраст",
      "Если клиент изначально дал положительный ответ на вопрос оператора, но после во время диалога мог передумать, или не правильно понял вопрос, обязательно переуточняем, потому что в таком случае вопрос теряет свою силу и ответ на него тоже, нет ничего плохого в том чтобы задать вопрос снова.",
      "Почему это важно? Потому что, мы не можем знать, как скоро клиент продаст свое авто, это может затянуться и на 2 и на 6 месяцев, а так как клиент планирует покупку только после своего авто, актуальность покупки в течение 30 дней теряется. Поэтому в данном случае предлагаем Трейд-ин.",
      "Важно, после получения от клиента ответ по типу: \"все зависит от условий\", переуточнить \"тоесть кредит вы готовы рассмотреть, верно?\" тогда к оператору не будет вопросов."
    ]
  }
];

const BODY_TYPES = [
  'Седан', 'Хетчбэк', 'Внедорожник / SUV', 'Кроссовер',
  'Купе', 'Компактвэн', 'Пикап', 'Электромобили'
];


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
          placeholder="Скрипт, отработка, авто или кузов (лада, седан, кроссовер)…"
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
                <button type="button" class="home-row home-car-row"
                  data-action="open-car"
                  data-brand="${escapeAttr(c.brand)}"
                  data-model="${escapeAttr(c.model)}"
                  data-body="${escapeAttr(c.bodyType || '')}"
                  title="Теги: ${(c.tags || []).slice(0, 6).join(', ')}">
                  <span class="home-row-title">${escapeHtml(c.brand)} ${escapeHtml(c.model)}</span>
                  <span class="home-row-meta home-car-tags">
                    ${c.bodyType ? `<span class="badge badge-primary">${escapeHtml(c.bodyType)}</span>` : ''}
                    ${c.price ? `<span class="badge">${escapeHtml(c.price)}</span>` : ''}
                    ${(c.tags || []).slice(0, 2).map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}
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
            <div class="ot-card-body card-interactive" data-action="view-otabotka" data-id="${escapeAttr(item.id)}" title="Открыть полностью">
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
  const bodyFilter = state.catalogBody || '';
  const countryFilter = state.catalogCountry || '';
  const canChange = canEdit();

  let list = searchCars(q);
  if (brandFilter) {
    list = list.filter(c => c.brand === brandFilter);
  }
  if (bodyFilter) {
    list = list.filter(c => (c.bodyType || '') === bodyFilter);
  }
  if (countryFilter) {
    const want = normalizeCountryCode(countryFilter);
    list = list.filter(c => normalizeCountryCode(c.country) === want);
  }
  list = [...list].sort((a, b) => {
    const ba = a.brand.localeCompare(b.brand, 'ru');
    return ba !== 0 ? ba : a.model.localeCompare(b.model, 'ru');
  });

  const brands = [...new Set((state.cars || []).map(c => c.brand))].sort((a, b) => a.localeCompare(b, 'ru'));

  const countryCounts = {};
  (state.cars || []).forEach(c => {
    const code = normalizeCountryCode(c.country);
    countryCounts[code] = (countryCounts[code] || 0) + 1;
  });
  const countries = Object.keys(countryCounts).sort((a, b) => {
    return countryMeta(a).name.localeCompare(countryMeta(b).name, 'ru');
  });

  return `
  <div class="catalog-layout">
    <aside class="catalog-country-panel" aria-label="Страны">
      <div class="catalog-country-title">🌍 Страны</div>
      ${canChange ? `<button type="button" class="btn btn-outline btn-sm" style="width:100%;margin-bottom:6px" data-action="add-catalog-country">+ Страна</button>` : ''}
      <button type="button" class="country-tile ${!countryFilter ? 'active' : ''}" data-action="set-catalog-country" data-country="">
        <span class="country-tile-flag">🌐</span>
        <span class="country-tile-name">Все</span>
        <span class="country-tile-count">${(state.cars || []).length}</span>
      </button>
      ${countries.map(code => {
        const meta = countryMeta(code);
        const active = normalizeCountryCode(countryFilter) === code;
        return `<button type="button" class="country-tile ${active ? 'active' : ''}" data-action="set-catalog-country" data-country="${escapeAttr(code)}">
          <span class="country-tile-flag">${meta.flag}</span>
          <span class="country-tile-name">${escapeHtml(meta.name)}</span>
          <span class="country-tile-count">${countryCounts[code]}</span>
        </button>`;
      }).join('')}
    </aside>
    <div class="catalog-main">
    <div class="catalog-toolbar card">
      <div class="catalog-toolbar-row">
        <div>
          <strong>Автокаталог${countryFilter ? ' · ' + escapeHtml(countryMeta(countryFilter).flag + ' ' + countryMeta(countryFilter).name) : ''}</strong>
          <p class="catalog-hint">Поиск по марке, модели, кузову, стране и <b>тегам</b>.</p>
        </div>
        ${canChange ? `<button class="btn btn-primary btn-sm" data-action="add-car">+ Автомобиль</button>` : ''}
      </div>
      <div class="catalog-filters">
        <input type="search" class="search-input" id="catalogSearch"
          placeholder="Поиск: тайота, седан, россия, vesta…"
          value="${escapeAttr(state.catalogQuery || '')}" style="flex:1;min-width:180px">
        <select class="search-input" id="catalogBrand" style="flex:0 0 160px;cursor:pointer">
          <option value="">Все марки</option>
          ${brands.map(b => `<option value="${escapeAttr(b)}" ${b === brandFilter ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
        </select>
        <select class="search-input" id="catalogBody" style="flex:0 0 180px;cursor:pointer">
          <option value="">Все кузова</option>
          ${BODY_TYPES.map(b => `<option value="${escapeAttr(b)}" ${b === bodyFilter ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
        </select>
      </div>
      <p class="catalog-count">Найдено: <b>${list.length}</b> из ${(state.cars || []).length}</p>
    </div>

    ${list.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🚗</div><p>Ничего не найдено. Измените запрос или выберите другую страну.</p></div>`
      : `<div class="car-grid">${list.map(c => `
          <article class="car-card">
            <div class="car-card-body card-interactive" data-action="view-car" data-id="${escapeAttr(c.id)}" title="Открыть карточку">
              <div class="car-card-top">
                <h3 class="car-card-title">${escapeHtml(c.brand)} <span class="car-model">${escapeHtml(c.model)}</span></h3>
                <div class="car-card-badges">
                  ${c.bodyType ? `<span class="badge badge-primary">${escapeHtml(c.bodyType)}</span>` : ''}
                  ${c.country ? `<span class="badge">${escapeHtml(c.country)}</span>` : ''}
                </div>
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
    </div>
  </div>
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
     <div class="form-group"><label>Тип кузова</label>
       <select id="fCarBody" class="search-input" style="width:100%">
         <option value="">— не указан —</option>
         ${BODY_TYPES.map(b => `<option value="${escapeAttr(b)}" ${item && item.bodyType === b ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('')}
       </select>
     </div>
     <div class="form-group"><label>Цена</label><input type="text" id="fCarPrice" value="${escapeAttr(item ? item.price : '')}" placeholder="2 500 000 ₽"></div>
     <div class="form-group"><label>КПП</label><input type="text" id="fCarTrans" value="${escapeAttr(item ? item.transmission : '')}" placeholder="Автомат"></div>
     <div class="form-row-2">
       <div class="form-group"><label>Двигатель</label><input type="text" id="fCarEngine" value="${escapeAttr(item ? item.engine : '')}" placeholder="2.0 л"></div>
       <div class="form-group"><label>Мощность</label><input type="text" id="fCarPower" value="${escapeAttr(item ? item.power : '')}" placeholder="150 л.с."></div>
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Топливо</label><input type="text" id="fCarFuel" value="${escapeAttr(item ? item.fuel : '')}" placeholder="АИ-95"></div>
       <div class="form-group"><label>Страна</label>
         <select id="fCarCountry" class="search-input" style="width:100%">
           <option value="">— не указана —</option>
           ${allCountryOptions().map(o => {
             const cur = item ? normalizeCountryCode(item.country) : '';
             return `<option value="${escapeAttr(o.code)}" ${cur === o.code ? 'selected' : ''}>${o.flag} ${escapeHtml(o.name)}</option>`;
           }).join('')}
           <option value="__custom__">➕ Своя страна…</option>
         </select>
         <input type="text" id="fCarCountryCustom" class="search-input" style="width:100%;margin-top:8px;display:none" placeholder="Название страны">
       </div>
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
  setTimeout(() => {
    const sel = document.getElementById('fCarCountry');
    const custom = document.getElementById('fCarCountryCustom');
    if (!sel || !custom) return;
    const sync = () => {
      custom.style.display = sel.value === '__custom__' ? 'block' : 'none';
      if (sel.value === '__custom__') custom.focus();
    };
    sel.addEventListener('change', sync);
    sync();
  }, 50);
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
    bodyType: document.getElementById('fCarBody')?.value || '',
    price: document.getElementById('fCarPrice')?.value.trim() || '',
    transmission: document.getElementById('fCarTrans')?.value.trim() || '',
    engine: document.getElementById('fCarEngine')?.value.trim() || '',
    power: document.getElementById('fCarPower')?.value.trim() || '',
    fuel: document.getElementById('fCarFuel')?.value.trim() || '',
    country: (function() {
      let v = document.getElementById('fCarCountry')?.value || '';
      if (v === '__custom__') {
        const customName = document.getElementById('fCarCountryCustom')?.value.trim() || '';
        v = addCustomCountry(customName) || 'OTHER';
      } else if (v) {
        v = normalizeCountryCode(v);
      }
      return v;
    })(),
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

function renderCalls() {
  loadCallsMeta();
  const q = (state.callsQuery || '').toLowerCase().trim();
  const st = state.callsStatus || '';
  const canChange = canEdit();
  let list = [...(state.calls || [])];
  if (st) list = list.filter(c => c.status === st);
  if (q) {
    list = list.filter(c => {
      const hay = [c.title, c.comment, callStatusLabel(c.status)].join(' ').toLowerCase();
      return q.split(/\s+/).every(w => hay.includes(w));
    });
  }
  list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  return `
    <div class="card calls-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>📞 Звонки</strong>
          <p class="catalog-hint">Записи в формате WAV. Можно назвать, отметить статус и добавить комментарий. Аудио хранится локально в браузере.</p>
        </div>
        ${canChange ? `<label class="btn btn-primary btn-sm calls-upload-btn">
          + WAV
          <input type="file" id="callWavInput" accept="audio/wav,.wav,audio/x-wav" hidden>
        </label>` : ''}
      </div>
      <div class="catalog-filters">
        <input type="search" class="search-input" id="callsSearch" placeholder="Поиск по названию, комментарию…"
          value="${escapeAttr(state.callsQuery || '')}" style="flex:1;min-width:180px">
        <select class="search-input" id="callsStatusFilter" style="flex:0 0 200px;cursor:pointer">
          <option value="">Все статусы</option>
          ${CALL_STATUSES.map(s => `<option value="${s.id}" ${st === s.id ? 'selected' : ''}>${escapeHtml(s.label)}</option>`).join('')}
        </select>
      </div>
      <p class="catalog-count">Записей: <b>${list.length}</b></p>
    </div>

    ${list.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🎙</div><p>Записей пока нет. Добавьте файл WAV.</p></div>`
      : `<div class="calls-list">${list.map(c => `
          <article class="call-card card" data-call-id="${escapeAttr(c.id)}">
            <div class="call-card-header">
              <div>
                <h3 class="call-title">${escapeHtml(c.title || 'Без названия')}</h3>
                <div class="call-meta">
                  <span class="badge ${callStatusBadge(c.status)}">${escapeHtml(callStatusLabel(c.status))}</span>
                  <span class="badge">${formatDate(c.createdAt)}</span>
                  ${c.duration ? `<span class="badge">${formatDuration(c.duration)}</span>` : ''}
                </div>
              </div>
              ${canChange ? `<div class="call-actions">
                <button class="btn btn-outline btn-sm" data-action="edit-call" data-id="${escapeAttr(c.id)}">✏️</button>
                <button class="btn btn-danger btn-sm" data-action="delete-call" data-id="${escapeAttr(c.id)}">🗑</button>
              </div>` : ''}
            </div>
            ${c.comment ? `<p class="call-comment">${escapeHtml(c.comment)}</p>` : ''}
            <div class="call-player" data-player-for="${escapeAttr(c.id)}">
              <button type="button" class="btn btn-sm btn-primary call-play-btn" data-action="toggle-call-play" data-id="${escapeAttr(c.id)}" title="Play/Pause">▶</button>
              <input type="range" class="call-seek" min="0" max="1000" value="0" data-action="seek-call" data-id="${escapeAttr(c.id)}" aria-label="Перемотка">
              <span class="call-time"><span class="call-cur">0:00</span> / <span class="call-dur">0:00</span></span>
              <audio class="call-audio" preload="metadata" data-call-id="${escapeAttr(c.id)}"></audio>
            </div>
          </article>
        `).join('')}</div>`
    }
  `;
}

function showCallModal(id) {
  if (isCommonAccount()) { toast('Только просмотр', 'error'); return; }
  loadCallsMeta();
  const item = id ? (state.calls || []).find(c => c.id === id) : null;
  openModal(
    item ? 'Редактировать запись' : 'Новая запись',
    `<div class="form-group"><label>Название</label>
       <input type="text" id="fCallTitle" value="${escapeAttr(item ? item.title : '')}" placeholder="Например: Клиент Иванов — Toyota Camry"></div>
     <div class="form-group"><label>Статус</label>
       <select id="fCallStatus" class="search-input" style="width:100%">
         ${CALL_STATUSES.map(s => `<option value="${s.id}" ${item && item.status === s.id ? 'selected' : ''}>${escapeHtml(s.label)}</option>`).join('')}
       </select>
     </div>
     <div class="form-group"><label>Комментарий</label>
       <textarea id="fCallComment" rows="4" placeholder="Заметки по звонку…">${escapeHtml(item ? (item.comment || '') : '')}</textarea>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-call" ${item ? `data-id="${item.id}"` : ''}>Сохранить</button>`
  );
}

async function saveCallMeta(id) {
  if (isCommonAccount()) return;
  loadCallsMeta();
  const title = document.getElementById('fCallTitle')?.value.trim() || 'Без названия';
  const status = document.getElementById('fCallStatus')?.value || 'success';
  const comment = document.getElementById('fCallComment')?.value.trim() || '';
  const item = (state.calls || []).find(c => c.id === id);
  if (!item) { toast('Не найдено', 'error'); return; }
  item.title = title;
  item.status = status;
  item.comment = comment;
  item.updatedAt = Date.now();
  persistCallsMeta();
  closeModal();
  toast('Сохранено');
  render();
}

async function handleCallWavUpload(file) {
  if (isCommonAccount()) { toast('Только просмотр', 'error'); return; }
  if (!file) return;
  const name = (file.name || '').toLowerCase();
  const okType = file.type === 'audio/wav' || file.type === 'audio/x-wav' || name.endsWith('.wav');
  if (!okType) { toast('Нужен файл формата WAV (.wav)', 'error'); return; }
  if (file.size > 80 * 1024 * 1024) { toast('Файл слишком большой (макс. ~80 МБ)', 'error'); return; }

  const id = uid();
  try {
    await idbPutAudio(id, file);
  } catch (e) {
    console.error(e);
    toast('Не удалось сохранить аудио в браузере', 'error');
    return;
  }

  // duration via temporary audio
  let duration = 0;
  try {
    duration = await new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      const a = new Audio();
      a.preload = 'metadata';
      a.onloadedmetadata = () => {
        const d = a.duration;
        URL.revokeObjectURL(url);
        resolve(isFinite(d) ? d : 0);
      };
      a.onerror = () => { URL.revokeObjectURL(url); resolve(0); };
      a.src = url;
    });
  } catch (_) {}

  loadCallsMeta();
  const baseTitle = (file.name || 'Запись').replace(/\.wav$/i, '');
  state.calls.push({
    id,
    title: baseTitle,
    status: 'success',
    comment: '',
    duration,
    fileName: file.name,
    operator: state.currentUser || '',
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  persistCallsMeta();
  toast('Запись добавлена');
  render();
  // open edit modal to set title/status
  setTimeout(() => showCallModal(id), 50);
}

async function deleteCall(id) {
  if (isCommonAccount()) return;
  loadCallsMeta();
  state.calls = (state.calls || []).filter(c => c.id !== id);
  persistCallsMeta();
  try { await idbDeleteAudio(id); } catch (_) {}
  // stop player if playing
  if (window._callAudio && window._callAudioId === id) {
    try { window._callAudio.pause(); } catch (_) {}
    window._callAudio = null;
    window._callAudioId = null;
  }
  toast('Удалено');
  render();
}

async function ensureCallAudioLoaded(id, audioEl) {
  // Важно: всегда возвращать true/false (не undefined) — иначе play после паузы ломается
  if (audioEl.dataset.loaded === '1' && audioEl.getAttribute('src')) return true;
  const blob = await idbGetAudio(id);
  if (!blob) { toast('Аудиофайл не найден', 'error'); return false; }
  // отозвать старый blob URL если был
  try {
    if (audioEl.dataset.blobUrl) URL.revokeObjectURL(audioEl.dataset.blobUrl);
  } catch (_) {}
  const url = URL.createObjectURL(blob);
  audioEl.dataset.blobUrl = url;
  audioEl.src = url;
  audioEl.dataset.loaded = '1';
  // дождаться готовности метаданных
  await new Promise((resolve) => {
    if (audioEl.readyState >= 1) { resolve(); return; }
    const onMeta = () => { audioEl.removeEventListener('loadedmetadata', onMeta); resolve(); };
    const onErr = () => { audioEl.removeEventListener('error', onErr); resolve(); };
    audioEl.addEventListener('loadedmetadata', onMeta);
    audioEl.addEventListener('error', onErr);
    setTimeout(resolve, 2000);
  });
  return true;
}

function bindCallPlayerUI(id, audio, btn, seek, curEl, durEl) {
  if (audio._bound) return;
  audio._bound = true;
  audio.addEventListener('play', () => { if (btn) btn.textContent = '⏸'; });
  audio.addEventListener('pause', () => { if (btn) btn.textContent = '▶'; });
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration || !isFinite(audio.duration)) return;
    if (seek && document.activeElement !== seek) {
      seek.value = String(Math.round((audio.currentTime / audio.duration) * 1000));
    }
    if (curEl) curEl.textContent = formatDuration(audio.currentTime);
  });
  audio.addEventListener('loadedmetadata', () => {
    if (durEl) durEl.textContent = formatDuration(audio.duration);
    loadCallsMeta();
    const item = (state.calls || []).find(c => c.id === id);
    if (item && (!item.duration || item.duration < 1) && isFinite(audio.duration)) {
      item.duration = audio.duration;
      persistCallsMeta();
    }
  });
  audio.addEventListener('ended', () => {
    if (btn) btn.textContent = '▶';
    if (seek) seek.value = '0';
    if (curEl) curEl.textContent = '0:00';
  });
  if (seek) {
    const seekTo = () => {
      if (!audio.duration || !isFinite(audio.duration)) return;
      audio.currentTime = (Number(seek.value) / 1000) * audio.duration;
    };
    seek.addEventListener('input', seekTo);
    seek.addEventListener('change', seekTo);
  }
}

async function toggleCallPlay(id) {
  if (window._callPlayBusy) return;
  window._callPlayBusy = true;
  try {
    const esc = (window.CSS && CSS.escape) ? CSS.escape(id) : String(id).replace(/"/g, '\\"');
    const card = document.querySelector('.call-player[data-player-for="' + esc + '"]');
    if (!card) return;
    const audio = card.querySelector('audio');
    const btn = card.querySelector('.call-play-btn');
    const seek = card.querySelector('.call-seek');
    const curEl = card.querySelector('.call-cur');
    const durEl = card.querySelector('.call-dur');
    if (!audio || !btn) return;

    // Уже играет этот трек → пауза
    if (!audio.paused && (window._callAudioId === id || audio.dataset.loaded === '1')) {
      try { audio.pause(); } catch (_) {}
      btn.textContent = '▶';
      return;
    }

    // Пауза всех остальных
    document.querySelectorAll('audio.call-audio').forEach(a => {
      if (a === audio) return;
      if (!a.paused) {
        try { a.pause(); } catch (_) {}
        const otherBtn = a.closest('.call-player')?.querySelector('.call-play-btn');
        if (otherBtn) otherBtn.textContent = '▶';
      }
    });

    const ok = await ensureCallAudioLoaded(id, audio);
    if (!ok) return;

    bindCallPlayerUI(id, audio, btn, seek, curEl, durEl);

    // После await снова проверить: если уже играет — пауза
    if (!audio.paused) {
      try { audio.pause(); } catch (_) {}
      btn.textContent = '▶';
      return;
    }

    window._callAudio = audio;
    window._callAudioId = id;
    btn.textContent = '⏸';
    try {
      await audio.play();
    } catch (e) {
      console.warn('play error', e);
      btn.textContent = '▶';
      toast('Не удалось воспроизвести', 'error');
      return;
    }
    if (audio.duration && isFinite(audio.duration) && durEl) {
      durEl.textContent = formatDuration(audio.duration);
    }
  } finally {
    window._callPlayBusy = false;
  }
}




const LB_SETTINGS_KEY = 'ect_lb_settings_v1';
const LB_MANUAL_KEY = 'ect_lb_manual_v1';

function loadLeaderboardData() {
  try {
    const s = localStorage.getItem(LB_SETTINGS_KEY);
    if (s) state.leaderboardSettings = { viewCanSee: false, ...JSON.parse(s) };
  } catch (_) {}
  if (!state.leaderboardSettings) state.leaderboardSettings = { viewCanSee: false };
  try {
    const m = localStorage.getItem(LB_MANUAL_KEY);
    if (m) {
      const parsed = JSON.parse(m);
      if (Array.isArray(parsed)) state.leaderboardManual = parsed;
    }
  } catch (_) {}
  if (!Array.isArray(state.leaderboardManual)) state.leaderboardManual = [];
}

function persistLeaderboardData() {
  try {
    localStorage.setItem(LB_SETTINGS_KEY, JSON.stringify(state.leaderboardSettings || { viewCanSee: false }));
    localStorage.setItem(LB_MANUAL_KEY, JSON.stringify(state.leaderboardManual || []));
  } catch (e) { console.warn(e); }
}

function canSeeLeaderboard() {
  if (isAdminUser()) return true;
  if (canEdit()) return true;
  // view-only
  return !!(state.leaderboardSettings && state.leaderboardSettings.viewCanSee);
}

function getLeaderboardPeriodStart(period) {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  if (period === 'today') return start.getTime();
  if (period === 'week') {
    // последние 7 дней включая сегодня
    start.setDate(start.getDate() - 6);
    return start.getTime();
  }
  if (period === 'month') {
    start.setDate(1);
    return start.getTime();
  }
  return 0; // all time
}

function buildLeaderboard(period) {
  loadCallsMeta();
  loadLeaderboardData();
  period = period || state.leaderboardPeriod || 'month';
  const from = getLeaderboardPeriodStart(period);
  const map = new Map(); // name -> stats

  function ensure(name) {
    if (!name) name = '—';
    if (!map.has(name)) {
      map.set(name, { name, successes: 0, penalties: 0, funny: 0, lastSuccessAt: 0, lastAt: 0, calls: 0, workMinutes: 0 });
    }
    return map.get(name);
  }

  (state.calls || []).forEach(c => {
    const ts = c.createdAt || 0;
    if (from && ts < from) return;
    const name = c.operator || '—';
    const row = ensure(name);
    row.calls += 1;
    row.lastAt = Math.max(row.lastAt, ts);
    if (c.status === 'success' || c.status === 'success_penalty') {
      row.successes += 1;
      row.lastSuccessAt = Math.max(row.lastSuccessAt, ts);
    }
    if (c.status === 'penalty' || c.status === 'success_penalty') row.penalties += 1;
    if (c.status === 'funny') row.funny += 1;
  });

  // manual adjustments: filter by date if set
  (state.leaderboardManual || []).forEach(m => {
    let ts = m.createdAt || 0;
    if (m.date) {
      const t = new Date(m.date + 'T12:00:00').getTime();
      if (isFinite(t)) ts = t;
    }
    if (from && ts < from) return;
    const row = ensure(m.name);
    row.successes += Number(m.successesDelta) || 0;
    row.calls += Number(m.callsDelta) || 0;
    row.workMinutes += Number(m.workMinutes) || 0;
    if (ts) row.lastSuccessAt = Math.max(row.lastSuccessAt, ts);
  });

  return [...map.values()]
    .filter(r => r.name !== '—')
    .filter(r => r.calls > 0 || r.successes > 0 || r.penalties > 0 || r.workMinutes > 0)
    .sort((a, b) => {
      if (b.successes !== a.successes) return b.successes - a.successes;
      const pa = a.calls > 0 ? a.successes / a.calls : 0;
      const pb = b.calls > 0 ? b.successes / b.calls : 0;
      if (pb !== pa) return pb - pa;
      return b.lastSuccessAt - a.lastSuccessAt;
    });
}

function renderLeaderboard() {
  if (!canSeeLeaderboard()) {
    return `<div class="empty-state"><div class="empty-icon">🔒</div><p>Лидерборд недоступен для вашего аккаунта.</p></div>`;
  }
  loadLeaderboardData();
  const period = state.leaderboardPeriod || 'month';
  const rows = buildLeaderboard(period);
  const canAdmin = isAdminUser();
  const periods = [
    { id: 'today', label: 'Сегодня' },
    { id: 'week', label: 'Неделя' },
    { id: 'month', label: 'Месяц' },
    { id: 'all', label: 'Всё время' }
  ];

  return `
    <div class="card catalog-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>🏆 Лидерборд</strong>
          <p class="catalog-hint">Топ операторов по успешным дозвонам. Данные из «Звонки»${canAdmin ? ' + ручные правки' : ''}.</p>
        </div>
        ${canAdmin ? `<button class="btn btn-primary btn-sm" data-action="add-lb-manual">+ Показатели</button>` : ''}
      </div>
      <div class="lb-period-tabs" role="tablist">
        ${periods.map(p => `
          <button type="button" class="lb-period-tab ${period === p.id ? 'active' : ''}"
            data-action="set-lb-period" data-period="${p.id}">${p.label}</button>
        `).join('')}
      </div>
    </div>
    ${rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🏆</div><p>Пока нет данных. Добавьте звонки со статусом «Успешный».</p></div>`
      : `<div class="lb-table-wrap card">
          <table class="lb-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Оператор</th>
                <th>Показатели</th>
                <th>Штрафы</th>
                <th>Последний успех</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((r, i) => {
                const calls = r.calls || 0;
                const succ = r.successes || 0;
                const pct = calls > 0 ? ((succ / calls) * 100).toFixed(2) : '0.00';
                const wm = r.workMinutes || 0;
                const workStr = wm > 0 ? ` · работа ${formatWorkTime(wm)}` : '';
                const stats = `${calls} ${pluralRu(calls, 'звонок', 'звонка', 'звонков')} — ${succ} ${pluralRu(succ, 'успех', 'успеха', 'успехов')} — успешных звонков <strong>${pct}%</strong>${workStr}`;
                return `
                <tr class="${i === 0 ? 'lb-top' : ''}">
                  <td class="lb-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1)}</td>
                  <td class="lb-name">${escapeHtml(r.name)}</td>
                  <td class="lb-stats">${stats}</td>
                  <td>${r.penalties}</td>
                  <td>${r.lastSuccessAt ? formatDate(r.lastSuccessAt) : '—'}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>`
    }
    ${canAdmin ? `
      <div class="card" style="margin-top:16px;padding:14px 16px">
        <h3 style="margin:0 0 10px;font-size:1rem">Редактирование лидерборда</h3><p class="catalog-hint" style="margin-bottom:10px">Добавляйте и правьте успехи, звонки и время. Удаление — крестиком.</p>
        ${(state.leaderboardManual || []).length === 0
          ? '<p class="catalog-hint">Пока нет ручных правок.</p>'
          : `<div class="team-list">${(state.leaderboardManual || []).slice().reverse().map(m => `
              <div class="team-row">
                <div>
                  <strong>${escapeHtml(m.name)}</strong>
                  ${m.successesDelta ? `<span class="badge badge-teal">${m.successesDelta >= 0 ? '+' : ''}${m.successesDelta} успех</span>` : ''}
                  ${m.callsDelta ? `<span class="badge">${m.callsDelta >= 0 ? '+' : ''}${m.callsDelta} звон.</span>` : ''}
                  ${m.workMinutes ? `<span class="badge">${formatWorkTime(m.workMinutes)}</span>` : ''}
                  ${m.date ? `<span class="badge">${escapeHtml(m.date)}</span>` : ''}
                  ${m.note ? `<span style="color:var(--text-muted);font-size:0.85rem">${escapeHtml(m.note)}</span>` : ''}
                </div>
                <div class="team-row-actions">
                  <button class="btn btn-outline btn-sm" data-action="edit-lb-manual" data-id="${escapeAttr(m.id)}">✏️</button>
                  <button class="btn btn-danger btn-sm" data-action="delete-lb-manual" data-id="${escapeAttr(m.id)}">🗑</button>
                </div>
              </div>
            `).join('')}</div>`
        }
      </div>
    ` : ''}
  `;
}

function showLbManualModal(editId) {
  if (!isAdminUser()) { toast('Редактирование лидерборда только у Александра', 'error'); return; }
  loadLeaderboardData();
  const item = editId ? (state.leaderboardManual || []).find(m => m.id === editId) : null;
  const names = getAllLoginNames().filter(n => n !== 'Общая');
  const hours = item ? Math.floor((item.workMinutes || 0) / 60) : 0;
  const mins = item ? ((item.workMinutes || 0) % 60) : 0;
  openModal(
    item ? 'Редактировать показатели' : 'Добавить показатели в лидерборд',
    `<p class="field-hint" style="margin-bottom:12px">Ручные записи суммируются с данными из «Звонки». Можно править в любой момент.</p>
     <div class="form-group"><label>Оператор</label>
       <select id="fLbName" class="search-input" style="width:100%">
         ${names.map(n => `<option value="${escapeAttr(n)}" ${item && item.name === n ? 'selected' : ''}>${escapeHtml(n)}</option>`).join('')}
       </select>
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Успехов (+ или −)</label>
         <input type="number" id="fLbDelta" value="${item ? item.successesDelta : 1}" step="1">
       </div>
       <div class="form-group"><label>Звонков (+ или −)</label>
         <input type="number" id="fLbCalls" value="${item ? (item.callsDelta || 0) : 0}" step="1">
       </div>
     </div>
     <div class="form-group"><label>Время на работу</label>
       <div class="form-row-2">
         <div>
           <input type="number" id="fLbHours" value="${hours}" min="0" step="1" placeholder="Часы">
           <p class="field-hint">Часы</p>
         </div>
         <div>
           <input type="number" id="fLbMinutes" value="${mins}" min="0" max="59" step="1" placeholder="Минуты">
           <p class="field-hint">Минуты</p>
         </div>
       </div>
     </div>
     <div class="form-group"><label>Дата</label>
       <input type="date" id="fLbDate" value="${escapeAttr(item?.date || new Date().toISOString().slice(0, 10))}">
     </div>
     <div class="form-group"><label>Комментарий</label>
       <input type="text" id="fLbNote" value="${escapeAttr(item?.note || '')}" placeholder="Необязательно">
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-lb-manual" ${item ? `data-id="${item.id}"` : ''}>Сохранить</button>`
  );
}

function saveLbManual(editId) {
  if (!isAdminUser()) return;
  loadLeaderboardData();
  const name = document.getElementById('fLbName')?.value;
  const delta = Number(document.getElementById('fLbDelta')?.value || 0);
  const callsDelta = Number(document.getElementById('fLbCalls')?.value || 0);
  const hours = Number(document.getElementById('fLbHours')?.value || 0);
  const minutes = Number(document.getElementById('fLbMinutes')?.value || 0);
  const workMinutes = Math.max(0, Math.round(hours * 60 + minutes));
  const date = document.getElementById('fLbDate')?.value || '';
  const note = document.getElementById('fLbNote')?.value.trim() || '';
  if (!name) { toast('Выберите оператора', 'error'); return; }
  if (!delta && !callsDelta && !workMinutes) {
    toast('Укажите успехи, звонки или время работы', 'error');
    return;
  }
  if (editId) {
    const item = (state.leaderboardManual || []).find(m => m.id === editId);
    if (!item) { toast('Запись не найдена', 'error'); return; }
    item.name = name;
    item.successesDelta = delta;
    item.callsDelta = callsDelta;
    item.workMinutes = workMinutes;
    item.date = date;
    item.note = note;
    item.updatedAt = Date.now();
  } else {
    state.leaderboardManual.push({
      id: uid(),
      name,
      successesDelta: delta,
      callsDelta,
      workMinutes,
      date,
      note,
      createdAt: Date.now()
    });
  }
  persistLeaderboardData();
  closeModal();
  toast(editId ? 'Показатели обновлены' : 'Добавлено');
  render();
}

function deleteLbManual(id) {
  if (!isAdminUser()) return;
  loadLeaderboardData();
  state.leaderboardManual = (state.leaderboardManual || []).filter(m => m.id !== id);
  persistLeaderboardData();
  toast('Удалено');
  render();
}


/* ========== Goals (Цель) — персонально ========== */
const GOALS_KEY = 'ect_goals_v1';
const WEEKDAY_LABELS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const WEEKDAY_FULL = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function loadSharedPenalties() {
  try {
    const raw = localStorage.getItem('ect_shared_penalties_v1');
    if (raw) {
      const p = JSON.parse(raw);
      if (Array.isArray(p)) state.sharedPenalties = p;
    }
  } catch (_) {}
  if (!Array.isArray(state.sharedPenalties)) state.sharedPenalties = [];
}
function persistSharedPenalties() {
  try { localStorage.setItem('ect_shared_penalties_v1', JSON.stringify(state.sharedPenalties || [])); } catch (_) {}
}
function loadGoalsStore() {
  try {
    const raw = localStorage.getItem(GOALS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') state.goalsStore = parsed;
    }
  } catch (_) {}
  if (!state.goalsStore || typeof state.goalsStore !== 'object') state.goalsStore = {};
}

function persistGoalsStore() {
  try {
    localStorage.setItem(GOALS_KEY, JSON.stringify(state.goalsStore || {}));
  } catch (e) { console.warn(e); }
}

function getUserGoal(userName) {
  loadGoalsStore();
  return (state.goalsStore || {})[userName] || null;
}

function setUserGoal(userName, goal) {
  loadGoalsStore();
  if (!state.goalsStore) state.goalsStore = {};
  state.goalsStore[userName] = goal;
  persistGoalsStore();
}

function deleteUserGoal(userName) {
  loadGoalsStore();
  if (state.goalsStore) delete state.goalsStore[userName];
  persistGoalsStore();
}

function toISODate(d) {
  const x = new Date(d);
  const y = x.getFullYear();
  const m = String(x.getMonth() + 1).padStart(2, '0');
  const day = String(x.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseISODate(s) {
  const [y, m, d] = String(s).split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1, 12, 0, 0, 0);
}

/**
 * Неделя начисления: ВТОРНИК → ПОНЕДЕЛЬНИК
 * Выплата: СРЕДА вечером (за завершённый цикл вт–пн).
 *
 * Пример: вт 26.08 … пн 01.09 → выплата ср 03.09 вечером.
 * Если сегодня ещё внутри цикла — ближайшая выплата = среда после понедельника этого цикла.
 */
function startOfAccrualWeek(date = new Date()) {
  // Найти вторник текущей недели начисления
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  const day = d.getDay(); // 0 Вс, 1 Пн, 2 Вт, ...
  // Смещение назад до вторника:
  // Вт=0, Ср=1, ..., Пн=6
  let back;
  if (day === 2) back = 0;
  else if (day > 2) back = day - 2;
  else back = day + 5; // Вс=5, Пн=6
  d.setDate(d.getDate() - back);
  return d;
}

function endOfAccrualWeek(date = new Date()) {
  const s = startOfAccrualWeek(date);
  const e = new Date(s);
  e.setDate(e.getDate() + 6); // понедельник
  return e;
}

/** Среда выплаты за цикл, в котором лежит date */
function paydayForDate(date = new Date()) {
  const endMon = endOfAccrualWeek(date);
  const pay = new Date(endMon);
  pay.setDate(pay.getDate() + 2); // пн + 2 = ср
  return pay;
}

function nextPaydayWednesday(from = new Date()) {
  const pay = paydayForDate(from);
  const a = new Date(from);
  a.setHours(12, 0, 0, 0);
  // если уже прошла среда этого цикла (после среды) — берём выплату следующего цикла
  if (a > pay) {
    const nextStart = new Date(startOfAccrualWeek(from));
    nextStart.setDate(nextStart.getDate() + 7);
    return paydayForDate(nextStart);
  }
  return pay;
}

function daysUntilPayday(from = new Date()) {
  const pay = nextPaydayWednesday(from);
  const a = new Date(from); a.setHours(12, 0, 0, 0);
  return Math.round((pay - a) / 86400000);
}

function startOfWeekMonday(date = new Date()) {
  // оставлено для совместимости; для целей недели используем startOfAccrualWeek
  return startOfAccrualWeek(date);
}

function endOfWeekSunday(date = new Date()) {
  return endOfAccrualWeek(date);
}

function startOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1, 12, 0, 0, 0);
}

function endOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 12, 0, 0, 0);
}

function formatMoney(n) {
  const v = Math.round(Number(n) || 0);
  return v.toLocaleString('ru-RU') + ' ₽';
}

function enumerateDates(start, end) {
  const out = [];
  const cur = new Date(start);
  cur.setHours(12, 0, 0, 0);
  const last = new Date(end);
  last.setHours(12, 0, 0, 0);
  while (cur <= last) {
    out.push(toISODate(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}

/** Рабочие дни цели: основные смены (дни недели) + доп. смены (конкретные даты) */
function getGoalWorkDates(goal) {
  if (!goal) return [];
  const start = parseISODate(goal.startDate);
  const end = parseISODate(goal.endDate);
  const main = new Set((goal.mainShifts || []).map(Number));
  const extra = new Set(goal.extraShifts || []);
  const dates = [];
  for (const iso of enumerateDates(start, end)) {
    const d = parseISODate(iso);
    const wd = d.getDay();
    if (main.has(wd) || extra.has(iso)) dates.push(iso);
  }
  // extra outside? already only within range if we only enumerate range
  return dates;
}

/**
 * План по дням:
 * - оставшаяся сумма = цель − уже заработано
 * - делится поровну на оставшиеся рабочие дни (включая сегодня, если ещё не закрыт или можно дописать)
 * - прошедшие дни без ввода считаются 0, недобор уходит в будущие
 */
function buildGoalPlan(goal) {
  if (!goal) return null;
  const workDates = getGoalWorkDates(goal);
  const earnings = goal.earnings || {};
  const today = toISODate(new Date());
  const target = Number(goal.targetAmount) || 0;

  let earnedTotal = 0;
  const days = workDates.map(iso => {
    const has = Object.prototype.hasOwnProperty.call(earnings, iso);
    const amount = has ? Number(earnings[iso]) || 0 : null;
    if (has) earnedTotal += amount;
    const d = parseISODate(iso);
    return {
      iso,
      weekday: d.getDay(),
      label: WEEKDAY_FULL[d.getDay()],
      shortLabel: WEEKDAY_LABELS[d.getDay()],
      isPast: iso < today,
      isToday: iso === today,
      isFuture: iso > today,
      isExtra: (goal.extraShifts || []).includes(iso),
      earned: amount,
      hasEntry: has,
      planned: 0
    };
  });

  const remainingMoney = Math.max(0, target - earnedTotal);
  // Оставшиеся дни для плана: сегодня (даже если уже есть запись — можно «донабрать»? 
  // Логика: сегодня и будущее. Если за сегодня уже внесли — день считается закрытым и не участвует в делении остатка.
  const openDays = days.filter(d => d.isFuture || (d.isToday && !d.hasEntry));
  const perDay = openDays.length > 0 ? remainingMoney / openDays.length : 0;

  days.forEach(d => {
    if (d.hasEntry) {
      // факт
      d.planned = d.earned;
      d.status = d.earned >= (target / Math.max(1, workDates.length)) * 0.99 ? 'ok' : 'low';
    } else if (d.isFuture || d.isToday) {
      d.planned = perDay;
      d.status = 'plan';
    } else {
      // прошло, нет записи
      d.planned = 0;
      d.status = 'missed';
    }
  });

  const remainingDays = openDays.length;
  const tomorrow = openDays.find(d => d.isFuture) || openDays[0];

  // Сумма за текущий цикл начисления (вт–пн), которая уйдёт в ближайшую среду
  const accrualStart = toISODate(startOfAccrualWeek());
  const accrualEnd = toISODate(endOfAccrualWeek());
  let earnedThisAccrual = 0;
  Object.keys(earnings).forEach(iso => {
    if (iso >= accrualStart && iso <= accrualEnd) {
      earnedThisAccrual += Number(earnings[iso]) || 0;
    }
  });
  const payday = nextPaydayWednesday();

  return {
    workDates,
    days,
    target,
    earnedTotal,
    remainingMoney,
    remainingDays,
    perDay,
    progress: target > 0 ? Math.min(100, (earnedTotal / target) * 100) : 0,
    todayIso: today,
    accrualStart,
    accrualEnd,
    earnedThisAccrual,
    paydayIso: toISODate(payday)
  };
}

function defaultGoalDates(period) {
  const now = new Date();
  if (period === 'month') {
    return { startDate: toISODate(startOfMonth(now)), endDate: toISODate(endOfMonth(now)) };
  }
  // Неделя цели = цикл начисления вт → пн
  return { startDate: toISODate(startOfAccrualWeek(now)), endDate: toISODate(endOfAccrualWeek(now)) };
}


/* ========== Правила (штрафы / неактуально) ========== */
function getAllRuleBlocks() {
  const base = DEFAULT_RULES.map(b => ({ ...b, items: (b.items || []).slice() }));
  const custom = (state.sharedPenalties || []).map(p => ({
    id: 'custom_' + p.id,
    source: 'custom',
    sourceLabel: 'Свои',
    category: p.pct || 'Свой штраф',
    subtitle: p.title || 'Штраф',
    tone: p.tone || 'warning',
    items: [p.text || p.title || ''],
    meta: p
  }));
  return base.concat(custom);
}

function renderRules() {
  const q = (state.rulesQuery || '').toLowerCase().trim();
  const cat = state.rulesCategory || '';
  const src = state.rulesSource || '';
  let blocks = getAllRuleBlocks();

  if (src) blocks = blocks.filter(b => b.source === src);
  if (cat) blocks = blocks.filter(b => b.category === cat);
  if (q) {
    blocks = blocks.map(b => ({
      ...b,
      items: b.items.filter(it =>
        it.toLowerCase().includes(q) ||
        (b.subtitle || '').toLowerCase().includes(q) ||
        (b.category || '').toLowerCase().includes(q) ||
        (b.sourceLabel || '').toLowerCase().includes(q)
      )
    })).filter(b => b.items.length);
  }

  const sources = [
    { id: '', label: 'Все' },
    { id: 'general', label: 'Общие' },
    { id: 'solyanka', label: 'Солянка' },
    { id: 'spk', label: 'СПК' },
    { id: 'calc', label: 'Калькулятор' },
    { id: 'handbook', label: 'Справочник' },
    { id: 'important', label: 'Важные моменты' },
    { id: 'answers', label: 'Ответы' },
    { id: 'questions', label: 'Вопросы' },
    { id: 'brands', label: 'Марки' },
    { id: 'mistakes', label: 'Ошибки' },
    { id: 'custom', label: 'Свои' }
  ];
  const categories = [...new Set(getAllRuleBlocks().filter(b => !src || b.source === src).map(b => b.category))];
  const total = getAllRuleBlocks().reduce((s, b) => s + b.items.length, 0);
  const shown = blocks.reduce((s, b) => s + b.items.length, 0);
  const toneClass = { danger: 'rules-tone-danger', warning: 'rules-tone-warning', teal: 'rules-tone-teal' };
  const canChange = typeof canEdit === "function" ? (!isCommonAccount() && canEdit()) : !isCommonAccount();

  return `
    <div class="card catalog-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>📋 Справочник правил</strong>
          <p class="catalog-hint">Общие критерии, Солянка, СПК, свои штрафы. Поиск по всем блокам.</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${canChange ? `<button class="btn btn-primary btn-sm" data-action="add-penalty">+ Свой штраф</button>` : ''}
          <a class="btn btn-outline btn-sm" href="https://docs.google.com/spreadsheets/d/1rDcSs-C3e3kDMsqOwgCItyrpArxD1WK5rRHr5G9aEwI/" target="_blank" rel="noopener">Таблица</a>
        </div>
      </div>
      <div class="catalog-filters">
        <div class="search-wrap" style="flex:1;min-width:180px">
          <span class="search-icon">🔍</span>
          <input type="search" id="rulesSearch" class="search-input" placeholder="Поиск по правилам, солянке, СПК…" value="${escapeAttr(state.rulesQuery || '')}" autocomplete="off">
        </div>
      </div>
      <div class="lb-period-tabs" style="margin-top:10px">
        ${sources.map(s => {
          const n = getAllRuleBlocks().filter(b => !s.id || b.source === s.id).reduce((a,b)=>a+b.items.length,0);
          return `<button type="button" class="lb-period-tab ${src === s.id ? 'active' : ''}" data-action="set-rules-source" data-src="${escapeAttr(s.id)}">${s.label} · ${n}</button>`;
        }).join('')}
      </div>
      <div class="lb-period-tabs" style="margin-top:8px">
        <button type="button" class="lb-period-tab ${!cat ? 'active' : ''}" data-action="set-rules-category" data-cat="">Все категории</button>
        ${categories.map(c => {
          const n = getAllRuleBlocks().filter(b => (!src || b.source === src) && b.category === c).reduce((a,b)=>a+b.items.length,0);
          return `<button type="button" class="lb-period-tab ${cat === c ? 'active' : ''}" data-action="set-rules-category" data-cat="${escapeAttr(c)}">${escapeHtml(c)} · ${n}</button>`;
        }).join('')}
      </div>
    </div>

    <p class="catalog-hint" style="margin-bottom:12px">Показано: <b>${shown}</b> из ${total}</p>

    <div class="rules-layout">
      ${blocks.map(b => `
        <section class="card rules-block ${toneClass[b.tone] || ''}">
          <header class="rules-block-head">
            <div>
              <span class="badge badge-primary">${escapeHtml(b.sourceLabel || b.source || '')}</span>
              <span class="badge ${b.tone === 'danger' ? 'badge-danger' : b.tone === 'warning' ? 'badge-warning' : 'badge-teal'}">${escapeHtml(b.category)}</span>
              <h3 class="rules-block-title">${escapeHtml(b.subtitle)}</h3>
            </div>
            <span class="rules-block-count">${b.items.length}</span>
          </header>
          <ul class="rules-list">
            ${b.items.map((it, i) => `
              <li class="rules-item">
                <span class="rules-item-num">${i + 1}</span>
                <span class="rules-item-text">${escapeHtml(it)}</span>
              </li>
            `).join('')}
          </ul>
          ${b.source === 'custom' && b.meta && canChange ? `
            <div class="call-actions" style="margin-top:10px">
              <button class="btn btn-outline btn-sm" data-action="edit-penalty" data-id="${escapeAttr(b.meta.id)}">✏️</button>
              <button class="btn btn-outline btn-sm" data-action="attach-penalty-prompt" data-id="${escapeAttr(b.meta.id)}">➕ В скрипт</button>
              <button class="btn btn-danger btn-sm" data-action="delete-penalty" data-id="${escapeAttr(b.meta.id)}">🗑</button>
            </div>
            <p class="field-hint">Группы: ${(b.meta.categories||[]).map(c=>escapeHtml(c)).join(', ') || '—'} · скриптов: ${scriptsUsingPenalty(b.meta.id).length}</p>
          ` : ''}
        </section>
      `).join('') || `<div class="empty-state"><div class="empty-icon">📋</div><p>Ничего не найдено</p></div>`}
    </div>
  `;
}

function scriptsUsingPenalty(pid) {
  return (state.scripts || []).filter(s => (s.penaltyIds || []).includes(pid));
}

function showPenaltyModal(id) {
  if (isCommonAccount()) { toast('Только просмотр', 'error'); return; }
  if (!Array.isArray(state.sharedPenalties)) state.sharedPenalties = [];
  const item = id ? state.sharedPenalties.find(x => x.id === id) : null;
  const cats = allCategoriesFromScripts();
  const selected = new Set(item ? (item.categories || []) : []);
  const catsHtml = cats.length
    ? `<div class="cat-check-list">${cats.map(c => `
        <label class="cat-check-item">
          <input type="checkbox" class="penalty-cat-cb" value="${escapeAttr(c)}" ${selected.has(c) ? 'checked' : ''}>
          <span class="cat-check-text">${escapeHtml(c)}</span>
        </label>`).join('')}</div>`
    : '<p class="field-hint">Категории появятся после назначения у скриптов.</p>';
  openModal(
    item ? 'Редактировать штраф' : 'Новый штраф / правило',
    `<div class="form-group"><label>Заголовок</label>
       <input type="text" id="fPenTitle" value="${escapeAttr(item ? item.title : '')}" placeholder="Например: Не представился"></div>
     <div class="form-row-2">
       <div class="form-group"><label>Тип / %</label>
         <select id="fPenPct" class="search-input" style="width:100%">
           ${['Не актуально','0%','50%','75%','100%','Свой штраф'].map(p =>
             `<option value="${p}" ${item && item.pct === p ? 'selected' : ''}>${p}</option>`
           ).join('')}
         </select>
       </div>
       <div class="form-group"><label>Тон</label>
         <select id="fPenTone" class="search-input" style="width:100%">
           <option value="danger" ${!item || item.tone==='danger'?'selected':''}>Критичный</option>
           <option value="warning" ${item&&item.tone==='warning'?'selected':''}>Средний</option>
           <option value="teal" ${item&&item.tone==='teal'?'selected':''}>Мягкий / успех</option>
         </select>
       </div>
     </div>
     <div class="form-group"><label>Текст правила</label>
       <textarea id="fPenText" rows="5">${escapeHtml(item ? (item.text || '') : '')}</textarea>
     </div>
     <div class="form-group"><label>Группы скриптов (категории)</label>
       ${catsHtml}
       <input type="text" id="fPenCatsExtra" class="cat-extra-input" placeholder="Новые через запятую" value="">
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-penalty" ${item ? `data-id="${item.id}"` : ''}>Сохранить</button>`
  );
}

async function savePenalty(id) {
  if (isCommonAccount()) return;
  const title = document.getElementById('fPenTitle')?.value.trim();
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  const text = document.getElementById('fPenText')?.value || '';
  const pct = document.getElementById('fPenPct')?.value || 'Свой штраф';
  const tone = document.getElementById('fPenTone')?.value || 'warning';
  const cats = [];
  document.querySelectorAll('.penalty-cat-cb:checked').forEach(cb => cats.push(cb.value));
  const extra = (document.getElementById('fPenCatsExtra')?.value || '').split(/[,;]+/).map(s => s.trim()).filter(Boolean);
  for (const c of extra) if (!cats.includes(c)) cats.push(c);
  if (!Array.isArray(state.sharedPenalties)) state.sharedPenalties = [];
  if (id) {
    const item = state.sharedPenalties.find(x => x.id === id);
    if (!item) { toast('Не найдено', 'error'); return; }
    Object.assign(item, { title, text, pct, tone, categories: cats, updatedAt: Date.now() });
  } else {
    state.sharedPenalties.push({ id: uid(), title, text, pct, tone, categories: cats, updatedAt: Date.now() });
  }
  // auto-attach to scripts in selected categories
  for (const s of state.scripts || []) {
    if (!s.penaltyIds) s.penaltyIds = [];
    const pen = id ? state.sharedPenalties.find(x => x.id === id) : state.sharedPenalties[state.sharedPenalties.length - 1];
    if (!pen) continue;
    if (cats.length && cats.includes(s.category || '')) {
      if (!s.penaltyIds.includes(pen.id)) s.penaltyIds.push(pen.id);
    }
  }
  try { if (typeof saveData === 'function') await saveData(); } catch (_) {}
  closeModal();
  persistSharedPenalties();
  toast('Штраф сохранён');
  render();
}

async function deletePenalty(id) {
  if (isCommonAccount()) return;
  if (!confirm('Удалить штраф и отвязать от скриптов?')) return;
  state.sharedPenalties = (state.sharedPenalties || []).filter(x => x.id !== id);
  for (const s of state.scripts || []) {
    if (s.penaltyIds) s.penaltyIds = s.penaltyIds.filter(x => x !== id);
  }
  try { if (typeof saveData === 'function') await saveData(); } catch (_) {}
  persistSharedPenalties();
  toast('Удалено');
  render();
}

function showAttachPenaltyModal(penId) {
  if (isCommonAccount()) return;
  const pen = (state.sharedPenalties || []).find(x => x.id === penId);
  if (!pen) return;
  const list = (state.scripts || []).slice().sort((a,b) => (a.title||'').localeCompare(b.title||'', 'ru'));
  openModal(
    'Привязать к скрипту: ' + (pen.title || ''),
    `<div class="team-list" style="max-height:360px;overflow:auto">
      ${list.map(s => {
        const on = (s.penaltyIds || []).includes(penId);
        return `<div class="team-row">
          <div><strong>${escapeHtml(s.title || 'Без названия')}</strong>
            ${s.category ? `<span class="badge">${escapeHtml(s.category)}</span>` : ''}
          </div>
          <button class="btn btn-sm ${on ? 'btn-danger' : 'btn-primary'}" data-action="${on ? 'detach-penalty' : 'attach-penalty'}" data-sid="${escapeAttr(s.id)}" data-pid="${escapeAttr(penId)}">${on ? 'Отвязать' : 'Привязать'}</button>
        </div>`;
      }).join('') || '<p class="field-hint">Нет скриптов</p>'}
    </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Закрыть</button>`
  );
}

function attachPenalty(scriptId, penId) {
  const s = state.scripts.find(x => x.id === scriptId);
  if (!s) return;
  if (!s.penaltyIds) s.penaltyIds = [];
  if (!s.penaltyIds.includes(penId)) s.penaltyIds.push(penId);
  try { saveData(); } catch (_) {}
  toast('Привязано');
  showAttachPenaltyModal(penId);
}

function detachPenalty(scriptId, penId) {
  const s = state.scripts.find(x => x.id === scriptId);
  if (!s || !s.penaltyIds) return;
  s.penaltyIds = s.penaltyIds.filter(x => x !== penId);
  try { saveData(); } catch (_) {}
  toast('Отвязано');
  showAttachPenaltyModal(penId);
}

function renderGoals() {
  loadGoalsStore();
  const me = state.currentUser || '';
  const admin = isAdminUser();

  if (admin) {
    return renderGoalsAdmin();
  }

  const goal = getUserGoal(me);
  if (!goal) {
    return `
      <div class="card catalog-toolbar">
        <div class="catalog-toolbar-row">
          <div>
            <strong>🎯 Моя цель</strong>
            <p class="catalog-hint">Личная цель и <b>свой график смен</b>. Другие операторы не видят вашу цель и расписание.</p>
          </div>
          <button class="btn btn-primary btn-sm" data-action="edit-goal">+ Создать цель</button>
        </div>
      </div>
      <div class="empty-state"><div class="empty-icon">🎯</div><p>Цели пока нет. Создайте цель и отметьте рабочие смены.</p></div>
    `;
  }

  const plan = buildGoalPlan(goal);
  return renderGoalDetail(me, goal, plan, true);
}

function renderGoalsAdmin() {
  loadGoalsStore();
  const names = Object.keys(state.goalsStore || {}).sort((a, b) => a.localeCompare(b, 'ru'));
  const me = state.currentUser;

  let html = `
    <div class="card catalog-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>🎯 Цели команды</strong>
          <p class="catalog-hint">Администратор видит цели всех. У каждого оператора цель видна только себе.</p>
        </div>
        <button class="btn btn-primary btn-sm" data-action="edit-goal" data-user="${escapeAttr(me)}">Моя цель</button>
      </div>
    </div>
  `;

  if (!names.length) {
    html += `<div class="empty-state"><div class="empty-icon">🎯</div><p>Пока никто не создал цель.</p></div>`;
    return html;
  }

  html += `<div class="goals-admin-list">`;
  for (const name of names) {
    const goal = state.goalsStore[name];
    const plan = buildGoalPlan(goal);
    const periodLabel = goal.period === 'month' ? 'Месяц' : 'Неделя';
    html += `
      <article class="card goal-admin-card">
        <div class="goal-admin-head">
          <div>
            <h3 class="call-title">${escapeHtml(name)}</h3>
            <div class="call-meta">
              <span class="badge badge-primary">${periodLabel}</span>
              <span class="badge">${formatMoney(goal.targetAmount)}</span>
              <span class="badge badge-teal">${(plan.progress || 0).toFixed(0)}%</span>
            </div>
          </div>
          <div class="call-actions">
            <button class="btn btn-outline btn-sm" data-action="view-goal-user" data-user="${escapeAttr(name)}">Открыть</button>
            <button class="btn btn-outline btn-sm" data-action="edit-goal" data-user="${escapeAttr(name)}">✏️</button>
          </div>
        </div>
        <div class="goal-progress-bar"><div class="goal-progress-fill" style="width:${Math.min(100, plan.progress || 0)}%"></div></div>
        <p class="catalog-hint" style="margin-top:8px">Заработано ${formatMoney(plan.earnedTotal)} · осталось ${formatMoney(plan.remainingMoney)} · ${plan.remainingDays} раб. дн.</p>
      </article>
    `;
  }
  html += `</div>`;

  // If admin viewing specific user via state
  if (state.goalsViewUser && state.goalsStore[state.goalsViewUser]) {
    const u = state.goalsViewUser;
    const g = state.goalsStore[u];
    const plan = buildGoalPlan(g);
    html += `<div style="margin-top:18px">${renderGoalDetail(u, g, plan, u === me)}</div>`;
  }

  return html;
}

function renderGoalDetail(userName, goal, plan, canEditEarnings) {
  const periodLabel = goal.period === 'month' ? 'Месяц' : 'Неделя';
  const shifts = (goal.mainShifts || []).slice().sort((a, b) => a - b)
    .map(d => WEEKDAY_LABELS[d]).join(', ') || '—';
  const extras = (goal.extraShifts || []).slice().sort().map(d => {
    const dt = parseISODate(d);
    return WEEKDAY_LABELS[dt.getDay()] + ' ' + d.slice(5).replace('-', '.');
  }).join(', ') || 'нет';
  const payday = nextPaydayWednesday();
  const paydayIso = toISODate(payday);
  const untilPay = daysUntilPayday();

  return `
    <div class="card catalog-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>🎯 ${userName === state.currentUser ? 'Моя цель' : 'Цель: ' + escapeHtml(userName)}</strong>
          <p class="catalog-hint">${periodLabel}: ${escapeHtml(goal.startDate)} — ${escapeHtml(goal.endDate)} · смены: ${shifts} · доп: ${extras}</p>
          <p class="catalog-hint">📅 Начисление: <b>вторник → понедельник</b> · выплата: <b>среда вечером</b></p>
          <p class="catalog-hint">💸 Текущий цикл: <b>${(plan.accrualStart || '').slice(5).replace('-', '.')} – ${(plan.accrualEnd || '').slice(5).replace('-', '.')}</b> · к выплате в ср ${(plan.paydayIso || paydayIso).slice(5).replace('-', '.')} вечером: <b>${formatMoney(plan.earnedThisAccrual != null ? plan.earnedThisAccrual : plan.earnedTotal)}</b>${untilPay === 0 ? ' (сегодня среда)' : ' · через ' + untilPay + ' ' + pluralRu(untilPay, 'день', 'дня', 'дней')}</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${canEditEarnings || isAdminUser() ? `<button class="btn btn-outline btn-sm" data-action="edit-goal" data-user="${escapeAttr(userName)}">✏️ Изменить</button>` : ''}
          ${(canEditEarnings || isAdminUser()) ? `<button class="btn btn-danger btn-sm" data-action="delete-goal" data-user="${escapeAttr(userName)}">🗑</button>` : ''}
        </div>
      </div>
    </div>

    <div class="goal-summary-grid">
      <div class="card goal-stat">
        <div class="goal-stat-label">Цель</div>
        <div class="goal-stat-value">${formatMoney(plan.target)}</div>
      </div>
      <div class="card goal-stat">
        <div class="goal-stat-label">Заработано</div>
        <div class="goal-stat-value goal-stat-ok">${formatMoney(plan.earnedTotal)}</div>
      </div>
      <div class="card goal-stat">
        <div class="goal-stat-label">Осталось</div>
        <div class="goal-stat-value goal-stat-remain">${formatMoney(plan.remainingMoney)}</div>
      </div>
      <div class="card goal-stat">
        <div class="goal-stat-label">На каждый оставшийся день</div>
        <div class="goal-stat-value">${formatMoney(plan.perDay)}</div>
        <div class="goal-stat-sub">${plan.remainingDays} ${pluralRu(plan.remainingDays, 'день', 'дня', 'дней')}</div>
      </div>
    </div>

    <div class="card" style="padding:14px 16px;margin-bottom:14px">
      <div class="goal-progress-bar big"><div class="goal-progress-fill" style="width:${Math.min(100, plan.progress)}%"></div></div>
      <p class="catalog-hint" style="margin-top:8px">Прогресс: <b>${plan.progress.toFixed(1)}%</b></p>
    </div>

    ${canEditEarnings ? `
    <div class="card" style="padding:14px 16px;margin-bottom:14px">
      <strong>Заработок за день</strong>
      <p class="field-hint">Можно вносить и <b>исправлять</b> сумму за любой день — выберите дату и сохраните заново.</p>
      <div class="catalog-filters" style="margin-top:10px">
        <input type="date" id="goalEarnDate" class="search-input" value="${plan.todayIso}" style="flex:0 0 160px">
        <input type="number" id="goalEarnAmount" class="search-input" placeholder="Сумма, ₽" min="0" step="1" style="flex:1;min-width:120px">
        <button class="btn btn-primary btn-sm" data-action="save-goal-earn" data-user="${escapeAttr(userName)}">Сохранить</button>
        <button class="btn btn-outline btn-sm" data-action="clear-goal-earn" data-user="${escapeAttr(userName)}" title="Удалить запись за выбранную дату">🗑 Сбросить день</button>
      </div>
    </div>` : ''}

    <div class="card" style="padding:14px 16px">
      <strong>План по дням</strong>
      <div class="goal-days">
        ${plan.days.map(d => {
          const badge = d.isExtra ? '<span class="badge badge-primary">доп</span>' : '';
          const when = d.isToday ? '<span class="badge badge-teal">сегодня</span>' : '';
          let body = '';
          if (d.hasEntry) {
            body = `<span class="goal-day-earned">Факт: <b>${formatMoney(d.earned)}</b></span>`;
          } else if (d.status === 'plan') {
            body = `<span class="goal-day-plan">Нужно: <b>${formatMoney(d.planned)}</b></span>`;
          } else {
            body = `<span class="goal-day-missed">Нет записи (0 ₽)</span>`;
          }
          const editBtns = canEditEarnings ? `
            <button type="button" class="btn btn-outline btn-sm" data-action="fill-goal-earn" data-user="${escapeAttr(userName)}" data-date="${escapeAttr(d.iso)}" data-amount="${d.hasEntry ? d.earned : ''}" title="Изменить">✏️</button>
            ${d.hasEntry ? `<button type="button" class="btn btn-danger btn-sm" data-action="clear-goal-earn-day" data-user="${escapeAttr(userName)}" data-date="${escapeAttr(d.iso)}" title="Удалить">🗑</button>` : ''}
          ` : '';
          return `
            <div class="goal-day ${d.status} ${d.isToday ? 'today' : ''}">
              <div class="goal-day-left">
                <span class="goal-day-wd">${d.shortLabel}</span>
                <span class="goal-day-date">${d.iso.slice(5).replace('-', '.')}</span>
                ${badge}${when}
              </div>
              <div class="goal-day-right">
                ${body}
                ${editBtns}
              </div>
            </div>`;
        }).join('') || '<p class="catalog-hint">Нет рабочих дней — отметьте смены в настройках цели.</p>'}
      </div>
    </div>
  `;
}

function showGoalEditor(userName) {
  const who = userName || state.currentUser;
  if (!who) return;
  if (!isAdminUser() && who !== state.currentUser) {
    toast('Нельзя редактировать чужую цель', 'error');
    return;
  }
  loadGoalsStore();
  const existing = getUserGoal(who);
  const period = existing?.period || 'week';
  const dates = existing ? { startDate: existing.startDate, endDate: existing.endDate } : defaultGoalDates(period);
  const main = new Set((existing?.mainShifts || [2, 3, 4, 5, 6, 0, 1]).map(Number)); // вт–пн по умолчанию
  const extras = (existing?.extraShifts || []).join(', ');

  openModal(
    existing ? 'Цель и график' : 'Новая цель и график',
    `<p class="catalog-hint" style="margin-bottom:12px">Цель для: <b>${escapeHtml(who)}</b></p>
     <div class="form-group"><label>Период</label>
       <select id="fGoalPeriod" class="search-input" style="width:100%">
         <option value="week" ${period === 'week' ? 'selected' : ''}>Неделя (вт → пн)</option>
         <option value="month" ${period === 'month' ? 'selected' : ''}>Месяц</option>
       </select>
       <p class="field-hint">Неделя = цикл начисления вторник–понедельник. Выплата за цикл — в следующую среду вечером.</p>
     </div>
     <div class="form-group"><label>Сумма цели, ₽</label>
       <input type="number" id="fGoalAmount" value="${escapeAttr(String(existing?.targetAmount || 20000))}" min="1" step="100">
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Начало</label>
         <input type="date" id="fGoalStart" value="${escapeAttr(dates.startDate)}">
       </div>
       <div class="form-group"><label>Конец</label>
         <input type="date" id="fGoalEnd" value="${escapeAttr(dates.endDate)}">
       </div>
     </div>
     <div class="form-group"><label>Мой график — основные смены (дни недели)</label>
       <div class="goal-weekdays">
         ${[1, 2, 3, 4, 5, 6, 0].map(d => `
           <label class="goal-wd-chip">
             <input type="checkbox" class="goal-wd-cb" value="${d}" ${main.has(d) ? 'checked' : ''}>
             <span>${WEEKDAY_LABELS[d]}</span>
           </label>
         `).join('')}
       </div>
     </div>
     <div class="form-group"><label>Доп. смены (даты через запятую)</label>
       <input type="text" id="fGoalExtra" value="${escapeAttr(extras)}" placeholder="2026-08-27, 2026-08-28">
       <p class="field-hint">Или добавьте ниже одну дату</p>
       <div class="catalog-filters" style="margin-top:8px">
         <input type="date" id="fGoalExtraOne" class="search-input" style="flex:1">
         <button type="button" class="btn btn-outline btn-sm" id="fGoalExtraAdd">+ Дата</button>
       </div>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-goal" data-user="${escapeAttr(who)}">Сохранить</button>`
  );

  setTimeout(() => {
    const periodEl = document.getElementById('fGoalPeriod');
    const startEl = document.getElementById('fGoalStart');
    const endEl = document.getElementById('fGoalEnd');
    periodEl?.addEventListener('change', () => {
      const d = defaultGoalDates(periodEl.value);
      if (startEl) startEl.value = d.startDate;
      if (endEl) endEl.value = d.endDate;
    });
    document.getElementById('fGoalExtraAdd')?.addEventListener('click', () => {
      const one = document.getElementById('fGoalExtraOne')?.value;
      const extra = document.getElementById('fGoalExtra');
      if (!one || !extra) return;
      const parts = extra.value.split(/[,;\s]+/).map(s => s.trim()).filter(Boolean);
      if (!parts.includes(one)) parts.push(one);
      extra.value = parts.join(', ');
    });
  }, 50);
}

function saveGoal(userName) {
  const who = userName || state.currentUser;
  if (!who) return;
  if (!isAdminUser() && who !== state.currentUser) {
    toast('Нельзя редактировать чужую цель', 'error');
    return;
  }
  const period = document.getElementById('fGoalPeriod')?.value || 'week';
  const amount = Number(document.getElementById('fGoalAmount')?.value || 0);
  const startDate = document.getElementById('fGoalStart')?.value;
  const endDate = document.getElementById('fGoalEnd')?.value;
  const mainShifts = [];
  document.querySelectorAll('.goal-wd-cb:checked').forEach(cb => mainShifts.push(Number(cb.value)));
  const extraShifts = (document.getElementById('fGoalExtra')?.value || '')
    .split(/[,;\s]+/).map(s => s.trim()).filter(s => /^\d{4}-\d{2}-\d{2}$/.test(s));

  if (!amount || amount <= 0) { toast('Укажите сумму цели', 'error'); return; }
  if (!startDate || !endDate) { toast('Укажите даты', 'error'); return; }
  if (startDate > endDate) { toast('Начало позже конца', 'error'); return; }
  if (!mainShifts.length && !extraShifts.length) {
    toast('Выберите хотя бы одну смену', 'error');
    return;
  }

  loadGoalsStore();
  const prev = getUserGoal(who) || {};
  setUserGoal(who, {
    period,
    targetAmount: amount,
    startDate,
    endDate,
    mainShifts,
    extraShifts,
    earnings: prev.earnings || {},
    updatedAt: Date.now(),
    createdAt: prev.createdAt || Date.now()
  });
  closeModal();
  toast('Цель сохранена');
  if (isAdminUser()) state.goalsViewUser = who;
  render();
}

function saveGoalEarn(userName) {
  const who = userName || state.currentUser;
  if (!who) return;
  if (!isAdminUser() && who !== state.currentUser) {
    toast('Нельзя', 'error');
    return;
  }
  const date = document.getElementById('goalEarnDate')?.value;
  const amount = Number(document.getElementById('goalEarnAmount')?.value);
  if (!date) { toast('Укажите дату', 'error'); return; }
  if (!isFinite(amount) || amount < 0) { toast('Укажите сумму', 'error'); return; }

  loadGoalsStore();
  const goal = getUserGoal(who);
  if (!goal) { toast('Сначала создайте цель', 'error'); return; }
  if (!goal.earnings) goal.earnings = {};
  goal.earnings[date] = amount;
  goal.updatedAt = Date.now();
  setUserGoal(who, goal);
  toast('День сохранён — план пересчитан');
  render();
}

function clearGoalEarn(userName, date) {
  const who = userName || state.currentUser;
  if (!who) return;
  if (!isAdminUser() && who !== state.currentUser) {
    toast('Нельзя', 'error');
    return;
  }
  const d = date || document.getElementById('goalEarnDate')?.value;
  if (!d) { toast('Укажите дату', 'error'); return; }
  loadGoalsStore();
  const goal = getUserGoal(who);
  if (!goal || !goal.earnings) { toast('Записи нет', 'error'); return; }
  if (!Object.prototype.hasOwnProperty.call(goal.earnings, d)) {
    toast('За этот день записи нет', 'error');
    return;
  }
  delete goal.earnings[d];
  goal.updatedAt = Date.now();
  setUserGoal(who, goal);
  toast('Запись за день удалена');
  render();
}

function fillGoalEarnForm(date, amount) {
  const dateEl = document.getElementById('goalEarnDate');
  const amountEl = document.getElementById('goalEarnAmount');
  if (dateEl) dateEl.value = date || '';
  if (amountEl) {
    amountEl.value = (amount !== undefined && amount !== '' && amount !== null) ? amount : '';
    amountEl.focus();
    amountEl.select?.();
  }
  // scroll to form
  dateEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function confirmDeleteGoal(userName) {
  const who = userName || state.currentUser;
  if (!isAdminUser() && who !== state.currentUser) return;
  openModal(
    'Удалить цель?',
    `<p>Цель и все дневные записи заработка для <b>${escapeHtml(who)}</b> будут удалены.</p>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-danger" data-action="confirm-delete-goal" data-user="${escapeAttr(who)}">Удалить</button>`
  );
}

function doDeleteGoal(userName) {
  deleteUserGoal(userName);
  if (state.goalsViewUser === userName) state.goalsViewUser = '';
  closeModal();
  toast('Цель удалена');
  render();
}

function showViewCarModal(id) {
  ensureCarsModel();
  const c = (state.cars || []).find(x => x.id === id);
  if (!c) { toast('Авто не найдено', 'error'); return; }
  openModal(
    `${escapeHtml(c.brand)} ${escapeHtml(c.model)}`,
    `<div class="view-card">
      <div class="view-row"><span class="view-label">Марка</span><span class="view-value">${escapeHtml(c.brand)}</span></div>
      <div class="view-row"><span class="view-label">Модель</span><span class="view-value">${escapeHtml(c.model)}</span></div>
      ${c.bodyType ? `<div class="view-row"><span class="view-label">Кузов</span><span class="view-value">${escapeHtml(c.bodyType)}</span></div>` : ''}
      ${c.price ? `<div class="view-row"><span class="view-label">Цена</span><span class="view-value view-price">${escapeHtml(c.price)}</span></div>` : ''}
      ${c.transmission ? `<div class="view-row"><span class="view-label">КПП</span><span class="view-value">${escapeHtml(c.transmission)}</span></div>` : ''}
      ${c.engine ? `<div class="view-row"><span class="view-label">Двигатель</span><span class="view-value">${escapeHtml(c.engine)}</span></div>` : ''}
      ${c.power ? `<div class="view-row"><span class="view-label">Мощность</span><span class="view-value">${escapeHtml(c.power)}</span></div>` : ''}
      ${c.fuel ? `<div class="view-row"><span class="view-label">Топливо</span><span class="view-value">${escapeHtml(c.fuel)}</span></div>` : ''}
      ${c.country ? `<div class="view-row"><span class="view-label">Страна</span><span class="view-value">${escapeHtml(countryMeta(c.country).flag + ' ' + countryMeta(c.country).name)}</span></div>` : ''}
      ${c.description ? `<div class="view-block"><span class="view-label">Описание</span><p class="view-text">${escapeHtml(c.description)}</p></div>` : ''}
      ${(c.tags && c.tags.length) ? `<div class="view-block"><span class="view-label">Теги</span><div class="car-tags">${c.tags.map(t => `<span class="tag-chip">${escapeHtml(t)}</span>`).join('')}</div></div>` : ''}
    </div>`,
    `<button class="btn btn-primary" data-action="close-modal">Закрыть</button>`
  );
}

function showViewOtabotkaModal(id) {
  ensureOtabotkiModel();
  const item = (state.sharedOtabotki || []).find(x => x.id === id);
  if (!item) { toast('Отработка не найдена', 'error'); return; }
  const index = buildOtabotkiIndex().find(x => x.id === id);
  const scripts = (index && index.scripts) || [];
  const cats = (index && index.categories) || (item.categories || []);
  openModal(
    escapeHtml(item.title),
    `<div class="view-card">
      <div class="view-row"><span class="view-label">Заголовок</span><span class="view-value">${escapeHtml(item.title)}</span></div>
      <div class="view-block"><span class="view-label">Категории</span>
        <div class="car-tags">${cats.length ? cats.map(c => `<span class="badge badge-primary">${escapeHtml(c)}</span>`).join('') : '<span class="badge">Без категории</span>'}</div>
      </div>
      <div class="view-block"><span class="view-label">Скрипты</span>
        ${scripts.length
          ? `<div class="ot-card-scripts">${scripts.map(s =>
              `<button type="button" class="ot-script-chip" data-action="open-script" data-id="${s.id}">${escapeHtml(s.title)}${s.category ? ' · ' + escapeHtml(s.category) : ''}</button>`
            ).join('')}</div>`
          : '<p class="ot-card-hint">Не привязана к скриптам</p>'}
      </div>
      <div class="view-block"><span class="view-label">Текст</span>
        <p class="view-text view-text-full">${escapeHtml(item.text || '—')}</p>
      </div>
    </div>`,
    `<button class="btn btn-primary" data-action="close-modal">Закрыть</button>`
  );
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
      <div class="actions-row" style="margin-top:14px">
        <button class="btn btn-primary btn-sm" data-action="show-profile-editor">🎨 Цвета профиля</button>
      </div>
      <p class="field-hint" style="margin-top:8px">Каждый пользователь настраивает цвета кнопок и акцентов под себя.</p>
    </div>

    ${isAdminUser() ? `
    <div class="settings-section card">
      <h3>👥 Участники команды</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:14px;line-height:1.55">
        Только для <b>Александра</b>. Можно добавить сотрудника, задать пароль и права:
        <b>редактирование</b> или <b>только просмотр</b>.
      </p>
      <div class="team-list">
        ${Object.keys(TEAM_USERS).map(name => `
          <div class="team-row">
            <div>
              <strong>${escapeHtml(name)}</strong>
              <span class="badge ${name === 'Общая' ? '' : 'badge-teal'}">${name === 'Общая' ? 'просмотр' : 'редактирование'}</span>
              <span class="badge">системный</span>
            </div>
            <span style="color:var(--text-muted);font-size:0.85rem">нельзя удалить</span>
          </div>
        `).join('')}
        ${(function(){ loadExtraUsers(); return extraUsers; })().map(u => `
          <div class="team-row">
            <div>
              <strong>${escapeHtml(u.name)}</strong>
              <span class="badge ${u.role === 'edit' ? 'badge-teal' : ''}">${u.role === 'edit' ? 'редактирование' : 'просмотр'}</span>
            </div>
            <div class="team-row-actions">
              <button class="btn btn-outline btn-sm" data-action="edit-team-user" data-name="${escapeAttr(u.name)}">✏️</button>
              <button class="btn btn-danger btn-sm" data-action="delete-team-user" data-name="${escapeAttr(u.name)}">🗑</button>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="actions-row" style="margin-top:14px">
        <button class="btn btn-primary btn-sm" data-action="add-team-user">+ Участник</button>
      </div>
      <p class="field-hint" style="margin-top:10px">Новые участники появляются в списке входа на этом устройстве (localStorage). Для общего доступа на всех ПК позже можно вынести в Google Sheets.</p>
    </div>` : `
    <div class="settings-section card">
      <h3>👥 Участники</h3>
      <p style="color:var(--text-muted);font-size:0.9rem">Управление участниками доступно только Александру.</p>
    </div>`}


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
  
    ${isAdminUser() ? `
    <div class="settings-section card">
      <h3>🏆 Лидерборд</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:12px;line-height:1.5">
        По умолчанию пользователи с правом «только просмотр» <b>не видят</b> лидерборд.
      </p>
      <label class="team-row" style="cursor:pointer">
        <span>Разрешить просмотр лидерборда аккаунтам «только просмотр»</span>
        <input type="checkbox" id="lbViewCanSee" data-action="toggle-lb-view"
          ${(state.leaderboardSettings && state.leaderboardSettings.viewCanSee) ? 'checked' : ''}>
      </label>
    </div>` : ''}
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
      sharedPenalties: state.sharedPenalties || [],
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
      if (Array.isArray(data.sharedPenalties)) state.sharedPenalties = data.sharedPenalties;
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

function showTeamUserModal(editName) {
  if (!isAdminUser()) { toast('Только Александр', 'error'); return; }
  loadExtraUsers();
  const item = editName ? extraUsers.find(u => u.name === editName) : null;
  openModal(
    item ? 'Изменить участника' : 'Новый участник',
    `<div class="form-group"><label>Имя (как в списке входа)</label>
       <input type="text" id="fTeamName" value="${escapeAttr(item ? item.name : '')}" ${item ? 'readonly' : ''} placeholder="Например: Мария"></div>
     <div class="form-group"><label>Пароль ${item ? '(оставьте пустым, чтобы не менять)' : ''}</label>
       <input type="password" id="fTeamPass" value="" placeholder="Пароль для входа" autocomplete="new-password"></div>
     <div class="form-group"><label>Права</label>
       <select id="fTeamRole" class="search-input" style="width:100%">
         <option value="edit" ${!item || item.role === 'edit' ? 'selected' : ''}>Редактирование</option>
         <option value="view" ${item && item.role === 'view' ? 'selected' : ''}>Только просмотр</option>
       </select>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-team-user" ${item ? `data-name="${escapeAttr(item.name)}"` : ''}>Сохранить</button>`
  );
}

async function saveTeamUser(editName) {
  if (!isAdminUser()) return;
  loadExtraUsers();
  const name = (document.getElementById('fTeamName')?.value || '').trim();
  const pass = document.getElementById('fTeamPass')?.value || '';
  const role = document.getElementById('fTeamRole')?.value === 'view' ? 'view' : 'edit';
  if (!name) { toast('Укажите имя', 'error'); return; }
  if (TEAM_USERS[name] && !editName) { toast('Это системное имя, выберите другое', 'error'); return; }
  if (Object.keys(TEAM_USERS).includes(name) && editName !== name) {
    toast('Имя занято системным аккаунтом', 'error'); return;
  }

  if (editName) {
    const item = extraUsers.find(u => u.name === editName);
    if (!item) { toast('Не найден', 'error'); return; }
    if (pass) item.passwordHash = await sha256Hex(pass);
    item.role = role;
  } else {
    if (!pass) { toast('Задайте пароль', 'error'); return; }
    if (extraUsers.some(u => u.name === name)) { toast('Такой участник уже есть', 'error'); return; }
    const passwordHash = await sha256Hex(pass);
    extraUsers.push({ name, passwordHash, role, createdAt: Date.now() });
  }
  persistExtraUsers();
  closeModal();
  toast('Участник сохранён');
  render();
  // обновить select входа, если функция есть
  if (typeof window.__ECT_REFRESH_USERS === 'function') window.__ECT_REFRESH_USERS();
}

function deleteTeamUser(name) {
  if (!isAdminUser()) return;
  if (TEAM_USERS[name]) { toast('Системного пользователя нельзя удалить', 'error'); return; }
  loadExtraUsers();
  extraUsers = extraUsers.filter(u => u.name !== name);
  persistExtraUsers();
  toast('Удалён');
  render();
  if (typeof window.__ECT_REFRESH_USERS === 'function') window.__ECT_REFRESH_USERS();
}

function handleClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;

  const editActions = new Set([
    'add-script', 'edit-script', 'delete-script', 'confirm-delete-script',
    'add-car', 'edit-car', 'delete-car', 'save-car',
    'edit-call', 'delete-call', 'save-call',
    'add-item', 'edit-item', 'delete-item', 'save-new-script',
    'save-edit-script', 'save-new-item', 'add-child-item', 'save-edit-item',
    'save-cloud', 'disconnect-cloud', 'reset', 'confirm-reset',
    'import-click', 'export',
    'add-shared-otabotka', 'edit-shared-otabotka', 'save-shared-otabotka',
    'delete-shared-otabotka', 'pick-otabotka', 'attach-otabotka',
    'attach-otabotka-prompt', 'confirm-attach-otabotka',
    'add-team-user', 'edit-team-user', 'delete-team-user', 'save-team-user',
    'edit-goal', 'save-goal', 'save-goal-earn', 'delete-goal', 'confirm-delete-goal'
  ]);

  if (isCommonAccount() && editActions.has(action)) {
    toast('Аккаунт «Общая» доступен только для просмотра.', 'error');
    return;
  }

  if (isCommonAccount() && action === 'nav' && el.dataset.page === 'settings') {
    toast('Для аккаунта «Общая» настройки недоступны.', 'error');
    return;
  }

  if (['add-team-user', 'edit-team-user', 'delete-team-user', 'save-team-user',
    'edit-goal', 'save-goal', 'save-goal-earn', 'delete-goal', 'confirm-delete-goal'].includes(action) && !isAdminUser()) {
    toast('Управление участниками только у Александра.', 'error');
    return;
  }

  switch (action) {
    case 'nav': navigate(el.dataset.page); break;
    case 'open-script': closeModal(); navigate('script', el.dataset.id); break;
    case 'add-script': showAddScriptModal(); break;
    case 'edit-script': showEditScriptModal(el.dataset.id); break;
    case 'add-car': showCarModal(null); break;
    case 'edit-car': showCarModal(el.dataset.id); break;
    case 'delete-car': deleteCar(el.dataset.id); break;
    case 'save-car': saveCar(el.dataset.id || null); break;
    case 'open-car': {
      const brand = el.dataset.brand || '';
      const model = el.dataset.model || '';
      const body = el.dataset.body || '';
      state.catalogBrand = brand;
      state.catalogQuery = model || brand;
      state.catalogBody = '';
      navigate('catalog');
      break;
    }
    case 'edit-call': showCallModal(el.dataset.id); break;
    case 'delete-call': deleteCall(el.dataset.id); break;
    case 'save-call': saveCallMeta(el.dataset.id); break;
    case 'toggle-call-play':
      e.preventDefault();
      e.stopPropagation();
      toggleCallPlay(el.dataset.id);
      break;
    case 'view-car': showViewCarModal(el.dataset.id); break;
    case 'view-otabotka': showViewOtabotkaModal(el.dataset.id); break;
    case 'add-team-user': showTeamUserModal(null); break;
    case 'edit-team-user': showTeamUserModal(el.dataset.name); break;
    case 'delete-team-user': deleteTeamUser(el.dataset.name); break;
    case 'save-team-user': saveTeamUser(el.dataset.name || null); break;
    case 'edit-goal': showGoalEditor(el.dataset.user || state.currentUser); break;
    case 'save-goal': saveGoal(el.dataset.user); break;
    case 'save-goal-earn': saveGoalEarn(el.dataset.user); break;
    case 'clear-goal-earn': clearGoalEarn(el.dataset.user, null); break;
    case 'clear-goal-earn-day': clearGoalEarn(el.dataset.user, el.dataset.date); break;
    case 'fill-goal-earn': fillGoalEarnForm(el.dataset.date, el.dataset.amount); break;
    case 'delete-goal': confirmDeleteGoal(el.dataset.user); break;
    case 'confirm-delete-goal': doDeleteGoal(el.dataset.user); break;
    case 'view-goal-user':
      state.goalsViewUser = el.dataset.user || '';
      if (state.currentPage === 'goals') render();
      break;
    case 'set-rules-source':
      state.rulesSource = el.dataset.src || '';
      state.rulesCategory = '';
      if (state.currentPage === 'rules') render();
      break;
    case 'add-penalty': showPenaltyModal(null); break;
    case 'edit-penalty': showPenaltyModal(el.dataset.id); break;
    case 'save-penalty': savePenalty(el.dataset.id || null); break;
    case 'delete-penalty': deletePenalty(el.dataset.id); break;
    case 'attach-penalty-prompt': showAttachPenaltyModal(el.dataset.id); break;
    case 'attach-penalty': attachPenalty(el.dataset.sid, el.dataset.pid); break;
    case 'detach-penalty': detachPenalty(el.dataset.sid, el.dataset.pid); break;
    case 'set-rules-category':
      state.rulesCategory = el.dataset.cat || '';
      if (state.currentPage === 'rules') render();
      break;
    case 'set-lb-period':
      state.leaderboardPeriod = el.dataset.period || 'month';
      if (state.currentPage === 'leaderboard') render();
      break;
    case 'add-catalog-country':
      openModal(
        'Новая страна',
        `<div class="form-group"><label>Название</label>
           <input type="text" id="fNewCountryName" placeholder="Например: Турция"></div>
         <div class="form-group"><label>Флаг (эмодзи, необязательно)</label>
           <input type="text" id="fNewCountryFlag" placeholder="🇹🇷" maxlength="4"></div>`,
        `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
         <button class="btn btn-primary" data-action="save-catalog-country">Сохранить</button>`
      );
      break;
    case 'save-catalog-country': {
      const name = document.getElementById('fNewCountryName')?.value.trim();
      const flag = document.getElementById('fNewCountryFlag')?.value.trim() || '🌍';
      if (!name) { toast('Укажите название', 'error'); break; }
      const code = addCustomCountry(name, flag);
      state.catalogCountry = code || '';
      closeModal();
      toast('Страна добавлена');
      render();
      break;
    }
    case 'set-catalog-country':
      state.catalogCountry = el.dataset.country || '';
      if (state.currentPage === 'catalog') render();
      break;
    case 'add-lb-manual': showLbManualModal(null); break;
    case 'edit-lb-manual': showLbManualModal(el.dataset.id); break;
    case 'save-lb-manual': saveLbManual(el.dataset.id || null); break;
    case 'delete-lb-manual': deleteLbManual(el.dataset.id); break;
    case 'toggle-lb-view': {
      loadLeaderboardData();
      const cb = document.getElementById('lbViewCanSee');
      state.leaderboardSettings = state.leaderboardSettings || { viewCanSee: false };
      state.leaderboardSettings.viewCanSee = !!(cb && cb.checked);
      persistLeaderboardData();
      toast(state.leaderboardSettings.viewCanSee ? 'Просмотр лидерборда разрешён' : 'Просмотр лидерборда скрыт');
      break;
    }
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
    case 'show-profile-editor': showProfileEditor(); break;
    case 'pick-profile-preset': pickProfilePreset(el.dataset.id); break;
    case 'save-profile-ui': saveProfileUIFromModal(); break;
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
    if (id === 'callsSearch') {
      state.callsQuery = e.target.value;
      clearTimeout(window._callsTimer);
      window._callsTimer = setTimeout(() => {
        if (state.currentPage === 'calls') render();
      }, 220);
      return;
    }
    if (id === 'rulesSearch') {
      state.rulesQuery = e.target.value;
      clearTimeout(window._rulesTimer);
      window._rulesTimer = setTimeout(() => {
        if (state.currentPage === 'rules') render();
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
    if (e.target.id === 'catalogBody') {
      state.catalogBody = e.target.value;
      if (state.currentPage === 'catalog') render();
    }
    if (e.target.id === 'callsStatusFilter') {
      state.callsStatus = e.target.value;
      if (state.currentPage === 'calls') render();
    }
    if (e.target.id === 'callWavInput') {
      const file = e.target.files && e.target.files[0];
      e.target.value = '';
      if (file) handleCallWavUpload(file);
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