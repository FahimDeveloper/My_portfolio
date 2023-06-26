

const Information = ({ title, info }) => {
    return (
        <div className='text-lg tracking-wide'><span className='font-medium capitalize'>{title}</span> : {info}</div>
    );
};

export default Information;