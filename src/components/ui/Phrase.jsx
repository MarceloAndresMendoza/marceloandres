export const Phrase = (props) => {
    const { text } = props;
  return (
    <div className="flex justify-center items-center text-2xl h-full bg-black/40 p-4 text-center text-gray-200">
        <h4>{ text }</h4>
    </div>
  )
}
