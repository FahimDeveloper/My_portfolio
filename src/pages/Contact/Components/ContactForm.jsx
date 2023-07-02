import { useForm } from "@formspree/react";
import useTheme from "../../../hooks/useTheme";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ContactForm = () => {
    const navigate = useNavigate();
    const { isDarkMode } = useTheme();
    const [state, handleSubmit] = useForm('mvojpyrz');
    if (state.succeeded) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message successfully sent',
            showConfirmButton: false,
            timer: 1500
        });
        return navigate('/');
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-5">
                <input type="text" name="name" placeholder="Your name" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
                <input type="email" name="email" placeholder="Your email" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
            </div>
            <input type="text" name="from_subject" placeholder="Message subject" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
            <textarea name="message" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} textarea textarea-bordered w-full text-base rounded-xl`} rows='5' placeholder="Type here your message"></textarea>
            <button type="submit" className="actionBtn">send message</button>
        </form >
    );
};

export default ContactForm;