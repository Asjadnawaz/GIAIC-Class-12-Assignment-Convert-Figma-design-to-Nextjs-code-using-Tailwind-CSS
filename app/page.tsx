// import Image from "next/image";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import OurSponsors from "./Components/ourSponsors";
import WorkManagement from "./Components/WorkManagement";
import YourWork from "./Components/YourWork";

export default function Home() {
	return (
		<div>
			<Navbar />
      		<HeroSection
			title = "Get More Done with whitespace" 
			description = "object management software that enables your teams to collaborate, plan, analyze and manage everyday task"
			btntext = "Try Whitespace free" 
			bgColor = "bg-[#043873]" 
			titleColor = "text-white" 
			descriptionColor = "text-white"
			titleheight = "h-[160px]"
			/>
			
			<WorkManagement/>
			<YourWork/>
			<OurSponsors/>
			<Footer/>
		</div>
	);
}