const SquareItem = ({ description, source }: { description: string, source: string }) => {
    return (
        <div className="max-w-xs relative rounded-lg overflow-hidden">
            <img
                src={source}
                alt="Air Conditioning"
                className="w-full h-full object-cover"
                
            />
            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                {description}
            </div>
        </div>
    );
};

export default SquareItem;