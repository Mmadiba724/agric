import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import Results from "./components/Results.jsx";

function App() {
    const [theme, setTheme] = useState("light");
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 6;
    const pagesVisited = pageNumber * itemsPerPage;

    // function for changing the page used by react-paginate
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    // function for handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTriggered(true);

        if (searchTerm === "") {
            // if the search term is empty, display all products
            setFilteredProducts([]);
            // <p>begin search</p>;
        } else {
            setFilteredProducts(
                products.filter((product) =>
                    product.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                )
            );
        }
    };

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);


    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div
            className={`flex flex-col justify-between min-h-screen px-4 lg:w-full md:w-full md:overflow-x-hidden ${theme}`}
        >
            <header className="w-full flex justify-center">
                <Navbar toggleTheme={toggleTheme} />
            </header>
            <main className="md:w-full flex flex-col items-center justify-center  ">
                <div className="flex flex-col items-center justify-between w-full">
                    <h1 className="my-4 text-2xl">Search Your Products</h1>
                    <Form
                        setSearchTerm={setSearchTerm}
                        searchTerm={searchTerm}
                        handleSubmit={handleSubmit}
                        searchTriggered={searchTriggered}
                    />

                    <Results
                        filteredProducts={filteredProducts}
                        itemsPerPage={itemsPerPage}
                        pagesVisited={pagesVisited}
                        changePage={changePage}
                        searchTerm={searchTerm}
                    />
                </div>
            </main>

            <footer className="mt-5">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
