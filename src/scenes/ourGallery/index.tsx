import { SelectedPage, GalleryType } from "@/shared/types";
import image1 from "@/assets/image1.webp";
import image2 from "@/assets/image2.webp";
import image3 from "@/assets/image3.webp";
import image4 from "@/assets/image4.webp";
import image5 from "@/assets/image5.webp";
import image6 from "@/assets/image6.webp";
import image7 from "@/assets/image7.webp";
import image8 from "@/assets/image8.webp";
import { motion } from "framer-motion";
import Gallery from "./Gallery";

const gallerys: Array<GalleryType> = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

function OurGallery({ setSelectedPage }: Props) {
  return (
    <section id="ourgallery" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurGallery)}
      >
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {gallerys.map((item: GalleryType, index) => (
              <Gallery key={`${index}`} image={item.image} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurGallery;
