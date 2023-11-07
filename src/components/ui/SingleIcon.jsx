import Image from 'next/image'

export const SingleIcon = (props) => {
    const { icon, title } = props;
    return (
        <div className="rounded-md shadow-md p-1 w-8 h-8">
            <Image
                src={ icon }
                alt={ title }
                title={ title }
                width={ 32 }
                height={ 32 }
            />
        </div>
    )
}
