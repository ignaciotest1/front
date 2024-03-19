"use client";
import axios from "axios";
import { getSession, signIn, useSession } from "next-auth/react";
import ProtectedRoute from "./routeprotect";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  const user = "Juan";
  const email = "juansegundomartinez7@gmail.com";

  console.log(session, "session");

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:3000/api/sendMailAdmin`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ProtectedRoute requiresAuth={false}>
      <section className="flex h-full text-black flex-col items-center justify-center sm:justify-start sm:p-24">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="background w-full py-5 text-2xl sm:text-5xl text-center lg:px-10 flex flex-col gap-5">
            Bienvenidos a{" "}
            <span className="text-3xl sm:text-8xl text-wrap xl:h-28 bg-gradient-to-r from-blue-600 via-purple-500 to-purple-900 bg-clip-text text-transparent">
              Diamond Academy
            </span>
          </h1>
          <h3 className="background w-full text-lg text-center">
            Que estas esperando para dar un salto en tu carrera!
          </h3>

          {session ? (
            <Link href={"/modulos"}>
              <button className="inline-block w-60 bg-violet-400 py-2 px-4 text-white rounded-3xl hover:bg-violet-500 transition duration-500 ease-in-out transform hover:scale-105 ">
                Módulos
              </button>
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="inline-block w-1/2 bg-violet-400 py-2 px-4 text-white rounded-3xl hover:bg-violet-500 transition duration-500 ease-in-out transform hover:scale-105"
            >
              Ingresar
            </button>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
}
