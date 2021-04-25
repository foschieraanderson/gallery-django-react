import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .Gallery {
      max-width: 1200px;
  }

`;

export const Title = styled.h1`
    color: var(--text-body);
    margin-top: 2rem;
`;