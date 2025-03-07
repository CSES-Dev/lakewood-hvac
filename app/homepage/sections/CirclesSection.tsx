import CircleItem from "../components/CircleItem";

const CirclesSection = () => {
    return (
        <section className="px-4 py-4 sm:px-8 sm:py-8 md:px-16 md:py-16">
            <div className="flex flex-col items-center space-y-8 sm:flex-row sm:justify-evenly sm:space-y-0 sm:space-x-8">
                <CircleItem text="Affordable Pricing" imageUrl="/homePage/circle1.png" />
                <CircleItem text="Great Customer Service" imageUrl="/homePage/circle2.jpeg" />
                <CircleItem text="Friendly Staff" imageUrl="/homePage/circle3.png" />
            </div>
        </section>
    );
};

export default CirclesSection;
