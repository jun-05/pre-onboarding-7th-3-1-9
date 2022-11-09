import styled from '@emotion/styled';
import { MouseEventHandler, ReactNode } from 'react';

export function MainLayout({
  onClick,
  children,
}: {
  onClick: MouseEventHandler<HTMLParagraphElement>;
  children: ReactNode;
}) {
  return (
    <Section onClick={onClick}>
      <h1>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      {children}
    </Section>
  );
}

const Section = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 80px 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 3.4rem;
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;
