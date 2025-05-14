'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { href: "mailto:your.email@example.com", label: "Email", icon: "✉️" },
    { href: "https://github.com/yourusername", label: "GitHub", icon: "🐙" },
    { href: "https://linkedin.com/in/yourusername", label: "LinkedIn", icon: "💼" }
  ];

  return (
    <motion.footer
      ref={ref}
      className="bg-background border-t border-border"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
        <motion.div
          className="mb-8 pt-8 text-center text-muted-foreground"
          variants={itemVariants}
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            &copy; {new Date().getFullYear()} Sumin. All rights reserved.
          </motion.p>
        </motion.div>
    </motion.footer>
  );
};

export default Footer; 