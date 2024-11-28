import { Product } from "../types"

interface ProductCardProps {
    product: Product
}

interface ProductListProps {
    products: Product[]
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='cursor-pointer border-black border-2'>
        <img className='aspect-square' src={product.thumbnail}></img>
        <div className='text-left'>
            <div>{product.name}</div>
            <div>${product.price}</div>
        </div>
    </div>
  )
}

export function ProductList({products} : ProductListProps) {
    return (
      <div className='p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
            products.map((product) => <ProductCard product={product}/>)
        }
      </div>
    )
  }