import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;
  width: 100%;

  li {
    display: inline-flex;
    justify-content: start;

    & + li {
      margin-left: 10px;
    }
  }
`;

export const FileInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

`;


interface PreviewProps {
  src?: string;
}

export const Preview = styled.div<PreviewProps>`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export const Progress = styled.div`
  position: absolute;
  z-index: 1;
`;

export const UploadIcon = styled.span`
  color: var(--blue);
  margin-top: 1.2rem;

  display: flex;
  justify-content: center;
`;