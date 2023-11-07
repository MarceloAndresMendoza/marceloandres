import Image from "next/image"
import me from "@assets/images/me.jpg"

export const Me = () => {
  return (
    <div className="rounded-md overflow-hidden">
        <Image
          src={ me.src }
          alt="My photo"
          className="object-cover object-center"
          width={ 400 }
          height={ 400 }
        />
    </div>
  )
}
