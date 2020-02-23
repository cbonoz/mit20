import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import { useRouter } from "./../util/router.js";
import { APP_NAME, APP_DESCRIPTION } from "../util/constants";

import logo from '../assets/chart_home.jpg'

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title={APP_NAME}
        subtitle={`Automated and real time trade spoof detection`}
        buttonText="Learn more"
        image={logo}
        buttonOnClick={() => {
          router.push("/dashboard");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle={APP_DESCRIPTION}
      />
    </>
  );
}

export default IndexPage;
