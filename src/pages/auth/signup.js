import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./iirisLogo.jpg";
import { useAuth } from "../../contexts/AuthContext";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateToDashboard = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigateToDashboard("/");
    } catch {
      setError("Failed to create account");
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
      <div className="md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-4 sm:p-12 md:p-16 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none sm:bg-card">
        <div className="w-full max-w-80 sm:w-80 mx-auto sm:mx-0">
          {/* Logo */}
          <div className="w-64">
            <img src={logo} className="w-56 h-24" alt="Logo" />
          </div>

          {/* Title */}
          <div className="mt-8 text-4xl font-extrabold tracking-tight leading-tight">
            Sign up
          </div>
          <div className="flex items-baseline mt-0.5 font-regular">
            <span>Please fill out details to sign up</span>
          </div>

          {/* Sign In form */}
          <form className="mt-8" id="signup" onSubmit={handleSubmit}>
            {error && console.log(error)}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  ref={emailRef}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  ref={passwordConfirmRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="flex mt-2 items-center justify-center">
            <Link
              to="/login"
              className="text-center font-medium text-blue-600 hover:text-blue-500 text-sm"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="relative hidden md:flex flex-auto items-center justify-center w-1/2 h-screen p-16 lg:px-28 overflow-hidden bg-gray-800 dark:border-l">
        {/* Background - @formatter:off */}
        {/* Rings */}
        <svg
          class="absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            class="text-gray-700 opacity-25"
            fill="none"
            stroke="currentColor"
            stroke-width="100"
          >
            <circle r="234" cx="196" cy="23"></circle>
            <circle r="234" cx="790" cy="491"></circle>
          </g>
        </svg>
        {/* Dots */}
        <svg
          class="absolute -top-16 -right-16 text-gray-700"
          viewBox="0 0 220 192"
          width="220"
          height="192"
          fill="none"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect
            width="220"
            height="192"
            fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
          ></rect>
        </svg>
        {/* @formatter:on */}
        {/* Content */}
        <div className="z-10 relative w-full max-w-2xl">
          <div class="text-4xl font-bold leading-none text-gray-100">
            <div>Welcome to</div>
            <div>our Insight Platform</div>
          </div>
          <div class="mt-6 text-lg tracking-tight leading-6 text-gray-400">
            As a boutique risk mitigations firm, we are committed to helping you
            solve your business problems by working with you individually.
          </div>
          {/* <div className="flex items-center mt-8">
            <div class="font-medium tracking-tight text-gray-400">
              More than 17k security concerned companies joined us, it's your
              turn
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Signup;
