import { TitleH1 } from "../ui/TitleH1"
import bgImage from '../../assets/backdrops/hero-bg.jpg'
import { TechIcons } from "../ui/TechIcons"
import { Separator } from "../ui/Separator"

export const Hero = () => {
    return (
        <>
            <div
                className="bg-black text-white h-64 p-4 flex flex-col justify-between"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            100deg,
                            rgba(0, 0, 0, 0.7),
                            rgba(0, 0, 0, 0)
                        ),
                        url(${bgImage})
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div>
                    <TitleH1
                        title="Marcelo Andrés"
                        subtitle="Full Stack Developer"
                    />
                    <Separator height={10} />
                </div>
                <TechIcons />
            </div>
        </>
    )
}
