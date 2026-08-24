import type { FlowNode } from "../types/FlowNode";

export const morningRoutineFlow: Record<string, FlowNode> = {
  start: {
    id: "start",
    text: "هدف امروز را داخل سورس کد تغییر بده",
    options: [
      {
        text: "انجام شد",
        next: "lightAdjustment",
      },
    ],
  },

  lightAdjustment: {
    id: "lightAdjustment",
    text: "نور خونه را بر مبنای نیازت تنظیم کن ",
    options: [
      {
        text: "انجام شد",
        next: "tidyComputerDesk",
      },
    ],
  },

  tidyComputerDesk: {
    id: "tidyComputerDesk",
    text: "روی میز کامپیوتر را خالی و مرتب کن ",
    options: [
      {
        text: "انجام شد",
        next: "wipeDustOffComputerDesk",
      },
    ],
  },

  wipeDustOffComputerDesk: {
    id: "wipeDustOffComputerDesk",
    text: "روی میز کامپیوتر را دستمال بکش ",
    options: [
      {
        text: "انجام شد",
        next: "goBoilWater",
      },
    ],
  },

  goBoilWater: {
    id: "goBoilWater",
    text: "برو آب جوش بگزار ",
    options: [
      {
        text: "انجام شد",
        next: "makeTheBed",
      },
    ],
  },

  makeTheBed: {
    id: "makeTheBed",
    text: "رختخواب را جمع کن ",
    options: [
      {
        text: "انجام شد",
        next: "goToTheBathroom",
      },
    ],
  },

  goToTheBathroom: {
    id: "goToTheBathroom",
    text: "سرویس بهداشتی برو ",
    options: [
      {
        text: "انجام شد",
        next: "watchTheBoilingWater",
      },
    ],
  },

  watchTheBoilingWater: {
    id: "watchTheBoilingWater",
    text: "یه  وضو بگیر و آب جوش را نگاه کن ",
    options: [
      {
        text: "انجام شد",
        next: "bringTheVacuumCleaner",
      },
    ],
  },

  bringTheVacuumCleaner: {
    id: "bringTheVacuumCleaner",
    text: "جارو برقی را بیار ",
    options: [
      {
        text: "انجام شد",
        next: "sortingDirtyClothes",
      },
    ],
  },

  sortingDirtyClothes: {
    id: "sortingDirtyClothes",
    text: "لباس های کثیف را مرتب کنار هم بگزار ",
    options: [
      {
        text: "انجام شد",
        next: "makeHerbalTea",
      },
    ],
  },

  makeHerbalTea: {
    id: "makeHerbalTea",
    text: "دمنوش برای خودت درست کن ",
    options: [
      {
        text: "انجام شد",
        next: "doTheVacuum",
      },
    ],
  },

  doTheVacuum: {
    id: "doTheVacuum",
    text: "جارو برقی را روی زمین بکش ",
    options: [
      {
        text: "انجام شد",
        next: "drinkYourDrink",
      },
    ],
  },

  drinkYourDrink: {
    id: "drinkYourDrink",
    text: "نوشیدنی خود را بنوش ",
    options: [
      {
        text: "انجام شد",
        next: "takeOutTheTrash",
      },
    ],
  },

  takeOutTheTrash: {
    id: "takeOutTheTrash",
    text: "زباله را بیرون ببر ",
    options: [
      {
        text: "انجام شد",
        next: "eraseTheWhiteboard",
      },
    ],
  },

  eraseTheWhiteboard: {
    id: "eraseTheWhiteboard",
    text: "تخته وایت برد را پاک کن ",
    options: [
      {
        text: "انجام شد",
        next: "bringTheRadio",
      },
    ],
  },

  bringTheRadio: {
    id: "bringTheRadio",
    text: "رادیو را بیار ",
    options: [
      {
        text: "انجام شد",
        next: "washingDishesInTheSink",
      },
    ],
  },

  washingDishesInTheSink: {
    id: "washingDishesInTheSink",
    text: "ظرف ها را در سینک بشور ",
    options: [
      {
        text: "انجام شد",
        next: "arrangeSofasInLivingRoom",
      },
    ],
  },

  arrangeSofasInLivingRoom: {
    id: "arrangeSofasInLivingRoom",
    text: "مبل ها را در اتاق نشیمن مرتب کن ",
    options: [
      {
        text: "انجام شد",
        next: "wipingTablesInsideHall",
      },
    ],
  },

  wipingTablesInsideHall: {
    id: "wipingTablesInsideHall",
    text: "میز های داخل سالن را دستمال بکش ",
    options: [
      {
        text: "انجام شد",
        next: "checkBuyBreadTomatoesAndSMS",
      },
    ],
  },

  checkBuyBreadTomatoesAndSMS: {
    id: "checkBuyBreadTomatoesAndSMS",
    text: "یا برو خرید یا  چک کن که نون و گوجه خریدی و پیامک ها را چک کن ",
    options: [
      {
        text: "انجام شد",
        next: "officeItemsForTomorrow",
      },
    ],
  },

  officeItemsForTomorrow: {
    id: "officeItemsForTomorrow",
    text: "چک کن که فردا چه چیز هایی برای اداره لازم داری ",
    options: [
      {
        text: "انجام شد",
        next: "washingSocksForTomorrow",
      },
    ],
  },

  washingSocksForTomorrow: {
    id: "washingSocksForTomorrow",
    text: "جوراب های فردا را بشور ",
    options: [
      {
        text: "انجام شد",
        next: "facialAndShower",
      },
    ],
  },

  facialAndShower: {
    id: "facialAndShower",
    text: "صورتت را بشور و دوش بگیر و در صورت لزوم اصلاح کن ",
    options: [
      {
        text: "انجام شد",
        next: "makingAndEatingFood",
      },
    ],
  },

  makingAndEatingFood: {
    id: "makingAndEatingFood",
    text: "غذا درست کن و بخور ",
    options: [
      {
        text: "انجام شد",
        next: "washingNewDishes",
      },
    ],
  },

  washingNewDishes: {
    id: "washingNewDishes",
    text: "ظرف های جدید را بشور ",
    options: [
      {
        text: "انجام شد",
        next: "washingTablecloth",
      },
    ],
  },

  washingTablecloth: {
    id: "washingTablecloth",
    text: " سفره یا رومیزی را بشور و پهن کن ",
    options: [
      {
        text: "انجام شد",
        next: "takingSupplementsToday",
      },
    ],
  },

  takingSupplementsToday: {
    id: "takingSupplementsToday",
    text: "مکمل های امروز را بخور ",
    options: [
      {
        text: "انجام شد",
        next: "eatTwoSpoonsOfOats",
      },
    ],
  },

  eatTwoSpoonsOfOats: {
    id: "eatTwoSpoonsOfOats",
    text: "دو قاشق جو دوسر بخور ",
    options: [
      {
        text: "انجام شد",
        next: "cleaningOneKitchenAppliance",
      },
    ],
  },

  cleaningOneKitchenAppliance: {
    id: "cleaningOneKitchenAppliance",
    text: "یکی از وسایل آشپزخانه را تمیز کن ",
    options: [
      {
        text: "انجام شد",
        next: "puttingDriedDishesInTheirPlace",
      },
    ],
  },

  puttingDriedDishesInTheirPlace: {
    id: "puttingDriedDishesInTheirPlace",
    text: "ظرف های خشک شده را سر جای خودشون بزار ",
    options: [
      {
        text: "انجام شد",
        next: "puttingRazorInItsPlace",
      },
    ],
  },

  puttingRazorInItsPlace: {
    id: "puttingRazorInItsPlace",
    text: "تیغ و ماشین اصلاح را سر جای خودش بزار ",
    options: [
      {
        text: "انجام شد",
        next: "sortingCleanClothes",
      },
    ],
  },

  sortingCleanClothes: {
    id: "sortingCleanClothes",
    text: "لباس های تمیز را مرتب کن ",
    options: [
      {
        text: "انجام شد",
        next: "putTowelSomewhereToDry",
      },
    ],
  },

  putTowelSomewhereToDry: {
    id: "putTowelSomewhereToDry",
    text: "حوله را جایی بزار تا خشک شود ",
    options: [
      {
        text: "انجام شد",
        next: "handkerchiefToTheOpen",
      },
    ],
  },

  handkerchiefToTheOpen: {
    id: "handkerchiefToTheOpen",
    text: "اول اوپن را دستمال بکش و بعددستمال را بشور ودستمال را جایی بزار تا خشک شود ",
    options: [
      {
        text: "انجام شد",
        next: "eatingCreatineMonohydrate",
      },
    ],
  },

  eatingCreatineMonohydrate: {
    id: "eatingCreatineMonohydrate",
    text: "کراتین مونوهیدرات را بخور ",
    options: [
      {
        text: "انجام شد",
        next: "end",
      },
    ],
  },

  end: {
    id: "end",
    text: "تبریک میگم، روتین صبحگاهی امروزت را کامل انجام دادی ",
    options: [],
  },
};
