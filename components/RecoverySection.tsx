import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const RecoverySection = () => {
  return (
    <section className="bg-light-bg pt-16 sm:pt-20 px-5 overflow-hidden">
      <ScrollAnimation animation="fade-up">
        <p className="text-center text-secondary">PUT SKIN IN </p>
        <h2 className="text-primary font-bold text-center text-2xl sm:text-3xl lg:text-[2.25rem]">
          RECOVERY MODE
        </h2>
      </ScrollAnimation>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-25 mt-10 lg:mt-20">
        <div>
          <ScrollAnimation animation="fade-in" delay={0.2} className="flex justify-center">
            <Image
              src="/images/recovery-mode.png"
              alt="Recovery Image 1"
              width={576}
              height={432}
              className="w-full h-auto lg:ml-4"
            />
          </ScrollAnimation>
        </div>
        <div className="flex flex-col justify-center gap-10 lg:gap-16">
          <ScrollAnimation animation="slide-left" delay={0.3}>
            <div className="flex items-center gap-4">
              <Image
                src="/icons/rbi3a.png"
                alt="RBI3A"
                width={50}
                height={50}
              />
              <div>
                <h3 className="text-primary font-bold">FERMENTED PURPLE TEA</h3>
                <p className="text-secondary">
                  Tones, tightens, and fends off free radical damage for a
                  brighter complexion.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-left" delay={0.4}>
            <div className="flex items-center gap-4">
              <Image
                src="/icons/coffee.png"
                alt="Coffee"
                width={50}
                height={50}
              />
              <div>
                <h3 className="text-primary font-bold">GREEN COFFEE</h3>
                <p className="text-secondary">
                  Rejuvenates skin by energizing cell turnover and reducing
                  puffiness.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-left" delay={0.5}>
            <div className="flex items-center gap-4">
              <Image
                src="/icons/micro.png"
                alt="Microalgae"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-primary font-bold">MICROALGAE</h3>
                <p className="text-secondary">
                  Helps boost collagen and elastin production while providing deep
                  hydration.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default RecoverySection;
