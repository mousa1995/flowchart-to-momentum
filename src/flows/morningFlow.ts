import type { FlowNode } from "../types/FlowNode";

export const morningFlow: Record<string, FlowNode> = {
  start: {
    id: "start",
    text: "آیا آماده ورود به حالت فرمانده هستی؟",
    options: [
      {
        text: "بله",
        next: "commander"
      },
      {
        text: "خیر",
        next: "rest"
      }
    ]
  },

  commander: {
    id: "commander",
    text: "حالت فرمانده فعال شد. اولین مأموریت چیست؟",
    options: [
      {
        text: "شروع مطالعه",
        next: "study"
      }
    ]
  },

  rest: {
    id: "rest",
    text: "استراحت کوتاه ثبت شد.",
    options: []
  },

  study: {
    id: "study",
    text: "مأموریت مطالعه شروع شد.",
    options: []
  }
};