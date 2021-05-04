import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
      max-width: 400px;
      padding: 1.5rem;
      background: var(--shape);
      border-radius: 5px;
      box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.8);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      h2 {
          text-align: center;
          color: var(--text-title);
          margin-bottom: 1rem;
      }

      input {
        width: 100%;
        margin-top: 0.5rem;
        height: 1.8rem;
        padding: 5px;
        color: var(--text-body);
        border: none;
        border: 1px solid var(--background);

        &:focus {
            border: solid 1px var(--blue);
        }
      }

      button {
          border: none;
          background: var(--blue);
          color: var(--shape);
          cursor: pointer;
          margin-top: 0.5rem;
          height: 1.8rem;
          width: 100%;

          transition: filter 0.2s;

          &:hover {
              filter: brightness(0.9);
          }
      }

      ul#error {
          list-style: none;
          width: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;

          li {
            background: var(--red);
            color: var(--shape);
            font-size: 0.8rem;
            padding: 0.3rem;
            width: 100%;
            text-align: center;
          }
      }
  }
`;

