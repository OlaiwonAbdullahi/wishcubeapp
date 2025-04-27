import React from "react";
import Menu from "../dashboard/components/menu";
import DashboardNavbar from "../dashboard/components/dashboardNav";
import GiftStore from "./components/giftStore";

const GiftPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <GiftStore />
      <Menu />
    </div>
  );
};

export default GiftPage;
