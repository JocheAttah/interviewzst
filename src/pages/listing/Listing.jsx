import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./listing.scss";
import { GoLocation, GoMegaphone } from "react-icons/go";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsDoorOpen } from "react-icons/bs";
import { listingData } from "../../assets/data/jsonData";
import Star from "../../assets/svg/Star";
import { Modal } from "../../components";

const ListItem = (props) => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => (
    setShow(true)
  )

  return (
    <div className="list__container" onClick={handleShowModal}>
      <Modal show={show}  onClose={()=>setShow(false)}/>
      <div className="list__imageContainer">
        <img src={props.image} alt="listing" className="list__image" />
      </div>
      <div className="list__content">
        <div className="list__topContent">
          <div className="list__titleContainer">
            <h3 className="list__title">{props.title}</h3>
            <div className="list__rating">
              {[...Array(props.rating).keys()].map((item) => (
                <span>
                  <Star />
                </span>
              ))}
            </div>
          </div>
          <div className="list__addressContainer">
            <GoLocation />
            <p className="list__address">{props.address}</p>
          </div>
        </div>
        <div className="list__bottomContent">
          <div className="list__itemContainer">
            <div className="list__iconContainer">
              <BsDoorOpen />
            </div>
            <div className="list__textContainer">
              <div className="list__label">Door</div>
              <div className="list__value">{props.door}</div>
            </div>
          </div>
          <div className="list__itemContainer">
            <div className="list__iconContainer">
              <AiOutlineThunderbolt />
            </div>
            <div className="list__textContainer">
              <div className="list__label">Avg. energy usage</div>
              <div className="list__value">{props.aeu}kWh</div>
            </div>
          </div>
          <div className="list__itemContainer">
            <div className="list__iconContainer">
              <GoMegaphone />
            </div>
            <div className="list__textContainer">
              <div className="list__label">Noise level</div>
              <div className="list__value">{props.noise}dB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Listing = () => {
  return (
    <div className="listing">
      <div className="listing__header">
        <h3 className="listing__headerText">Listings</h3>
        <Tabs className="listing__tabs">
          <TabList className="listing__tabList">
            <Tab className="listing__tab">Active</Tab>
            <Tab className="listing__tab">Inactive</Tab>
          </TabList>
          <div className="listing__filtered">
            <TabPanel className="listing__tabPanel">
              {listingData.map((item) => (
                <ListItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  address={item.address}
                  noise={item.noise_level}
                  aeu={item.avg_enegy_usage}
                  door={item.door}
                  onclick={onclick}
                />
              ))}
            </TabPanel>
            <TabPanel className="listing__tabPanel">
              <h2 className="listing__noresult">No result</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Listing;
