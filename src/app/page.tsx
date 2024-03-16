"use client";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const user = "Juan";
  const email = "ignaciofronttest@gmail.com";

  console.log(session?.user);

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:3000/api/send-mail`, { user, email });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="flex min-h-screen text-black flex-col items-center justify-between p-24">
      {!session ? (
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
          <div
            onClick={() => handleSubmit()}
            className="cursor-pointer bg-slate-500 w-[120px] rounded-lg flex justify-center items-center"
          >
            Test
          </div>
        </>
      )}
    </section>
  );
}
