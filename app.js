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
,
{
  "id": "car_n1",
  "brand": "Chery",
  "model": "Tiggo 7 Pro",
  "price": "2 200 000 ₽",
  "transmission": "Вариатор",
  "description": "Популярный кроссовер, богатая комплектация.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "147 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "чери",
    "chery",
    "tiggo",
    "тигго",
    "кроссовер"
  ]
},
{
  "id": "car_n2",
  "brand": "Chery",
  "model": "Tiggo 4",
  "price": "1 850 000 ₽",
  "transmission": "Механика / Вариатор",
  "description": "Компактный кроссовер для города.",
  "country": "CHN",
  "engine": "1.5 л",
  "power": "113 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "чери",
    "chery",
    "tiggo 4",
    "тигго"
  ]
},
{
  "id": "car_n3",
  "brand": "Chery",
  "model": "Arrizo 8",
  "price": "2 400 000 ₽",
  "transmission": "Робот",
  "description": "Бизнес-седан, просторный салон.",
  "country": "CHN",
  "engine": "1.6 турбо",
  "power": "186 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "чери",
    "arrizo",
    "аризо",
    "седан"
  ]
},
{
  "id": "car_n4",
  "brand": "Haval",
  "model": "Jolion",
  "price": "2 100 000 ₽",
  "transmission": "Робот",
  "description": "Стильный кроссовер, полный/передний привод.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "143 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "хавал",
    "haval",
    "jolion",
    "джолион"
  ]
},
{
  "id": "car_n5",
  "brand": "Haval",
  "model": "Dargo",
  "price": "2 800 000 ₽",
  "transmission": "Робот",
  "description": "Рамный характер, высокий клиренс.",
  "country": "CHN",
  "engine": "2.0 турбо",
  "power": "192 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "хавал",
    "dargo",
    "дарго"
  ]
},
{
  "id": "car_n6",
  "brand": "Haval",
  "model": "F7",
  "price": "2 500 000 ₽",
  "transmission": "Робот",
  "description": "Семейный кроссовер.",
  "country": "CHN",
  "engine": "1.5/2.0 турбо",
  "power": "150–190 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "хавал",
    "f7"
  ]
},
{
  "id": "car_n7",
  "brand": "Geely",
  "model": "Coolray",
  "price": "2 150 000 ₽",
  "transmission": "Робот",
  "description": "Динамичный кроссовер.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "джили",
    "geely",
    "coolray",
    "кулрей"
  ]
},
{
  "id": "car_n8",
  "brand": "Geely",
  "model": "Monjaro",
  "price": "3 900 000 ₽",
  "transmission": "Автомат",
  "description": "Флагманский кроссовер Geely.",
  "country": "CHN",
  "engine": "2.0 турбо",
  "power": "238 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "джили",
    "monjaro",
    "монжаро"
  ]
},
{
  "id": "car_n9",
  "brand": "Geely",
  "model": "Atlas Pro",
  "price": "2 700 000 ₽",
  "transmission": "Робот",
  "description": "Просторный семейный кроссовер.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "177 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "джили",
    "atlas",
    "атлас"
  ]
},
{
  "id": "car_n10",
  "brand": "Changan",
  "model": "UNI-V",
  "price": "2 300 000 ₽",
  "transmission": "Робот",
  "description": "Спортивный лифтбек.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "181 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "чанган",
    "changan",
    "uni-v",
    "юни"
  ]
},
{
  "id": "car_n11",
  "brand": "Changan",
  "model": "CS55 Plus",
  "price": "2 200 000 ₽",
  "transmission": "Автомат",
  "description": "Кроссовер с ярким дизайном.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "181 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "чанган",
    "cs55"
  ]
},
{
  "id": "car_n12",
  "brand": "Omoda",
  "model": "C5",
  "price": "2 250 000 ₽",
  "transmission": "Вариатор",
  "description": "Стильный городской кроссовер.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "147 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "омода",
    "omoda",
    "c5"
  ]
},
{
  "id": "car_n13",
  "brand": "Omoda",
  "model": "S5",
  "price": "1 950 000 ₽",
  "transmission": "Вариатор",
  "description": "Седан нового бренда.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "147 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "омода",
    "s5"
  ]
},
{
  "id": "car_n14",
  "brand": "Exeed",
  "model": "TXL",
  "price": "3 800 000 ₽",
  "transmission": "Робот",
  "description": "Премиальный кроссовер Chery Exeed.",
  "country": "CHN",
  "engine": "1.6/2.0 турбо",
  "power": "186–249 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "эксид",
    "exeed",
    "txl"
  ]
},
{
  "id": "car_n15",
  "brand": "Exeed",
  "model": "RX",
  "price": "4 200 000 ₽",
  "transmission": "Робот",
  "description": "Флагман Exeed.",
  "country": "CHN",
  "engine": "2.0 турбо",
  "power": "249 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "эксид",
    "rx"
  ]
},
{
  "id": "car_n16",
  "brand": "Belgee",
  "model": "X50",
  "price": "1 750 000 ₽",
  "transmission": "Вариатор",
  "description": "Доступный кроссовер (Geely).",
  "country": "CHN",
  "engine": "1.5 л",
  "power": "102–150 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "белджи",
    "belgee",
    "x50"
  ]
},
{
  "id": "car_n17",
  "brand": "Belgee",
  "model": "X70",
  "price": "2 100 000 ₽",
  "transmission": "Робот",
  "description": "Среднеразмерный кроссовер.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "белджи",
    "x70"
  ]
},
{
  "id": "car_n18",
  "brand": "Moskvich",
  "model": "3",
  "price": "1 900 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Городской кроссовер.",
  "country": "RUS",
  "engine": "1.5 л",
  "power": "136–150 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "москвич",
    "moskvich",
    "3"
  ]
},
{
  "id": "car_n19",
  "brand": "Moskvich",
  "model": "6",
  "price": "2 400 000 ₽",
  "transmission": "Робот",
  "description": "Седан Москвич.",
  "country": "RUS",
  "engine": "1.5 турбо",
  "power": "150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "москвич",
    "6"
  ]
},
{
  "id": "car_n20",
  "brand": "UAZ",
  "model": "Patriot",
  "price": "1 600 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Рамный внедорожник.",
  "country": "RUS",
  "engine": "2.7 л",
  "power": "150 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "уаз",
    "uaz",
    "patriot",
    "патриот"
  ]
},
{
  "id": "car_n21",
  "brand": "UAZ",
  "model": "Hunter",
  "price": "1 250 000 ₽",
  "transmission": "Механика",
  "description": "Классика бездорожья.",
  "country": "RUS",
  "engine": "2.7 л",
  "power": "135 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "уаз",
    "hunter",
    "хантер"
  ]
},
{
  "id": "car_n22",
  "brand": "Toyota",
  "model": "Camry",
  "price": "3 800 000 ₽",
  "transmission": "Автомат",
  "description": "Бизнес-седан, высокий спрос.",
  "country": "JPN",
  "engine": "2.5 / 3.5 л",
  "power": "181–249 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "тойота",
    "toyota",
    "camry",
    "камри",
    "седан"
  ]
},
{
  "id": "car_n23",
  "brand": "Toyota",
  "model": "RAV4",
  "price": "4 200 000 ₽",
  "transmission": "Вариатор",
  "description": "Популярный кроссовер.",
  "country": "JPN",
  "engine": "2.0 / 2.5",
  "power": "149–199 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "тойота",
    "rav4",
    "рав4"
  ]
},
{
  "id": "car_n24",
  "brand": "Toyota",
  "model": "Land Cruiser 300",
  "price": "9 500 000 ₽",
  "transmission": "Автомат",
  "description": "Премиальный рамный внедорожник.",
  "country": "JPN",
  "engine": "3.5 турбо",
  "power": "415 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "тойота",
    "land cruiser",
    "крузак",
    "300"
  ]
},
{
  "id": "car_n25",
  "brand": "Lexus",
  "model": "RX",
  "price": "7 500 000 ₽",
  "transmission": "Автомат",
  "description": "Премиальный кроссовер.",
  "country": "JPN",
  "engine": "2.4 турбо / hybrid",
  "power": "299+ л.с.",
  "fuel": "АИ-95 / гибрид",
  "bodyType": "Кроссовер",
  "tags": [
    "лексус",
    "lexus",
    "rx"
  ]
},
{
  "id": "car_n26",
  "brand": "Lexus",
  "model": "LX",
  "price": "12 000 000 ₽",
  "transmission": "Автомат",
  "description": "Флагман Lexus.",
  "country": "JPN",
  "engine": "3.5 турбо",
  "power": "415 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "лексус",
    "lx"
  ]
},
{
  "id": "car_n27",
  "brand": "Hyundai",
  "model": "Solaris",
  "price": "1 550 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Массовый седан.",
  "country": "KOR",
  "engine": "1.4 / 1.6",
  "power": "100–123 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "хендай",
    "hyundai",
    "solaris",
    "солярис"
  ]
},
{
  "id": "car_n28",
  "brand": "Hyundai",
  "model": "Creta",
  "price": "2 100 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Бестселлер-кроссовер.",
  "country": "KOR",
  "engine": "1.6 / 2.0",
  "power": "123–149 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "хендай",
    "creta",
    "крета"
  ]
},
{
  "id": "car_n29",
  "brand": "Hyundai",
  "model": "Tucson",
  "price": "3 200 000 ₽",
  "transmission": "Автомат",
  "description": "Среднеразмерный кроссовер.",
  "country": "KOR",
  "engine": "2.0 / 2.5",
  "power": "150–190 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "хендай",
    "tucson",
    "туссан",
    "тусон"
  ]
},
{
  "id": "car_n30",
  "brand": "Kia",
  "model": "Rio",
  "price": "1 500 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Городской седан/хетч.",
  "country": "KOR",
  "engine": "1.4 / 1.6",
  "power": "100–123 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "киа",
    "kia",
    "rio",
    "рио"
  ]
},
{
  "id": "car_n31",
  "brand": "Kia",
  "model": "Sportage",
  "price": "3 100 000 ₽",
  "transmission": "Автомат",
  "description": "Популярный кроссовер Kia.",
  "country": "KOR",
  "engine": "2.0 / 2.5",
  "power": "150–190 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "киа",
    "sportage",
    "спортейдж"
  ]
},
{
  "id": "car_n32",
  "brand": "Kia",
  "model": "Carnival",
  "price": "4 500 000 ₽",
  "transmission": "Автомат",
  "description": "Семейный минивэн.",
  "country": "KOR",
  "engine": "2.2 дизель / 3.5",
  "power": "199–249 л.с.",
  "fuel": "ДТ / АИ-95",
  "bodyType": "Компактвэн",
  "tags": [
    "киа",
    "carnival",
    "карнавал",
    "минивэн"
  ]
},
{
  "id": "car_n33",
  "brand": "Volkswagen",
  "model": "Polo",
  "price": "1 600 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Народный седан/лифтбек.",
  "country": "DEU",
  "engine": "1.6 л",
  "power": "90–110 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "фольксваген",
    "vw",
    "polo",
    "поло"
  ]
},
{
  "id": "car_n34",
  "brand": "Volkswagen",
  "model": "Tiguan",
  "price": "3 400 000 ₽",
  "transmission": "Робот",
  "description": "Кроссовер VW.",
  "country": "DEU",
  "engine": "1.4 / 2.0 турбо",
  "power": "150–220 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "фольксваген",
    "tiguan",
    "тигуан"
  ]
},
{
  "id": "car_n35",
  "brand": "Skoda",
  "model": "Octavia",
  "price": "2 400 000 ₽",
  "transmission": "Робот",
  "description": "Практичный лифтбек.",
  "country": "CZE",
  "engine": "1.4 / 1.8 турбо",
  "power": "150–180 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "шкода",
    "skoda",
    "octavia",
    "октавия"
  ]
},
{
  "id": "car_n36",
  "brand": "Skoda",
  "model": "Kodiaq",
  "price": "3 600 000 ₽",
  "transmission": "Робот",
  "description": "Семейный кроссовер 7 мест.",
  "country": "CZE",
  "engine": "2.0 турбо",
  "power": "180–220 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "шкода",
    "kodiaq",
    "кодиак"
  ]
},
{
  "id": "car_n37",
  "brand": "Nissan",
  "model": "Qashqai",
  "price": "2 800 000 ₽",
  "transmission": "Вариатор",
  "description": "Городской кроссовер.",
  "country": "JPN",
  "engine": "1.2 / 2.0",
  "power": "115–144 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "ниссан",
    "nissan",
    "qashqai",
    "кашкай"
  ]
},
{
  "id": "car_n38",
  "brand": "Nissan",
  "model": "X-Trail",
  "price": "3 300 000 ₽",
  "transmission": "Вариатор",
  "description": "Семейный кроссовер.",
  "country": "JPN",
  "engine": "2.0 / 2.5",
  "power": "144–171 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "ниссан",
    "x-trail",
    "икстрейл"
  ]
},
{
  "id": "car_n39",
  "brand": "Mazda",
  "model": "CX-5",
  "price": "3 500 000 ₽",
  "transmission": "Автомат",
  "description": "Драйверский кроссовер.",
  "country": "JPN",
  "engine": "2.0 / 2.5",
  "power": "150–194 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "мазда",
    "mazda",
    "cx-5",
    "сикс5"
  ]
},
{
  "id": "car_n40",
  "brand": "Mazda",
  "model": "3",
  "price": "2 400 000 ₽",
  "transmission": "Автомат",
  "description": "Стильный гольф-класс.",
  "country": "JPN",
  "engine": "1.5 / 2.0",
  "power": "120–150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "мазда",
    "mazda 3",
    "тройка"
  ]
},
{
  "id": "car_n41",
  "brand": "Honda",
  "model": "CR-V",
  "price": "3 600 000 ₽",
  "transmission": "Вариатор",
  "description": "Надёжный кроссовер.",
  "country": "JPN",
  "engine": "1.5 турбо / 2.0",
  "power": "150–193 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "хонда",
    "honda",
    "cr-v",
    "срв"
  ]
},
{
  "id": "car_n42",
  "brand": "Subaru",
  "model": "Forester",
  "price": "3 800 000 ₽",
  "transmission": "Вариатор",
  "description": "Постоянный полный привод.",
  "country": "JPN",
  "engine": "2.0 / 2.5",
  "power": "150–185 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "субару",
    "subaru",
    "forester",
    "форестер"
  ]
},
{
  "id": "car_n43",
  "brand": "Suzuki",
  "model": "Vitara",
  "price": "2 200 000 ₽",
  "transmission": "Автомат",
  "description": "Компактный кроссовер.",
  "country": "JPN",
  "engine": "1.4 / 1.6",
  "power": "117–140 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "сузуки",
    "suzuki",
    "vitara",
    "витара"
  ]
},
{
  "id": "car_n44",
  "brand": "Mitsubishi",
  "model": "Outlander",
  "price": "3 200 000 ₽",
  "transmission": "Вариатор",
  "description": "Семейный кроссовер 7 мест.",
  "country": "JPN",
  "engine": "2.0 / 2.4",
  "power": "146–167 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "митсубиси",
    "mitsubishi",
    "outlander",
    "аутлендер"
  ]
},
{
  "id": "car_n45",
  "brand": "BMW",
  "model": "X5",
  "price": "8 500 000 ₽",
  "transmission": "Автомат",
  "description": "Премиальный SAV.",
  "country": "DEU",
  "engine": "3.0 турбо",
  "power": "340+ л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "бмв",
    "bmw",
    "x5"
  ]
},
{
  "id": "car_n46",
  "brand": "BMW",
  "model": "3 Series",
  "price": "4 800 000 ₽",
  "transmission": "Автомат",
  "description": "Спортивный бизнес-седан.",
  "country": "DEU",
  "engine": "2.0 турбо",
  "power": "184–245 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "бмв",
    "3 series",
    "тройка"
  ]
},
{
  "id": "car_n47",
  "brand": "Mercedes",
  "model": "E-Class",
  "price": "6 500 000 ₽",
  "transmission": "Автомат",
  "description": "Бизнес-седан Mercedes.",
  "country": "DEU",
  "engine": "2.0 турбо",
  "power": "197–258 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "мерседес",
    "mercedes",
    "e-class",
    "е класс"
  ]
},
{
  "id": "car_n48",
  "brand": "Mercedes",
  "model": "GLC",
  "price": "6 200 000 ₽",
  "transmission": "Автомат",
  "description": "Популярный кроссовер MB.",
  "country": "DEU",
  "engine": "2.0 турбо",
  "power": "197–258 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "мерседес",
    "glc"
  ]
},
{
  "id": "car_n49",
  "brand": "Audi",
  "model": "Q5",
  "price": "5 800 000 ₽",
  "transmission": "Робот",
  "description": "Премиальный кроссовер.",
  "country": "DEU",
  "engine": "2.0 турбо",
  "power": "249 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "ауди",
    "audi",
    "q5"
  ]
},
{
  "id": "car_n50",
  "brand": "Audi",
  "model": "A6",
  "price": "5 500 000 ₽",
  "transmission": "Робот",
  "description": "Бизнес-седан Audi.",
  "country": "DEU",
  "engine": "2.0 турбо",
  "power": "245 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "ауди",
    "a6"
  ]
},
{
  "id": "car_n51",
  "brand": "Volvo",
  "model": "XC60",
  "price": "5 200 000 ₽",
  "transmission": "Автомат",
  "description": "Безопасный кроссовер.",
  "country": "SWE",
  "engine": "2.0 турбо / hybrid",
  "power": "250+ л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "вольво",
    "volvo",
    "xc60"
  ]
},
{
  "id": "car_n52",
  "brand": "Genesis",
  "model": "GV70",
  "price": "6 800 000 ₽",
  "transmission": "Автомат",
  "description": "Премиум-кроссовер Genesis.",
  "country": "KOR",
  "engine": "2.5 турбо",
  "power": "249 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "генезис",
    "genesis",
    "gv70"
  ]
},
{
  "id": "car_n53",
  "brand": "Genesis",
  "model": "G80",
  "price": "6 500 000 ₽",
  "transmission": "Автомат",
  "description": "Бизнес-седан Genesis.",
  "country": "KOR",
  "engine": "2.5 турбо",
  "power": "249 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "генезис",
    "g80"
  ]
},
{
  "id": "car_n54",
  "brand": "Tesla",
  "model": "Model 3",
  "price": "4 500 000 ₽",
  "transmission": "Автомат (1 передача)",
  "description": "Электроседан.",
  "country": "USA",
  "engine": "Электро",
  "power": "283–460 л.с.",
  "fuel": "Электро",
  "bodyType": "Электромобили",
  "tags": [
    "тесла",
    "tesla",
    "model 3",
    "электро"
  ]
},
{
  "id": "car_n55",
  "brand": "Tesla",
  "model": "Model Y",
  "price": "5 200 000 ₽",
  "transmission": "Автомат (1 передача)",
  "description": "Электрокроссовер.",
  "country": "USA",
  "engine": "Электро",
  "power": "299–534 л.с.",
  "fuel": "Электро",
  "bodyType": "Электромобили",
  "tags": [
    "тесла",
    "model y",
    "электро"
  ]
},
{
  "id": "car_n56",
  "brand": "Zeekr",
  "model": "001",
  "price": "5 800 000 ₽",
  "transmission": "Автомат",
  "description": "Премиальный электроуниверсал.",
  "country": "CHN",
  "engine": "Электро",
  "power": "544–789 л.с.",
  "fuel": "Электро",
  "bodyType": "Электромобили",
  "tags": [
    "зикр",
    "zeekr",
    "001",
    "электро"
  ]
},
{
  "id": "car_n57",
  "brand": "Lixiang",
  "model": "L7",
  "price": "6 200 000 ₽",
  "transmission": "Автомат",
  "description": "Гибридный кроссовер Li Auto.",
  "country": "CHN",
  "engine": "1.5 турбо + электро",
  "power": "449 л.с.",
  "fuel": "Гибрид",
  "bodyType": "Кроссовер",
  "tags": [
    "лисян",
    "lixiang",
    "li auto",
    "l7"
  ]
},
{
  "id": "car_n58",
  "brand": "Tank",
  "model": "300",
  "price": "3 900 000 ₽",
  "transmission": "Автомат",
  "description": "Рамный внедорожник в стиле ретро.",
  "country": "CHN",
  "engine": "2.0 турбо",
  "power": "220 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "танк",
    "tank",
    "300"
  ]
},
{
  "id": "car_n59",
  "brand": "Tank",
  "model": "500",
  "price": "5 500 000 ₽",
  "transmission": "Автомат",
  "description": "Крупный рамный SUV.",
  "country": "CHN",
  "engine": "3.0 турбо",
  "power": "299 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "танк",
    "500"
  ]
},
{
  "id": "car_n60",
  "brand": "Jaecoo",
  "model": "J7",
  "price": "2 900 000 ₽",
  "transmission": "Робот",
  "description": "Кроссовер Jaecoo.",
  "country": "CHN",
  "engine": "1.6 турбо",
  "power": "186 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "jaecoo",
    "джику",
    "j7"
  ]
},
{
  "id": "car_x1",
  "brand": "LADA",
  "model": "Priora",
  "price": "—",
  "transmission": "Механика",
  "description": "Снята с производства. ⚠ В АЦ НЕТ: по правилам проекта это авто / сегмент обычно не проводится (заявка может уйти в «Не актуально»).",
  "country": "RUS",
  "engine": "1.6 л",
  "power": "98 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "лада",
    "priora",
    "приора"
  ],
  "notInAc": true
},
{
  "id": "car_x2",
  "brand": "Daewoo",
  "model": "Matiz",
  "price": "—",
  "transmission": "Механика",
  "description": "Городской микролитражный. ⚠ В АЦ НЕТ: по правилам проекта это авто / сегмент обычно не проводится (заявка может уйти в «Не актуально»).",
  "country": "KOR",
  "engine": "0.8 л",
  "power": "51 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Хетчбэк",
  "tags": [
    "дэу",
    "daewoo",
    "matiz",
    "матиз"
  ],
  "notInAc": true
},
{
  "id": "car_x3",
  "brand": "LADA",
  "model": "2107",
  "price": "—",
  "transmission": "Механика",
  "description": "Классика ВАЗ. ⚠ В АЦ НЕТ: по правилам проекта это авто / сегмент обычно не проводится (заявка может уйти в «Не актуально»).",
  "country": "RUS",
  "engine": "1.6 л",
  "power": "74 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "ваз",
    "2107",
    "семёрка"
  ],
  "notInAc": true
},
{
  "id": "car_x4",
  "brand": "Chevrolet",
  "model": "Niva",
  "price": "—",
  "transmission": "Механика",
  "description": "Старое поколение Niva (Chevrolet). ⚠ В АЦ НЕТ: по правилам проекта это авто / сегмент обычно не проводится (заявка может уйти в «Не актуально»).",
  "country": "RUS",
  "engine": "1.7 л",
  "power": "80 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "шевроле",
    "niva",
    "нива"
  ],
  "notInAc": true
},
{
  "id": "car_x5",
  "brand": "LADA",
  "model": "Kalina",
  "price": "—",
  "transmission": "Механика",
  "description": "Снята с конвейера. ⚠ В АЦ НЕТ: по правилам проекта это авто / сегмент обычно не проводится (заявка может уйти в «Не актуально»).",
  "country": "RUS",
  "engine": "1.6 л",
  "power": "87–106 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Хетчбэк",
  "tags": [
    "лада",
    "kalina",
    "калина"
  ],
  "notInAc": true
},
{
  "id": "car_x6",
  "brand": "Ravon",
  "model": "R2",
  "price": "—",
  "transmission": "Автомат",
  "description": "Бюджетный городской. ⚠ В АЦ НЕТ: по правилам проекта это авто / сегмент обычно не проводится (заявка может уйти в «Не актуально»).",
  "country": "UZB",
  "engine": "1.2 л",
  "power": "85 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Хетчбэк",
  "tags": [
    "равон",
    "ravon",
    "r2"
  ],
  "notInAc": true
},
{
  "id": "car_m1",
  "brand": "LADA",
  "model": "Vesta SW Cross",
  "price": "1 650 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Универсал с увеличенным клиренсом.",
  "country": "RUS",
  "engine": "1.6 / 1.8",
  "power": "106–122 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Универсал",
  "tags": [
    "лада",
    "vesta",
    "sw cross",
    "универсал"
  ]
},
{
  "id": "car_m2",
  "brand": "LADA",
  "model": "Largus",
  "price": "1 450 000 ₽",
  "transmission": "Механика",
  "description": "Семейный универсал / фургон.",
  "country": "RUS",
  "engine": "1.6 л",
  "power": "90–106 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Универсал",
  "tags": [
    "лада",
    "largus",
    "ларгус"
  ]
},
{
  "id": "car_m3",
  "brand": "LADA",
  "model": "XRAY Cross",
  "price": "1 350 000 ₽",
  "transmission": "Механика / Робот",
  "description": "Компактный кроссовер-хетч.",
  "country": "RUS",
  "engine": "1.6 / 1.8",
  "power": "106–122 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "лада",
    "xray",
    "иксрей"
  ]
},
{
  "id": "car_m4",
  "brand": "Renault",
  "model": "Duster",
  "price": "2 000 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Практичный кроссовер.",
  "country": "FRA",
  "engine": "1.6 / 2.0",
  "power": "114–143 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "рено",
    "renault",
    "duster",
    "дастер"
  ]
},
{
  "id": "car_m5",
  "brand": "Renault",
  "model": "Logan",
  "price": "1 300 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Бюджетный седан.",
  "country": "FRA",
  "engine": "1.6 л",
  "power": "82–113 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "рено",
    "logan",
    "логан"
  ]
},
{
  "id": "car_m6",
  "brand": "Renault",
  "model": "Arkana",
  "price": "2 200 000 ₽",
  "transmission": "Вариатор",
  "description": "Купе-кроссовер.",
  "country": "FRA",
  "engine": "1.3 турбо",
  "power": "150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "рено",
    "arkana",
    "аркана"
  ]
},
{
  "id": "car_m7",
  "brand": "Peugeot",
  "model": "3008",
  "price": "3 200 000 ₽",
  "transmission": "Автомат",
  "description": "Стильный кроссовер.",
  "country": "FRA",
  "engine": "1.6 турбо",
  "power": "150–180 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "пежо",
    "peugeot",
    "3008"
  ]
},
{
  "id": "car_m8",
  "brand": "Peugeot",
  "model": "408",
  "price": "2 600 000 ₽",
  "transmission": "Автомат",
  "description": "Лифтбек.",
  "country": "FRA",
  "engine": "1.6 турбо",
  "power": "150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "пежо",
    "408"
  ]
},
{
  "id": "car_m9",
  "brand": "Citroen",
  "model": "C5 Aircross",
  "price": "2 900 000 ₽",
  "transmission": "Автомат",
  "description": "Комфортный кроссовер.",
  "country": "FRA",
  "engine": "1.6 турбо",
  "power": "150–180 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "ситроен",
    "citroen",
    "c5"
  ]
},
{
  "id": "car_m10",
  "brand": "Ford",
  "model": "Kuga",
  "price": "2 800 000 ₽",
  "transmission": "Автомат",
  "description": "Кроссовер Ford.",
  "country": "USA",
  "engine": "1.5 / 2.0",
  "power": "150–190 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "форд",
    "ford",
    "kuga",
    "куга"
  ]
},
{
  "id": "car_m11",
  "brand": "Ford",
  "model": "Focus",
  "price": "1 800 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Гольф-класс.",
  "country": "USA",
  "engine": "1.5 / 1.6",
  "power": "105–150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "форд",
    "focus",
    "фокус"
  ]
},
{
  "id": "car_m12",
  "brand": "Chevrolet",
  "model": "Trailblazer",
  "price": "2 500 000 ₽",
  "transmission": "Автомат",
  "description": "Компактный кроссовер.",
  "country": "USA",
  "engine": "1.2 / 1.3 турбо",
  "power": "137–150 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "шевроле",
    "trailblazer"
  ]
},
{
  "id": "car_m13",
  "brand": "Jetour",
  "model": "Dashing",
  "price": "2 400 000 ₽",
  "transmission": "Робот",
  "description": "Кроссовер Jetour.",
  "country": "CHN",
  "engine": "1.5 / 1.6 турбо",
  "power": "147–190 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "джетур",
    "jetour",
    "dashing"
  ]
},
{
  "id": "car_m14",
  "brand": "Jetour",
  "model": "X70 Plus",
  "price": "2 300 000 ₽",
  "transmission": "Робот",
  "description": "Семейный кроссовер 7 мест.",
  "country": "CHN",
  "engine": "1.5 / 1.6 турбо",
  "power": "147–190 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "джетур",
    "x70"
  ]
},
{
  "id": "car_m15",
  "brand": "Kaiyi",
  "model": "X3 Pro",
  "price": "1 850 000 ₽",
  "transmission": "Вариатор",
  "description": "Доступный кроссовер.",
  "country": "CHN",
  "engine": "1.5 л",
  "power": "147 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "каи",
    "kaiyi",
    "x3"
  ]
},
{
  "id": "car_m16",
  "brand": "Kaiyi",
  "model": "E5",
  "price": "1 700 000 ₽",
  "transmission": "Вариатор",
  "description": "Седан Kaiyi.",
  "country": "CHN",
  "engine": "1.5 л",
  "power": "147 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "каи",
    "e5"
  ]
},
{
  "id": "car_m17",
  "brand": "Hongqi",
  "model": "H5",
  "price": "3 500 000 ₽",
  "transmission": "Автомат",
  "description": "Бизнес-седан Hongqi.",
  "country": "CHN",
  "engine": "1.5 / 2.0 турбо",
  "power": "169–224 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "хунци",
    "hongqi",
    "h5"
  ]
},
{
  "id": "car_m18",
  "brand": "Hongqi",
  "model": "HS5",
  "price": "3 800 000 ₽",
  "transmission": "Автомат",
  "description": "Кроссовер Hongqi.",
  "country": "CHN",
  "engine": "2.0 турбо",
  "power": "224 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "хунци",
    "hs5"
  ]
},
{
  "id": "car_m19",
  "brand": "Voyah",
  "model": "Free",
  "price": "5 500 000 ₽",
  "transmission": "Автомат",
  "description": "Премиальный электро/гибрид кроссовер.",
  "country": "CHN",
  "engine": "Электро / гибрид",
  "power": "489 л.с.",
  "fuel": "Электро",
  "bodyType": "Электромобили",
  "tags": [
    "voyah",
    "воя",
    "free"
  ]
},
{
  "id": "car_m20",
  "brand": "BYD",
  "model": "Song Plus",
  "price": "3 800 000 ₽",
  "transmission": "Автомат",
  "description": "Гибридный кроссовер BYD.",
  "country": "CHN",
  "engine": "1.5 турбо + электро",
  "power": "218+ л.с.",
  "fuel": "Гибрид",
  "bodyType": "Кроссовер",
  "tags": [
    "byd",
    "бид",
    "song"
  ]
},
{
  "id": "car_m21",
  "brand": "BYD",
  "model": "Han",
  "price": "4 500 000 ₽",
  "transmission": "Автомат",
  "description": "Электро/гибрид седан.",
  "country": "CHN",
  "engine": "Электро / гибрид",
  "power": "245–509 л.с.",
  "fuel": "Электро",
  "bodyType": "Электромобили",
  "tags": [
    "byd",
    "han"
  ]
},
{
  "id": "car_m22",
  "brand": "Changan",
  "model": "UNI-K",
  "price": "3 200 000 ₽",
  "transmission": "Робот",
  "description": "Крупный кроссовер Changan.",
  "country": "CHN",
  "engine": "2.0 турбо",
  "power": "226 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "чанган",
    "uni-k"
  ]
},
{
  "id": "car_m23",
  "brand": "Haval",
  "model": "H9",
  "price": "4 200 000 ₽",
  "transmission": "Автомат",
  "description": "Рамный внедорожник.",
  "country": "CHN",
  "engine": "2.0 турбо",
  "power": "218 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Внедорожник / SUV",
  "tags": [
    "хавал",
    "h9"
  ]
},
{
  "id": "car_m24",
  "brand": "Haval",
  "model": "M6",
  "price": "1 950 000 ₽",
  "transmission": "Робот",
  "description": "Доступный семейный кроссовер.",
  "country": "CHN",
  "engine": "1.5 турбо",
  "power": "143 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Кроссовер",
  "tags": [
    "хавал",
    "m6"
  ]
},
{
  "id": "car_m25",
  "brand": "Chery",
  "model": "Tiggo 8 Pro",
  "price": "2 800 000 ₽",
  "transmission": "Робот",
  "description": "Семейный 7-местный кроссовер.",
  "country": "CHN",
  "engine": "1.6 / 2.0 турбо",
  "power": "186–197 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "чери",
    "tiggo 8",
    "тигго 8"
  ]
},
{
  "id": "car_m26",
  "brand": "Toyota",
  "model": "Corolla",
  "price": "2 600 000 ₽",
  "transmission": "Вариатор",
  "description": "Надёжный гольф-класс.",
  "country": "JPN",
  "engine": "1.6 / 1.8",
  "power": "122–140 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "тойота",
    "corolla",
    "королла"
  ]
},
{
  "id": "car_m27",
  "brand": "Toyota",
  "model": "Highlander",
  "price": "5 500 000 ₽",
  "transmission": "Автомат",
  "description": "Крупный семейный кроссовер.",
  "country": "JPN",
  "engine": "2.5 / 3.5 hybrid",
  "power": "244–299 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "тойота",
    "highlander",
    "хайлендер"
  ]
},
{
  "id": "car_m28",
  "brand": "Honda",
  "model": "Civic",
  "price": "2 800 000 ₽",
  "transmission": "Вариатор",
  "description": "Спортивный гольф.",
  "country": "JPN",
  "engine": "1.5 турбо",
  "power": "182 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Седан",
  "tags": [
    "хонда",
    "civic",
    "сивик"
  ]
},
{
  "id": "car_m29",
  "brand": "Honda",
  "model": "Pilot",
  "price": "5 200 000 ₽",
  "transmission": "Автомат",
  "description": "Большой кроссовер 8 мест.",
  "country": "JPN",
  "engine": "3.5 л",
  "power": "280 л.с.",
  "fuel": "АИ-95",
  "bodyType": "Кроссовер",
  "tags": [
    "хонда",
    "pilot",
    "пилот"
  ]
},
{
  "id": "car_m30",
  "brand": "Skoda",
  "model": "Rapid",
  "price": "1 700 000 ₽",
  "transmission": "Механика / Автомат",
  "description": "Практичный лифтбек.",
  "country": "CZE",
  "engine": "1.6 л",
  "power": "90–110 л.с.",
  "fuel": "АИ-92",
  "bodyType": "Седан",
  "tags": [
    "шкода",
    "rapid",
    "рапид"
  ]
},
  {
    "id": "car_86",
    "brand": "Geely",
    "model": "Preface",
    "price": "2 400 000 ₽",
    "transmission": "Робот / Автомат",
    "description": "Бизнес-седан, просторный салон, богатая комплектация — один из лидеров продаж среди китайских седанов.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "218 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Седан",
    "tags": [
      "джили",
      "preface",
      "префейс",
      "седан"
    ]
  },
  {
    "id": "car_87",
    "brand": "Geely",
    "model": "Atlas",
    "price": "2 300 000 ₽",
    "transmission": "Автомат",
    "description": "Среднеразмерный кроссовер, комфорт и проходимость. Популярный семейный SUV.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "218 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "джили",
      "atlas",
      "атлас",
      "кроссовер"
    ]
  },
  {
    "id": "car_88",
    "brand": "Geely",
    "model": "Cityray",
    "price": "1 900 000 ₽",
    "transmission": "Робот",
    "description": "Компактный кроссовер, городской формат, стильный дизайн.",
    "country": "CHN",
    "engine": "1.5 л turbo",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "джили",
      "cityray",
      "ситирей"
    ]
  },
  {
    "id": "car_89",
    "brand": "Chery",
    "model": "Tiggo 7 Pro Max",
    "price": "2 500 000 ₽",
    "transmission": "Робот",
    "description": "Топ-версия популярного кроссовера, полный фарш, высокий спрос.",
    "country": "CHN",
    "engine": "1.6 л turbo",
    "power": "150–186 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "чери",
      "tiggo",
      "тигго",
      "7 pro max"
    ]
  },
  {
    "id": "car_90",
    "brand": "Chery",
    "model": "Tiggo 4 Pro",
    "price": "1 850 000 ₽",
    "transmission": "Робот / Механика",
    "description": "Компактный кроссовер-бестселлер сегмента.",
    "country": "CHN",
    "engine": "1.5 л",
    "power": "113–147 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "чери",
      "tiggo 4",
      "тигго 4"
    ]
  },
  {
    "id": "car_91",
    "brand": "Chery",
    "model": "Arrizo 5",
    "price": "1 400 000 ₽",
    "transmission": "Механика / CVT",
    "description": "Доступный седан, часто берут в кредит.",
    "country": "CHN",
    "engine": "1.5 л",
    "power": "113 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Седан",
    "tags": [
      "чери",
      "arrizo",
      "ариззо"
    ]
  },
  {
    "id": "car_92",
    "brand": "Haval",
    "model": "Jolion Pro",
    "price": "2 100 000 ₽",
    "transmission": "Робот",
    "description": "Обновлённый Jolion — один из самых продаваемых кроссоверов.",
    "country": "CHN",
    "engine": "1.5 л turbo",
    "power": "143–150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "хавал",
      "jolion",
      "джолион"
    ]
  },
  {
    "id": "car_93",
    "brand": "Haval",
    "model": "H6",
    "price": "2 600 000 ₽",
    "transmission": "Робот",
    "description": "Глобальный бестселлер бренда, просторный салон.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "192 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "хавал",
      "h6",
      "н6"
    ]
  },
  {
    "id": "car_94",
    "brand": "Changan",
    "model": "Alsvin",
    "price": "1 350 000 ₽",
    "transmission": "Механика / Автомат",
    "description": "Бюджетный седан, частый выбор на первичном рынке.",
    "country": "CHN",
    "engine": "1.5 л",
    "power": "98–107 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Седан",
    "tags": [
      "чанган",
      "alsvin",
      "алсвин"
    ]
  },
  {
    "id": "car_95",
    "brand": "Changan",
    "model": "Lamore",
    "price": "2 200 000 ₽",
    "transmission": "Робот",
    "description": "Стильный седан среднего класса.",
    "country": "CHN",
    "engine": "1.5 л turbo",
    "power": "180 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Седан",
    "tags": [
      "чанган",
      "lamore",
      "ламоре"
    ]
  },
  {
    "id": "car_96",
    "brand": "Changan",
    "model": "Hunter",
    "price": "2 800 000 ₽",
    "transmission": "Автомат",
    "description": "Пикап, коммерция и outdoor.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "226 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Пикап",
    "tags": [
      "чанган",
      "hunter",
      "хантер",
      "пикап"
    ]
  },
  {
    "id": "car_97",
    "brand": "Omoda",
    "model": "C5 GT",
    "price": "2 400 000 ₽",
    "transmission": "Робот",
    "description": "Спортивная версия C5, динамика и дизайн.",
    "country": "CHN",
    "engine": "1.6 л turbo",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "омода",
      "c5",
      "gt"
    ]
  },
  {
    "id": "car_98",
    "brand": "Jaecoo",
    "model": "J8",
    "price": "4 200 000 ₽",
    "transmission": "Автомат",
    "description": "Крупный премиальный кроссовер бренда.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "249 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "jaecoo",
      "j8",
      "джаеку"
    ]
  },
  {
    "id": "car_99",
    "brand": "Jaecoo",
    "model": "J5",
    "price": "2 300 000 ₽",
    "transmission": "Робот",
    "description": "Компактный кроссовер новой линейки.",
    "country": "CHN",
    "engine": "1.5 л turbo",
    "power": "147 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "jaecoo",
      "j5"
    ]
  },
  {
    "id": "car_100",
    "brand": "Belgee",
    "model": "X55",
    "price": "1 900 000 ₽",
    "transmission": "Робот",
    "description": "Кроссовер белорусской сборки на базе Geely, выгодная цена.",
    "country": "BLR",
    "engine": "1.5 л turbo",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "belgee",
      "белджи",
      "x55"
    ]
  },
  {
    "id": "car_101",
    "brand": "LADA",
    "model": "Aura",
    "price": "2 000 000 ₽",
    "transmission": "Автомат",
    "description": "Длиннобазный седан на базе Vesta, бизнес/такси.",
    "country": "RUS",
    "engine": "1.6–1.8 л",
    "power": "106–122 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Седан",
    "tags": [
      "лада",
      "aura",
      "аура"
    ]
  },
  {
    "id": "car_102",
    "brand": "LADA",
    "model": "Iskra",
    "price": "1 100 000 ₽",
    "transmission": "Механика / Автомат",
    "description": "Новая бюджетная модель, замена Granta в перспективе.",
    "country": "RUS",
    "engine": "1.6 л",
    "power": "90–106 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Седан",
    "tags": [
      "лада",
      "iskra",
      "искра"
    ]
  },
  {
    "id": "car_103",
    "brand": "Kia",
    "model": "Seltos",
    "price": "2 200 000 ₽",
    "transmission": "Автомат / Робот",
    "description": "Компактный кроссовер, высокий спрос на вторичке и у дилеров.",
    "country": "KOR",
    "engine": "1.6–2.0 л",
    "power": "123–149 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "киа",
      "seltos",
      "селтос"
    ]
  },
  {
    "id": "car_104",
    "brand": "Kia",
    "model": "Cerato",
    "price": "1 900 000 ₽",
    "transmission": "Автомат",
    "description": "Популярный седан C-класса.",
    "country": "KOR",
    "engine": "1.6–2.0 л",
    "power": "128–150 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Седан",
    "tags": [
      "киа",
      "cerato",
      "серато",
      "церато"
    ]
  },
  {
    "id": "car_105",
    "brand": "Hyundai",
    "model": "Elantra",
    "price": "1 950 000 ₽",
    "transmission": "Автомат",
    "description": "Седан-бестселлер, часто в корпоративных парках.",
    "country": "KOR",
    "engine": "1.6–2.0 л",
    "power": "128–150 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Седан",
    "tags": [
      "хендай",
      "elantra",
      "элантра"
    ]
  },
  {
    "id": "car_106",
    "brand": "Hyundai",
    "model": "Palisade",
    "price": "5 500 000 ₽",
    "transmission": "Автомат",
    "description": "Большой 7–8 местный кроссовер.",
    "country": "KOR",
    "engine": "3.5–3.8 л",
    "power": "249–295 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "хендай",
      "palisade",
      "палисейд"
    ]
  },
  {
    "id": "car_107",
    "brand": "Toyota",
    "model": "Land Cruiser Prado",
    "price": "7 500 000 ₽",
    "transmission": "Автомат",
    "description": "Легендарный внедорожник, высокий спрос на вторичке.",
    "country": "JPN",
    "engine": "2.8 л diesel / 2.4 turbo",
    "power": "204–299 л.с.",
    "fuel": "ДТ / АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "тойота",
      "prado",
      "прадо",
      "land cruiser"
    ]
  },
  {
    "id": "car_108",
    "brand": "BMW",
    "model": "X1",
    "price": "4 200 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный премиум-кроссовер.",
    "country": "DEU",
    "engine": "1.5–2.0 л",
    "power": "136–204 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "бмв",
      "x1"
    ]
  },
  {
    "id": "car_109",
    "brand": "BMW",
    "model": "X6",
    "price": "9 500 000 ₽",
    "transmission": "Автомат",
    "description": "Купе-кроссовер, статусный сегмент.",
    "country": "DEU",
    "engine": "3.0 л",
    "power": "340–530 л.с.",
    "fuel": "АИ-98",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "бмв",
      "x6"
    ]
  },
  {
    "id": "car_110",
    "brand": "Mercedes",
    "model": "GLE",
    "price": "9 800 000 ₽",
    "transmission": "Автомат",
    "description": "Премиальный SUV, частый запрос в люкс-сегменте.",
    "country": "DEU",
    "engine": "2.0–3.0 л",
    "power": "245–435 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "мерседес",
      "gle"
    ]
  },
  {
    "id": "car_111",
    "brand": "Volkswagen",
    "model": "Taos",
    "price": "2 400 000 ₽",
    "transmission": "Робот",
    "description": "Компактный кроссовер, замена Tiguan для города.",
    "country": "DEU",
    "engine": "1.4–1.6 л",
    "power": "110–150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "фольксваген",
      "taos",
      "таос"
    ]
  },
  {
    "id": "car_112",
    "brand": "Skoda",
    "model": "Karoq",
    "price": "2 500 000 ₽",
    "transmission": "Робот / Автомат",
    "description": "Компактный SUV, практичность Octavia в кроссовере.",
    "country": "CZE",
    "engine": "1.4–1.5 л",
    "power": "125–150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "шкода",
      "karoq",
      "карок"
    ]
  },
  {
    "id": "car_113",
    "brand": "Skoda",
    "model": "Superb",
    "price": "3 200 000 ₽",
    "transmission": "Робот",
    "description": "Бизнес-лифтбек, просторный багажник.",
    "country": "CZE",
    "engine": "1.5–2.0 л",
    "power": "150–190 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Седан",
    "tags": [
      "шкода",
      "superb",
      "супераб"
    ]
  },
  {
    "id": "car_114",
    "brand": "Mazda",
    "model": "CX-30",
    "price": "2 600 000 ₽",
    "transmission": "Автомат",
    "description": "Стильный компактный кроссовер.",
    "country": "JPN",
    "engine": "2.0 л",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "мазда",
      "cx-30",
      "cx30"
    ]
  },
  {
    "id": "car_115",
    "brand": "Mazda",
    "model": "CX-60",
    "price": "4 500 000 ₽",
    "transmission": "Автомат",
    "description": "Среднеразмерный кроссовер нового поколения.",
    "country": "JPN",
    "engine": "2.5–3.3 л",
    "power": "191–284 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "мазда",
      "cx-60",
      "cx60"
    ]
  },
  {
    "id": "car_116",
    "brand": "Nissan",
    "model": "Pathfinder",
    "price": "4 800 000 ₽",
    "transmission": "Автомат",
    "description": "Семейный 7-местный SUV.",
    "country": "JPN",
    "engine": "3.5 л",
    "power": "275 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "ниссан",
      "pathfinder",
      "пасфайндер"
    ]
  },
  {
    "id": "car_117",
    "brand": "Jetour",
    "model": "T2",
    "price": "2 900 000 ₽",
    "transmission": "Автомат",
    "description": "Рамный стиль, off-road имидж, растущий спрос.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "245 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "jetour",
      "джитур",
      "t2"
    ]
  },
  {
    "id": "car_118",
    "brand": "Exeed",
    "model": "VX",
    "price": "4 500 000 ₽",
    "transmission": "Автомат",
    "description": "Флагманский 7-местный кроссовер.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "249 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "exeed",
      "эксид",
      "vx"
    ]
  },
  {
    "id": "car_119",
    "brand": "Tank",
    "model": "400",
    "price": "4 800 000 ₽",
    "transmission": "Автомат",
    "description": "Рамный внедорожник между 300 и 500.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "245 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "танк",
      "tank 400"
    ]
  },
  {
    "id": "car_120",
    "brand": "Hongqi",
    "model": "E-HS9",
    "price": "7 000 000 ₽",
    "transmission": "Автомат",
    "description": "Электрический премиум-SUV.",
    "country": "CHN",
    "engine": "электро",
    "power": "435–551 л.с.",
    "fuel": "Электро",
    "bodyType": "Электромобили",
    "tags": [
      "hongqi",
      "хунци",
      "e-hs9",
      "электро"
    ]
  },
  {
    "id": "car_121",
    "brand": "BYD",
    "model": "Seal",
    "price": "3 800 000 ₽",
    "transmission": "Автомат",
    "description": "Электрический седан, конкурент Tesla 3.",
    "country": "CHN",
    "engine": "электро",
    "power": "313–530 л.с.",
    "fuel": "Электро",
    "bodyType": "Электромобили",
    "tags": [
      "byd",
      "бид",
      "seal",
      "сил"
    ]
  },
  {
    "id": "car_122",
    "brand": "BYD",
    "model": "Yuan Plus",
    "price": "2 900 000 ₽",
    "transmission": "Автомат",
    "description": "Компактный электрический кроссовер (Atto 3).",
    "country": "CHN",
    "engine": "электро",
    "power": "204 л.с.",
    "fuel": "Электро",
    "bodyType": "Электромобили",
    "tags": [
      "byd",
      "yuan",
      "atto 3"
    ]
  },
  {
    "id": "car_123",
    "brand": "Lixiang",
    "model": "L9",
    "price": "9 500 000 ₽",
    "transmission": "Автомат",
    "description": "Большой гибридный SUV 6 мест, премиум.",
    "country": "CHN",
    "engine": "гибрид 1.5 turbo",
    "power": "449 л.с.",
    "fuel": "Гибрид",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "lixiang",
      "лисян",
      "li",
      "l9"
    ]
  },
  {
    "id": "car_124",
    "brand": "Lixiang",
    "model": "L6",
    "price": "6 200 000 ₽",
    "transmission": "Автомат",
    "description": "Гибридный семейный SUV.",
    "country": "CHN",
    "engine": "гибрид 1.5 turbo",
    "power": "408 л.с.",
    "fuel": "Гибрид",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "lixiang",
      "l6",
      "лисян"
    ]
  },
  {
    "id": "car_125",
    "brand": "Zeekr",
    "model": "007",
    "price": "4 500 000 ₽",
    "transmission": "Автомат",
    "description": "Электрический седан премиум-класса.",
    "country": "CHN",
    "engine": "электро",
    "power": "422–646 л.с.",
    "fuel": "Электро",
    "bodyType": "Электромобили",
    "tags": [
      "zeekr",
      "зикр",
      "007"
    ]
  },
  {
    "id": "car_126",
    "brand": "Moskvich",
    "model": "5",
    "price": "1 900 000 ₽",
    "transmission": "Робот",
    "description": "Кроссовер на базе JAC, доступный ценник.",
    "country": "RUS",
    "engine": "1.5 л turbo",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "москвич",
      "moskvich 5"
    ]
  },
  {
    "id": "car_127",
    "brand": "UAZ",
    "model": "Profi",
    "price": "1 600 000 ₽",
    "transmission": "Механика",
    "description": "Коммерческий пикап/фургон.",
    "country": "RUS",
    "engine": "2.7 л",
    "power": "150 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Пикап",
    "tags": [
      "уаз",
      "profi",
      "профи"
    ]
  },
  {
    "id": "car_128",
    "brand": "Sollers",
    "model": "Atlant",
    "price": "2 200 000 ₽",
    "transmission": "Механика / Автомат",
    "description": "Лёгкий коммерческий фургон.",
    "country": "RUS",
    "engine": "2.0 л",
    "power": "136 л.с.",
    "fuel": "ДТ",
    "bodyType": "Фургон",
    "tags": [
      "sollers",
      "соллерс",
      "atlant"
    ]
  },
  {
    "id": "car_129",
    "brand": "JAC",
    "model": "JS6",
    "price": "2 100 000 ₽",
    "transmission": "Робот",
    "description": "Компактный кроссовер, часто на рынке новых.",
    "country": "CHN",
    "engine": "1.5 л turbo",
    "power": "150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "jac",
      "джac",
      "js6"
    ]
  },
  {
    "id": "car_130",
    "brand": "GAC",
    "model": "GS8",
    "price": "3 800 000 ₽",
    "transmission": "Автомат",
    "description": "Большой 7-местный кроссовер.",
    "country": "CHN",
    "engine": "2.0 л turbo",
    "power": "231 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "gac",
      "гac",
      "gs8"
    ]
  },
  {
    "id": "car_131",
    "brand": "FAW",
    "model": "Bestune T77",
    "price": "1 950 000 ₽",
    "transmission": "Робот",
    "description": "Компактный кроссовер с выразительным дизайном.",
    "country": "CHN",
    "engine": "1.5 л turbo",
    "power": "160 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "faw",
      "bestune",
      "бестюн",
      "t77"
    ]
  },
  {
    "id": "car_132",
    "brand": "Evolute",
    "model": "i-Pro",
    "price": "2 500 000 ₽",
    "transmission": "Автомат",
    "description": "Российский электроседан (сборка).",
    "country": "RUS",
    "engine": "электро",
    "power": "163 л.с.",
    "fuel": "Электро",
    "bodyType": "Электромобили",
    "tags": [
      "evolute",
      "эволют",
      "i-pro"
    ]
  },
  {
    "id": "car_133",
    "brand": "Renault",
    "model": "Sandero",
    "price": "1 300 000 ₽",
    "transmission": "Механика / Автомат",
    "description": "Бюджетный хетчбэк, высокий спрос на вторичке.",
    "country": "ROU",
    "engine": "1.6 л",
    "power": "82–113 л.с.",
    "fuel": "АИ-92",
    "bodyType": "Хетчбэк",
    "tags": [
      "рено",
      "sandero",
      "сандеро"
    ]
  },
  {
    "id": "car_134",
    "brand": "Volkswagen",
    "model": "Jetta",
    "price": "2 000 000 ₽",
    "transmission": "Робот",
    "description": "Классический седан B/C.",
    "country": "DEU",
    "engine": "1.4–1.6 л",
    "power": "110–150 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Седан",
    "tags": [
      "фольксваген",
      "jetta",
      "джетта"
    ]
  },
  {
    "id": "car_135",
    "brand": "Honda",
    "model": "HR-V",
    "price": "2 800 000 ₽",
    "transmission": "CVT",
    "description": "Компактный кроссовер.",
    "country": "JPN",
    "engine": "1.5 л",
    "power": "131 л.с.",
    "fuel": "АИ-95",
    "bodyType": "Внедорожник / SUV",
    "tags": [
      "хонда",
      "hr-v",
      "hrv"
    ]
  }];

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
  flappyScores: {},
  leaderboardPeriod: 'month',
  goalsStore: {},
  diaryPeriod: 'day',
  goalsTab: 'my-goal',
  diaryFrom: '',
  diaryTo: '',
  rulesQuery: '',
  rulesCategory: '',
  rulesTag: '',
  ruleItemTags: {},
  rulesSource: 'general',
  rulesBlock: '',
  sharedPenalties: [],
  newbieGuide: null,
  newbieGroup: 'checklist',
  guestLoginEnabled: true,
  newbieQuery: '',
  newbieOpenId: '',
  refInfo: [],
  refInfoQuery: '',
  refInfoTag: '',
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
  otabotkiSource: 'own', // own | metodichka
  presence: {},
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
  try {
    if (typeof scheduleCloudExtrasSave === 'function') scheduleCloudExtrasSave();
  } catch (_) {}
}

/** Подтянуть extraUsers из облака (для списка входа на любом ПК) */
async function pullExtraUsersFromCloud() {
  try {
    if (typeof loadLocalSettings === 'function') loadLocalSettings();
  } catch (_) {}
  const url = (state.cloud && state.cloud.sheetsUrl || '').trim();
  if (!url || !url.includes('script.google.com')) return false;
  try {
    const res = await fetchWithTimeout(url, { method: 'GET' }, 25000);
    if (!res.ok) return false;
    const json = await res.json();
    const record = (json && (json.record || json)) || {};
    const ex = (record.extras && typeof record.extras === 'object') ? record.extras : record;
    const list = ex.extraUsers || record.extraUsers;
    if (!Array.isArray(list)) return false;
    loadExtraUsers();
    // мерж: облако — источник правды по именам; локальные только если в облаке пусто
    const byName = new Map();
    list.forEach(u => {
      if (u && u.name) byName.set(u.name, {
        name: u.name,
        passwordHash: u.passwordHash || '',
        role: u.role === 'view' ? 'view' : 'edit',
        createdAt: u.createdAt || Date.now()
      });
    });
    // не затираем локальных, которых ещё не успели залить (нет сети при сохранении)
    extraUsers.forEach(u => {
      if (u && u.name && !byName.has(u.name)) byName.set(u.name, u);
    });
    extraUsers = Array.from(byName.values());
    try { localStorage.setItem(EXTRA_USERS_KEY, JSON.stringify(extraUsers)); } catch (_) {}
    if (typeof window.__ECT_REFRESH_USERS === 'function') window.__ECT_REFRESH_USERS();
    return true;
  } catch (e) {
    console.warn('pullExtraUsersFromCloud', e);
    return false;
  }
}
window.__ECT_PULL_EXTRA_USERS = pullExtraUsersFromCloud;


function isAdminUser() {
  return state.currentUser === 'Александр';
}

const GUEST_ENABLED_KEY = 'ect_guest_login_enabled';

function isGuestLoginEnabled() {
  try {
    const v = localStorage.getItem(GUEST_ENABLED_KEY);
    if (v === '0' || v === 'false') return false;
  } catch (_) {}
  // из облака (state)
  if (state && state.guestLoginEnabled === false) return false;
  return true;
}

async function setGuestLoginEnabled(on) {
  const enabled = !!on;
  state.guestLoginEnabled = enabled;
  try { localStorage.setItem(GUEST_ENABLED_KEY, enabled ? '1' : '0'); } catch (_) {}
  try { if (typeof window.__ECT_UPDATE_GUEST_BTN === 'function') window.__ECT_UPDATE_GUEST_BTN(); } catch (_) {}

  // Отдельный лёгкий запрос — не зависит от полного cloudSave
  const url = (state.cloud && state.cloud.sheetsUrl || '').trim();
  if (!url || !url.includes('script.google.com')) {
    toast('Облако не подключено — флаг сохранён только на этом устройстве', 'error');
    return false;
  }
  try {
    const posted = await postSheets(url, { op: 'setGuestFlag', enabled: enabled }, 20000);
    if (posted && posted.json && posted.json.ok) {
      toast(enabled ? 'Гостевой вход включён (облако)' : 'Гостевой вход отключён (облако)');
      return true;
    }
    // fallback: saveExtras
    const extras = typeof buildCloudExtras === 'function' ? buildCloudExtras() : { guestLoginEnabled: enabled };
    extras.guestLoginEnabled = enabled;
    const fb = await postSheets(url, { op: 'saveExtras', extras: extras, guestLoginEnabled: enabled, updatedAt: Date.now() }, 30000);
    if (fb && fb.json && fb.json.ok) {
      toast(enabled ? 'Гостевой вход включён (облако)' : 'Гостевой вход отключён (облако)');
      return true;
    }
    toast('Не удалось записать в облако. Проверьте развёртывание Apps Script.', 'error');
    return false;
  } catch (e) {
    console.warn('setGuestLoginEnabled', e);
    toast('Ошибка записи в облако: ' + (e && e.message ? e.message : e), 'error');
    return false;
  }
}

function isGuestUser(name) {
  const who = name || state.currentUser || '';
  if (!who) return false;
  if (String(who).indexOf('Гость:') === 0) return true;
  try {
    if (sessionStorage.getItem('ect_is_guest_v1') === '1' && who === sessionStorage.getItem('ect_team_session_v1')) return true;
  } catch (_) {}
  return false;
}

window.__ECT_GUEST_ENABLED = isGuestLoginEnabled;


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

/* ========== Гибкие права пользователей ========== */
const PAGE_PERM_DEFS = [
  { key: 'home', label: 'Главная' },
  { key: 'scripts', label: 'Скрипты' },
  { key: 'otabotki', label: 'Отработки' },
  { key: 'catalog', label: 'Автокаталог' },
  { key: 'calls', label: 'Звонки' },
  { key: 'rules', label: 'Правила' },
  { key: 'refinfo', label: 'Справка' },
  { key: 'newbie', label: 'Новичкам / Памятка' },
  { key: 'goals', label: 'Цель / дневник' },
  { key: 'leaderboard', label: 'Лидерборд' },
  { key: 'settings', label: 'Настройки' },
  { key: 'games', label: 'Игры (Flappy)' },
  { key: 'admin', label: 'Админ-панель' }
];

const ACTION_PERM_DEFS = [
  { key: 'editScripts', label: 'Редактировать скрипты' },
  { key: 'editOtabotki', label: 'Редактировать отработки' },
  { key: 'editCatalog', label: 'Редактировать автокаталог' },
  { key: 'addCalls', label: 'Добавлять / менять звонки' },
  { key: 'editRules', label: 'Редактировать правила (свои штрафы)' },
  { key: 'editRefinfo', label: 'Редактировать справку' },
  { key: 'editNewbie', label: 'Редактировать памятку новичка' },
  { key: 'useGoals', label: 'Свои цели' },
  { key: 'useDiary', label: 'Свой дневник смен' },
  { key: 'viewTeamGoals', label: 'Цели команды' },
  { key: 'viewTeamDiaries', label: 'Дневники команды' },
  { key: 'manageUsers', label: 'Управление участниками и правами' }
];

const USER_PERMS_KEY = 'ect_user_perms_v1';

function allTruePerms() {
  const pages = {};
  PAGE_PERM_DEFS.forEach(p => { pages[p.key] = true; });
  const actions = {};
  ACTION_PERM_DEFS.forEach(a => { actions[a.key] = true; });
  return { pages, actions };
}

function defaultPermsFor(name) {
  if (name === 'Александр') return allTruePerms();
  if (name && String(name).indexOf('Гость:') === 0) {
    const pages = {};
    PAGE_PERM_DEFS.forEach(p => {
      pages[p.key] = ['home','scripts','otabotki','catalog','calls','rules','refinfo','games','newbie'].includes(p.key);
    });
    pages.goals = false;
    pages.leaderboard = false;
    pages.settings = true; // тема
    pages.admin = false;
    const actions = {};
    ACTION_PERM_DEFS.forEach(a => { actions[a.key] = false; });
    return { pages, actions };
  }

  const pages = {};
  PAGE_PERM_DEFS.forEach(p => {
    // базовый просмотр контента
    pages[p.key] = ['home','scripts','otabotki','catalog','calls','rules','refinfo','games'].includes(p.key);
  });
  pages.goals = false;
  pages.leaderboard = false;
  pages.settings = false;
  // Памятка новичка: по умолчанию видна «Общей» и view; у опытных редакторов скрыта
  pages.newbie = false;

  const actions = {};
  ACTION_PERM_DEFS.forEach(a => { actions[a.key] = false; });

  if (name === 'Общая' || getUserRole(name) === 'view') {
    pages.newbie = true;
    return { pages, actions };
  }

  // системные редакторы / extra с role=edit
  if (TEAM_USERS[name] || getUserRole(name) === 'edit') {
    pages.goals = true;
    pages.leaderboard = true;
    pages.newbie = false; // опытные могут включить себе в правах
    actions.editScripts = true;
    actions.editOtabotki = true;
    actions.editCatalog = true;
    actions.addCalls = true;
    actions.editRules = true;
    actions.editRefinfo = true;
    actions.useGoals = true;
    actions.useDiary = true;
  }
  return { pages, actions };
}

function loadUserPermsStore() {
  if (!state.userPerms || typeof state.userPerms !== 'object') {
    try {
      const raw = localStorage.getItem(USER_PERMS_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (p && typeof p === 'object') state.userPerms = p;
      }
    } catch (_) {}
  }
  if (!state.userPerms || typeof state.userPerms !== 'object') state.userPerms = {};
}

function persistUserPermsStore() {
  try { localStorage.setItem(USER_PERMS_KEY, JSON.stringify(state.userPerms || {})); } catch (_) {}
  try { if (typeof scheduleCloudExtrasSave === 'function') scheduleCloudExtrasSave(); } catch (_) {}
}

function mergePerms(base, override) {
  const out = {
    pages: { ...(base.pages || {}) },
    actions: { ...(base.actions || {}) }
  };
  if (override && typeof override === 'object') {
    if (override.pages && typeof override.pages === 'object') {
      Object.keys(override.pages).forEach(k => { out.pages[k] = !!override.pages[k]; });
    }
    if (override.actions && typeof override.actions === 'object') {
      Object.keys(override.actions).forEach(k => { out.actions[k] = !!override.actions[k]; });
    }
  }
  return out;
}

function getUserPerms(name) {
  const who = name || state.currentUser || '';
  if (!who) return defaultPermsFor('');
  loadUserPermsStore();
  const base = defaultPermsFor(who);
  // Админ всегда полный доступ
  if (who === 'Александр') return allTruePerms();
  return mergePerms(base, state.userPerms[who]);
}

function setUserPerms(name, perms) {
  if (!name || name === 'Александр') return;
  loadUserPermsStore();
  state.userPerms[name] = {
    pages: { ...(perms.pages || {}) },
    actions: { ...(perms.actions || {}) }
  };
  persistUserPermsStore();
}

function canViewPage(page) {
  if (!state.currentUser) return false;
  const key = page === 'script' ? 'scripts' : page;
  if (key === 'admin') return isAdminUser();
  if (state.currentUser === 'Александр') return true;
  const perms = getUserPerms(state.currentUser);
  if (key === 'games') return !!perms.pages.games;
  // Памятку видят по флагу страницы; редакторы с editNewbie тоже (чтобы править)
  if (key === 'newbie') {
    return !!(perms.pages && perms.pages.newbie) || !!(perms.actions && perms.actions.editNewbie);
  }
  return !!perms.pages[key];
}

function canDo(action) {
  if (!state.currentUser) return false;
  if (state.currentUser === 'Александр') return true;
  const perms = getUserPerms(state.currentUser);
  return !!(perms.actions && perms.actions[action]);
}

function canEdit() {
  if (!state.currentUser) return false;
  if (typeof isGuestUser === 'function' && isGuestUser()) return false;
  if (state.currentUser === 'Александр') return true;
  // legacy: любой edit-* даёт «редактор» для старых проверок
  return canDo('editScripts') || canDo('editOtabotki') || canDo('editCatalog') ||
    canDo('editRules') || canDo('editRefinfo') || canDo('editNewbie') || canDo('addCalls');
}

function isCommonAccount() {
  if (!state.currentUser) return true;
  if (typeof isGuestUser === 'function' && isGuestUser()) return true;
  if (state.currentUser === 'Александр') return false;
  return !canEdit();
}

function canSeeLeaderboard() {
  return canViewPage('leaderboard') || canDo('viewTeamGoals');
}

function applyAccountPermissions() {
  const user = state.currentUser || '';
  const adminOnly = isAdminUser();
  PAGE_PERM_DEFS.forEach(p => {
    document.querySelectorAll('.nav-item[data-page="' + p.key + '"]').forEach(el => {
      let ok = canViewPage(p.key);
      if (p.key === 'admin') ok = adminOnly;
      el.hidden = !ok;
      if (p.key === 'admin' && !adminOnly) {
        el.style.display = 'none';
        el.setAttribute('hidden', '');
      } else if (p.key === 'admin' && adminOnly) {
        el.style.display = '';
        el.removeAttribute('hidden');
        el.hidden = false;
      }
    });
  });

  // на всякий случай прячем все ссылки на admin
  if (!adminOnly) {
    document.querySelectorAll('[data-page="admin"]').forEach(el => {
      el.hidden = true;
      el.style.display = 'none';
    });
  }

  const exportBtn = document.getElementById('exportData');
  const importBtn = document.getElementById('importData');
  if (exportBtn) exportBtn.hidden = !canDo('editScripts');
  if (importBtn) importBtn.hidden = !canDo('editScripts');

  const addBtn = document.getElementById('addScriptBtn');
  if (addBtn) addBtn.hidden = !canDo('editScripts');

  const flappyBtn = document.getElementById('flappyBirdBtn');
  if (flappyBtn) flappyBtn.hidden = !canViewPage('games');

  const badge = document.getElementById('currentUserBadge');
  if (badge) badge.textContent = user ? ('👤 ' + user) : '';
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
  try { startPresenceHeartbeat(); } catch (_) {}
  const login = document.getElementById('loginScreen');
  const appRoot = document.getElementById('app');
  if (login) {
    login.hidden = true;
    login.setAttribute('hidden', '');
    login.style.display = 'none';
  }
  if (appRoot) {
    appRoot.hidden = false;
    appRoot.removeAttribute('hidden');
    appRoot.style.display = 'flex';
  }
  applyAccountPermissions();
  if (isCommonAccount() && (state.currentPage === 'goals' || state.currentPage === 'settings')) {
    state.currentPage = 'home';
  }
}

function logout() {
  try {
    sessionStorage.removeItem('ect_is_guest_v1');
    sessionStorage.removeItem('ect_guest_name_v1');
  } catch (_) {}
  try { stopAutoSync(); } catch (_) {}
  safeSessionRemove(LOGIN_SESSION_KEY);
  state.currentUser = '';
  state.currentPage = 'home';
  const appRoot = document.getElementById('app');
  const login = document.getElementById('loginScreen');
  if (appRoot) {
    appRoot.hidden = true;
    appRoot.setAttribute('hidden', '');
    appRoot.style.display = 'none';
  }
  const guestModal = document.getElementById('guestModal');
  if (guestModal) {
    guestModal.hidden = true;
    guestModal.setAttribute('hidden', '');
    guestModal.style.display = 'none';
  }
  if (login) {
    login.hidden = false;
    login.removeAttribute('hidden');
    login.style.display = 'flex';
    const password = document.getElementById('loginPassword');
    const error = document.getElementById('loginError');
    const userSel = document.getElementById('loginUser');
    if (password) password.value = '';
    if (error) error.textContent = '';
    if (userSel) userSel.selectedIndex = 0;
    setTimeout(() => {
      try { (password || userSel)?.focus(); } catch (_) {}
    }, 50);
  }
  // сброс кнопки входа если зависла
  const btn = document.getElementById('loginButton');
  if (btn) { btn.disabled = false; btn.textContent = 'Войти'; }
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
  loadRefInfo();
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
    if (remote && applyCloudRecord(remote)) {
      try {
        render();
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

const DEFAULT_METODICHKA_OTABOTKI = [
  {"id": "metod_01", "title": "ОТКУДА ВЗЯЛИ МОЙ НОМЕР? ОТКУДА МОИ ЛИЧНЫЕ ДАННЫЕ?", "text": "Ответ оператора на вопрос «Откуда взяли мой номер?».\nОтвет и вопрос по теме:\n1) «Интересовались ассортиментом по сайту, поэтому позвонили\nуточнить, какая марка вам на будущее приглянулась или под\nкакой-то бюджет подбираете?»\n(или другой подходящий вопрос по скрипту)\n\n2) «Вы заходили на сайт нашего Автоцентра, вероятно просматривали\nассортимент или подбирали себе авто, звоним Вам с целью уточнить,\nпомочь с выбором, подскажите пожалуйста …»\n(и следом задаём подходящий вопрос по скрипту)\n\n3) «Вы заходили на сайт, смотрели информацию. У нас сейчас новые\nсезонные предложения, на сайте еще не обновилось. Поэтому\nзвоним напрямую. Поэтому звоним напрямую, подскажите\nпожалуйста…» (и вопрос из скрипта по технике/услуге/и т.д.)\n\nОтвет оператора на вопрос «Откуда у вас мои личные\nданные?»\nОтвет и вопрос по теме:\n«Никаких личных данных о клиенте у нас нет, кроме номера\nтелефона, и я звоню с целью уточнить актуальность покупки, а не\nнавязывать. Актуально ли для вас приобретение …» (и следом\nзадаём подходящий вопрос по скрипту)\n\n*Если клиент повторяет этот же вопрос более двух раз - прощайтесь.\nОн не хочет услышать ответ, он хочет с вами поругаться. Не теряйте\nвремя", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_02", "title": "КАКИЕ У ВАС АВТОМОБИЛИ? ЧТО МОЖЕТЕ ПРЕДЛОЖИТЬ?", "text": "Ответ и вопрос по теме:\n1) «У нас мультибрендовый автосалон, в котором есть наличие как\nроссийского автопрома, так и иномарок. Подскажите, вас какая-то\nопределенная марка машин интересует или выбираете под\nбюджет?»\n\n2) «У нас большой выбор автомобилей. В наличии имеется\nотечественный автопром и также иномарки, китайцы, корейцы,\nевропейцы.\nПодскажите, вас какая-то определенная марка машин интересует\nили выбираете под бюджет?»\n\n(После ответа от клиента)\n«А какой автомобиль вы рассматриваете? \"Новый\" или с\n\"пробегом\"?»", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_03", "title": "КАКИЕ У ВАС ЦЕНЫ?", "text": "Ответ и вопрос по теме:\n1) «Стоимость на автомобили с пробегом стартуют от 350 тыс., всё\nтакже зависит от модели авто и комплектации/Стоимость кухни\nзависит от размеров и комплектующих.\nПодскажите, а в каком бюджете вы рассматриваете\nавтомобиль\\кухню?»\n\n2) «Стоимость на новые автомобили стартует от 600 тыс., всё\nтакже зависит от модели авто и комплектации.\nПодскажите, а в каком бюджете вы рассматриваете автомобиль?»\n\n3) (При вопросе о цене можно изначально уточнить)\n«Какой бюджет рассматриваете, от чего отталкиваетесь?»\n\n4) (Если клиент давит вопросами о цене автомобиля, который его интересует)\n«Да, *имя клиента*, уже сделал запрос специалисту по \"Volkswagen Passat\",\nпока ждем информацию, позвольте уточнить детали. Подскажите, ...?»\n\n(не делаем паузу после этой фразы, сразу задаем следующий вопрос)", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_04", "title": "ЕСЛИ СПРАШИВАЕТ КОНКРЕТНЫЙ АВТОМОБИЛЬ", "text": "Ответ и вопрос по теме:\n1) «Автомобили данного класса имеются в наличии.\nПравильно понимаю, что вы конкретно данную марку\nрассматриваете? Или возможно есть ещё предпочтения по\nмаркам?»\n\n2) (Откладываем его вопрос)\n«Понял вас, сейчас уточню по наличию, стоимости и сообщу вам»\n(И продолжаем дальше идти по скрипту)\n\n3) «Запрос отправил специалисту — в течение минуты даст ответ по\nцене и по наличию. Подскажите, ...?» (Далее задаём подходящий\nвопрос по скрипту)\n\n*Таким способом откладываем вопрос на потом и задаем сразу\nвопрос из скрипта", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_05", "title": "ПОЧЕМУ У ВАС НОМЕР МОСКОВСКИЙ?", "text": "Ответ и вопрос по теме:\n«У нас корпоративная телефония. Я нахожусь в *название города по\nскрипту*. Подскажите, …?»\n(Говорите город, какой указан в скрипте и далее просто переводите\nего на любой следующий вопрос по скрипту)", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_06", "title": "ЕСЛИ СПРАШИВАЕТ КАКИЕ ЕСТЬ АКЦИИ?", "text": "Ответ и вопрос по теме:\n«Все зависит от автомобиля и комплектации на него, более детально\nв дальнейшем сориентирует наш специалист автосалона бесплатно.\nПодскажите, ...?»\n(Далее переводите на любой вопрос по скрипту)", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_07", "title": "ЗАЧЕМ ВАМ ЗНАТЬ ГДЕ Я НАХОЖУСЬ?", "text": "Ответ и вопрос по теме:\n«Наш Автоцентр находится в Москве, нам важно знать, в каком\nгороде или регионе вы территориально находитесь, а также\nпонимать удобно ли вам приехать в наш АЦ в течение ближайших 7\nдней с целью подбора авто. Поэтому уточняю, тоже в Москве\nнаходитесь, как и мы, верно?»", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_08", "title": "ОТКУДА ВЫ ЗВОНИТЕ?", "text": "Ответ и вопрос по теме:\n1) «Я звоню вам из автосалона *название АЦ по скрипту*.\nПодскажите, ...?»\n(Проговариваете название автосалона, который находится в строке\nпроект)\n\n2) «Я звоню вам из города *название города по скрипту*. Подскажите,\n...?»\n(Проговариваете город, который находится в строке проект)\n*Ни в коем случае вы не говорите тот город, в котором находитесь\nсами", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_09", "title": "ПОЧЕМУ У ВАС ЦЕНЫ ТАКИЕ НИЗКИЕ?", "text": "Ответ и вопрос по теме:\n«Цены действительно реальны, все зависит от модели и\nкомплектации авто,\nкоторый вы выбираете. Также эта цена указана с учетом\nавтокредитования.\nПодскажите, ...?»\n(Далее просто переводите его на любой следующий вопрос по скрипту)", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_10", "title": "ПОЧЕМУ ТАКИЕ СРОКИ ПО ПОКУПКЕ АВТО — ВСЕГО МЕСЯЦ?", "text": "Ответ и вопрос по теме:\n1) Просто предлагаем ознакомиться с предложением, сравнить цены.\nИ если вам понравятся условия, то рассмотрите к покупке в течение 30 дней?\n\n2) Потому что машины быстро раскупают и, исходя из вашего\nвыбора, сможем поставить бронь на автомобиль в такие сроки, если\nэто будет наилучшее предложение, тогда рассмотрите покупку\nавтомобиля в течение 30 дней?", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_11", "title": "КАКИМ ОБРАЗОМ МОЙ НОМЕР УЗНАЛИ, ДАЖЕ ЕСЛИ ЗАХОДИЛ — ДАННЫЕ НЕ ОСТАВЛЯЛ?", "text": "Ответ и вопрос по теме:\n1) Ваших данных у нас нету, сайта пришла пустая заявка, поэтому\nхочу уточнить, вы что-то определённое искали или пока под бюджет\nподстраиваетесь?\n\n\n2) В заявке отображается только ваш номер, более никаких\nданных, можете не переживать. Подскажите, какую-то марку для\nсебя смотрели?", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_12", "title": "А КАКОЙ У ВАС АДРЕС «ПАРТНЕРСКАЯ КОМПАНИЯ АВТО.РУ?»", "text": "Ответ и вопрос по теме:\n«У нас большая сеть автосалонов по *название города по\nскрипту*.\nПосле нашего разговора, с вами свяжется менеджер\nи сориентирует по ближайшему автосалону к вам в целях вашего\nудобства. Подскажите, ...?»\n(Далее просто переводите его на любой следующий вопрос по скрипту)\n\n\nВОЗРАЖЕНИЕ — это отказ клиента. Когда клиент отказывается\nот любых действий, связанных с покупкой.\n(Например, отказ разговаривать с нами, отказ на контакт с менеджером и т. д.)\n\nАлгоритм работы с возражениями клиентов:\n\n1. Выяснить причину отказа.\n2. Аргументировать исходя из ответа клиента\n3. Задать вопрос по скрипту, подходящий под тему возражения.\n\n    Примеры ВОЗРАЖЕНИЙ и ответы на них", "categories": ["Вопросы", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_13", "title": "Я САМ ПРИЕДУ И ВСЁ ПОСМОТРЮ", "text": "Оператор (выяснение причины отказа):\n«Подскажите, пожалуйста, может быть, вас что-то смущает?»\n\nКлиент: «Я хочу сам съездить и посмотреть в живую, договорится\nобо всем лично с менеджером.»\n\nОтвет оператора (аргументация и вопрос по теме):\n\n«Зачем вам тратить свое драгоценное время на\nбессмысленные поездки, когда наш специалист может\nабсолютно бесплатно\nпроконсультировать вас по наличию и по ценам, и после этого уже\nбудете отталкиваться и принимать решение. Подскажите, в какое\nвремя вам будет удобно принять его звонок?» *\n\n*только если это есть в скрипте.", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_14", "title": "Я НЕ БУДУ ПОКУПАТЬ В КРЕДИТ", "text": "Оператор (выяснение причины отказа):\n«Могу узнать у вас причину, почему вы не рассматриваете кредит?»\n\nКлиент: «Вы мне добавите много лишнего».\n\nОператор (аргументация):\n1) «Перед покупкой вы всегда можете ознакомиться с условиями кредита.\nЕсли наши условия будут для вас выгодными и вас все устроит,\nв таком случае готовы были бы рассмотреть покупку в кредит\nлибо в частичное кредитование?»\n\n2) «На данный момент в нашем Автоцентре предоставлена\nвозможность покупки авто только путем кредитования, именно в\nданном случае вы сможете получить от нас предложения,\nкоторые смогут вас заинтересовать. Если наши условия будут для\nвас выгодными и вас все устроит, в таком случае готовы были бы\nрассмотреть покупку в кредит или в частичное кредитование?»\n\n(Если да: идем — дальше по скрипту. Если нет — уточняем причину?)\n\nКлиент: «Боюсь, что ставка будет большой, вы все так говорите,\nа по итогу приезжаешь и все не так как вы говорили.»\n\nОператор: «Напоминаю, что изначально вас ознакомят с условиями\nкредита и покупки, также наш специалист вам все проговорит\nзаранее и ответит на все ваши вопросы. И если вас по итогу все\nустроит, и мы вас заинтересуем, готовы рассмотреть такой способ\nоплаты?»\n\n3) *Имя клиента*, уточню последний момент, в случае если для вас\nбудет подходящий вариант по ежемесячному платежу, то в таком\nслучае рассмотрели бы кредитование или частичное кредитование,\nтолько если сами убедитесь в том, что это выгодно для вас, верно,\n*имя клиента*?", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_15", "title": "НЕТ, НЕ НАДО ПЕРЕЗВАНИВАТЬ, Я ВАМ САМ НАБЕРУ", "text": "Оператор (выяснение причины отказа):\n«Подскажите, пожалуйста, может быть, вас что-то смущает?»\n\nКлиент: «Да нет, но я собираюсь если и покупать квартиру,\nто где-то через месяца два-три».\n\nОтвет оператора (аргументация):\n\n«Согласен, покупка должна быть обдуманной. При этом я вас хочу\nсоединить с менеджером в том числе для того, чтобы вы сначала\nмогли ознакомиться с вариантом и только потом принять решение.\nПодскажите, если вас всё устроит в какое время будет удобно\nпринять звонок менеджера?» *\n\n* если это есть в скрипте. Ориентируемся на скрипт!", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_16", "title": "БОИТСЯ МОШЕННИКОВ ИЛИ СОМНЕВАЕТСЯ В ЧЕСТНОСТИ ВАШЕГО РАЗГОВОРА", "text": "Оператор (выяснение причины отказа):\n«Могу уточнить, из-за чего у вас сложилось такое впечатление?»\n\nКлиент: «Звоните мне с московского номера, что-то спрашиваете,\nобманете ещё».\n\nОператор (аргументация):\n1) «Я ни в коем случае вас не обманываю и не ввожу в заблуждение, вы\nможете ознакомиться с нашими ценами и наличием авто на нашем\nсайте или же приехать в автосалон и убедиться в этом сами.\nПодскажите, приобретение автомобиля актуально для вас?»\n\n2) «Не переживайте ваших личных данных у нас нет, я лишь\nхочу рассказать о наших условиях. И если вам понравится,\nвы сами уже будете решать сотрудничать с нами или нет.\nДавайте расскажем о себе, а вы уже подумаете, хорошо?»\n\n(Если клиент далее просить рассказать об условиях, говорим):\n«Позвольте изначально уточнить несколько деталей, а далее наш\nспециалист свяжется с вами и подробно все расскажет и\nответит на все ваши вопросы, хорошо?»", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_17", "title": "КЛИЕНТ ДАЛ РАЗМЫТЫЙ ОТВЕТ: «ПОДУМАЮ, ВОЗМОЖНО, НАДО ПОРАЗМЫСЛИТЬ»", "text": "Оператор (выяснение причины отказа):\n«Подскажите, пожалуйста, может быть, вас что-то смущает?»\n\nКлиент: «Ну, конечно, я не знаю какие у вас цены, если именно та\nмарка автомобиля, которая меня интересует.»\n\nОператор (аргументация):\n«Услышал вас. Подскажите, если менеджер проконсультирует вас\nпо всем вашим вопросам, подберет именно тот автомобиль,\nкоторый подходит и по комплектации, и по стоимости, в таком случае,\nвы готовы рассмотреть покупку в течение 30 дней\\ приобретение\nавто путем кредитования\\ готовы приехать в течение 7 дней? *\n\n* в зависимости от вопроса, который вы задали заранее", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_18", "title": "КЛИЕНТ ОТКАЗЫВАЕТСЯ РАССМОТРЕТЬ ПОКУПКУ В ТЕЧЕНИЕ 30 ДНЕЙ", "text": "Оператор (выяснение причины отказа):\n«Почему?»\n(т. к. чаще всего клиент сам называет причину, почему он отказывается,\nи вы можете эту причину переформулировать и задать вопрос\nв нужном вам формате).\n\nКлиент: «Потому что еще не уверен в покупке и вообще не знаю, когда\nсмогу его купить»\n\nОператор (аргументация и вопрос по теме):\n«С вами в любом случае предварительно свяжется специалист и\nдетально все вам расскажет, по наличию по ценам и по всем условиям.\nИ если в таком порядке вас все устроит и все условия будут вам\nподходить, готовы были бы рассмотреть покупку в течении 30 дней?»\n\n*Т.е. важно дать понимание клиенту, что мы его ни к чему не\nпринуждаем, а всего лишь уточняем о возможности покупки в рамках\nтого срока, который установлен в скрипте и объясняем, что по\nналичию, цене и по всем вопросам клиента изначально\nпроконсультирует Специалист (Менеджер) автосалона.\n\nАльтернативные аргументации с вопросами по теме:\n2) «Если вас все устроит по цене, по автомобилю и когда вы приедете в\nавтосалон и сами во всем убедитесь. В таком случае готовы были бы\nрассмотреть покупку в течение 30 дней?»\n\n3) А если наш менеджер подберет для вас такой автомобиль, который вас\nустроит по всем параметрам и, что очень важно, по стоимости, то в таком\nслучае рассмотрели бы приобретение автомобиля в течение 30 дней\"\n\n4) *Имя клиента*, сами понимаете, цены из месяца в месяц меняются,\nпоэтому предлагаю вам ознакомиться с нашим ассортиментом авто\nи ценовой категорией, возможно, мы вас заинтересуем.\n(далее БЕЗ паузы задаём вопрос)\nВ целом, рассмотрели бы покупку автомобиля в течение месяца,\nтолько если сами убедитесь, что это выгодно для вас, правильно\nпонимаю?»", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_19", "title": "Я НЕ ПЛАНИРУЮ ПОКУПКУ АВТО", "text": "Оператор: «Возможно рассматриваете такую покупку на\nближайшее будущее, или не можете определиться с выбором, наш\nменеджер\nсможет вам в этом помочь и подобрать для вас авто, подходящее, как\nпо ценовой политике, так и техническим характеристикам.\nПодскажите, пожалуйста, как я могу к вам обращаться? Меня *имя оператора*\nзовут».", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_20", "title": "КЛИЕНТ ОТКАЗЫВАЕТСЯ НАЗЫВАТЬ СВОЁ ИМЯ", "text": "Оператор (выяснение причины отказа):\n«Подскажите, возможно, вас что-то смущает?»\n\nКлиент: «Да зачем вам моё имя, не понимаю вообще»\n\nОператор (аргументация): «Я вас понимаю, но мы дорожим\nрепутацией нашей компании и очень ценим ваше доверие к нам и для\nэтого всего лишь уточняем имя нашего клиента для дальнейшей\nкоммуникации с нашим специалистом подскажите, как вас лучше\nпредставить нашему менеджеру?»\n\n(Если в начале диалога отказывается называть имя, то продолжаем вести\nдиалог по скрипту, задаем все вопросы)\n\nПосле того, как мы задали все вопросы и клиент полностью актуален (но мы\nвсе еще не знаем его имя) проговариваем фразу завершения диалога:\n\nОператор: «Отлично, тогда я передаю Ваш контакт менеджеру автосалона, он\nсвяжется с Вами и сориентирует по автомобилям в наличии в ...»\n(проговариваем время из скрипта)\n\nИ после того, как клиент согласился на звонок уточняем:\n«Подскажите, как я могу представить вас специалисту?»\n\n(Если не называет или говорит: \"Мой господин» и т.д. - не актуально;\nЕсли клиент так и не называет своё настоящее имя, такую заявку\nв успешно мы передать не можем)", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_21", "title": "ОТКАЗ ОТ ПРИЕЗДА", "text": "Оператор: «Не переживайте, с вами изначально свяжется менеджер\nпо телефону, ответит на ваши вопросы, подробно расскажет про условия,\nа там уже будете принимать решения, и, если вас полностью всё устроит,\nготовы приехать за подбором автомобиля в течение 7/14 дней чтобы вживую\nпосмотреть на него?»", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_22", "title": "ВЫ МНЕ УЖЕ 20 РАЗ ПОЗВОНИЛИ!", "text": "Оператор (вопрос на уточнение):\n«Подскажите пожалуйста, а из какой компании?»\n\nКлиент: *называет другую/не помнит*\n\nОператор (аргументация): «Так мы из другой компании звоним.\nКак минимум предлагаю сравнить цены по нашим автомобилям,\nвозможно, именно наши условия вам понравятся больше.\nПодскажите, ...?»\n\n(Далее просто переводите его на любой следующий вопрос по скрипту)", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_23", "title": "Я УЖЕ КУПИЛ", "text": "Оператор: «Подскажите, купили новый автомобиль или с пробегом?»\n\nОператор (вопрос на уточнение):\nА подскажите как давно приобрели? Больше полугода?\n\n1) Если купил НОВЫЙ – спрашиваем: «Как давно приобрели?».\n\nа) Если меньше полугода, то уточняем: «Возможно для родных\nприсматриваете?».\n\nб) Если более полугода, то предлагаем трейд-ин:\n\n«Давайте рассмотрим обмен (Трейд-ин) вашего автомобиля на более новый,\nуверен, подберем для вас отличный вариант! (далее без пауз задаём вопрос)\nПодскажите к Вам как могу обращаться?» (аргумент и вопрос по теме).\n\n2) Если купил с ПРОБЕГОМ, сразу можем предложить трейд-ин:\n\n«А давайте мы вам предложим Новые авто в Трэйд-ин, чтобы вы были первым и\nединственным владельцем! Оценим ваше авто, рассчитаем условия, если вам\nпонравится, рассмотрите обмен, подскажите какая модель заинтересовала?»\n(Аргумент и вопрос по теме).", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_24", "title": "Я УЖЕ ВСЕ УЗНАЛ/ВИДЕЛ НА САЙТЕ", "text": "Оператор: А в какой компании смотрели?\n\nКлиент: *называет другую/не помнит*\n\nОператор: «Так мы из другой компании. Как минимум предлагаю сравнить\nнаш ассортимент и ценовую политику, а в дальнейшем будете\nуже принимать решение, где для вас более выгодное предложение»\n\nОператор (если в нашу компанию):\n«У нас сейчас начало/конец сезона, поэтому действуют новые условия,\nкоторых нет на сайте. Давайте вам расскажем, вдруг они вам понравятся,\nхорошо?»", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_25", "title": "Я РАБОТАЮ ТОЛЬКО С ОФИЦИАЛЬНЫМИ ДИЛЕРАМИ", "text": "Оператор: «Я вас понимаю, но официальные дилеры завышают цены,\nможете рассмотреть наш вариант как альтернативу, если вас заинтересует\nпредложение, то так понимаю, рассмотрели бы и наши варианты.\nПодскажите, какая марка интересует?»", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
  {"id": "metod_26", "title": "МНЕ НЕКОГДА ГОВОРИТЬ", "text": "(Важно: не вступаем в спор, а сразу соглашаемся)\nОператор: «Хорошо, вам во сколько перезвонить?\n\n*Клиент говорит время и далее уточняем, если клиент ещё имя не назвал:\n\nОператор: «И как вас менеджеру могу представить?»\n\n*Клиент говорит имя и далее кратко в формате утверждения задаем оставшиеся\nвопросы, чтобы клиент мог с нами соглашаться и долго не задерживаться в\nдиалоге, например:\n\nОператор: «Перезвоним тогда позже, только пару моментов уточню, вы тоже в\n\"Москве\" находитесь, как и мы, верно?»", "categories": ["Возражения", "Методичка"], "children": [], "updatedAt": 0, "source": "metodichka"},
];


function seedMetodichkaOtabotki() {
  if (!Array.isArray(state.sharedOtabotki)) state.sharedOtabotki = [];
  if (typeof DEFAULT_METODICHKA_OTABOTKI === 'undefined' || !DEFAULT_METODICHKA_OTABOTKI.length) return;
  const byId = new Map(state.sharedOtabotki.map(o => [o.id, o]));
  let added = 0;
  for (const item of DEFAULT_METODICHKA_OTABOTKI) {
    if (!item || !item.id) continue;
    if (byId.has(item.id)) {
      // обновить текст из методички, если запись «системная»
      const ex = byId.get(item.id);
      if (ex.source === 'metodichka' || (ex.categories || []).includes('Методичка')) {
        ex.title = item.title;
        ex.text = item.text;
        ex.categories = item.categories.slice();
        ex.source = 'metodichka';
      }
      continue;
    }
    const entry = {
      id: item.id,
      title: item.title,
      text: item.text || '',
      categories: (item.categories || []).slice(),
      children: [],
      updatedAt: Date.now(),
      source: 'metodichka'
    };
    state.sharedOtabotki.push(entry);
    byId.set(entry.id, entry);
    added++;
  }
  if (added) {
    try { saveLocalScripts(); } catch (_) {}
  }
}

function ensureOtabotkiModel() {
  migrateOtabotkiToLibrary();
  try { seedMetodichkaOtabotki(); } catch (e) { console.warn('seed metodichka', e); }
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
  const timer = setTimeout(() => {
    try { ctrl.abort(new DOMException('timeout ' + ms + 'ms', 'AbortError')); } catch (_) {
      try { ctrl.abort(); } catch (__) {}
    }
  }, ms);
  try {
    return await fetch(url, { ...options, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

function isAbortError(e) {
  if (!e) return false;
  if (e.name === 'AbortError') return true;
  const msg = String(e.message || e);
  return /aborted|timeout|AbortError/i.test(msg);
}

async function cloudFetchOnce(url, opts) {
  // Сначала лёгкий meta (updatedAt) — не качаем весь JSON зря
  try {
    const metaRes = await fetchWithTimeout(url + (url.includes('?') ? '&' : '?') + 'op=meta', { method: 'GET' }, 12000);
    if (metaRes.ok) {
      const meta = await metaRes.json();
      const remoteAt = Number(meta && meta.updatedAt) || 0;
      const localAt = Number(state.cloud.lastRemoteUpdatedAt) || 0;
      if (remoteAt && localAt && remoteAt <= localAt && !(opts && opts.force)) {
        return { skip: true, remoteAt };
      }
    }
  } catch (_) { /* meta опционален */ }

  // Полная выгрузка: Apps Script иногда отвечает 20–40 с при большой таблице
  const res = await fetchWithTimeout(url, { method: 'GET' }, 55000);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const json = await res.json();
  if (json && json.error) throw new Error(json.error);
  const record = json.record || json;
  return { record };
}

async function cloudFetch(opts) {
  if (!state.cloud.enabled) return null;
  const quiet = opts && opts.quiet;
  const force = opts && opts.force;
  // Не перетираем локальные правки, которые только что ушли в облако
  // (ручной «Синхронизировать» с force — всегда читаем)
  if (!force && state.cloud.lastLocalWrite && Date.now() - state.cloud.lastLocalWrite < 8000) {
    return { _skipped: 'local_write' };
  }
  if (!quiet) {
    state.cloud.status = 'syncing';
    updateSyncBadge();
  }
  try {
    if (state.cloud.provider === 'sheets') {
      const url = (state.cloud.sheetsUrl || '').trim();
      if (!url) throw new Error('Нет URL Google Apps Script');

      let result;
      try {
        result = await cloudFetchOnce(url, Object.assign({}, opts, { force: !!force }));
      } catch (firstErr) {
        // Один тихий повтор при таймауте/abort (cold start Apps Script)
        if (isAbortError(firstErr)) {
          console.warn('Cloud fetch timeout, retry…', firstErr);
          await new Promise(r => setTimeout(r, 1500));
          result = await cloudFetchOnce(url, Object.assign({}, opts, { force: true }));
        } else {
          throw firstErr;
        }
      }

      if (result && result.skip) {
        if (!quiet) {
          state.cloud.status = 'ok';
          updateSyncBadge();
        }
        return { _skipped: 'uptodate', remoteAt: result.remoteAt };
      }

      const record = result && result.record;
      if (!record) return null;
      if (record.storage === 'rows') state.cloud.rowStorage = true;
      if (record.updatedAt) state.cloud.lastRemoteUpdatedAt = record.updatedAt;
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
      8000
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
    // Таймаут на фоне: не красим бейдж в «ошибка», если недавно был ok
    if (quiet && isAbortError(e) && state.cloud.lastSync) {
      state.cloud.status = 'ok';
      updateSyncBadge();
      return null;
    }
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



/** Собрать extras для записи в Google Sheets (лист data / extras) */
function buildCloudExtras() {
  // подтянуть актуальные данные из localStorage при необходимости
  try { if (typeof loadCallsMeta === 'function') loadCallsMeta(); } catch (_) {}
  try { if (typeof loadRefInfo === 'function') loadRefInfo(); } catch (_) {}
  try { if (typeof ensureCarsModel === 'function') ensureCarsModel(); } catch (_) {}
  try {
    if (typeof loadLeaderboardData === 'function') loadLeaderboardData();
  } catch (_) {}
  try {
    if (typeof loadGoalsStore === 'function') loadGoalsStore();
  } catch (_) {}
  try {
    if (!Array.isArray(state.sharedPenalties) || !state.sharedPenalties.length) {
      const raw = localStorage.getItem('ect_shared_penalties_v1');
      if (raw) {
        const p = JSON.parse(raw);
        if (Array.isArray(p)) state.sharedPenalties = p;
      }
    }
  } catch (_) {}

  try { loadRuleItemTags(); } catch (_) {}
  return {
    cars: Array.isArray(state.cars) ? state.cars : [],
    calls: Array.isArray(state.calls) ? state.calls : [],
    goalsStore: (state.goalsStore && typeof state.goalsStore === 'object') ? state.goalsStore : {},
    refInfo: Array.isArray(state.refInfo) ? state.refInfo : [],
    leaderboardManual: Array.isArray(state.leaderboardManual) ? state.leaderboardManual : [],
    leaderboardSettings: (state.leaderboardSettings && typeof state.leaderboardSettings === 'object')
      ? state.leaderboardSettings
      : { viewCanSee: false },
    sharedPenalties: Array.isArray(state.sharedPenalties) ? state.sharedPenalties : [],
    ruleItemTags: (state.ruleItemTags && typeof state.ruleItemTags === 'object') ? state.ruleItemTags : {},
    extraUsers: (function() {
      try { loadExtraUsers(); } catch (_) {}
      return Array.isArray(extraUsers) ? extraUsers.map(u => ({
        name: u.name,
        passwordHash: u.passwordHash || '',
        role: u.role === 'view' ? 'view' : 'edit',
        createdAt: u.createdAt || Date.now()
      })) : [];
    })(),
    flappyScores: (state.flappyScores && typeof state.flappyScores === 'object') ? state.flappyScores : {},
    userPerms: (function() {
      try { loadUserPermsStore(); } catch (_) {}
      return (state.userPerms && typeof state.userPerms === 'object') ? state.userPerms : {    newbieGuide: Array.isArray(state.newbieGuide) ? state.newbieGuide : [],
    guestLoginEnabled: (function(){ try { return isGuestLoginEnabled(); } catch(_){ return state.guestLoginEnabled !== false; } })(),
  };
    })(),
    presence: (function() {
      try {
        if (state.currentUser) {
          if (!state.presence || typeof state.presence !== 'object') state.presence = {};
          state.presence[state.currentUser] = {
            lastSeen: Date.now(),
            page: state.currentPage || '',
            name: state.currentUser
          };
        }
      } catch (_) {}
      return (state.presence && typeof state.presence === 'object') ? state.presence : {};
    })()
  };
}

/**
 * Применить запись из облака к state.
 * Возвращает true, если применили scripts.
 */
function applyCloudRecord(remote) {
  if (!remote || typeof remote !== 'object') return false;
  let applied = false;

  if (Array.isArray(remote.scripts)) {
    state.scripts = remote.scripts;
    applied = true;
  }
  if (Array.isArray(remote.sharedOtabotki)) {
    state.sharedOtabotki = remote.sharedOtabotki;
    try { seedMetodichkaOtabotki(); } catch (_) {}
  }

  // extras могут приходить плоско (Code.gs flatten) или в remote.extras
  const ex = (remote.extras && typeof remote.extras === 'object') ? remote.extras : remote;

  if (Array.isArray(ex.cars)) {
    state.cars = ex.cars;
    try { localStorage.setItem('ect_cars_v1', JSON.stringify(state.cars || [])); } catch (_) {}
  }
  if (Array.isArray(ex.calls)) {
    state.calls = ex.calls;
    try { localStorage.setItem('ect_calls_meta_v1', JSON.stringify(state.calls || [])); } catch (_) {}
  }
  if (ex.goalsStore && typeof ex.goalsStore === 'object') {
    state.goalsStore = ex.goalsStore;
    try { localStorage.setItem('ect_goals_v1', JSON.stringify(state.goalsStore)); } catch (_) {}
  }
  if (Array.isArray(ex.refInfo)) {
    state.refInfo = ex.refInfo;
    try { localStorage.setItem('ect_refinfo_v1', JSON.stringify(state.refInfo || [])); } catch (_) {}
  }
  if (Array.isArray(ex.leaderboardManual)) {
    state.leaderboardManual = ex.leaderboardManual;
  }
  if (ex.leaderboardSettings && typeof ex.leaderboardSettings === 'object') {
    state.leaderboardSettings = ex.leaderboardSettings;
  }
  try {
    if (typeof persistLeaderboardData === 'function') persistLeaderboardData();
    else {
      localStorage.setItem('ect_lb_settings_v1', JSON.stringify(state.leaderboardSettings || { viewCanSee: false }));
      localStorage.setItem('ect_lb_manual_v1', JSON.stringify(state.leaderboardManual || []));
    }
  } catch (_) {}

  if (Array.isArray(ex.sharedPenalties)) {
    state.sharedPenalties = ex.sharedPenalties;
    try { localStorage.setItem('ect_shared_penalties_v1', JSON.stringify(state.sharedPenalties)); } catch (_) {}
  }
  if (Array.isArray(ex.newbieGuide)) {
    state.newbieGuide = ex.newbieGuide;
    try { localStorage.setItem(NEWBIE_KEY, JSON.stringify(state.newbieGuide)); } catch (_) {}
  }
  if (typeof ex.guestLoginEnabled === 'boolean') {
    state.guestLoginEnabled = ex.guestLoginEnabled;
    try { localStorage.setItem(GUEST_ENABLED_KEY, ex.guestLoginEnabled ? '1' : '0'); } catch (_) {}
    try { if (typeof window.__ECT_UPDATE_GUEST_BTN === 'function') window.__ECT_UPDATE_GUEST_BTN(); } catch (_) {}
  } else if (Array.isArray(remote.newbieGuide)) {
    state.newbieGuide = remote.newbieGuide;
    try { localStorage.setItem(NEWBIE_KEY, JSON.stringify(state.newbieGuide)); } catch (_) {}
  } else if (Array.isArray(remote.sharedPenalties)) {
    state.sharedPenalties = remote.sharedPenalties;
    try { localStorage.setItem('ect_shared_penalties_v1', JSON.stringify(state.sharedPenalties)); } catch (_) {}
  }
  if (ex.ruleItemTags && typeof ex.ruleItemTags === 'object') {
    state.ruleItemTags = ex.ruleItemTags;
    try { localStorage.setItem(RULE_ITEM_TAGS_KEY, JSON.stringify(state.ruleItemTags)); } catch (_) {}
  }
  if (Array.isArray(ex.extraUsers)) {
    try {
      loadExtraUsers();
      const byName = new Map();
      ex.extraUsers.forEach(u => {
        if (u && u.name) byName.set(u.name, {
          name: u.name,
          passwordHash: u.passwordHash || '',
          role: u.role === 'view' ? 'view' : 'edit',
          createdAt: u.createdAt || Date.now()
        });
      });
      extraUsers = Array.from(byName.values());
      localStorage.setItem(EXTRA_USERS_KEY, JSON.stringify(extraUsers));
      if (typeof window.__ECT_REFRESH_USERS === 'function') window.__ECT_REFRESH_USERS();
    } catch (e) { console.warn('apply extraUsers', e); }
  }
  if (ex.flappyScores && typeof ex.flappyScores === 'object') {
    try {
      const remote = ex.flappyScores;
      const local = (state.flappyScores && typeof state.flappyScores === 'object') ? state.flappyScores : {};
      const merged = { ...local };
      Object.keys(remote).forEach(name => {
        const r = remote[name];
        const l = local[name];
        const rBest = Number(r && r.best) || 0;
        const lBest = Number(l && l.best) || 0;
        if (rBest > lBest) merged[name] = { best: rBest, updatedAt: (r && r.updatedAt) || Date.now() };
        else if (!merged[name] && r) merged[name] = { best: rBest, updatedAt: (r && r.updatedAt) || Date.now() };
      });
      state.flappyScores = merged;
      localStorage.setItem('ect_flappy_scores_v1', JSON.stringify(state.flappyScores));
      try { if (typeof renderFlappyLeaderboard === 'function') renderFlappyLeaderboard(); } catch (_) {}
    } catch (e) { console.warn('apply flappyScores', e); }
  }
  if (ex.userPerms && typeof ex.userPerms === 'object') {
    try {
      state.userPerms = ex.userPerms;
      localStorage.setItem(USER_PERMS_KEY, JSON.stringify(state.userPerms));
      try { applyAccountPermissions(); } catch (_) {}
    } catch (e) { console.warn('apply userPerms', e); }
  }
  if (ex.presence && typeof ex.presence === 'object') {
    try {
      if (!state.presence || typeof state.presence !== 'object') state.presence = {};
      Object.keys(ex.presence).forEach(name => {
        const remote = ex.presence[name];
        const local = state.presence[name];
        if (!local || (remote && (remote.lastSeen || 0) >= (local.lastSeen || 0))) {
          state.presence[name] = remote;
        }
      });
    } catch (e) { console.warn('apply presence', e); }
  }

  if (applied) {
    try { saveLocalScripts(); } catch (_) {}
    try { if (typeof ensureOtabotkiModel === 'function') ensureOtabotkiModel(); } catch (_) {}
  }
  return applied;
}


/** Быстро сохранить только extras (цели, авто, справка, …) без полной перезаписи скриптов */
async function cloudSaveExtrasOnly() {
  if (typeof isCommonAccount === 'function' && isCommonAccount()) return false;
  if (!state.cloud || !state.cloud.enabled) return false;
  if (state.cloud.provider !== 'sheets') return false;
  const url = (state.cloud.sheetsUrl || '').trim();
  if (!url) return false;
  try {
    const extras = buildCloudExtras();
    const posted = await postSheets(url, {
      op: 'saveExtras',
      extras: extras,
      sharedOtabotki: state.sharedOtabotki || [],
      updatedAt: Date.now()
    }, 60000);
    if (posted.json && posted.json.ok === false) {
      throw new Error(posted.json.error || 'saveExtras failed');
    }
    state.cloud.lastLocalWrite = Date.now();
    if (posted.json && posted.json.updatedAt) {
      state.cloud.lastRemoteUpdatedAt = posted.json.updatedAt;
    } else {
      state.cloud.lastRemoteUpdatedAt = state.cloud.lastLocalWrite;
    }
    return true;
  } catch (e) {
    console.warn('cloudSaveExtrasOnly', e);
    return false;
  }
}

let __cloudDebounce = null;
let __cloudExtrasDebounce = null;
let __cloudQueue = Promise.resolve();
let __cloudBusy = false;
let __cloudFailStreak = 0;
let __pendingFullSave = false;
let __pendingExtrasSave = false;

/** Очередь: не гоняем параллельные save/fetch (главная причина сбоев) */
function enqueueCloud(fn) {
  __cloudQueue = __cloudQueue.then(async () => {
    __cloudBusy = true;
    try {
      return await fn();
    } finally {
      __cloudBusy = false;
    }
  }).catch(e => {
    console.warn('cloud queue', e);
  });
  return __cloudQueue;
}

function scheduleCloudSave() {
  if (typeof isCommonAccount === 'function' && isCommonAccount()) return;
  if (!state.cloud || !state.cloud.enabled) return;
  __pendingFullSave = true;
  clearTimeout(__cloudDebounce);
  __cloudDebounce = setTimeout(() => {
    if (!__pendingFullSave) return;
    __pendingFullSave = false;
    __pendingExtrasSave = false; // full save включает extras
    enqueueCloud(() => cloudSave());
  }, 2000);
}

/** Только extras — без перезаписи всех скриптов */
function scheduleCloudExtrasSave() {
  if (typeof isCommonAccount === 'function' && isCommonAccount()) return;
  if (!state.cloud || !state.cloud.enabled) return;
  // если уже ждём полный save — extras уедут с ним
  if (__pendingFullSave) return;
  __pendingExtrasSave = true;
  clearTimeout(__cloudExtrasDebounce);
  __cloudExtrasDebounce = setTimeout(() => {
    if (!__pendingExtrasSave || __pendingFullSave) return;
    __pendingExtrasSave = false;
    enqueueCloud(async () => {
      const ok = await cloudSaveExtrasOnly();
      if (ok) {
        __cloudFailStreak = 0;
        state.cloud.status = 'ok';
        state.cloud.lastSync = Date.now();
        try { updateSyncBadge(); } catch (_) {}
      } else {
        __cloudFailStreak++;
        // не долбим full save сразу — только после 2 неудач extras
        if (__cloudFailStreak >= 2) {
          __cloudFailStreak = 0;
          await cloudSave();
        } else {
          state.cloud.status = 'error';
          try { updateSyncBadge(); } catch (_) {}
        }
      }
    });
  }, 1500);
}
async function cloudSave() {
  if (typeof isCommonAccount === 'function' && isCommonAccount()) return false;
  if (!state.cloud.enabled) return false;
  state.cloud.status = 'syncing';
  updateSyncBadge();
  try {
    const extras = buildCloudExtras();
    const payload = {
      op: 'replace',
      scripts: state.scripts,
      sharedOtabotki: state.sharedOtabotki || [],
      sharedPenalties: state.sharedPenalties || extras.sharedPenalties || [],
      extras,
      cars: extras.cars,
      calls: extras.calls,
      goalsStore: extras.goalsStore,
      refInfo: extras.refInfo,
      leaderboardManual: extras.leaderboardManual,
      leaderboardSettings: extras.leaderboardSettings,
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
          // chunked-путь не пишет extras — допишем отдельно
          try {
            await postSheets(url, {
              op: 'saveExtras',
              extras: extras,
              sharedOtabotki: state.sharedOtabotki || [],
              updatedAt: payload.updatedAt
            }, 60000);
          } catch (exErr) {
            console.warn('saveExtras after chunked failed', exErr);
          }
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

      // Успех: явный ok, либо HTTP 200 с телом без error
      const explicitFail = json && json.ok === false;
      const httpFail = res && !res.ok;
      if (explicitFail || (httpFail && !(json && json.ok === true))) {
        throw new Error(
          (json && json.error) ||
          ('HTTP ' + (res && res.status) + (textBody ? (': ' + textBody.slice(0, 120)) : ''))
        );
      }

      __cloudFailStreak = 0;
      state.cloud.status = 'ok';
      state.cloud.lastSync = Date.now();
      state.cloud.lastLocalWrite = Date.now();
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
  try { loadFlappyScores(); } catch (_) {}

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
    if (remote) applyCloudRecord(remote);
    // Не блокируем вход на cloudSave — сохранение уйдёт в фоне при правках
  } catch (e) {
    console.warn('cloud load skipped', e);
    state.cloud.status = 'error';
    updateSyncBadge();
  }
}

async function saveData() {
  if (isCommonAccount()) return false;
  // Сначала локально — UI не ждёт сеть
  try { saveLocalScripts(); } catch (_) {}
  if (state.cloud.enabled) {
    scheduleCloudSave(); // debounce + очередь, без блокировки интерфейса
    return true;
  }
  return true;
}


/* ========== Онлайн-присутствие ========== */
let presenceTimer = null;
const PRESENCE_ONLINE_MS = 3 * 60 * 1000;

function isUserOnline(entry) {
  if (!entry || !entry.lastSeen) return false;
  return (Date.now() - Number(entry.lastSeen)) < PRESENCE_ONLINE_MS;
}

function getPresenceList() {
  const map = (state.presence && typeof state.presence === 'object') ? state.presence : {};
  return Object.keys(map).map(name => ({
    name,
    lastSeen: map[name].lastSeen || 0,
    page: map[name].page || '',
    online: isUserOnline(map[name])
  })).sort((a, b) => {
    if (a.online !== b.online) return a.online ? -1 : 1;
    return a.name.localeCompare(b.name, 'ru');
  });
}

async function sendPresenceHeartbeat() {
  if (!state.currentUser) return;
  if (!state.presence || typeof state.presence !== 'object') state.presence = {};
  state.presence[state.currentUser] = {
    lastSeen: Date.now(),
    page: state.currentPage || '',
    name: state.currentUser
  };
  try {
    const url = (state.cloud.sheetsUrl || '').trim();
    if (!url || !url.includes('script.google.com')) return;
    const res = await fetchWithTimeout(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        op: 'heartbeat',
        user: state.currentUser,
        page: state.currentPage || '',
        lastSeen: Date.now()
      })
    }, 15000);
    if (res && res.ok) {
      try {
        const json = await res.json();
        if (json && json.presence && typeof json.presence === 'object') {
          state.presence = Object.assign({}, state.presence, json.presence);
        }
      } catch (_) {}
    }
  } catch (e) {}
}

function startPresenceHeartbeat() {
  stopPresenceHeartbeat();
  sendPresenceHeartbeat();
  presenceTimer = setInterval(sendPresenceHeartbeat, 40000);
}

function stopPresenceHeartbeat() {
  if (presenceTimer) {
    clearInterval(presenceTimer);
    presenceTimer = null;
  }
}

function startAutoSync() {
  stopAutoSync();
  if (!state.cloud.enabled) return;
  // 45 с — реже бьём Apps Script (квоты + меньше гонок с сохранением)
  syncTimer = setInterval(() => {
    if (document.hidden) return;
    if (__cloudBusy || __pendingFullSave || __pendingExtrasSave) return;
    enqueueCloud(async () => {
      const remote = await cloudFetch({ quiet: true });
      if (!remote) return;
      const remoteAt = Number(remote.updatedAt) || 0;
      const localWrite = Number(state.cloud.lastLocalWrite) || 0;
      // чужие изменения только если сервер новее нашей последней записи
      if (remoteAt && localWrite && remoteAt <= localWrite + 1000) return;

      let changed = false;
      if (Array.isArray(remote.scripts)) {
        const remoteStr = remote.scripts.map(s => String(s.id) + ':' + String(s.updatedAt || 0)).sort().join('|');
        const localStr = (state.scripts || []).map(s => String(s.id) + ':' + String(s.updatedAt || 0)).sort().join('|');
        if (remoteStr !== localStr) changed = true;
      }
      const remoteShared = JSON.stringify(remote.sharedOtabotki || []);
      const localShared = JSON.stringify(state.sharedOtabotki || []);
      if (remoteShared !== localShared) changed = true;

      if (!changed && remote.extras) {
        // extras могли обновиться без scripts
        const rGoals = JSON.stringify(remote.goalsStore || (remote.extras && remote.extras.goalsStore) || {});
        const lGoals = JSON.stringify(state.goalsStore || {});
        if (rGoals !== lGoals) changed = true;
      }

      if (!changed) {
        if (remoteAt) state.cloud.lastRemoteUpdatedAt = remoteAt;
        return;
      }

      applyCloudRecord(remote);
      try { ensureOtabotkiModel(); } catch (_) {}
      try { saveLocalScripts(); } catch (_) {}
      if (remoteAt) state.cloud.lastRemoteUpdatedAt = remoteAt;
      const p = state.currentPage;
      if (p === 'scripts' || p === 'home' || p === 'script' || p === 'otabotki' || p === 'goals' || p === 'catalog' || p === 'calls') {
        render();
      }
      // без тоста при каждом автообновлении — меньше шума
    });
  }, 45000);
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

/** Ссылки в тексте + переносы строк (глобально) */
function linkify(text) {
  const esc = escapeHtml(text || '');
  return esc
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener" class="ref-link">$1</a>')
    .replace(/\n/g, '<br>');
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
  if (page === 'admin' && !isAdminUser()) {
    toast('Админ-панель только для администратора', 'error');
    page = 'home';
  }
  if (!canViewPage(page === 'script' ? 'scripts' : page)) {
    toast('Нет доступа к этому разделу', 'error');
    page = canViewPage('home') ? 'home' : (PAGE_PERM_DEFS.find(p => canViewPage(p.key)) || { key: 'home' }).key;
  }
  if (page === 'goals' && !canDo('useGoals') && !canDo('useDiary') && !canDo('viewTeamGoals') && !canDo('viewTeamDiaries')) {
    toast('Нет доступа к целям и дневнику', 'error');
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
    refinfo: 'Справка',
    settings: 'Настройки',
    newbie: 'Новичкам',
    admin: 'Админ-панель',
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
const SEARCH_FOCUS_IDS = ['homeSearch', 'searchInput', 'otabotkiSearch', 'catalogSearch', 'callsSearch', 'pickOtabotkaSearch', 'rulesSearch', 'refInfoSearch', 'newbieSearch'];

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
    case 'refinfo': content.innerHTML = renderRefInfo(); break;
    case 'newbie': content.innerHTML = renderNewbieGuide(); break;
    case 'settings': content.innerHTML = renderSettings(); break;
    case 'admin': content.innerHTML = isAdminUser() ? renderAdminPanel() : '<p>Нет доступа</p>'; break;
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
      tags: [...(c.tags || [])],
      notInAc: !!c.notInAc
    }));
  }
  const defMap = new Map(DEFAULT_CARS.map(d => [d.brand + '|' + d.model, d]));
  const have = new Set((state.cars || []).map(c => (c.brand || '') + '|' + (c.model || '')));
  let changed = false;
  // Добавить новые авто из каталога по умолчанию, которых ещё нет у пользователя
  DEFAULT_CARS.forEach(d => {
    const key = d.brand + '|' + d.model;
    if (!have.has(key)) {
      state.cars.push({
        ...d,
        id: d.id || uid(),
        bodyType: d.bodyType || '',
        tags: [...(d.tags || [])],
        notInAc: !!d.notInAc
      });
      have.add(key);
      changed = true;
    }
  });
  state.cars.forEach(c => {
    if (!Array.isArray(c.tags)) c.tags = [];
    c.tags = c.tags.map(t => String(t).toLowerCase().trim()).filter(Boolean);
    const d = defMap.get((c.brand || '') + '|' + (c.model || ''));
    if (!c.bodyType && d && d.bodyType) c.bodyType = d.bodyType;
    if (d && d.notInAc && !c.notInAc) { c.notInAc = true; changed = true; }
    if (c.notInAc && d && d.description && !(c.description || '').includes('В АЦ НЕТ')) {
      c.description = d.description;
      changed = true;
    }
    if (!c.bodyType) c.bodyType = c.bodyType || '';
    const norm = normalizeCountryCode(c.country);
    if (c.country !== norm) {
      c.country = norm;
      changed = true;
    }
  });
  if (changed) {
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
  try { scheduleCloudExtrasSave(); } catch (_) {}
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
  try { scheduleCloudExtrasSave(); } catch (_) {}
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



/* ========== Теги на отдельные пункты правил ========== */
const RULE_ITEM_TAGS_KEY = 'ect_rule_item_tags_v1';

function loadRuleItemTags() {
  try {
    const raw = localStorage.getItem(RULE_ITEM_TAGS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && typeof p === 'object') state.ruleItemTags = p;
    }
  } catch (_) {}
  if (!state.ruleItemTags || typeof state.ruleItemTags !== 'object') state.ruleItemTags = {};
}

function persistRuleItemTags() {
  try { localStorage.setItem(RULE_ITEM_TAGS_KEY, JSON.stringify(state.ruleItemTags || {})); } catch (e) { console.warn(e); }
  try { scheduleCloudExtrasSave(); } catch (_) {}
}

function ruleItemKey(blockId, idx) {
  return String(blockId) + '|' + String(idx);
}

function getRuleItemTags(blockId, idx) {
  loadRuleItemTags();
  const k = ruleItemKey(blockId, idx);
  const arr = state.ruleItemTags[k];
  return Array.isArray(arr) ? arr : [];
}

function setRuleItemTags(blockId, idx, tags) {
  loadRuleItemTags();
  const k = ruleItemKey(blockId, idx);
  const clean = (tags || []).map(s => String(s).toLowerCase().trim().replace(/^#/, '')).filter(Boolean);
  if (clean.length) state.ruleItemTags[k] = clean;
  else delete state.ruleItemTags[k];
  persistRuleItemTags();
}

function showRuleItemTagModal(blockId, idx, itemText) {
  if (isCommonAccount()) { toast('Только просмотр', 'error'); return; }
  const tags = getRuleItemTags(blockId, idx);
  openModal(
    'Теги пункта',
    `<p class="field-hint" style="margin-bottom:10px">${escapeHtml(String(itemText || '').slice(0, 160))}${String(itemText||'').length>160?'…':''}</p>
     <div class="form-group"><label>Теги (через запятую)</label>
       <input type="text" id="fRuleItemTags" value="${escapeAttr(tags.join(', '))}" placeholder="кредит, гражданство, скрипт…">
       <p class="field-hint">Свои теги для быстрого поиска этой ошибки.</p>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-rule-item-tags" data-bid="${escapeAttr(blockId)}" data-idx="${escapeAttr(String(idx))}">Сохранить</button>`
  );
}

function saveRuleItemTags(blockId, idx) {
  if (isCommonAccount()) return;
  const raw = document.getElementById('fRuleItemTags')?.value || '';
  const tags = raw.split(/[,;#]+/).map(s => s.trim()).filter(Boolean);
  setRuleItemTags(blockId, idx, tags);
  closeModal();
  toast('Теги сохранены');
  render();
}


const DEFAULT_RULES = [
  {
    "id": "general_na_op",
    "source": "general",
    "sourceLabel": "Общие",
    "category": "Не актуально",
    "subtitle": "Ошибки оператора",
    "tone": "danger",
    "tags": ["general", "na", "актуально", "вопросы", "не", "не актуально", "неактуально", "общие", "оператор", "оператора", "ответы", "отказ", "ошибка_оператора", "ошибки", "ошибки оператора", "скрипт", "типовые", "формулировки"],
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
    "tags": ["general", "na", "актуально", "актуальность", "актуальность клиента", "банк", "клиента", "кредит", "не", "не актуально", "неактуально", "общие", "ответы", "отказ", "формулировки"],
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
    "tags": ["0", "0%", "general", "вопросы", "замечание", "общие", "оператор", "оператора", "ответы", "ошибка_оператора", "ошибки", "ошибки оператора", "скрипт", "типовые", "штраф"],
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
    "tags": ["0", "0%", "crm", "general", "вопросы", "замечание", "заполнение", "заполнение / ответы", "заявка", "общие", "оператор", "ответы", "ошибка_оператора", "ошибки", "типовые", "формулировки", "штраф"],
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
    "tags": ["0", "50", "50%", "general", "авто", "банк", "вопросы", "замечание", "кредит", "марка", "модель", "общие", "оператор", "оператора", "ответы", "ошибка_оператора", "ошибки", "ошибки оператора", "половина", "скрипт", "типовые", "формулировки", "штраф"],
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
    "tags": ["0", "50", "50%", "crm", "general", "вопросы", "замечание", "заполнение", "заявка", "общие", "оператор", "ответы", "ошибка_оператора", "половина", "формулировки", "штраф"],
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
    "tags": ["75", "75%", "general", "вопросы", "общие", "оператор", "оператора", "ответы", "ошибка_оператора", "ошибки", "ошибки оператора", "типовые", "штраф"],
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
    "tags": ["75", "75%", "crm", "general", "авто", "заполнение", "заявка", "марка", "модель", "общие", "оператор", "ошибка_оператора", "ошибки", "типовые", "штраф"],
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
    "tags": ["na", "solyanka", "актуально", "вопросы", "не", "не актуально", "неактуально", "оператор", "оператора", "ответы", "отказ", "ошибка_оператора", "ошибки", "ошибки оператора", "скрипт", "солянка", "типовые", "формулировки"],
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
    "tags": ["na", "solyanka", "актуально", "актуальность", "актуальность клиента", "клиента", "не", "не актуально", "неактуально", "ответы", "отказ", "солянка", "формулировки"],
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
    "tags": ["0", "0%", "solyanka", "вопросы", "замечание", "оператор", "оператора", "ответы", "ошибка_оператора", "ошибки", "ошибки оператора", "скрипт", "солянка", "типовые", "штраф"],
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
    "tags": ["0", "0%", "crm", "solyanka", "вопросы", "замечание", "заполнение", "заполнение / ответы", "заявка", "оператор", "ответы", "ошибка_оператора", "ошибки", "солянка", "типовые", "формулировки", "штраф"],
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
    "tags": ["0", "50", "50%", "solyanka", "вопросы", "замечание", "оператор", "оператора", "ответы", "ошибка_оператора", "ошибки", "ошибки оператора", "половина", "скрипт", "солянка", "типовые", "формулировки", "штраф"],
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
    "tags": ["0", "50", "50%", "crm", "solyanka", "вопросы", "замечание", "заполнение", "заявка", "оператор", "ответы", "ошибка_оператора", "половина", "солянка", "формулировки", "штраф"],
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
    "tags": ["75", "75%", "solyanka", "вопросы", "оператор", "оператора", "ответы", "ошибка_оператора", "ошибки", "ошибки оператора", "солянка", "типовые", "штраф"],
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
    "tags": ["75", "75%", "crm", "solyanka", "авто", "заполнение", "заявка", "марка", "модель", "оператор", "ошибка_оператора", "ошибки", "солянка", "типовые", "штраф"],
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
    "tags": ["0", "na", "spk", "актуально", "вопросы", "замечание", "контракту", "не", "не актуально", "неактуально", "оператор", "ответы", "отказ", "ошибка_оператора", "по", "скрипт", "служба", "служба по контракту", "спк", "штраф"],
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
    "tags": ["0", "100", "na", "spk", "вопросы", "замечание", "контракту", "неактуально", "оператор", "ответы", "отказ", "ошибка_оператора", "по", "полный", "скрипт", "служба", "служба по контракту", "спк", "успешно", "штраф"],
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
    "id": "important_c1",
    "source": "important",
    "sourceLabel": "Важные моменты",
    "category": "Важные моменты",
    "subtitle": "НЕ АКТУАЛЬНО",
    "tone": "danger",
    "tags": ["important", "na", "актуально", "банк", "важные", "важные моменты", "кредит", "моменты", "не", "не актуально", "неактуально", "отказ"],
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
    "tags": ["0", "50", "important", "авто", "важные", "важные моменты", "вопросы", "замечание", "марка", "модель", "моменты", "оператор", "ответы", "ошибка_оператора", "половина", "скрипт", "со", "успешно", "успешно со штрафом", "штраф", "штрафом"],
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
    "tags": ["0", "100", "important", "авто", "банк", "без", "важные", "важные моменты", "вопросы", "замечание", "кредит", "марка", "модель", "моменты", "оператор", "ответы", "ошибка_оператора", "полный", "скрипт", "успешно", "успешно без штрафа", "формулировки", "штраф", "штрафа"],
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
    "tags": ["answers", "нечёткие", "ответ", "ответы", "формулировки", "чёткие", "чёткие / нечёткие", "чёткий", "чёткий ответ"],
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
    "tags": ["0", "50", "50% нечёткий ответ", "answers", "замечание", "нечёткие", "нечёткий", "ответ", "ответы", "половина", "формулировки", "чёткие", "чёткие / нечёткие", "штраф"],
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
    "tags": ["0", "0% не выявлена актуальность", "answers", "актуальность", "выявлена", "замечание", "не", "нечёткие", "чёткие", "чёткие / нечёткие", "штраф"],
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
    "tags": ["questions", "авто", "банк", "вопроса", "вопросов", "вопросы", "корректность", "корректность вопроса", "кредит", "марка", "модель", "ответы", "типы", "типы вопросов", "формулировки"],
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
    "tags": ["0", "0% некорректная формулировка*", "questions", "вопроса", "вопросы", "замечание", "корректность", "корректность вопроса", "некорректная", "ответы", "скрипт", "формулировка*", "штраф"],
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
    "tags": ["0", "50", "50% расплывчатая формулировка*", "questions", "банк", "вопроса", "вопросы", "замечание", "корректность", "корректность вопроса", "кредит", "оператор", "ответы", "ошибка_оператора", "половина", "расплывчатая", "скрипт", "формулировка*", "штраф"],
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
    "tags": ["0", "100", "100% корректная формулировка*", "questions", "вопроса", "вопросы", "замечание", "корректная", "корректность", "корректность вопроса", "ответы", "полный", "формулировка*", "формулировки", "штраф"],
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
    "tags": ["0", "0% некорректная формулировка", "questions", "вопроса", "вопросы", "замечание", "корректность", "корректность вопроса", "некорректная", "ответы", "скрипт", "формулировка", "штраф"],
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
    "tags": ["0", "50", "50% расплывчатая формулировка", "questions", "банк", "вопроса", "вопросы", "замечание", "корректность", "корректность вопроса", "кредит", "ответы", "половина", "расплывчатая", "формулировка", "штраф"],
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
    "tags": ["0", "100", "100% корректная формулировка", "questions", "вопроса", "вопросы", "замечание", "корректная", "корректность", "корректность вопроса", "ответы", "полный", "формулировка", "формулировки", "штраф"],
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
    "tags": ["brands", "lada", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["audi", "brands", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["bmw", "brands", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "chevrolet", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "daewoo", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "ford", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "honda", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "hyundai", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "kia", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "mazda", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "mercedes", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "nissan", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "opel", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "peugeot", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "renault", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "skoda", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "suzuki", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "toyota", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "volkswagen", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "lifan", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "вне", "газ", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "citroen", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "dodge", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "cadillac", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "land", "land rover", "rover", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "lexus", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка", "уаз"],
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
    "tags": ["brands", "subaru", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка", "тагаз"],
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
    "tags": ["brands", "mitsubishi", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "porsche", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "jaguar", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "volvo", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "smart", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "hummer", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["brands", "iran", "iran khodro", "khodro", "вне", "марки", "марки / модели", "марки вне списка", "модели", "списка"],
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
    "tags": ["0", "mistakes", "na", "авто", "банк", "вопросы", "замечание", "кредит", "марка", "модель", "неактуально", "оператор", "ответы", "отказ", "ошибка:", "ошибка_оператора", "ошибки", "скрипт", "типовые", "формулировки", "частые", "частые ошибки", "штраф"],
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
    "tags": ["0", "50", "mistakes", "na", "банк", "вопросы", "замечание", "кредит", "критерий:", "неактуально", "оператор", "ответы", "отказ", "ошибка_оператора", "ошибки", "половина", "скрипт", "типовые", "формулировки", "частые", "частые ошибки", "штраф"],
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
    "tags": ["mistakes", "na", "банк", "вопросы", "кредит", "неактуально", "оператор", "ответы", "отказ", "ошибка_оператора", "ошибки", "решение:", "скрипт", "типовые", "формулировки", "частые", "частые ошибки"],
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
  },
  {
    "id": "calc_main",
    "source": "calc",
    "sourceLabel": "Калькулятор штрафов",
    "category": "Калькулятор",
    "subtitle": "Таблица комбинаций",
    "tone": "warning",
    "tags": ["calc", "калькулятор", "калькулятор штрафов", "комбинаций", "расчёт", "таблица", "таблица комбинаций", "штрафов"],
    "items": [
      "__CALC_TABLE__"
    ]
  },
  {
    "id": "handbook_1_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "БЛИЗКИЕ РОДСТВЕННИКИПАПА, МАМА, МУЖ, ЖЕНА, ДОЧЬ, СЫНВСЕ ОСТА…",
    "tone": "warning",
    "tags": ["handbook", "близкие", "близкие родственникипапа, мама, муж, жена, дочь, сынвсе оста…", "дочь,", "жена,", "мама,", "муж,", "оператор", "оста…", "ошибка_оператора", "родственникипапа,", "справка", "справочник", "сынвсе"],
    "items": [
      "БЛИЗКИЕ РОДСТВЕННИКИПАПА, МАМА, МУЖ, ЖЕНА, ДОЧЬ, СЫНВСЕ ОСТАЛЬНЫЕ ЯВЛЯЮТСЯ ТРЕТЬИМИ ЛИЦАМИ"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_1_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "АВТОИНФОРМАЦИЯ ПО КОЛ-ВУ АВТО В ИНФО1. К",
    "tone": "warning",
    "tags": ["0", "50", "handbook", "авто", "автоинформация", "автоинформация по кол-ву авто в инфо1. к", "замечание", "инфо1.", "кол-ву", "оператор", "ошибка_оператора", "по", "половина", "скрипт", "справка", "справочник", "штраф"],
    "items": [
      "лиент назвал 3 или более марки, необходимо записать хотя бы две, иначе 50%",
      "2. Клиент назвал 2 марки, достаточно записать одну",
      "3. Клиент назвал 3 марки, опер записал не определился, 50%",
      "4. Клиент назвал 10 или более марок, нужно записать хотя бы 3 марки, либо не определилсяМАРКИ НА РУССКОМЭти марки допустимы для записи на русском: Москвич, ЗАЗ, ВАЗ, ГАЗ, УАЗАВТО КОТОРЫХ НЕТ В АЦНЕ АКТУАЛЬНЫЕ АВТО ЕСЛИ ИНОГО НЕ УКАЗАНО В ГЛАВНОМ: - Авто стоимостью более 10млн- Авто выпуска до 2000-х годов- Гибридные авто- Электрокары - Минивэны- Микроавтобусы- Лимузины- Кабриолеты-Новые премиум марки-Спорткары- Любые фургоны, грузовой транспорт- Авто на газуМИНИМАЛЬНЫЕ ЦЕНЫ НА АВТО, ЕСЛИ ОНИ НЕ УКАЗАНЫ В СКРИПТЕ: БУ ОТ 350тыс, НОВЫЕ ОТ 600тыс"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_1_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "Пункт в ГЛАВНОМ: ИДТИ СТРОГО ПО СКРИПТУ1. Можно менять вопро…",
    "tone": "warning",
    "tags": ["handbook", "na", "вопросы", "вопро…", "главном:", "идти", "менять", "можно", "неактуально", "оператор", "ответы", "отказ", "ошибка_оператора", "по", "пункт", "пункт в главном: идти строго по скрипту1. можно менять вопро…", "скрипт", "скрипту1.", "справка", "справочник", "строго"],
    "items": [
      "Пункт в ГЛАВНОМ: ИДТИ СТРОГО ПО СКРИПТУ",
      "1. Можно менять вопросы местами",
      "2. Можно КОРРЕКТНО переформулировать вопрос скрипта",
      "3. Некорректная/расплывчатая формулировка вопроса - Не актуально",
      "4. Пропуск вопроса из скрипта - Не актуально",
      "5. Можно использовать отработки, только если они есть после вопроса",
      "6. Использовано больше отработок, чем доступно по скрипу - Не актуально"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_7_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ЮР. ЛИЦА В АЦЕ",
    "tone": "warning",
    "tags": ["handbook", "аце", "лица", "оператор", "ошибка_оператора", "справка", "справочник", "юр.", "юр. лица в аце"],
    "items": [
      "сли в ац присутствует такой способ оплаты как лизинг, то в этом случае юр.лица пропускаем"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_12_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "МУЛЬТИБРЕНДОВЫЕ АЦ И ОФИЦАЛЬНЫЕ ДИЛЕРЫО",
    "tone": "warning",
    "tags": ["handbook", "ац", "дилерыо", "мультибрендовые", "мультибрендовые ац и офицальные дилерыо", "оператор", "офицальные", "ошибка_оператора", "справка", "справочник"],
    "items": [
      "ператор представляющий мультибрендовый АЦ может говорить клиенту, что АЦ является офицальным дилллером"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_14_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "Пункт в ГЛАВНОМ: НЕ УГОВАРИВАТЬ 1. Можно менять вопросы мест…",
    "tone": "warning",
    "tags": ["1.", "handbook", "na", "вопросы", "главном:", "менять", "мест…", "можно", "не", "неактуально", "оператор", "ответы", "отказ", "ошибка_оператора", "пункт", "пункт в главном: не уговаривать 1. можно менять вопросы мест…", "скрипт", "справка", "справочник", "уговаривать"],
    "items": [
      "Пункт в ГЛАВНОМ: НЕ УГОВАРИВАТЬ",
      "1. Можно менять вопросы местами",
      "2. Можно КОРРЕКТНО переформулировать вопрос скрипта",
      "3. Некорректная/расплывчатая формулировка вопроса - Не актуально",
      "4. Можно использовать отработки, только если они есть после вопроса5.. Использовано больше отработок, чем доступно по скрипу - Не актуально"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_19_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ПРОПИСКАЕ",
    "tone": "warning",
    "tags": ["handbook", "оператор", "ошибка_оператора", "пропискае", "справка", "справочник"],
    "items": [
      "сли в главном есть пункт СПРОСИТЬ ПРОПИСКУ - УТОЧНЯЕМ ПРОПИСКУ У ВСЕХ"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_24_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ГРАЖДАНСТВОУТОЧНЯЕМ ГРАЖДАНСТВО:1. П",
    "tone": "warning",
    "tags": ["handbook", "вопросы", "гражданство:1.", "гражданствоуточняем", "гражданствоуточняем гражданство:1. п", "оператор", "ответы", "ошибка_оператора", "скрипт", "справка", "справочник"],
    "items": [
      "о условиям скрипта ТОЛЬКО ГРАЖДАНЕ РФ, у клиента не русское имя/акцент",
      "2. В скрипте прописан вопрос о гражданстве"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_27_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "Пункт в ГЛАВНОМ: УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬЕсли необход…",
    "tone": "warning",
    "tags": ["0", "50", "handbook", "авто", "вопросы", "главном:", "замечание", "занести", "марка", "марку", "модель", "модельесли", "необход…", "оператор", "ответы", "ошибка_оператора", "половина", "пункт", "пункт в главном: узнать и занести марку и модельесли необход…", "справка", "справочник", "узнать", "штраф"],
    "items": [
      "Пункт в ГЛАВНОМ: УЗНАТЬ И ЗАНЕСТИ МАРКУ И МОДЕЛЬЕсли необходимо выявить марку и модель, а опер задаёт вопрос только касательно марки: \"Подскажите какая марка вас интересует?\" Ставим 50% Оператор не выявил модельЕсли вопрос задаётся: \"Подскажите какая марка и модель вас интересует?\", а клиент называет только марку - не штрафуемЕсли вопрос задаётся: \"Подскажите какой автомобиль вас интересует?\", а клиент называет только марку - не штрафуем"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_31_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "НЕЗАИНТЕРЕСОВАННЫЕ ЛИЦА АЦ1. Е",
    "tone": "warning",
    "tags": ["0", "100", "50", "handbook", "na", "ац1.", "вопросы", "замечание", "лица", "неактуально", "незаинтересованные", "незаинтересованные лица ац1. е", "оператор", "ответы", "отказ", "ошибка_оператора", "полный", "половина", "справка", "справочник", "формулировки", "штраф"],
    "items": [
      "сли клиент говорит, что покупку планирует близкий родственник, но сам не даёт чётких ответов, а оператор не взял номер заинтересованного - Не актуально",
      "2. Если клиент говорит, что покупку планирует близкий родственник, даёт чёткие ответы, но оператор не уточнил, совместная ли покупка - 50%",
      "3. Если клиент говорит, что он планирует покупку совместно с близким родственником и что решение они будут принимать вместе - 100%",
      "4. Если клиент говорит, что покупку планирует третье лицо, оператор не взял номер заинтересованного, но клиент чётко отвечает на все вопросы, и клиента не пришлось уговаривать - 0%",
      "5. Если клиент говорит, что покупку планирует близкий родственник, даёт чёткие ответы, но покупка не совместная - 0%"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_38_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "МЕССЕНДЖЕРЫБ",
    "tone": "warning",
    "tags": ["0", "handbook", "na", "замечание", "мессенджерыб", "неактуально", "оператор", "отказ", "ошибка_оператора", "справка", "справочник", "штраф"],
    "items": [
      "ез штрафа:",
      "1. Клиент не настаивает на связи через мессенджер, просто упомянул в начале или середине диалога",
      "2. Клиент попросил направить дополнительную информацию(ссылку и т.п) на мессенджер, оператор в свою очередь проигнорировал это, либо сказал, что об этом клиент может договориться с менеджером.Штраф 0%",
      "1. Клиент попросил направить дополнительную информацию(ссылку и т.п) на мессенджер, оператор подтверждает, что это сделает менеджерНе актуально:",
      "1. Клиент настаивает на связи в мессенджере, опер не отрабатывает",
      "2. Клиент настаивает на связи в мессенджере, опер соглашается"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_39_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "В СКРИПТЕ НЕ ПРОПИСАНО БЛИЖАЙШЕЕ ВРЕМЯ И НЕТ ВОПРОСА ДЛЯ УТОЧНЕНИЯ УДОБНОГО ВРЕМЕНИ ДЛЯ СВЯЗИЕ",
    "tone": "warning",
    "tags": ["0", "100", "handbook", "ближайшее", "в скрипте не прописано ближайшее время и нет вопроса для уточнения удобного времени для связие", "вопроса", "вопросы", "времени", "время", "для", "замечание", "не", "нет", "оператор", "ответы", "ошибка_оператора", "полный", "прописано", "связие", "скрипт", "скрипте", "справка", "справочник", "удобного", "уточнения", "штраф"],
    "items": [
      "сли оператор проговаривает, что менеджер свяжется в ближайшее время/в течение дня НЕ СЧИТАЕТСЯ НАЗНАЧЕННЫМ ВРЕМЕНЕМ - ставим 100%ПРИМЕР ВОПРОСА:Отлично, тогда я передаю Ваш контакт менеджеру автосалона, он свяжется с Вами и сориентирует по автомобилям в наличии. Согласны?"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_51_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "КРЕДИТОВАНИЕК",
    "tone": "warning",
    "tags": ["handbook", "банк", "кредит", "кредитованиек", "оператор", "ошибка_оператора", "справка", "справочник"],
    "items": [
      "нему относим: Кредит, Частичный кредит"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_54_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ЕДИНСТВЕННЫЙ ВОПРОС СКРИПТАП",
    "tone": "warning",
    "tags": ["handbook", "вопрос", "вопросы", "единственный", "единственный вопрос скриптап", "оператор", "ответы", "ошибка_оператора", "скрипт", "скриптап", "справка", "справочник"],
    "items": [
      "од единственным вопросом скрипта подразумевается любой вопрос, который не является вступительным, не касается имени и не относится к согласию на перевод"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_57_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "НЕЗАИНТЕРЕСОВАННЫЕ ЛИЦА СОЛЯНКАЕ",
    "tone": "warning",
    "tags": ["0", "100", "handbook", "na", "вопросы", "замечание", "лица", "неактуально", "незаинтересованные", "незаинтересованные лица солянкае", "оператор", "ответы", "отказ", "ошибка_оператора", "полный", "солянкае", "справка", "справочник", "формулировки", "штраф"],
    "items": [
      "сли клиент в ходе разговора упоминает, что услугу рассматривает близкий родственник, и сам даёт на все вопросы точные ответы - 100%.Если клиент говорит, что услугу рассматривает близкий родственник, но сам не может дать точные ответы - Не актуальноЕсли клиент говорит, что услугу рассматривает третье лицо, и сам даёт на все вопросы точные ответы, и оператору не пришлось его уговаривать - 0%Если клиент говорит, что услугу рассматривает третье лицо, но сам не может дать точные ответы - Не актуально"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_58_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ЧЁТКИЙ/НЕЧЁТКИЙ ОТВЕТОЦЕНИВАЕМ ЗАЯВКУ ПО ПОСЛЕДНЕМУ ОТВЕТУ КЛИЕНТАПРИМЕР:-В",
    "tone": "warning",
    "tags": ["0", "100", "50", "handbook", "замечание", "заявку", "клиентапример:-в", "нечёткий", "оператор", "ответоцениваем", "ответу", "ответы", "ошибка_оператора", "по", "полный", "половина", "последнему", "справка", "справочник", "формулировки", "чёткий", "чёткий/нечёткий ответоцениваем заявку по последнему ответу клиентапример:-в", "штраф"],
    "items": [
      "течение 30 дней покупку рассматриваете?-Возможно да-Ну, а если всё устроит то рассмотрите? -Не знаю, наверноеВ данном примере, оценка 50%, тк последним ответом было: наверноПРИМЕР:-В течение 30 дней покупку рассматриваете?-Не знаю-Ну, а если всё устроит то рассмотрели бы-Да, возможноВ данном примере, оценка 100%, тк присутствует частица ДА"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_59_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "Связь 9:00 - 22:00Оператор, если скрипт его не ограничивает,…",
    "tone": "warning",
    "tags": ["22:00оператор,", "9:00", "handbook", "его", "если", "не", "ограничивает,…", "оператор", "ошибка_оператора", "связь", "связь 9:00 - 22:00оператор, если скрипт его не ограничивает,…", "скрипт", "справка", "справочник"],
    "items": [
      "Связь 9:00 - 22:00Оператор, если скрипт его не ограничивает, может назначать время для связи в промежутке между 9:00 - 22:00 включительно"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_64_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ОТКАЗАЛСЯ/НЕ ДАЛ СОГЛАСИЯ НА СВЯЗЬ С МЕНЕДЖЕРОМО",
    "tone": "warning",
    "tags": ["handbook", "дал", "менеджеромо", "на", "не", "оператор", "ответы", "отказался", "отказался/не дал согласия на связь с менеджеромо", "ошибка_оператора", "связь", "согласия", "справка", "справочник", "формулировки"],
    "items": [
      "тказался - клиент явно выразил нежелание общаться с менеджером. Например, сказал: «Не хочу разговаривать», «Отстаньте», «Не надо со мной связываться»Не дал согласия - клиент не совершил активного действия, подтверждающего согласие. Он мог промолчать, уклониться от ответа, сказать «подумаю» или прервать разговор до момента запроса согласия"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_73_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "Критерий +80 кмСчитаем не в радиусе, а по кратчайшему пути п…",
    "tone": "warning",
    "tags": ["+80", "handbook", "na", "кмсчитаем", "кратчайшему", "критерий", "критерий +80 кмсчитаем не в радиусе, а по кратчайшему пути п…", "не", "неактуально", "оператор", "отказ", "ошибка_оператора", "по", "пути", "п…", "радиусе,", "справка", "справочник"],
    "items": [
      "Критерий +80 кмСчитаем не в радиусе, а по кратчайшему пути по дорогеРАБОТАЕТ: Если перемещается клиент. Расстояние считается от местоположения клиента до ЦЕНТРА города, где он готов получить услугу или совершить покупку.НЕ РАБОТАЕТ:",
      "1. Если перемещается объект (товар, недвижимость). Расстояние не учитывается, так как объект находится на фиксированной локации и не может быть перемещен в указанный город клиентом.",
      "2. Если речь идёт о месте проживания клиента",
      "3. Если проектом является СТОМАТОЛОГИЯПРИМЕР: Продажа недвижимости/Ремонт квартир ТОЛЬКО ЕКАТЕРИНБУРГ - ЗНАЧИТ РАБОТАЕМ ТОЛЬКО И ТОЛЬКО ПО ЕКАТЕРИНБУРГУ - Берёзовский, Ревда, Верхняя Пышма - НЕ АКТУАЛЬНО\""
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_75_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ИП СЧИТАЕТСЯ ЮР.ЛИЦОМ",
    "tone": "warning",
    "tags": ["handbook", "ип", "ип считается юр.лицом", "оператор", "ошибка_оператора", "справка", "справочник", "считается", "юр.лицом"],
    "items": [
      "ИП СЧИТАЕТСЯ ЮР.ЛИЦОМ"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_78_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ПОДМЕНА ВОПРОСА УТВЕРЖДЕНИЕМЭ",
    "tone": "warning",
    "tags": ["handbook", "вопроса", "вопросы", "оператор", "ответы", "ошибка_оператора", "подмена", "подмена вопроса утверждениемэ", "справка", "справочник", "утверждениемэ"],
    "items": [
      "то псевдовопрос, когда оператор не спрашивает о намерении или факте, а сам утверждает нечто от лица собеседника, а затем просит лишь подтвердить это утверждениеОсновные признаки подменыВ первой части - утверждение о клиенте, которое он не делал.В конце - короткий вопрос: «хорошо?», «да?», «не так ли?», «правда?» и т.п.ПРИМЕРЫ:Я передам менеджеру, что в течение 30 дней вы рассмотрите покупку, хорошо?Я отмечу, что вы посетите нашу стоматологию в течение 14 дней, хорошо?"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_83_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "БЛИЖАЙШЕЕ ВРЕМЯ = ДО ОДНОГО ЧАСА/В ТЕЧЕНИЕ ЧАСА",
    "tone": "warning",
    "tags": ["handbook", "ближайшее", "ближайшее время = до одного часа/в течение часа", "время", "до", "одного", "оператор", "ошибка_оператора", "справка", "справочник", "течение", "часа"],
    "items": [
      "БЛИЖАЙШЕЕ ВРЕМЯ = ДО ОДНОГО ЧАСА/В ТЕЧЕНИЕ ЧАСА"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_86_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "НОРМА ЗАПОЛНЕНИЯ ЗАЯВОКОБЫЧНЫЕ СКРИПТЫ",
    "tone": "warning",
    "tags": ["0", "75", "crm", "handbook", "na", "замечание", "заполнение", "заполнения", "заявка", "заявокобычные", "неактуально", "норма", "норма заполнения заявокобычные скрипты", "оператор", "отказ", "ошибка_оператора", "ошибки", "скрипт", "скрипты", "справка", "справочник", "типовые", "штраф"],
    "items": [
      "за пробелы/другие знаки разделения – НЕ ШТРАФУЕМ- за ошибку в нерусских именах – НЕ ШТРАФУЕМ- за лишнюю информацию – НЕ ШТРАФУЕМ (КК сам должен удалить при необходимости)- если заявка заполнена следующим образом: «Игорь, не определился» – ШТРАФ 75% (прописываем полностью с чем именно не определился)- если опер перепутал даты для связи – ШТРАФ 75%- дополнительный номер телефона – МОЖНО УКАЗЫВАТЬПРИМЕР ЗАПОЛНЕНИЯ- за ошибку в нерусских именах – НЕ ШТРАФУЕМ- за кавычки/пробелы – НЕ ШТРАФУЕМ- за другие знаки разделения – ШТРАФ 75%- за лишнюю информацию – ШТРАФ 75%- когда примером заполнения не предусмотрено удобное время для связи, а оператор записал – оценка: НЕ АКТУАЛЬНО, но если оператору удалось получить согласие на ближайшее время – пропускаем БЕЗ ШТРАФА- дополнительный номер телефона – МОЖНО УКАЗЫВАТЬПункт СТРОГОЕ ЗАПОЛНЕНИЕ ЗАЯВКИ:- за ошибку в нерусских именах – НЕ ШТРАФУЕМ- за кавычки/пробелы – НЕ ШТРАФУЕМ- за другие знаки разделения – ШТРАФ 0%- за некорректное заполнение заявки – ШТРАФ 0%- когда примером заполнения не предусмотрено удобное время для связи, а оператор записал – оценка: НЕ АКТУАЛЬНО, но если оператору удалось получить согласие на ближайшее время – пропускаем БЕЗ ШТРАФА- дополнительный номер телефона – МОЖНО УКАЗЫВАТЬ"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_90_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "КАЛЬКУЛЯТОР ШТРАФОВБ",
    "tone": "warning",
    "tags": ["0", "50", "75", "handbook", "na", "замечание", "калькулятор", "калькулятор штрафовб", "неактуально", "оператор", "отказ", "ошибка_оператора", "ошибки", "половина", "расчёт", "справка", "справочник", "типовые", "штраф", "штрафовб"],
    "items": [
      "азовые правила комбинаций:75% + 75% = 50%75% + 75% + 75% = 50%50% + 50% = 0%0% + 75% = 0%Каждому критерию или ошибке присваивается вес, указанный в примечании к нему. Все веса делятся на 4 уровня влияния на актуальность:Вес 3 - сильно влияетВес 2 - влияетВес 1 - слабо влияетВес 0 - не влияетЧтобы определить, актуальна ли заявка, нужно сложить веса всех имеющихся ошибок. Если сумма равна 5 или больше, заявка признаётся не актуальной.Правила сочетания весов (примеры):Комбинация ошибок Сумма весов ИтогСильно (3) + Сильно (3) 6 Не актуальноСильно (3) + Влияет (2) 5 Не актуальноВлияет (2) + Влияет (2) 4 АктуальноСильно (3) + Слабо (1) 4 АктуальноВлияет (2) + Слабо (1) 3 АктуальноСлабо (1) + Слабо (1) 2 АктуальноВо всех случаях, когда сумма меньше 5, заявка считается актуальной."
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_95_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ДАВЛЕНИЕД",
    "tone": "warning",
    "tags": ["handbook", "вопросы", "давлениед", "оператор", "ответы", "ошибка_оператора", "справка", "справочник", "формулировки"],
    "items": [
      "авление - это когда вопрос или фраза заставляют клиента ответить определённым образом под угрозой негативных последствийПризнаки давления:",
      "1. Ультиматумы («иначе…», «если нет, то…»)",
      "2. Угрозы (потеря скидки, ухудшение условий, отказ в передаче контакта)ПРИМЕРЫ: Назовите ваш бюджет, пожалуйста, иначе не могу пропустить заявкуЕсли вы не купите в ближайшие 30 дней, условия могут ухудшиться. Лучше ведь сейчас, да?Мы работаем, только если в течение 30 дней покупку рассмотритеУ нас только в этом месяце скидки, если не купите, дальше их может и не быть, рассмотрите покупку в течение 30 дней?"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_112_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "СЛОВА/ФРАЗЫ РАЗМЫВАЮЩИЕ ОБЯЗАТЕЛЬСТВА, УСЛОВИЯ, ТОЧНОСТЬЭ",
    "tone": "warning",
    "tags": ["handbook", "вопросы", "обязательства,", "оператор", "ответы", "ошибка_оператора", "размывающие", "слова", "слова/фразы размывающие обязательства, условия, точностьэ", "справка", "справочник", "точностьэ", "условия,", "формулировки", "фразы"],
    "items": [
      "то слова, которые делают вопрос неконкретным, позволяя клиенту дать уклончивый, необязывающий или приблизительный ответПримеры: в перспективе, условно, в теории, возможно, как вариант, может быть, в идеале, допустим, чисто гипотетически, наверное, ориентировочно, приблизительно, где-то, около, плюс-минус, почти, примерно, в районе, более-менее и т.д.Также отдельно стоит выделить формулировку: В ближайший месяц - размывает условие (срок)На будущее в течение \"срок\" (Пример: На будущее в течение 30 дней покупку рассмотрите?) - размывает обязательство + условие"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_119_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ЛОЖНАЯ ГРАНИЦАЛ",
    "tone": "warning",
    "tags": ["handbook", "вопросы", "границал", "ложная", "ложная границал", "оператор", "ответы", "ошибка_оператора", "справка", "справочник", "формулировки"],
    "items": [
      "ожные границы - это фраза, в вопросе числового или иного порога, которая не соответствует реальным условиям предложения, и вводит клиента в заблуждение относительно того, что он может получить.Пример: В ГЛАВНОМ СУММА ДОЛГА (От 250 тыс) - Оператор задаёт вопрос: Сумма всех ваших долгов до 300 тыс?В ГЛАВНОМ БЮДЖЕТ (От 900 тыс) - Оператор задаёт вопрос: Вы в бюджете до 910 тыс рассматриваете?"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_119_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "СПОСОБЫ ОПЛАТЫ АВТОСАЛОНЫ",
    "tone": "warning",
    "tags": ["handbook", "автосалоны", "банк", "кредит", "оператор", "оплаты", "ошибка_оператора", "скрипт", "способы", "способы оплаты автосалоны", "справка", "справочник"],
    "items": [
      "если в ГЛАВНОМ нет пункта «ТОЛЬКО КРЕДИТ», это означает, что оплата за наличный расчет допустима - по наличию рассрочки/лизинга и др. ориентируемся на информацию, указанную в разделе «ЧТО У НАС ЕСТЬ» - если лизинга нет в списке, то АЦ работает ТОЛЬКО С ФИЗ. ЛИЦАМИСОЛЯНКА: - если в скрипте не указана информация о вариантах оплаты, то наличные/кредит/рассрочку/лизинг - ПРОПУСКАЕМ"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_129_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ЛОЯЛЬНОСТЬ ШТРАФ БЕЗ УСПЕХА - Е",
    "tone": "warning",
    "tags": ["0", "50", "handbook", "na", "без", "замечание", "лояльность", "лояльность штраф без успеха - е", "неактуально", "оператор", "отказ", "ошибка_оператора", "ошибки", "половина", "справка", "справочник", "типовые", "успеха", "штраф"],
    "items": [
      "сли допущена данная ошибка ставим оценку НЕ АКТУАЛЬНОУМЕРЕННЫЙ УРОВЕНЬ - Оцениваем допущенную ошибку, также как и всегда,т.е если в таблице 0%, ставим 0%, если 50% ставим 50% и так далее"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_129_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "КОРРЕКТНОСТЬ ФОРМУЛИРОВКИК",
    "tone": "warning",
    "tags": ["0", "100", "50", "handbook", "вопросы", "замечание", "корректность", "корректность формулировкик", "оператор", "ответы", "ошибка_оператора", "полный", "половина", "справка", "справочник", "формулировки", "формулировкик", "штраф"],
    "items": [
      "орректность формулировки вопроса определяется таким образом: Шаг",
      "1. Определите тип вопросаЗакрытый - предполагает односложный ответ (да, нет, хорошо, согласен, не рассматриваю, возможно и т.д)Полуоткрытый - требует конкретного значения (сумма, этаж, марка, район и т.д)Шаг",
      "2. Сравните вопрос с пунктами типа вопросаКОРРЕКТНАЯ ФОРМУЛИРОВКА - В случае, если все пункты выполняются, оценка 100%РАСПЛЫВЧАТАЯ ФОРМУЛИРОВКА - В случае если один из пунктов присутствует, оценка 50%НЕКОРРЕКТНАЯ ФОРМУЛИРОВКА - В случае, если один из этих пунктов присутствует, оценка 0%Если вопрос сочитает пункт из РАСПЛЫВЧАТОЙ и НЕКОРРЕКТНОЙ формулировки, то ставиться оценка за НЕКОРРЕКТНУЮ ФОРМУЛИРОВКУШаг",
      "3. Поставьте оценку"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_134_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ВВОДНЫЕ ПАРАМЕТРЫ Э",
    "tone": "warning",
    "tags": ["handbook", "вводные", "вводные параметры э", "вопросы", "оператор", "ответы", "ошибка_оператора", "параметры", "скрипт", "справка", "справочник", "формулировки"],
    "items": [
      "то конкретные данные, которые оператор должен узнать у клиента по скриптуПростыми словами, это ответы на вопросы/условия ключевых вопросов скрипта: район, город, сроки( например: когда планирует покупку), бесплатная консультация, марка и тд."
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_138_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ПРИВОЗ АВТО ИЗ-ЗА ГРАНИЦЫ М",
    "tone": "warning",
    "tags": ["handbook", "авто", "границы", "из-за", "оператор", "ошибка_оператора", "привоз", "привоз авто из-за границы м", "скрипт", "справка", "справочник"],
    "items": [
      "инимальный бюджет от 500 тыс, если иного не указано в скриптеПропускаем легковые автомобили (как коммерческого, так и грузового типа), если скриптом не предусмотрено иное, в том числе и минивэны)"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_146_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ИНН КОМПАНИИ/НАЗВАНИЕ КОМПАНИИЕ",
    "tone": "warning",
    "tags": ["0", "100", "handbook", "замечание", "инн", "инн компании/название компаниие", "компании", "компаниие", "название", "оператор", "ошибка_оператора", "полный", "справка", "справочник", "штраф"],
    "items": [
      "сли клиент отказался называть ИНН/компанию, но заинтересован в услугах - оценка: 100%Не работает, если проектом предусмотрена другая оценка"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_147_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "НЕКОРРЕКНАЯ ОТРАБОТКА В ХОДЕ ДИАЛОГА«",
    "tone": "warning",
    "tags": ["0", "handbook", "диалога«", "замечание", "некоррекная", "некоррекная отработка в ходе диалога«", "оператор", "отработка", "ошибка_оператора", "справка", "справочник", "ходе", "штраф"],
    "items": [
      "ни к чему не обязывает/привязывает»«если понравится- купите, если нет то нет»ОЦЕНКА: 0%"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_151_1",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ПУНКТ В ГЛАВНОМ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ И МОДЕЛЬЮ/МАРКОЙ ИЛИ МОДЕЛЬЮЕСЛИ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ И МОДЕЛЬЮ - НЕ АКТУАЛЬНОС",
    "tone": "warning",
    "tags": ["0", "100", "handbook", "na", "авто", "актуальнос", "главном", "замечание", "или", "марка", "маркой", "модель", "моделью", "модельюесли", "не", "неактуально", "оператор", "определился", "отказ", "ошибка_оператора", "полный", "пункт", "пункт в главном не определился с маркой и моделью/маркой или модельюесли не определился с маркой и моделью - не актуальнос", "справка", "справочник", "штраф"],
    "items": [
      "тавим оценку не актуально, когда клиент не определился, как с маркой, так и с моделью. Но если клиент определился хотя бы с маркой, то пропускаем в 100%ЕСЛИ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ/МОДЕЛЬЮ - НЕ АКТУАЛЬНОСтавим оценку не актуально, когда клиент не определился хотя бы с одним: либо с маркой, либо с модельюЕСЛИ НЕ ОПРЕДЕЛИЛСЯ С МАРКОЙ ИЛИ МОДЕЛЬЮ - НЕ АКТУАЛЬНОСтавим оценку не актуально, когда клиент не определился хотя бы с одним: либо с маркой, либо с моделью"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_151_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "СОЛЯНКА - ПРОЕКТЫ ОБУЧЕНИЕ/АВТОШКОЛАВ",
    "tone": "warning",
    "tags": ["handbook", "автошколав", "обучение", "оператор", "ошибка_оператора", "проекты", "скрипт", "солянка", "солянка - проекты обучение/автошколав", "справка", "справочник"],
    "items": [
      "случае, если в скрипте ОБУЧЕНИЯ не предусмотрено ограничений - Пропускаем от 15 лет и вышеВ случае, если в скрипте АВТОШКОЛЫ не предусмотрено ограничений - Пропускаем от 16 лет и выше"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_152_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ВОЗРАСТНОЕ ОГРАНИЧЕНИЕП",
    "tone": "warning",
    "tags": ["handbook", "банк", "возрастное", "возрастное ограничениеп", "кредит", "ограничениеп", "оператор", "ошибка_оператора", "справка", "справочник"],
    "items": [
      "о кредиту/ипотеке/рассрочке С 21 ГОДА ДО 70 ЛЕТ ВКЛЮЧИТЕЛЬНО"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_156_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ВНЕШНИЕ ФАКТОРЫ (",
    "tone": "warning",
    "tags": ["handbook", "внешние", "внешние факторы (", "оператор", "ошибка_оператора", "справка", "справочник", "факторы"],
    "items": [
      "услуга/покупка зависит от внешних факторов «если получится, если выздоровеете» и тд) - пропускаем"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_157_7",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "МЕСТОНАХОЖДЕНИЕ/МЕСТО ПРОЖИВАНИЯМЕСТО ОКАЗАНИЯ УСЛУГИЕ",
    "tone": "warning",
    "tags": ["0", "100", "handbook", "замечание", "место", "местонахождение", "местонахождение/место проживанияместо оказания услугие", "оказания", "оператор", "ошибка_оператора", "полный", "проживанияместо", "справка", "справочник", "услугие", "штраф"],
    "items": [
      "сли нужно уточнить местонахождение:",
      "1. Какой у вас город? - 0%",
      "2. Из какого города звоните? - 100%",
      "3. Из какого вы города - 100%Если нужно уточнить место проживания:",
      "1. Какой у вас город? - 0%",
      "2. Из какого города звоните? - 0%",
      "3. Из какого вы города - 100%Если нужно уточнить место оказания услуги:",
      "1. Какой у вас город? - 0%",
      "2. Из какого города звоните? - 0%",
      "3. Из какого вы города - 0%"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_161_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "ГОРОД ПРОЕКТАЕ",
    "tone": "warning",
    "tags": ["handbook", "город", "город проектае", "оператор", "ошибка_оператора", "проектае", "скрипт", "справка", "справочник"],
    "items": [
      "сли в скрипте не прописан город компании, оператор вправе говорить, что звонит из Москвы"
    ],
    "description": "Справочный материал для операторов"
  },
  {
    "id": "handbook_166_4",
    "source": "handbook",
    "sourceLabel": "Справочник",
    "category": "Справочник",
    "subtitle": "КВАРТИРЫЕ",
    "tone": "warning",
    "tags": ["handbook", "na", "квартирые", "неактуально", "оператор", "отказ", "ошибка_оператора", "справка", "справочник"],
    "items": [
      "сли клиент запрашивает цену на 1-ком квартиру, а оператор называет цену на студию - оценка НЕ АКТУАЛЬНО"
    ],
    "description": "Справочный материал для операторов"
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

          ${renderScriptMediaBlock(script)}
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
    const isMetod = o.source === 'metodichka' ||
      String(o.id || '').startsWith('metod_') ||
      (o.categories || []).includes('Методичка');
    return {
      id: o.id,
      title: o.title || '',
      text: o.text || '',
      categories: cats,
      scripts: used.map(s => ({ id: s.id, title: s.title, category: s.category || '' })),
      scriptTitles,
      childrenCount: countTree(o.children || []),
      isMetodichka: !!isMetod
    };
  });
}

function renderOtabotkiCatalog() {
  const q = (state.otabotkiQuery || '').toLowerCase().trim();
  const catFilter = state.otabotkiCat || '';
  const scriptFilter = state.otabotkiScriptFilter || '';
  const src = state.otabotkiSource || 'own';
  const canChange = canEdit();

  let allList = buildOtabotkiIndex();
  const ownCount = allList.filter(x => !x.isMetodichka).length;
  const metodCount = allList.filter(x => x.isMetodichka).length;

  let list = allList.filter(x => src === 'metodichka' ? x.isMetodichka : !x.isMetodichka);

  const categories = [...new Set([
    ...list.flatMap(x => x.categories).filter(c => c !== 'Методичка'),
    ...(src === 'own' ? allCategoriesFromScripts() : [])
  ])].filter(Boolean).sort((a, b) => a.localeCompare(b, 'ru'));

  const scriptOptions = state.scripts
    .map(s => ({ id: s.id, title: s.title, category: s.category || '' }))
    .sort((a, b) => a.title.localeCompare(b.title, 'ru'));

  if (catFilter) {
    list = list.filter(x => x.categories.some(c => c === catFilter));
  }
  if (scriptFilter && src === 'own') {
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
      return q.split(/\s+/).filter(Boolean).every(word => hay.includes(word));
    });
  }

  list = list.sort((a, b) => a.title.localeCompare(b.title, 'ru'));

  const srcHint = src === 'metodichka'
    ? 'Готовые ответы из методички по вопросам и возражениям клиентов.'
    : 'Ваши отработки: созданные здесь или в скриптах.';

  return `
    <div class="card" style="margin-bottom:16px;padding:14px 16px">
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between">
        <div>
          <strong>Каталог отработок</strong>
          <p style="margin:4px 0 0;font-size:0.85rem;color:var(--text-muted)">${srcHint}</p>
        </div>
        ${canChange && src === 'own' ? `<button class="btn btn-primary btn-sm" data-action="add-shared-otabotka">+ Новая отработка</button>` : ''}
      </div>
      <div class="ot-source-tabs" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">
        <button type="button" class="btn btn-sm ${src === 'own' ? 'btn-primary' : 'btn-outline'}" data-action="set-otabotki-source" data-source="own">✏️ Свои <span class="badge" style="margin-left:4px">${ownCount}</span></button>
        <button type="button" class="btn btn-sm ${src === 'metodichka' ? 'btn-primary' : 'btn-outline'}" data-action="set-otabotki-source" data-source="metodichka">📘 Методичка <span class="badge" style="margin-left:4px">${metodCount}</span></button>
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
      ${src === 'own' ? `<select class="search-input" id="otabotkiScriptFilter" style="flex:0 0 220px;cursor:pointer">
        <option value="">Все скрипты</option>
        ${scriptOptions.map(s => `<option value="${s.id}" ${s.id === scriptFilter ? 'selected' : ''}>${escapeHtml(s.title)}${s.category ? ' · ' + escapeHtml(s.category) : ''}</option>`).join('')}
      </select>` : ''}
    </div>
    <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:16px">
      Найдено: <b>${list.length}</b> · раздел «${src === 'metodichka' ? 'Методичка' : 'Свои'}» · всего ${(state.sharedOtabotki || []).length}
    </p>

    ${list.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🔄</div><p>${src === 'metodichka' ? 'В методичке отработок не найдено.' : 'Своих отработок не найдено. Создайте первую.'}</p></div>`
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
              ${item.isMetodichka ? `
              <button class="btn btn-outline btn-sm" data-action="view-otabotka" data-id="${item.id}">Открыть</button>
              <button class="btn btn-outline btn-sm" data-action="attach-otabotka-prompt" data-id="${item.id}">➕ В скрипт</button>
              ` : `
              <button class="btn btn-outline btn-sm" data-action="edit-shared-otabotka" data-id="${item.id}">✏️ Править</button>
              <button class="btn btn-outline btn-sm" data-action="attach-otabotka-prompt" data-id="${item.id}">➕ В скрипт</button>
              <button class="btn btn-danger btn-sm" data-action="delete-shared-otabotka" data-id="${item.id}">🗑</button>
              `}
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
          <article class="car-card ${c.notInAc ? 'car-not-in-ac' : ''}">
            <div class="car-card-body card-interactive" data-action="view-car" data-id="${escapeAttr(c.id)}" title="Открыть карточку">
              <div class="car-card-top">
                <h3 class="car-card-title">${escapeHtml(c.brand)} <span class="car-model">${escapeHtml(c.model)}</span></h3>
                <div class="car-card-badges">
                  ${c.notInAc ? '<span class="badge badge-danger">В АЦ НЕТ</span>' : ''}
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
     <div class="form-group">
       <label class="goal-wd-chip" style="display:inline-flex">
         <input type="checkbox" id="fCarNotInAc" ${item && item.notInAc ? 'checked' : ''}>
         <span>⚠ В АЦ нет (по правилам не проводится)</span>
       </label>
     </div>
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
    notInAc: !!document.getElementById('fCarNotInAc')?.checked,
    description: (function() {
      let d = document.getElementById('fCarDesc')?.value.trim() || '';
      const flag = !!document.getElementById('fCarNotInAc')?.checked;
      const note = '⚠ В АЦ НЕТ: по правилам проекта это авто / сегмент обычно не проводится (заявка может уйти в «Не актуально»).';
      if (flag && !d.includes('В АЦ НЕТ')) d = (d ? d + ' ' : '') + note;
      if (!flag) d = d.replace(/\s*⚠ В АЦ НЕТ:[^.]*\./g, '').trim();
      return d;
    })(),
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
  // Каждый видит только свои записи; Александр — все
  if (!isAdminUser()) {
    const me = state.currentUser || '';
    list = list.filter(c => !c.operator || c.operator === me);
  }
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
          <p class="catalog-hint">Записи в формате WAV. Можно назвать, отметить статус и добавить комментарий. Аудио сохраняется локально и на Google Drive (синхронизация).</p>
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
                  ${isAdminUser() && c.operator ? `<span class="badge badge-primary">${escapeHtml(c.operator)}</span>` : ''}
                  ${c.driveId ? `<span class="badge badge-teal" title="На Google Drive">☁</span>` : ''}
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

  // Загрузка на Google Drive (синхронизация аудио между устройствами)
  let driveId = '';
  let driveUrl = '';
  let webViewLink = '';
  try {
    if (typeof driveMediaPost === 'function' && getSheetsExecUrl()) {
      toast('Загрузка записи на Drive…');
      const base64 = await fileToBase64(file);
      const res = await driveMediaPost({
        op: 'uploadMedia',
        data: base64,
        fileName: file.name || ('call_' + id + '.wav'),
        mimeType: file.type || 'audio/wav',
        scriptId: 'call_' + (state.currentUser || 'op').replace(/\s+/g, '_')
      });
      if (res && res.ok && res.driveId) {
        driveId = res.driveId;
        driveUrl = res.url || '';
        webViewLink = res.webViewLink || '';
      }
    }
  } catch (de) {
    console.warn('call drive upload', de);
    toast('Аудио сохранено локально; Drive: ' + (de.message || de), 'error');
  }

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
    driveId: driveId || undefined,
    url: driveUrl || undefined,
    webViewLink: webViewLink || undefined,
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  persistCallsMeta();
  toast(driveId ? 'Запись добавлена и на Drive' : 'Запись добавлена (локально)');
  render();
  // open edit modal to set title/status
  setTimeout(() => showCallModal(id), 50);
}

async function deleteCall(id) {
  if (isCommonAccount()) return;
  loadCallsMeta();
  const call = (state.calls || []).find(c => c.id === id);
  state.calls = (state.calls || []).filter(c => c.id !== id);
  persistCallsMeta();
  try { await idbDeleteAudio(id); } catch (_) {}
  if (call && call.driveId && typeof driveMediaPost === 'function') {
    try { await driveMediaPost({ op: 'deleteMedia', driveId: call.driveId }); } catch (_) {}
  }
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
  let blob = await idbGetAudio(id);
  if (!blob) {
    // Попробуем с Drive
    try {
      loadCallsMeta();
      const call = (state.calls || []).find(c => c.id === id);
      if (call && call.driveId && typeof resolveMediaPlayUrl === 'function') {
        const url = await resolveMediaPlayUrl({ driveId: call.driveId, kind: 'audio', type: 'audio/wav' });
        if (url) {
          audioEl.dataset.blobUrl = url;
          audioEl.src = url;
          audioEl.dataset.loaded = '1';
          await new Promise((resolve) => {
            if (audioEl.readyState >= 1) { resolve(); return; }
            const onMeta = () => { audioEl.removeEventListener('loadedmetadata', onMeta); resolve(); };
            const onErr = () => { audioEl.removeEventListener('error', onErr); resolve(); };
            audioEl.addEventListener('loadedmetadata', onMeta);
            audioEl.addEventListener('error', onErr);
          });
          return true;
        }
      }
    } catch (e) { console.warn('call drive load', e); }
    toast('Аудиофайл не найден', 'error');
    return false;
  }
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
  try { scheduleCloudExtrasSave(); } catch (_) {}
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
  try { scheduleCloudExtrasSave(); } catch (_) {}
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

/** Рабочие дни: основные дни недели + доп. даты − перенесённые/выходные (skipped) */
function getGoalWorkDates(goal) {
  if (!goal) return [];
  const start = parseISODate(goal.startDate);
  const end = parseISODate(goal.endDate);
  const main = new Set((goal.mainShifts || []).map(Number));
  const extra = new Set(goal.extraShifts || []);
  const skipped = new Set(goal.skippedShifts || []);
  const dates = [];
  for (const iso of enumerateDates(start, end)) {
    if (skipped.has(iso)) continue; // этот день снят (перенос)
    const d = parseISODate(iso);
    const wd = d.getDay();
    if (main.has(wd) || extra.has(iso)) dates.push(iso);
  }
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
      isSkipped: (goal.skippedShifts || []).includes(iso),
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

function renderCalcTable() {
  return `
  <div class="card rules-desc-card">
    <h3 class="rules-section-title">🧮 Калькулятор штрафов</h3>
    <p class="catalog-hint">Сложение ошибок по «весу» влияния. Чем больше сумма баллов — тем жёстче итог (вплоть до «Не актуально»).</p>
  </div>

  <div class="calc-wrap card">
    <div class="calc-scroll">
      <table class="calc-table">
        <thead>
          <tr>
            <th class="calc-h calc-h-na">Не актуально</th>
            <th class="calc-h calc-h-strong">Сильно влияет<br>на актуальность</th>
            <th class="calc-h calc-h-mid">Влияет<br>на актуальность</th>
            <th class="calc-h calc-h-weak">Слабо влияет<br>на актуальность</th>
            <th class="calc-h calc-h-none">Не влияет<br>на актуальность</th>
            <th class="calc-h calc-h-rules" colspan="4">Базовые правила комбинаций</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="calc-w calc-w-na">≥ (5)</td>
            <td class="calc-w calc-w-strong">(3)</td>
            <td class="calc-w calc-w-mid">(2)</td>
            <td class="calc-w calc-w-weak">(1)</td>
            <td class="calc-w calc-w-none">(0)</td>
            <td class="calc-rule">75% + 75% = <b>50%</b></td>
            <td class="calc-rule">75% + 75% + 75% = <b>50%</b></td>
            <td class="calc-rule">50% + 50% = <b>0%</b></td>
            <td class="calc-rule">0% + 75% = <b>0%</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="card rules-desc-card" style="margin-top:14px">
    <h3 class="rules-section-title">Пример: две и более ошибки в одной заявке</h3>
    <p class="catalog-hint">Складываем веса первой и второй ошибки → смотрим результат.</p>
  </div>

  <div class="calc-wrap card">
    <div class="calc-scroll">
      <table class="calc-table calc-matrix">
        <thead>
          <tr>
            <th class="calc-h calc-h-strong">Первая ошибка</th>
            <th class="calc-h calc-h-mid">Вторая ошибка</th>
            <th class="calc-h calc-h-sum">Сумма</th>
            <th class="calc-h calc-h-result">Результат</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="calc-w calc-w-strong">(3)</td>
            <td class="calc-w calc-w-strong">(3)</td>
            <td class="calc-w calc-w-na">(6)</td>
            <td class="calc-result calc-result-na">Не актуально</td>
          </tr>
          <tr>
            <td class="calc-w calc-w-strong">(3)</td>
            <td class="calc-w calc-w-mid">(2)</td>
            <td class="calc-w calc-w-na">(5)</td>
            <td class="calc-result calc-result-na">Не актуально</td>
          </tr>
          <tr>
            <td class="calc-w calc-w-mid">(2)</td>
            <td class="calc-w calc-w-mid">(2)</td>
            <td class="calc-w calc-w-sum4">(4)</td>
            <td class="calc-result calc-result-0">0%</td>
          </tr>
          <tr>
            <td class="calc-w calc-w-strong">(3)</td>
            <td class="calc-w calc-w-weak">(1)</td>
            <td class="calc-w calc-w-sum4">(4)</td>
            <td class="calc-result calc-result-0">0%</td>
          </tr>
          <tr>
            <td class="calc-w calc-w-mid">(2)</td>
            <td class="calc-w calc-w-weak">(1)</td>
            <td class="calc-w calc-w-sum3">(3)</td>
            <td class="calc-result calc-result-0">0%</td>
          </tr>
          <tr>
            <td class="calc-w calc-w-weak">(1)</td>
            <td class="calc-w calc-w-weak">(1)</td>
            <td class="calc-w calc-w-sum2">(2)</td>
            <td class="calc-result calc-result-0">0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="card rules-desc-card" style="margin-top:14px">
    <p class="catalog-hint"><b>Как читать:</b> у каждой ошибки есть «вес» (0–5). Сумма ≥ 5 → заявка неактуальна. Сумма 2–4 при двух ошибках часто даёт <b>0%</b>. Одинаковые 75%+75% смягчаются до 50% по правилам комбинаций.</p>
  </div>
  `;
}

const RULES_SOURCE_INFO = {
  general: { title: 'Общие критерии', desc: 'Базовые правила: неактуально, штрафы 0% / 50% / 75% — ошибки оператора и заполнение заявки.' },
  solyanka: { title: 'Солянка', desc: 'Критерии для проектов «солянка»: когда заявка неактуальна и какие штрафы ставятся.' },
  spk: { title: 'СПК (служба по контракту)', desc: 'Отдельные правила для проектов службы по контракту: неактуально и успешные кейсы.' },
  calc: { title: 'Калькулятор штрафов', desc: 'Таблица весов ошибок и примеры, как складывать несколько нарушений в одну оценку.' },
  handbook: { title: 'Справочник', desc: 'Сжатые справочные блоки: родственники, юрлица, мессенджеры, формулировки, ограничения и т.д.' },
  important: { title: 'Важные моменты', desc: 'Типовые ситуации: неактуально / успешно со штрафом / успешно без штрафа.' },
  answers: { title: 'Чёткие и нечёткие ответы', desc: 'Как оценивать ответы клиента: чёткий, 50% нечёткий, 0% актуальность не выявлена.' },
  questions: { title: 'Корректность вопроса', desc: 'Закрытые и полуоткрытые вопросы: корректная, расплывчатая и некорректная формулировка.' },
  brands: { title: 'Марки и модели вне списка', desc: 'Марки/модели, которых нет в стандартных списках — ориентир, когда заявка может уйти в неактуально.' },
  mistakes: { title: 'Частые ошибки', desc: 'Типовые ошибки операторов, критерий оценки и как исправить.' },
  custom: { title: 'Свои штрафы', desc: 'Правила, которые вы добавили сами, с привязкой к группам и скриптам.' },
  fines: { title: 'Штрафы оператора', desc: 'Денежные и дисциплинарные санкции за нарушения смены, графика и общения с клиентом.' }
};


/* ========== Справочная информация (пользовательская) ========== */
const REF_INFO_KEY = 'ect_refinfo_v1';
const REF_MEDIA_PREFIX = 'refmedia_';

function loadRefInfo() {
  try {
    const raw = localStorage.getItem(REF_INFO_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (Array.isArray(p)) state.refInfo = p;
    }
  } catch (_) {}
  if (!Array.isArray(state.refInfo)) state.refInfo = [];
}

function persistRefInfo() {
  try { localStorage.setItem(REF_INFO_KEY, JSON.stringify(state.refInfo || [])); } catch (e) { console.warn(e); }
  try { scheduleCloudExtrasSave(); } catch (_) {}
}

function allRefTags() {
  const set = new Set();
  (state.refInfo || []).forEach(item => (item.tags || []).forEach(t => set.add(String(t).toLowerCase())));
  return [...set].sort((a, b) => a.localeCompare(b, 'ru'));
}

function renderRefInfo() {
  loadRefInfo();
  const q = (state.refInfoQuery || '').toLowerCase().trim();
  const tag = (state.refInfoTag || '').toLowerCase().trim();
  let list = (state.refInfo || []).slice().sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

  if (tag) list = list.filter(x => (x.tags || []).some(t => String(t).toLowerCase() === tag));
  if (q) {
    list = list.filter(x => {
      const blob = [
        x.title, x.body,
        ...(x.tags || []),
        ...(x.links || []).map(l => (l.title || '') + ' ' + (l.url || ''))
      ].join(' ').toLowerCase();
      return blob.includes(q);
    });
  }

  const tags = allRefTags();
  const canChange = typeof canEdit === 'function' ? (!isCommonAccount() && canEdit()) : !isCommonAccount();

  return `
    <div class="card catalog-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>📚 Справочная информация</strong>
          <p class="catalog-hint">Заметки со собраний, ссылки, скрины, аудио. Ищите по тексту и <b>тегам</b>.</p>
        </div>
        ${canChange ? `<button class="btn btn-primary btn-sm" data-action="add-ref">+ Материал</button>` : ''}
      </div>
      <div class="catalog-filters">
        <div class="search-wrap" style="flex:1;min-width:180px">
          <span class="search-icon">🔍</span>
          <input type="search" id="refInfoSearch" class="search-input" placeholder="Поиск по тексту, ссылкам, тегам…" value="${escapeAttr(state.refInfoQuery || '')}" autocomplete="off">
        </div>
      </div>
      ${tags.length ? `
        <div class="lb-period-tabs" style="margin-top:10px">
          <button type="button" class="lb-period-tab ${!tag ? 'active' : ''}" data-action="set-ref-tag" data-tag="">Все теги</button>
          ${tags.map(t => `
            <button type="button" class="lb-period-tab ${tag === t ? 'active' : ''}" data-action="set-ref-tag" data-tag="${escapeAttr(t)}">#${escapeHtml(t)}</button>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <div class="ref-grid">
      ${list.map(item => `
        <article class="card ref-card card-interactive" data-action="view-ref" data-id="${escapeAttr(item.id)}" title="Открыть">
          <div class="ref-card-head">
            <h3 class="call-title">${escapeHtml(item.title || 'Без названия')}</h3>
            <div class="call-actions" data-stop-bubble="1">
              ${canChange ? `
                <button class="btn btn-outline btn-sm" data-action="edit-ref" data-id="${escapeAttr(item.id)}">✏️</button>
                <button class="btn btn-danger btn-sm" data-action="delete-ref" data-id="${escapeAttr(item.id)}">🗑</button>
              ` : ''}
            </div>
          </div>
          ${item.tags && item.tags.length ? `
            <div class="ref-tags">${item.tags.map(t => `<span class="badge badge-primary">#${escapeHtml(t)}</span>`).join('')}</div>
          ` : ''}
          ${item.body ? `<p class="ref-preview">${escapeHtml(String(item.body).slice(0, 180))}${String(item.body).length > 180 ? '…' : ''}</p>` : ''}
          ${(item.links || []).length ? `<div class="ref-links-preview">${(item.links || []).slice(0, 3).map(l => `<a class="ref-link" href="${escapeAttr(l.url || '#')}" target="_blank" rel="noopener">${escapeHtml(l.title || l.url || 'ссылка')}</a>`).join('')}</div>` : ''}
          <div class="call-meta">
            ${(item.links || []).length ? `<span class="badge">🔗 ${item.links.length}</span>` : ''}
            ${(item.images || []).length ? `<span class="badge">🖼 ${item.images.length}</span>` : ''}
            ${(item.audio || []).length ? `<span class="badge">🎧 ${item.audio.length}</span>` : ''}
            ${item.author ? `<span class="badge">${escapeHtml(item.author)}</span>` : ''}
            ${item.updatedAt ? `<span class="badge">${formatDate(item.updatedAt)}</span>` : ''}
          </div>
        </article>
      `).join('') || `<div class="empty-state"><div class="empty-icon">📚</div><p>Пока пусто. Добавьте первый материал со собрания или полезную ссылку.</p></div>`}
    </div>
  `;
}

function showRefModal(id) {
  if (isCommonAccount()) { toast('Только просмотр', 'error'); return; }
  loadRefInfo();
  const item = id ? (state.refInfo || []).find(x => x.id === id) : null;
  const imgs = (item && item.images) ? item.images : [];
  const auds = (item && item.audio) ? item.audio : [];
  const mediaList = (kind, arr) => {
    if (!arr.length) return '<p class="field-hint">Пока нет файлов</p>';
    return `<div class="ref-media-edit-list">${arr.map(m => `
      <div class="ref-media-edit-row">
        <span class="ref-media-edit-name">${kind === 'images' ? '🖼' : '🎧'} ${escapeHtml(m.name || m.id)}</span>
        <button type="button" class="btn btn-danger btn-sm" data-action="delete-ref-media" data-rid="${escapeAttr(item.id)}" data-mid="${escapeAttr(m.id)}" data-kind="${kind}">Удалить</button>
      </div>`).join('')}</div>`;
  };
  openModal(
    item ? 'Редактировать материал' : 'Новый материал',
    `<div class="form-group"><label>Заголовок</label>
       <input type="text" id="fRefTitle" value="${escapeAttr(item ? item.title : '')}" placeholder="Например: Собрание 29.08 — изменения по кредиту"></div>
     <div class="form-group"><label>Текст</label>
       <textarea id="fRefBody" rows="6" placeholder="Что обсудили, важные моменты…">${escapeHtml(item ? (item.body || '') : '')}</textarea>
     </div>
     <div class="form-group"><label>Теги (через запятую)</label>
       <input type="text" id="fRefTags" value="${escapeAttr(item ? (item.tags || []).join(', ') : '')}" placeholder="собрание, кредит, скрипт">
       <p class="field-hint">По тегам удобно фильтровать в списке.</p>
     </div>
     <div class="form-group"><label>Ссылки (каждая с новой строки: название | url)</label>
       <textarea id="fRefLinks" rows="3" placeholder="Таблица штрафов | https://…">${escapeHtml(item ? (item.links || []).map(l => (l.title ? l.title + ' | ' : '') + (l.url || '')).join('\n') : '')}</textarea>
     </div>
     <div class="form-group"><label>Скриншоты / изображения</label>
       ${item ? mediaList('images', imgs) : ''}
       <input type="file" id="fRefImages" accept="image/*" multiple>
       <p class="field-hint">Новые файлы добавятся к списку. Удаление — кнопкой «Удалить» у файла.</p>
     </div>
     <div class="form-group"><label>Аудио</label>
       ${item ? mediaList('audio', auds) : ''}
       <input type="file" id="fRefAudio" accept="audio/*,.mp3,.wav,.m4a,.ogg" multiple>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-ref" ${item ? `data-id="${item.id}"` : ''}>Сохранить</button>`
  );
}

async function deleteRefMedia(refId, mediaId, kind) {
  if (isCommonAccount()) return;
  loadRefInfo();
  const item = (state.refInfo || []).find(x => x.id === refId);
  if (!item) return;
  const key = kind === 'audio' ? 'audio' : 'images';
  if (!Array.isArray(item[key])) item[key] = [];
  const found = item[key].find(m => m.id === mediaId);
  item[key] = item[key].filter(m => m.id !== mediaId);
  item.updatedAt = Date.now();
  try { await idbDeleteAudio(mediaId); } catch (_) {}
  if (found && found.driveId && typeof driveMediaPost === 'function') {
    try { await driveMediaPost({ op: 'deleteMedia', driveId: found.driveId }); } catch (_) {}
  }
  persistRefInfo();
  toast('Файл удалён');
  const hasForm = document.getElementById('fRefTitle');
  if (hasForm) showRefModal(refId);
  else showRefView(refId);
}

async function saveRefInfo(id) {
  if (isCommonAccount()) return;
  loadRefInfo();
  const title = document.getElementById('fRefTitle')?.value.trim();
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  const body = document.getElementById('fRefBody')?.value || '';
  const tags = (document.getElementById('fRefTags')?.value || '')
    .split(/[,;]+/).map(s => s.trim()).filter(Boolean);
  const links = (document.getElementById('fRefLinks')?.value || '')
    .split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
      const parts = line.split('|').map(s => s.trim());
      if (parts.length >= 2) return { title: parts[0], url: parts.slice(1).join('|').trim() };
      return { title: '', url: parts[0] };
    });

  let item;
  if (id) {
    item = state.refInfo.find(x => x.id === id);
    if (!item) { toast('Не найдено', 'error'); return; }
    Object.assign(item, { title, body, tags, links, updatedAt: Date.now() });
  } else {
    item = {
      id: uid(), title, body, tags, links,
      images: [], audio: [],
      author: state.currentUser || '',
      createdAt: Date.now(), updatedAt: Date.now()
    };
    state.refInfo.push(item);
  }
  if (!Array.isArray(item.images)) item.images = [];
  if (!Array.isArray(item.audio)) item.audio = [];

  const imgInput = document.getElementById('fRefImages');
  const audInput = document.getElementById('fRefAudio');
  try {
    const uploadOne = async (file, kind) => {
      const mid = REF_MEDIA_PREFIX + uid();
      const blob = file instanceof Blob ? file : new Blob([file], { type: file.type || (kind === 'audio' ? 'audio/mpeg' : 'image/png') });
      const entry = {
        id: mid,
        name: file.name || kind,
        type: blob.type || file.type || '',
        size: blob.size || file.size || 0
      };
      // 1) Google Drive (синхронизация между устройствами)
      let driveOk = false;
      try {
        if (typeof driveMediaPost === 'function' && getSheetsExecUrl()) {
          toast('Загрузка на Drive: ' + (file.name || kind) + '…');
          const base64 = await fileToBase64(file);
          const res = await driveMediaPost({
            op: 'uploadMedia',
            data: base64,
            fileName: file.name || (kind + '.bin'),
            mimeType: file.type || blob.type || 'application/octet-stream',
            scriptId: 'ref_' + item.id
          });
          if (res && res.ok && res.driveId) {
            entry.driveId = res.driveId;
            entry.url = res.url;
            entry.webViewLink = res.webViewLink;
            entry.kind = res.kind || kind;
            driveOk = true;
          }
        }
      } catch (de) {
        console.warn('ref drive upload', de);
      }
      // 2) Локальный кэш (IndexedDB) — быстрый просмотр на этом ПК
      try { await idbPutAudio(mid, blob); } catch (_) {}
      if (!driveOk) {
        console.warn('Файл только локально (Drive недоступен):', file.name);
      }
      return entry;
    };

    if (imgInput?.files?.length) {
      for (const file of imgInput.files) {
        item.images.push(await uploadOne(file, 'image'));
      }
    }
    if (audInput?.files?.length) {
      for (const file of audInput.files) {
        item.audio.push(await uploadOne(file, 'audio'));
      }
    }
  } catch (e) {
    console.warn(e);
    toast('Часть файлов не сохранилась: ' + (e.message || e), 'error');
  }

  persistRefInfo();
  closeModal();
  toast('Сохранено');
  render();
}

async function deleteRefInfo(id) {
  if (isCommonAccount()) return;
  if (!confirm('Удалить материал и вложения?')) return;
  loadRefInfo();
  const item = (state.refInfo || []).find(x => x.id === id);
  if (item) {
    for (const m of [...(item.images || []), ...(item.audio || [])]) {
      try { await idbDeleteAudio(m.id); } catch (_) {}
    }
  }
  state.refInfo = (state.refInfo || []).filter(x => x.id !== id);
  persistRefInfo();
  toast('Удалено');
  render();
}

async function showRefView(id) {
  loadRefInfo();
  const item = (state.refInfo || []).find(x => x.id === id);
  if (!item) { toast('Не найдено', 'error'); return; }

  function linkify(text) {
    const esc = escapeHtml(text || '');
    return esc.replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener" class="ref-link">$1</a>'
    ).replace(/\n/g, '<br>');
  }

  const imageHtml = [];
  for (const img of (item.images || [])) {
    try {
      let url = await resolveMediaPlayUrl(img);
      if (!url) {
        let blob = await idbGetAudio(img.id);
        if (blob && !(blob instanceof Blob)) {
          blob = new Blob([blob], { type: img.type || 'image/png' });
        }
        if (blob) {
          const typed = blob.type ? blob : new Blob([blob], { type: img.type || 'image/png' });
          url = URL.createObjectURL(typed);
        }
      }
      if (url) {
        imageHtml.push(
          `<figure class="ref-media">
             <a href="${escapeAttr(img.webViewLink || url)}" target="_blank" rel="noopener">
               <img src="${escapeAttr(url)}" alt="${escapeAttr(img.name || '')}" class="ref-img" loading="lazy">
             </a>
             <figcaption class="ref-media-cap">
               <span>${escapeHtml(img.name || 'Изображение')}</span>
               ${(!isCommonAccount() && typeof canEdit === 'function' && canEdit()) ? `<button type="button" class="btn btn-danger btn-sm" data-action="delete-ref-media" data-rid="${escapeAttr(item.id)}" data-mid="${escapeAttr(img.id)}" data-kind="images">Удалить</button>` : ''}
             </figcaption>
           </figure>`
        );
      } else {
        imageHtml.push(`<p class="field-hint">⚠ Не удалось загрузить: ${escapeHtml(img.name || img.id || 'файл')}</p>`);
      }
    } catch (e) {
      console.warn('ref image', e);
      imageHtml.push(`<p class="field-hint">⚠ Ошибка загрузки изображения</p>`);
    }
  }
  const audioHtml = [];
  for (const a of (item.audio || [])) {
    try {
      let url = await resolveMediaPlayUrl(a);
      if (!url) {
        let blob = await idbGetAudio(a.id);
        if (blob && !(blob instanceof Blob)) blob = new Blob([blob], { type: a.type || 'audio/mpeg' });
        if (blob) url = URL.createObjectURL(blob);
      }
      if (url) {
        audioHtml.push(`<div class="ref-audio"><div class="ref-media-cap"><span class="field-hint">${escapeHtml(a.name || 'Аудио')}</span>
          ${(!isCommonAccount() && typeof canEdit === 'function' && canEdit()) ? `<button type="button" class="btn btn-danger btn-sm" data-action="delete-ref-media" data-rid="${escapeAttr(item.id)}" data-mid="${escapeAttr(a.id)}" data-kind="audio">Удалить</button>` : ''}
        </div><audio controls preload="metadata" src="${escapeAttr(url)}" style="width:100%"></audio></div>`);
      } else {
        audioHtml.push(`<p class="field-hint">⚠ Аудио не найдено: ${escapeHtml(a.name || '')}</p>`);
      }
    } catch (e) {
      console.warn('ref audio', e);
    }
  }

  const linksBlock = (item.links || []).length ? `
       <div style="margin-top:12px"><strong>Ссылки</strong>
         <ul class="ref-links-list">${item.links.map(l => {
           const url = l.url || '';
           const label = l.title || url;
           return `<li class="ref-link-item"><a class="ref-link" href="${escapeAttr(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a></li>`;
         }).join('')}
         </ul>
       </div>` : '';

  openModal(
    item.title || 'Материал',
    `${item.tags && item.tags.length ? `<div class="ref-tags" style="margin-bottom:10px">${item.tags.map(t => `<span class="badge badge-primary">#${escapeHtml(t)}</span>`).join('')}</div>` : ''}
     ${item.body ? `<div class="ref-body">${linkify(item.body)}</div>` : ''}
     ${linksBlock}
     ${imageHtml.length ? `<div class="ref-media-grid">${imageHtml.join('')}</div>` : ''}
     ${audioHtml.length ? `<div style="margin-top:12px">${audioHtml.join('')}</div>` : ''}
     <p class="field-hint" style="margin-top:12px">${item.author ? escapeHtml(item.author) + ' · ' : ''}${item.updatedAt ? formatDate(item.updatedAt) : ''}</p>`,
    `<button class="btn btn-outline" data-action="close-modal">Закрыть</button>
     ${(!isCommonAccount() && typeof canEdit === 'function' && canEdit()) ? `<button class="btn btn-primary" data-action="edit-ref" data-id="${escapeAttr(item.id)}">Редактировать</button>` : ''}`
  );
}

function getAllRuleBlocks() {
  const base = DEFAULT_RULES.map(b => ({ ...b, items: (b.items || []).slice() }));
  const finesBlock = {
    id: 'operator_fines',
    source: 'fines',
    sourceLabel: 'Штрафы',
    category: 'Дисциплина',
    subtitle: 'Штрафы оператора',
    tone: 'danger',
    tags: ['штрафы', 'дисциплина', 'смена', 'прогул', 'опоздание', 'перерыв', 'увольнение'],
    items: (typeof OPERATOR_FINES !== 'undefined' ? OPERATOR_FINES : []).map(f => f.text + ' — ' + f.amount)
  };
  const custom = (state.sharedPenalties || []).map(p => ({
    id: 'custom_' + p.id,
    source: 'custom',
    sourceLabel: 'Свои',
    category: p.pct || 'Свой штраф',
    subtitle: p.title || 'Штраф',
    tone: p.tone || 'warning',
    tags: Array.isArray(p.tags) ? p.tags.slice() : [],
    items: [p.text || p.title || ''],
    meta: p
  }));
  return base.concat([finesBlock], custom);
}


/** Денежные / дисциплинарные штрафы оператора (смена, график, клиент) */
const OPERATOR_FINES = [
  { id: 'f1', text: 'Прогул смены без предупреждения СВ', amount: '1 000 ₽', severe: false },
  { id: 'f2', text: 'Опоздание на смену более чем на 5 минут', amount: '300 ₽', severe: false },
  { id: 'f3', text: 'Превышение времени перерыва более чем на 30 мин без предупреждения', amount: '300 ₽', severe: false },
  { id: 'f4', text: 'Заполнение в графе «Инфо» своего мнения, комментариев по типу: «просил не звонить», оскорбления и т.п.', amount: '300 ₽', severe: false },
  { id: 'f5', text: 'Неправильная постановка статуса в заявке / роде «первичный»', amount: '300 ₽', severe: false },
  { id: 'f6', text: 'Самостоятельный уход со смены раньше времени по графику', amount: '500 ₽', severe: false },
  { id: 'f7', text: 'Самостоятельный выход в смену без предупреждения СВ', amount: '400 ₽', severe: false },
  { id: 'f8', text: 'Хамство клиенту, использование матерных слов в диалоге', amount: 'Увольнение, без выплаты', severe: true }
];

function renderOperatorFines(query) {
  const q = (query || '').toLowerCase().trim();
  let rows = OPERATOR_FINES.slice();
  if (q) {
    rows = rows.filter(r =>
      r.text.toLowerCase().includes(q) ||
      r.amount.toLowerCase().includes(q)
    );
  }
  const list = rows.map((r, i) => `
    <div class="fine-row${r.severe ? ' fine-row-severe' : ''}">
      <div class="fine-num">${i + 1}</div>
      <div class="fine-text">${escapeHtml(r.text)}</div>
      <div class="fine-amount${r.severe ? ' fine-amount-severe' : ''}">${escapeHtml(r.amount)}</div>
    </div>`).join('');

  return `
  <div class="card rules-desc-card fines-hero">
    <h3 class="rules-section-title">💸 Штрафы оператора</h3>
    <p class="catalog-hint">Санкции за нарушения смены, графика и работы с заявкой. Критичные пункты выделены отдельно.</p>
  </div>
  <div class="card fines-table">
    <div class="fines-table-head">
      <span class="fines-col-num">№</span>
      <span class="fines-col-text">Нарушение</span>
      <span class="fines-col-amount">Санкция</span>
    </div>
    <div class="fines-table-body">
      ${list || '<p class="catalog-hint" style="padding:12px">Ничего не найдено по запросу.</p>'}
    </div>
  </div>
  <p class="field-hint" style="margin-top:10px">СВ — супервайзер. При спорных ситуациях уточняйте у руководства.</p>`;
}

function renderRules() {
  const q = (state.rulesQuery || '').toLowerCase().trim();
  let src = state.rulesSource || 'general';
  const blockId = state.rulesBlock || '';
  const all = getAllRuleBlocks();
  const toneClass = { danger: 'rules-tone-danger', warning: 'rules-tone-warning', teal: 'rules-tone-teal' };
  const canChange = typeof canEdit === 'function' ? (!isCommonAccount() && canEdit()) : !isCommonAccount();

  const sources = [
    { id: 'general', label: 'Общие', icon: '📜' },
    { id: 'solyanka', label: 'Солянка', icon: '🍲' },
    { id: 'spk', label: 'СПК', icon: '🎖️' },
    { id: 'calc', label: 'Калькулятор', icon: '🧮' },
    { id: 'handbook', label: 'Справочник', icon: '📖' },
    { id: 'important', label: 'Важные моменты', icon: '⚡' },
    { id: 'answers', label: 'Ответы', icon: '💬' },
    { id: 'questions', label: 'Вопросы', icon: '❓' },
    { id: 'brands', label: 'Марки', icon: '🚗' },
    { id: 'mistakes', label: 'Ошибки', icon: '⚠️' },
    { id: 'fines', label: 'Штрафы', icon: '💸' },
    { id: 'custom', label: 'Свои', icon: '✏️' }
  ];

  // counts per source
  const sourceCounts = {};
  all.forEach(b => {
    sourceCounts[b.source] = (sourceCounts[b.source] || 0) + (b.items || []).length;
  });

  // if search across everything - temporary show all sources content filtered
  let panelMode = 'sources'; // or 'blocks' when source selected and has many subblocks
  let blocks = all.filter(b => b.source === src);

  // subblocks list for side (second level) when source has >1 blocks
  const subblocks = blocks.map(b => ({
    id: b.id,
    label: b.subtitle || b.category,
    count: (b.items || []).length,
    category: b.category
  }));

  if (blockId) {
    blocks = blocks.filter(b => b.id === blockId);
  }

  // фильтр по тегу
  const activeTag = (state.rulesTag || '').toLowerCase().trim();
  if (activeTag) {
    blocks = blocks.map(b => {
      const tags = (b.tags || []).map(x => String(x).toLowerCase());
      const blockHit = tags.some(tg => tg === activeTag || tg.includes(activeTag));
      const items = (b.items || []).filter((it, i) => {
        const itags = getRuleItemTags(b.id, i).map(x => String(x).toLowerCase());
        if (itags.some(tg => tg === activeTag || tg.includes(activeTag))) return true;
        if (blockHit) return true;
        return String(it).toLowerCase().includes(activeTag);
      });
      // если тег только на блоке — показываем все items
      if (blockHit && items.length === 0) return { ...b, items: (b.items || []).slice() };
      return { ...b, items };
    }).filter(b => (b.items || []).length);
  }

  if (q) {
    // search within current source (or all if user typed while on source)
    blocks = all
      .filter(b => !src || b.source === src)
      .map(b => ({
        ...b,
        items: (b.items || []).filter((it, i) => {
          const tags = (b.tags || []).join(' ').toLowerCase();
          const itemTags = getRuleItemTags(b.id, i).join(' ').toLowerCase();
          return it.toLowerCase().includes(q) ||
            (b.subtitle || '').toLowerCase().includes(q) ||
            (b.category || '').toLowerCase().includes(q) ||
            tags.includes(q) ||
            itemTags.includes(q);
        })
      }))
      .filter(b => b.items.length);
    if (blockId) blocks = blocks.filter(b => b.id === blockId);
  }

  const shown = blocks.reduce((s, b) => s + b.items.length, 0);
  const srcMeta = sources.find(s => s.id === src) || sources[0];
  const totalSrc = sourceCounts[src] || 0;

  // Собрать популярные теги текущего раздела
  const tagCount = {};
  loadRuleItemTags();
  (all.filter(b => b.source === src)).forEach(b => {
    (b.tags || []).forEach(tg => {
      const k = String(tg).toLowerCase().trim();
      if (!k || k.length < 2) return;
      tagCount[k] = (tagCount[k] || 0) + 1;
    });
    (b.items || []).forEach((_, i) => {
      getRuleItemTags(b.id, i).forEach(tg => {
        const k = String(tg).toLowerCase().trim();
        if (!k || k.length < 2) return;
        tagCount[k] = (tagCount[k] || 0) + 1;
      });
    });
  });
  const popularTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ru'))
    .slice(0, 24)
    .map(([name, count]) => ({ name, count }));

  // Side panel: sources always; if current source has many subblocks, show them under
  const showSubs = subblocks.length > 1 && !q;

  return `
  <div class="catalog-layout rules-catalog-layout">
    <aside class="catalog-country-panel rules-side-panel" aria-label="Разделы справочника">
      <div class="catalog-country-title">📋 Разделы</div>
      ${sources.map(s => {
        const n = sourceCounts[s.id] || 0;
        if (s.id === 'custom' && n === 0 && !canChange) return '';
        const active = src === s.id;
        return `<button type="button" class="country-tile ${active ? 'active' : ''}" data-action="set-rules-source" data-src="${escapeAttr(s.id)}">
          <span class="country-tile-flag">${s.icon}</span>
          <span class="country-tile-name">${escapeHtml(s.label)}</span>
          <span class="country-tile-count">${n}</span>
        </button>`;
      }).join('')}

      ${showSubs ? `
        <div class="catalog-country-title" style="margin-top:12px">Подразделы</div>
        <button type="button" class="country-tile ${!blockId ? 'active' : ''}" data-action="set-rules-block" data-block="">
          <span class="country-tile-flag">📂</span>
          <span class="country-tile-name">Все в разделе</span>
          <span class="country-tile-count">${totalSrc}</span>
        </button>
        ${subblocks.map(sb => `
          <button type="button" class="country-tile ${blockId === sb.id ? 'active' : ''}" data-action="set-rules-block" data-block="${escapeAttr(sb.id)}">
            <span class="country-tile-flag">•</span>
            <span class="country-tile-name" title="${escapeAttr(sb.label)}">${escapeHtml(sb.label)}</span>
            <span class="country-tile-count">${sb.count}</span>
          </button>
        `).join('')}
      ` : ''}
    </aside>

    <div class="catalog-main">
      <div class="card catalog-toolbar">
        <div class="catalog-toolbar-row">
          <div>
            <strong>${srcMeta.icon} ${escapeHtml(srcMeta.label)}</strong>
            <p class="catalog-hint">${blockId ? escapeHtml((subblocks.find(s => s.id === blockId) || {}).label || '') : 'Выберите подраздел слева или смотрите весь раздел'} · ${shown} пункт${shown === 1 ? '' : 'ов'}</p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${canChange && src === 'custom' ? `<button class="btn btn-primary btn-sm" data-action="add-penalty">+ Свой штраф</button>` : ''}
            <a class="btn btn-outline btn-sm" href="https://docs.google.com/spreadsheets/d/1rDcSs-C3e3kDMsqOwgCItyrpArxD1WK5rRHr5G9aEwI/" target="_blank" rel="noopener">Таблица</a>
          </div>
        </div>
        <div class="catalog-filters">
          <div class="search-wrap" style="flex:1;min-width:180px">
            <span class="search-icon">🔍</span>
            <input type="search" id="rulesSearch" class="search-input" placeholder="Поиск по тексту и тегам…" value="${escapeAttr(state.rulesQuery || '')}" autocomplete="off">
          </div>
        </div>
        ${popularTags.length ? `<div class="rules-tags-row" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">
          <button type="button" class="badge ${!(state.rulesTag) ? 'badge-primary' : ''}" data-action="set-rules-tag" data-tag="" style="cursor:pointer;border:none">Все теги</button>
          ${popularTags.map(tg => {
            const active = (state.rulesTag || '').toLowerCase() === tg.name;
            return `<button type="button" class="badge ${active ? 'badge-primary' : ''}" data-action="set-rules-tag" data-tag="${escapeAttr(tg.name)}" style="cursor:pointer;border:none" title="${tg.count} блок(ов)">#${escapeHtml(tg.name)}</button>`;
          }).join('')}
        </div>` : ''}
      </div>

      ${src === 'fines' ? renderOperatorFines(q) : src === 'calc' && !q ? renderCalcTable() : `
      <div class="card rules-desc-card">
        <h3 class="rules-section-title">${escapeHtml((RULES_SOURCE_INFO[src] || {}).title || srcMeta.label)}</h3>
        <p class="catalog-hint">${escapeHtml((RULES_SOURCE_INFO[src] || {}).desc || '')}</p>
      </div>
      <div class="rules-layout ${src === 'handbook' || src === 'brands' ? 'rules-layout-fill' : ''}">
        ${blocks.map(b => {
          if (b.items && b.items[0] === '__CALC_TABLE__') return '';
          return `
          <section class="card rules-block ${toneClass[b.tone] || ''} ${src === 'handbook' ? 'rules-block-wide' : ''}">
            <header class="rules-block-head">
              <div>
                <span class="badge ${b.tone === 'danger' ? 'badge-danger' : b.tone === 'warning' ? 'badge-warning' : 'badge-teal'}">${escapeHtml(b.category)}</span>
                <h3 class="rules-block-title">${escapeHtml(b.subtitle)}</h3>
                ${(b.tags && b.tags.length) ? `<div class="rules-block-tags" style="margin-top:6px;display:flex;flex-wrap:wrap;gap:4px">${b.tags.slice(0,8).map(tg => `<button type="button" class="badge" data-action="set-rules-tag" data-tag="${escapeAttr(String(tg).toLowerCase())}" style="cursor:pointer;border:none;font-size:0.75rem">#${escapeHtml(String(tg))}</button>`).join('')}</div>` : ''}
              </div>
              <span class="rules-block-count">${b.items.length}</span>
            </header>
            <ul class="rules-list">
              ${b.items.map((it, i) => {
                const itemTags = getRuleItemTags(b.id, i);
                return `
                <li class="rules-item">
                  <span class="rules-item-num">${i + 1}</span>
                  <div class="rules-item-body" style="flex:1;min-width:0">
                    <span class="rules-item-text">${escapeHtml(it)}</span>
                    ${itemTags.length ? `<div class="rules-item-tags" style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px">${itemTags.map(tg => `<button type="button" class="badge" data-action="set-rules-tag" data-tag="${escapeAttr(tg)}" style="cursor:pointer;border:none;font-size:0.72rem">#${escapeHtml(tg)}</button>`).join('')}</div>` : ''}
                  </div>
                  ${canChange ? `<button type="button" class="btn btn-ghost btn-sm" data-action="edit-rule-item-tags" data-bid="${escapeAttr(b.id)}" data-idx="${i}" data-text="${escapeAttr(String(it).slice(0,120))}" title="Теги">🏷</button>` : ''}
                </li>`;
              }).join('')}
            </ul>
            ${b.source === 'custom' && b.meta && canChange ? `
              <div class="call-actions" style="margin-top:10px">
                <button class="btn btn-outline btn-sm" data-action="edit-penalty" data-id="${escapeAttr(b.meta.id)}">✏️</button>
                <button class="btn btn-outline btn-sm" data-action="attach-penalty-prompt" data-id="${escapeAttr(b.meta.id)}">➕ В скрипт</button>
                <button class="btn btn-danger btn-sm" data-action="delete-penalty" data-id="${escapeAttr(b.meta.id)}">🗑</button>
              </div>
              <p class="field-hint">Группы: ${(b.meta.categories||[]).map(c=>escapeHtml(c)).join(', ') || '—'} · скриптов: ${scriptsUsingPenalty(b.meta.id).length}</p>
            ` : ''}
          </section>`;
        }).join('') || `<div class="empty-state"><div class="empty-icon">📋</div><p>В этом разделе пока пусто${q ? ' или ничего не найдено' : ''}.</p></div>`}
      </div>`}
    </div>
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
     <div class="form-group"><label>Теги (через запятую)</label>
       <input type="text" id="fPenTags" value="${escapeAttr(item && item.tags ? item.tags.join(', ') : '')}" placeholder="штраф, оператор, скрипт, кредит…">
       <p class="field-hint">По тегам удобно фильтровать в разделе «Правила».</p>
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
  const tags = (document.getElementById('fPenTags')?.value || '')
    .split(/[,;#]+/).map(s => s.trim().toLowerCase().replace(/^#/, '')).filter(Boolean);
  const cats = [];
  document.querySelectorAll('.penalty-cat-cb:checked').forEach(cb => cats.push(cb.value));
  const extra = (document.getElementById('fPenCatsExtra')?.value || '').split(/[,;]+/).map(s => s.trim()).filter(Boolean);
  for (const c of extra) if (!cats.includes(c)) cats.push(c);
  if (!Array.isArray(state.sharedPenalties)) state.sharedPenalties = [];
  if (id) {
    const item = state.sharedPenalties.find(x => x.id === id);
    if (!item) { toast('Не найдено', 'error'); return; }
    Object.assign(item, { title, text, pct, tone, tags, categories: cats, updatedAt: Date.now() });
  } else {
    state.sharedPenalties.push({ id: uid(), title, text, pct, tone, tags, categories: cats, updatedAt: Date.now() });
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


/* ========== Дневник смены (отчётность по дням) ========== */

function canViewUserDiary(userName) {
  if (!userName) return false;
  if (isAdminUser()) return true;
  return userName === (state.currentUser || '');
}

function getDailyLogs(userName) {
  const goal = getUserGoal(userName) || {};
  if (!goal.dailyLogs || typeof goal.dailyLogs !== 'object') goal.dailyLogs = {};
  return goal.dailyLogs;
}

function saveDailyLog(userName, date, entry) {
  if (!canDo('useDiary') && !isAdminUser()) {
    toast('Нет права вести дневник', 'error');
    return false;
  }
  if (!canViewUserDiary(userName)) { toast('Нет доступа', 'error'); return false; }
  if (!isAdminUser() && userName !== state.currentUser) {
    toast('Нельзя редактировать чужой дневник', 'error');
    return false;
  }
  loadGoalsStore();
  let goal = getUserGoal(userName);
  if (!goal) {
    // создать минимальную цель-оболочку, чтобы хранить дневник
    goal = {
      period: 'month',
      targetAmount: 0,
      startDate: date,
      endDate: date,
      mainShifts: [],
      extraShifts: [],
      earnings: {},
      dailyLogs: {},
      createdAt: Date.now()
    };
  }
  if (!goal.dailyLogs) goal.dailyLogs = {};
  const clean = {
    successes: Math.max(0, Number(entry.successes) || 0),
    penalties: Math.max(0, Number(entry.penalties) || 0),
    penaltyAmount: Math.max(0, Number(entry.penaltyAmount) || 0),
    calls: Math.max(0, Number(entry.calls) || 0),
    failedCalls: Math.max(0, Number(entry.failedCalls) || 0),
    workMinutes: Math.max(0, Number(entry.workMinutes) || 0),
    breakMinutes: Math.max(0, Number(entry.breakMinutes) || 0),
    breaks: Array.isArray(entry.breaks) ? entry.breaks : [],
    earnings: Math.max(0, Number(entry.earnings) || 0),
    comment: String(entry.comment || '').slice(0, 2000),
    worked: entry.worked !== false,
    updatedAt: Date.now()
  };
  goal.dailyLogs[date] = clean;
  // синхронизируем earnings цели
  if (!goal.earnings) goal.earnings = {};
  if (clean.earnings > 0) goal.earnings[date] = clean.earnings;
  else if (Object.prototype.hasOwnProperty.call(goal.earnings, date) && !clean.earnings) {
    // оставляем earnings если задан только через старую форму — не трогаем если 0 и был
  }
  if (clean.earnings > 0) goal.earnings[date] = clean.earnings;
  goal.updatedAt = Date.now();
  setUserGoal(userName, goal);
  return true;
}

function deleteDailyLog(userName, date) {
  if (isCommonAccount() && !isAdminUser()) return;
  if (!canViewUserDiary(userName)) return;
  if (!isAdminUser() && userName !== state.currentUser) return;
  loadGoalsStore();
  const goal = getUserGoal(userName);
  if (!goal || !goal.dailyLogs || !goal.dailyLogs[date]) return;
  delete goal.dailyLogs[date];
  goal.updatedAt = Date.now();
  setUserGoal(userName, goal);
}

function periodRange(preset, customFrom, customTo) {
  const now = new Date();
  now.setHours(12, 0, 0, 0);
  let from, to;
  if (preset === 'day' || preset === 'today') {
    from = to = toISODate(now);
  } else if (preset === 'yesterday') {
    const y = new Date(now);
    y.setDate(y.getDate() - 1);
    from = to = toISODate(y);
  } else {
    // period / custom
    from = customFrom || toISODate(startOfMonth(now));
    to = customTo || toISODate(now);
  }
  if (from > to) { const tmp = from; from = to; to = tmp; }
  return { from, to };
}

/** "08:30" → минуты; пусто → 0 */
function parseTimeToMinutes(str) {
  const s = String(str || '').trim();
  if (!s) return 0;
  const m = s.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return 0;
  const h = Math.min(23, Math.max(0, parseInt(m[1], 10)));
  const mm = Math.min(59, Math.max(0, parseInt(m[2], 10)));
  return h * 60 + mm;
}

/** минуты → "08:30" или "" если 0 */
function minutesToTimeMask(minutes) {
  const m = Math.max(0, Math.round(Number(minutes) || 0));
  if (!m) return '';
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return String(h).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
}

function emptyNum(v) {
  if (v === 0 || v === '0') return '';
  if (v == null || v === '') return '';
  return String(v);
}

function aggregateDailyLogs(userName, from, to) {
  const logs = getDailyLogs(userName);
  const days = [];
  let successes = 0, penalties = 0, penaltyAmount = 0, calls = 0, failedCalls = 0;
  let workMinutes = 0, breakMinutes = 0, earnings = 0, workedDays = 0;
  const keys = Object.keys(logs).filter(d => d >= from && d <= to).sort();
  keys.forEach(d => {
    const e = logs[d] || {};
    days.push({ date: d, ...e });
    successes += Number(e.successes) || 0;
    penalties += Number(e.penalties) || 0;
    penaltyAmount += Number(e.penaltyAmount) || 0;
    calls += Number(e.calls) || 0;
    failedCalls += Number(e.failedCalls) || 0;
    workMinutes += Number(e.workMinutes) || 0;
    breakMinutes += Number(e.breakMinutes) || 0;
    earnings += Number(e.earnings) || 0;
    if (e.worked !== false && ((e.workMinutes || 0) > 0 || (e.successes || 0) > 0 || (e.calls || 0) > 0 || (e.earnings || 0) > 0)) {
      workedDays += 1;
    }
  });
  const avgSuccess = workedDays > 0 ? successes / workedDays : 0;
  const avgCalls = workedDays > 0 ? calls / workedDays : 0;
  const successRate = calls > 0 ? (successes / calls) * 100 : 0;
  return {
    days, from, to,
    successes, penalties, penaltyAmount, calls, failedCalls,
    workMinutes, breakMinutes, earnings, workedDays,
    avgSuccess, avgCalls, successRate
  };
}

function formatWorkHM(minutes) {
  const m = Math.max(0, Math.round(Number(minutes) || 0));
  if (!m) return '—';
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return String(h).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
}

function showDailyLogModal(userName, date) {
  if (!canDo('useDiary') && !isAdminUser()) { toast('Нет права вести дневник', 'error'); return; }
  if (!canViewUserDiary(userName)) { toast('Нет доступа', 'error'); return; }
  const canEdit = isAdminUser() || userName === state.currentUser;
  const iso = date || toISODate(new Date());
  const logs = getDailyLogs(userName);
  const e = logs[iso] || {};
  const has = Object.keys(e).length > 0;
  openModal(
    'День ' + iso + (userName !== state.currentUser ? ' · ' + userName : ''),
    `<div class="form-group"><label>Дата</label>
       <input type="date" id="fDlDate" value="${escapeAttr(iso)}" ${canEdit ? '' : 'disabled'}></div>
     <div class="form-row-2">
       <div class="form-group"><label>Успехи</label>
         <input type="number" id="fDlSuccess" value="${escapeAttr(emptyNum(e.successes))}" min="0" step="1" placeholder="—" ${canEdit ? '' : 'disabled'}></div>
       <div class="form-group"><label>Штрафы (шт.)</label>
         <input type="number" id="fDlPen" value="${escapeAttr(emptyNum(e.penalties))}" min="0" step="1" placeholder="—" ${canEdit ? '' : 'disabled'}>
         <p class="field-hint">Штраф = успех в 0 ₽, в конву не идёт</p>
       </div>
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Звонки</label>
         <input type="number" id="fDlCalls" value="${escapeAttr(emptyNum(e.calls))}" min="0" step="1" placeholder="—" ${canEdit ? '' : 'disabled'}></div>
       <div class="form-group"><label>Недозвоны</label>
         <input type="number" id="fDlFail" value="${escapeAttr(emptyNum(e.failedCalls))}" min="0" step="1" placeholder="—" ${canEdit ? '' : 'disabled'}></div>
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Заработано, ₽</label>
         <input type="number" id="fDlEarn" value="${escapeAttr(emptyNum(e.earnings))}" min="0" step="50" placeholder="—" ${canEdit ? '' : 'disabled'}></div>
       <div class="form-group"><label>Конва (успехи / звонки)</label>
         <input type="text" id="fDlConv" value="${(Number(e.calls)>0 ? ((Number(e.successes)||0)/(Number(e.calls))*100).toFixed(1)+'%' : '—')}" disabled>
       </div>
     </div>
     <div class="form-row-2">
       <div class="form-group"><label>Отработано</label>
         <input type="text" id="fDlWork" value="${escapeAttr(minutesToTimeMask(e.workMinutes))}" placeholder="00:00" inputmode="numeric" maxlength="5" ${canEdit ? '' : 'disabled'}>
         <p class="field-hint">ЧЧ:ММ</p>
       </div>
       <div class="form-group"><label>Перерывы</label>
         <input type="text" id="fDlBreak" value="${escapeAttr(minutesToTimeMask(e.breakMinutes))}" placeholder="00:00" inputmode="numeric" maxlength="5" ${canEdit ? '' : 'disabled'}>
         <p class="field-hint">ЧЧ:ММ</p>
       </div>
     </div>
     <div class="form-group"><label>Комментарий</label>
       <textarea id="fDlComment" rows="3" ${canEdit ? '' : 'disabled'} placeholder="Заметки по смене…">${escapeHtml(e.comment || '')}</textarea>
     </div>`,
    canEdit
      ? `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
         ${has ? `<button class="btn btn-danger" data-action="delete-daily-log" data-user="${escapeAttr(userName)}" data-date="${escapeAttr(iso)}">Удалить день</button>` : ''}
         <button class="btn btn-primary" data-action="save-daily-log" data-user="${escapeAttr(userName)}">Сохранить</button>`
      : `<button class="btn btn-outline" data-action="close-modal">Закрыть</button>`
  );
  setTimeout(() => {
    const mask = (el) => {
      if (!el) return;
      el.addEventListener('input', () => {
        let v = el.value.replace(/[^\d]/g, '').slice(0, 4);
        if (v.length >= 3) v = v.slice(0, 2) + ':' + v.slice(2);
        el.value = v;
      });
    };
    mask(document.getElementById('fDlWork'));
    mask(document.getElementById('fDlBreak'));
  }, 30);
}

function saveDailyLogFromForm(userName) {
  const who = userName || state.currentUser;
  const date = document.getElementById('fDlDate')?.value;
  if (!date) { toast('Укажите дату', 'error'); return; }
  const workMinutes = parseTimeToMinutes(document.getElementById('fDlWork')?.value);
  const breakMinutes = parseTimeToMinutes(document.getElementById('fDlBreak')?.value);
  const num = (id) => {
    const v = document.getElementById(id)?.value;
    if (v === '' || v == null) return 0;
    return Number(v) || 0;
  };
  const ok = saveDailyLog(who, date, {
    successes: num('fDlSuccess'),
    penalties: num('fDlPen'),
    penaltyAmount: 0,
    calls: num('fDlCalls'),
    failedCalls: num('fDlFail'),
    workMinutes,
    breakMinutes,
    earnings: num('fDlEarn'),
    comment: document.getElementById('fDlComment')?.value,
    worked: true
  });
  if (!ok) return;
  closeModal();
  toast('День сохранён');
  render();
}

function renderDiarySection(userName, standalone) {
  if (!canViewUserDiary(userName)) return '';
  const canEdit = isAdminUser() || userName === state.currentUser;
  const preset = state.diaryPeriod || 'day';
  const customFrom = state.diaryFrom || '';
  const customTo = state.diaryTo || '';
  const { from, to } = periodRange(preset, customFrom, customTo);
  const agg = aggregateDailyLogs(userName, from, to);
  const presets = [
    { id: 'day', label: 'Сегодня' },
    { id: 'yesterday', label: 'Вчера' },
    { id: 'custom', label: 'Период' }
  ];
  const convLabel = agg.calls > 0
    ? `${agg.successes} / ${agg.calls} · ${agg.successRate.toFixed(1)}%`
    : (agg.successes ? `${agg.successes} / —` : '—');

  return `
    <div class="card diary-section" style="${standalone ? '' : 'margin-top:16px'}">
      <div class="catalog-toolbar-row" style="margin-bottom:12px">
        <div>
          <strong>📋 Дневник смены${userName !== state.currentUser ? ' · ' + escapeHtml(userName) : ''}</strong>
                  </div>
        ${canEdit ? `<button class="btn btn-primary btn-sm" data-action="add-daily-log" data-user="${escapeAttr(userName)}">+ День</button>` : ''}
      </div>

      <div class="catalog-filters" style="flex-wrap:wrap;gap:6px;margin-bottom:12px">
        ${presets.map(p => `
          <button type="button" class="btn btn-sm ${preset === p.id ? 'btn-primary' : 'btn-outline'}"
            data-action="set-diary-period" data-period="${p.id}" data-user="${escapeAttr(userName)}">${p.label}</button>
        `).join('')}
      </div>
      ${preset === 'custom' ? `
        <div class="catalog-filters" style="margin-bottom:12px">
          <input type="date" class="search-input" id="diaryFrom" value="${escapeAttr(customFrom || from)}" style="flex:1">
          <input type="date" class="search-input" id="diaryTo" value="${escapeAttr(customTo || to)}" style="flex:1">
          <button class="btn btn-outline btn-sm" data-action="apply-diary-range" data-user="${escapeAttr(userName)}">Показать</button>
        </div>
      ` : ''}

      <div class="goal-summary-grid" style="margin-bottom:14px">
        <div class="card goal-stat"><div class="goal-stat-label">Заработано</div><div class="goal-stat-value goal-stat-ok">${formatMoney(agg.earnings)}</div></div>
        <div class="card goal-stat"><div class="goal-stat-label">Конва (успехи / звонки)</div><div class="goal-stat-value">${convLabel}</div></div>
        <div class="card goal-stat"><div class="goal-stat-label">Успехи</div><div class="goal-stat-value">${agg.successes}</div></div>
        <div class="card goal-stat"><div class="goal-stat-label">Звонки / недозвоны</div><div class="goal-stat-value">${agg.calls} / ${agg.failedCalls}</div></div>
        <div class="card goal-stat"><div class="goal-stat-label">Часы</div><div class="goal-stat-value">${formatWorkHM(agg.workMinutes)}</div></div>
        <div class="card goal-stat"><div class="goal-stat-label">Перерывы</div><div class="goal-stat-value">${formatWorkHM(agg.breakMinutes)}</div></div>
        ${(preset === 'day' || preset === 'yesterday' || from === to) ? '' : `
        <div class="card goal-stat"><div class="goal-stat-label">Смен</div><div class="goal-stat-value">${agg.workedDays}</div></div>
        <div class="card goal-stat"><div class="goal-stat-label">Ср. успехов / день</div><div class="goal-stat-value">${agg.workedDays ? agg.avgSuccess.toFixed(1) : '—'}</div></div>
        <div class="card goal-stat"><div class="goal-stat-label">Ср. звонков / день</div><div class="goal-stat-value">${agg.workedDays ? agg.avgCalls.toFixed(1) : '—'}</div></div>`}
        <div class="card goal-stat"><div class="goal-stat-label">Штрафы (шт.)</div><div class="goal-stat-value">${agg.penalties}</div></div>
      </div>
      <p class="field-hint" style="margin-bottom:8px">${preset === 'custom' || from !== to ? `Период: <b>${escapeHtml(from)}</b> — <b>${escapeHtml(to)}</b>` : `Дата: <b>${escapeHtml(from)}</b>`}</p>

      ${agg.days.length === 0
        ? `<div class="empty-state" style="padding:24px"><p>Нет записей. Нажмите «+ День».</p></div>`
        : `<div class="lb-table-wrap">
            <table class="lb-table diary-table">
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Успехи</th>
                  <th>Звонки</th>
                  <th>Конва</th>
                  <th>Недозв.</th>
                  <th>Часы</th>
                  <th>Перерыв</th>
                  <th>Штрафы</th>
                  <th>₽</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${agg.days.slice().reverse().map(d => {
                  const conv = (d.calls > 0) ? (((d.successes || 0) / d.calls) * 100).toFixed(0) + '%' : '—';
                  return `
                  <tr>
                    <td>${escapeHtml(d.date)}${d.comment ? ' <span title="' + escapeAttr(d.comment) + '">💬</span>' : ''}</td>
                    <td>${d.successes || 0}</td>
                    <td>${d.calls || 0}</td>
                    <td>${conv}</td>
                    <td>${d.failedCalls || 0}</td>
                    <td>${formatWorkHM(d.workMinutes)}</td>
                    <td>${formatWorkHM(d.breakMinutes)}</td>
                    <td>${d.penalties || 0}</td>
                    <td>${formatMoney(d.earnings || 0)}</td>
                    <td>
                      <button class="btn btn-outline btn-sm" data-action="edit-daily-log" data-user="${escapeAttr(userName)}" data-date="${escapeAttr(d.date)}">Открыть</button>
                    </td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>`
      }
    </div>
  `;
}

function renderTeamDiaries() {
  loadGoalsStore();
  const names = Object.keys(state.goalsStore || {}).sort((a, b) => a.localeCompare(b, 'ru'));
  const view = state.diaryViewUser || '';
  let html = `
    <div class="card catalog-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>📋 Дневники команды</strong>
          <p class="catalog-hint">Откройте дневник любого оператора. Записи аккаунта «Общая» (если были) тоже здесь — можно удалить.</p>
        </div>
      </div>
    </div>`;
  if (!names.length) {
    return html + `<div class="empty-state"><div class="empty-icon">📋</div><p>Пока нет данных.</p></div>`;
  }
  html += `<div class="goals-admin-list" style="margin-bottom:16px">`;
  for (const name of names) {
    const logs = getDailyLogs(name);
    const n = Object.keys(logs).length;
    html += `
      <article class="card goal-admin-card">
        <div class="goal-admin-head">
          <div>
            <h3 class="call-title">${escapeHtml(name)}</h3>
            <div class="call-meta"><span class="badge">${n} дн.</span></div>
          </div>
          <div class="call-actions">
            <button class="btn btn-outline btn-sm" data-action="view-diary-user" data-user="${escapeAttr(name)}">Открыть дневник</button>
            ${isAdminUser() ? `<button class="btn btn-danger btn-sm" data-action="delete-goal" data-user="${escapeAttr(name)}" title="Удалить цель и дневник">🗑</button>` : ''}
          </div>
        </div>
      </article>`;
  }
  html += `</div>`;
  if (view && canViewUserDiary(view)) {
    html += renderDiarySection(view, true);
  }
  return html;
}

function renderGoals() {
  loadGoalsStore();
  const me = state.currentUser || '';
  const admin = isAdminUser();
  let tab = state.goalsTab || 'my-goal';

  const tabs = [
    { id: 'my-goal', label: 'Мои цели', icon: '🎯' },
    { id: 'my-diary', label: 'Дневник смен', icon: '📋' }
  ];
  if (admin) {
    tabs.push({ id: 'team-goals', label: 'Цели команды', icon: '👥' });
    tabs.push({ id: 'team-diaries', label: 'Дневники команды', icon: '📊' });
  }
  if (!tabs.some(x => x.id === tab)) tab = 'my-goal';

  let main = '';
  if (tab === 'my-diary') {
    main = renderDiarySection(me, true);
  } else if (tab === 'team-goals' && admin) {
    main = renderGoalsAdminList();
  } else if (tab === 'team-diaries' && admin) {
    main = renderTeamDiaries();
  } else {
    // my-goal
    const goal = getUserGoal(me);
    if (!goal) {
      main = `
        <div class="card catalog-toolbar">
          <div class="catalog-toolbar-row">
            <div>
              <strong>🎯 Моя цель</strong>
              <p class="catalog-hint">Личная цель и график смен. Другие не видят вашу цель.</p>
            </div>
            <button class="btn btn-primary btn-sm" data-action="edit-goal">+ Создать цель</button>
          </div>
        </div>
        <div class="empty-state"><div class="empty-icon">🎯</div><p>Цели пока нет. Создайте цель и отметьте рабочие смены.</p></div>`;
    } else {
      const plan = buildGoalPlan(goal);
      main = renderGoalDetail(me, goal, plan, true, false);
    }
  }

  return `
  <div class="catalog-layout rules-catalog-layout">
    <aside class="catalog-country-panel rules-side-panel" aria-label="Разделы целей">
      <div class="catalog-country-title">🎯 Цель</div>
      ${tabs.map(s => {
        const active = tab === s.id;
        return `<button type="button" class="country-tile ${active ? 'active' : ''}" data-action="set-goals-tab" data-tab="${s.id}">
          <span class="country-tile-flag">${s.icon}</span>
          <span class="country-tile-name">${s.label}</span>
        </button>`;
      }).join('')}
    </aside>
    <div class="catalog-main">${main}</div>
  </div>`;
}

function renderGoalsAdminList() {
  loadGoalsStore();
  const names = Object.keys(state.goalsStore || {}).sort((a, b) => a.localeCompare(b, 'ru'));
  const me = state.currentUser;
  let html = `
    <div class="card catalog-toolbar">
      <div class="catalog-toolbar-row">
        <div>
          <strong>👥 Цели команды</strong>
          <p class="catalog-hint">Администратор видит цели всех операторов.</p>
        </div>
      </div>
    </div>`;
  if (!names.length) {
    return html + `<div class="empty-state"><div class="empty-icon">🎯</div><p>Пока никто не создал цель.</p></div>`;
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
        <p class="catalog-hint" style="margin-top:8px">Заработано ${formatMoney(plan.earnedTotal)} · осталось ${formatMoney(plan.remainingMoney)}</p>
      </article>`;
  }
  html += `</div>`;
  if (state.goalsViewUser && state.goalsStore[state.goalsViewUser]) {
    const u = state.goalsViewUser;
    const g = state.goalsStore[u];
    const plan = buildGoalPlan(g);
    html += `<div style="margin-top:18px">${renderGoalDetail(u, g, plan, u === me, false)}</div>`;
  }
  return html;
}

function renderGoalDetail(userName, goal, plan, canEditEarnings, showDiary) {
  const periodLabel = goal.period === 'month' ? 'Месяц' : 'Неделя';
  const shifts = (goal.mainShifts || []).slice().sort((a, b) => a - b)
    .map(d => WEEKDAY_LABELS[d]).join(', ') || '—';
  const extras = (goal.extraShifts || []).slice().sort().map(d => {
    const dt = parseISODate(d);
    return WEEKDAY_LABELS[dt.getDay()] + ' ' + d.slice(5).replace('-', '.');
  }).join(', ') || 'нет';
  const skipped = (goal.skippedShifts || []).slice().sort().map(d => {
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
          <p class="catalog-hint">${periodLabel}: ${escapeHtml(goal.startDate)} — ${escapeHtml(goal.endDate)} · смены: ${shifts} · доп: ${extras} · снято: ${skipped}</p>
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
  
    ${showDiary ? renderDiarySection(userName) : ''}
  `;
}

function showGoalEditor(userName) {
  if (!canDo('useGoals') && !isAdminUser()) {
    toast('Нет права создавать цели', 'error');
    return;
  }
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
  const main = new Set((existing?.mainShifts || [2, 4, 5, 6, 0]).map(Number));
  let seedExtra = new Set(existing?.extraShifts || []);
  let seedSkip = new Set(existing?.skippedShifts || []);

  const buildDayGrid = () => {
    const startEl = document.getElementById('fGoalStart');
    const endEl = document.getElementById('fGoalEnd');
    const grid = document.getElementById('fGoalDayGrid');
    if (!grid || !startEl || !endEl) return;
    const start = startEl.value;
    const end = endEl.value;
    if (!start || !end || start > end) {
      grid.innerHTML = '<p class="field-hint">Укажите начало и конец периода</p>';
      return;
    }
    const mainNow = new Set();
    document.querySelectorAll('.goal-wd-cb:checked').forEach(cb => mainNow.add(Number(cb.value)));
    const checkedExtra = new Set(seedExtra);
    const checkedSkip = new Set(seedSkip);
    grid.querySelectorAll('.goal-day-extra:checked').forEach(cb => checkedExtra.add(cb.value));
    grid.querySelectorAll('.goal-day-skip:checked').forEach(cb => checkedSkip.add(cb.value));
    // снять то, что пользователь снял в текущей сетке
    grid.querySelectorAll('.goal-day-extra:not(:checked)').forEach(cb => checkedExtra.delete(cb.value));
    grid.querySelectorAll('.goal-day-skip:not(:checked)').forEach(cb => checkedSkip.delete(cb.value));

    const rows = [];
    for (const iso of enumerateDates(parseISODate(start), parseISODate(end))) {
      const d = parseISODate(iso);
      const wd = d.getDay();
      const isMain = mainNow.has(wd);
      const label = WEEKDAY_LABELS[wd] + ' ' + iso.slice(5).replace('-', '.');
      if (isMain) {
        // основной день — можно снять (перенос / выходной)
        const on = checkedSkip.has(iso);
        rows.push(`<label class="goal-day-chip ${on ? 'goal-day-off' : 'goal-day-main'}">
          <input type="checkbox" class="goal-day-skip" value="${iso}" ${on ? 'checked' : ''}>
          <span>${label}</span>
          <em>${on ? 'выходной' : 'смена'}</em>
        </label>`);
      } else {
        // не основной — можно добавить как доп. смену
        const on = checkedExtra.has(iso);
        rows.push(`<label class="goal-day-chip ${on ? 'goal-day-extra-on' : ''}">
          <input type="checkbox" class="goal-day-extra" value="${iso}" ${on ? 'checked' : ''}>
          <span>${label}</span>
          <em>${on ? 'доп. смена' : 'выходной'}</em>
        </label>`);
      }
    }
    seedExtra = checkedExtra;
    seedSkip = checkedSkip;
    grid.innerHTML = rows.join('') || '<p class="field-hint">Нет дней в периоде</p>';
  };

  openModal(
    existing ? 'Цель и график' : 'Новая цель и график',
    `<p class="catalog-hint" style="margin-bottom:12px">Цель для: <b>${escapeHtml(who)}</b></p>
     <div class="form-group"><label>Период</label>
       <select id="fGoalPeriod" class="search-input" style="width:100%">
         <option value="week" ${period === 'week' ? 'selected' : ''}>Неделя (вт → пн)</option>
         <option value="month" ${period === 'month' ? 'selected' : ''}>Месяц</option>
       </select>
       <p class="field-hint">Неделя = цикл начисления вт–пн. Выплата — в следующую среду вечером.</p>
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
     <div class="form-group"><label>Основные смены (дни недели)</label>
       <div class="goal-weekdays">
         ${[1, 2, 3, 4, 5, 6, 0].map(d => `
           <label class="goal-wd-chip">
             <input type="checkbox" class="goal-wd-cb" value="${d}" ${main.has(d) ? 'checked' : ''}>
             <span>${WEEKDAY_LABELS[d]}</span>
           </label>
         `).join('')}
       </div>
     </div>
     <div class="form-group">
       <label>Календарь смен в периоде</label>
       <p class="field-hint">Галочка на <b>основном</b> дне = сделать выходным (перенос). Галочка на <b>выходном</b> = доп. смена.</p>
       <div id="fGoalDayGrid" class="goal-day-grid" style="display:flex;flex-wrap:wrap;gap:6px;max-height:240px;overflow:auto;margin-top:8px"></div>
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
      buildDayGrid();
    });
    startEl?.addEventListener('change', buildDayGrid);
    endEl?.addEventListener('change', buildDayGrid);
    document.querySelectorAll('.goal-wd-cb').forEach(cb => cb.addEventListener('change', buildDayGrid));
    buildDayGrid();
  }, 50);
}

function saveGoal(userName) {
  if (!canDo('useGoals') && !isAdminUser()) {
    toast('Нет права создавать цели', 'error');
    return;
  }
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
  const extraShifts = [];
  document.querySelectorAll('.goal-day-extra:checked').forEach(cb => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(cb.value)) extraShifts.push(cb.value);
  });
  const skippedShifts = [];
  document.querySelectorAll('.goal-day-skip:checked').forEach(cb => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(cb.value)) skippedShifts.push(cb.value);
  });
  // доп. смены не должны совпадать с основными днями недели
  const mainSet = new Set(mainShifts);
  const extraClean = extraShifts.filter(iso => {
    const wd = parseISODate(iso).getDay();
    return !mainSet.has(wd);
  });

  if (!amount || amount <= 0) { toast('Укажите сумму цели', 'error'); return; }
  if (!startDate || !endDate) { toast('Укажите даты', 'error'); return; }
  if (startDate > endDate) { toast('Начало позже конца', 'error'); return; }

  // рабочие дни после учёта переносов
  const probe = { mainShifts, extraShifts: extraClean, skippedShifts, startDate, endDate };
  if (!getGoalWorkDates(probe).length) {
    toast('Нет ни одного рабочего дня — отметьте смены или доп. дни', 'error');
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
    extraShifts: extraClean,
    skippedShifts,
    earnings: prev.earnings || {},
    dailyLogs: prev.dailyLogs || {},
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
      ${c.notInAc ? `<div class="car-ac-warning">⚠ В АЦ НЕТ — по правилам это авто/сегмент обычно не проводится (риск «Не актуально»).</div>` : ''}
      <div class="view-row"><span class="view-label">Марка</span><span class="view-value">${escapeHtml(c.brand)}</span></div>
      <div class="view-row"><span class="view-label">Модель</span><span class="view-value">${escapeHtml(c.model)}</span></div>
      ${c.bodyType ? `<div class="view-row"><span class="view-label">Кузов</span><span class="view-value">${escapeHtml(c.bodyType)}</span></div>` : ''}
      ${c.price ? `<div class="view-row"><span class="view-label">Цена</span><span class="view-value view-price">${escapeHtml(c.price)}</span></div>` : ''}
      ${c.transmission ? `<div class="view-row"><span class="view-label">КПП</span><span class="view-value">${escapeHtml(c.transmission)}</span></div>` : ''}
      ${c.engine ? `<div class="view-row"><span class="view-label">Двигатель</span><span class="view-value">${escapeHtml(c.engine)}</span></div>` : ''}
      ${c.power ? `<div class="view-row"><span class="view-label">Мощность</span><span class="view-value">${escapeHtml(c.power)}</span></div>` : ''}
      ${c.fuel ? `<div class="view-row"><span class="view-label">Топливо</span><span class="view-value">${escapeHtml(c.fuel)}</span></div>` : ''}
      ${c.country ? `<div class="view-row"><span class="view-label">Страна</span><span class="view-value">${escapeHtml(countryMeta(c.country).flag + ' ' + countryMeta(c.country).name)}</span></div>` : ''}
      ${c.description ? `<div class="view-block"><span class="view-label">Описание</span><p class="view-text ${c.notInAc ? 'text-danger-note' : ''}">${escapeHtml(c.description)}</p></div>` : ''}
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


function renderOnlineUsersCard() {
  const list = typeof getPresenceList === 'function' ? getPresenceList() : [];
  if (!list.length) {
    return `<div class="card settings-section"><h3>🟢 Сейчас на сайте</h3><p class="catalog-hint">Пока никого не видно. Статус появляется после входа (~40 сек).</p></div>`;
  }
  const rows = list.map(u => {
    const when = u.lastSeen ? new Date(u.lastSeen).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : '—';
    const page = u.page ? escapeHtml(u.page) : '—';
    return `<div class="team-row presence-row">
      <div>
        <span class="presence-dot ${u.online ? 'online' : 'offline'}"></span>
        <strong>${escapeHtml(u.name)}</strong>
        <span class="badge ${u.online ? 'badge-teal' : ''}">${u.online ? 'онлайн' : 'офлайн'}</span>
      </div>
      <div class="field-hint">${u.online ? 'раздел: ' + page : 'был(а): ' + when}</div>
    </div>`;
  }).join('');
  return `<div class="card settings-section">
    <h3>🟢 Сейчас на сайте</h3>
    <p class="catalog-hint" style="margin-bottom:12px">Онлайн — активность за последние 3 минуты.</p>
    <div class="team-list">${rows}</div>
    <div class="actions-row" style="margin-top:12px">
      <button class="btn btn-outline btn-sm" data-action="refresh-presence">Обновить список</button>
    </div>
  </div>`;
}

function renderAdminPanel() {
  if (!isAdminUser()) {
    return `<div class="empty-state"><p>Доступ только администратору</p></div>`;
  }
  const c = state.cloud;
  try { loadExtraUsers(); } catch (_) {}
  const teamBlock = `
    <div class="card settings-section">
      <h3>👥 Участники и права</h3>
      <p class="catalog-hint" style="margin-bottom:12px">Пароли и детальные права: разделы, дневник, редактирование.</p>
      <div class="team-list">
        ${Object.keys(TEAM_USERS).map(name => `
          <div class="team-row">
            <div>
              <strong>${escapeHtml(name)}</strong>
              <span class="badge">системный</span>
              <span class="badge ${name === 'Общая' ? '' : 'badge-teal'}">${name === 'Александр' ? 'админ' : (name === 'Общая' ? 'просмотр' : 'редактор')}</span>
            </div>
            <div class="team-row-actions">
              ${name !== 'Александр' ? `<button class="btn btn-outline btn-sm" data-action="edit-user-perms" data-name="${escapeAttr(name)}">🔐 Права</button>` : '<span class="field-hint">полный доступ</span>'}
            </div>
          </div>`).join('')}
        ${(extraUsers || []).map(u => `
          <div class="team-row">
            <div>
              <strong>${escapeHtml(u.name)}</strong>
              <span class="badge ${u.role === 'edit' ? 'badge-teal' : ''}">${u.role === 'edit' ? 'редактор' : 'просмотр'}</span>
            </div>
            <div class="team-row-actions">
              <button class="btn btn-outline btn-sm" data-action="edit-user-perms" data-name="${escapeAttr(u.name)}">🔐 Права</button>
              <button class="btn btn-outline btn-sm" data-action="edit-team-user" data-name="${escapeAttr(u.name)}">✏️</button>
              <button class="btn btn-danger btn-sm" data-action="delete-team-user" data-name="${escapeAttr(u.name)}">🗑</button>
            </div>
          </div>`).join('')}
      </div>
      <div class="actions-row" style="margin-top:14px">
        <button class="btn btn-primary btn-sm" data-action="add-team-user">+ Участник</button>
      </div>
    </div>`;

  const cloudBlock = `
    <div class="card settings-section">
      <h3>☁ Облако (только админ)</h3>
      <p class="catalog-hint" style="margin-bottom:12px">URL виден только вам. У остальных — только статус без ссылки.</p>
      <div class="form-group">
        <label>URL веб-приложения Apps Script</label>
        <input type="text" id="cfgSheetsUrl" value="${escapeAttr(c.sheetsUrl || '')}" placeholder="https://script.google.com/macros/s/..../exec">
      </div>
      <div class="actions-row">
        <button class="btn btn-primary btn-sm" data-action="save-cloud">Сохранить URL</button>
        <button class="btn btn-outline btn-sm" data-action="sync-now">Синхронизировать</button>
        <button class="btn btn-outline btn-sm" data-action="disconnect-cloud">Отключить</button>
      </div>
      <p class="field-hint" style="margin-top:10px">Статус: <b>${c.enabled ? (c.status === 'ok' ? 'ок' : c.status) : 'выкл'}</b>
        ${c.lastSync ? ' · ' + new Date(c.lastSync).toLocaleString('ru-RU') : ''}</p>
    </div>`;

  const dataBlock = `
    <div class="card settings-section">
      <h3>📦 Данные</h3>
      <div class="actions-row">
        <button class="btn btn-primary btn-sm" data-action="export">📥 Экспорт JSON</button>
        <button class="btn btn-outline btn-sm" data-action="import-click">📤 Импорт JSON</button>
        <button class="btn btn-danger btn-sm" data-action="reset">🗑 Сбросить локально</button>
        <button class="btn btn-outline btn-sm" data-action="clean-backgrounds">🧹 Убрать чёрные подложки</button>
      </div>
    </div>`;

  const guestOn = isGuestLoginEnabled();
  const guestBlock = `
    <div class="card settings-section">
      <h3>👁 Вход для гостей</h3>
      <p class="catalog-hint" style="margin-bottom:12px">Коллеги могут зайти без пароля, указав имя. Только просмотр. Можно отключить в любой момент.</p>
      <label class="perm-check" style="font-size:0.95rem">
        <input type="checkbox" id="cfgGuestLogin" ${guestOn ? 'checked' : ''}>
        Разрешить «Войти как гость»
      </label>
      <div class="actions-row" style="margin-top:12px">
        <button class="btn btn-primary btn-sm" data-action="save-guest-login-setting">Сохранить</button>
      </div>
    </div>`;

  return `
    <div class="card rules-desc-card" style="margin-bottom:14px">
      <h3 class="rules-section-title">🛡 Админ-панель</h3>
      <p class="catalog-hint">Онлайн, участники, права, облако и служебные операции.</p>
    </div>
    ${guestBlock}
    ${renderOnlineUsersCard()}
    ${teamBlock}
    ${cloudBlock}
    ${dataBlock}`;
}


/* ========== Памятка новичка ========== */
const NEWBIE_KEY = 'ect_newbie_guide_v1';

const DEFAULT_NEWBIE_GUIDE = [
  {
    "id": "nb_01",
    "group": "checklist",
    "title": "1. Написать в группу о выходе на смену",
    "body": "Перед началом работы напишите в рабочую группу, что вышли (вышла) на смену.",
    "links": [],
    "order": 1
  },
  {
    "id": "nb_02",
    "group": "checklist",
    "title": "2. Открыть CRM и встать в очередь",
    "body": "Войдите в CRM и встаньте в очередь на обзвон.",
    "links": [
      {
        "title": "CRM ЕЦТ — вход",
        "url": "https://ect-russia.ru/login"
      }
    ],
    "order": 2
  },
  {
    "id": "nb_03",
    "group": "checklist",
    "title": "3. Запросить звонок или скрипт",
    "body": "При необходимости запросите звонок или актуальный скрипт у супервайзера / по ссылке.",
    "links": [
      {
        "title": "Victory — пример запроса",
        "url": "https://victory-crm.ru/answers/255217877"
      }
    ],
    "order": 3
  },
  {
    "id": "nb_04",
    "group": "checklist",
    "title": "4. Проставить статус",
    "body": "После работы с заявкой обязательно проставьте корректный статус в системе.",
    "links": [],
    "order": 4
  },
  {
    "id": "nb_05",
    "group": "checklist",
    "title": "5. Справочник КК",
    "body": "Ориентируйтесь по актуальному справочнику контроля качества (таблица).",
    "links": [
      {
        "title": "Справочник КК (Google Sheets)",
        "url": "https://docs.google.com/spreadsheets/d/1rDcSs-C3e3kDMsqOwgCItyrpArxD1WK5rRHr5G9aEwI/edit?gid=1727881349#gid=1727881349"
      }
    ],
    "order": 5
  },
  {
    "id": "nb_06",
    "group": "checklist",
    "title": "6. Штрафы",
    "body": "При спорных ситуациях предоставьте справку или заранее согласуйте вопрос с руководством. Подробный список — в разделе «Правила → Штрафы».",
    "links": [],
    "order": 6
  },
  {
    "id": "nb_07",
    "group": "checklist",
    "title": "7. Информационная доска",
    "body": "В каждой группе своя информационная доска по графику. Следите за объявлениями своей группы.",
    "links": [],
    "order": 7
  },
  {
    "id": "nb_08",
    "group": "checklist",
    "title": "8. Статусы: штраф / успешная / успешная со штрафом",
    "body": "Различайте итог заявки: штраф, успешная, успешная со штрафом.",
    "links": [],
    "order": 8
  },
  {
    "id": "nb_09",
    "group": "checklist",
    "title": "9. Разбор ошибок",
    "body": "Разбор ошибок — в каждой группе по своей ссылке. Уточните актуальную ссылку у СВ.",
    "links": [],
    "order": 9
  },
  {
    "id": "nb_10",
    "group": "checklist",
    "title": "10. Группа проработки с СВ",
    "body": "Участвуйте в группе проработки со супервайзером.",
    "links": [],
    "order": 10
  },
  {
    "id": "nb_12",
    "group": "checklist",
    "title": "12. Приведи друга / бонусы",
    "body": "Акции и бонусы публикуются в группе вашей команды.",
    "links": [],
    "order": 12
  },
  {
    "id": "nb_13",
    "group": "checklist",
    "title": "13. Повышение: НС, СВ, тренер, КК, входящая",
    "body": "Возможны переходы: НС, СВ, тренер, КК, входящая линия. Обсуждайте с руководством.",
    "links": [],
    "order": 13
  },
  {
    "id": "nb_14",
    "group": "checklist",
    "title": "14. Еженеделька",
    "body": "Общее собрание команды — каждую неделю.",
    "links": [],
    "order": 14
  },
  {
    "id": "nb_15",
    "group": "checklist",
    "title": "15. График и норма",
    "body": "Графики: 2/2, 5/2, 4/3.\n• Доп. смена: от 4 часов и 300 заявок.\n• Полная: 8 часов (1 час обеда).\n• 10 часов: 1,5 часа обеда, от 450 заявок.\n• Конверсия: от 3 %.",
    "links": [],
    "order": 15
  },
  {
    "id": "nb_16",
    "group": "checklist",
    "title": "16. Выплата и оформление",
    "body": "Выплата — каждую среду вечером по Москве.\nОформление: консоль → самозанятость в «Мой налог» → договор, задание и акт.",
    "links": [],
    "order": 16
  },
  {
    "id": "pm_01",
    "group": "pamyatka",
    "title": "БЛОК О КОМПАНИИ",
    "body": "Мы ЕЦТ – Единый Центр Телемаркетинга одни из лидирующих\nрекламных агентств по лидогенерации в России. Мы предлагаем\nне просто услуги, а результативные решения для бизнеса.\n\nЕЦТ — это большая компания с множеством отделов:",
    "links": [],
    "order": 100,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_02",
    "group": "pamyatka",
    "title": "БЛОК: График, оформление, план и ЗП",
    "body": "ПЛАНОВЫХ ПОКАЗАТЕЛЯХ И ЗП\n\nОФОРМЛЕНИЕ\n\nОформление происходит как самозанятый после выхода на\nстажировку.\nЭто означает, что от всей суммы, которую вы получаете,\nвыплачивается налог 6%.\nВы самостоятельно оплачиваете его по каждому поступлению.\n\nОформление происходит каждый понедельник\nВыплаты всего того, что вы заработали – каждую среду.\n\nВЫПЛАТЫ\n\nВы получаете деньги за каждую обработанную заявку.\nОбработанная заявка — это звонок, по которому по итогу был получен\nодин из 5 статусов: «Перезвонить» \\ «Недозвон» \\ «Некорректные данные»\n\\ «Не актуально» \\ «Успешно»\n\nЗа каждую обработанную заявку вы зарабатываете от 3 руб.\nА за каждую заявку «Успешно» вы получаете до 185 рублей в\nзависимости от заказчика.\n\nВыплату, в том числе за звонки за второй день обучения вы\nполучаете после отработанных 5 смен и после оформления.\n\nСреди 100 обработанных заявок:\n\n10% — остаются в статусе «недозвон»;\n87% — это потенциальные клиенты, которые рассматривают\nпокупку на будущее или пока просто прицениваются, а также те,\nкто отложили покупку на потом;\n3% — те клиенты, которые согласны на покупку и подходят под\nвсе критерии заказчика. Из всех обработанных заявок – этот\nпроцент целевой конверсии.",
    "links": [],
    "order": 101,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_03",
    "group": "pamyatka",
    "title": "БЛОК О ФУНКЦИОНАЛЕ",
    "body": "1. Обзвон готовой холодной базы клиентов. Без поиска и\n      привлечения новых клиентов. У вас всегда есть база для\n      обзвона. Обзвон по готовым скриптам. В скрипте учтены все\n      важные моменты, которые нужно спросить у клиента.\n\n  2. Внесение результатов обзвона в CRM. В скрипте всегда\n      будет прописано что именно вам нужно внести. Важно:\n      вносить информацию о клиенте, нужно только в случае\n      Успешной заявки, в остальных – достаточно проставить\n      статус из оставшихся.\n\n  3. Выполнение плановых показателей по количеству и качеству\n      звонков. Поддержание конверсии",
    "links": [],
    "order": 102,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_04",
    "group": "pamyatka",
    "title": "БЛОК РОЛЬ ОПЕРАТОРА",
    "body": "Роль оператора КЦ:\nЗадача заключается в преобразовании потенциального клиента в\nактивного, за счет вопросов на выявление актуальности, что\nспособствует ускорению процесса принятия решения о покупке.\n\n                     Эффективность оператора\n\n1) Конверсия\nКоличество заявок перешедших в лиды. Количество потенциальных\nклиентов перешедших в горячих. Целевая конверсия 3%.\n\n2) Качество заявок\n\nКачественные лиды – люди, которым вы звонили, действительно\nподходят под все условия, дали согласие на контакт с менеджером.",
    "links": [],
    "order": 103,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_05",
    "group": "pamyatka",
    "title": "БЛОК: Tone of Voice / невербальная коммуникация",
    "body": "НЕВЕРБАЛЬНАЯ КОММУНИКАЦИЯ\nВ дословном переводе tone of voice — это тон голоса. Другими\nсловами, это тональность всех сообщений, которые транслируются\nот лица компании. То, как мы общаемся с клиентами.\n\n  ● Соблюдаем деловой и уважительный стиль общения. \n     Не хамим клиентам даже если они не правы или \n     выходят на эмоции. Не употребляем просторечные слова и\n     выражения, жаргон. Например: \"не вопрос\", \"да без проблем\" \n     и т. п.\n  ● Используем обращение на «Вы». Запрещено обращение на\n     «Ты».\n  ● Не используем уменьшительно-ласкательные слова. Пример:\n     \"телефончик\", \"минутка\" и т. п.\n  ● Не использует слова-паразиты. Пример: \"типа\", \"как бы\", \"это\n     самое\", \"на самом деле\", \"ну\", \"вот\" и т. п.)\n  ● Верно, произносите ударения в словах и названия компаний.\n     Чистота речи влияет на то, как вас воспринимает клиент и на\n     доверие к вам.\n  ● Консультируем только по той информации, которая есть в\n     скрипте. Это важно. чтобы не ввести клиента случайно в\n     заблуждение.\n\nНевербальная коммуникация по телефону\n\nВ процессе общения клиент слышит и воспринимает то, что вы\nговорите и то, как вы говорите. Если слова верные, но интонация\nагрессивная или грустная, это негативно повлияет на реакцию\nклиента. Поэтому важно учитывать аспекты невербальной\nкоммуникации:\n  ● Доброжелательность. Улыбайтесь. Клиент не увидит\n     вашей улыбки, но ваш голос будет звучать\n     доброжелательнее и позитивнее. Недопустимо\n     раздражение / надменность / повышенный голос /\n\n   грустный голос / агрессия в голосе/ насмешка/ сарказм и\n   т.д. Т.к. все это может нарушить контакт с клиентом.\n● Четкость! Всё, что произносит оператор он проговаривает\n   четко, понятно, до каждого звука. Любая нечеткость приведет\n   к неверному пониманию клиентом вопроса.\n\n● Звук! Собеседник обязательно услышит все внешние шумы:\n   разговоры коллег, крики детей, ремонт в квартире и т. д. все\n   это снижает доверие к вам как к оператору и затрудняет\n   общение.",
    "links": [],
    "order": 104,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_06",
    "group": "pamyatka",
    "title": "БЛОК: Алгоритм работы по скрипту",
    "body": "СКРИПТУ\nКак читать скрипт:\n\n  ● Если дали положительные ответ на вопрос, переходите к\n     следующему пункту скрипта\n  ● Голубым цветом сделаны «ПОДСКАЗКИ», их проговаривать\n     клиенту не нужно\n  ● В начале скрипта прописана теория «ГЛАВНОЕ», это все важные\n     пункты, которые необходимы заказчику\n  ● Темно-красным строка «УКАЗАТЬ» выделено то, что нужно\n     записать в строку Инфо в заявке.\n\nСтруктура скрипта:\n     1. Установление контакта\n     2. Выявление актуальности\n     3. Работа с вопросами и возражениями клиента (не включен в скрипт,\n     может быть на любом этапе общения с клиентом)\n     4. Завершение диалога\n\n                       Установление контакта:\n\nЖелательно дословно или близко к тексту проговорить 1 фразу из\nскрипта. Она позволяет установить контакт с клиентом, расположить\nего к диалогу и сразу проверить заинтересован ли клиент в товаре\nили нет.\nЭто фраза может включать в себя следующие блоки:\n  ● Поздороваться с клиентом: добрый день/вечер/утро\n  ● Представиться: имя\n  ● Название компании, от лица которой звоните (только если есть в\n     скрипте. Если в скрипте нет, то только после вопроса клиента)\n  ● Город оказания услуги/продажи товара\n  ● Спросить интересовался ли клиент услугой/товаром\n\nВажно! Первая фраза в разных скриптах может немного\nотличаться. Где-то нужно произносить название компании, от\n\nкоторой вы звоните, где-то нет. Поэтому внимательно читайте,\nчто нужно озвучить клиенту.\n\nПример:\n\nАлгоритм работы оператора на этапе установления контакта при\nразных ответах клиента:\n\nВариант 1: Клиент ответил да, интересуюсь\nЕсли на первую фразу клиент отвечает да, то вы переходите к следующему\nпункту.\nСледующий пункт — это узнать имя клиента. Важно сделать это в\nсамом начале. Это будет дополнительно располагать клиента к вам.\nКогда вы узнали имя клиента, дальше обращаться к нему по имени.\n\nВариант 2: Клиент ответил, нет не интересуюсь\n\nЕсли клиент отвечает, что не интересуется, то задается вопрос на\nвозможность интереса в будущем. Этот вопрос есть почти во всех во\nвсех скриптах и является обязательным т. к. положительно влияет на\nконверсию. Пример: «Возможно, на будущее рассматриваете\nпокупку бани?»\nЕсли клиент отвечает нет – вы завершаете звонок. Фраза завершения\nпрописан в скрипте: «Извините за беспокойство, хорошего дня». Если\nотвечает да, то переходите к следующему пункту - узнать имя.\n\nВариант 3: Клиент не заинтересованное лицо\n\nНа данном этапе может оказаться, что клиент, которому вы звоните –\nне заинтересованное лицо. Не он собирается делать покупку, он\nсмотрел сайт по просьбе друга, сестры и т. д. Тогда вы просите у него\nконтакты заинтересованного лица и в этой же заявке звоните ему.\nЗаново вступаете в контакт по изученному алгоритму.\n\n                        Выявление актуальности\n\nЦель данного этапа:\n  ● Отсеять не актуальных клиентов, которые не подходят под критерии.\n  ● Собрать всю необходимую информацию по\n     актуальным клиентам для передачи менеджерам.\nДля достижения этих целей вам нужно:\n  ● Задать ВСЕ вопросы из скрипта. \n     Помните все скрипты согласованы с нашими заказчиками.\n     Следовательно, все вопросы, которые в них прописаны важны.\n     Нашему заказчику нужна вся эта информации в полном объеме.\n\n  ● Задавайте каждый вопрос отдельно.\n     Не объединяйте 2 вопроса в один. Есть риск, что клиент ответит\n     только на один вопрос, а второй пропустит.\n\n  ● При необходимости задать дополнительные\n     вопросы/перефразирует вопросы.\n     Нам важно не просто задать вопрос, но и получить на него ответ.\n     Поэтому если клиент не ответил на вопрос, или ответил частично то\n     нужно задать дополнительный вопрос/перефразировать уже\n     заданный вопрос даже если его нет в скрипте.\nПример:\n\n                        Завершение диалога\nЗавершение диалога с клиентом возможно в двух случаях:\n\n  ● Первый случай в процессе диалога на каком-то из пунктов вы\n     понимаете, что клиенту продукт не актуален. Например, клиент\n     собирается приобретать кухню через год, а вам нужны клиенты,\n     которые готовы купить в течение 2-х месяцев.\n\n  ● Второй случай — это когда вы понимаете, что клиенту товар\n     актуален и он по всем критериям подходит и тогда вы\n     переходите к последнему пункту скрипта и завершайте диалог\n     так как прописано там.\n\nПример:\n\nАлгоритм работы во время завершения звонка:\n\n1. Озвучить, когда с клиентом свяжется менеджер (то, что прописано в\nскрипте). В скриптах возможно 3 разных варианта времени для звонка\nменеджера.\n\n«В УДОБНОЕ ДЛЯ КЛИЕНТА ВРЕМЯ»\nПример из скрипта: «Отлично, тогда я передаю Ваш контакт\nменеджеру автосалона, он свяжется с Вами и сориентирует по\nавтомобилям в наличии, подскажите в какое время было бы\nудобно принять звонок?»\n\nВ проектах автосалонов не более 3 календарных дней. \nВ остальных проектах не более 14 календарных дней\n\n«БЛИЖАЙШЕЕ ВРЕМЯ»\nПример из скрипта: «Отлично, тогда я передаю Ваш контакт\nменеджеру автосалона, он свяжется с Вами в ближайшее время и\nсориентирует по автомобилям в наличии»\n\nПри этом если клиент возражает, говорит, что не может принять\nзвонок в ближайшее время, то мы в таком случае можем уточнить\nудобное время и зафиксировать его.\n\n«30 МИНУТ»\nПример из скрипта: «Отлично, тогда я передаю Ваш контакт\nменеджеру автосалона, он свяжется с Вами в ТЕЧЕНИЕ 30 МИНУТ\nи сориентирует по автомобилям в наличии»\n\nОпять же, если клиент возражает, говорит, что не может принять звонок в\nтечение 30 мин, то мы можем уточнить удобное время.\nТ.е. вы в первую очередь озвучиваете тот вариант, который написан в\nскрипте. Не нужно уточнять у клиента время для связи с\nменеджером, если это не прописано в скрипте. Только если клиент\nСАМ говорит, что ему неудобно принять звонок в ближайшее время\nили в течение 30 мин, то мы уточняем, когда будет удобно\nпообщаться с менеджером и данную информацию фиксируем.\n\n2. Одна из важных частей диалога — согласие клиента пообщаться с\nменеджером. В конце фразы нужно добавить вопрос «Хорошо?»,\n«Удобно?», «Согласны?» Клиент сказал – да, хорошо, конечно и т.д. Он\nподтвердил, что готов общаться с менеджером. Напоминаю, что\nдиапазон ограничен - В проектах автосалонов не более 3\nкалендарных дней В остальных проектах не более 14 календарных\nдней\n\n3. Попрощаться с клиентом. Это фраза «Всего доброго, до\nсвидания» или «Желаю вам отличной покупки, всего доброго» и\nт.п.",
    "links": [],
    "order": 105,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_07",
    "group": "pamyatka",
    "title": "БЛОК: Вопросы и возражения",
    "body": "ВОПРОС — это обращение, требующее ответа.\n\nАлгоритм работы с вопросами клиентов:\n\n1. Кратко ответить на вопрос клиента, исходя из общеизвестной информации \nи информации, которая есть в скрипте\n\n2. Задать вопрос из скрипта, подходящий под тему вопроса. \n\nВАЖНО: отвечая на вопросы клиента, необходимо сказать только ту\nинформацию, которая содержится в скрипте. Если вы не знаете, как ответить \nна вопрос, всегда можете пользоваться подсказкой «Более детально вас\nсориентирует наш менеджер» и следом задавать подходящий вопрос по\nскрипту.\n\nВОЗРАЖЕНИЕ — это отказ клиента. Когда клиент отказывается \nот любых действий, связанных с покупкой. \n(Например, отказ разговаривать с нами, отказ на контакт \nс менеджером и т. д.)\n\nАлгоритм работы с возражениями клиентов: \n\n1. Выяснить причину отказа.\n\n2. Аргументировать исходя из ответа клиента\n\n3. Задать вопрос по скрипту, подходящий под тему возражения.",
    "links": [],
    "order": 106,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_08",
    "group": "pamyatka",
    "title": "БЛОК ПРОДУКТЫ: КРЕДИТ",
    "body": "Требования к клиентам по кредиту:\n\nГражданство РФ.\n\nПо закону только граждане РФ могут брать автокредиты. \n\nТакже , если в течение диалога клиент проговаривает о том что\nгражданство было получено менее 6-ти месяцев назад, то клиент не\nактуален.\nМы не берем клиентов с ВНЖ (вид на жительство)\n\nВозраст с 21 года до 70 лет включительно\nЭто не значит, что мы у всех уточняем возраст.\nНо если клиент говорит: \"Я на пенсии\" или «Не знаю, дадут ли мне\nкредит, я в возрасте» - мы уточняем «Вам более 70-ти лет, верно\nпонимаю?» Если ему менее 70 лет, мы уточняем у него готовность\nприобретения авто в кредит, если все условия подойдут.\n\nБанкротство.\nНе передаем клиентов, которые проходят процедуру банкротства на\nданный момент, если клиент уже ее прошел , то такого клиента можем\nотправить в успешно.\n\nЗдесь опять же мы не будем у всех спрашивать: «А проходите ли вы сейчас\nпроцедуру банкротства ». Но если клиент в диалоге упоминает\nо каких-либо проблем и упоминает данную процедуру, то понимаем что\nкредит ему не выдадут и с клиентом прощаемся.",
    "links": [],
    "order": 107,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_09",
    "group": "pamyatka",
    "title": "БЛОК АВТОСАЛОНЫ",
    "body": "Официальные дилеры — это салоны, которые закупаются напрямую у\nпроизводителя.\n\nДанные автосалоны специализируются на какой-то одной конкретной\nмарке авто и продают только НОВЫЕ автомобили без пробега.\n\nНачало скрипта в салоне данного формата будет звучать как: \n«Добрый день! Меня зовут \"ИМЯ\", я представляю официальный\nдилерский центр Хавейл ЮГ, подскажите, пожалуйста, правильно\nпонимаю, что интересуетесь покупкой НОВОГО автомобиля Haval в\nСанкт- Петербурге?»\n\nНеофициальные дилеры – это компании, занимающиеся\nперепродаже автомобилей, не имея при этом никакого отношения к\nпроизводителю. В таких автосалонах могут быть представлены\nразличные марки авто, как новые, так и БУ (бывшие в употреблении)\nавтомобили. Такие салоны также называют мультибрендовые.\n\nНачало скрипта в салоне данного формата будет звучать как: \n«Добрый день! Меня зовут \"ИМЯ\", Подскажите, правильно понимаю,\nчто вы интересовались покупкой автомобиля в Краснодаре?»",
    "links": [],
    "order": 108,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_10",
    "group": "pamyatka",
    "title": "Каких автомобилей нет у заказчиков",
    "body": "У НАШИХ ЗАКАЗЧИКОВ\n\nЕсли клиент интересуется подобной маркой, важно проговорить, что\nв наличии данного типа автомобиля у нас не представлено,\nрассматривает ли он какую-то другую модель\n\nМинивэны и Фургоны\n\n  ● Данные автомобили являются неликвидными, потому что их сложно\n     купить и ещё сложнее продать.\n  ● Они отличаются большой вместительностью салона и багажника, \n     а также высоким кузовом.\n  ● Также отличительной чертой служит выдвижная боковая дверь\n  ● Такие автомобили востребованы для больших семей,\n     пассажирских и малогабаритных грузовых перевозок.\n     Данных автомобилей в салонах наших партнеров НЕТ!\n\nГрузовые автомобили\n\nВ автосалонах, с которыми мы сотрудничаем, продают только легковые\nавтомобили. \n— Это не касается проектов, специализирующихся на продаже\nспецтехники\n\nН-р: проект Россия\\АрСлив\\Спецтехника или\nРоссия\\СпецТехПром\\Автомобили спецназначения. \nДанных автомобилей в салонах наших партнеров НЕТ!\n\nБУ автомобили, выпускаемые до 2000-х годов\n\n  ● Автомобили могут иметь значительный износ и устаревание.\n  ● Подвержены коррозии, износу двигателя, проблемам с электрикой,\n     которые могут сделать их менее привлекательными для покупки\n  ● Многие старые модели автомобилей уже не производятся,\n     что ограничивает доступность новых автомобилей на рынке.\nДанных автомобилей в салонах наших партнеров НЕТ!\n\nПремиум авто\n\nВ связи с санкциями автомобили прекратили поставку автомобилей\nпремиум сегмента.\n\n  ● Стоят значительно дороже, чем массовые модели. Их цена\n     может быть в несколько раз выше, что делает их\n     недоступными для многих покупателей (Дороже 10 000 000р)\n  ● Некоторые премиум – марки, модели производятся только для\n     определенных рынков или стран, что также ограничивает их\n     доступность в автосалонах. \n     Так же недоступны для продажи (кабриолеты и лимузины)\nДанных автомобилей в салонах наших партнеров НЕТ!\n\nЭлектрокары/гибриды (их ещё называют электрокары)\n\n  ● Главное отличие электромобилей от обычных авто – отсутствие\n     двигателя внутреннего сгорания и коробки передач. Вместо\n     них – специальный аккумулятор, который нужно заряжать.\n     Электрокары полностью зависят от сети электро зарядных\n     станций, где батареи автомобиля могут быть заряжены.\n\n  Полный список автомобилей, которых нет у наших заказчиков,\n                      находится здесь\n\n                  ТЕРМИНЫ В АВТОМИРЕ\n\nTrade-in – услуга по приему старого автомобиля в счет покупки нового,\nпозволяющая значительно снизить цену на товар. \nН-р: автосалон оценил автомобиль клиента на 500 тыс. руб., значит при\nприобретении нового стоимость будет с вычетом этой суммы. \nВАЖНО: если клиент проговаривает, что собирается приобрести авто\nпутем Trade- in, при условии, что автосалон работает только в кредит,\nоператору нужно уточнить оставшуюся стоимость он будет оплачивать\nчерез кредит или частичное кредитование.\n\nАвто рассрочка – продукт, позволяющий заемщикам получить\nкредит на покупку автомобиля без переплаты. Согласно его\nусловиям, заемщики могут получить беспроцентный кредит\n\nАвтокредит – целевой потребительский кредит с обеспечением.\nЦелевой, потому что выдается на конкретную цель. Обеспеченный,\nпотому что автомобиль остается в залоге у банка. Если заемщик\nперестает платить по кредиту, банк вправе забрать автомобиль в\nсчет погашения долга\n\nЛизинг автомобиля – подразумеваем собой долгосрочную\nаренду, \nпо условиям которой лизингополучатель уплачивает\nежемесячные платежи, включающие в себя оплату\nтранспортного средства, аренду \nи процент, но при этом после окончания договора, становится\nполноправным собственником арендуемого имущества. \nПопулярен среди юр. лиц.\n\nЧастичное кредитование — это когда клиент выплачивает\nтолько часть стоимости машины из собственных средств.\nОстальная часть стоимости покрывается кредитом от банка\nили кредитной организации.",
    "links": [],
    "order": 109,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_11",
    "group": "pamyatka",
    "title": "БЛОК НЕДВИЖИМОСТЬ",
    "body": "1. Агентства недвижимости — посредники между покупателем и\nпродавцом, которые помогают подобрать, оформить и купить/продать\nжилье, но сами не владеют объектами.\n\nОСОБЕННОСТИ:\n  ● Не владеют недвижимостью → Только помогают с\n     покупкой/продажей, работают как посредники.\n\n  ● Работают с новостройками и вторичкой → Больший выбор жилья.\n\n  ● Подбор под клиента → Ищут варианты по запросу\n\n  ● Нет территориальной привязки → Могут работать-продавать\n     квартиры по всему городу/региону.\n\n  ● Комиссия 2-4% → Платиться Агентству как посреднику, только при\n     успешной сделке. (после приобретения недвижимости)\n\n2. ЖК-Застройщики — компании, которые строят жилые комплексы и\nпродают квартиры напрямую. Работают только со своими объектами.\n\nОСОБЕННОСТИ:\n  ● Привязаны к своим адресам → Продают только свои ЖК, которые\n     построили сами.\n\n  ● Цены Дешевле на стадии застройки → Также ниже, чем у Агентств\n     недвижимости.\n\n  ● Не работают с риелторами → Прямые продажи клиентам, без\n     посредников.\n\n Какой недвижимости нет у наших заказчиков\n  ● Частные дома — отдельно стоящие жилые здания, предназначенные\n     для проживания одной семьи. Располагаются на земельных\n     участках\n\n  ● Земельные участки — часть территории с четкими границами,\n     которая может находиться в собственности, аренде или\n     пользовании\n\n  ● Коммерческая недвижимость — это здания, сооружения или\n     земельные участки, предназначенные для коммерческой\n     деятельности (Офисы, магазины, рестораны и т.д.) то есть для\n     извлечения дохода\n\nДанной недвижимости у наших партнеров НЕТ!\nДаже если данная информация не прописана в скрипте. В случае если\nзаказчик будет работать с данной недвижимостью это будет отдельно\nпрописано в скрипте!\n\nЕсли клиент интересуется подобной недвижимостью, важно проговорить,\nчто мы ей не располагаем и осуществляем продажу другой недвижимости,\nпосле чего проговорить какой именно.\n\n           ТЕРМИНЫ Мира Недвижимости\nИпотека – это кредит, который выдается на покупку недвижимости. При\nэтом недвижимость выступает в качестве залога. Если заемщик не\nвыполняет обязательства по выплате кредита, банк или кредитная\nорганизация имеет право забрать заложенную недвижимость. Ипотека\nидет с первоначальным взносом и сниженным процентом\nРассрочка – оплата приобретенной недвижимости частями, без\nпереплаты\n\nTrade in – застройщик или агентство выкупает вашу старую квартиру в\nкачестве частичной оплаты за новую, так же клиент может использовать\nстарую недвижимость, как первый взнос при покупке недвижимости в\nипотеку. Старую квартиру застройщик продаёт самостоятельно или через\nагентство.\n\nПервоначальный взнос – денежная сумма, которую необходимо внести\nналичными, во время приобретения недвижимости путем «Ипотеки».\nРазмер взноса варьируется от 10% до 20%, от полной стоимости\nнедвижимости",
    "links": [],
    "order": 110,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_12",
    "group": "pamyatka",
    "title": "БЛОК ОСОБЕННОСТИ ПРОЕКТОВ",
    "body": "1. Мы сотрудничаем с рядом заказчиков, которые работают по всей \nРоссии, без привязки к определенному региону. Это не указано \nв скрипте, но прописано в поле “проект”.\n\n2. Во многих скриптах есть ограничения по бюджету, если клиент\nне определился с бюджетом, то прямую уточняем - готов ли клиент\nрассмотреть рамки бюджета, указанные в скрипте. \n\nТакже если в скриптах связанные с автосалонами нет бюджета,\nна который можно опираться. В таком случае клиент должен\nрассматривать авто от 350 тыс. до 10 млн.\n\n3. Ограничения по срокам покупки.\nИнформация об условиях и сроках покупки\\ доставки всегда указана в\nнижней части скрипта или в блоке Главное. Если в скрипте не указана\nинформация по срокам, это означает что актуальность не должна\nпревышать более полгода. В правой части экрана вы увидите пример как\nэто выглядит в заявке. Информация о сроках прописана во 2 пункте блока\nглавное.\n\n4. Есть ряд проектов, в которых мы соединяем клиентов напрямую с\nменеджером той либо иной компании самостоятельно.\n\nЕсли клиент готов прямо сейчас поговорить с менеджером, то\nнеобходимо:\n 1. Нажать на кнопку \"Трансфер\": Дождаться ответа менеджера, на\nкоторого переводится клиент.\n 2. Передать информацию менеджеру: Кратко проговори ключевые\nданные, которые сообщил клиент.\n 3. Соединить клиента с менеджером: Сделать это только после согласия\nменеджера\n\nТакже у таких проектах в блоке «Главное» есть пункт, который обозначает\nчто нам необходимо сделать, если клиент не готов связаться с\nменеджером в данный момент.\n\nКак правило есть следующие варианты:\n1. Если не готов разговаривать с менеджером - ставим статус\n«перезвонить» (узнать и занести удобное время перезвона)\n2. Если не готов разговаривать с менеджером - ставим статус\n«успешно»",
    "links": [],
    "order": 111,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_13",
    "group": "pamyatka",
    "title": "БЛОК: CRM (личный кабинет, ошибки)",
    "body": "Вкладка «Личный кабинет»\n\nНажимаем кнопку войти и попадаем в личный кабинет. Здесь вы видите\nсвои показатели:\n\n  ● Баланс - Заработок накопительно за период работы (за вычетом\n     прямых выплат)\n  ● Заработок за сегодня - Сумма за обработку заявок + бонус \n     за успешные заявки\n  ● Обработано заявок - Количество заявок с проставленным статусом\n  ● Количество дозвона - Успешные + неактуальные + перезвон\n  ● Процент дозвона - Успешные + неактуальные + перезвон/все заявки\n  ● Успешных: Количество заявок со статусом «успешно»\n  ● Процент успешных - Отношение успешных заявок к количеству\n     обработанных заявок\n\nОшибки при работе с СРМ\n\nЧтобы CRM работала исправно необходимо:\n  ● Подключение наушников или гарнитуры, в ином случае,\n     клиенты не будут слышать вас;\n  ● Открыт браузер google chrome;\n  ● Стабильное соединение с интернетом;\n  ● Отметить «Никогда не переводить этот сайт».\n\nВ процессе работы CRM случаться технические ошибки. Разберем\nосновные ошибки и что делать в подобных ситуациях.\n\n1. Кнопка «Встать в очередь» серого цвета и не кликабельна. \nКак устранить?\n– Выйдите и войдите в профиль заново.\n\n2. Белый экран. Как устранить?\n– Проблема решается выключением переводчика, отметив «никогда не\nпереводить этот сайт»",
    "links": [],
    "order": 112,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_14",
    "group": "pamyatka",
    "title": "БЛОК СТАТУСЫ ЗАЯВОК",
    "body": "Перезвонить \nДанный статус мы отмечаем в случае, когда клиент принял звонок, во\nвремя диалога проговорил что ему неудобно разговаривать и попросил\nперезвонить.\n\nВАЖНО: первое что вы можете сделать, чтобы не потерять\nуспешную заявку, уточните, что вы не займете время клиента\nболее 1 мин. Есть те, кто остаются, но и есть риск тех, кто сбросит\nсам.\nСитуация 1 – Вы дозвонились до клиента, проговорили первую строчку, а\nклиент сказал, что он заинтересован, но ему не удобно говорить. \nУточните сразу, что вы займете буквально минуту его времени, если\nклиент отказывается, уточните когда ему будет удобно перезвонить и\nпроставьте соответствующий статус. \nСитуация 2 - Вы дозвонились до клиента, но успели проговорить только\n«Добрый день, меня зовут…» А клиент сказал, что мне неудобно говорить\nсейчас и сбросил. \nНужно так же перезвонить, проговорить, что не займете больше\nминуты, и если клиент отказывается, уточните у клиента, актуальна ли\nему покупка и когда ему можно перезвонить. \n\nЗаявка, которая распределена под статусом перезвонить, может\nпопасть абсолютно любому оператору, кто сейчас находится в\nлинии. \nЕсли вам пришла заявка, в которой в строке Инфо указана\nкакая-то информация по типу имени. Вам в любом случае важно\nуточнить имя клиента.\n\nНедозвон\nДанный статус мы отмечаем в случае, когда не получилось дозвониться до\nклиента. После повторной попытки дозвонится так же нет успеха. \n\nСитуация 1 – Позвонили клиенту наткнулись на автоответчик, вообще не\nслышим реакции на наши вопросы.\n\nСитуация 2 – Позвонили клиенту, не успели ничего сказать и звонок сразу\nсбросился, повторно дозвонится так же не получилось.\n\nВАЖНО: существуют умные автоответчики, они говорят записанным\nзаранее голосом клиента, т.е. очень похож на человека. Если вы\nпонимаете, что голос повторяет одни и те же фразы, не реагируя на ваши\nвопросы - вы можете сбросить звонок и смело ставить недозвон.\n\nНекорректные данные\nДАННЫЙ СТАТУС МЫ НЕ ОТМЕЧАЕМ!\n\nНе актуально\nданный статус мы отмечаем в случае, если не получилось провести диалог с\nклиентом или он не подходит по каким-либо критериям от заказчика\n\nСитуация 1- Вы приветствуйте клиента, уточняя у него актуальность покупки,\nклиент отвечает отказом и при дальнейших попытках продолжить диалог, клиент\nстоит на своем.\n\nСитуация 2 - Вы приветствуйте клиента, уточняя у него актуальность покупки, он\nначинает грубить или хамить вам, вам не нужно слушать до конца, вы\nсбрасываете звонок и отмечаете не актуально.\n\nСитуация 3 - Мы дозвонились до клиента он проговорил \"Ало\" или была тишина,\nмы проговорили первую строчку, после чего был сброс со стороны клиента. При\nповторном дозвоне произошел сброс или подобная ситуация.\nВАЖНО!!!! В в ситуации 3 мы обязательно должны попробовать дозвониться до\nклиента второй раз \n\nУспешно\nДанный статус мы отмечаем только в том случае, когда все вопросы из\nскрипта были заданы вами, и вы получили на них положительные ответы.\n\nВАЖНО: всегда перепроверяйте себя на качество заполнении\nзаявки в строке Инфо. и только потом отмечайте статус Успешно.",
    "links": [],
    "order": 113,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_15",
    "group": "pamyatka",
    "title": "БЛОК ПРАВИЛА ЗАПОЛНЕНИЯ ЗАЯВКИ",
    "body": "Правила заполнения заявки:\n\n1. Информация указана в полном объеме и в нужном порядке.\nВ каждом скрипте будет прописано, что нужно указать в заявке \nи в каком порядке. Например: имя, марка или бюджет, время для связи. \nВ разных скриптах разные требования. Обязательно изучите их перед\nзаполнением.\n\n2. Заполняем орфографически верно.\nПишем без ошибок в словах. Если сомневаетесь, то проверьте\nнаписание слова в поисковике.\n\n3. Имена собственные, названия городов, модель и марки автомобилей \nи т. д. — пишем с заглавных букв.\nЗаписываем полное имя, которое назвал клиент. Если клиент\nпредставился Владислав, значит пишем в заявке Владислав. Ошибка\nнаписать “Влад”\n\n4. Марки и модели авто — заполняем английскими буквами. Если не\nзнаешь, как правильно писать проверь в поисковике.\n\n5. Если клиент выбирает оба варианта и наличные, и кредит/ новые и б/у, \nто пишем с оплатой не определился/с состоянием авто не определился.\n\n6. Пункты заявки разделяем их запятыми или слешем (наклонная черта\nвправо). \nПример: «Иван, 300 тыс., Москва» или «Иван/ 300 тыс./ Москва»\n\n7. Используем только общепринятые сокращения: \nн-р./обл./ тыс./млн. и т.д.",
    "links": [],
    "order": 114,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_16",
    "group": "pamyatka",
    "title": "БЛОК: Критерии оценки успешной заявки",
    "body": "ЗАЯВКИ\nВАЖНО: Хамство, мат, оскорбления, подмена номера телефона — это\nнарушение регламента нашей компании. При допущении подобного\nслучая это приведет к увольнению и удержанию ЗП за весь период\n\nЗаявка будет оценена в:\n   ● 100 % - если скрипт вами полностью соблюден, информация\n      заполнена верно, ответы клиента положительные.\n   ● 75% - если вами совершена мелкая ошибка, но она не влияет\n      на актуальность самой заявки\n   ● 50% - если вами совершена одна ошибка, но из\n      разговора понятно, что клиент актуальный\n   ● 0% - если вы упустили вопрос по скрипту, влияющий на\n      понимание актуальности заявки",
    "links": [],
    "order": 115,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_17",
    "group": "pamyatka",
    "title": "ЗАЯВКА БУДЕТ ОЦЕНЕНА В 100%, ЕСЛИ",
    "body": "● Клиент подходит по всем критериям заказчика\n\n    ● Скрипт полностью соблюден и заданы все вопросы\n\n    ● Получены четкие конкретные ответы от клиента\n\n    ● Необходимая информация указана в полном объёме\n\n    ● Клиент согласен на общение с менеджером",
    "links": [],
    "order": 116,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_18",
    "group": "pamyatka",
    "title": "ЗАЯВКА БУДЕТ ОЦЕНЕНА В 75%, ЕСЛИ",
    "body": "● Оператор некорректно заполнил заявку (ошибка в орфографии).\nСтавим в том случае, если опер неправильно записывает слова в\nИНФО.\nПример: опер заполняет заявку таким образом: «Иван, Екатиринбург,\nналичные».\n\n    ● Нарушена пунктуации заполнения заявки.\nСтавят в том случае, если опер нарушает пунктуацию в заявке.\n\nПример: опер не ставит знаки препинания: «Иван Кредит. 25 дней\nзавтра в 15 00)»\n\n  ● Не соблюдена последовательность заполнения заявки.\nСтавят в том случае, если опер в неверном порядке указал пункты,\nобязательные в скрипте.\nПример: скрипт требует указать: «ИМЯ, ГОРОД, СПОСОБ ОПЛАТЫ», что\nуказывает опер: «Пермь, наличные, Марина».\n\n  ● Ошибка в ударении названия компании.\nСтавят в том случае, если опер неправильно произнес название\nкомпании, допустил ошибку в ударении.\nПример: опер говорит не «автострАйк», а «автОстрайк».\n\n  ● Невежливый диалог со стороны оператора, оператор не\n     поздоровался.\nСтавят в том случае, если опер начинает идти по скрипту без\nприветствия или в конце диалога просто сбрасывает трубку, не\nпопрощавшись.\nПример: опер в самом начале диалога: «покупкой автомобиля в\nЯрославле интересовались?».\n\n  ● Оператор назвал наименование компании без вопроса клиента.\nСтавят в том случае, если скрипт не подразумевает называть\nкомпанию, а опер все равно это делает, когда клиент об этом даже не\nспрашивал.\nПример: опер: «Здравствуйте, я вам из Дрим Кара звоню, слышали про\nтакой?». \n\n  ● Оператор часто использует слова в\n     уменьшительно-ласкательной форме.\nСтавят в том случае, если в ходе диалога опер часто общается с\nклиентом в уменьшительно-ласкательной форме.\nПример: опер более 3 раз произносит: «рассмотрите покупочку?\nрассмотрите в течение 30 денечков? если все понравится, то приедете \nи купите машинку у нас?»\n\n  ● Оператор записал имя клиента в неполной форме.\nСтавят в том случае, если клиент записал неполное имя клиента.\nПример: клиент: «Влад ко мне обращайтесь», опер: «хорошо, Влад». И\nзаписывает не Владислав, а Влад.\n\n  ● Оператор не представился по имени.\nСтавим в том случае, если оператор за весь диалог не назвал свое имя.\nПример: в скрипте указано: «Добрый день! Меня зовут …., покупкой\nавтомобиля в Ярославле интересовались?», опер пропускает момент с\nименем и в ходе диалога также не представляется.",
    "links": [],
    "order": 117,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_19",
    "group": "pamyatka",
    "title": "ЗАЯВКА БУДЕТ ОЦЕНЕНА В 50%, ЕСЛИ",
    "body": "● 50% Некорректно заполнена заявка, оператор спросил, но\n     не записал.\nСтавят в том случае, если опер уточняет определенный вопрос,\nкоторый необходимо указать в ИНФО, но не указывает его.\nПример: нужно указать город клиента, опер спросил его, но не\nзаписал в строку \"ФИО\".\n\n  ● 50% Некорректное заполнение пунктов в заявке.\nСтавят в том случае, если опер неверно указывает пункты в\nзаявке.\nПример: в скрипте требуется указать город клиента, клиент\nназывает город Верхняя Пышма, опер записывает Екатеринбург.\n\n   ● 50% Объединение вопросов скрипта.\nСтавят в том случае, если опер объединяет важные вопросы\nскрипта в один.\nПример: опер: «Вы рассматриваете покупку в кредит и в течение\n30 дней?».\n\n   ● 50% Вопрос скрипта был задан более 3 раз, с целью\n      получения четкого положительного ответа.\nСтавят в том случае, если опер более 3 раз пытается выявить\nактуальность того или иного пункта, у клиента нет негатива.\nПример: клиент не знает, готов ли приобрести авто в течение 30\nдней и опер в 4 раз спрашивает: «ну если вас прям все условия\nидеально устроят, рассмотрите в течение 30 дней покупку? \n\nКлиент: «ну да, если прям все идеально, тогда рассмотрю».\n\n   ● Оператор перепутал город, но переобулся.\nСтавят в том случае, если опер произносит абсолютно другой\nгород, не тот, что указан в скрипте, но вовремя задумывается и\nпроизносит правильный город.\nПример: «вы интересовались покупкой автомобиля в Волгоград….\nв Вологде?»\n\n  ● Клиент не дал согласия на перевод на менеджера.\nСтавят в том случае, если при переводе на менеджера клиент не\nдал четкого положительного ответа, просто проигнорировал этот\nмомент.\nПример: опер: «я передам ваш контакт специалисту, он с вами\nсвяжется в ближайшее время и сориентирует по всем вопросам,\nхорошо?», клиент переводит тему.\n\n  ● Оператор не уточнил, что менеджер свяжется в ближайшее\n     время.\nСтавят в том случае, если опер не сориентировал клиента, что\nменеджер свяжется не завтра, не послезавтра, а именно в\nближайшее время.\nПример: опер: «я передам контакт менеджеру, и он с вами\nсвяжется, ожидайте звонка».\n\n   ● Оператор не уточнил название компании в начале диалога,\n      если этого требует скрипт.\nСтавят в том случае, если в скрипте указана компания, которую\nнужно представить, а опер пропускает этот момент.\nПример: в скрипте указано: «Добрый день! Меня зовут …. Я\nпредставляю компанию по производству кухонь «Сердце дома».»\nВ таком случае опер не называет наименование компании.\n\n  ● Оператор не записал номер, по которому клиенту будет\n     удобнее связаться.\nСтавят в том случае, если клиент назвал другой номер для связи с\nменеджером, а опер не записал его в заявке.\nПример: клиент: «пусть менеджер свяжется, но по другому\nномеру, сейчас продиктую».\n\n  ● Клиент не дал четкого положительного ответа на\n     поставленный вопрос.\nСтавят в том случае, если клиент сомневается в актуальности того\nили иного пункта в скрипте.\nПример: опер: «Вы готовы рассмотреть покупку в течение 30\nдней», клиент: «ну, возможно».\n\n   ● Клиент утверждает, что он пенсионер, оператор не уточнил\n      возраст клиента. \\\nСтавят в том случае, если в ходе диалога, клиент обозначил, что\nон на пенсии, а опер не уточнил его возраст. Кредиты одобряют до\n70 лет.\nПример: клиент: «ну мы пенсионеры, не знаю, одобрят нам кредит\nили нет».\n\n   ● Клиент сказал, что он является инвалидом, оператор не\n       уточнил группу инвалидности.\nСтавят в том случае, если клиент сомневается в одобрении\nкредита по причине наличия группы инвалидности, оператор не\nуточнил, к какой группе инвалидности относится клиент\nПример:\nК: \"я сомневаюсь, что мне одобрят кредит\"\nО: \"А почему вы сомневаетесь?\"\nК: \"Да я являюсь инвалидом\"\nО: \"В этом нет никакой проблемы”\n\n  ● Клиент рассматривает и кредит, и наличные, оператор не\n     уточнил гражданство клиента, если он похож на нерусского\n     (имя/акцент)\nСтавят в том случае, если в АЦ доступны и кредит, и наличные, но у\nклиента есть акцент или нерусское имя, и он рассматривает оба\nварианта оплаты, после оператор не уточняет гражданство.\n\n   ● Оператор ведет конструктивный диалог (диалог на 10 минут,\n      все основные моменты были уточнены за 2-3 минуты\n      диалога, далее пустой диалог на различные темы.\nСтавят в том случае, если диалог на 8-10 минут, оператор в первые\n1-3 минуты уточнил все, а дальше пустой диалог о том о сем.",
    "links": [],
    "order": 118,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_20",
    "group": "pamyatka",
    "title": "ЗАЯВКА БУДЕТ ОЦЕНЕНА В 0%, ЕСЛИ",
    "body": "● Оператор упустил важный вопрос скрипта, или не получил\n      никакого ответа на заданный вопрос и продолжил диалог\nСтавят в том случае, если опер пропустил выделенный вопрос в\nскрипте/ не получил никакого ответа на поставленный вопрос\nПример: опер не спросил про кредит, прописку (если в скрипте\nэто указано), 30 дней, местоположение. \n\n  ● Оператор не уточнил, где находится клиент.\nСтавят в том случае, если по скрипту клиент должен находится в\nопределенном городе, опер не уточняет, где находится клиент.\nПример: в скрипте указано «только Москва и Московская область,\nлибо готов приехать в течение 7 дней», опер не уточнил\nтерриториальное местонахождение клиента.\n\n   ● Оператор ведет диалог с незаинтересованным лицом, без\n      уточнения и звонка на номер заинтересованного лица\nСтавят в том случае, если в ходе диалога клиент уточняет, что его\nсамого покупка не интересует, интересовался\nмуж/жена/дочь/сын, но при этом четко отвечает на все\nпоставленные вопросы. Опер не уточняет, по какому номеру\nможно связаться с заинтересованным лицом.\nПример: клиент: «да у меня сын покупку рассматривал, но я могу\nвам рассказать, что ему нужно».\nТакже если планирует покупку друг, надо уточнить его номер, и\nпозвонить на его номер.\n\n  ● Оператор путает скрипт, единоразово упоминая название\n     другой компании.\nСтавят в том случае, если в ходе диалога опер путается и\nназывает другую компанию.\nПример: опер: «я представляю компанию Дримкар, ой, Автокар».\n\n   ● Мат от оператора в самом начале диалога, клиент этого не\n      услышал.\nСтавят в том случае, если в звонке, еще до того, как клиент взял\nтрубку, либо очень тихо в начале диалога, опер произносит мат,\nно клиент, судя по диалогу, этого не слышит.\n\n  ● Оператор назвал местоположение: Екатеринбург.\nДанный штраф ставят в том случае, если опер называет не\nместоположение автосалона, а местоположение нашего офиса\nили говорит, где он сам находится.\nПример: клиент: «вы откуда звоните?» опер: «да я из\nЕкатеринбурга вам звоню» (хотя скрипт был, допустим, по городу\nМосква).\n\n   ● Оператор сказал, что работает в компании “ЕЦТ”.\nДанный штраф ставят в том случае, если опер говорит, что\nработает не в автосалоне, а в компании «ЕЦТ». Мы должны\nговорить, \nчто работаем и находимся именно в автосалоне.\nПример: клиент: «Вы откуда звоните мне?», опер: «да я в\nкомпании ЕЦТ работаю, просто людей обзваниваем».\n\n   ● Оператор сказал, что работает в Колл-Центре.\nСтавят в том случае, если опер говорит, что работает не в\nавтосалоне, а именно в колл-центре.\nПример: клиент: «а вы вообще кто? откуда звоните?», опер: «да, \nя из колл-центра вам звоню, просто базу обзваниваю».\n\n   ● Клиент не дал четкого положительного ответа на вопрос\n      приезда в течение 7/14 дней.\nСтавят в том случае, если клиент не уверен в приезде в течение\nданного срока и отвечает «ну может быть, посмотрим, возможно \nи тд.»\nПример: опер «Вы готовы приехать в Москву в течение 7 дней»,\nклиент: «ну я точно не знаю, может быть и приеду\n\n  ● Клиент планирует покупку авто только после продажи\n     своего авто.\nСтавят в том случае, если клиент говорит, что прежде, чем\nпокупать новый автомобиль, ему нужно продать старый. До\nпродажи покупать новый автомобиль не собирается.\nПример: опер: «а вы в течение 30 дней покупку рассмотрите?»,\nклиент: «ну если свою продам, то конечно рассмотрю».\n\n   ● Клиент не готов принять звонок в ближайшее время. \n      Оператор не уточнил удобное время и не записал его в ИНФО\nСтавят в том случае, если в скрипте указано, что менеджер\nперезвонит в ближайшее время, а клиенту в ближайшее\nразговаривать не удобно. Оператор не уточнил, когда будет\nудобно.\nПример: опер: «с вами менеджер в ближайшее время свяжется \nи сориентирует по всем вопросам», клиент: «ну точно не в\nближайшее, давайте потом как-нибудь».\n\n  ● Оператор некорректно заполнил заявку (в скрипте\n     прописано \"СТРОГОЕ ЗАПОЛНЕНИЕ ЗАЯВКИ\")\nСтавят в том случае, если заявка заполнена не по примеру,\nописанному в скрипте, с пометкой \"СТРОГОЕ ЗАПОЛНЕНИЕ»\n\n    ● Оператор в ходе диалога не уточнил название\n       компании/город, если этого требует скрипт.\nСтавим в том случае, если в скрипте прописано название компании или\nгород, но оператор за весь диалог ни разу его не озвучил",
    "links": [],
    "order": 119,
    "source": "pamyatka_pdf"
  },
  {
    "id": "pm_21",
    "group": "pamyatka",
    "title": "ЗАЯВКА БУДЕТ ОЦЕНЕНА «НЕ АКТУАЛЬНО», ЕСЛИ",
    "body": "● Клиент проходит процедуру банкротства в данный момент.\nСтавят в том случае, если клиент говорит, что сейчас у него\nпроисходит процесс банкротства.\nПример: клиент: «у меня сейчас идет банкротство, поэтому не знаю,\nодобрят ли кредит».\n\n  ● Клиенту более 70 лет и покупка планируется в кредит\nСтавят в том случае, если в ходе диалога выяснилось, что клиенту \nуже более 70 лет, кредит одобряют до 70 лет включительно.\nПример: опер «вы кредит планируете или за наличный расчет?»,\nклиент «да я уже пенсионер, мне 71 год, но лучше конечно кредит».\n\n   ● Оператор не уточнил наличие гражданства у клиента с нерусским\n      именем или акцентом\nСтавят в том случае, если по диалогу понятно, что у клиента явный\nакцент + выяснилось, что нерусское имя и опер не уточняет\nгражданство (важное условие кредитования).\nПример: у клиента слышно явный акцент, опер не обращает на это\nвнимание и не задает вопросы про гражданство.\n\n   ● Клиент отказался от связи с менеджером.\nСтавят в том случае, если клиент негативно отреагировал на перевод\nна менеджера, либо просто отказался от связи с ним.\nПример: опер «я передаю ваш контакт менеджеру, он с вами свяжется и\nсориентирует более подробно», клиент: «не надо меня ни с кем\nсвязывать, сам разберусь».\n\n  ● Оператор не уточнил имя клиента.\nСтавят в том случае, если в ходе диалога опер ни разу не уточнил имя\nклиента и как к нему можно обращаться.\n\n   ● Клиент отказался говорить свое имя.\nСтавят в том случае, если опер пытался узнать имя клиента, но клиент\nтак его и не сказал.\nПример: опер «как я могу к вам обращаться?», клиент: «да зачем вам \nэта информация? называйте меня просто «клиент»».\n\n   ● Оператор упустил 2 и более важных вопросов скрипта.\nСтавят в том случае, если опер проигнорировал важные вопросы \nв скрипте, и просто не задал их.\nНапример, вопросы про актуальность в течение 30 дней и\nактуальность покупки в кредит, опер не задает этих вопросов.\n\n   ● Оператор душит клиента, вопросы задаются более 5 раз, клиент\n      уходит в негатив\nСтавят в том случае, если опер без конца пытается узнать у клиента\nактуальность чего-либо, на что клиент просто не может дать ему\nответ.\nПример: опер в 5 раз спрашивает: «ну может все-таки рассмотрите\nпокупку в кредит? если условия вам понравятся», клиент: «ну сколько\nможно спрашивать, я же сказал, НЕ ЗНАЮ».\n\n  ● Клиент отказался приехать в течение 7/14 дней.\nСтавят в том случае, если клиент не уверен в приезде в течение\nданного срока и отвечает «ну может быть, посмотрим, возможно и тд.»\nПример: опер «Вы готовы приехать в Москву в течение 7 дней», клиент:\n«неее, это далеко».\n\n  ● Оператор не уточнил актуальность приезда в течение 7/14 дней\nСтавят в том случае, если оператор не уточнил, готов ли клиент\nприехать к нам в город в течение 7/14 дней.\nПример: (скрипт по МСК и есть возможность приезда), опер: «Вы\nоткуда сами?», клиент: «Я из Новгорода.» Далее опер не уточняет,\nбудет ли возможность приехать к нам в Москву\n\n   ● Клиент не находится в городе или +50км от города, обозначенном\n      в скрипте и вопроса актуальности приезда не предусмотрено.\nСтавят в том случае, если клиент находится в другом городе (не в том,\nчто обозначен в скрипте), который дальше от города в скрипте на 50\nкилометров и вопроса про приезд в актуальный город нет.\nПример: клиент находится в Екатеринбурге, скрипт по Тюмени, скрипт \nне подразумевает актуальность приезда в Екатеринбург.\n\n  ● Оператор переводит клиента на Whats-app, с целью дальнейшего\n     сотрудничества\nСтавят в том случае, если в диалоге, оператор упоминает\nWhatsapp/telegram/Viber, чтобы продолжить диалог с менеджером.\nПример: Я передам ваш контакт менеджеру, он направит вам на вотсап\nкоммерческое предложение с целью ознакомления и дальнейшей\nбеседы\n\n   ● Перевод на менеджера полностью отсутствует в диалоге\nЭтот штраф ставят в том случае, если в диалоге не сказано ни слова\nпро перевод на менеджера, фактического перевода на менеджера нет,\nи клиент не в курсе, что ему будут звонить.\n\n  ● Оператор ведет диалог с несовершеннолетним клиентом\nСтавят в том случае, если оператор ведет диалог с клиентом, которому\nменее 18 лет, и он говорит об этом в диалоге. \n\n  ● Невежливый диалог со стороны оператора\nСтавят в том случае, если опер хамит, использует грубые выражения в\nсторону клиента, выражает свое недовольство.\nПример: опер «да сколько можно уже задавать один и тот же вопрос, я\nже вам уже отвечал на него тысячу раз».\n\n  ● Оператор обращается к клиенту на ТЫ.\nСтавят в том случае, если опер общается с клиентом как с другом, на\nТЫ. Даже если клиент сам этого просит.\nПример: клиент «обращайся ко мне на ТЫ, просто Костя», опер: «ну\nхорошо, Костя, ты покупку в кредит планируешь?».\n\n  ● Оператор матерится в диалоге с клиентом.\nСтавят в том случае, если опер в ходе диалога произносит мат.\n\n  ● Оператор ведет не конструктивный диалог.\nСтавят в том случае, если опер использует некорректные выражения в\nдиалоге с клиентом и не использует деловую этику.\nПример: опер: «ну если что приезжай к нам в автосалон, тут рядом же,\nпообщаемся, что делаешь после работы?».\n\n  ● Оператор упустил единственный вопрос скрипта, или не получил\n     никакого ответа на заданный вопрос и продолжил диалог.\nПример: опер пропустил ЕДИНСТВЕННЫЙ выделенный вопрос в\nскрипте/не получил никакого ответа на поставленный вопрос\n\n  ● Клиент планирует к покупке авто, которого нет в АЦ (минивэны,\n     электрокары).\nСтавят в том случае, если клиент хочет купить минивэн, гибрид,\nэлектрокар или другие авто, которые АЦ не продают.\nПример: клиент: «я хендай Старекс рассматриваю, ну у вас таких нет»,\nопер: «такие автомобили у нас есть».\n\n  ● Нет звонка.\nСтавят в том случае, если за определенный промежуток времени в\nсистеме так и не появился актуальный звонок. В ТАКОМ СЛУЧАЕ\nОБРАТИТЕСЬ К СВОЕМУ СУПЕРВАЙЗЕРУ\n\n  ● Брак звонка.\nСтавят в том случае, если в записи звонка не слышно либо клиента,\nлибо опера, либо и того, и другого. Запись считается бракованной. В\nТАКОМ СЛУЧАЕ ТОЖЕ ОБРАЩАЕМСЯ К СУПЕРВАЙЗЕРУ\n\n   ● Клиент не заинтересован в покупке авто в кредит.\nСтавят в том случае, если клиент хочет купить автомобиль за наличный\nрасчет, лизинг, рассрочку или какой-либо другой способ, а на кредит\nне соглашается. (В скриптах, где ТОЛЬКО КРЕДИТ).\nПример: клиент: «да я за наличку буду брать, не хочу в кредиты\nвлазить.» Возможно, в дальнейшем клиент согласился на кредит, но по\nобщей картине диалога, понятно, что ему кредит не интересен\n\n   ● Клиент не заинтересован в покупке в течение 30 дней.\nСтавят в том случае, если клиент планирует покупку через\nполгода/год, или в любой другой срок, более 30 дней.\nПример: опер: «Вы рассматриваете покупку в течение 30 дней?»,\nклиент: «нет, у меня только через 2 месяца деньги будут». Но также\nсмотрим на диалог в целом, если понятно, что клиент не рассмотрит\nпокупку в течение 30 дней, но он сказал, что рассмотрит, такая заявка\nтакже не актуальна.\n\n  ● Клиент не заинтересован в покупке.\nСтавят в том случае, если опер уговаривает клиента на покупку,\nкоторая ему совершенно не интересна.\nПример: опер: «вы рассмотрите покупку в течение 30 дней?», клиент:\n«да я ничего не собираюсь покупать, ну если хотите, можете мне\nскинуть».\n\n  ● Клиент подшучивает над оператором.\nСтавят в том случае, если клиент объективно шутит над опером и\nвообще не заинтересован в покупке.\nПример: клиент: «да я Майбах себе новенький купить хочу, тысяч за\n500 продадите?»\n\n   ● Клиент в нетрезвом состоянии.\nСтавят в том случае, если по голосу клиента объективно понятно, что\nон в нетрезвом состоянии и не может связать и двух слов.\n\n  ● Клиент слабо заинтересован в покупке.\nСтавят в том случае, если оперу приходится уговаривать клиента на\nпокупку, которая ему, на данный момент, вообще не интересна.\nПример: опер: «ну если вам прям все-все понравится, все условия\nподойдут, рассмотрите покупку?», клиент: «ну расскажите, но я\nпокупать ближайший год ничего не собираюсь».\n\n  ● Бюджет клиента не совпадает с допустимым бюджетом.\nСтавят в том случае, если бюджет клиента менее 350 тыс. или более 10\nмлн. (В скриптах, где не указан бюджет). Если в скрипте указан\nопределенный бюджет, то также, если бюджет клиента меньше или\nбольше указанной суммы - не актуально.\nПример: клиент: «я рассматриваю приору, тысяч за 150».\n\n   ● Оператор ведет диалог от лица другой компании.\nСтавят в том случае, если опер путает скрипты и представляется\nпредставителем другой компании, не той, что указана в скрипте. \nИ весь диалог ведет от лица этой компании.\nПример: опер представляется автосалоном «Автострайк», хотя по\nскрипту «Дримкар».\n\n  ● Клиент планирует сдать в трейд-ин автомобиль с иностранными\n     номерами\nСтавят в том случае, если клиент собирается сдать в трейд-ин авто с\nрегистрационными номерами другого государства.\n\n  ● Клиент инвалид 1 группы, инвалидам 1 группы кредит не\n     одобряют\nСтавят в том случае, если клиент говорит, что он инвалид, после\nуточнения группы инвалидности, клиент сказал, что у него 1 группа.\nИнвалидам 1 группы кредит не дают",
    "links": [],
    "order": 120,
    "source": "pamyatka_pdf"
  }
];

const NEWBIE_CONTENT_VERSION = 2;

function loadNewbieGuide() {
  try {
    const ver = Number(localStorage.getItem(NEWBIE_KEY + '_ver') || 0);
    if (ver < NEWBIE_CONTENT_VERSION) {
      // подтянуть полную памятку PDF + чеклист
      state.newbieGuide = DEFAULT_NEWBIE_GUIDE.map(x => ({
        ...x,
        links: (x.links || []).map(l => ({ ...l }))
      }));
      try {
        localStorage.setItem(NEWBIE_KEY, JSON.stringify(state.newbieGuide));
        localStorage.setItem(NEWBIE_KEY + '_ver', String(NEWBIE_CONTENT_VERSION));
      } catch (_) {}
      try { if (typeof scheduleCloudExtrasSave === 'function') scheduleCloudExtrasSave(); } catch (_) {}
      return;
    }
  } catch (_) {}
  if (Array.isArray(state.newbieGuide) && state.newbieGuide.length) return;
  try {
    const raw = localStorage.getItem(NEWBIE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (Array.isArray(p) && p.length) {
        state.newbieGuide = p;
        return;
      }
    }
  } catch (_) {}
  state.newbieGuide = DEFAULT_NEWBIE_GUIDE.map(x => ({ ...x, links: (x.links || []).map(l => ({ ...l })) }));
}

function persistNewbieGuide() {
  try {
    localStorage.setItem(NEWBIE_KEY, JSON.stringify(state.newbieGuide || []));
    localStorage.setItem(NEWBIE_KEY + '_ver', String(typeof NEWBIE_CONTENT_VERSION !== 'undefined' ? NEWBIE_CONTENT_VERSION : 2));
  } catch (_) {}
  try { if (typeof scheduleCloudExtrasSave === 'function') scheduleCloudExtrasSave(); } catch (_) {}
}

function canEditNewbie() {
  if (typeof isAdminUser === 'function' && isAdminUser()) return true;
  if (typeof canDo === 'function' && canDo('editNewbie')) return true;
  return false;
}

function renderNewbieGuide() {
  loadNewbieGuide();
  const group = state.newbieGroup || 'checklist';
  const q = (state.newbieQuery || '').toLowerCase().trim();
  const openId = state.newbieOpenId || '';
  let all = [...(state.newbieGuide || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
  const countCheck = all.filter(x => (x.group || 'checklist') === 'checklist').length;
  const countPam = all.filter(x => x.group === 'pamyatka').length;
  let list = all.filter(x => (x.group || 'checklist') === group);
  if (q) {
    list = list.filter(x => {
      const hay = [x.title, x.body, (x.links || []).map(l => (l.title || '') + ' ' + (l.url || '')).join(' ')].join(' ').toLowerCase();
      return q.split(/\s+/).filter(Boolean).every(w => hay.includes(w));
    });
  }
  const canChange = canEditNewbie();
  const hint = group === 'checklist'
    ? 'Короткий чеклист перед сменой. Нажмите пункт, чтобы раскрыть.'
    : 'Памятка ЕЦТ. Слева — оглавление, справа — текст. Поиск по словам.';

  const toc = list.map((item, idx) => {
    const active = openId === item.id;
    const short = (item.title || '').replace(/^БЛОК[:\s]*/i, '').trim();
    return `<button type="button" class="newbie-toc-item ${active ? 'active' : ''}" data-action="toggle-newbie-item" data-id="${escapeAttr(item.id)}" title="${escapeAttr(item.title || '')}">
      <span class="newbie-toc-num">${idx + 1}</span>
      <span class="newbie-toc-label">${escapeHtml(short.length > 42 ? short.slice(0, 40) + '…' : short)}</span>
    </button>`;
  }).join('');

  const cards = list.map((item, idx) => {
    const open = openId === item.id || (q && list.length <= 5);
    const preview = (item.body || '').replace(/\s+/g, ' ').trim().slice(0, 110);
    const linksHtml = (item.links && item.links.length)
      ? `<ul class="newbie-links">${item.links.map(l => {
          const url = l.url || '';
          const label = l.title || url;
          return `<li><a class="ref-link" href="${escapeAttr(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a></li>`;
        }).join('')}</ul>`
      : '';
    return `
      <article class="card newbie-card ${open ? 'is-open' : ''}" id="newbie-card-${escapeAttr(item.id)}">
        <button type="button" class="newbie-card-toggle" data-action="toggle-newbie-item" data-id="${escapeAttr(item.id)}" aria-expanded="${open ? 'true' : 'false'}">
          <span class="newbie-card-num">${idx + 1}</span>
          <span class="newbie-card-title-wrap">
            <span class="newbie-card-title">${escapeHtml(item.title || 'Без названия')}</span>
            ${!open && preview ? `<span class="newbie-card-preview">${escapeHtml(preview)}${(item.body || '').length > 110 ? '…' : ''}</span>` : ''}
          </span>
          <span class="newbie-card-chevron">${open ? '▾' : '▸'}</span>
        </button>
        ${open ? `
        <div class="newbie-card-panel">
          ${item.body ? `<div class="newbie-card-body">${linkify(item.body)}</div>` : ''}
          ${linksHtml}
          ${canChange ? `<div class="newbie-card-actions" style="margin-top:12px">
            <button class="btn btn-outline btn-sm" data-action="edit-newbie-item" data-id="${escapeAttr(item.id)}">✏️ Править</button>
            <button class="btn btn-danger btn-sm" data-action="delete-newbie-item" data-id="${escapeAttr(item.id)}">🗑</button>
          </div>` : ''}
        </div>` : ''}
      </article>`;
  }).join('');

  return `
    <div class="card rules-desc-card" style="margin-bottom:14px">
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;justify-content:space-between">
        <div>
          <h3 class="rules-section-title">🧭 Памятка новичка</h3>
          <p class="catalog-hint">${hint}</p>
        </div>
        ${canChange ? `<button class="btn btn-primary btn-sm" data-action="add-newbie-item">+ Пункт</button>` : ''}
      </div>
      <div class="ot-source-tabs" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">
        <button type="button" class="btn btn-sm ${group === 'checklist' ? 'btn-primary' : 'btn-outline'}" data-action="set-newbie-group" data-group="checklist">✅ Чеклист <span class="badge" style="margin-left:4px">${countCheck}</span></button>
        <button type="button" class="btn btn-sm ${group === 'pamyatka' ? 'btn-primary' : 'btn-outline'}" data-action="set-newbie-group" data-group="pamyatka">📘 Памятка ЕЦТ <span class="badge" style="margin-left:4px">${countPam}</span></button>
      </div>
      <div class="search-bar" style="margin-top:12px;flex-wrap:wrap">
        <input type="search" class="search-input" id="newbieSearch" placeholder="Поиск по разделу…" value="${escapeAttr(state.newbieQuery || '')}" style="flex:1;min-width:200px">
        ${openId ? `<button type="button" class="btn btn-outline btn-sm" data-action="collapse-all-newbie">Свернуть всё</button>` : ''}
      </div>
    </div>

    ${list.length === 0
      ? `<div class="empty-state"><div class="empty-icon">📋</div><p>${q ? 'Ничего не найдено по запросу.' : (canChange ? 'Пока пусто. Добавьте первый пункт.' : 'Пока пусто.')}</p></div>`
      : `<div class="newbie-layout">
          <aside class="newbie-toc card">
            <div class="newbie-toc-title">Оглавление</div>
            <div class="newbie-toc-list">${toc}</div>
          </aside>
          <div class="newbie-list">${cards}</div>
        </div>`}
  `;
}

function showNewbieItemModal(id) {
  if (!canEditNewbie()) { toast('Нет права редактировать памятку', 'error'); return; }
  loadNewbieGuide();
  const item = id ? (state.newbieGuide || []).find(x => x.id === id) : null;
  const linksText = (item && item.links && item.links.length)
    ? item.links.map(l => (l.title ? l.title + ' | ' : '') + (l.url || '')).join('\n')
    : '';
  openModal(
    item ? 'Редактировать пункт' : 'Новый пункт памятки',
    `<div class="form-group"><label>Заголовок</label>
       <input type="text" id="fNbTitle" value="${escapeAttr(item ? item.title : '')}" placeholder="Например: 1. Написать в группу…"></div>
     <div class="form-group"><label>Текст</label>
       <textarea id="fNbBody" rows="6" placeholder="Подробности…">${escapeHtml(item ? (item.body || '') : '')}</textarea></div>
     <div class="form-group"><label>Ссылки (каждая с новой строки: Название | https://…)</label>
       <textarea id="fNbLinks" rows="3" placeholder="CRM | https://ect-russia.ru/login">${escapeHtml(linksText)}</textarea></div>
     <div class="form-group"><label>Порядок (число)</label>
       <input type="number" id="fNbOrder" value="${escapeAttr(String(item && item.order != null ? item.order : ((state.newbieGuide || []).length + 1)))}" min="0" step="1"></div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-newbie-item" ${item ? `data-id="${escapeAttr(item.id)}"` : ''}>Сохранить</button>`
  );
}

function parseNewbieLinks(text) {
  return String(text || '').split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const parts = line.split('|').map(s => s.trim());
    if (parts.length >= 2) return { title: parts[0], url: parts.slice(1).join('|').trim() };
    if (/^https?:\/\//i.test(parts[0])) return { title: parts[0], url: parts[0] };
    return { title: parts[0], url: parts[0] };
  }).filter(l => l.url);
}

function saveNewbieItemFromForm(id) {
  if (!canEditNewbie()) { toast('Нет права', 'error'); return; }
  loadNewbieGuide();
  const title = document.getElementById('fNbTitle')?.value.trim() || '';
  const body = document.getElementById('fNbBody')?.value || '';
  const links = parseNewbieLinks(document.getElementById('fNbLinks')?.value || '');
  const order = Number(document.getElementById('fNbOrder')?.value);
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  if (!Array.isArray(state.newbieGuide)) state.newbieGuide = [];
  if (id) {
    const item = state.newbieGuide.find(x => x.id === id);
    if (!item) { toast('Пункт не найден', 'error'); return; }
    item.title = title;
    item.body = body;
    item.links = links;
    item.order = isFinite(order) ? order : item.order;
    item.updatedAt = Date.now();
  } else {
    state.newbieGuide.push({
      id: 'nb_' + Date.now().toString(36),
      group: state.newbieGroup || 'checklist',
      title,
      body,
      links,
      order: isFinite(order) ? order : state.newbieGuide.length + 1,
      updatedAt: Date.now()
    });
  }
  persistNewbieGuide();
  closeModal();
  toast('Сохранено');
  if (state.currentPage === 'newbie') render();
}

function deleteNewbieItem(id) {
  if (!canEditNewbie()) return;
  if (!confirm('Удалить этот пункт?')) return;
  loadNewbieGuide();
  state.newbieGuide = (state.newbieGuide || []).filter(x => x.id !== id);
  persistNewbieGuide();
  toast('Удалено');
  if (state.currentPage === 'newbie') render();
}


function renderSettings() {
  const s = state.settings;
  const c = state.cloud;
  return `
    <div class="settings-section card">
      <h3>Тема оформления</h3>
      <div class="layout-options">
        <div class="layout-option ${s.theme === 'dark' ? 'active' : ''}" data-action="set-theme" data-theme="dark">🌙 Тёмная</div>
        <div class="layout-option ${s.theme === 'light' ? 'active' : ''}" data-action="set-theme" data-theme="light">☀️ Светлая</div>
      </div>
      <div class="actions-row" style="margin-top:14px">
        <button class="btn btn-primary btn-sm" data-action="show-profile-editor">🎨 Цвета профиля</button>
      </div>
      <p class="field-hint" style="margin-top:8px">Цвета кнопок и акцентов — для вас на этом устройстве.</p>
    </div>

    <div class="settings-section card">
      <h3>☁ Облачное хранилище</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;line-height:1.55">
        ${isAdminUser()
          ? 'Ссылку на скрипт настраивайте в <b>Админ-панели</b>.'
          : 'Подключение настраивает администратор. Ссылка скрыта.'}
      </p>
      <p style="margin-top:10px;font-size:0.9rem">
        Статус: <strong>${c.enabled ? (c.status === 'ok' ? 'подключено ✓' : escapeHtml(String(c.status || '…'))) : 'только локально'}</strong>
        ${c.lastSync ? ' · обновлено: ' + new Date(c.lastSync).toLocaleTimeString('ru-RU') : ''}
      </p>
      <div class="actions-row" style="margin-top:12px">
        <button class="btn btn-outline btn-sm" data-action="sync-now">🔄 Обновить данные</button>
        ${isAdminUser() ? `<button class="btn btn-primary btn-sm" data-action="nav" data-page="admin">Админ-панель</button>` : ''}
      </div>
    </div>
  `;
}

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
    const remote = await cloudFetch({ force: true });
    if (remote && remote._skipped) {
      toast('Облако отвечает, но данных пока нет или уже актуальны');
      startAutoSync();
    } else if (remote && Array.isArray(remote.scripts) && remote.scripts.length > 0) {
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
    toast('Сначала подключите облако в админ-панели', 'error');
    return;
  }
  toast('Синхронизация…');
  let remote = null;
  try {
    remote = await cloudFetch({ force: true });
  } catch (e) {
    console.warn('syncNow', e);
    toast('Ошибка сети: ' + (e && e.message ? e.message : e), 'error');
    return;
  }
  if (remote && remote._skipped === 'uptodate') {
    state.cloud.status = 'ok';
    state.cloud.lastSync = Date.now();
    updateSyncBadge();
    toast('Уже актуально — новых данных в облаке нет');
    return;
  }
  if (remote && remote._skipped === 'local_write') {
    toast('Подождите пару секунд после сохранения и нажмите снова');
    return;
  }
  if (remote && (Array.isArray(remote.scripts) || remote.extras || remote.sharedOtabotki)) {
    try {
      if (typeof applyCloudRecord === 'function') applyCloudRecord(remote);
      else if (Array.isArray(remote.scripts)) {
        state.scripts = remote.scripts;
        saveLocalScripts();
      }
      try { ensureOtabotkiModel(); } catch (_) {}
      toast('Синхронизировано' + (Array.isArray(remote.scripts) ? (': ' + remote.scripts.length + ' скриптов') : ''));
      render();
    } catch (e2) {
      console.warn(e2);
      toast('Данные получены, но разбор не удался: ' + (e2.message || e2), 'error');
    }
  } else {
    toast('Не удалось загрузить из облака. Проверьте URL в админ-панели и развёртывание Apps Script.', 'error');
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


function showUserPermsModal(name) {
  if (!isAdminUser()) { toast('Только администратор', 'error'); return; }
  if (!name || name === 'Александр') { toast('Права админа нельзя ограничить', 'error'); return; }
  loadUserPermsStore();
  const perms = getUserPerms(name);
  const pagesHtml = PAGE_PERM_DEFS.map(p => {
    const checked = perms.pages && perms.pages[p.key] ? 'checked' : '';
    return `<label class="perm-check"><input type="checkbox" data-perm-page="${p.key}" ${checked}> ${escapeHtml(p.label)}</label>`;
  }).join('');
  const actionsHtml = ACTION_PERM_DEFS.map(a => {
    const checked = perms.actions && perms.actions[a.key] ? 'checked' : '';
    return `<label class="perm-check"><input type="checkbox" data-perm-action="${a.key}" ${checked}> ${escapeHtml(a.label)}</label>`;
  }).join('');
  openModal(
    'Права: ' + name,
    `<p class="catalog-hint" style="margin-bottom:12px">Отметьте, что можно <b>смотреть</b> и что можно <b>делать</b>. Сохраняется в облако для всех устройств.</p>
     <div class="perm-grid">
       <div class="perm-col">
         <h4 class="perm-col-title">Разделы (просмотр)</h4>
         ${pagesHtml}
       </div>
       <div class="perm-col">
         <h4 class="perm-col-title">Действия</h4>
         ${actionsHtml}
       </div>
     </div>
     <div class="actions-row" style="margin-top:12px">
       <button type="button" class="btn btn-outline btn-sm" data-action="perms-preset" data-preset="view" data-name="${escapeAttr(name)}">Пресет: только просмотр</button>
       <button type="button" class="btn btn-outline btn-sm" data-action="perms-preset" data-preset="diary" data-name="${escapeAttr(name)}">Пресет: просмотр + дневник</button>
       <button type="button" class="btn btn-outline btn-sm" data-action="perms-preset" data-preset="editor" data-name="${escapeAttr(name)}">Пресет: редактор</button>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-user-perms" data-name="${escapeAttr(name)}">Сохранить права</button>`
  );
}

function applyPermsPreset(name, preset) {
  if (!isAdminUser()) return;
  const base = defaultPermsFor(name === 'Общая' ? 'Общая' : (preset === 'editor' ? name : 'Общая'));
  // rebuild form checkboxes
  if (preset === 'view') {
    PAGE_PERM_DEFS.forEach(p => {
      const el = document.querySelector(`[data-perm-page="${p.key}"]`);
      if (el) el.checked = ['home','scripts','otabotki','catalog','calls','rules','refinfo','games'].includes(p.key);
    });
    ACTION_PERM_DEFS.forEach(a => {
      const el = document.querySelector(`[data-perm-action="${a.key}"]`);
      if (el) el.checked = false;
    });
  } else if (preset === 'diary') {
    PAGE_PERM_DEFS.forEach(p => {
      const el = document.querySelector(`[data-perm-page="${p.key}"]`);
      if (el) el.checked = ['home','scripts','otabotki','catalog','calls','rules','refinfo','goals','games'].includes(p.key);
    });
    ACTION_PERM_DEFS.forEach(a => {
      const el = document.querySelector(`[data-perm-action="${a.key}"]`);
      if (el) el.checked = a.key === 'useDiary' || a.key === 'useGoals';
    });
  } else if (preset === 'editor') {
    PAGE_PERM_DEFS.forEach(p => {
      const el = document.querySelector(`[data-perm-page="${p.key}"]`);
      if (el) el.checked = p.key !== 'settings';
    });
    ACTION_PERM_DEFS.forEach(a => {
      const el = document.querySelector(`[data-perm-action="${a.key}"]`);
      if (el) el.checked = !['manageUsers','viewTeamGoals','viewTeamDiaries'].includes(a.key);
    });
  }
  toast('Пресет применён — нажмите «Сохранить права»');
}

function saveUserPermsFromForm(name) {
  if (!isAdminUser()) return;
  if (!name || name === 'Александр') return;
  const pages = {};
  PAGE_PERM_DEFS.forEach(p => {
    const el = document.querySelector(`[data-perm-page="${p.key}"]`);
    pages[p.key] = !!(el && el.checked);
  });
  const actions = {};
  ACTION_PERM_DEFS.forEach(a => {
    const el = document.querySelector(`[data-perm-action="${a.key}"]`);
    actions[a.key] = !!(el && el.checked);
  });
  // goals page if diary or goals actions
  if (actions.useGoals || actions.useDiary || actions.viewTeamGoals || actions.viewTeamDiaries) {
    pages.goals = true;
  }
  setUserPerms(name, { pages, actions });
  closeModal();
  toast('Права сохранены и уйдут в облако');
  try { applyAccountPermissions(); } catch (_) {}
  render();
}


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
  toast('Участник сохранён — синхронизация…');
  render();
  if (typeof window.__ECT_REFRESH_USERS === 'function') window.__ECT_REFRESH_USERS();
  // Сразу в облако (не ждать debounce) — иначе на другом ПК не появится
  try {
    if (typeof enqueueCloud === 'function' && typeof cloudSaveExtrasOnly === 'function') {
      enqueueCloud(async () => {
        const ok = await cloudSaveExtrasOnly();
        if (ok) toast('Участник в облаке — доступен на всех ПК');
        else toast('Не удалось записать в облако. Проверьте синхронизацию.', 'error');
      });
    } else if (typeof cloudSaveExtrasOnly === 'function') {
      cloudSaveExtrasOnly().then(ok => {
        if (ok) toast('Участник в облаке — доступен на всех ПК');
        else toast('Не удалось записать в облако', 'error');
      });
    }
  } catch (e) { console.warn(e); }
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
  try {
    if (typeof enqueueCloud === 'function' && typeof cloudSaveExtrasOnly === 'function') {
      enqueueCloud(() => cloudSaveExtrasOnly());
    }
  } catch (_) {}
}

function handleClick(e) {
  const el = e.target.closest('[data-action]');
    if (!el) return;
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
    case 'refresh-presence':
      Promise.resolve(sendPresenceHeartbeat()).then(() => {
        if (state.currentPage === 'admin') render();
        toast('Список обновлён');
      });
      break;
    case 'edit-user-perms': showUserPermsModal(el.dataset.name); break;
    case 'save-user-perms': saveUserPermsFromForm(el.dataset.name); break;
    case 'perms-preset': applyPermsPreset(el.dataset.name, el.dataset.preset); break;
    case 'edit-team-user': showTeamUserModal(el.dataset.name); break;
    case 'delete-team-user': deleteTeamUser(el.dataset.name); break;
    case 'save-team-user': saveTeamUser(el.dataset.name || null); break;
    case 'edit-goal': showGoalEditor(el.dataset.user || state.currentUser); break;
    case 'save-goal': saveGoal(el.dataset.user); break;
    case 'save-goal-earn': saveGoalEarn(el.dataset.user); break;
    case 'clear-goal-earn': clearGoalEarn(el.dataset.user, null); break;
    case 'add-daily-log':
      showDailyLogModal(el.dataset.user || state.currentUser, null);
      break;
    case 'edit-daily-log':
      showDailyLogModal(el.dataset.user || state.currentUser, el.dataset.date);
      break;
    case 'save-daily-log':
      saveDailyLogFromForm(el.dataset.user || state.currentUser);
      break;
    case 'delete-daily-log': {
      const u = el.dataset.user || state.currentUser;
      const d = el.dataset.date;
      if (d && confirm('Удалить запись за ' + d + '?')) {
        deleteDailyLog(u, d);
        closeModal();
        toast('День удалён');
        render();
      }
      break;
    }
    case 'set-diary-period':
      state.diaryPeriod = el.dataset.period || 'day';
      if (state.currentPage === 'goals') render();
      break;
    case 'set-goals-tab':
      state.goalsTab = el.dataset.tab || 'my-goal';
      if (el.dataset.tab === 'team-goals') state.goalsViewUser = '';
      if (el.dataset.tab === 'team-diaries') state.diaryViewUser = '';
      if (state.currentPage === 'goals') render();
      break;
    case 'view-diary-user':
      state.goalsTab = 'team-diaries';
      state.diaryViewUser = el.dataset.user || '';
      if (state.currentPage === 'goals') render();
      break;
    case 'apply-diary-range':
      state.diaryFrom = document.getElementById('diaryFrom')?.value || '';
      state.diaryTo = document.getElementById('diaryTo')?.value || '';
      state.diaryPeriod = 'custom';
      if (state.currentPage === 'goals') render();
      break;
    case 'clear-goal-earn-day': clearGoalEarn(el.dataset.user, el.dataset.date); break;
    case 'fill-goal-earn': fillGoalEarnForm(el.dataset.date, el.dataset.amount); break;
    case 'delete-goal': confirmDeleteGoal(el.dataset.user); break;
    case 'confirm-delete-goal': doDeleteGoal(el.dataset.user); break;
    case 'view-goal-user':
      state.goalsTab = 'team-goals';
      state.goalsViewUser = el.dataset.user || '';
      if (state.currentPage === 'goals') render();
      break;
    case 'add-ref': showRefModal(null); break;
    case 'edit-ref': closeModal(); showRefModal(el.dataset.id); break;
    case 'save-ref': saveRefInfo(el.dataset.id || null); break;
    case 'delete-ref': deleteRefInfo(el.dataset.id); break;
    case 'delete-ref-media': deleteRefMedia(el.dataset.rid, el.dataset.mid, el.dataset.kind); break;
    case 'delete-script-media':
      deleteScriptMedia(el.dataset.sid, el.dataset.mid);
      break;
    case 'load-drive-audio': {
      const did = el.dataset.driveId;
      if (!did) break;
      el.disabled = true;
      el.textContent = '…';
      resolveMediaPlayUrl({ driveId: did, kind: 'audio' }).then(url => {
        if (!url) { toast('Не удалось загрузить аудио', 'error'); el.textContent = '▶ Загрузить'; el.disabled = false; return; }
        const audio = el.parentElement && el.parentElement.querySelector('audio');
        if (audio) { audio.src = url; audio.play().catch(() => {}); }
        el.remove();
      }).catch(e => { toast(String(e.message || e), 'error'); el.textContent = '▶ Загрузить'; el.disabled = false; });
      break;
    }
    case 'view-ref': showRefView(el.dataset.id); break;
    case 'set-ref-tag':
      state.refInfoTag = el.dataset.tag || '';
      if (state.currentPage === 'refinfo') render();
      break;
    case 'set-rules-source':
      state.rulesSource = el.dataset.src || 'general';
      state.rulesCategory = '';
      state.rulesBlock = '';
      state.rulesQuery = '';
      state.rulesTag = '';
      if (state.currentPage === 'rules') render();
      break;
    case 'set-rules-block':
      state.rulesBlock = el.dataset.block || '';
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
    case 'set-rules-tag':
      state.rulesTag = el.dataset.tag || '';
      if (state.currentPage === 'rules') render();
      break;
    case 'edit-rule-item-tags':
      showRuleItemTagModal(el.dataset.bid, el.dataset.idx, el.dataset.text || '');
      break;
    case 'save-rule-item-tags':
      saveRuleItemTags(el.dataset.bid, el.dataset.idx);
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
    case 'save-guest-login-setting': {
      const elCb = document.getElementById('cfgGuestLogin');
      const on = !!(elCb && elCb.checked);
      Promise.resolve(setGuestLoginEnabled(on)).then(() => {
        if (state.currentPage === 'admin') render();
      });
      break;
    }
    case 'set-newbie-group':
      state.newbieGroup = el.dataset.group === 'pamyatka' ? 'pamyatka' : 'checklist';
      state.newbieOpenId = '';
      state.newbieQuery = '';
      if (state.currentPage === 'newbie') render();
      break;
    case 'toggle-newbie-item': {
      const id = el.dataset.id || '';
      state.newbieOpenId = state.newbieOpenId === id ? '' : id;
      if (state.currentPage === 'newbie') {
        render();
        setTimeout(() => {
          const card = document.getElementById('newbie-card-' + id);
          if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
      break;
    }
    case 'collapse-all-newbie':
      state.newbieOpenId = '';
      if (state.currentPage === 'newbie') render();
      break;
    case 'add-newbie-item': showNewbieItemModal(null); break;
    case 'edit-newbie-item': showNewbieItemModal(el.dataset.id); break;
    case 'save-newbie-item': saveNewbieItemFromForm(el.dataset.id || null); break;
    case 'delete-newbie-item': deleteNewbieItem(el.dataset.id); break;
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
    case 'set-otabotki-source':
      state.otabotkiSource = el.dataset.source === 'metodichka' ? 'metodichka' : 'own';
      state.otabotkiCat = '';
      render();
      break;
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
  try { initVictoryCrmHelper(); } catch (e) { console.warn('victory crm', e); }
  try { loadFlappyScores(); FlappyGame.init(); } catch (e) { console.warn('flappy', e); }

  document.addEventListener('click', handleClick);

  document.addEventListener('change', function (e) {
    const inp = e.target && e.target.closest && e.target.closest('[data-action-change="upload-script-media"]');
    if (!inp || !inp.files || !inp.files[0]) return;
    const sid = inp.dataset.sid;
    uploadScriptMedia(sid, inp.files[0]).then(function () {
      try { inp.value = ''; } catch (_) {}
      try { render(); } catch (_) {}
    });
  });

  document.getElementById('hotkeysBtn')?.addEventListener('click', showHotkeysHelp);
  document.getElementById('quickSearchBtn')?.addEventListener('click', openQuickSearch);

  document.getElementById('themeToggle').addEventListener('click', () => {
    state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveLocalSettings();
  });

  document.getElementById('addScriptBtn').addEventListener('click', showAddScriptModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);
  // Не закрываем по клику на фон — только ✕ / «Отмена» / Esc (защита от мисклика)
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      /* intentionally ignored */
    }
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
    if (id === 'newbieSearch') {
      state.newbieQuery = e.target.value;
      clearTimeout(window._nbTimer);
      window._nbTimer = setTimeout(() => {
        if (state.currentPage === 'newbie') render();
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
    if (id === 'refInfoSearch') {
      state.refInfoQuery = e.target.value;
      clearTimeout(window._refTimer);
      window._refTimer = setTimeout(() => {
        if (state.currentPage === 'refinfo') render();
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

/**
 * ЕЦТ — медиа для скриптов (Google Drive)
 * ---------------------------------------
 * Вставьте этот блок в app.js (в конец файла, перед последней закрывающей скобкой
 * или после функции scheduleCloudSave / toast).
 *
 * Хранение: script.media = [
 *   { id, driveId, name, kind, mimeType, size, url, webViewLink, createdAt }
 * ]
 */


/* ========== Flappy Bird ========== */
const FLAPPY_SCORES_KEY = 'ect_flappy_scores_v1';

function loadFlappyScores() {
  try {
    const raw = localStorage.getItem(FLAPPY_SCORES_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && typeof p === 'object') state.flappyScores = p;
    }
  } catch (_) {}
  if (!state.flappyScores || typeof state.flappyScores !== 'object') state.flappyScores = {};
}

function persistFlappyScores() {
  try { localStorage.setItem(FLAPPY_SCORES_KEY, JSON.stringify(state.flappyScores || {})); } catch (_) {}
  try { if (typeof scheduleCloudExtrasSave === 'function') scheduleCloudExtrasSave(); } catch (_) {}
}

function getMyFlappyBest() {
  const u = state.currentUser || '';
  if (!u || !state.flappyScores) return 0;
  return Number(state.flappyScores[u] && state.flappyScores[u].best) || 0;
}

function submitFlappyScore(score) {
  const u = state.currentUser || '';
  if (!u || u === 'Общая') return;
  const n = Math.max(0, Math.floor(Number(score) || 0));
  if (!state.flappyScores) state.flappyScores = {};
  const prev = Number(state.flappyScores[u] && state.flappyScores[u].best) || 0;
  if (n > prev) {
    state.flappyScores[u] = { best: n, updatedAt: Date.now() };
    persistFlappyScores();
    const bestEl = document.getElementById('flappyBest');
    if (bestEl) bestEl.textContent = String(n);
    renderFlappyLeaderboard();
    toast('Новый рекорд: ' + n + '!');
  }
}

function renderFlappyLeaderboard() {
  const el = document.getElementById('flappyLeaderboard');
  if (!el) return;
  loadFlappyScores();
  const rows = Object.keys(state.flappyScores || {})
    .map(name => ({ name, best: Number(state.flappyScores[name].best) || 0, updatedAt: state.flappyScores[name].updatedAt || 0 }))
    .filter(r => r.name && r.name !== 'Общая')
    .sort((a, b) => b.best - a.best || a.name.localeCompare(b.name, 'ru'));
  if (!rows.length) {
    el.innerHTML = '<div class="catalog-hint">Пока нет рекордов — сыграйте первым!</div>';
    return;
  }
  const me = state.currentUser || '';
  el.innerHTML = rows.slice(0, 15).map((r, i) => `
    <div class="flappy-lb-row${r.name === me ? ' me' : ''}">
      <span class="flappy-lb-rank">${i + 1}</span>
      <span class="flappy-lb-name">${escapeHtml(r.name)}</span>
      <span class="flappy-lb-pts">${r.best}</span>
    </div>`).join('');
}

const FlappyGame = (function () {
  let canvas, ctx, raf = 0, running = false, dead = false, started = false;
  let birdY, birdV, pipes, score, frame;
  const W = 360, H = 520;
  const GRAVITY = 0.32, FLAP = -6.2, PIPE_W = 52, GAP = 130, SPEED = 2.15;
  const BIRD_X = 72, BIRD_R = 14;

  function reset() {
    birdY = H / 2;
    birdV = 0;
    pipes = [];
    score = 0;
    frame = 0;
    dead = false;
    started = false;
    running = false;
    const s = document.getElementById('flappyScore');
    if (s) s.textContent = '0';
    draw();
  }

  function spawnPipe() {
    const top = 60 + Math.random() * (H - GAP - 140);
    pipes.push({ x: W + 10, top, gap: GAP, passed: false });
  }

  function flap() {
    if (dead) return;
    if (!started) {
      started = true;
      running = true;
      loop();
    }
    birdV = FLAP;
  }

  function hit() {
    dead = true;
    running = false;
    submitFlappyScore(score);
    draw();
  }

  function loop() {
    if (!running) return;
    frame++;
    birdV += GRAVITY;
    birdY += birdV;

    if (frame % 90 === 0) spawnPipe();
    for (const p of pipes) p.x -= SPEED;
    pipes = pipes.filter(p => p.x > -PIPE_W - 5);

    for (const p of pipes) {
      if (!p.passed && p.x + PIPE_W < BIRD_X) {
        p.passed = true;
        score++;
        const s = document.getElementById('flappyScore');
        if (s) s.textContent = String(score);
      }
      const inX = BIRD_X + BIRD_R > p.x && BIRD_X - BIRD_R < p.x + PIPE_W;
      if (inX) {
        if (birdY - BIRD_R < p.top || birdY + BIRD_R > p.top + p.gap) {
          hit();
          return;
        }
      }
    }
    if (birdY + BIRD_R > H - 12 || birdY - BIRD_R < 0) {
      hit();
      return;
    }
    draw();
    raf = requestAnimationFrame(loop);
  }

  function draw() {
    if (!ctx) return;
    // sky
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#4ec0ca');
    g.addColorStop(1, '#70c5ce');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    // ground
    ctx.fillStyle = '#ded895';
    ctx.fillRect(0, H - 12, W, 12);
    ctx.fillStyle = '#73bf2e';
    ctx.fillRect(0, H - 16, W, 6);
    // pipes
    for (const p of pipes) {
      ctx.fillStyle = '#5aa400';
      ctx.fillRect(p.x, 0, PIPE_W, p.top);
      ctx.fillRect(p.x, p.top + p.gap, PIPE_W, H - (p.top + p.gap) - 12);
      ctx.fillStyle = '#73bf2e';
      ctx.fillRect(p.x - 3, p.top - 18, PIPE_W + 6, 18);
      ctx.fillRect(p.x - 3, p.top + p.gap, PIPE_W + 6, 18);
    }
    // bird
    ctx.save();
    ctx.translate(BIRD_X, birdY);
    ctx.rotate(Math.min(0.7, Math.max(-0.5, birdV * 0.06)));
    ctx.fillStyle = '#f7e26b';
    ctx.beginPath();
    ctx.ellipse(0, 0, BIRD_R + 2, BIRD_R, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(6, -4, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(8, -4, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f4a261';
    ctx.beginPath();
    ctx.moveTo(10, 2);
    ctx.lineTo(20, 5);
    ctx.lineTo(10, 8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    if (!started && !dead) {
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.fillRect(0, H / 2 - 28, W, 56);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 18px system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Нажмите, чтобы лететь', W / 2, H / 2 + 6);
    }
    if (dead) {
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fillRect(0, H / 2 - 40, W, 80);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 22px system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Игра окончена: ' + score, W / 2, H / 2 - 4);
      ctx.font = '14px system-ui,sans-serif';
      ctx.fillText('«Играть», затем тап по экрану', W / 2, H / 2 + 22);
    }
  }

  function onKey(e) {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      flap();
    }
  }

  function open() {
    const ov = document.getElementById('flappyOverlay');
    if (!ov) return;
    ov.hidden = false;
    canvas = document.getElementById('flappyCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    loadFlappyScores();
    const bestEl = document.getElementById('flappyBest');
    if (bestEl) bestEl.textContent = String(getMyFlappyBest());
    renderFlappyLeaderboard();
    reset();
  }

  function close() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    const ov = document.getElementById('flappyOverlay');
    if (ov) ov.hidden = true;
  }

  function start() {
    // Только сброс: полёт начнётся после тапа/клика/пробела по полю
    if (raf) cancelAnimationFrame(raf);
    reset();
  }

  function init() {
    const btn = document.getElementById('flappyBirdBtn');
    const closeBtn = document.getElementById('flappyClose');
    const startBtn = document.getElementById('flappyStart');
    const canvasEl = document.getElementById('flappyCanvas');
    btn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    startBtn?.addEventListener('click', start);
    canvasEl?.addEventListener('mousedown', (e) => { e.preventDefault(); flap(); });
    canvasEl?.addEventListener('touchstart', (e) => { e.preventDefault(); flap(); }, { passive: false });
    document.addEventListener('keydown', (e) => {
      const ov = document.getElementById('flappyOverlay');
      if (!ov || ov.hidden) return;
      onKey(e);
    });
    document.getElementById('flappyOverlay')?.addEventListener('click', (e) => {
      if (e.target && e.target.id === 'flappyOverlay') close();
    });
  }

  return { init, open, close };
})();

/* ========== Drive Media API ========== */


/* ========== Victory CRM — ссылка на звонок ========== */
const VICTORY_CRM_BASE = 'https://victory-crm.ru/answers/';

function victoryCrmBuildLink() {
  const id = String(document.getElementById('victoryCrmId')?.value || '').trim().replace(/\s+/g, '');
  if (!id) return '';
  return VICTORY_CRM_BASE + encodeURIComponent(id);
}

function initVictoryCrmHelper() {
  const toggle = document.getElementById('victoryCrmToggle');
  const panel = document.getElementById('victoryCrmPanel');
  const idInput = document.getElementById('victoryCrmId');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const open = panel.hasAttribute('hidden');
    if (open) {
      panel.removeAttribute('hidden');
      setTimeout(() => idInput?.focus(), 30);
    } else {
      panel.setAttribute('hidden', '');
    }
  });

  idInput?.addEventListener('input', victoryCrmBuildLink);
  idInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('victoryCrmCopy')?.click();
    }
  });

  document.getElementById('victoryCrmCopy')?.addEventListener('click', async () => {
    const url = victoryCrmBuildLink();
    if (!url) { toast('Вставьте ID звонка', 'error'); return; }
    try {
      await navigator.clipboard.writeText(url);
      toast('Ссылка скопирована');
    } catch (_) {
      try {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        toast('Ссылка скопирована');
      } catch (e2) {
        toast('Скопируйте вручную: ' + url, 'error');
      }
    }
  });

  document.getElementById('victoryCrmClear')?.addEventListener('click', () => {
    if (idInput) idInput.value = '';
    idInput?.focus();
  });
}


function getSheetsExecUrl() {
  const u = (state.cloud && state.cloud.sheetsUrl) || '';
  if (!u || !u.includes('script.google.com')) return null;
  return u.replace(/\/$/, '');
}

async function driveMediaPost(payload) {
  const url = getSheetsExecUrl();
  if (!url) throw new Error('Не настроен URL Google Apps Script (Настройки → Sheets URL)');
  const res = await fetch(url, {
    method: 'POST',
    // Apps Script web-app принимает text/plain JSON без CORS-preflight проблем
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch (_) {
    throw new Error('Неверный ответ сервера: ' + text.slice(0, 200));
  }
  if (!data || data.ok === false) {
    throw new Error((data && data.error) || 'Ошибка Drive');
  }
  return data;
}


/** Кэш blob-URL для driveId (чтобы не качать повторно) */
const __driveBlobUrlCache = Object.create(null);

/**
 * Получить URL, пригодный для <img src> / <audio src>.
 * Если есть driveId — тянем base64 через Apps Script (обход блокировки Drive).
 */
async function resolveMediaPlayUrl(mediaItem) {
  if (!mediaItem) return '';
  // уже data: или blob:
  if (mediaItem.url && (mediaItem.url.startsWith('blob:') || mediaItem.url.startsWith('data:'))) {
    return mediaItem.url;
  }
  const driveId = mediaItem.driveId;
  if (driveId) {
    if (__driveBlobUrlCache[driveId]) return __driveBlobUrlCache[driveId];
    try {
      const res = await driveMediaPost({ op: 'getMediaBase64', driveId: driveId });
      if (res && res.ok && res.data) {
        const mime = res.mimeType || mediaItem.mimeType || mediaItem.type || 'application/octet-stream';
        const bin = atob(res.data);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        const blob = new Blob([arr], { type: mime });
        const url = URL.createObjectURL(blob);
        __driveBlobUrlCache[driveId] = url;
        return url;
      }
    } catch (e) {
      console.warn('resolveMediaPlayUrl', e);
    }
  }
  // fallback: thumbnail для картинок
  if (driveId && (mediaItem.kind === 'image' || (mediaItem.type || '').startsWith('image/'))) {
    return 'https://drive.google.com/thumbnail?id=' + driveId + '&sz=w2000';
  }
  return mediaItem.url || '';
}

/** Файл → base64 (с data: префиксом) */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('FileReader failed'));
    reader.readAsDataURL(file);
  });
}

/**
 * Загрузить файл на Drive и добавить в script.media
 * @param {string} scriptId
 * @param {File} file
 */
async function uploadScriptMedia(scriptId, file) {
  if (!canEdit() || isCommonAccount()) {
    toast('Нет прав на загрузку', 'error');
    return null;
  }
  if (!file) return null;

  // Практический лимит ~12 МБ (base64 + Apps Script)
  const MAX_BYTES = 12 * 1024 * 1024;
  if (file.size > MAX_BYTES) {
    toast('Файл слишком большой (макс. ~12 МБ). Сожмите или загрузите вручную на Drive.', 'error');
    return null;
  }

  toast('Загрузка «' + (file.name || 'файл') + '»…');
  try {
    const base64 = await fileToBase64(file);
    const res = await driveMediaPost({
      op: 'uploadMedia',
      data: base64,
      fileName: file.name || 'file',
      mimeType: file.type || 'application/octet-stream',
      scriptId: scriptId
    });

    const script = state.scripts.find(s => s.id === scriptId);
    if (!script) throw new Error('Скрипт не найден');
    if (!Array.isArray(script.media)) script.media = [];

    const item = {
      id: uid(),
      driveId: res.driveId,
      name: res.originalName || res.name || file.name,
      kind: res.kind || 'other',
      mimeType: res.mimeType,
      size: res.size || file.size,
      url: res.url,
      webViewLink: res.webViewLink,
      createdAt: Date.now()
    };
    script.media.push(item);
    script.updatedAt = Date.now();
    try { saveLocalScripts(); } catch (_) {}
    try { scheduleCloudSave(); } catch (_) {}
    toast('Файл загружен на Drive');
    return item;
  } catch (e) {
    console.error(e);
    toast('Ошибка загрузки: ' + (e.message || e), 'error');
    return null;
  }
}

/**
 * Удалить медиа: с сайта + с Drive
 */
async function deleteScriptMedia(scriptId, mediaId) {
  if (!canEdit() || isCommonAccount()) {
    toast('Нет прав', 'error');
    return;
  }
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script || !Array.isArray(script.media)) return;

  const item = script.media.find(m => m.id === mediaId);
  if (!item) return;

  if (!confirm('Удалить «' + (item.name || 'файл') + '» с сайта и с Google Drive?')) return;

  // Сначала Drive
  if (item.driveId) {
    try {
      await driveMediaPost({ op: 'deleteMedia', driveId: item.driveId });
    } catch (e) {
      console.warn('Drive delete failed', e);
      if (!confirm('Не удалось удалить с Drive (' + (e.message || e) + ').\nУбрать только с сайта?')) return;
    }
  }

  script.media = script.media.filter(m => m.id !== mediaId);
  script.updatedAt = Date.now();
  try { saveLocalScripts(); } catch (_) {}
  try { scheduleCloudSave(); } catch (_) {}
  toast('Удалено');
  render();
}

/** HTML-блок медиа внутри карточки скрипта */
function renderScriptMediaBlock(script) {
  const list = Array.isArray(script.media) ? script.media : [];
  const canChange = canEdit() && !isCommonAccount();

  const cards = list.map(m => {
    const kind = m.kind || 'other';
    const driveId = m.driveId || '';
    const thumb = driveId && kind === 'image'
      ? ('https://drive.google.com/thumbnail?id=' + driveId + '&sz=w800')
      : (m.url || '');
    let preview = '';
    if (kind === 'image') {
      preview = `<a href="${escapeAttr(m.webViewLink || m.url || '#')}" target="_blank" rel="noopener">
        <img class="script-media-thumb" src="${escapeAttr(thumb)}" alt="${escapeAttr(m.name || '')}" loading="lazy"
          data-drive-id="${escapeAttr(driveId)}" onerror="this.style.opacity=0.3">
      </a>`;
    } else if (kind === 'audio') {
      preview = `<audio class="script-media-audio" controls preload="none"
        data-drive-id="${escapeAttr(driveId)}" data-media-lazy="1"></audio>
        <button type="button" class="btn btn-outline btn-sm" data-action="load-drive-audio" data-drive-id="${escapeAttr(driveId)}">▶ Загрузить</button>`;
    } else if (kind === 'video') {
      preview = `<a class="btn btn-outline btn-sm" href="${escapeAttr(m.webViewLink || m.url || '#')}" target="_blank" rel="noopener">Открыть видео</a>`;
    } else {
      preview = `<a class="btn btn-outline btn-sm" href="${escapeAttr(m.webViewLink || m.url || '#')}" target="_blank" rel="noopener">Открыть</a>`;
    }
    const icon = kind === 'image' ? '🖼' : kind === 'audio' ? '🎧' : kind === 'video' ? '🎬' : '📎';
    return `
      <div class="script-media-card" data-mid="${escapeAttr(m.id)}">
        <div class="script-media-preview">${preview}</div>
        <div class="script-media-meta">
          <span class="script-media-name">${icon} ${escapeHtml(m.name || 'файл')}</span>
          <span class="field-hint">${formatBytes(m.size || 0)}</span>
        </div>
        ${canChange ? `<button type="button" class="btn btn-danger btn-sm" data-action="delete-script-media"
          data-sid="${escapeAttr(script.id)}" data-mid="${escapeAttr(m.id)}">Удалить</button>` : ''}
      </div>`;
  }).join('');

  return `
    <section class="crm-block script-media-block">
      <div class="crm-block-head">
        <span>📁 Медиа <span class="badge">${list.length}</span></span>
        ${canChange ? `<label class="btn btn-sm btn-primary script-media-upload-btn">
          + Файл
          <input type="file" accept="image/*,audio/*,video/*" hidden
            data-action-change="upload-script-media" data-sid="${escapeAttr(script.id)}">
        </label>` : ''}
      </div>
      <div class="crm-block-body">
        ${list.length ? `<div class="script-media-grid">${cards}</div>` :
          `<p class="field-hint" style="margin:0">Нет файлов. Загрузите фото, аудио или видео — они сохранятся на Google Drive.</p>`}
      </div>
    </section>`;
}

function formatBytes(n) {
  n = Number(n) || 0;
  if (n < 1024) return n + ' B';
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
  return (n / (1024 * 1024)).toFixed(1) + ' MB';
}

/* --- Подключение к существующим обработчикам ---
 * 1) В switch (data-action) добавьте:
 *    case 'delete-script-media':
 *      deleteScriptMedia(el.dataset.sid, el.dataset.mid);
 *      break;
 *
 * 2) В делегирование change (или отдельно) для input[type=file]:
 *    document.addEventListener('change', (e) => {
 *      const inp = e.target.closest('[data-action-change="upload-script-media"]');
 *      if (!inp || !inp.files || !inp.files[0]) return;
 *      const sid = inp.dataset.sid;
 *      uploadScriptMedia(sid, inp.files[0]).then(() => { inp.value = ''; render(); });
 *    });
 *
 * 3) В renderScriptDetail() вставьте renderScriptMediaBlock(script)
 *    внутрь .crm-side или после блока с отработками.
 */

