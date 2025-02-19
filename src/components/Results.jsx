import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Results = ({filteredProducts,pagesVisited,itemsPerPage,changePage,searchTerm}) => {

    // if no products are found
    

if(filteredProducts.length === 0 && searchTerm === '') {
        return (
            <div className="flex justify-center w-full mt-5">
                <h2 className="text-2xl black-red-500"><i>Begin Search</i></h2>
            </div>
        )
}else if(filteredProducts.length === 0){
        return (
            <div className={'flex justify-center w-full mt-5'}>
                <h2 className={'text-2xl black-red-500'}><i>No products found</i></h2>
            </div>
        )
    }


	const displayproducts = filteredProducts.slice(pagesVisited, pagesVisited + itemsPerPage).map((product) => {
        return (
            <li key={product.id} className={'flex justify-between items-center md:w-64 md:items-center sm:w-full w-full px-3 rounded-xl border-0 shadow-2xl h-40 sm:h-48 sm:items-center sm:justify-between md:h-52 lg:h-60  bg-white hover:shadow-2xl hover:border-green-500 hover:border-2 hover:cursor-pointer'}>
								<div className="text-left px-2 sm:w-1/4 md:w-full  ">
									<h2 className={'text-md text-black'}> {product.title} </h2>
									<p className={'text-green-800'}>${product.price}</p>
								</div>
								<img src={product.images[0]} alt={product.title} className={'w-25 h-32 object-cover rounded '}  />
							</li>
        )
    })

	return (
		<div className=" flex flex-col items-center justify-center   ">
			
			<div className={'flex  justify-center gap-3 p-3 md:w-3/4 sm:w-full lg:1/2 flex-wrap mt-5  '}>
                    {displayproducts}
            </div>
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                onPageChange={changePage}
                renderOnZeroPageCount={null}
                containerClassName={"flex justify-center gap-5 mt-4 hover:cursor-pointer"}
                previousLinkClassName={"px-4 py-2 rounded border border-green-500 text-black"}
                nextLinkClassName={"px-4 py-2 rounded border border-green-500 text-black"}
                disabledClassName={"text-gray-300 "}
                activeClassName={"text-green-500 border-green-500 border px-2 rounded"}
            />
		</div>
	);
};
Results.propTypes = {
	filteredProducts: PropTypes.array.isRequired,
	pagesVisited: PropTypes.number.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	changePage: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
};


export default Results
