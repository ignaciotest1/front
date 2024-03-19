import { fetchUsersAsync } from "@/redux/slices/userSlice";
import { User } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  user: User;
  key: string;
}

const UserDashboard = ({ user, key }: Props) => {
  const { image, name, email, status, role } = user;
  const { data: session, update } = useSession();
  const dispatch = useDispatch();

  const handleAccept = async (email: string, status: string) => {
    await axios.post("/api/status", { email, status });
    await update({ ...session, user: { ...session?.user } });
    dispatch(fetchUsersAsync());
  };

  return (
    <tr key={key}>
      <td className="px-4 py-2">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
      </td>
      <td className=" px-4 py-2">{name}</td>
      <td className=" px-4 py-2">{email}</td>
      <td className=" px-4 py-2">
        {status === "approved" ? "Aprobado" : "Rechazado"}
      </td>
      <td className=" px-4 py-2">{role === "user" ? "Usuario" : "Admin"}</td>
      <td className=" px-4 py-2 flex ">
        <button
          onClick={() => handleAccept(email, "approved")}
          className={`${
            status === "approved"
              ? "bg-green-400 hover:bg-green-600"
              : "text-green-500 border-green-500 border-2 hover:text-green-700 hover:border-green-700"
          }  text-white font-bold py-2 px-4 mr-2 rounded-2xl transition duration-500 ease-in-out`}
        >
          {status === "approved" ? "Aceptado" : "Aceptar"}
        </button>
        <button
          onClick={() => handleAccept(email, "denied")}
          className={`${
            status === "approved"
              ? "text-red-300 border-red-300 hover:text-red-500 hover:border-red-500 border-2"
              : "bg-red-500 hover:bg-red-600"
          } text-white font-bold py-2 px-4 mr-2 rounded-2xl transition duration-500 ease-in-out`}
        >
          {status === "approved" ? "Rechazar" : "Rechazado"}
        </button>
        <button
          onClick={() => handleAccept(email, "admin")}
          className={`bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl transition duration-500 ease-in-out`}
        >
          Admin
        </button>
      </td>
    </tr>

    // <div className="flex flex-col justify-center gap-4">
    //   <div className="w-full h-14 flex items-center justify-between overflow-x-auto gap-10 ">
    //     <Image
    //       src={image}
    //       alt={name}
    //       width={50}
    //       height={50}
    //       className="rounded-full"
    //     />
    //     <p className="truncate  w-[200px] sm:w-auto text-center">{name}</p>
    //     <p className="w-[300px] sm:w-auto">{email}</p>
    //     <p className="capitalize w-[200px] sm:w-auto">{status}</p>
    //     <p className="capitalize w-[200px] sm:w-auto">{role}</p>
    //     <div className="flex items-center gap-4">
    //       <div
    //         onClick={() => handleAccept(email, "approved")}
    //         className="w-10 h-10 bg-[#5cb85c] rounded-full flex justify-center items-center cursor-pointer"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-6 h-6"
    //           viewBox="0 0 448 512"
    //         >
    //           <path
    //             fill="#ffffff"
    //             d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
    //           />
    //         </svg>
    //       </div>
    //       <div
    //         onClick={() => handleAccept(email, "denied")}
    //         className="w-10 h-10 bg-[#D0342C] rounded-full flex justify-center items-center cursor-pointer"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-6 h-6"
    //           viewBox="0 0 384 512"
    //         >
    //           <path
    //             fill="#ffffff"
    //             d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
    //           />
    //         </svg>
    //       </div>
    //       <div
    //         onClick={() => handleAccept(email, "admin")}
    //         className="w-10 h-10 bg-[#330072] rounded-full flex justify-center items-center cursor-pointer"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-6 h-6"
    //           viewBox="0 0 448 512"
    //         >
    //           <path
    //             fill="#ffffff"
    //             d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full h-[1px] bg-slate-200"></div>
    // </div>
  );
};

export default UserDashboard;

{
  /* <div className="w-[1080px] flex justify-evenly items-center border-b-1 border-slate-500">
  <p>Nombre</p>
  <p>Email</p>
  <p>Status</p>
</div> */
}
