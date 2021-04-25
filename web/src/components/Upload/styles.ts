import styled, { css } from "styled-components";

const dragActive = css`
  border-color: var(--green);
`;

const dragReject = css`
  border-color: var(--red);
`;

type IDropContainer = {
  isDragActive?: boolean;
  isDragReject?: boolean;
};

export const DropContainer = styled.div<IDropContainer>`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props: any) => props.isDragActive && dragActive};
  ${(props: any) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#969CB3",
  error: "#E52E4D",
  success: "#33CC95",
};

interface ITypeMessageColor {
  type?: "default" | "error" | "success";
}

export const UploadMessage = styled.p<ITypeMessageColor>`
  color: ${(props) => messageColors[props.type || "default"]};
  padding: 15px 0;
  text-align: center;
  line-height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;