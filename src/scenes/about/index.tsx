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
    description: "Korean Service",
    info: "12:45 PM -- @ St. Barnabas Church\nAfter 3:00 PM -- Bible Study",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Wednesdays",
    description: "Online Service",
    info: "8:00 PM -- Zoom\nRoom: #4235-8967-8765",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Location",
    description: "2 Revolutionary Rd. Ardsley, NY 10502",
    info: "(St. Barnabas Church)\nT. 914-815-5526 (Cell)",
  },
];

function About({ setSelectedPage }: Props) {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      {/* onViewportEnter: For highlighting where we are on the navigation */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* HEADER */}
        <div className="my-5 md:w-3/5">
          <HText>MORE THAN JUST A CHURCH.</HText>
          <p className="my-5 text-sm">
            Experience Grace, Community, and Spiritual Growth.
          </p>
        </div>
        {/* INFO Cards */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {cards.map((card: CardType) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              info={card.info}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
