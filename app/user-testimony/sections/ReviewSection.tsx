import ReviewItem from "../components/ReviewItem";

const squareData = [
    {
        title: "Air Conditioning",
        description:
            "At Lakewood Heating and Air Conditioning Inc., we pride ourselves on providing top-notch air conditioning services to ensure that our clients enjoy a comfortable living environment. Our team of skilled technicians is well-equipped to handle installations, maintenance, and repairs for a variety of air conditioning systems. No matter the size or complexity of your cooling needs, you can trust us to deliver efficient, cost-effective, and timely solutions that keep your home cool and comfortable throughout the year.",
        source: "/ac.png",
    },
    {
        title: "Heating",
        description:
            "Lakewood Heating and Air Conditioning Inc. is your reliable partner for all your heating needs. Our experienced technicians are committed to delivering exceptional heating services, from installations to repairs and maintenance for a wide range of heating systems. Our goal is to provide you with energy-efficient, safe, and comfortable heating solutions to keep your home cozy during the colder months while ensuring superior customer satisfaction. Give us a call today to learn more!",
        source: "/heating.png",
    },
    {
        title: "Thermostats",
        description:
            "Our thermostat services include professional installation, maintenance, and repair of a variety of thermostat types and models. Our experts work with you to identify the ideal thermostat solution for your home, ensuring optimal temperature regulation and energy management, ultimately enhancing your comfort and reducing energy costs. Contact us to get started!",
        source: "/thermostats.png",
    },
    {
        title: "Heat Pumps",
        description:
            "Lakewood Heating and Air Conditioning Inc. offers comprehensive heat pump installation services, designed to provide you with an eco-friendly, energy-efficient, and cost-effective alternative to traditional heating and cooling systems. Our skilled technicians are proficient in installing a wide range of heat pump models, ensuring seamless integration into your existing HVAC system. Trust us to help you transition to a greener, more comfortable living space while reducing your energy consumption and costs.",
        source: "/heat_pumps.png",
    },
];

const ReviewSection = () => {
    return (
        <div>
            {squareData.map((data, index) => (
                <ReviewItem key={index} name={data.title} review={data.description} />
            ))}
        </div>
    );
};

export default ReviewSection;
