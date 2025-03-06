import Image from "next/image";
import { AboutSectionSchema } from "@/types/about";

const AboutItem: React.FC<AboutSectionSchema> = ({ title, description, source }) => {
    return (
        <section className="pt-[8vh]">
            <div className="mx-auto flex flex-col md:flex-row items-stretch gap-10">
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-5xl font-medium">{title}</h2>
                    <p className="mt-6 text-lg">{description}</p>
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
