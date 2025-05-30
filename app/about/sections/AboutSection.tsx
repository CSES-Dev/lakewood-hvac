import AboutItem from "../components/AboutItem";
import { AboutSectionSchema } from "@/types/about";

const aboutSections: AboutSectionSchema[] = [
    {
        title: "Where It All Began",
        description:
            "Lakewood Heating and Air Conditioning Inc. is a professional HVAC company in Lakewood, CA with 30+ years in the community. We use only the highest quality materials and techniques and are dedicated to providing our clients with superior service and results. We offer a variety of services such as AC repair, heat pump installation, HVAC maintenance, and more. For friendly neighborhood air conditioning technicians, contact us today to schedule your appointment!",
        source: "/about.png",
    },
];

export default function AboutSection() {
    return (
        <div className="bg-background text-[#F0F0F0] px-[10vw] md:px-[6.11vw]">
            {aboutSections.map((item, index) => (
                <AboutItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    source={item.source}
                />
            ))}
        </div>
    );
}
