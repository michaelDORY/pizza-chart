import React, {FC, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Table from '../components/Table';
import renderChart from '../functions/renderChart';
import useHttp from '../hooks/useHttp';
import {getProducts} from '../services/products';
import {CONTAINER_CHART_NAME} from '../utils/constrains';
import ErrorComponent from '../utils/ErrorComponent';
import Loader from '../utils/Loader';
import {Product} from '../utils/types';

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 50px 0;
`;

const MainPage: FC = () => {
  const {state: allProducts, loading, error} = useHttp<Product[]>(() => getProducts());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (allProducts) {
      renderChart(allProducts, CONTAINER_CHART_NAME);
    }
  }, [allProducts]);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <ErrorComponent/>;
  }

  return (
    <Container>
      <div id={CONTAINER_CHART_NAME} ref={containerRef}/>
      <Table allProducts={allProducts || []}/>
    </Container>
  );
};

export default MainPage;
