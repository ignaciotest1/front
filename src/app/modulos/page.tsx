"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { modulos } from "../../../utils/modulos";
import Link from "next/link";
import ProtectedRoute from "../routeprotect";

const Modulos = () => {
  // const { data: session } = useSession();

  return (
    <ProtectedRoute requiresAuth={true}>
      <section className="w-full  h-full min-h-[500px] flex flex-col justify-start items-center text-white gap-5">
        {/* <h1> Bienvenido {session?.user ? session.user.name : "Usuario"}</h1> */}
        <div className="grid grid-cols-2 col-span-1 gap-3">
          {modulos.map((modulo, i) => (
            <Link href={`/modulos/${modulo.link}`} key={i}>
              <div className="w-[200px] h-full rounded-lg text-black bg-white hover:bg-slate-100 flex items-center justify-center p-4 sombra transform hover:scale-105 transition duration-500 ease-in-out">
                <p>{modulo.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Modulos;
