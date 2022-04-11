import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Destinantions } from "./components/Destinantions";
import { Search } from "./components/Search";
import { Selects } from "./components/Selects";
import { Carousel } from "./components/Carousel";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinantions />
      <Search />
      <Selects />
      <Carousel />
    </div>
  );
};
