
import myPhoto from "../../../../assets/fahim.jpg"
import Information from './Information';

const AboutMe = () => {
    return (
        <div className='pt-10 pb-16 grid grid-cols-2 items-center'>
            <div className='my-pic relative z-10 w-3/4 mx-auto'>
                <img src={myPhoto} className='w-full h-full rounded' alt="my picture" />
            </div>
            <div className='space-y-6'>
                <div className='space-y-2'>
                    <h2 className='text-4xl'>I am Tuohidul Islam Fahim</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat quis quam iure, pariatur fuga suscipit eligendi quos numquam distinctio nisi sint alias, ea doloribus veniam dolorum consequatur laudantium hic.</p>
                </div>
                <div className='space-y-2'>
                    <Information title={`full name`} info={`Tuohidul Islam Fahim`} />
                    <Information title={`date of birth`} info={`12 February 2003`} />
                    <Information title={`nationality`} info={`Bangladesh`} />
                    <div className='flex gap-5 text-lg tracking-wide'><p className='font-medium w-32 capitalize'>number</p>: Available in WhatsApp, Teligram and Skype<a href='tel:+8801613507625'>(+8801613507625)</a></div>
                    <Information title={`language`} info={`Bengali`} />
                    <Information title={`language skill`} info={`Comportable with Hindi and English`} />
                    <Information title={`address`} info={`Dhaka, Bangladesh`} />
                    <Information title={`freelance`} info={`Available`} />
                </div>
                <div className='flex items-center gap-5'>
                    <button className='outLineBtn'>download my resume</button>
                    <button className='outLineBtn'>download my cv</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;