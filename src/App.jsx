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

    const data = [
        {
            id: 1,
            title: "Serene Lake View",
            img: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
            description: "A peaceful lake reflecting the warm hues of sunset."
        },
        {
            id: 2,
            title: "Mountain Adventure",
            img: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
            description: "Snow-capped mountains calling for an adventurous climb."
        },
        {
            id: 3,
            title: "Urban Lifestyle",
            img: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
            description: "A glimpse into the fast-paced life of a bustling city."
        },
        {
            id: 4,
            title: "Tropical Paradise",
            img: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
            description: "Golden sands and crystal-clear waters await your arrival."
        },
        {
            id: 5,
            title: "Misty Forest",
            img: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
            description: "A foggy forest path that feels straight out of a fairytale."
        },
        {
            id: 6,
            title: "Autumn Road",
            img: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
            description: "A scenic drive through golden autumn leaves."
        }
    ];

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
            <div className={`flex flex-col min-h-screen px-4 overflow-x-hidden  ${theme}`}>

                <header className="w-full flex justify-center">
                    <Navbar toggleTheme={toggleTheme} />
                </header>

                <main className="   my-5 flex-grow md:w-full h-full flex flex-col items-center p-5">
                    <div className=" flex flex-col items-center justify-end h-[200px] w-full">
                        {/* <h1 className="my-4 text-2xl">Search Your Products</h1> */}
                        <Form
                            setSearchTerm={setSearchTerm}
                            searchTerm={searchTerm}
                            handleSubmit={handleSubmit}
                            searchTriggered={searchTriggered}
                            theme={theme}
                        />
                    </div>

                    <div className={` flex flex-col items-center justify-between h-[50%] `}>
                        {/*Cards Trending*/}
                        <div className={`flex flex-col items-center `}>
                            <div className=" w-full" style={{textAlign:'left'}}>
                                <h2 className={`text-3xl font-bold mt-4 mb-0 ml-5 `} >Trending</h2>
                            </div>

                            <div className={` md:w-[90%]  `}>
                                <Card
                                    theme={theme}
                                />
                            </div>
                        </div>

                        {/*Carousel*/}
                        <div className={`rounded-xl sm:w-[90%] w-[70%] flex justify-center mt-4 p-3`}>
                            <Carousel
                                data={data}
                                theme={theme}
                            />
                        </div>
                    </div>



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

    )
}

export default App;
