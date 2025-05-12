const ReviewItem = ({ name, review }: { name: string; review: string }) => {
    return (
        <div className="bg-flex">
            {name}
            {review}
        </div>
    );
};

export default ReviewItem;
