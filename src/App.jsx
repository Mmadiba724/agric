import { useEffect, useState } from "react";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import Results from "./components/Results.jsx";
import Card from "./components/Card.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
    const [theme, setTheme] = useState("light");
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
    }


    const images = [

        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/id/238/200/300',
        'https://picsum.photos/id/239/200/300',
        'https://picsum.photos/id/240/200/300',
    ]

    const itemsPerPage = 6;
    const pagesVisited = pageNumber * itemsPerPage;

    const navigate = useNavigate();

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
            navigate("/results");
        }
    };

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme) {
            setTheme(savedTheme);
        } else {
            const currentHour = new Date().getHours()
            if (currentHour >= 6 && currentHour < 18){
                setTheme("light");
            } else {
                setTheme("dark");
            }
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
            <div className={`flex flex-col min-h-screen px-4 lg:w-full md:w-full md:overflow-x-hidden   ${theme}`}>

                <header className="w-full flex justify-center">
                    <Navbar toggleTheme={toggleTheme} />
                </header>

                <main className="  my-5 flex-grow md:w-full h-auto flex flex-col items-center p-5">
                    <div className="flex flex-col items-center justify-between w-full">
                        {/* <h1 className="my-4 text-2xl">Search Your Products</h1> */}
                        <Form
                            setSearchTerm={setSearchTerm}
                            searchTerm={searchTerm}
                            handleSubmit={handleSubmit}
                            searchTriggered={searchTriggered}
                            theme={theme}
                        />
                    </div>

                    <Card />
                    <Carousel
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                        images={images}
                        nextImage={nextImage}
                        prevImage={prevImage}
                    />

                    <Routes>
                    <Route
                        path="/results"
                        element={
                            <Results
                                filteredProducts={filteredProducts}
                                itemsPerPage={itemsPerPage}
                                pagesVisited={pagesVisited}
                                changePage={changePage}
                                searchTerm={searchTerm}
                                theme={theme}
                            />
                        }
                    />
                </Routes>
                </main>

                <footer className="mt-auto">
                    <Footer />
                </footer>

            </div>

    );
}

export default App;
