import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router";
import { Add } from "./pages/Add";
import { List } from "./pages/List";
import { Orders } from "./pages/Orders";
import { Login } from "./pages/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <>
      <div
        className="flex flex-col min-h-screen"
        style={{ "--header-height": "90px" }}
      >
        <ToastContainer />
        {token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Navbar setToken={setToken} />
            <div className="flex flex-1 h-[calc(100vh_-_var(--header-height))]">
              <Sidebar setToken={setToken} />
              <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] mt-8 pb-[1rem] text-gray-600 text-base h-full overflow-y-auto">
                <Routes>
                  <Route
                    path="/add-product"
                    element={<Add setToken={setToken} />}
                  />
                  <Route
                    path="/list-items"
                    element={<List setToken={setToken} />}
                  />
                  <Route
                    path="/all-orders"
                    element={<Orders token={token} />}
                  />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

// h-[calc(100vh_-_var(--header-height))]
