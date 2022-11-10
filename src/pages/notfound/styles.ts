import styled from 'styled-components';

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #cae9ff;

  .fof h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
  }

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;
