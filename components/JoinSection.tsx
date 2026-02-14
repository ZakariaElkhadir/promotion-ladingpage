import ScrollAnimation from "./ScrollAnimation";

const JoinSection = () => {
  return (
    <section className="bg-yellow py-16 sm:py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-primary font-bold uppercase text-2xl sm:text-3xl lg:text-[2.25rem]">
            JOIN THE VERSED SQUAD
          </h2>
          <p className="text-18 text-primary mt-4">
            Get the most out of your VIP status. Earn points, redeem rewards,
            and get early access to drops.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-12">
          <ScrollAnimation animation="fade-up" delay={0.2} className="w-full">
            <div className="bg-light-bg border border-border-dark px-8 py-6 max-w-sm w-full mx-auto h-full">
              <p className="text-primary font-bold">01</p>
              <h3 className="text-primary font-bold mt-3">JOIN THE SQUAD</h3>
              <p className="text-secondary mt-2">
                Already done? That is 25 points.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.3} className="w-full">
            <div className="bg-light-bg border border-border-dark px-8 py-6 max-w-sm w-full mx-auto h-full">
              <p className="text-primary font-bold">02</p>
              <h3 className="text-primary font-bold mt-3">RACK UP POINTS</h3>
              <p className="text-secondary mt-2">
                Earn when you shop, refer friends, review, and more.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.4} className="w-full">
            <div className="bg-light-bg border border-border-dark px-8 py-6 max-w-sm w-full mx-auto h-full">
              <p className="text-primary font-bold">03</p>
              <h3 className="text-primary font-bold mt-3">ENJOY PERKS</h3>
              <p className="text-secondary mt-2">
                Redeem points for free products, discounts, and exclusives.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-up" delay={0.5}>
          <button className="mt-10 bg-black text-white px-10 py-3 font-bold w-full sm:w-auto">
            SIGN UP NOW
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default JoinSection;