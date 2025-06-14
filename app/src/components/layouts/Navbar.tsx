'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Qualif', href: '#' },
    { name: 'Affiliate', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  const hamburgerTopVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const hamburgerMiddleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const hamburgerBottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <>
      <motion.header
        className="relative w-full z-50 border-b border-gray-900"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div
              className="flex items-center"
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-white cursor-pointer">
                <Image
                  src="/assets/xpips-logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 px-1 overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bg-gradient-to-r before:from-blue-500 before:to-blue-400"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={() => router.push('/auth/login')}
                className="relative overflow-hidden group text-gray-300 hover:text-white transition-all duration-300 font-medium py-2 px-6 rounded bg-gradient-to-r from-blue-600/20 to-blue-400/20 hover:from-blue-600/30 hover:to-blue-400/30 cursor-pointer shadow-[inset_0_0_10px_rgba(31,147,255,0.5)] hover:shadow-[inset_0_0_20px_rgba(31,147,255,0.6)]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.button>

              <motion.button
                onClick={() => router.push('/dashboard')}
                className="relative overflow-hidden group text-white hover:text-white transition-all duration-300 font-medium py-1.5 px-6 rounded-lg border border-blue-500 hover:border-blue-400 cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Dashboard</span>
                <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-600/20 to-blue-400/20" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="bg-white block h-0.5 w-6 rounded-sm"
                  variants={hamburgerTopVariants}
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <motion.span
                  className="bg-white block h-0.5 w-6 rounded-sm my-1"
                  variants={hamburgerMiddleVariants}
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <motion.span
                  className="bg-white block h-0.5 w-6 rounded-sm"
                  variants={hamburgerBottomVariants}
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="px-4 py-6 bg-[rgba(3,0,31,1)] border-t border-gray-700/50">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="relative text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-300 py-3 px-4 rounded-lg font-medium pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-0 hover:before:h-1/2 before:w-1 before:bg-blue-500 before:transition-all before:duration-200"
                      variants={mobileNavItemVariants}
                      custom={index}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  <div className="flex flex-col space-y-3 pt-6 border-t border-gray-700/50 mt-4">
                    <motion.button
                      onClick={() => {
                        router.push('/auth/login');
                        setIsMobileMenuOpen(false);
                      }}
                      className="relative overflow-hidden group text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-300 text-left py-3 px-4 rounded-lg font-medium"
                      variants={mobileNavItemVariants}
                      custom={navLinks.length}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Login</span>
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        router.push('/dashboard');
                        setIsMobileMenuOpen(false);
                      }}
                      className="relative overflow-hidden group text-blue-400 hover:text-white transition-all duration-300 text-center py-3 px-4 rounded-lg font-medium border border-blue-500 hover:border-blue-400"
                      variants={mobileNavItemVariants}
                      custom={navLinks.length + 1}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Dashboard</span>
                      <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-600/20 to-blue-400/20" />
                    </motion.button>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
