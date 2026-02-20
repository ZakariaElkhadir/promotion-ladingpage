const Footer = () => {
	return (
		<footer className="bg-dark text-white pt-16">
			<div className="max-w-7xl mx-auto px-5">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div className="text-center md:text-left">
						<div className="inline-flex items-center justify-center border border-white px-3 py-1 font-bold">
							VERSED
						</div>
						<p className="text-secondary mt-6">
							Clean skincare that works. No jargon,
							no hidden ingredients, just good skin.
						</p>
						<div className="flex items-center justify-center md:justify-start gap-3 mt-6">
							<span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 cursor-pointer">
								<svg
									viewBox="0 0 24 24"
									className="w-4 h-4"
									aria-hidden="true"
								>
									<path
										fill="currentColor"
										d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z"
									/>
								</svg>
							</span>
							<span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 cursor-pointer">
								<svg
									viewBox="0 0 24 24"
									className="w-4 h-4"
									aria-hidden="true"
								>
									<path
										fill="currentColor"
										d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm10 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-5 2.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
									/>
								</svg>
							</span>
							<span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 cursor-pointer">
								<svg
									viewBox="0 0 24 24"
									className="w-4 h-4"
									aria-hidden="true"
								>
									<path
										fill="currentColor"
										d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6a3 3 0 0 0-2.1 2.1A31.5 31.5 0 0 0 2 12a31.5 31.5 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 22 12a31.5 31.5 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"
									/>
								</svg>
							</span>
						</div>
					</div>

					<div className="text-center md:text-left">
						<h4 className="text-sm tracking-[0.2em] uppercase">Shop</h4>
						<ul className="text-secondary mt-5 space-y-2">
							<li className="hover:text-white transition-colors cursor-pointer">Best Sellers</li>
							<li className="hover:text-white transition-colors cursor-pointer">New Arrivals</li>
							<li className="hover:text-white transition-colors cursor-pointer">Cleansers</li>
							<li className="hover:text-white transition-colors cursor-pointer">Serums</li>
							<li className="hover:text-white transition-colors cursor-pointer">Bundles</li>
						</ul>
					</div>

					<div className="text-center md:text-left">
						<h4 className="text-sm tracking-[0.2em] uppercase">About</h4>
						<ul className="text-secondary mt-5 space-y-2">
							<li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
							<li className="hover:text-white transition-colors cursor-pointer">Ingredients</li>
							<li className="hover:text-white transition-colors cursor-pointer">Sustainability</li>
							<li className="hover:text-white transition-colors cursor-pointer">Community</li>
							<li className="hover:text-white transition-colors cursor-pointer">Careers</li>
						</ul>
					</div>

					<div className="text-center md:text-left">
						<h4 className="text-sm tracking-[0.2em] uppercase">Newsletter</h4>
						<p className="text-secondary mt-5">
							Sign up for 10% off your first order.
						</p>
						<div className="mt-4">
							<input
								type="email"
								placeholder="Your email address"
								className="w-full bg-input-bg text-white px-4 py-3 border border-border-dark"
							/>
							<button className="w-full bg-yellow text-primary font-bold px-4 py-3 mt-3 hover:bg-[#e59800] hover:scale-105 transition-all duration-300">
								SUBSCRIBE
							</button>
						</div>
					</div>
				</div>

				<div className="border-t border-border-dark/40 mt-12" />
				<div className="flex flex-col md:flex-row items-center justify-between text-secondary text-sm py-6">
					<p>© 2023 Versed Skincare. All rights reserved.</p>
					<div className="flex items-center gap-6 mt-3 md:mt-0">
						<span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
						<span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
