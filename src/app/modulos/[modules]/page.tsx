import CardClass from "@/components/CardClass";
import Link from "next/link";
import { modulos } from "../../../../utils/modulos";

const ModulesPage = ({ params }: { params: { modules: string } }) => {
  const { modules } = params;
  const classes =
    modulos.find((modulo) => modulo.link === modules)?.classes || [];

  return (
    <div className="">
      <h2 className="font-medium text-xl">
        Bienvenido al módulo sobre:{" "}
        <span className="font-normal capitalize">{params.modules}</span>
      </h2>
      <h3 className="my-2">Clases:</h3>
      <main className="flex flex-wrap gap-5 py-5justify-center">
        {classes.map((res) => (
          <Link
            key={res.name}
            href={`/modulos/${params.modules}/clase_${res.id}`}
          >
            <CardClass clase={res}></CardClass>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default ModulesPage;
