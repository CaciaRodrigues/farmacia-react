import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gray-800 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Farmácia React</Link>

                    <div className='flex gap-4'>
                    <Link to='' className="hover:text-gray-400">Produtos</Link>
                    <Link to='/categorias' className="hover:text-gray-400">Temas</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar