import React from "react";
import CommonHero from "../components/common/CommonHero";
// Use an appropriate image from your assets
import heroImg from "../assets/Home/PayanaWay/Payana-way.webp";

const PayanaWay = () => {
  return (
    <div className="bg-[#F3EFE9] min-h-screen">
      <CommonHero
        title="PAYANA WAY"
        subtitle="A JOURNEY TO FIND ONESELF"
        bgImage={heroImg}
        breadcrumb="HOME / PAYANA WAY"
      />
      {/* Rest of your Payana Way content goes here */}
    </div>
  );
};

export default PayanaWay;
