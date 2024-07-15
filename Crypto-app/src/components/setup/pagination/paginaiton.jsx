import React from "react";
import './pagination.css'


const Pagination = ({postsPerPage, totalPosts, setCurrentPage}) => {
    const pages = []

    for(let i = 1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
    return(
        <div>
            {pages.map((page, index) => {
            return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>   
            })}
        </div>
    )
}

export default Pagination