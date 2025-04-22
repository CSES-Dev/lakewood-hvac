const CircleItem = ({ text, imageUrl }: { text: string; imageUrl: string }) => {
    return (
        <div className="flex flex-col items-center space-y-4 flex-grow w-full sm:w-auto">
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="w-[20rem] aspect-square sm:w-[11rem] sm:h-[11rem] 2xl:w-[30rem] 2xl:h-[30rem] lg:w-[16rem] lg:h-[16rem] bg-yellow-500 rounded-full flex-grow max-w-full bg-cover bg-center"
            ></div>
            <span className="text-center max-sm:text-[4.86vw] text-[clamp(0px,2.43vw,52.5px)]  text-primary-foreground">
                {text}
            </span>
        </div>
    );
};

export default CircleItem;
