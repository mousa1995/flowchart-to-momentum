import type { FlowNode } from "../types/FlowNode";

interface FlowRendererProps {
  node: FlowNode;
  onSelect: (nextNode: string) => void;
}

function FlowRenderer({ node, onSelect }: FlowRendererProps) {
  return (
    <div>
      <h2>{node.text}</h2>

      {node.options.map((option) => (
        <button key={option.next} onClick={() => onSelect(option.next)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default FlowRenderer;
