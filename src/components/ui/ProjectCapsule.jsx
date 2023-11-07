import { ExternalLink } from "./ExternalLink";
import Image from 'next/image';
import githubIcon from '@assets/icons/github.png'
import link from '@assets/icons/link.svg'

export const ProjectCapsule = (props) => {
    const { title, description, icon, github, url } = props;
    return (
        <>
            <div className="flex flex-row gap-4 bg-slate-900 p-4 rounded-xl">
                <div className="flex flex-col rounded-md overflow-hidden shrink-0">
                    <Image
                        src={icon}
                        alt={title}
                        className="w-32 h-32 shadow-md bg-white"
                        width={128}
                        height={128}
                    />
                    {
                        github &&
                        <ExternalLink
                            name="GitHub"
                            link={ github }
                            icon={ githubIcon.src }
                            square
                        />
                    }
                    <ExternalLink
                        name="View"
                        link={ url }
                        icon={ link.src }
                        square
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl">{title}</h4>
                    <p className="text-xl text-slate-500">{description}</p>

                </div>
            </div>
        </>
    )
}
