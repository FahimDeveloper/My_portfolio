

const Title = ({ title, mainTitle, subTitle }) => {
    return (
        <div className="text-center uppercase">
            <h2 className="text-5xl font-bold mb-2">{title} <span className="text-primary">{mainTitle}</span></h2>
            <span className="subTitle relative sm:text-base text-sm">{subTitle}</span>
        </div>
    );
};

export default Title;