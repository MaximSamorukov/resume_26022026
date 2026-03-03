import { Menu } from "@/widgets/Menu";
import { About } from "@/widgets/About";
import { Contacts } from "@/widgets/Contacts";
import { Experience } from "@/widgets/Experience";
import { Education } from "@/widgets/Education";
import { Projects } from "@/widgets/Projects";
import { AccentBox } from "./components/Shared/AccentBox";
import { Background } from "./components/Shared/Background";

export function App() {
  return (
    <>
      <Menu />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contacts />
      <AccentBox />
      <Background />
    </>
  );
}
