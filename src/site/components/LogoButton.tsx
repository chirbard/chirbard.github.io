import { useNavigate } from "react-router-dom";

const LogoButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-16 h-16 bg-black rounded-full">
      {/* <div className="w-16 h-16 rounded-full bg-[#ffffff] block -translate-x-1 -translate-y-1 border-2 border-black hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all"></div> */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-translate-x-1 -translate-y-1 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all"
      >
        <g clip-path="url(#clip0_26_6)">
          <circle cx="32" cy="32" r="31.5" fill="white" stroke="black" />
          <g clip-path="url(#clip1_26_6)">
            <path
              d="M20.4474 26.1528L32 20.3616L46.8366 27.799C47.468 28.1155 47.8667 28.7614 47.8667 29.4677V40.2115C47.8667 41.6 46.4048 42.5025 45.1635 41.8803L32.3585 35.4612L20.4474 29.4903C19.0739 28.8017 19.0739 26.8413 20.4474 26.1528Z"
              stroke="#B12B28"
              stroke-width="1.6"
            />
            <path
              d="M32 36.1764L19.1951 42.5954C17.4218 43.4843 15.3334 42.1951 15.3334 40.2115V29.4677C15.3334 28.4587 15.9029 27.536 16.805 27.0838L32 19.4667V36.1764Z"
              fill="black"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_26_6">
            <rect width="64" height="64" fill="white" />
          </clipPath>
          <clipPath id="clip1_26_6">
            <rect
              width="33.3333"
              height="25.0646"
              fill="white"
              transform="translate(15.3334 19.4667)"
            />
          </clipPath>
        </defs>
      </svg>

      {/* <img
        src={logo}
        alt="FreeCodeCamp Logo"
        className="w-10 h-10"
        onClick={handleClick}
      />
      <h1 className="text-2xl font-bold" onClick={handleClick}>
        FreeCodeCamp Projects
      </h1> */}
    </div>
  );
};

export default LogoButton;
