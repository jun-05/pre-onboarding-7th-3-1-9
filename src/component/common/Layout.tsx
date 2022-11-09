import React from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const GlobalBackground = () => {
  return (
    <GlobalBackgroundBlock>
      <Outlet />
    </GlobalBackgroundBlock>
  );
};
const GlobalBackgroundBlock = tw.div<any>`
flex 
justify-center
w-screen
min-h-screen
h-fit
bg-blue-white
`;

export default GlobalBackground;
