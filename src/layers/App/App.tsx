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
import Clock from "../Clock/Clock";
import Calculator from "../Calculator/Calculator";
import Home from "../Home/Home";
import LogoButton from "../../site/components/LogoButton";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clock" element={<Clock />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <header className="h-24 flex justify-between items-center px-8">
        <p className="font-semibold w-28">BY MARKUS TAMM</p>
        <LogoButton />
        <p className="font-semibold w-28 text-right">2024</p>
      </header>
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
