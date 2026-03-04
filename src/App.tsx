import { useMediaQuery } from "@uidotdev/usehooks";
import { Menu } from "@/widgets/Menu";
import { About } from "@/widgets/About";
import { Contacts } from "@/widgets/Contacts";
import { Experience } from "@/widgets/Experience";
import { Education } from "@/widgets/Education";
import { Projects } from "@/widgets/Projects";
import { AccentBox } from "./components/Shared/AccentBox";
import { Background } from "./components/Shared/Background";

export function App() {
  const less680px = useMediaQuery("(max-width: 680px)");
  const top = less680px ? "80px" : "250px";
  const left = less680px ? "50px" : "250px";

  return (
    <>
      <Menu />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contacts />
      <AccentBox count={90} width={10} top={top} rotate={45} left={left} />
      <AccentBox
        count={100}
        width={4}
        top={"150px"}
        rotate={45}
        right={"30%"}
      />
      <AccentBox
        count={25}
        width={5}
        bottom={"50px"}
        rotate={0}
        right={"40%"}
      />
      <Background />
    </>
  );
}
