import React, {FC} from 'react';
import {BallTriangle} from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const Loader: FC = () => {
  return (
    <Container>
      <BallTriangle
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
        wrapperStyle={{display: 'flex', justifyContent: 'center'}}
      />
    </Container>
  );
};

export default Loader;
