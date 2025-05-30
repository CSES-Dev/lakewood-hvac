import Link from "next/link";

const ScheduleService = () => {
    return (
        <div className="bg-foreground w-full h-80 p-8 flex flex-row items-center justify-around">
            <h1 className="text-primary-foreground text-xl sm:text-3xl md:text-5xl">
                Schedule Your Service Today!
            </h1>
            <Link href="/contact">
                <button className="bg-white text-black text-lg sm:text-2xl md:text-4xl rounded-lg px-4 py-2 transform transition ease-in-out duration-300 hover:scale-110">
                    Schedule Service
                </button>
            </Link>
        </div>
    );
};

export default ScheduleService;
