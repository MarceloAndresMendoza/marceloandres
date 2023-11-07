import { ExternalLink } from "@components/ui/ExternalLink"
import { SubtitleH3 } from "@components/ui/SubtitleH3"
import { Phrase } from "@components/ui/Phrase"
import envelope from "@assets/icons/envelope-solid.svg"
import linkedin from "@assets/icons/linkedin.svg"
import bgImage from "@assets/backdrops/dark-fluid.jpg"

export const ContactBento = () => {
  return (
    <>
        <div className="grid grid-cols-1 gap-2">
            <div className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col gap-4 justify-between">
                <SubtitleH3 title="Contact" subtitle="You can contact me through the following channels:"/>
                <div className="flex flex-col gap-4">
                    <ExternalLink
                        name="Email"
                        link="mailto:marcelo@doblefoco.cl"
                        icon={ envelope.src }
                    />
                    <ExternalLink
                        name="LinkedIn"
                        link="https://www.linkedin.com/in/marcelo-mendoza-7a554a245"
                        icon={ linkedin.src }
                    />

                </div>
            </div>
            <div
                className="bg-gray-700 p-4 rounded-md shadow-md min-h-[80px]"
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
                <Phrase
                    text="When creativity meets technology: an unique experience."
                />
            </div>
        </div>
    </>
  )
}
