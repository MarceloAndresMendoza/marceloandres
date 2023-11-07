import { SingleBadge } from "@components/ui/SingleBadge"
import { SubtitleH3 } from "@components/ui/SubtitleH3"

export const Badges = () => {
  return (
    <div className="bg-slate-800 rounded-md
      flex flex-row gap-4 flex-wrap p-4 overflow-y-auto 
    ">
      <SubtitleH3 title="Badges" subtitle="Here are some of the badges I've earned." />
      <div className="flex flex-row flex-wrap gap-4 overflow-y-auto justify-center">
        <SingleBadge
          title="Moodle Admin Basics"
          image='https://sunbeam.rweb.cl/api/v1/files?filename=1698037170142.jpg'
          width= { 512 }
          height= { 512 }
          link='https://moodle.academy/pluginfile.php/1/tool_certificate/issues/1658788412/7258879075MM.pdf'
        />
        <SingleBadge
          title='Moodle Teaching Basics'
          image='https://sunbeam.rweb.cl/api/v1/files?filename=1698037525582.jpg'
          width= { 512 }
          height= { 512 }
          link='https://moodle.academy/pluginfile.php/1/tool_certificate/issues/1658899191/2556813691MM.pdf'
        />
        <SingleBadge
          title='HTML / CSS landing page'
          image='https://sunbeam.rweb.cl/api/v1/files?filename=1698037679379.jpg'
          width= { 512 }
          height= { 512 }
          link='https://www.credly.com/badges/cb9f49d9-6569-4249-9100-20304aa0e756/'
        />
        <SingleBadge
          title='CRUD / DOM Web App'
          image='https://sunbeam.rweb.cl/api/v1/files?filename=1698037776219.jpg'
          width= { 512 }
          height= { 512 }
          link='https://www.credly.com/badges/b31d7254-6f1e-43c2-89e2-f16af3878fc2/'
        />
        <SingleBadge
          title='API / ReactJS Dashboard'
          image='https://sunbeam.rweb.cl/api/v1/files?filename=1698037833601.jpg'
          width= { 512 }
          height= { 512 }
          link='https://www.credly.com/badges/95c5aa62-bb99-4e5a-9171-2980cd7e5cf2'
        />
        <SingleBadge
          title='ReactJS / Firebase restaurant app'
          image='https://sunbeam.rweb.cl/api/v1/files?filename=1698037881292.jpg'
          width= { 512 }
          height= { 512 }
          link='https://www.credly.com/badges/09593fe0-87cf-4030-8fd7-1e30bb7d40b8'
        />
      </div>
    </div>
  )
}
