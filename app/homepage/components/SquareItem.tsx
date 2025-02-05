const SquareItem = ({ description, source }: { description: string, source: string }) => {
    return (
        <div className="max-w-xs relative rounded-xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 hover:brightness-105 group ">
            <img
                src={source}
                alt="Air Conditioning"
                className="w-full h-full object-cover"
                
            />
            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2 group-hover:bg-foreground/80 duration-500">
                {description}
            </div>
        </div>
    );
};

export default SquareItem;