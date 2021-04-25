import React, { useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { useFiles } from "../../context/files";

import { DropContainer, UploadMessage } from "./styles"
  
function Upload() {
  const { handleUpload } = useFiles();

  const onDrop = useCallback(
    (files) => {
      handleUpload(files);
    },
    [handleUpload]
  );

  const {
    getRootProps, getInputProps, isDragActive, isDragReject,
  } = useDropzone({
    accept: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
    onDrop,
  });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <UploadMessage>Arraste seus arquivos aqui ou click para selecionar...</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado...</UploadMessage>
    }

    return <UploadMessage type="success">Solte seus arquivos aqui...</UploadMessage>
  }, [isDragActive, isDragReject]);

  return (
    <DropContainer
      {...getRootProps()}>
      <input {...getInputProps()} />
      {renderDragMessage()}
    </DropContainer>
  );
}

export default Upload;