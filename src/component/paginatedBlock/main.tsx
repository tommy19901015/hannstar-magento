import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import "./css.scss";

interface I_Props {
  data: {
    totalData: any;
    contentComponent: any
  };
}

const PaginatedBlock: React.FC<I_Props> = ({ data }) => {
  const itemsPerPage = 10 //預設顯示幾筆資料
  const { totalData, contentComponent } = data
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(totalData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalData.length / itemsPerPage));
  }, [totalData, itemOffset]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % totalData.length;
    setItemOffset(newOffset);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // handlePageClick()
    setItemOffset(parseInt(e.target.value));
  };

  return (
    <div className="paginatedBlock">
      {contentComponent(currentItems)}
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="pagePrevious"
        previousLinkClassName="page-link"
        nextClassName="pageNext"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
      <div>
        <div>Go to Page</div>
        <select onChange={handleOnChange}>
          {new Array(pageCount).fill(0).map((item, index) =>
            <option value={index + 1}>{index + 1}</option>)}
        </select>
        <div>{pageCount}</div>
      </div>
    </div>
  );
};

export default PaginatedBlock;
