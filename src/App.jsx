import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((e) => console.log("App :: useEffect :: error :: ", e))
      .finally(() => {
        setLoading(false);
      });
    return !loading ? () => {} : null;
  }, []);
  return (
    <>
     
      <div className="min-h-screen bg-gray-400 flex flex-wrap justify-between">
        <div className="w-full block">
        
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
