import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        bgImage="model-s.jpg"
        darkBtnText="Custom order"
        lightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bgImage="model-y.jpg"
        darkBtnText="Custom order"
        lightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bgImage="model-3.jpg"
        darkBtnText="Custom order"
        lightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        bgImage="model-x.jpg"
        darkBtnText="Custom order"
        lightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        bgImage="solar-panel.jpg"
        darkBtnText="Order Now"
        lightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="
        Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bgImage="solar-roof.jpg"
        darkBtnText="Order Now"
        lightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        bgImage="accessories.jpg"
        darkBtnText="Shop Now"
        lightBtnText="none"
      />
    </div>
  );
}

export default Home;
