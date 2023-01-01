import React from 'react'
import ReactPaginate from 'react-paginate'
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";

const Pagination = () => {

    const handlePageClick = (data)=>{
        console.log(data.selected)

    }
  return (
    <>
    <ReactPaginate
    breakLabel={`...`}
    nextLabel={<IoIosArrowForward/>}
    previousLabel={<IoIosArrowBack/>}
    pageCount={15}
    pageRangeDisplayed={2}
    marginPagesDisplayed={2}
    onPageChange={handlePageClick}
    containerClassName={`pagination`}
    pageClassName={`page-item`}
    pageLinkClassName={`page-link`}
    previousClassName={`page-item`}
    previousLinkClassName={`page-link`}
    nextClassName={`page-item`}
    nextLinkClassName={`page-link`}
    breakClassName={`page-item`}
    breakLinkClassName={`page-link`}
    activeClassName={`!bg-orange-600`}
  />
    </>
  )
}

export default Pagination