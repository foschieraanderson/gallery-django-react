import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdCloudUpload } from "react-icons/md";
import { useFiles } from "../../context/files";
import { FileProps } from "../../context/files";

import { Container, FileInfo, Preview, UploadIcon, Progress } from "./styles";

const FileList = () => {
  const { uploadedFiles: files } = useFiles();

  if (!files.length)
    return (
      <UploadIcon>
        <MdCloudUpload
          size={44}
        />
      </UploadIcon>
    );

  return (
    <Container>
      {files.map((uploadedFile: FileProps) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <Progress>
              {!uploadedFile.uploaded && !uploadedFile.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 24 },
                    path: { stroke: "#6933FF" },
                  }}
                  strokeWidth={10}
                  text={String(uploadedFile.progress)}
                  value={uploadedFile.progress || 0}
                />
              )}

              {uploadedFile.uploaded && (
                <MdCheckCircle size={24} color="#33CC95" />
              )}
              {uploadedFile.error && <MdError size={24} color="#E52E4D" />}
            </Progress>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;