import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./listing.scss";

import { listingData } from "../../assets/data/jsonData";

const ListItem = (props) => (
  <div className="list__container">
    <div className="list__imageContainer">
      <img src={props.image} alt="listing" className="list__image" />
    </div>
    <div className="list__content">
      <div className="list__topContent">
        <div className="list__titleContainer">
          <h3 className="list__title">{props.title}</h3>
          {/* {props.rating.map(())} */}
        </div>
        <div className="list__addressContainer">
          {/* icon */}
          <p className="list__address">{props.address}</p>
        </div>
      </div>
      <div className="list__bottomContent">//continue here</div>
    </div>
  </div>
);

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
                  noise={item.noise}
                  aeu={item.avg_enegy_usage}
                  doors={item.door}
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
