import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import Character from "@/assets/avatar.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1260px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:mt-64 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-19"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-52 before:z-[-1] before:opacity-50 md:before:content-gracetext">
                <h1 className="my-2 basis-4/5 font-montserrat text-6xl font-bold tracking-[.30em]">
                  새은혜교회
                </h1>
                <h2 className="basis-3/5 font-montserrat text-2xl">
                  New Grace Community Church
                </h2>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Join Us At 12:30pm Every Sunday Afternoon.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Us Sunday
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => {
                setSelectedPage(SelectedPage.OurGallery);
              }}
              href={`#${SelectedPage.OurGallery}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="mt-16 flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-items-end">
          <img
            src={HomePageGraphic}
            alt="home-page-graphic"
            className=" max-w-md rounded-3xl border-4"
          />
        </div>
      </motion.div>

      {/* MESSAGE */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 ">
              <img src={Character} alt="caricature" className="h-36" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
