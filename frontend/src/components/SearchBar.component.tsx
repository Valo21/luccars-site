
export default function SearchBar() {
  return (
    <div className='flex justify-between m-2 border-black border-2 rounded-md bg-white overflow-hidden'>
        <input 
            className='bg-transparent p-2 border-0 outline-none' 
            type='text' 
            placeholder='Fiat'
        />
        <button
            className='bg-brand-green px-4 font-semibold'
        >
            Buscar
        </button>
    </div>
  )
}
