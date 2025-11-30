import { User, X } from "lucide-react";
import type { FormEvent } from "react";
import Button from "../../../buttons";
interface confirmTripProps {
  confirmTripClose?: () => void;
  createTrip?: (e: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTrip({
  confirmTripClose,
  createTrip,
}: confirmTripProps) {
  return (
    <div className="bg-black/80 inset-0 fixed z-10 bg-opacity-100 flex items-center justify-center">
      <div className="bg-zinc-900 min-h-28 w-[640px] py-5 px-6 rounded-lg space-y-5 ">
        <div className="space-y-2 ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white flex-1">
              Confirmar criação de viajem
            </h2>
            <button>
              <X
                onClick={confirmTripClose}
                className="cursor-pointer text-zinc-400 size-5 mt-0"
              />
            </button>
          </div>

          <p className="text-zinc-400 text-sm">
            Para concluir a criação da viajem para{" "}
            <span className="font-semibold text-zinc-100">Angola, Luanda</span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              {" "}
              16 a 27 de Agosto de 2026
            </span>{" "}
            preencha seus dados abaixo.
          </p>
        </div>
        <form onSubmit={createTrip} className="space-y-3">
          <div className="bg-zinc-950 rounded-lg border border-zinc-700 flex items-center px-4  h-14">
            <User className="inline-block mr-2 size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder:text-zinc-400 focus:outline-none w-full"
            />
          </div>
          <div className="bg-zinc-950 rounded-lg border border-zinc-700 flex items-center px-4  h-14 ">
            <User className="inline-block mr-2 size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="bg-transparent text-lg placeholder:text-zinc-400 focus:outline-none w-full"
            />
          </div>
          <Button type="submit" size="full">
            Confirmar criação da viajem
          </Button>
        </form>
      </div>
    </div>
  );
}
