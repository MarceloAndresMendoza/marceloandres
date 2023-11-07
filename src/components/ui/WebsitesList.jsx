import { ExternalLink } from "./ExternalLink";
import { SubtitleH3 } from "./SubtitleH3";
import Image from 'next/image';
import githubIcon from '@assets/icons/github.png'
import link from '@assets/icons/link.svg'

export const WebsitesList = (props) => {
    const { websites } = props;
  return (
    <div>
        <SubtitleH3
            title="Other websites made by me"
        />
        <div className="flex flex-row gap-4 bg-slate-900 p-4 rounded-md">
            { websites.map ((website, index) => {
                return (
                    <div className="flex flex-col gap-4 bg-slate-900 p-4 rounded-md flex-1" key={index}>
                        <div className="flex flex-col rounded-md overflow-hidden shrink-0">
                            <Image
                                src={website.icon}
                                alt={website.title}
                                className="w-full object-cover h-32 shadow-md bg-white"
                                width={400}
                                height={400}
                            />
                            {
                                website.github &&
                                <ExternalLink
                                    name="GitHub"
                                    link={ website.github }
                                    icon={ githubIcon.src }
                                    square
                                />
                            }
                            <ExternalLink
                                name="View"
                                link={ website.url }
                                icon={ link.src }
                                square
                            />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-2xl w-full">{website.title}</h4>
                            <p className="text-lg text-slate-500">{website.subtitle}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
