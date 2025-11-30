import { Settings2 } from "lucide-react";


interface AlterDateLocalProps{
    closeInput?: () => void
    text?: string
}
export default function CustomButtonGray({closeInput, text}: AlterDateLocalProps) {
  return (
    <button
      onClick={closeInput}
      className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg font-medium hover:bg-zinc-700"
    >
      {text}
      <Settings2 className="size-5 text-zinc-400 inline-block ml-2" />
    </button>
  );
}
