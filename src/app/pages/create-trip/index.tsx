import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuests } from "../../../components/create-trip/modal/invite-guests/invite-guests";
import { ConfirmTrip } from "../../../components/create-trip/modal/confirm-trip/confirm-trip";
import DestinatioDate from "../../../components/create-trip/inputs/destination-date";
import { TripConfirmInvite } from "../../../components/create-trip/inputs/trip-confirm-invite";
export function CreateTripPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [mailInvite, setMailInvite] = useState(["osvaldo.casseb@gmail.com"]);
  const [confirmTrip, setConfirmTrip] = useState(false);

  function openInput() {
    setOpen(true);
  }
  function closeInput() {
    setOpen(false);
  }
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  function addEmailInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data?.get("email")?.toString();
    if (!email) {
      return undefined;
    }
    {
      mailInvite.includes(email)
        ? alert("O email já inclui na sua lista de convidados.")
        : setMailInvite?.([...mailInvite, email]);
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
    setMailInvite(newEmailList);
  }
  function createTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/detalhes-da-viajem/1");
  }
  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="max-w-3xl px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seu amigos, planeie sua próoxima viajem!
        </p>
        <div className="space-y-4">
          <DestinatioDate
            closeInput={closeInput}
            open={open}
            openInput={openInput}
          />
          {open && (
            <TripConfirmInvite
              confirmTripOpen={confirmTripOpen}
              mailInvite={mailInvite}
              openModal={openModal}
            />
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
    </section>
  );
}
