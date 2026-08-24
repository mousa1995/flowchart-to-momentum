import type { FlowNode } from "../types/FlowNode";

export const nightRoutineFlow: Record<string, FlowNode> = {
  start: {
    id: "start",
    text: "شروع بررسی شبانه",
    options: [
      {
        text: "شروع بررسی شبانه",
        next: "howToEnter",
      },
    ],
  },

  howToEnter: {
    id: "howToEnter",
    text: "ورود با زنگ بود یا کار ها تمام شد ؟",
    options: [
      {
        text: "ورود با زنگ تلفن همراه بود",
        next: "assigningUnfinishedTasks",
      },
      {
        text: "ورود با تمام شدن کار های روز بود",
        next: "reviewOfDiscoveries",
      },
    ],
  },

  assigningUnfinishedTasks: {
    id: "assigningUnfinishedTasks",
    text: "وظایف نیمه تمام را به فردا واگذار کن",
    options: [
      {
        text: "انجام شد",
        next: "assigningUnfinishedTasks",
      },
    ],
  },

  reviewOfDiscoveries: {
    id: "reviewOfDiscoveries",
    text: "مرور اکتشافات امروز",
    options: [
      {
        text: "انجام شد",
        next: "reviewOfDiscoveries",
      },
    ],
  },
};
