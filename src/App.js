import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Destinantions } from "./components/Destinantions";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinantions />
    </div>
  );
};
