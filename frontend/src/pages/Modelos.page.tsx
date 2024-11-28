import { useEffect, useState } from "react"
import { Model } from "../types"
import Button from "../components/Button.component"

type PreviewModel = Pick<Model, 'id' | 'thumbnail' | 'name'>

const categories = [
    {
        label: 'SUVs',
        name: 'suvs'
    },
    {
        label: 'Sedan',
        name: 'sedan'
    },
]

async function getModels(): Promise<PreviewModel[]>{
    return [
        {
            id: '234',
            name: 'Volkswagen',
            thumbnail: 'https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/resize_2022_chevrolet_corvette_2022_chevrolet_corvette_a53a644b465-4a9d-9bd5-6ec1a8feb3cd-aodkt6-31211-31212-scaled.jpg'
        },
        {
            id: '234',
            name: 'Volkswagen',
            thumbnail: 'https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/resize_2022_chevrolet_corvette_2022_chevrolet_corvette_a53a644b465-4a9d-9bd5-6ec1a8feb3cd-aodkt6-31211-31212-scaled.jpg'
        },
        {
            id: '234',
            name: 'Volkswagen',
            thumbnail: 'https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/resize_2022_chevrolet_corvette_2022_chevrolet_corvette_a53a644b465-4a9d-9bd5-6ec1a8feb3cd-aodkt6-31211-31212-scaled.jpg'
        },
        {
            id: '234',
            name: 'Volkswagen',
            thumbnail: 'https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/resize_2022_chevrolet_corvette_2022_chevrolet_corvette_a53a644b465-4a9d-9bd5-6ec1a8feb3cd-aodkt6-31211-31212-scaled.jpg'
        }
    ]
}

function ModelsList() {
    const [models, setModels] = useState<PreviewModel[]>([]);

    useEffect(() => {
        getModels()
            .then(models => setModels(models));
    }, []);

    return (
        <>
            <div className='flex space-x-3 m-2'>
                {
                    categories.map((category) => 
                        <Button title={category.label}/>
                    )
                }
            </div>
            <div className='grid gap-5 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6'>
                {
                    models.map((model) => 
                        <div className='flex flex-col shadow-md rounded-md bg-slate-100 overflow-hidden cursor-pointer'>
                            <img alt='Model thumbnail' src={model.thumbnail}></img>
                            <div className='p-2'>
                                <h4>{model.name}</h4>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default function Modelos() {
  return (
    <div>
        <ModelsList/>
    </div>
  )
}
