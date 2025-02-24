const CircleItem = ({ text, imageUrl }: { text: string; imageUrl: string }) => {
    console.log(imageUrl);
    return (
        <div className="flex flex-col items-center space-y-4 flex-grow w-full sm:w-auto">
            <div
                style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
                className="w-[70%] object-fill aspect-square sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-72 lg:h-72 bg-yellow-500 rounded-full flex-grow max-w-full"
            ></div>
            <span className="text-center text-[1.4rem] lg:text-[1.7rem] font-medium text-gray-800">
                {text}
            </span>
        </div>
    );
};

export default CircleItem;
