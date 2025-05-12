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

const ReviewItem = ({ name, review, rating }: { name: string; review: string; rating: number }) => {
    const stars = getStarImages(rating);

    return (
        <div className="py-[1.4vw]">
            <div className="bg-[#FFFDF6] rounded-xl p-[3.5vw] text-background">
                <div className="flex flex-row justify-between items-start">
                    <div className="max-sm:text-[3.82vw] text-[clamp(0px,1.91vw,41.3px)] font-bold pb-[0.5vw]">
                        {name}
                    </div>
                    <StarItem stars={stars} />
                </div>
                <div className="max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)]">{review}</div>
            </div>
        </div>
    );
};

export default ReviewItem;
