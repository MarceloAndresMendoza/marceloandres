import { AboutMe } from "./AboutMe"
import { Badges } from "./Badges"
import { ContactBento } from "./ContactBento"
import { Experience } from "./Experience"
import { Me } from "./Me"
import { Projects } from "./Projects"

export const BentoBody = () => {
    return (
        <>
            <div id="bento-grid" className="grid 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                gap-2 
                mb-8
            ">
                <AboutMe />
                <Badges />
                <ContactBento />
                <Experience />
                <Me />
                <Projects />
            </div>
        </>
    )
}
