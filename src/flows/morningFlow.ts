import type { FlowNode } from "../types/FlowNode";

export const morningFlow: Record<string, FlowNode> = {
  start: {
    id: "start",
    text: "سلام موسی، آماده ساختن یک روز عالی هستی؟",
    options: [
      {
        text: "شروع کنیم",
        next: "commander"
      }
    ]
  },

  commander: {
    id: "commander",
    text: "حالت فرمانده فعال شد. آماده اجرای برنامه هستیم.",
    options: [
      {
        text: "بررسی وضعیت",
        next: "checkDesk"
      }
    ]
  },

  checkDesk: {
    id: "checkDesk",
    text: "میز مطالعه و میز کامپیوتر بررسی شدند.",
    options: [
      {
        text: "ورود به مأموریت مطالعه",
        next: "study"
      }
    ]
  },

  study: {
    id: "study",
    text: "مأموریت مطالعه شروع شد. تمرکز عمیق فعال است.",
    options: [
      {
        text: "اتمام مطالعه",
        next: "complete"
      }
    ]
  },

  complete: {
    id: "complete",
    text: "Mission Complete. مأموریت با موفقیت انجام شد.",
    options: []
  }
};