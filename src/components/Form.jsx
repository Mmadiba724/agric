import React, {useState} from 'react'

const Form = ({searchTerm, setSearchTerm, filteredProducts,handleSubmit, searchTriggered}) => {

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	const indexOfLastProduct = currentPage * itemsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

	const nextPage = () => {
		if(currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	}

	const prevPage = () => {
		if(currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	}


	return (

		<div className={'  h-100  w-310 '}>
			<form className={'flex justify-center mb-3 gap-3 w-full'} onSubmit={handleSubmit}>
				<input
					type={'text'}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder={'search here'}
					className={'w-xl rounded-full p-2 border border-gray-200'} />

				<button className={`border px-4 rounded-xl hover:cursor-pointer text-black bg-green-50 border-green-300 `} type="submit" >
					Submit
				</button>

			</form>

			<div className=" flex justify-center h-75 overflow-y-auto  ">
				{searchTriggered ? (
					filteredProducts.length === 0 ? (
						<i>No products of that name are found. Try again!</i>
					) : (
						<ul className={'flex justify-center gap-3 p-3 w-250 flex-wrap mt-5'}>
							{currentProducts.map((product) => (
								<li key={product.id} className={'flex  w-64 p-3 rounded-xl border h-40 '}>
									<div className="text-left">
										<h2 className={'text-sm'}> {product.title} </h2>
										<p>${product.price}</p>
									</div>
									<img src={product.image} alt={product.title} className={'w-25 h-32 object-cover'}  />
								</li>
							))}
						</ul>
					)
				) : (
					<i>Searched products appear here</i>
				)}
			</div>

		{/*	pagination*/}
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

		</div>

	)
}
export default Form
