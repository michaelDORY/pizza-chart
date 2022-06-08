import React from 'react';
import styled from "styled-components";
import ErrorImage from '../assets/images/error_image.jpg';

const ErrorContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  overflow: hidden;
  
  & > img {
    border-radius: 15px;
    object-fit: cover;
  }
`;

const Heading = styled.h3`
  text-align: center;
`;

const ErrorComponent = () => {
  return (
    <ErrorContainer>
      <Heading>Sorry, something went wrong</Heading>
      <img src={ErrorImage} alt='error' />
    </ErrorContainer>
  );
};

export default ErrorComponent;
