import React from 'react'

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>Farmácia React</h2>
                        <p>A escolha certa para você!</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://ik.imagekit.io/caciasrs/Farmacia/logo01.png?updatedAt=1737984589979" 
                            alt="Imagem do Logo da Farmácia" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
