import type { FlowNode } from "../types/FlowNode";


export const emergencyFlow: Record<string, FlowNode> = {
    start: {
        id: "start",
        text: "در صورت بروز شرایط اضطراری، اقدامات لازم را انجام بده",
        options: [
            {
                text: "وارد کردن موضوع اضطراری",
                next: "start"
            }
        ]
    } 
}