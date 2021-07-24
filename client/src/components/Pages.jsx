import React from "react";

function Pages({ paginate }) {
    let start = 1;
    let pageNumbers = [];
    let end = start + 8
    for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            {pageNumbers.map(n => (
                <button onClick={() => paginate(n)} className="pagination:number" key={n}>
                    {n}
                </button>
            ))}
        </div>
    )
}

export default Pages