import { ArrowRight, UserRoundPlus } from "lucide-react";
import Button from "../../../buttons";

interface TripConfirmProps {
  openModal?: () => void;
  mailInvite: string[];
  confirmTripOpen?: () => void;
}

export function TripConfirmInvite({
  openModal,
  mailInvite,
  confirmTripOpen,
}: TripConfirmProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center border border-zinc-500/15">
      <button onClick={openModal} className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400 " />
        {mailInvite?.length > 0 ? (
          <span className="bg-transparent text-lg  text-zinc-100 text-left  flex-1">
            {mailInvite?.length} pessoa (s) convidada (s)
          </span>
        ) : (
          <span className="bg-transparent text-lg  text-zinc-400 text-left  flex-1">
            Quem estara na viajem?
          </span>
        )}
      </button>
      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={confirmTripOpen}>
        Confirmar viajem
        <ArrowRight className="inline-block size-5 ml-2" />
      </Button>
    </div>
  );
}
