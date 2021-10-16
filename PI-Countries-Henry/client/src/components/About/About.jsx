import React from "react";
import NavBar from "../NavBar/NavBar";

 import s from "./About.module.css";

export default function About() {
  return (
    <body className={s.body}>
      <NavBar/>
      <section className={s.full}>
        <div className={s.fullp}>
          <div className={s.content}>
            <h1>Pamela Pereyra</h1>
          </div>
        </div>
      </section>
      <p className={s.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        eligendi, odio nihil necessitatibus nemo aut ipsam cumque autem,
        quibusdam vero distinctio harum ab voluptas aperiam culpa, laboriosam
        nulla velit dolore. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Deleniti odio ex sequi animi ea eius et eligendi voluptatum magni,
        maiores labore illo voluptates iure modi, aliquid blanditiis accusantium
        magnam iste.
      </p>
      <p className={s.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        eligendi, odio nihil necessitatibus nemo aut ipsam cumque autem,
        quibusdam vero distinctio harum ab voluptas aperiam culpa, laboriosam
        nulla velit dolore. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Deleniti odio ex sequi animi ea eius et eligendi voluptatum magni,
        maiores labore illo voluptates iure modi, aliquid blanditiis accusantium
        magnam iste.
      </p>
      <p className={s.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        eligendi, odio nihil necessitatibus nemo aut ipsam cumque autem,
        quibusdam vero distinctio harum ab voluptas aperiam culpa, laboriosam
        nulla velit dolore. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Deleniti odio ex sequi animi ea eius et eligendi voluptatum magni,
        maiores labore illo voluptates iure modi, aliquid blanditiis accusantium
        magnam iste.
      </p>
      <p className={s.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        eligendi, odio nihil necessitatibus nemo aut ipsam cumque autem,
        quibusdam vero distinctio harum ab voluptas aperiam culpa, laboriosam
        nulla velit dolore. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Deleniti odio ex sequi animi ea eius et eligendi voluptatum magni,
        maiores labore illo voluptates iure modi, aliquid blanditiis accusantium
        magnam iste.
      </p>
    </body>
  );
}
