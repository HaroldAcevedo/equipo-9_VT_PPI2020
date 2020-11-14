import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Cards from "./components/Cards";
import { dataPricing } from "../src/dataPricing";
function Pricing() {
  return (
    <>
      <Header
        companyName="Tu casa el mercado"
        buttonName="Resgitrate"
        navBar={[
          {
            name: "Facebook",
            url: "https://www.facebook.com"
          }
        ]}
      />
      <Description
        title="Precios"
        description="Los mejores precios de la web"
      />
      <Cards data={dataPricing} />
    </>
  );
}

export default Pricing;
