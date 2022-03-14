import React from "react";
import Logo from "../../assets/svg/logo";
import { sidebarData } from "../../assets/data/jsonData";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const RabbuLogo = () => (
  <div className="logo">
    <div className="logo__container">
      <Logo className="logo__icon" />
    </div>
    <h4 className="logo__title">Rabbu</h4>
  </div>
);

const SidebarItem = ({ icon, title, link }) => (
  <div className="item item__container">
    <div className="item__iconContainer">{icon}</div>
    <Link to={link} className="item__title">
      {title}
    </Link>
  </div>
);

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__logocontainer">
        <RabbuLogo />
      </div>
      <div className="sidebar__items">
        {sidebarData.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            title={item.display_name}
            link={item.route}
          />
        ))}
      </div>
      <div className="sidebar__upgrade">
        <div className="sidebar__textcontainer">
          <h5>Upgrade to Pro</h5>
          <p className="sidebar__paragraph">
            Make the most out of Rabbu with Pro.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;