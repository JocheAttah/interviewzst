import React from "react";
import "./modal.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GoLocation, GoPrimitiveDot, GoRocket } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import Button from "../button/Button";
import { Person } from "../../assets/images";
import { accessCode, ownerCode, cleanerCode } from "../../assets/data/jsonData";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <TopContent />
        <Main />
        <BottomContent />
      </div>
    </div>
  );
};

export default Modal;

function TopContent() {
  return (
    <div className="modal__topContent">
      <div className="modal__navContainer">
        <div className="modal__navs">
          <div className="modal__navIconContainer">
            <BsArrowLeft />
          </div>
          <div className="modal__navIconContainer modal__navIconContainer__right">
            <BsArrowRight />
          </div>
          <p className="modal__navLabel">to navigate</p>
        </div>
        <div className="modal__escContainer">
          <div className="modal__navIconContainer">Esc</div>
          <p className="modal__navLabel">to navigate</p>
        </div>
      </div>
      <div className="modal__textContent">
        <div className="modal__titleContainer">
          <h3 className="modal__title">6 Fremont Street</h3>
          <div className="modal__activeContainer">
            <div className="modal__active">
              <GoPrimitiveDot />
              <span>Active</span>
            </div>
          </div>
        </div>
        <div className="modal__addressContainer">
          <GoLocation />
          <p className="modal__address">6 Fremont Street, Loyalton, Boston</p>
        </div>
      </div>
    </div>
  );
}

const BottomContent = () => (
  <div className="modal__bottomContent">
    <div className="modal__contentContainer">
      <div className="modal__planContainer">
        <div className="modal__iconContainer">
          <GoRocket />
        </div>
        <div className="modal__planTextContainer">
          <h4 className="modal__planHeader">Free plan</h4>
          <p className="modal__planText">$50 billed monthly</p>
        </div>
      </div>
      <Button name="Upgrade to pro" />
    </div>
  </div>
);

const Main = () => (
  <div className="modal__main">
    <div className="modal__profileContainer">
      <div className="modal__profileImageContainer">
        <img
          src={Person}
          alt="Person's Profile"
          className="modal__profileImage"
        />
      </div>
      <div className="modal__profileDetails">
        <h4 className="modal__profileName">Ethan Stone</h4>
        <p className="modal__profileAddress">Warsaw, Poland</p>
      </div>
    </div>
    <div className="modal__check">
      <Check label="Check-in" value="22 Nov 2018" />
      <div className="modal__checkIcon">
        <MdArrowForwardIos />
      </div>
      <Check label="Check-out" value="26 Nov 2018" />
      <Check label="Guest" value="7" />
    </div>
    <div className="modal__switch">
      <Tabs className="modal__tabs">
        <TabList className="modal__tabList">
          <Tab className="modal__tab">Codes</Tab>
          <Tab className="modal__tab">Devices</Tab>
          <Tab className="modal__tab">Bookings</Tab>
        </TabList>
        <div className="modal__filtered">
          <TabPanel className="modal__tabPanel">
            <div className="modal__codes">
              <div className="modal__codetitle">Access code</div>
              <div className="modal__codeCards">
                {accessCode.map((item) => (
                  <Card color="gold" number={item} />
                ))}
              </div>
            </div>
            <div className="modal__codes modal__codes__middle">
              <div className="modal__codetitle">Owner code</div>
              <div className="modal__codeCards">
                {ownerCode.map((item) => (
                  <Card color="purple" number={item} />
                ))}
              </div>
            </div>
            <div className="modal__codes">
              <div className="modal__codetitle">Cleaner code</div>
              <div className="modal__codeCards">
                {cleanerCode.map((item) => (
                  <Card  number={item} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className="modal__tabPanel">
            <h2 className="modal__noresult">No result 2</h2>
          </TabPanel>
          <TabPanel className="modal__tabPanel">
            <h2 className="modal__noresult">No result 3</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  </div>
);

const Check = ({ label, value }) => (
  <div className="check__container">
    <p className="check__label">{label}</p>
    <p className="check__value">{value}</p>
  </div>
);

const Card = ({ number, color }) => (
  <div
    className={`card__container ${
      color === "gold" ? "card__container__gold" : ""
    }
    ${color === "purple" ? " card__container__purple" : ""}`}
  >
    <p>{number}</p>
  </div>
);
