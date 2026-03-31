import Image from "next/image";

/**
 * image
 * title
 * paragraph
 * price
 * button
 */
interface ProductCardProps {
  image: string;
  title: string;
  paragraph: string;
  price: string;
}
const ProductCard = ({ image, title, paragraph, price }: ProductCardProps) => {
  return (
    <div
      className="product-card group cursor-pointer"
      style={{ maxWidth: "calc(373.34 / 16 * 1rem)" }}
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={373.34}
          height={466.67}
          className="product-image group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="product-info flex items-center justify-between mt-4 mb-2">
        <h3 className="text-18 text-primary font-bold group-hover:text-amber-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="price text-primary font-bold">${price}</p>
      </div>
      <p className="text-secondary text-18">{paragraph}</p>
      <button className="uppercase py-2 px-34 border border-black text-primary whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-300 w-full mt-4">
        add to bag
      </button>
    </div>
  );
};

export default ProductCard;
