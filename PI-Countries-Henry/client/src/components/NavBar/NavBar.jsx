import React from "react";
import s from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg"

export default function NavBar() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.ul}>
          <li className={s.li}>
            <Link className= {s.link} to={"/"}>
            <h4 className={s.h4}>TRAVELWORLD</h4>
            </Link>
          </li>
          <li className={s.li}>
            <Link to={"/home"} className= {s.link}>
              <h4 className={s.h4}>HOME</h4>
            </Link>
          </li>
          <li className={s.li}>
            <Link to={"/activity"} className= {s.link}>
              <h4 className={s.h4}>CREATE</h4>
            </Link>
          </li>
          <li className={s.li}>
            <Link to={"/about"} className= {s.link}>
              <h4 className={s.h4}>ABOUT ME</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
