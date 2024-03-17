import React from "react";

const NoDisponible = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-5 p-24">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="background text-center w-full max-w-[300px]">
          No puedes ver el contenido hasta ser aceptado!
        </h2>
        <button className="w-full bg-black text-white rounded-lg max-w-[120px]">
          Volver al inicio
        </button>
      </div>
    </section>
  );
};

export default NoDisponible;
