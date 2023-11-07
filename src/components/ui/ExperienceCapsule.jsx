import Image from 'next/image'
export const ExperienceCapsule = (props) => {
    const { title, subtitle, icon, url = null} = props
    return (
        url ?
            <>
                <a href={ url } className="group flex flex-row gap-4" target="_blank">
                    <Image
                        src={ icon }
                        alt={ title }
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-md shadow-md group-hover:scale-105 transition"
                    />
                    <div className="flex flex-col">
                        <p className="text-sm lg:text-base text-gray-300 group-hover:text-white">{ title }</p>
                        <p className="text-sm text-gray-500">{ subtitle }</p>
                    </div>
                </a>
            </> : <>
                <div className=" flex flex-row gap-4">
                    <Image
                        src={ icon }
                        alt={ title }
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-md shadow-md"
                    />
                    <div className="flex flex-col">
                        <p className="text-sm lg:text-base text-gray-300 group-hover:text-white">{ title }</p>
                        <p className="text-sm text-gray-500">{ subtitle }</p>
                    </div>
                </div>
            </>
    )
}
