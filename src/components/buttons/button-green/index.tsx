import { Plus } from "lucide-react";

interface CustomButonnProps {
  text: string;
  openModal?: () => void;
}
export default function CustomButtonGreen({
  text,
  openModal,
}: CustomButonnProps) {
  return (
    <button
      onClick={openModal}
      className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium hover:bg-lime-400 flex gap-2 items-center font text-lg"
    >
      <Plus className="size-5 text-zinc-900" />
      {text}
    </button>
  );
}
