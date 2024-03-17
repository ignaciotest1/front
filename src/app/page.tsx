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
      <section className="flex min-h-screen text-black flex-col items-center justify-start p-24">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="background w-full text-3xl text-center px-4">
            Bienvenidos a Diamond Academy
          </h1>
          <h3 className="background w-full text-base text-center">
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
