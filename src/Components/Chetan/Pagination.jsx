import React from 'react'
import style from "./Pagination.module.css"
function Pagination({page,totalPage,changePage}) {

  const handelNext=()=>{
    changePage(page+1);
  }

  const handelPrev=()=>{
    changePage(page-1);
  }

  return (
    <div className={style.pagination}>
      <button onClick={handelPrev} disabled={page===1} className={style.prev}>Prev</button>
      <h6 className={style.value}>{page}/{totalPage}</h6>
      <button onClick={handelNext} disabled={page===totalPage} className={style.next}>Next</button>
    </div>
  )
}

export default Pagination
