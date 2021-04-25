import React from 'react';

import { Header } from "../../components/Header";
import Upload from "../../components/Upload";
import FileList from "../../components/FileList";

import { FileProvider } from "../../context/files";
 
import { GlobalStyle } from "../../styles/global";
import { Container, Content } from "./styles";

const Uploads: React.FC = () => (
  <FileProvider>
    <Header />
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
      <GlobalStyle />
    </Container>
  </FileProvider>
);

export default Uploads;