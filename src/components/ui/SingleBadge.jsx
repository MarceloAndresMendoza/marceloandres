export const SingleBadge = (props) => {
    const { title, image, link } = props;
    return (
        <>
            <>
                <a
                    className={` text-white h-32 w-32 py-4 px-2 text-3xl
                        relative rounded-md overflow-hidden group hover:scale-105 transition-all duration-500`}
                    href={link}
                    target='_blank'
                >
                    <img
                        src={image}
                        alt={title}
                        className=' absolute top-0 left-0 z-10 object-cover object-center'
                    />
                    <div className=" group-hover:hidden">
                        <div
                            className="absolute top-0 left-0 z-20 w-full h-full"
                            style={{
                                background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))'
                            }}
                        ></div>
                        <div className={`text-white text-sm z-30 absolute bottom-0 left-0 p-1 text-center w-full`}>{title}</div>
                    </div>
                </a>
            </>
        </>
    )
}
