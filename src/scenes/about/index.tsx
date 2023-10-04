import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

function About({ setSelectedPage }: Props) {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      {/* onViewportEnter: For highlighting where we are on the navigation */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* HEADER */}
        <div>
          <HText>MORE THAN JUST A CHURCH.</HText>
          <p>Experience Grace, Community, and Spiritual Growth.</p>
        </div>
        {/* INFO */}
      </motion.div>
    </section>
  );
}

export default About;
