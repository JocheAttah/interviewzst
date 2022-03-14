import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./listing.scss";

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
              <h2>Any content 1</h2>
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
