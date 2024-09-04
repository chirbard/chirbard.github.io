// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact } from "@fortawesome/free-brands-svg-icons";
// import background from "./assets/bg.png";
// import Clock from "./Clock.tsx";

// function App() {
//   return (
//     <div
//       className="min-h-screen flex justify-center items-center background-pattern, bg-gray-900"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="flex-col flex items-center justify-center rounded-xl p-8
//       bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-600"
//       >
//         <div className="flex flex-row">
//           <img
//             src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
//             className="object-scale-down h-8"
//           />
//           <h1 className="text-3xl font-medium text-white">Hi</h1>
//         </div>
//         <h2 className="text-xl font-medium text-white ">
//           This site uses Vite + <FontAwesomeIcon icon={faReact} /> React +
//           Typescript + Tailwind CSS 3
//         </h2>
//       </div>
//       <Clock />
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Outlet, Link } from "react-router-dom";
import Clock from "./Clock";
import Calculator from "./Calculator";
import Home from "./Home";

export default function App() {
  return (
    <div>
      {/* <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p> */}

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clock" element={<Clock />} />
          <Route path="calculator" element={<Calculator />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav> */}
      <header className="h-24 flex justify-between items-center px-8">
        <p className="font-semibold w-28">BY MARKUS TAMM</p>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_3)">
            <circle cx="31.2" cy="31.2" r="28.8" fill="black" />
            <circle
              cx="28.8"
              cy="28.8"
              r="28.56"
              fill="white"
              stroke="black"
              stroke-width="0.48"
            />
            <g clip-path="url(#clip1_1_3)">
              <path
                d="M18.4026 23.5375L28.8 18.3254L42.1529 25.0191C42.7212 25.304 43.08 25.8852 43.08 26.5209V36.1904C43.08 37.44 41.7643 38.2522 40.6471 37.6922L29.1227 31.9151L18.4026 26.5412C17.1665 25.9215 17.1665 24.1572 18.4026 23.5375Z"
                stroke="#B12B28"
                stroke-width="1.44"
              />
              <path
                d="M28.8 32.5587L17.2755 38.3359C15.6796 39.1359 13.8 37.9756 13.8 36.1904V26.5209C13.8 25.6128 14.3126 24.7824 15.1245 24.3754L28.8 17.52V32.5587Z"
                fill="black"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_3">
              <rect width="60" height="60" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_3">
              <rect
                width="30"
                height="22.5581"
                fill="white"
                transform="translate(13.8 17.52)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="font-semibold w-28 text-right">2024</p>
      </header>

      {/* <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
