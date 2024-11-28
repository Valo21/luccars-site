import { useEffect, useState } from "react";
import GaleryCarousell from "../components/GaleryCarousell.component";
import LogoCarousel from "../components/LogoCarousel.component";
import SearchBar from "../components/SearchBar.component";
import Section from "../components/Section.component";
import ParallaxGallery from "../components/ParallaxGallery.component";
import { ProductList } from "../components/Product.component";

export default function Home() {
  const [gallery, setGallery] = useState<string[]>([]); 

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=4&limit=20')
      .then(res => res.json())
      .then(data => setGallery(data.map((img) => img.download_url)));
  })

  return (
    <>
      <div className='h-fit'>
        <GaleryCarousell/>
        <div className='my-10 flex flex-col items-center responsive'>
          <h2>Buscá tu auto</h2>
          <div className='w-full max-w-[400px]'>
          <SearchBar/>
          </div>
        </div>
      </div>
      <div className='my-10 text-center responsive min-h-screen'>
        <h2>Conocé nuestros productos</h2>
        <ProductList products={[
          {
            id: '23',
            thumbnail: 'https://dreamsdetailing.com.ar/img/Productos/amber-foam-lata.jpg',
            name: "Amber Foam Lata",
            images: [],
            category: "",
            price: 2344
          },
          {
            id: '23',
            thumbnail: 'https://dreamsdetailing.com.ar/img/Productos/amber-foam-lata.jpg',
            name: "Amber Foam Lata",
            images: [],
            category: "",
            price: 2344
          },
          {
            id: '23',
            thumbnail: 'https://dreamsdetailing.com.ar/img/Productos/amber-foam-lata.jpg',
            name: "Amber Foam Lata",
            images: [],
            category: "",
            price: 2344
          }
        ]}/>
      </div>
      <Section responsive={false}>
        <LogoCarousel/>
      </Section>
      <div className='py-10 min-h-screen bg-black text-white'>
        <div className='responsive'>
          <h2 className='uppercase text-brand-green text-center'>Servicios</h2>
          <div className='flex flex-col py-6 gap-2'>
            <div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta nostrum distinctio, ab autem fugit enim iure atque natus ex.</p>
              </div>
            </div>
            <div>
              <div>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta nostrum distinctio, ab autem fugit enim iure atque natus ex.</p>
              </div>
            </div>
          </div>
          <ParallaxGallery images={gallery}/>
        </div>
      </div>
    </>
  )
}
