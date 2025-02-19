import PropTypes from 'prop-types'

const Pagination = ({currentPage, prevPage,filteredProducts, itemsPerPage,nextPage}) => {
	return (
		// pagination
			<div className="flex justify-center gap-5 mt-4">
				<button
					onClick={prevPage}
					disabled={currentPage === 1}
					className="px-4 py-2 rounded bg-green-500 text-white"
				>
					Previous
				</button>
				<span className="self-center">{`${currentPage} of ${Math.ceil(filteredProducts.length / itemsPerPage)}`}</span>
				<button
					onClick={nextPage}
					disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
					className="px-4 py-2 rounded bg-green-500 text-white"
				>
					Next
				</button>
			</div> 
	)
};

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	prevPage: PropTypes.func.isRequired,
	filteredProducts: PropTypes.array.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	nextPage: PropTypes.func.isRequired

}

export default Pagination