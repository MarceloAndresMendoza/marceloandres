import me from "../../assets/images/me.jpg"

export const Me = () => {
  return (
    <div className="rounded-md overflow-hidden">
        <img src={ me } alt="My photo" className="object-cover object-center"/>
    </div>
  )
}
