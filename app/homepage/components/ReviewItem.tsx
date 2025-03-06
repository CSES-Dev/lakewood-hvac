const ReviewItem = ({
    text,
    author,
    animation,
}: {
    text: string;
    author: string;
    animation: string;
}) => {
    return (
        <div
            className={`flex flex-col m-4 p-4 lg:w-full bg-primary-foreground text-black rounded-lg min-h-40 shadow-md transform ${animation} transition-all duration-300 hover:scale-105 ease-in-out`}
        >
            <div className="flex-grow overflow-hidden text-ellipsis line-clamp-4">{text}</div>
            <hr className="my-2" />
            <div className="font-semibold">{author}</div>
        </div>
    );
};

export default ReviewItem;
