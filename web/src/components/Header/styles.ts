import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);

  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--text-header);

    display: inline-flex;
    gap: 5px;
    
    transition: color 0.5s;

    &:hover {
      color: #FFF;
    }

    i {
      margin-right: 5px;
    }
  }


`;