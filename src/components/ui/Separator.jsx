export const Separator = (props) => {
    const height = props.height || 10;
    return (
        <div style={
            {
                height: `${height}px`
            }
        }></div>
    )
}
