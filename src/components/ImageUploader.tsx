import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase/config";

interface ImageUploaderProps {
  team: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ team }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploading(true);
      setUploadProgress(0);

      const storage = getStorage(app); // Initialize Firebase Storage
      const storageRef = ref(storage, `images/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload error:", error);
          setUploading(false);
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setUploadUrl(url);
          } catch (error) {
            console.error("Error getting download URL:", error);
          } finally {
            setUploading(false);
          }
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading
          ? `Uploading... ${uploadProgress.toFixed(0)}%`
          : "Upload Image"}
      </button>
      {uploadUrl && (
        <div>
          <p>Upload successful! Here is your image:</p>
          <img
            src={uploadUrl}
            alt="Uploaded"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
