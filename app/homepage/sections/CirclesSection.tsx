import CircleItem from "../components/CircleItem";

const CirclesSection = () => {
    return (
        <section className="px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16 lg:px-24 lg:py-20">
            <div className="flex flex-col items-center space-y-8 sm:flex-row sm:justify-evenly sm:space-y-0 sm:space-x-8">
                <CircleItem text="Affordable Pricing" />
                <CircleItem text="Great Customer Service" />
                <CircleItem text="Friendly Staff" />
            </div>
        </section>
    );
};

export default CirclesSection;
