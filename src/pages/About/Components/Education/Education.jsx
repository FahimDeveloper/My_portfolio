import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
    return (
        <div className="py-10 space-y-7">
            <h2 className="sm:text-4xl text-3xl font-medium">Education</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-10 gap-7 items-start">
                <div className="space-y-5 general">
                    <h3 className="sm:text-2xl text-xl font-medium">General Educaiton</h3>
                    <ul className="relative sm:space-y-7 space-y-5 ml-7">
                        <li className="space-y-1">
                            <span className="flex gap-2 items-center text-sm"><FaCalendarAlt /> 2020-2022</span>
                            <h4 className="sm:text-xl text-lg font-medium">Higher Secondary School Certificate</h4>
                            <p>I have completed my higher secondary school certificate from Govt. Adamjee Nagar MW College, Narayangonj, Bangladesh in 2022</p>
                        </li>
                        <li className="space-y-1">
                            <span className="flex gap-2 items-center text-sm"><FaCalendarAlt /> 2018-2020</span>
                            <h4 className="sm:text-xl text-lg font-medium">Secondary School Certificate</h4>
                            <p>I have completed my secondary school certificate from Barnamala Adarsha High School & College, Dhaka, Bangladesh in 2020</p>
                        </li>
                    </ul>
                </div>
                <div className="space-y-5 programming">
                    <h3 className="sm:text-2xl text-xl font-medium">Programming Educaiton</h3>
                    <ul className="relative sm:space-y-7 space-y-5 ml-7">
                        <li className="space-y-1">
                            <span className="flex gap-2 items-center text-sm"><FaCalendarAlt /> 2022-2023</span>
                            <h4 className="sm:text-xl text-lg font-medium">Mern Stack Development</h4>
                            <p>I have completed mern stack course from Programming Hero. Learned more from freeCodeCanp and other online platforms</p>
                        </li>
                        <li className="space-y-1">
                            <span className="flex gap-2 items-center text-sm"><FaCalendarAlt /> 2021-2022</span>
                            <h4 className="sm:text-xl text-lg font-medium">Frontend Development</h4>
                            <p>Learned frontend development from SoftTech IT. From here my development journey started</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;