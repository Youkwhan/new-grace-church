type Props = {
  image: string;
};

function Gallery({ image }: Props) {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <img src={image} alt={`${image}`} />
    </li>
  );
}

export default Gallery;
