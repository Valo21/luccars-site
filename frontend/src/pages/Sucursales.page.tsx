import React from 'react'

export default function Sucursales() {
  return (
    <>
        Sucursales
        <div>
            <div>
                <h2>Av. Colon 222</h2>
                <p>(4000) San Miguel de Tucumán</p>
                <p>Telefono: </p>
                <p>
                    <strong>Horario de atención</strong>
                    <br/>
                    Lunes a viernes 
                </p>
            </div>
            <iframe
                width='100%'
                height={500}
                scrolling="no" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av.%20Col%C3%B3n%20222,%20T4000KHC%20San%20Miguel%20de%20Tucum%C3%A1n,%20Tucum%C3%A1n+(LUCCARS%20Concesionaria%20&amp;%20Detailing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a>
            </iframe>
        </div>
    </>
  )
}


