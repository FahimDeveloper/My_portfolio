import Title from "../../components/Title";
import Lottie from "lottie-react";
import ToggleTheme from "../../components/ToggleTheme";
import useTheme from "../../hooks/useTheme";
import ContactDetails from "./Components/ContactDetails";
import ContactForm from "./Components/ContactForm";
import animation from '../../assets/envolape.json'


const Contact = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'} min-h-screen`}>
            <div className="lg:w-4/5 sm:w-10/12 w-11/12 py-16 mx-auto">
                <ToggleTheme />
                <Title title={`get in`} mainTitle={`touch`} subTitle={`I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.`} />
                <div>
                    <Lottie animationData={animation} loop={true} className="sm:w-96 w-80 sm:h-96 h-80 mx-auto" />
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <ContactDetails />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;