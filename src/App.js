import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Destinantions } from "./components/Destinantions";
import { Search } from "./components/Search";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinantions />
      <Search />
    </div>
  );
};
