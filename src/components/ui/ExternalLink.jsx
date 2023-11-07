import Image from 'next/image'
export const ExternalLink = (props) => {
    const { name, link, icon, square = false } = props;
    return (
        <div>
            <a target="_blank" href={link} className={`hover:text-white text-gray-300 group px-2 py-1 bg-slate-700 hover:bg-slate-600 flex flex-row justify-between ${square ? 'border-slate-800 border border-collapse' : 'rounded-md'}`}>
                <Image
                    src={icon}
                    alt={name}
                    width={6}
                    height={6}
                    className="h-6 w-6 group-hover:scale-110 transition"
                />
                <p className="text-xl">{name}</p>
            </a>
        </div>
    )
}
