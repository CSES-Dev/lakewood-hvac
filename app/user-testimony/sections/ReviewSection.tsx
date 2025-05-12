import ReviewItem from "../components/ReviewItem";

const squareData = [
    {
        name: "Floyd Miles",
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 3.5,
    },
    {
        name: "Ronald Richards",
        review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 4.0,
    },
    {
        name: "Savannah Nguyen",
        review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 3.5,
    },
    {
        name: "Bennie Smith",
        review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 4.0,
    },
];

const ReviewSection = () => {
    return (
        <div>
            {squareData.map((data, index) => (
                <ReviewItem
                    key={index}
                    name={data.name}
                    review={data.review}
                    rating={data.rating}
                />
            ))}
        </div>
    );
};

export default ReviewSection;
