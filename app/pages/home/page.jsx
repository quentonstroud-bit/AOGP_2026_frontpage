import React from "react";
import Banner from "./HomeComponents/Banner";
import FooterTopSection from "./HomeComponents/FooterTopSection";
import VideoSection from "./HomeComponents/VideoSection";
import PhotoGridSection from "./HomeComponents/PhotoGridSection";
import ExploreSection from "./HomeComponents/ExploreSection";
import TextInfoSection from "./HomeComponents/TextInfoSection";
import LibraryFlowerSection from "./HomeComponents/LibraryFlowerSection";
import UniversalTextSection from "./HomeComponents/UniversalTextSection";
import ArticlesSection from "./HomeComponents/ArticlesSection";
import SuccessStoriesCarousel from "./HomeComponents/SuccessStoriesCarousel";
import VideoGridSection from "./HomeComponents/VideoGridSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExploreSection />
      <TextInfoSection />
      {/* <PhotoGridSection /> */}
      <VideoGridSection/>
      <LibraryFlowerSection />
      {/* <ArticlesSection /> */}
      <VideoSection />
      <SuccessStoriesCarousel/>
      <UniversalTextSection />
      <FooterTopSection />
    </div>
  );
};

export default Home;
