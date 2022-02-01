import React from 'react';

export default function Header(props) {


  return <div>
    <header>
      <h2 className="logo"><a href="index.html"
              className="home">Mostafa Tawfik</a></h2>

      <div className="header-holder">
          <a href="portfolio.html" className="before"><img
                  src="./images/previous.png" alt="previous page button"
                  width="35px"></img></a>

          <button className={props.isActive ? 'toggle' : 'toggle active'} onClick={props.toggle}></button>

          <a href="about.html" className="next"><img
                  src="./images/next.png" alt="next page button"
                  width="35px"></img></a>
      </div>
    </header>
  </div>;
}
