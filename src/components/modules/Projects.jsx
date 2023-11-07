import { ProjectCapsule } from "@components/ui/ProjectCapsule"
import { SubtitleH3 } from "@components/ui/SubtitleH3"
import { WebsitesList } from "@components/ui/WebsitesList"
import astromart from '@assets/logos/astromart-logo.png'
import calc from '@assets/icons/calc.png'
import weather from '@assets/icons/weather.png'
import restorapp from '@assets/icons/restorapp.jpg'
import dbf from '@assets/logos/dbf-compo.jpg'
import cc from '@assets/logos/cc.jpg'
import lula from '@assets/logos/lula.png'

export const Projects = () => {
    return (
        <>
            <div className="bg-slate-800 col-span-1 md:col-span-2 lg:col-span-3 p-4 rounded-md flex flex-col lg:flex-row gap-4">
                <SubtitleH3
                    title="Portafolio"
                />
                <div className="border-t border-t-slate-700 lg:border-l-slate-700 lg:border-l" />
                <div className="text-xl text-white flex flex-col gap-4">
                    <ProjectCapsule
                        title="Landing sitio web en HTML y CSS puro"
                        description="Usando HTML y CSS, creé una landing page para una agencia espacial, llamada AstroMart. Usé CSS personalizado, con poca ayuda de recursos externos, como un ejercicio profundo de las capacidades de diseño Frontend en HTML 5 y CSS."
                        icon={astromart.src}
                        github="https://github.com/MarceloAndresMendoza/landing_venta"
                        url="https://marceloandresmendoza.github.io/landing_venta/"
                    />
                    <ProjectCapsule
                        title="CRUD en JavaScript con localStorage"
                        description="Un creador de presupuestos rápido hecho en HTML5, CSS y JavaScript, usando localStorage para guardar los datos. Es un CRUD simple, que uso mucho, ¡incluso está en producción en mi sitio web!"
                        icon={calc.src}
                        github="https://github.com/MarceloAndresMendoza/CRUD"
                        url="https://doblefoco.cl/util/presupuestos/"
                    />
                    <ProjectCapsule
                        title="Recogida de datos a una API del clima con React y Chart.js"
                        description="Esta aplicación web está destinada a ser una forma rápida y ligera de ver el pronóstico del día para su ubicación en un formato de panel, utilizando el marco chart.js para mostrar de un vistazo los datos proyectados sin distracciones."
                        icon={weather.src}
                        github="https://github.com/MarceloAndresMendoza/weather-report"
                        url="https://marceloandresmendoza.github.io/weather-report/"
                    />
                    <ProjectCapsule
                        title="Un sitio web de restaurante Vite + React con un sistema de reservas simple: restorapp."
                        description="Utilizando Vite y React, este prototipo de proyecto de sitio web para un restaurante cuenta con un sistema de reservas fácil de usar. Refleja mi aprendizaje full-stack, creando un sitio web interactivo y visualmente atractivo. El proyecto, centrado en React y Firebase como DB SAAS, tiene como objetivo sumergir a los visitantes en las ofertas del restaurante mientras simplifica el proceso de reserva."
                        icon={restorapp.src}
                        github="https://github.com/MarceloAndresMendoza/restorapp"
                        url="https://marceloandresmendoza.github.io/restorapp/"
                    />
                    <ProjectCapsule
                        title="Un sitio web estático de Astro + React, alojado por mí mismo en un servidor AWS EC2"
                        description="Este sitio web, actualmente en producción, es un sitio web estático creado para mi empresa. Es una aplicación hecha en React/NodeJS, alojada en una instancia AWS EC2, con un dominio personalizado y un certificado SSL. Tiene estilos personalizados, creados con TailwindCSS, con su formulario de contacto funcionando con AWS SES SMTP utilizando un servidor NodeMailer hecho a medida que funciona en la misma instancia EC2. Es un sitio web frontend con un backend de correo simple, con muchas partes móviles, y es mi primer proyecto de caso real en producción."
                        icon={dbf.src}
                        url="https://doblefoco.cl"
                    />
                    <WebsitesList
                        websites={[
                            {
                                title: "Centro Coronel",
                                subtitle: "Una landing page para un estacionamiento, también he construido el sistema de control de estacionamiento basado en el software Rukovoditel. Está en producción en este momento.",
                                icon: cc.src,
                                github: "",
                                link: "https://centrocoronel.cl"
                            }, {
                                title: "El Turno de Lula",
                                subtitle: "Un blog basado en WordPress para mi esposa, en el que escribe historias. He hecho el tema desde cero.",
                                icon: lula.src,
                                github: "",
                                link: "https://elturnodelula.cl"
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    )
}
