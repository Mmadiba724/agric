

import PropTypes from 'prop-types';

const Results = ({searchTriggered,filteredProducts}) => {
	return (
		<div className=" flex justify-center  overflow-y-auto   ">
			{searchTriggered ? (
				filteredProducts.length === 0 ? (
					<i>No products of that name are found. Try again!</i>
				) : (
					<ul className={'sm:flex sm:justify-center sm:gap-3 sm:p-3 sm:w-250 sm:flex-wrap mt-5  '} >
						{filteredProducts.map((product) => (
							<li key={product.id} className={'flex  w-64 p-3 rounded-xl border-0 shadow-2xl h-40 '}>
								<div className="text-left px-2">
									<h2 className={'text-sm'}> {product.title} </h2>
									<p>${product.price}</p>
								</div>
								<img src={product.images[0]} alt={product.title} className={'w-25 h-32 object-cover rounded '}  />
							</li>
						))}
					</ul>
				)
			) : (
				<i>Searched products appear here</i>
			)}
		</div>
	);
};
Results.propTypes = {
	searchTriggered: PropTypes.bool.isRequired,
	filteredProducts: PropTypes.array.isRequired,
	currentProducts: PropTypes.array.isRequired,
};


export default Results
