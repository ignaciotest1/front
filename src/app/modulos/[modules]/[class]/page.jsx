"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { modulos } from "../../../../../utils/modulos";

const ClassPage = ({ params }) => {
  const classes =
    modulos.find((modulo) => modulo.link === params.modules)?.classes || [];

  const idPath = params.class.split("_")[1];

  const clase = classes.find((clas) => clas.id === idPath);

  return (
    <section className="w-full h-full min-h-[500px] flex flex-col justify-center items-center text-white gap-5">
      <section className="w-full h-full flex flex-col justify-center items-center">
        <div className=" w-[900px]  h-full flex justify-center">
          {clase.video && <VideoPlayer src={clase.src} />}
        </div>
      </section>
    </section>
  );
};

export default ClassPage;
