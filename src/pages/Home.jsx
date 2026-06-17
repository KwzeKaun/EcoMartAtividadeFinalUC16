import { Link } from "react-router-dom"

import ecobag from "../assets/ecobag.jpg"
import garrafa from "../assets/garrafa.jpg"
import bambu from "../assets/bambu.jpg"

function Home() {

    return (

        <section className="p-10">

            <h1 className="text-3xl font-bold text-center mb-8">
                Bem-vindo ao EcoMart
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <Link to="/produto/1">

                    <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition cursor-pointer">

                        <img
                            src={ecobag}
                            alt="Ecobag"
                            className="w-full rounded-lg"
                        />

                        <h2 className="text-center mt-4 font-bold">
                            Ecobag
                        </h2>

                        <p className="text-center text-green-600 mt-2">
                            R$ 19,90
                        </p>

                    </div>

                </Link>

                <Link to="/produto/2">

                    <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition cursor-pointer">

                        <img
                            src={garrafa}
                            alt="Garrafa Reutilizável"
                            className="w-full rounded-lg"
                        />

                        <h2 className="text-center mt-4 font-bold">
                            Garrafa Reutilizável
                        </h2>

                        <p className="text-center text-green-600 mt-2">
                            R$ 8,90
                        </p>

                    </div>

                </Link>

                <Link to="/produto/3">

                    <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition cursor-pointer">

                        <img
                            src={bambu}
                            alt="Escova de Bambu"
                            className="w-full rounded-lg"
                        />

                        <h2 className="text-center mt-4 font-bold">
                            Escova de Bambu
                        </h2>

                        <p className="text-center text-green-600 mt-2">
                            R$ 14,90
                        </p>

                    </div>

                </Link>

            </div>

        </section>

    )

}

export default Home