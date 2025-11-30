import { Calendar, Tag, X } from "lucide-react";
import Button from "../../buttons";

interface RegisterActivityProps {
  closeRegister: () => void;
}
export default function RegisterActivity({
  closeRegister,
}: RegisterActivityProps) {
  return (
    <>
      <div className="bg-black/60 inset-0 fixed  flex items-center justify-center">
        <div className="bg-zinc-900 min-h-28 w-[640px] py-5 px-6 rounded-lg space-y-5 ">
          <div className="space-y-2 ">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white flex-1">
                Cadastrar actividade
              </h2>
              <button>
                <X
                  onClick={closeRegister}
                  className="cursor-pointer text-zinc-400 size-5 mt-0"
                />
              </button>
            </div>
            <p className="text-zinc-400 text-sm">
              Todos os convidados podem ver as actividades
            </p>
          </div>
          <form className="space-y-3">
            <div className="bg-zinc-950 rounded-lg border border-zinc-700 flex items-center px-4  h-14">
              <Tag className="inline-block mr-2 size-5 text-zinc-400" />
              <input
                type="text"
                name="title"
                placeholder="Qual a actividade"
                className="bg-transparent text-lg placeholder:text-zinc-400 focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-zinc-950 rounded-lg border border-zinc-700 flex-1 flex items-center px-4  h-14 ">
                <Calendar className="inline-block mr-2 size-5 text-zinc-400" />
                <input
                  type="datetime-local"
                  name="email"
                  placeholder=""
                  className="bg-transparent text-lg placeholder:text-zinc-400 focus:outline-none w-full"
                />
              </div>
            </div>
            <Button type="submit" variant="lime" size="full">
              Salvar actividade
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
