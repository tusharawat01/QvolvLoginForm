import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "./Button";
import Input from "./Input";
import { toast } from "react-toastify";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    console.log("submitted", data);
    setError("");
    reset();
    toast(`User login with ${data.email}`);
  };

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <div className="m-10 w-full max-w-lg bg-blue-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px] text-center text-2xl font-bold text-green-500">
            Qvolv
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <a
            to="#"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </a>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be valid",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
