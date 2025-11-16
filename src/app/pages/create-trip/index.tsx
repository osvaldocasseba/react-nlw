import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuests } from "../../../components/modals/invite-guests";
import { ConfirmTrip } from "../../../components/modals/confirm-trip";
export function CreateTripPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [mailInvite, setMaliinvite] = useState([""]);
  const [confirmTrip, setConfirmTrip] = useState(false);

  function openInput() {
    setOpen(true);
  }
  function closeInput() {
    setOpen(false);
  }
  function opneModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  function addEmailInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email")?.toString();
    if (!email) {
      return undefined;
    }
    {
      mailInvite.includes(email)
        ? alert("O email já inclui na sua lista de convidados.")
        : setMaliinvite([...mailInvite, email]);
    }

    e.currentTarget.reset();
  }

  function confirmTripOpen() {
    setConfirmTrip(true);
  }
  function confirmTripClose() {
    setConfirmTrip(false);
  }
  function removeItemsFromInvite(emailRemove: string) {
    const newEmailList = mailInvite.filter((email) => email !== emailRemove);
    setMaliinvite(newEmailList);
  }
  function createTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/trip/1");
  }
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="max-w-3xl px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seu amigos, planeie sua próoxima viajem!
        </p>
        <div className="space-y-4">
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
            <div className="w-px h-6 bg-zinc-800 " />
            {open ? (
              <button
                onClick={closeInput}
                className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg font-medium hover:bg-zinc-700"
              >
                Alterar data/local
                <Settings2 className="size-5 text-zinc-400 inline-block ml-2" />
              </button>
            ) : (
              <button
                onClick={openInput}
                className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium hover:bg-lime-400"
              >
                Continuar
              </button>
            )}
          </div>
          {open && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center border border-zinc-500/15">
              <button
                onClick={opneModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400 " />
                {mailInvite.length > 0 ? (
                  <span className="bg-transparent text-lg  text-zinc-100 text-left  flex-1">
                    {mailInvite.length} pessoa (s) convidada (s)
                  </span>
                ) : (
                  <span className="bg-transparent text-lg  text-zinc-400 text-left  flex-1">
                    Quem estara na viajem?
                  </span>
                )}
              </button>
              <div className="w-px h-6 bg-zinc-800" />
              <button
                onClick={confirmTripOpen}
                className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium hover:bg-lime-400"
              >
                Confirmar viajem
                <ArrowRight className="inline-block size-5 ml-2" />
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center text-center px-28 ">
          {" "}
          <p className=" text-zinc-500 text-sm">
            Ao planejar sua viajem pela plann.er você automaticamente concorda
            com nossos{" "}
            <a href="#" className="text-zinc-300 underline">
              termos de uso
            </a>{" "}
            e{" "}
            <a href="#" className="text-zinc-300 underline">
              política de privacidade
            </a>
          </p>
        </div>
      </div>
      {modal && (
        <InviteGuests
          mailInvite={mailInvite}
          addEmailInvite={addEmailInvite}
          closeModal={closeModal}
          removeItemsFromInvite={removeItemsFromInvite}
        />
      )}
      {confirmTrip && (
        <ConfirmTrip
          createTrip={createTrip}
          confirmTripClose={confirmTripClose}
        />
      )}
    </div>
  );
}
