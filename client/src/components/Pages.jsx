import React from "react";

function Pages({ paginate, totalGames }) {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalGames / 15); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {pageNumbers<2? null : pageNumbers.map(n => (
                <button onClick={() => paginate(n)} className="pagination:number" key={n}>
                    {n}
                </button>
            ))}
        </div>
    )
}

export default Pages