interface ParallaxGalleryProps {
    images: string[]
}

export default function ParallaxGallery({ images }: ParallaxGalleryProps) {
  return (
    <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {
            images.map((src) =>
                <div className='relative overflow-hidden rounded-md'>
                    <div className='absolute w-full h-full bg-black opacity-30'></div>
                    <img src={src}></img>
                </div>
            )
        }
    </div>
  )
}
