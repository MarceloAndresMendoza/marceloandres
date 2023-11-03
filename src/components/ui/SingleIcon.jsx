export const SingleIcon = (props) => {
    const { icon, title } = props;
    return (
        <div className="rounded-md shadow-md p-1 w-8 h-8">
            <img
                src={ icon }
                alt={ title }
                title={ title }
            />
        </div>
    )
}
