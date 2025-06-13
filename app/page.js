"use client"
import "./globals.css";
import HorizontalDivider from "@/components/basis/horizontalDivider";
import NavBar from "@/components/basis/navBar";
import EductionSection from "@/components/layouts/education";
import Footer from "@/components/layouts/footer";
import HeroSection from "@/components/layouts/heroSection";
import ProjectSection from "@/components/layouts/projectSection";
import StackExperiencePlaylistSection from "@/components/layouts/stackExperiencePlaylistSection";


export default function Home() {
  return (
    <>
    <div className="relative bg-black" > 
      <div className="body-wrapper max-sm:rounded-b-[80px]">
        <div className="body-wrapper-content">
          <NavBar />
          <HeroSection />
          <EductionSection />
          <ProjectSection/>
          <StackExperiencePlaylistSection />
        </div>
      </div>
      <Footer/>
    </div>
    
    </>
  );
}
