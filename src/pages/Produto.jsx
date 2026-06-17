import { useParams } from "react-router-dom"

import ecobag from "../assets/ecobag.jpg"
import garrafa from "../assets/garrafa.jpg"
import bambu from "../assets/bambu.jpg"

function Produto() {

    const { id } = useParams()

    const produtos = [

        {
            id: "1",
            nome: "Ecobag",
            preco: 19.90,
            descricao: "Sacola reutilizável beeeem top, bonita e tals.",
            imagem: ecobag
        },

        {
            id: "2",
            nome: "Garrafa Reutilizável",
            preco: 8.90,
            descricao: "Garrafa reutilizável muito boa pra fazer plastico queimado pra botar nas costas.",
            imagem: garrafa
        },

        {
            id: "3",
            nome: "Escova de Bambu",
            preco: 14.90,
            descricao: "Escova produzida com bambu, muito boa pra escovar os cabelo.",
            imagem: bambu
        }

    ]

    const produto = produtos.find((produto) => produto.id === id)

    function adicionarCarrinho() {

        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

        carrinho.push(produto)

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        )

        alert("Produto adicionado ao carrinho!")

    }

    if (!produto) {

        return (

            <section className="p-10">

                <h1 className="text-2xl text-center">
                    Produto não encontrado.
                </h1>

            </section>

        )

    }

    return (

        <section className="p-10">

            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">

                <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full rounded-lg"
                />

                <h1 className="text-2xl font-bold mt-4">
                    {produto.nome}
                </h1>

                <p className="mt-4">
                    {produto.descricao}
                </p>

                <p className="text-green-600 text-xl font-bold mt-4">
                    R$ {produto.preco.toFixed(2).replace(".", ",")}
                </p>

                <button
                    onClick={adicionarCarrinho}
                    className="w-full bg-green-600 text-white p-3 rounded-lg mt-6 hover:bg-green-700 active:scale-95 transition"
                >
                    Adicionar ao Carrinho
                </button>

            </div>

        </section>

    )

}

export default Produto