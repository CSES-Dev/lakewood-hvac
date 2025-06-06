import Image from "next/image";
import Link from "next/link";

const ServiceItem = ({
    title,
    description,
    source,
}: {
    title: string;
    description: string;
    source: string;
}) => {
    return (
        <div className="text-[#F0F0F0] py-[2.5vw] font-sans flex max-lg:flex-col w-full max-lg:items-center max-container gap-[3.4vw]">
            <div className=" max-sm:w-full lg:w-[33.33] flex-none flex rounded-[1.74vw]">
                <Image
                    src={source}
                    alt={title}
                    width={424}
                    height={424}
                    className="justify-center w-[clamp(0px, 43.5vw, 555px)] w-[29vw] h-[29vw] max-lg:h-auto max-sm:w-full"
                />
            </div>
            <div className="flex w-[66.67] flex-1 flex-col">
                <p className="pb-[1.67vw] max-sm:text-[9.02vw] text-[clamp(0px,4.51vw,97.5px)] leading-none">
                    {title}
                </p>
                <p className="pb-[2.22vw] max-sm:text-[3.34vw] text-[clamp(0px,1.67vw,36px)]">
                    {description}
                </p>
                <div>
                    <Link href="/schedule">
                        <button className="bg-primary rounded-[1.39vw] text-[clamp(0px,1.74vw,37.5px)] py-[1.04vw] px-[1.94vw] max-sm:text-[3.48vw]">
                            Schedule Today
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
