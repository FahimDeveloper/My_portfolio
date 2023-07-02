import { SlEnvolope } from "react-icons/sl";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const ContactDetails = () => {
    return (
        <div className="space-y-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3 className="sm:text-3xl text-2xl font-bold">DON'T BE SHY !</h3>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="space-y-3">
                <div className="grid grid-cols-12 items-center gap-5">
                    <FaMapLocationDot className="text-3xl sm:col-span-1 col-span-2 text-primary" />
                    <div className="sm:col-span-11 col-span-10">
                        <span className="text-sm">Address point</span>
                        <p className="">Mohammad Bag, Merajnagar, Kadamtali, Dhaka-1362, Bangladesh</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center gap-5">
                    <SlEnvolope className="text-3xl sm:col-span-1 col-span-2 text-primary" />
                    <div className="sm:col-span-11 col-span-10">
                        <span className="text-sm">Email</span>
                        <p className="">fahimthedev@gmail.com</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center gap-5">
                    <FiPhoneCall className="text-3xl sm:col-span-1 col-span-2 text-primary" />
                    <div className="sm:col-span-11 col-span-10">
                        <span className="text-sm">Any time</span>
                        <p className="">Any time call or message me on WhatsApp, Teligram, and Skype <a href="tel:+8801613507625">+8801613507625</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;