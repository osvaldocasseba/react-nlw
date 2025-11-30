import { MapPin, Calendar, Settings2 } from "lucide-react";
import { SeparaterVertical } from "../../separater/vertical";
// import AlterDateLocal from "../../../components/buttons/button-gray";
import Button from "../../buttons";

export default function Header() {
  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <p className="text-lg text-zinc-100">Angola, Luanda, Calemba 2</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <p>17 a 23 de Dezembro</p>
        </div>
        <SeparaterVertical />
        <Button variant="lime">
          Alterar local/data
          <Settings2 className="size-5 text-zinc-900 inline-block ml-2" />
        </Button>
      </div>
    </header>
  );
}
