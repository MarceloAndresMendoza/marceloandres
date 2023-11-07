import universe from '@assets/backdrops/universe.jpg'
export const Footer = () => {
  return (
    <>
        <div
            className="bg-slate-950 w-full min-h-[300px] bg-cover bg-center
        flex flex-col justify-end items-center"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(12, 17, 23, 1),
                        rgba(12, 17, 23, 0.5) 20%,
                        rgba(12, 17, 23, 1)
                    ),
                    url('${universe.src}')
                `,
            }}
        >
            <p className='text-slate-400 bg-black/50 px-8 pt-4 pb-10 rounded-md'>
                2023 - Marcelo Andrés
            </p>
        </div>
    </>
  )
}
