import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolor vitae, cumque, odio assumenda in quasi
        facilis adipisci molestiae provident incidunt voluptatum quidem autem expedita earum beatae doloremque
        reprehenderit. Sunt!
      </p>

      <ul>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
        <li>
          <Link to="career">Career</Link>
        </li>
      </ul>

      {/* <Routes>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our team</p>} />
        <Route path="career" element={<p>Our vacancies</p>} />
      </Routes> */}

      <Outlet />
    </div>
  );
};

export default About;
