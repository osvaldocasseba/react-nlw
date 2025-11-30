import { CircleDashed, CircleCheck, UserCog } from "lucide-react";

export default function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium text-zinc-100">Osvaldo Casseba</span>
          <span className="text-xs text-zinc-500 truncate  ">
            osvalodcasseba@gmail.com
          </span>
        </div>
        <CircleDashed className="size-5 text-zinc-400 shrink-0" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium text-zinc-100">Morais Antonio</span>
          <span className="text-xs text-zinc-500 truncate ">
            moraisantonio@gmail.com
          </span>
        </div>
        <CircleCheck className="size-5 text-zinc-400 shrink-0" />
      </div>

      <button className="bg-zinc-800 w-full  justify-center text-zinc-200 px-5 h-11  rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-500">
        <UserCog className="size-5 text-zinc-400 inline-block ml-2" />
        Gerenciar convidados
      </button>
    </div>
  );
}
