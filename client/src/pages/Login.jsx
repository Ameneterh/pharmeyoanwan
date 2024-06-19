import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

export default function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please, fill out all fields!"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="email"
          placeholder="email@company.com"
          id="email"
          onChange={handleChange}
        />
        <TextInput
          type="password"
          placeholder="*************"
          id="password"
          onChange={handleChange}
        />

        <Button
          disabled={loading}
          outline
          gradientDuoTone="purpleToBlue"
          type="submit"
        >
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Logging in ...</span>
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do not have an account?</p>
        <Link to="/signup">
          <span className="text-blue-700 hover:underline">Sign Up</span>
        </Link>
      </div>
      {errorMessage && (
        <Alert color="failure" className="text-red-500 mt-5">
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}
