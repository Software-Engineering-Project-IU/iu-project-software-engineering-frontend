/*
 *	Navbar.js
 *
 *	Ersteller:		    Kevin Krazius
 *	Erstellungsdatum:	03-03-2024
 *	Info/Notizen:		Implementierung einer Navbar-Komponente
 *
 *	Editiert von:		Kevin Krazius
 *	Editiert am:		03-15-2024
 *	Info/Notizen:		Logout integriert
 *
 */

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Components/AuthProvider/AuthProvider";
import "../../scss/main.scss";
import WelcomeBanner from "../../Components/Banner/WelcomeBanner";
import Button from "../../Components/Buttons/Button";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo-section">
        <Link className="logo" to="/">
          IU-Quiz-App
        </Link>
      </div>
      <div className="navbar-right-section">
        <WelcomeBanner
          username={user?.user_name ?? "username"}
          isLoggedIn={user !== undefined}
        />
        <ul className="navRight">
          {!user ? (
            <>
              <li>
                <Button text={"Login"} onClick={() => navigate("/login")} />
              </li>
              <li>
                <Button
                  text={"Sign up"}
                  onClick={() => navigate("/register")}
                />
              </li>
            </>
          ) : (
            <li>
              <Button text={"Logout"} onClick={logoutUser} />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
