"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, fetchUsersAsync } from "../../redux/slices/userSlice";
import { User } from "@/types";
import UserDashboard from "@/components/UserDashboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <section className="flex w-full min-h-screen text-black flex-col items-center justify-between py-24 px-10 lg:px-0">
      <div className="rounded-[20px] w-full h-screen bg-white p-6">
        {users ? (
          users.map((user: User) => (
            <UserDashboard
              key={user.userId}
              image={user.image}
              status={user.status}
              name={user.name}
              email={user.email}
              role={user.role}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
