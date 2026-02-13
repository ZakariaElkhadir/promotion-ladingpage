"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
	"Cruelty Free",
	"Vegan",
	"Clean Ingredients",
	"Sustainable Packaging",
];

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { x: -24, opacity: 0 },
	show: { x: 0, opacity: 1 },
};

const FeatureBanner = () => {
	return (
		<div className="w-full h-13 bg-black text-white">
			<motion.div
				className="h-full max-w-7xl mx-auto flex items-center justify-center gap-10 px-5"
				variants={containerVariants}
				initial="hidden"
				animate="show"
			>
				{items.map((label, index) => (
					<React.Fragment key={label}>
						<motion.span
							className="text-sm tracking-[0.2em] uppercase"
							variants={itemVariants}
						>
							{label}
						</motion.span>
						{index < items.length - 1 && (
							<motion.span className="text-sm opacity-70" variants={itemVariants}>
								•
							</motion.span>
						)}
					</React.Fragment>
				))}
			</motion.div>
		</div>
	);
};

export default FeatureBanner;
