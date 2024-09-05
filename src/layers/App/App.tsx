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
