import Image from "next/image";
import { AboutSectionSchema } from "@/types/about";

const AboutItem: React.FC<AboutSectionSchema> = ({ title, description, source }) => {
    return (
        <section className="pt-[8vh]">
            <div className="mx-auto flex flex-col md:flex-row items-stretch gap-10">
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="max-sm:text-[6.94vw] text-[clamp(0px,3.47vw,75px)] font-medium">
                        {title}
                    </h2>
                    <p className="mt-6 max-sm:text-[3.33vw] text-[clamp(0px,1.67vw,36px)]">
                        {description}
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <div className="bg-foreground rounded-3xl w-full flex-1 overflow-hidden">
                        <Image
                            src={source}
                            alt={title}
                            width={500}
                            height={200}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutItem;
