
import { useState } from "react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = true,
  showToggle = false,
  toggleHandler,
  showValue,
  note,
}) => {
  return (
    <div className="relative mb-6">
      <label className="absolute -top-2 left-4 bg-white px-1 text-xs z-10">
        {label}
      </label>
      <input
        type={showToggle ? (showValue ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-3 border border-gray-300 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      {showToggle && (
        <button
          type="button"
          onClick={toggleHandler}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
        >
          {showValue ? (
            <EyeIcon />
          ) : (
            <EyeOffIcon />
          )}
        </button>
      )}
      {note && <p className="text-xs mt-1 ml-4 text-gray-700">{note}</p>}
    </div>
  );
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-[#e3f5d4] text-black p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-4xl text-center mb-10 font-bold">Sign Up</h1>

        <form className="flex flex-col">
          
          <div className="flex gap-5 mb-6">
            <InputField label="First Name" />
            <InputField label="Last Name" />
          </div>

          
          <InputField label="Email" type="email" />

          
          <InputField
            label="Password"
            showToggle
            showValue={showPassword}
            toggleHandler={() => setShowPassword(!showPassword)}
            note="Password must be at least 6 characters"
          />

          
          <InputField
            label="Confirm Password"
            showToggle
            showValue={showConfirmPassword}
            toggleHandler={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          
          <button
            type="submit"
            className="bg-[#a4d57c] text-black py-3 px-5 rounded-full text-lg font-medium mx-auto mt-4 hover:bg-[#95cb6a] transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="1" y1="5" x2="23" y2="19" />
  </svg>
);

export default SignUpForm;
