import React, {FC} from 'react';
import MainPage from './pages/MainPage';
import {AppWrapper} from "./App.style";

const App: FC = () => {
  return (
    <AppWrapper>
      <MainPage/>
    </AppWrapper>
  );
}

export default App;
