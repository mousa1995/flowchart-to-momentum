export interface FlowOption {
  text: string;
  next: string;
}

export interface FlowNode {
  id: string;
  text: string;
  options: FlowOption[];
}
