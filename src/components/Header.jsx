import { Link } from "react-router-dom"

function Header() {
    return (

        <header className="bg-green-600 text-white shadow-md">

            <div className="container mx-auto px-4">

                <nav className="flex items-center justify-between py-4">

                    <h1 className="text-2xl font-bold">
                        EcoMart - Kauan e Edinei
                    </h1>

                    <div className="flex gap-4">

                        <Link
                            to="/"
                            className="hover:text-green-200"
                        >
                            Home
                        </Link>

                        <Link
                            to="/carrinho"
                            className="hover:text-green-200"
                        >
                            Carrinho
                        </Link>

                    </div>

                </nav>

            </div>

        </header>

    )
}

export default Header