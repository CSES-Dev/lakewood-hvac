import { AboutStories } from "@/types/about";

const aboutSections: AboutStories[] = [
    {
        title: "Where It All Began",
        description:
            "Lakewood Heating and Air Conditioning Inc. is a professional HVAC company in Lakewood, CA with 30+ years in the community. We use only the highest quality materials and techniques and are dedicated to providing our clients with superior service and results. We offer a variety of services such as AC repair, heat pump installation, HVAC maintenance, and more. For friendly neighborhood air conditioning technicians, contact us today to schedule your appointment!",
    },
];

export default function AboutPage() {
    return (
        <main className="mt-[17vh]">
            <div className="bg-[#FFFDF6] text-primary">
                <div className="px-[6.11vw] py-[17vh] h-[60vh]">
                    <h1 className="pr-[20vh] text-6xl font-medium">
                        Using the only highest quality materials, we aim to provide our clients the
                        best service and results.
                    </h1>
                </div>
            </div>
        </main>
    );
}
