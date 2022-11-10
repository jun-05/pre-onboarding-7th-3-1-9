import React from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Layout = () => {
  return (
    <LayoutBlock>
      <Outlet />
    </LayoutBlock>
  );
};
const LayoutBlock = tw.div<any>`
flex 
justify-center
w-screen
min-h-screen
h-fit
`;

export default Layout;
