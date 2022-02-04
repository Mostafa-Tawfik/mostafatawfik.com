import React from 'react'
import { Link } from 'react-router-dom';

export default function Main() {
  return <div>
    <div className="text">
      <h2>Front-End Developer</h2>
      <h3>UX/UI Designer</h3>
      <p>Front-End web developer and UI/UX designer with experience in
          building and designing stunning,
          simple, and fully responsive static and dynamic websites, I
          build with CMS and build from scratch,
          make and modify UI designs to enhance the brand identity.</p>
      <Link to={'/About'} className="more">More about
          me</Link>
      <Link to={'/Portfolio'} className="port">Recent
          projects</Link>
    </div>
  </div>;
}
