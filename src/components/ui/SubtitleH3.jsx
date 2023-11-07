export const SubtitleH3 = (props) => {
    const { title, subtitle, titleColor = 'text-gray-600', textColor = 'text-white' } = props;
  return (
    <div className="flex flex-col gap-4 min-w-[200px]">
        <h3 className={`text-3xl lg:text-5xl ${titleColor}`}>{ title }</h3>
        <h4 className={`text-xl lg:text-2xl ${textColor}`}>{ subtitle }</h4>
    </div>
  )
}
