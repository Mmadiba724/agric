import {useEffect, useState} from 'react'
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";

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
        fetch('https://fakestoreapi.com/products')
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

        <div className={`flex flex-col w-full h-full items-stretch justify-between px-4 ${ theme }`} >
            <header className="">
                <Navbar toggleTheme={toggleTheme} />
            </header>
            <main className="h-120 flex items-start justify-center  ">
                <div className="text-center">
                    <h1 className="my-4 text-2xl">Search Your Products</h1>
                    <Form
                        setSearchTerm={setSearchTerm}
                        filteredProducts={filteredProducts}
                        searchTerm={searchTerm}
                        handleSubmit={handleSubmit}
                        searchTriggered={searchTriggered} />
                </div>

            </main>
            <footer className="">
                <Footer />
            </footer>


        </div>


  )
}

export default App
