import React from 'react';

function Menu() {
  return (
    <>
      <div className="side_menu4_overlay"></div>
      <div className="side_menu4_overlay2"></div>
      <div className="side_menu_style4">
        <div className="content">
          <div className="main_links">
            <ul>
              <li>
                <a href="/" className="main_link">
                  Acceuil
                </a>
              </li>
              <li>
                <a href="/innerpages/about" className="main_link">
                  A Propos
                </a>
              </li>
              <li>
                <a href="/innerpages/gallery" className="main_link">
                  Inspiration
                </a>
              </li>
              <li>
                {/* <a href="#" className="main_link">
                  Blogs
                </a> */}
              </li>
              <li>
                <a href="#" className="main_link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="/home1/assets/img/chat_pat2.png"
          alt=""
          className="side_shape"
        />
        <img
          src="/home1/assets/img/chat_pat2.png"
          alt=""
          className="side_shape2"
        />
        <span className="clss">
          <i className="la  la-times"></i>
        </span>
      </div>
    </>
  );
}

export default Menu;
