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
import { useDispatch, useSelector } from "react-redux";
import userSlice, {
  signInStart,
  signInSucess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please, fill out all fields!"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSucess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center max-w-xl min-h-[calc(100vh-74px)] p-3 mx-auto">
      <div className="py-2 border-b-2 w-full">
        <h1 className="text-2xl font-bold">Sign Up</h1>
      </div>
      <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
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
            placeholder="********"
            id="password"
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
            "Sign In"
          )}
        </Button>
      </form>
      <div className="flex gap-2 text-sm">
        <span>Do not have an account?</span>
        <Link to="/sign-up" className="text-blue-500">
          Sign Up
        </Link>
      </div>

      {errorMessage && (
        <Alert className="mt-5 w-full flex items-center" color="failure">
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}
