const CardClass = ({ clase }: any) => {
  return (
    <div className="h-[300px] w-[385px] bg-white rounded-3xl flex flex-col sombra">
      <img src="/imgs/imageEj.png" alt="cover ejemplo" />
      <div className="flex w-full h-full justify-center items-center">
        <p>{clase.name}</p>
      </div>
    </div>
  );
};

export default CardClass;
