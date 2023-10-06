import { CardType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Card from "./Card";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const cards: Array<CardType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Sundays",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, minus!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Wednesdays",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, minus!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, minus!",
  },
];

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
        {/* INFO Cards */}
        <div>
          {cards.map((card: CardType) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
