import CardClass from "@/components/CardClass";
import Link from "next/link";
import { modulos } from "../../../../utils/modulos";
import Image from "next/image";

interface IClasses {
  id: string;
  name: string;
  src: string;
  video: boolean;
}

const ModulesPage = ({ params }: { params: { modules: string } }) => {
  const { modules } = params;
  const classes =
    modulos.find((modulo) => modulo.link === modules)?.classes || [];

  const complements =
    modulos.find((modulo) => modulo.link === modules)?.complements || [];
  return (
    <div className="">
      <h2 className="font-medium text-2xl">
        Bienvenido al módulo sobre:{" "}
        <span className="font-normal capitalize">{params.modules}</span>
      </h2>
      <h3 className="my-2 text-xl">Clases:</h3>
      <section className="flex flex-wrap gap-5 py-5 mx-auto ">
        {classes.map((res) => (
          <Link
            key={res.name}
            href={`/modulos/${params.modules}/clase_${res.id}`}
          >
            <CardClass clase={res}></CardClass>
          </Link>
        ))}
      </section>
      <section>
        <h3 className="my-2 text-xl">Complementos:</h3>
        <div className="flex flex-wrap gap-3">
          {complements.map((res, i) => (
            <a key={i} href={res.src} download>
              <button className="bg-white hover:bg-slate-400 hover:text-white text-slate-800 font-bold py-10 px-10 rounded-xl transition duration-500 ease-in-out relative z-10">
                {res.type}
                <Image
                  height={28}
                  width={28}
                  src="/imgs/download.png"
                  alt="Imagen Descarga Hover"
                  className="absolute inset-0 w-full h-full p-7 object-cover rounded-xl opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-50 transform scale-125 hover:scale-90 transition-transform duration-2000 ease-in-out"
                />
              </button>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModulesPage;
