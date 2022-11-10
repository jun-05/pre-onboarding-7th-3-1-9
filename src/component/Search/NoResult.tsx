import React from 'react';
import tw from 'tailwind-styled-components';

const NoResult = () => {
  return <NoResultBlock>검색어 없음</NoResultBlock>;
};
const NoResultBlock = tw.div`
flex
justify-center
items-center

my-2
bg-white
w-full
py-2
rounded-2xl
`;

export default NoResult;
