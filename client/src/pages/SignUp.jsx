import {
  Alert,
  Button,
  Label,
  Spinner,
  TextInput,
  Toast,
  ToastToggle,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullname ||
      !formData.username ||
      !formData.email ||
      !formData.pcnnumber ||
      !formData.password
    ) {
      return setErrorMessage("Please, fill out all fields!");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center max-w-xl min-h-[calc(100vh-74px)] p-3 mx-auto">
      {errorMessage && (
        <Alert className="mt-5 w-full flex items-center" color="failure">
          {errorMessage}
        </Alert>
      )}
      <div className="py-2 border-b-2 w-full">
        <h1 className="text-2xl font-bold">Sign Up</h1>
      </div>
      <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          <Label value="Your Fullname" className="-mb-4" />
          <TextInput
            type="text"
            placeholder="Full Name"
            id="fullname"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your Username" className="-mb-4" />
          <TextInput
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your Email" className="-mb-4" />
          <TextInput
            type="email"
            placeholder="name@company.com"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your Password" className="-mb-4" />
          <TextInput
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your PCN Number" className="-mb-4" />
          <TextInput
            type="text"
            placeholder="PCN Number e.g. 00-0000"
            id="pcnnumber"
            onChange={handleChange}
          />
        </div>

        <Button gradientDuoTone="purpleToBlue" type="submit" className="mt-5">
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Loading ...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
      <div className="flex gap-2 text-sm">
        <span>Have an account?</span>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
    </div>
  );
}
