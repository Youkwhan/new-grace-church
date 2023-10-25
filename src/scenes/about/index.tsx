import { CardType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Card from "./Card";
import AboutPageGraphic from "@/assets/AboutPageGraphic.png";

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
    info: "8:00 PM -- Zoom\nRoom ID: 2739510842",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Location",
    description: "2 Revolutionary Rd. Ardsley, NY 10502",
    info: "(St. Barnabas Church)\nT. 914-815-5526 (Cell)",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

function About({ setSelectedPage }: Props) {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      {/* onViewportEnter: For highlighting where we are on the navigation */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* HEADER */}
        <motion.div
          className="my-5 md:w-3/5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A CHURCH.</HText>
          <p className="my-5 text-sm">
            Experience Grace, Community, and Spiritual Growth.
          </p>
        </motion.div>

        {/* INFO Cards */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
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
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="item-center mt-16 justify-around gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            src={AboutPageGraphic}
            alt="about-page-graphic"
            className="mx-auto w-96 md:mx-0"
          />

          {/* DESCRIPTION */}
          <div className="my-20 md:my-auto">
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[1] before:content-logo md:before:-left-28">
                <div className="text-center">
                  <HText>
                    Worship with <span className="text-primary-500">US</span>
                  </HText>
                </div>
              </div>
            </div>

            {/* DESC */}
            <div>
              <p className="mt-5 text-center">
                Located on the hill of Revolutionary Road, Ardsley,
              </p>
              <p className="text-center ">
                we meet in-person on Sundays for worship
              </p>
              <p className="mb-5 text-center">
                and Wednesdays for small groups.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
