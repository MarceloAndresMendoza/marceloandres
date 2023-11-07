export const TitleH1 = (props) => {
    const { title, subtitle } = props;
  return (
    <>
        <h1 className="text-5xl md:text-7xl">{ title }</h1>
        <h2 className="text-3xl md:text-3xl">{ subtitle }</h2>
    </>
  )
}
