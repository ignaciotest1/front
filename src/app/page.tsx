"use client";
import { getSession, signIn, useSession } from "next-auth/react";
import ProtectedRoute from "./routeprotect";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <ProtectedRoute requiresAuth={false}>
      <section className="flex h-full text-white flex-col items-center justify-center sm:justify-start sm:p-24">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h1 className="background bg-zinc-800 w-full py-8 text-2xl sm:text-5xl text-center lg:px-40 lg:py-12 flex flex-col gap-5">
            Bienvenidos a{" "}
            <span className="text-3xl sm:text-8xl font-bold">Luxury Gold</span>
          </h1>
          <h3 className="background bg-zinc-800 py-4 w-full text-lg text-center">
            Que estas esperando para dar un salto en tu carrera!
          </h3>

          {session ? (
            <Link href={"/modulos"}>
              <button className="inline-block w-60 bg-black mt-4 py-3 px-3 text-white rounded-3xl hover:sombraGold transition duration-500 ease-in-out transform hover:scale-105 ">
                Módulos
              </button>
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="inline-block w-1/2 bg-y bg-black mt-4 py-3 px-3 text-white rounded-3xl hover:sombraGold transition duration-500 ease-in-out transform hover:scale-105"
            >
              Ingresar
            </button>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
}
