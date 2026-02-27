import { Menu } from "@/widgets/Menu";
import { About } from "@/widgets/About";
import { Contacts } from "@/widgets/Contacts";
import { Experience } from "@/widgets/Experience";
import { Education } from "@/widgets/Education";
import { Projects } from "@/widgets/Projects";
import { Courses } from "@/widgets/Courses";

export function App() {
  return (
    <>
      <Menu />
      <About />
      <Experience />
      <Education />
      <Courses />
      <Projects />
      <Contacts />
    </>
  );
}
