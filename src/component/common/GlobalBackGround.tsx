import React from 'react';

import tw from 'tailwind-styled-components';

const GlobalBackground = ({ children }: { children: React.ReactNode }) => {
  return <GlobalBackgroundBlock>{children}</GlobalBackgroundBlock>;
};
const GlobalBackgroundBlock = tw.div<any>`
flex 
justify-center
w-screen
min-h-screen
h-fit
`;

export default GlobalBackground;
