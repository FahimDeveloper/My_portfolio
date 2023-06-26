

const Information = ({ title, info }) => {
    return (
        <div className='flex gap-5 text-lg tracking-wide'><p className='font-medium w-32 capitalize'>{title}</p>: {info}</div>
    );
};

export default Information;