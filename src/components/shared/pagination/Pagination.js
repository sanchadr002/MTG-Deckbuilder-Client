// This pagination component uses https://academind.com/tutorials/reactsj-pagination as a reference
// Our Pagination component will receive 5 props
    // data is an array of data to show in paginated form
    // RenderComponent is a component used to show the paginated data (this will be MTGCard)
    // title describes what the data is about (this will be Search Results)
    // dataLimit is the # of posts to be shown on each page (this will be 10)
    // pageLimit is number of pages to be shown in pagination (5 pages)
import React, { useState } from 'react'

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }){

    // We're saving two things in our state:
        // pages is the total number of pages
            // calculated by dividing length of data by the dataLimit (length of the array and the number of elements to show in each page)
            // currentPage is the current page that the user is currently viewing (starts at 1)
    const [pages] = useState(Math.round(data.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)

    // goToNextPage increments the page by 1
    function goToNextPage() {
        setCurrentPage(page => page + 1)
    }

    // goToPreviousPage decrements the page by 1
    function goToPreviousPage() {
        setCurrentPage(page => page - 1)
    }

    // changePage will be called when the user clicks on a page number
    // will change the current page to the page number that was clicked by the user
    // by using e.target, we can extract the page number from the pagination item the user clicked on
    // Number converts it to a number
    function changePage(e) {
        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber)
    }

    // getPaginatedData will return the number of posts equal to dataLimit (10 in this case)
    // this will be the data that is displayed to the user
    // the function calculates the start and end indices
    // then the slice method is used to return a part of the array with those start and end indices
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return data.slice(startIndex, endIndex)
    }

    // getPaginationGroup is used to show the page numbers in the pagination
    // the function calculates the starting point to be used to show the subsequent page numbers
    // these are the numbers that the user can click on 
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    return (
        <div>
            <h1>{title}</h1>

            {/* shows 10 elements at a time */}
            <div className="dataContainer">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d}/>
                ))}
            </div>

            {/* show the pagination */}
            <div className="pagination">

                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>
                
                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button 
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button 
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        </div>
    )
}

export default Pagination