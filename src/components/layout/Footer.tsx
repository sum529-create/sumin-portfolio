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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold text-foreground mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Sumin
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              프론트엔드 개발자 포트폴리오
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold text-foreground mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold text-foreground mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.h3>
            <ul className="space-y-2">
              {socialLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
          variants={itemVariants}
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            &copy; {new Date().getFullYear()} Sumin. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 