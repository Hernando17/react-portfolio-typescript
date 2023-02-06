import { Route, Routes } from "react-router-dom";
import { Landing } from "../views";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
