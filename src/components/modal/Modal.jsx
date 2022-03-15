import React from "react";
import "./modal.scss";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GoLocation, GoPrimitiveDot,GoRocket } from "react-icons/go";


const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <TopContent />
        <div className="modal__main">Main</div>
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
            <div>Button</div>
        </div>
    </div>
)