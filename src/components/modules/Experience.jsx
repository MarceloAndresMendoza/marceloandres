import { ExperienceCapsule } from "@components/ui/ExperienceCapsule"
import { SubtitleH3 } from "@components/ui/SubtitleH3"
import hqeduca from "@assets/logos/hqeduca.png"
import sochiede from "@assets/logos/sochiede.png"
import dbf from "@assets/logos/dbf-compo.jpg"
import dwfs from "@assets/logos/dwfs.jpg"

export const Experience = () => {
    return (
        <>
            <div className="bg-slate-800 col-span-1 lg:col-span-2 lg:col-span-2 p-4 rounded-md flex flex-col lg:flex-row gap-4">
                <SubtitleH3
                    title="Experiencia"
                />
                <div className="border-t border-t-slate-700 lg:border-l-slate-700 lg:border-l h-full" />
                <div className="text-xl text-white flex flex-col gap-2">
                    <ExperienceCapsule
                        title="Diseño y administración de sitio web LMS Moodle HQEduca"
                        subtitle='2022 - present'
                        icon={ hqeduca.src }
                        url="htttps://hqeduca.cl"
                    />
                    <ExperienceCapsule
                        title="Diseño y administración de sitio web Sochiede"
                        subtitle='2022 - present'
                        icon={ sochiede.src }
                        url="htttps://sochiede.cl"
                    />
                    <ExperienceCapsule
                        title="DobleFoco founder, sysadmin de servicios AWS y desarrollador web"
                        subtitle='2022 - present'
                        icon={ dbf.src }
                        url="htttps://doblefoco.cl"
                    />
                    <ExperienceCapsule
                        title="Bootcamper Full Stack Developer en UDD"
                        subtitle='2023 - finishing'
                        icon={ dwfs.src }
                    />
                </div>
            </div>
        </>
    )
}
