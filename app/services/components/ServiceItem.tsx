import Image from "next/image";

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
                    className="justify-center w-[29vw] h-[29vw]  max-w-[555px] max-sm:w-full max-lg:w-[43.5vw] max-lg:h-auto"
                />
            </div>
            <div className="flex w-[66.67] flex-1 flex-col">
                <p className=" pb-[1.67vw] text-[4.51vw] max-sm:text-[9.02vw] max-text-[65px] ax-lg:text-[6.77vw] leading-none">
                    {title}
                </p>
                <p className=" pb-[2.22vw] text-[1.67vw] max-sm:text-[3.34vw]  max-text-[24px] max-lg:text-[2.51vw]">
                    {description}
                </p>
                <div>
                    <button className="text-[1.74vw] bg-primary rounded-[1.39vw] max-text-[25px] py-[1.04vw] px-[1.94vw] max-sm:text-[3.48vw] max-lg:text-[2.61vw]">
                        Schedule Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
