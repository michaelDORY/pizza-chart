import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 25px;
  font-size: 0.9em;
  min-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;

  & > thead > tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  & tr, th {
    padding: 12px 15px;
  }

  & > tbody > tr {
    border-bottom: 1px solid #dddddd;
    height: 80px;
  }

  & > tbody > tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  & > tbody > tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  & > tbody > tr:hover {
    color: #009879;
  }

  & td {
    background: transparent;
    padding: 6px 12px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbnailImg = styled.img`
  height: 80px;
  width: 130px;
  object-fit: cover;
  border-right: 15px;
`;
