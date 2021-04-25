import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { v4 as uuidv4 } from "uuid";

import api from "../services/api";

export interface PostProps {
  id: string;
  image: string;
  is_available: boolean;
}

export interface FileProps {
  id: string;
  uploaded?: boolean;
  preview: string;
  file: File | null;
  progress?: number;
  error?: boolean;
  is_available: boolean;
}

interface FilePropsContextData {
  uploadedFiles: FileProps[];
  handleUpload(file: any): void;
}

const FileContext = createContext<FilePropsContextData>({} as FilePropsContextData);

const FileProvider: React.FC = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);

  useEffect(() => {
    return () => {
      setUploadedFiles((state) =>
        state.filter((file) => (file.uploaded !== true && file))
      );
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  });

  const updateFile = useCallback((id, data) => {
    setUploadedFiles((state) =>
      state.map((file) => (file.id === id ? { ...file, ...data } : file))
    );
  }, []);

  const processUpload = useCallback(
    (uploadedFile: FileProps) => {
      const data = new FormData();
      if (uploadedFile.file) {
        data.append("image", uploadedFile.file);
        data.append("is_available", String(uploadedFile.is_available));
      }

      api
        .post("uploads/", data, {
          onUploadProgress: (progressEvent) => {
            let progress: number = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );

            console.log(
              `A imagem ${uploadedFile.preview} está ${progress}% carregada... `
            );

            updateFile(uploadedFile.id, { progress });
          },
        })
        .then((response) => {
          console.log(
            `A imagem ${uploadedFile.preview} já foi enviada para o servidor!`
          );

          updateFile(uploadedFile.id, {
            uploaded: true,
            id: response.data.id,
            url: response.data.image,
          });
        })
        .catch((err) => {
          console.error(
            `Houve um problema para fazer upload da imagem ${uploadedFile.preview} no servidor`
          );
          console.log(err);

          updateFile(uploadedFile.id, {
            error: true,
          });
        });
    },
    [updateFile]
  );

  const handleUpload = useCallback(
    (files: File[]) => {
      const newUploadedFiles: FileProps[] = files.map((file: File) => ({
        file,
        id: uuidv4(),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        is_available: false,
      }));

      setUploadedFiles((state) => state.concat(newUploadedFiles));
      newUploadedFiles.forEach(processUpload);
    },
    [processUpload]
  );

  return (
    <FileContext.Provider value={{ uploadedFiles, handleUpload }}>
      {children}
    </FileContext.Provider>
  );
};

function useFiles(): FilePropsContextData {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFiles must be used within FileProvider");
  }

  return context;
}

export { FileProvider, useFiles };