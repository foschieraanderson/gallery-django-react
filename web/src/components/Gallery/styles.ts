import styled from "styled-components";

export const Container = styled.section`
  
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Title = styled.h1`
    color: var(--text-body);
    margin-top: 2rem;
`;

export const BoxGallery = styled.div`
    margin-top: 1.5rem;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const Imagem = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        filter: grayscale(1);

        transition: filter 0.2s;

        &:hover {
            cursor: pointer;
            filter: grayscale(0);
        }
    }
`;