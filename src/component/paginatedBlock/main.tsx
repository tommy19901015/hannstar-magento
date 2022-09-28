import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./css.scss";

interface I_Props {
  data: {
    totalData: any;
    contentComponent: any;
  };
}

const PaginatedBlock: React.FC<I_Props> = ({ data }) => {
  const itemsPerPage: number = 10; //預設顯示幾筆資料
  const { totalData, contentComponent } = data;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [nowPage, setNowPage] = useState<number>(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(totalData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalData.length / itemsPerPage));
  }, [totalData, itemOffset]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % totalData.length;
    setItemOffset(newOffset);
    setNowPage(e.selected);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNowPage(parseInt(e.target.value));
    const newOffset =
      (parseInt(e.target.value) * itemsPerPage) % totalData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="paginatedBlock">
      {contentComponent(currentItems)}
      <div className="toolbarBlock">
        <ReactPaginate
          forcePage={nowPage}
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
        <div className="selectPageBlock">
          <div className="text">Go to Page</div>
          <select onChange={handleOnChange} value={nowPage}>
            {new Array(pageCount).fill(0).map((item, index) => (
              <option value={index} key={index}>
                {index + 1}
              </option>
            ))}
          </select>
          <div className="text">{pageCount}</div>
        </div>
      </div>
    </div>
  );
};

export default PaginatedBlock;
