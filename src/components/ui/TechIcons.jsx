import { SingleIcon } from './SingleIcon';
import astro from '@assets/icons/astro.png';
import nodejs from '@assets/icons/nodejs.png';
import react from '@assets/icons/react.png';
import tailwind from '@assets/icons/tailwind.png';
import git from '@assets/icons/git.png';
import github from '@assets/icons/github.png';
import ec2 from '@assets/icons/ec2.jpg';
import expressjs from '@assets/icons/expressjs.png';
import mongodb from '@assets/icons/mongodb.png';

export const TechIcons = () => {
    return (
        <div className='flex flex-row gap-1 bg-white rounded-md justify-between md:justify-start'>
            <SingleIcon icon={ astro } title="Astro" />
            <SingleIcon icon={ nodejs } title="Node.js" />
            <SingleIcon icon={ react } title="React" />
            <SingleIcon icon={ tailwind } title="Tailwind CSS" />
            <SingleIcon icon={ git } title="Git" />
            <SingleIcon icon={ github } title="GitHub" />
            <SingleIcon icon={ ec2 } title="AWS EC2" />
            <SingleIcon icon={ expressjs } title="Express.js" />
            <SingleIcon icon={ mongodb } title="MongoDB" />

        </div>
    )
}
