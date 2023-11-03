import { SubtitleH3 } from "../ui/SubtitleH3"
import bgImage from "../../assets/backdrops/dark-flow.jpg"

export const AboutMe = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-md shadow-md bg-cover bg-center md:col-span-2 lg:col-span-1"
            style={{
                backgroundImage: `
                    linear-gradient(
                        to bottom,
                        rgba(31, 41, 55, 1),
                        rgba(31, 41, 55, 0.8) 20%
                    ),
                    url(${bgImage})
                `
            }}
        >
            <SubtitleH3
                title="About Me"
                subtitle="I'm a developer with a passion for learning new technologies and building things. I love to deploy my own solutions and search the homemade way to implement things, using the tools that I have at hand. I'm mostly a self taught learner, but I also enjoy to learn from others and share my knowledge."
                titleColor='text-gray-500'
                textColor='text-gray-300'
            />
        </div>
    )
}
