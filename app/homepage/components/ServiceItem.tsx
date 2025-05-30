import Image from "next/image";

const ServiceItem = ({ description, source }: { description: string; source: string }) => {
    return (
        <div className="aspect-square w-40 h-auto sm:w-auto sm:h-52 md:w-64 md:h-auto 2xl:w-[30rem] 2xl:h-auto relative rounded-xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 hover:brightness-105 group">
            <Image src={source} alt="Air Conditioning" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-white/80 text-black max-sm:text-[3.89vw] text-[clamp(0px,1.94vw,42px)]  font-medium p-2 group-hover:bg-foreground/80 duration-500">
                {description}
            </div>
        </div>
    );
};

export default ServiceItem;
