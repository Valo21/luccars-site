export interface Model {
    id: string
    name: string
    thumbnail: string
    images: string[]
    category: string
    label: string
    description: string
    details: {
        year: number
        color: string
        transmission: string
        brand: string
        doors: number
    }
}

export interface Product {
    id: string
    name: string
    thumbnail: string
    images: string[]
    category: string
    price: number
}