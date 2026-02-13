import Image from 'next/image';

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
const ProductCard = ({ image, title, paragraph, price } : ProductCardProps) => {
  return (
    <div className="product-card" style={{ maxWidth: 'calc(373.34 / 16 * 1rem)' }}>
      <Image src={image} alt={title} width={373.34} height={466.67} className="product-image" />
      <div className="product-info flex items-center justify-between mt-4 mb-2">
          <h3 className="text-18 text-primary font-bold">{title}</h3>
          <p className="price text-primary font-bold">${price}</p>
      </div>
      <p className="text-secondary text-18">{paragraph}</p>
      <button className="uppercase py-2 px-34 border border-black text-primary whitespace-nowrap">add to bag</button>
    </div>
  )
}

export default ProductCard