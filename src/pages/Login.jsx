import React, { useState } from "react";
import Hero from "../components/Hero";
import { FastForward } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [validationErr, setValidationErr] = useState({
    email: {
      notValidate: false,
      msg: "",
    },
    password: {
      notValidate: false,
      msg: "",
    },
  });

  function validatePassword() {
    if (!password.length) {
      setValidationErr((prev) => ({
        ...prev,
        password: { notValidate: true, msg: "Password is required" },
      }));
      return false;
    }
    if (password.length < 8) {
      setValidationErr((prev) => ({
        ...prev,
        password: {
          notValidate: true,
          msg: "Password must have at least 8 characters",
        },
      }));
      return false;
    }

    return true;
  }

  function validateEmail() {
    return true;
  }

  function validatePassword() {
    if (!password.length) {
      setValidationErr((prev) => ({
        ...prev,
        password: { notValidate: true, msg: "Password is required" },
      }));
      return false;
    }
    if (password.length < 8) {
      setValidationErr((prev) => ({
        ...prev,
        password: {
          notValidate: true,
          msg: "Password must have at least 8 characters",
        },
      }));
      return false;
    }

    return true;
  }

  function handleLogin(e) {
    e.preventDefault();

    setValidationErr({
      email: {
        notValidate: false,
        msg: "",
      },
      password: {
        notValidate: false,
        msg: "",
      },
    });

    setIsLoading(true);

    const isFieldValidated = validatePassword() && validateEmail();

    if (!isFieldValidated) {
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Hero>
      <section className="flex justify-center items-center h-full">
        <form
          onSubmit={handleLogin}
          className="max-w-sm w-[95%] p-12 bg-white text-neutral-800 border rounded-2xl"
        >
          <h1 className="text-center mb-5 text-xl font-semibold">Login Form</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              placeholder="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border outline-none px-2 py-1 rounded transition-all duration-500 focus:border-yellow-800"
            />
            {validationErr.email.notValidate && (
              <p className="text-sm text-red-500">{validationErr.email.msg}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="password">Password</label>
            <input
              // required
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border outline-none px-2 py-1 rounded  transition-all duration-500 focus:border-yellow-800"
            />
            {validationErr.password.notValidate && (
              <p className="text-sm text-red-500">
                {validationErr.password.msg}
              </p>
            )}
          </div>
          <div className="flex justify-center gap-1 mt-3">
            <button
              type="submit"
              className="border outline-none px-5 py-1 rounded bg-yellow-700 text-white cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </Hero>
  );
};

export default LoginPage;
