const CircleItem = ({ text }: { text: string }) => {
    return (
        <div className="flex flex-col items-center space-y-4 flex-grow w-full sm:w-auto">
            <div className="w-[70%] aspect-square sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-72 lg:h-72 bg-yellow-500 rounded-full flex-grow max-w-full"></div>
            <span className="text-center text-[1.4rem] lg:text-[1.7rem] font-medium text-foreground">
                {text}
            </span>
        </div>
    );
};

export default CircleItem;
