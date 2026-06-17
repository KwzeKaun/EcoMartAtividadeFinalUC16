import { useEffect, useState } from "react"

function Carrinho() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {

        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

        setProdutos(carrinho)

    }, [])

    function removerProduto(index) {

        const novoCarrinho = [...produtos]

        novoCarrinho.splice(index, 1)

        setProdutos(novoCarrinho)

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novoCarrinho)
        )

    }

    const total = produtos.reduce((soma, produto) => {

        return soma + produto.preco

    }, 0)

    return (

        <section className="p-10">

            <h1 className="text-3xl font-bold text-center mb-8">
                Carrinho
            </h1>

            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">

                {produtos.length === 0 ? (

                    <p className="text-center">
                        Seu carrinho está vazio.
                    </p>

                ) : (

                    produtos.map((produto, index) => (

                        <div
                            key={index}
                            className="border-b pb-4 mb-4"
                        >

                            <h2 className="font-bold">
                                {produto.nome}
                            </h2>

                            <p className="text-gray-600">
                                {produto.descricao}
                            </p>

                            <p className="text-green-600 font-bold mt-2">
                                R$ {produto.preco.toFixed(2).replace(".", ",")}
                            </p>

                            <button
                                onClick={() => removerProduto(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600 active:scale-95 transition"
                            >
                                Remover
                            </button>

                        </div>

                    ))

                )}

                {produtos.length > 0 && (

                    <>

                        <h2 className="text-xl font-bold text-right mt-6">
                            Total: R$ {total.toFixed(2).replace(".", ",")}
                        </h2>

                        <button
                            className="w-full bg-green-600 text-white p-3 rounded-lg mt-6 hover:bg-green-700 active:scale-95 transition"
                        >
                            Finalizar Compra
                        </button>

                    </>

                )}

            </div>

        </section>

    )

}

export default Carrinho