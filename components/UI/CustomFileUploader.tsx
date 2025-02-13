"use client";
import { Button } from "@heroui/button";
import React, {
  ChangeEvent,
  useEffect,
  useState,
  DragEvent,
  ReactNode,
} from "react";

interface Props {
  ALLOWED_FILE_TYPES?: string[];
  MAX_FILE_SIZE?: number;
  narration?: ReactNode | string;
  setSelectedFile: (file: File | null) => void;
}
const CustomFileUploader = ({
  ALLOWED_FILE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg+xml",
    "image/x-icon",
    "image/webp",
  ],
  MAX_FILE_SIZE = 300 * 1024,
  narration,
  setSelectedFile,
}: Props) => {
  const [fileError, setFileError] = useState<string | null>(null);
  const [previewImg, setPreviewImg] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const formatFileSize = (size: number): string => {
    if (size >= 1024 * 1024) {
      return `${size / (1024 * 1024)}MB`; // Convert to MB
    } else if (size >= 1024) {
      return `${size / 1024}KB`; // Convert to KB
    }

    return `${size}B`; // Bytes
  };

  const formatReadableList = (types: string[]): string => {
    const formattedTypes = types.map((type) => {
      if (type.startsWith("image/"))
        return type.replace("image/", "").toUpperCase();
      if (type === "application/pdf") return "PDF";

      return type.toUpperCase();
    });

    if (formattedTypes.length > 1) {
      return (
        formattedTypes.slice(0, -1).join(", ") + " and " + formattedTypes.at(-1)
      );
    }

    return formattedTypes[0] || "";
  };

  const fileValidation = (file: File) => {
    let fileError = false;

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      fileError = true;
      setFileError(`File "${file.name}" is not an accepted format.`);
    } else if (file.size > MAX_FILE_SIZE) {
      fileError = true;
      setFileError(
        `File "${file.name}" exceeds the ${formatFileSize(MAX_FILE_SIZE)} limit.`
      );
    }

    if (!fileError) setFileError(null);

    return fileError;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && !fileValidation(file)) {
      setSelectedFile(file);
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];

    if (file && !fileValidation(file)) {
      setSelectedFile(file);
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  // const handleRemoveFile = () => {
  //   setSelectedFile(null);
  //   setPreviewImg("");
  // };

  useEffect(() => {
    if (fileError) {
      const timer = setTimeout(() => {
        setFileError(null);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [fileError]);

  return (
    <>
      {/* {previewImg && (
        <div className="flex items-center text-sm justify-between bg-foreground-100 p-1 rounded-full shadow-sm">
          <Avatar
            alt="icon"
            className="w-8 h-8 object-cover"
            src={String(previewImg)}
          />

          <Button
            isIconOnly
            className="text-red-500 text-xs"
            color="danger"
            radius="full"
            size="sm"
            variant="flat"
            onPress={handleRemoveFile}
          >
            <Icon icon="line-md:remove" />
          </Button>
        </div>
      )} */}

      {/* {fileError && (
        <div className="rounded-xl px-3 py-2  bg-red-100 flex text-red-500 animate__animated animate__slideInUp text-sm items-center gap-2">
          <div>
            <Icon icon="ri:error-warning-fill" />
          </div>
          {fileError}
        </div>
      )} */}

      {!previewImg && (
        <div
          className={`w-full p-5 space-y-2  border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition
    ${isDragging ? "border-primary bg-primary-50" : "border-gray-300"}
`}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {narration ? (
            narration
          ) : (
            <>
              <div className="font-semibold text-sm">
                Choose a file or drag & drop it here.
              </div>
              <div className=" text-gray-500 text-xs">
                {formatReadableList(ALLOWED_FILE_TYPES)} up to{" "}
                {formatFileSize(MAX_FILE_SIZE)}.
              </div>
            </>
          )}

          <input
            accept={ALLOWED_FILE_TYPES.join(",")}
            className="hidden"
            id="fileInput"
            type="file"
            onChange={handleFileChange}
          />
          {previewImg === "" && (
            <Button
              className="border p-0 text-gray-600"
              radius="sm"
              size="sm"
              type="button"
              variant="bordered"
            >
              <label
                className="text-gray-500 text-center cursor-pointer h-full flex items-center justify-center p-3 "
                htmlFor="fileInput"
              >
                Browse File
              </label>
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default CustomFileUploader;
