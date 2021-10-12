import React from "react";
import s from "./NavBar.module.css";
import { Link } from "react-router-dom";
// import {logo} from "../../assets/pam.png"

export default function NavBar() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.ul}>
        <Link to={"/home"}>
        <div className={s.logo}>P.</div>
        </Link>
          <li className={s.li}>
            <Link className= {s.link} to={"/"}>
            <h4 className={s.h4}>TravelUs</h4>
            </Link>
          </li>
          <li className={s.li}>
            <Link to={"/home"} className= {s.link}>
              <h4 className={s.h4}>Home</h4>
            </Link>
          </li>
          <li className={s.li}>
            <Link to={"/activity"} className= {s.link}>
              <h4 className={s.h4}>Create Activity</h4>
            </Link>
          </li>
          <li className={s.li}>
            <Link to={"/about"} className= {s.link}>
              <h4 className={s.h4}>About us</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
