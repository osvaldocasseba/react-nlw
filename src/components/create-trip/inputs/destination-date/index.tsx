import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { SeparaterVertical } from "../../../separater/vertical";
import Button from "../../../buttons";

interface DestinationDateprops {
  open?: boolean;
  closeInput?: () => void;
  openInput?: () => void;
}
export default function DestinatioDate({
  open,
  openInput,
  closeInput,
}: DestinationDateprops) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex gap-3 items-center border border-zinc-500/15">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={open}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 focus:text-zinc-400 focus:outline-none flex-1"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={open}
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 focus:text-zinc-400 focus:outline-none"
        />
      </div>
      <SeparaterVertical />
      {open ? (
        <Button variant="gray" onClick={closeInput}>
          Alterar local/data
          <Settings2 className="size-5 text-zinc-400 inline-block ml-2" />
        </Button>
      ) : (
        <Button onClick={openInput}>
          Continuar{" "}
          <ArrowRight className="size-5 text-zinc-900 inline-block ml-2" />
        </Button>
      )}
    </div>
  );
}
