const ScheduleService = () => {
    return (
        <div className="bg-foreground w-full h-80 rounded-t-[8rem] p-8 flex flex-row items-center justify-around">
            <h1 className="text-primary-foreground text-xl sm:text-3xl md:text-5xl">
                Schedule Your Service Today!
            </h1>
            <button className="bg-white text-black text-xl sm:text-3xl md:text-5xl rounded-lg px-4 py-2 transform transition ease-in-out duration-300 hover:scale-110">
                Schedule Service
            </button>
        </div>
    );
};

export default ScheduleService;

