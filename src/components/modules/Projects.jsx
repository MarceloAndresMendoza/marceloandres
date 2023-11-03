import { ProjectCapsule } from "../ui/ProjectCapsule"
import { SubtitleH3 } from "../ui/SubtitleH3"
import { WebsitesList } from "../ui/WebsitesList"
import astromart from '../../assets/logos/astromart-logo.png'
import calc from '../../assets/icons/calc.png'
import weather from '../../assets/icons/weather.png'
import restorapp from '../../assets/icons/restorapp.jpg'
import dbf from '../../assets/logos/dbf-compo.jpg'
import cc from '../../assets/logos/cc.jpg'
import lula from '../../assets/logos/lula.png'

export const Projects = () => {
  return (
    <>
        <div className="bg-slate-800 col-span-1 md:col-span-2 lg:col-span-3 p-4 rounded-md flex flex-col lg:flex-row gap-4">
                <SubtitleH3
                    title="Portfolio"
                />
                <div className="border-t border-t-slate-700 lg:border-l-slate-700 lg:border-l" />
                <div className="text-xl text-white flex flex-col gap-4">
                    <ProjectCapsule
                        title="Landing pure HTML / CSS website"
                        description="Using HTML and CSS, I created a landing page for an space agency, called AstroMart. I've used custom CSS, with little help of external resources, as a deep exercise of Frontend design capabilities on HTML 5 and cascading style."
                        icon={ astromart }
                        github="https://github.com/MarceloAndresMendoza/landing_venta"
                        url="https://marceloandresmendoza.github.io/landing_venta/"
                    />
                    <ProjectCapsule
                        title="JavaScript CRUD with localStorage"
                        description="A quick project budget creator made on HTML5, CSS and JavaScript, using your browser's localStorage to save the data. It's a simple CRUD, wich i use a lot, it is even on production on my website!"
                        icon={ calc }
                        github="https://github.com/MarceloAndresMendoza/CRUD"
                        url="https://doblefoco.cl/util/presupuestos/"
                    />
                    <ProjectCapsule
                        title="API Weather Report with React and Chart.js"
                        description="This webapp is intended to be a lightweight and quick way to view today's forecast for your location in a dashboard format, using chart.js framework to display at glance the projected data without distractions."
                        icon={ weather }
                        github="https://github.com/MarceloAndresMendoza/weather-report"
                        url="https://marceloandresmendoza.github.io/weather-report/"
                    />
                    <ProjectCapsule
                        title="A Vite + React Restaurant Site with a Simple Booking System: restorapp."
                        description="Developed using Vite and React, this comprehensive restaurant website project features a user-friendly booking system. It reflects my full-stack journey, creating an interactive and visually appealing website. The project, centered around React and Firebase as DB SAAS, aims to immerse visitors in the restaurant's offerings while simplifying the booking process."
                        icon={ restorapp }
                        github="https://github.com/MarceloAndresMendoza/restorapp"
                        url="https://marceloandresmendoza.github.io/restorapp/"
                    />
                    <ProjectCapsule
                        title="An Astro + React static website, hosted myself on an AWS EC2 server"
                        description="This website, currently on production, is a static website created for my business. It's a React app, hosted on an AWS EC2 instance, with a custom domain and SSL certificate. It has custom styles, created with TailwindCSS, with its contact form working with AWS SES SMTP using a custom made NodeMailer working server on the same EC2 instance. It's a frontend website with a simple mailer backend, with a lot of moving parts, and it's my first realworld case project on production."
                        icon={ dbf }
                        url="https://doblefoco.cl"
                    />
                    <WebsitesList
                        websites={[
                            {
                                title: "Centro Coronel",
                                subtitle: "A landing page for a parking lot, i've also built the parking control system based on Rukovoditel Software. Is on production right now.",
                                icon: cc,
                                github: "",
                                link: "https://centrocoronel.cl"
                            },{
                              title: "El Turno de Lula",
                              subtitle: "A WordPress based blog for my wife, in wich she writes stories. I've made the theme from scratch.",
                              icon: lula,
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
