"use client";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import { getSession, signIn, useSession } from "next-auth/react";
import ProtectedRoute from "./routeprotect";

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
          <div
            onClick={() => handleSubmit()}
            className="cursor-pointer bg-slate-500 w-[120px] rounded-lg flex justify-center items-center"
          >
            Test
          </div>
        </div>
        {/* {!session ? (
        <Loader />
        ) : (
          <>
          <div className="background">
          {session.user.status !== "approved" ? (
            <h2>No has sido aceptado</h2>
            ) : (
              <h2>Bienvenido</h2>
              )}
              </div>
              </>
            )} */}
      </section>
    </ProtectedRoute>
  );
}
