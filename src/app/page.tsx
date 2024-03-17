"use client";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import { getSession, signIn, useSession } from "next-auth/react";
import ProtectedRoute from "./routeprotect";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  const user = "Juan";
  const email = "juansegundomartinez7@gmail.com";

  console.log(session?.user, "session");

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
          <button
            onClick={() => signIn()}
            className="w-full bg-white rounded-lg max-w-[120px]"
          >
            Ingresar
          </button>

          <div className="w-full h-full flex gap-4 justify-center">
            <Link href={"/modulos"}>
              <button className="inline-block bg-violet-400 py-2 px-4 text-white rounded-3xl hover:bg-violet-500 transition duration-500 ease-in-out transform hover:scale-105 ">
                Módulos
              </button>
            </Link>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
