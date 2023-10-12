import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  info: string;
  setSelectedPage: (value: SelectedPage) => void;
};

function Card({ icon, title, description, info, setSelectedPage }: Props) {
  const infoLines = info.split("\n");

  return (
    <motion.div
      className="mt-5 w-full rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <h3 className="mb-3 font-bold text-primary-500">{title}</h3>
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{description}</h4>
      {infoLines.map((line) => (
        <p className="my-3">{line}</p>
      ))}
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}

export default Card;
