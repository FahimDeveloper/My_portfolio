import useTheme from "../../../hooks/useTheme";


const ContactForm = () => {
    const { isDarkMode } = useTheme();
    return (
        <form className="space-y-3">
            <div className="flex gap-5">
                <input type="text" placeholder="Your name" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
                <input type="text" placeholder="Your email" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
            </div>
            <input type="text" placeholder="Message subject" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
            <textarea className={`${isDarkMode ? 'bg-dark' : 'bg-white'} textarea textarea-bordered w-full text-base rounded-xl`} rows='5' placeholder="Type here your message"></textarea>
            <button type="submit" className="actionBtn">send message</button>
        </form >
    );
};

export default ContactForm;