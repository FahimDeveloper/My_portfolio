
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat quis quam iure, pariatur fuga suscipit eligendi quos numquam distinctio nisi sint alias, ea doloribus veniam dolorum consequatur laudantium hic.</p>
                </div>
                <div className='space-y-2 lg:text-start text-center'>
                    <Information title={`full name`} info={`Tuohidul Islam Fahim`} />
                    <Information title={`date of birth`} info={`12 February 2003`} />
                    <Information title={`nationality`} info={`Bangladesh`} />
                    <Information title={`language`} info={`Bengali`} />
                    <Information title={`language skill`} info={`Comportable with Hindi and English`} />
                    <Information title={`address`} info={`Dhaka, Bangladesh`} />
                    <Information title={`freelance`} info={`Available`} />
                    <div className='flex flex-wrap lg:justify-start justify-center gap-x-5 text-lg tracking-wide'>Available in WhatsApp, Teligram and Skype<a href='tel:+8801613507625'>(+8801613507625)</a></div>
                </div>
                <div className='flex items-center lg:justify-start justify-center gap-5'>
                    <button className='outLineBtn'>download resume</button>
                    <button className='outLineBtn'>download cv</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;