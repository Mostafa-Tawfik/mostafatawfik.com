import React from 'react';

export default function Menu(props) {
  return <div>
    <div className='menu'>
      <ul>
        <li>
        <Link
          to={'/'}
          className="menuLi"
          onClick={props.toggle}
          >Home</Link>
        </li>
        <li>
          <Link
          to={'/services'}
          className="menuLi"
          onClick={props.toggle}
          >Services</Link>
        </li>
        <li>
          <Link
          to={'/about'}
          className="menuLi"
          onClick={props.toggle}
          >About Me</Link>
        </li>
        <li>
        <Link
          to={'/portfolio'}
          className="menuLi"
          onClick={props.toggle}
          >Portfolio</Link>
        </li>
      </ul>
    </div>
  </div>;
}
