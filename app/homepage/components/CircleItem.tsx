const CircleItem = ({ text, imageUrl }: { text: string; imageUrl: string }) => {
    console.log(imageUrl);
    return (
        <div className="flex flex-col items-center space-y-4 flex-grow w-full sm:w-auto">
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="w-[20rem] aspect-square sm:w-[11rem] sm:h-[11rem] lg:w-[16rem] lg:h-[16rem] bg-yellow-500 rounded-full flex-grow max-w-full  bg-cover bg-center"
            ></div>
            <span className="text-center text-[1.4rem] lg:text-[1.52rem] font-bold text-primary-foreground">
                {text}
            </span>
        </div>
    );
};

export default CircleItem;
