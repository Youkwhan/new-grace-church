type Props = {
  image: string;
};

function Gallery({ image }: Props) {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px] bg-cover">
      <img src={image} alt={`${image}` } className="h-full w-full object-cover" />
    </li>
  );
}

export default Gallery;
