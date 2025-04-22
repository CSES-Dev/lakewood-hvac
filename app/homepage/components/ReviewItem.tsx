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
            <div className="max-sm:text-[2.78vw] text-[clamp(0px,1.39vw,30px)] flex-grow overflow-hidden text-ellipsis line-clamp-4">{text}</div>
            <hr className="my-2" />
            <div className="max-sm:text-[2.5vw] text-[clamp(0px,1.25vw,27px)] font-semibold">{author}</div>
        </div>
    );
};

export default ReviewItem;
