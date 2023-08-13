import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import myPhoto from "../../../../assets/fahim.jpg"
import Information from './Information';

const AboutMe = () => {
    return (
        <div className='pt-10 sm:pb-16 pb-10 grid lg:grid-cols-2 xl:gap-0 gap-10 items-center'>
            <div data-aos="fade-right" data-aos-duration="800" className='my-pic relative z-10 xl:w-3/4 lg:w-full w-3/4 mx-auto'>
                <img src={myPhoto} className='w-full h-full rounded' alt="my picture" />
            </div>
            <div data-aos="fade-left" data-aos-duration="800" className='sm:space-y-6 space-y-4'>
                <div className='space-y-2 lg:text-start text-center'>
                    <h2 className='sm:text-4xl text-3xl font-medium'>I am Tuohidul Islam Fahim</h2>
                    <p>Experienced frontend developer skilled in MERN stack development, with a focus on React.js. Proficient in MongoDB, Express.js, and Node.js, I build robust and scalable web applications. Collaborative team player dedicated to delivering exceptional user experiences. Explore my portfolio for MERN stack projects.</p>
                </div>
                <div className='space-y-2 lg:text-start text-center'>
                    <Information title={`full name`} info={`Tuohidul Islam Fahim`} />
                    <Information title={`date of birth`} info={`12 February 2003`} />
                    <Information title={`nationality`} info={`Bangladesh`} />
                    <Information title={`language`} info={`Bengali`} />
                    <Information title={`language skill`} info={`Comportable with Hindi and English`} />
                    <Information title={`address`} info={`Dhaka, Bangladesh`} />
                    <Information title={`freelance`} info={`Available`} />
                </div>
                <div className="space-y-2">
                    <h3 className="font-medium text-2xl sm:text-start text-center">Hey i am available in</h3>
                    <div className='flex flex-wrap lg:justify-start justify-center gap-x-2 text-lg tracking-wide'>WhatsApp, Teligram and Skype<a href='tel:+8801613507625'>(+8801613507625)</a></div>
                    <div className="flex gap-5 sm:justify-start justify-center">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fahim.chowdhury.509994" title="Facebook">
                            <FaFacebook className="text-3xl text-blue-500 bg-white rounded-full" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/fahimthedev" title="Twitter">
                            <FaTwitter className='text-3xl text-sky-500' />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fahimthedev/" title="Linkedin">
                            <FaLinkedin className="text-3xl text-[#0A66C2] bg-white rounded" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/FahimDeveloper" title="Github">
                            <FaGithub className="text-3xl text-stone-950 bg-white rounded-full" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;