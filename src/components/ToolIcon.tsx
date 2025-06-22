import type { Tool } from '../types';

interface ToolDisplayProps {
  tool: Tool;
}

const ToolDisplay = ({ tool }: ToolDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-slate-200 hover:scale-110 transition-transform duration-200 ease-out">
      <span>
        <tool.icon className="w-10 h-10 md:w-14 md:h-14 fill-slate-200" />
      </span>
      <span className="font-semibold text-sm md:text-base">{tool.label}</span>
    </div>
  );
};

export default ToolDisplay;
