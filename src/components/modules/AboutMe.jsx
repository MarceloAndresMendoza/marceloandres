import { SubtitleH3 } from "@components/ui/SubtitleH3"
import bgImage from "@assets/backdrops/dark-flow.jpg"

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
                    url(${bgImage.src})
                `
            }}
        >
            <SubtitleH3
                title="Sobre mí"
                subtitle="Soy un desarrollador con pasión por aprender nuevas tecnologías y construir cosas. Me encanta desplegar mis propias soluciones y buscar la forma casera de implementar cosas, usando las herramientas que tengo a mano. Soy principalmente un autodidacta, pero también disfruto aprender de otros y compartir mi conocimiento."
                titleColor='text-gray-500'
                textColor='text-gray-300'
            />
        </div>
    )
}
