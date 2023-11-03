import { AboutMe } from "../components/modules/AboutMe"
import { BentoBody } from "../components/modules/BentoBody"
import { Footer } from "../components/modules/Footer"
import { Hero } from "../components/modules/Hero"

export const Landing = () => {
    return (
        <>
            <header className="">
                <div className="">
                    <Hero />
                </div>
            </header>
            <main className="p-4 text-white">
                <BentoBody />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
