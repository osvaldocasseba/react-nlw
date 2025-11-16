import { AtSign, Plus, X } from "lucide-react";
import type { FormEvent } from "react";

interface InviteGuestsProps{
    closeModal?: () => void
    mailInvite?: string[]
    addEmailInvite?: (e: FormEvent<HTMLFormElement>) => void
    removeItemsFromInvite?: (email: string) => void
}

export function InviteGuests({closeModal, mailInvite, addEmailInvite, removeItemsFromInvite}: InviteGuestsProps) {
  return (
    <div className="bg-black/80 inset-0 fixed z-10 bg-opacity-100 flex items-center justify-center">
      <div className="bg-zinc-900 min-h-28 w-[640px] py-5 px-6 rounded-lg space-y-5 l">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-white">
              Selecionar convidados
            </h2>
            <button>
              <X
                onClick={closeModal}
                className="cursor-pointer text-zinc-400 size-5 mt-0"
              />
            </button>
          </div>

          <p className="text-zinc-300 text-sm">
            Os convidados irao receber e-mails para confirmar a participacao na
            viajem.
          </p>
        </div>
        <div className="flex gap-2 py-2 flex-wrap ">
          {mailInvite &&
            mailInvite.map((email) => {
              return (
                <div
                  key={email}
                  className=" bg-zinc-800 py-1.5 px-2.5 rounded-md flex items-center gap-2 "
                >
                  <span className="text-zinc-300">{email}</span>
                  <X
                    onClick={() => removeItemsFromInvite?.(email)}
                    className="cursor-pointer size-4 text-zinc-400"
                  />
                </div>
              );
            })}
        </div>
        <div className="h-px w-full bg-zinc-800" />
        <form
          onSubmit={addEmailInvite}
          action="#"
          className="bg-zinc-950 rounded-lg border border-zinc-700 flex items-center justify-center gap-2 p-2"
        >
          <div className=" p-2 flex-1">
            <AtSign className="inline-block mr-2 size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent placeholder:text-zinc-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-300 hover:bg-lime-400 rounded-lg px-3 text-black py-1.5 flex justify-center items-center"
          >
            Convidar
            <Plus className="inline-block size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
