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
            preco: "R$ 29,90",
            descricao: "Sacola reutilizável, até o Michael Jackson usou!",
            imagem: ecobag
        },
        {
            id: "2",
            nome: "Garrafa Reutilizável",
            preco: "R$ 49,90",
            descricao: "Garrafa ecológica muito boa pra dar aquela refrescada, né seu fresco!?",
            imagem: garrafa
        },
        {
            id: "3",
            nome: "Escova de Bambu",
            preco: "R$ 14,90",
            descricao: "Escova de Bambu, é melhor doq a de plastico.",
            imagem: bambu
        }
    ]

    const produto = produtos.find(
        (produto) => produto.id === id
    )

    return (

        <section className="p-10">

            <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">

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
                    {produto.preco}
                </p>

            </div>

        </section>

    )
}

export default Produto