import { animate, useMotionValue, m, motion } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure"

export default function LogoCarousel() {
  const logos = [
    '/carousel-logos/3m.svg',
    '/carousel-logos/barstool-store.svg',
    '/carousel-logos/budweiser.svg',
    '/carousel-logos/buzzfeed.svg',
    '/carousel-logos/forbes.svg',
    '/carousel-logos/macys.svg',
    '/carousel-logos/mrbeast.svg',
    '/carousel-logos/menshealth.svg'
  ]

  const [ref, {width}] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - logos.length;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    })
  })

  return (
    <div 
      className='relative flex my-10 overflow-hidden 
        before:z-10 before:absolute before:w-40 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent 
        after:z-10 after:right-0 after:absolute after:w-40 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent
      '
    >
      <motion.div 
        className='flex space-x-12'
        ref={ref}
        style={{x: xTranslation}}
      >
          {
            logos.map((src) => 
              <img className='h-12' src={src} alt='External brand logo'></img>
            )
          }
      </motion.div>
    </div>
  )
}
