import PropTypes from "prop-types";

const Form = ({ searchTerm, setSearchTerm, handleSubmit,theme }) => {
    return (
        <div className={"  w-full "}>
            <form
                className={"flex justify-center mb-3 gap-3 w-full "}
                onSubmit={handleSubmit}
            >
                <input
                    type={"text"}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={"Search ..."}
                    className={
                        `w-full sm:w-1/2 md:w-1/3 lg:w-1/4  rounded-full p-2 px-5 border border-gray-200 ${theme === 'dark'
                            ? 'bg-black-900 text-white'
                            : 'bg-white text-black'
                        }`
                    }
                />

                <button
                    className={`border px-4 rounded-xl hover:cursor-pointer hover:border-green-500 hover:shadow-2xl hover:border-2 ${theme === 'dark'
                        ? 'bg-green-100 text-black  '
                        : 'text-black bg-green-50 border-green-300 '
                    } `}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

Form.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    theme:PropTypes.string.isRequired,
};

export default Form;
