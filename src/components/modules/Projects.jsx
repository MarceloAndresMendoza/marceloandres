import { ProjectCapsule } from "@components/ui/ProjectCapsule"
import { SubtitleH3 } from "@components/ui/SubtitleH3"
import { WebsitesList } from "@components/ui/WebsitesList"
import hqeduca from '@assets/logos/hqeduca.png'
import sochiede from '@assets/logos/sochiede.png'
import astromart from '@assets/logos/astromart-logo.png'
import calc from '@assets/icons/calc.png'
import weather from '@assets/icons/weather.png'
import restorapp from '@assets/icons/restorapp.jpg'
import bootcart from '@assets/icons/bootcart.png'
import dbf from '@assets/logos/dbf-compo.jpg'
import bgImage from '@assets/backdrops/hero-bg.jpg'
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
                        title="Un sitio web educativo en Wordpress + Moodle v4 + OsTicket"
                        description="Este proyecto es un sitio web educativo, que consta de un sitio web de Wordpress, un sistema de gestión de aprendizaje Moodle y un sistema de tickets OsTicket. El sitio web de Wordpress es un tema original, creado por mí. El sitio web de Wordpress está conectado a un sistema de gestión de aprendizaje Moodle, que es un sistema de gestión de aprendizaje de código abierto, que se utiliza para alojar cursos en línea. He personalizado la apariencia interna de la plataforma para que sea única mediante CSS. El sitio web de Wordpress también está conectado a un sistema de tickets OsTicket, que es un sistema de tickets de código abierto, que se utiliza para gestionar las solicitudes de soporte de los usuarios, incluso intercepta los correos entrantes y los asigna a un ticket de soporte. El sitio está alojado en un hosting tradicional con cPanel, se encuentra actualmente en producción y yo gestiono los cursos y administro el servicio."
                        icon={hqeduca.src}
                        url="https://hqeduca.cl"
                    />
                    <ProjectCapsule
                        title="Un sitio web basado en Wordpress para una sociedad científica"
                        description="Este proyecto es un sitio web basado en Wordpress, con un tema personalizado, creado por mí. El sitio web está alojado en un hosting tradicional con cPanel, se encuentra actualmente en producción."
                        icon={sochiede.src}
                        url="https://sochiede.cl"
                    />
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
                        title="Una aplicación fullstack con react + express + mongodb"
                        description="Este proyecto es una tienda en línea, con un backend de NodeJS y Express, con una base de datos MongoDB y un frontend en React. Es un proyecto de aprendizaje, que me enseñó mucho sobre cómo funciona un backend, y cómo se conecta con un frontend. Además, utilizo TailwindCSS para los estilos, y está conectado a un endpoint de desarrollo de Transbank. Está alojado en mi servidor AWS EC2, configurado a través de un proxy inverso Apache2. Además, utiliza la API SunBeam, que es un microservicio que creé para alojar y servir archivos estáticos, que funciona en otro servidor EC2 (Puedes verificarlo inspeccionando la ruta de las imágenes del proyecto)."
                        icon={bootcart.src}
                        github="https://github.com/MarceloAndresMendoza/bootcart"
                        url="https://bootcart.marceloandres.cl"
                    />
                    <ProjectCapsule
                        title="Un sitio web estático de Astro + React, alojado por mí mismo en un servidor AWS EC2"
                        description="Este sitio web, actualmente en producción, es un sitio web estático creado para mi empresa. Es una aplicación hecha en React/NodeJS, alojada en una instancia AWS EC2, con un dominio personalizado y un certificado SSL. Tiene estilos personalizados, creados con TailwindCSS, con su formulario de contacto funcionando con AWS SES SMTP utilizando un servidor NodeMailer hecho a medida que funciona en la misma instancia EC2. Es un sitio web frontend con un backend de correo simple, con muchas partes móviles, y es mi primer proyecto de caso real en producción."
                        icon={dbf.src}
                        url="https://doblefoco.cl"
                    />
                    <ProjectCapsule
                        title="Este sitio web: mi portafolio"
                        description="Hecho con NextJS 14, utilizando el poder del SSR y la optimización automática del contenido multimedia, exploro las tecnologías más modernas para desarrollo. Contiene contenido estático, en donde muestro mis habilidades y proyectos, y contenido dinámico, que consiste en una simple caja de comentarios. Esta almacena los datos en una base de datos MongoDB alojado en mi servidor EC2 de recursos, y tiene una función que modera de forma autónoma el comentario enviado antes de su publicación, mediante el uso de la API de OpenAI. Se encuentra alojado en mi servidor EC2 de producción, con un dominio personalizado y un certificado SSL. También utiliza un proxy inverso Apache2 para redirigir el tráfico al puerto de la aplicación NextJS."
                        icon={bgImage.src}
                        github="https://github.com/MarceloAndresMendoza/marceloandres"
                        url="https://marceloandres.cl"
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
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}
