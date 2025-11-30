import { Link2, Plus } from "lucide-react";

export default function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium text-zinc-100">Reserva do AirBnB</span>
          <a
            href="#"
            className="text-sm text-zinc-500 truncate hover:text-zinc-200"
          >
            https://www.airbnb.com/rooms/1047
          </a>
        </div>
        <Link2 className="size-5 text-zinc-400 shrink-0" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium text-zinc-100">Reserva do AirBnB</span>
          <a
            href="#"
            className="text-sm text-zinc-500 truncate hover:text-zinc-200 "
          >
            https://www.airbnb.com/rooms/1047
          </a>
        </div>
        <Link2 className="size-5 text-zinc-400 shrink-0" />
      </div>

      <button className="bg-zinc-800 w-full  justify-center text-zinc-200 px-5 h-11  rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-500">
        <Plus className="size-5 text-zinc-400 inline-block ml-2" />
        Cadastrar mais actividades
      </button>
    </div>
  );
}
