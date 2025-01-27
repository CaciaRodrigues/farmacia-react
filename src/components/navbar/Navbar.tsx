function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gray-800 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <h1>Farmácia Raeact</h1>

                    <div className='flex gap-4'>
                        <p>Produtos</p>
                        <p>Categorias</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar