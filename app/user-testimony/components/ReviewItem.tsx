import StarItem from "./StarItem";

const getStarImages = (rating: number): string[] => {
    const full = "/user-testimonial-page/star_purple500.png";
    const half = "/user-testimonial-page/star_half.png";
    const empty = "/user-testimonial-page/star_outline.png";

    const stars: string[] = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(full);
        } else if (rating >= i - 0.5) {
            stars.push(half);
        } else {
            stars.push(empty);
        }
    }

    return stars;
};

const ReviewItem = ({
    name,
    review,
    rating,
    date,
    service,
}: {
    name: string;
    review: string;
    rating: number;
    date: Date;
    service?: string;
}) => {
    const stars = getStarImages(rating);

    return (
        <div className="py-[1.4vw]">
            <div className="bg-[#FFFDF6] rounded-xl p-[3.5vw] text-background">
                <div className="flex flex-row justify-between items-center">
                    <div className="max-sm:text-[3.82vw] text-[clamp(0px,1.91vw,41.3px)] font-bold">
                        {name}
                    </div>
                    <div className="flex flex-col">
                        <StarItem stars={stars} />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start">
                    {service ? <div className="">{service}</div> : <div></div>}
                    <div className="flex flex-row items-end">{date.toDateString()}</div>
                </div>
                <div className="max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)]">{review}</div>
            </div>
        </div>
    );
};

export default ReviewItem;
