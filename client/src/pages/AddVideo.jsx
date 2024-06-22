import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  TextInput,
  Select,
  FileInput,
  Button,
  Alert,
  Spinner,
  Textarea,
} from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { app } from "../firebase.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please, select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed!");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, projectimage: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed!!");
      setImageUploadProgress(null);
      // console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/project/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/project/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl mb-7 font-semibold">Add a Video</h1>
      {/* <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/fUDjhnXyUB4"
        allowfullscreen
      ></iframe> */}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Video Title"
            required
            id="videotitle"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, videotitle: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option>Select a category</option>
            <option value="cosmetics">Cosmetics & Beauty</option>
            <option value="drugs">Drugs & Medicines</option>
            <option value="foods">Foods & Minerals</option>
            <option value="others">Others</option>
          </Select>
        </div>

        <TextInput
          type="text"
          placeholder="Project URL (for webdev projects only)"
          id="liveurl"
          className="flex-1"
          onChange={(e) =>
            setFormData({ ...formData, liveurl: e.target.value })
          }
        />

        <Textarea
          placeholder="Add a description of video ..."
          rows={3}
          maxLength={200}
          required
          onChange={(value) => {
            setFormData({ ...formData, videodescription: value });
          }}
        />

        <Button
          gradientDuoTone="purpleToPink"
          outline
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Publishing ...</span>
            </>
          ) : (
            "Publish Video"
          )}
        </Button>

        {publishError && (
          <Alert color="failure" className="mt-5">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
