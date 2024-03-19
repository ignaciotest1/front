"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, fetchUsersAsync } from "../../redux/slices/userSlice";
import { User } from "@/types";
import UserDashboard from "@/components/UserDashboard";
import ProtectedRoute from "../routeprotect";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <ProtectedRoute requiresAuth={true}>
      <section className="overflow-x-auto scroll-custom bg-white p-5 rounded-3xl">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Perfil</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Rol</th>
              <th className="px-4 py-2">Aceptar / Rechazar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserDashboard key={user._id!} user={user} />
            ))}
          </tbody>
        </table>
      </section>
    </ProtectedRoute>
  );
};

export default Dashboard;

// <section className="flex w-full min-h-screen text-black flex-col items-center justify-between py-24 px-10 lg:px-0">
//   <div className="rounded-[20px] w-full h-screen bg-white p-6">
//     {users ? (
//       users.map((user: User) => (
//         <UserDashboard
//           key={user.userId}
//           image={user.image}
//           status={user.status}
//           name={user.name}
//           email={user.email}
//           role={user.role}
//         />
//       ))
//     ) : (
//       <p>Loading</p>
//     )}
//   </div>
// </section>
