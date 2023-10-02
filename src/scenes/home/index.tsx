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
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>Join Us At 12:30pm Every Sunday Afternoon.</p>
          </div>

          {/* ACTIONS */}
          <div>
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
        <div>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>

      {/* MESSAGE */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img src={Character} alt="caricature" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
