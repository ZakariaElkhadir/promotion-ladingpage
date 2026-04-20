import ProductCard from "./ProductCard";
import ScrollAnimation from "./ScrollAnimation";

const ProductsSection = () => {
  return (
    <section id="products" className="products-section mt-16 sm:mt-20 px-5">

      <ScrollAnimation animation="fade-up">
        <h2 className="uppercase text-center text-2xl sm:text-3xl lg:text-[2.25rem]">
          shop community favorites
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={0.2}>
        <p className="text-center text-primary mt-2">
          Your exclusive discount ends tonight. Shop now and get 10% off your order.
        </p>
      </ScrollAnimation>

      <div className="products-grid text-secondary text-18">
        {/* Products will be displayed here */}
        <div className="max-w-7xl mx-auto py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollAnimation animation="fade-up" delay={0.3} className="flex justify-center">
            <ProductCard image="/images/Products/product-1.png" title="DOCTOR'S VISIT" paragraph="Instant Resurfacing Mask" price="17.99" />
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.4} className="flex justify-center">
            <ProductCard image="/images/Products/product-2s.png" title="DEW POINT" paragraph="Moisturizing Gel-Cream" price="14.99" />
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.5} className="flex justify-center">
            <ProductCard image="/images/Products/product-3.png" title="DAY DISSOLVE" paragraph="DAY DISSOLVE" price="17.99" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
