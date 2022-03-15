import React from "react";
import "./modal.scss";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GoLocation, GoPrimitiveDot } from "react-icons/go";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <TopContent />
        <div className="modal__main">Main</div>
        <div className="modal__bottomContent">Bootom</div>
      </div>
    </div>
  );
};

export default Modal;

function TopContent({}) {
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
              <GoPrimitiveDot/>
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
