import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import Character from "@/assets/avatar.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1113px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-19">
            <div className="relative">
              <div className="md:before:content-gracetext before:absolute before:-left-16 before:-top-40 before:z-[-1] before:opacity-50">
                <img
                  src={HomePageText}
                  alt="home-page-text"
                  className="w-full max-w-lg"
                />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Join Us At 12:30pm Every Sunday Afternoon.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Us Sunday
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => {
                setSelectedPage(SelectedPage.OurService);
              }}
              href={`#${SelectedPage.OurService}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 mt-16 md:justify-items-end">
          <img
            src={HomePageGraphic}
            alt="home-page-graphic"
            className=" max-w-md rounded-3xl border-4"
          />
        </div>
      </div>

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
