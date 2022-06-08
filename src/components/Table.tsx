import React, {FC, useEffect, useState} from 'react';
import {MAX_PAGE} from "../utils/constrains";
import {Product} from "../utils/types";
import IconButton from "./IconButton";
import NextIcon from '../assets/icons/next.svg';
import PrevIcon from '../assets/icons/prev.svg';
import {TableContainer, StyledTable, Pagination, ThumbnailImg} from './Table.style';

interface ITable {
  allProducts: Product[]
}

const TABLE_COLUMNS = ['Brand', 'Title', 'Price', 'Rating', 'Category', 'Thumbnail'];

const Table: FC<ITable> = ({allProducts}: ITable) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(allProducts.slice(0, 10));

  useEffect(() => {
    setProducts(allProducts.slice(page - 1, page + 9));
    window.scrollTo({behavior: 'smooth', top: 0});
  }, [allProducts, page])

  return (
    <TableContainer>
      <StyledTable>
        <thead>
        <tr>
          {TABLE_COLUMNS.map((columnName) => <th key={columnName}>{columnName}</th>)}
        </tr>
        </thead>
        <tbody>
        {
          products.map((product) => <tr key={product.id}>
              {
                TABLE_COLUMNS.map((columnName) => columnName === 'Thumbnail' ?
                  // @ts-ignore
                  <td key={product.id + columnName}><ThumbnailImg src={product[columnName.toLowerCase()]}
                                                                  alt='thumbnail'/></td> :
                  // @ts-ignore
                  <td key={product.id + columnName}>{product[columnName.toLowerCase()]}</td>)
              }
            </tr>
          )
        }
        </tbody>
      </StyledTable>
      <Pagination>
        <IconButton iconPath={PrevIcon} onClick={() => setPage(page - 1)} disabled={page === 1}></IconButton>
        <p>{`${page} / ${MAX_PAGE}`}</p>
        <IconButton iconPath={NextIcon} onClick={() => setPage(page + 1)} disabled={page === MAX_PAGE}></IconButton>
      </Pagination>
    </TableContainer>
  );
};

export default Table;
