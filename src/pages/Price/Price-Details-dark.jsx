/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import DarkTheme from "../../layouts/Dark";
import PageHeader2 from "../../components/Page-header2/page-header2";

import NavbarMobileApp from "../../components/Navbar-mobile-app/navbar-mobile-app";
import Navbar from "../../components/Navbar/navbar";
import Intro6 from "../../components/Intro6/intro6";
import Clients3 from "../../components/Clients3/clients3";
import Services7 from "../../components/Services7/services7";
import Services8 from "../../components/Services8/services8";
import Screenshots from "../../components/Screenshots/screenshots";
import Progress from "../../components/Progress/progress";
import VideoWithTeam from "../../components/Video-with-team/video-with-team";
import PricePackages from "../../components/Price-packages/price-packages";
import PricePackages2 from "../../components/Price-packages2/price-packages2";

import Testimonials from "../../components/Testimonials/testimonials";
import DownloadApp from "../../components/Download-app/download-app";
import Blogs2 from "../../components/Blogs2/blogs2";
import MobileAppPricingPlanDark from "./pricing-plan-dark";
import Footer2 from "../../components/footer2/footer2";


const MobileAppDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageHeader2
          title="Pricing Package"
          links={[
            // { id: 1, name: "Home", url: "/" },
            // { id: 2, name: "Pricing Package", url: "/mobile-app/pricing-plan-dark" },
          ]}
        />

      <DarkTheme mobileappstyle>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      {/* <NavbarMobileApp nr={navbarRef} /> */}
      <Navbar nr={navbarRef} />

        <Intro6 />
        {/* <Clients3 /> */}
        {/* <Services7 /> */}
        {/* <Services8 /> */}
        {/* <Screenshots /> */}
        <Progress />
        {/* <VideoWithTeam /> */}
        {/* <PricePackages /> */}
        <PricePackages2 />
        {/* <MobileAppPricingPlanDark/> */}
        {/* <Testimonials /> */}
        {/* <DownloadApp /> */}
        {/* <Blogs2 /> */}
        {/* <Footer2 /> */}
        <Footer2 />

      </DarkTheme>
    </>
  );
};

export default MobileAppDark;
