import styled from '@emotion/styled';

export function Title({ content }: { content: string }) {
  return <H1>{content}</H1>;
}

const H1 = styled.h1`
  white-space: pre-wrap;
`;
