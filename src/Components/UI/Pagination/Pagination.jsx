import React from 'react'

export default function Pagination({ totalPages, onChangePage }) {
  const pageNumbers = new Array(totalPages)
    .fill(1)
    .map((elem, index) => index + 1)

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination center mt-2">
          {pageNumbers.map(page => (
            <li key={page} className="page-item">
              <button onClick={() => onChangePage(page)} className="page-link">{page}</button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
