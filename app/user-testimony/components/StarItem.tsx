import Image from "next/image";

const StarItem = ({ stars }: { stars: string[] }) => {
    return (
        <div className="flex flex-row">
            {stars.map((src, index) => (
                <Image key={index} src={src} alt={`star${index + 1}`} width={20} height={20} />
            ))}
        </div>
    );
};

export default StarItem;
