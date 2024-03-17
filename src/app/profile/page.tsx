"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import ProtectedRoute from "../routeprotect";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <ProtectedRoute requiresAuth={true} profile={true}>
      <section className="w-full h-full flex flex-col items-center justify-center p-24">
        <div className="w-full h-full bg-white rounded-xl">
          {!session ? (
            <Loader />
          ) : (
            <div className=" flex flex-col justify-center items-center p-10 gap-5">
              <Image
                src={session.user.image}
                alt="user"
                width="200"
                height="200"
                className="rounded-full object-cover"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-bold">Nombre</p>
                <p>
                  {session ? session.user.name : "El nombre no esta disponible"}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-bold">Status</p>
                <p>
                  {session.user.status === "initial"
                    ? "Has ingresado correctamente, debes esperar a que te acepten"
                    : session.user.status === "approved"
                    ? "Has sido aceptado, podes ver el contenido"
                    : "No has sido aceptado, tenes que esperar a que te acepten"}
                </p>{" "}
              </div>
              <button
                onClick={() => signOut()}
                className="w-full bg-black text-white rounded-lg max-w-[120px]"
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Profile;