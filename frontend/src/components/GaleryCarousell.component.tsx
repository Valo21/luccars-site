import { motion, useMotionValue } from "framer-motion"
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface DotsProps {
  imgIndex: number
  setImgIndex: Dispatch<SetStateAction<number>>
}

const images = [
  {
    href: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
    name: 'Volkswagen gold trend',
    label: '1.6N - MODELO 2018 - C/GNC DE 5TA - 80MIL KM'
  },
  {
    href: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
    name: 'Volkswagen gold trend',
    label: '1.6N - MODELO 2018 - C/GNC DE 5TA - 80MIL KM'
  },
  {
    href: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
    name: 'Volkswagen gold trend',
    label: '1.6N - MODELO 2018 - C/GNC DE 5TA - 80MIL KM'
  }
]

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 200,
  damping: 50,
}
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const Dots = ({ imgIndex, setImgIndex }: DotsProps) => {
  return (
    <div className="absolute bottom-4 flex w-full justify-center gap-5 z-20">
      {images.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-4 w-4 rounded-full transition-colors ${
              idx === imgIndex ? "bg-white" : "bg-slate-600"
            }`}
          />
        );
      })}
    </div>
  );
};

export default function GaleryCarousell() {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === images.length - 1) {
            return 0;
          }
          return prev + 1;
        })
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  function onDragEnd() {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  }

  return (
    <div className='relative overflow-hidden bg-black'>
      <motion.div
        className='flex cursor-grab items-center active:cursor-grabbing'
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}

      >
        {
          images.map((image, i) =>
            <motion.div
              key={i}
              className='relative w-full h-full shrink-0'
              transition={SPRING_OPTIONS}
            >
              <div
                className='w-full h-full aspect-video shrink-0 bg-cover bg-center max-h-screen min-h-96'
                style={{
                  backgroundImage: `url(${image.href})`,
                }}
              />
              <div className='absolute bottom-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none'></div>
              <div
                className='absolute left-5 bottom-10 font-opti text-brand-green uppercase z-20 text-md sm:text-xl md:text-2xl xl:text-3xl'
              >
                <div>{image.name}</div>
                <div className='border-brand-green w-full border-[1px]'></div>
                <div>{image.label}</div>
              </div>
            </motion.div>
          )
        }
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex}/>
    </div>
  )
}
