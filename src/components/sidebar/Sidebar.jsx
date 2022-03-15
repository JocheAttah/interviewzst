import React from "react";
import Logo from "../../assets/svg/logo";
import { sidebarData } from "../../assets/data/jsonData";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import Button from "../button/Button";

const RabbuLogo = () => (
  <div className="logo">
    <div className="logo__container">
      <Logo className="logo__icon" />
    </div>
    <h4 className="logo__title">Rabbu</h4>
  </div>
);

const SidebarItem = ({ icon, title, link }) => {
  return (
    <div
      className={`item item__container ${
        title === "Listings" ? "item__active" : ""
      }`}
    >
      <div
        className={`item__iconContainer ${
          title === "Listings" ? "item__activeIcon" : ""
        }`}
      >
        {icon}
      </div>
      <Link to={link} className={`item__title ${
          title === "Listings" ? "item__activeText" : ""
      }`}>
        {title}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  // const activeItem = sidebarData.findIndex(
  //   (item) => item.route === props.location.pathname
  // );

  return (
    <>
      <div className="sidebar__logocontainer">
        <RabbuLogo />
      </div>
      <div className="sidebar__items">
        {sidebarData.map((item, index) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            title={item.display_name}
            link={item.route}
            // active={index === activeItem}
          />
        ))}
      </div>
      <div className="sidebar__upgrade">
        <div className="sidebar__textcontainer">
          <h5 className="sidebar__title">Upgrade to Pro</h5>
          <p className="sidebar__paragraph">
            Make the most out of Rabbu with Pro.
          </p>
          <div className="sidebar__buttonContainer">
            <Button name="Upgrade" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
