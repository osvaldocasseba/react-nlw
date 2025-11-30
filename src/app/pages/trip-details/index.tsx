import { useState } from "react";
import RegisterActivity from "../../../components/trip-details/modal/register-activity-modal";
import ImportantLinks from "../../../components/trip-details/importats-links";
import Guests from "../../../components/trip-details/guests";
import SeparatorHorizontal from "../../../components/separater/horizontal";
import Activity from "../../../components/trip-details/activity";
import Header from "../../../components/trip-details/header";
import Button from "../../../components/buttons";
import { Plus } from "lucide-react";

export function TripDetailsPage() {
  const [registerActivity, setRegisterActivity] = useState(false);
  function openRegister() {
    setRegisterActivity(!registerActivity);
  }
  function closeRegister() {
    setRegisterActivity(!registerActivity);
  }
  return (
    <>
      <section className="max-w-6xl px-6 py-10 mx-auto space-y-8">
        <Header />
        <main className="flex gap-16 px-4">
          <section className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Actividades</h2>
              <Button onClick={openRegister}>
                <Plus className="size-5 text-zinc-900 inline-block mr-2" />
                Cadastrar actividade
              </Button>
            </div>
            <Activity />
          </section>
          <section className="w-80 space-y-6">
            <ImportantLinks />
            <SeparatorHorizontal />
            <Guests />
          </section>
        </main>
      </section>
      {registerActivity && <RegisterActivity closeRegister={closeRegister} />}
    </>
  );
}
