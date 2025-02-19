import {useEffect, useState} from 'react'
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import Results from "./components/Results.jsx";

function App() {

    const [theme, setTheme] = useState('light');
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchTriggered, setSearchTriggered] = useState(false)




    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTriggered(true)
    }


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    },[]);

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
    }, [searchTerm,  products]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    }



    return (

        <div className={`flex flex-col justify-between min-h-screen px-4 md:w-full md:overflow-x-hidden ${ theme }`} >
            <header className="">
                <Navbar toggleTheme={toggleTheme} />
            </header>
            <main className="md:w-full flex flex-col items-center justify-center  ">

                <div className="flex flex-col items-center justify-between w-full">
                    <h1 className="my-4 text-2xl">Search Your Products</h1>
                    <Form
                        setSearchTerm={setSearchTerm}
                        filteredProducts={filteredProducts}
                        searchTerm={searchTerm}
                        handleSubmit={handleSubmit}
                        searchTriggered={searchTriggered} />
                    <Results
                        searchTriggered={searchTriggered}
                        filteredProducts={filteredProducts}

                    />
                </div>


                

            </main>

            <footer className="mt-5">
                <Footer />
            </footer>


        </div>


    )
}

export default App
