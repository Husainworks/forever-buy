import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate, backendUrl, token, setToken } = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (currentState === "Sign Up") {
      if (name === "" || email === "" || password === "") {
        toast.error("Please enter valid credentials");
        return;
      }

      try {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.status === 201) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    } else {
      if (email === "" || password === "") {
        toast.error("Please enter valid credentials");
        return;
      }

      try {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    }
  };

  useEffect(() => {
    if (token) {
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="secondary-heading text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" ? (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      ) : (
        ""
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === "Login" ? (
          <>
            <p className="cursor-pointer select-none">Forgot your password?</p>
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer select-none"
            >
              Create Account
            </p>
          </>
        ) : (
          <>
            <p></p>
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer select-none"
            >
              Login
            </p>
          </>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4 ">
        {currentState == "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
