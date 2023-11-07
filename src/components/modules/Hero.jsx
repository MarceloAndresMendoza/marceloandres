import { TitleH1 } from "@components/ui/TitleH1"
import { TechIcons } from "@components/ui/TechIcons"
import { Separator } from "@components/ui/Separator"
import bgImage from '@assets/backdrops/hero-bg.jpg'

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
                        url(${bgImage.src})
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
