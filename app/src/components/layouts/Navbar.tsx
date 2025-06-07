'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const Navbar = () => {
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
      <style jsx>{`
        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          transition: width 0.3s ease;
        }

        .nav-link:hover::before {
          width: 100%;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .nav-link:hover::after {
          left: 100%;
        }

        .mobile-nav-link {
          position: relative;
          overflow: hidden;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: width 0.3s ease;
        }

        .mobile-nav-link:hover::before {
          width: 4px;
        }

        .auth-button {
          position: relative;
          overflow: hidden;
        }

        .auth-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.4s ease;
        }

        .auth-button:hover::before {
          left: 100%;
        }

        .dashboard-button {
          position: relative;
          overflow: hidden;
        }

        .dashboard-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #3b82f6;
          transition: width 0.3s ease;
          z-index: -1;
        }

        .dashboard-button:hover::before {
          width: 100%;
        }
      `}</style>

      <motion.header
        className="relative  border-b border-gray-900"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full -z-10"
          viewBox="0 0 1440 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g filter="url(#filter0_f_124_77)">
            <ellipse cx="720" cy="-86.5" rx="720" ry="66.5" fill="#1F69FF" />
          </g>
          <defs>
            <filter
              id="filter0_f_124_77"
              x="-150"
              y="-303"
              width="1740"
              height="433"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_124_77"
              />
            </filter>
          </defs>
        </svg>

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
                  className="nav-link text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 px-1"
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
                className="auth-button text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 px-6 rounded"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                style={{
                  boxShadow:
                    'rgba(31, 147, 255, 0.5) 0px 0px 10px 0px inset, rgba(31, 147, 255, 0.5) 0px 0px 20px 0px inset, rgba(31, 147, 255, 0.1) 0px 0px 30px 0px inset',
                }}
              >
                Login
              </motion.button>
              <motion.button
                className="dashboard-button px-6 py-1.5 border border-blue-500 text-white rounded-lg hover:text-white transition-all duration-300 font-medium relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Dashboard
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
              <nav className="px-4 py-6 bg-[rgba(3, 0, 31, 1)] border-t border-gray-700/50">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="mobile-nav-link text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
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

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-3 pt-6 border-t border-gray-700/50 mt-4">
                    <motion.button
                      className="auth-button text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-300 text-left py-3 px-4 rounded-lg font-medium"
                      variants={mobileNavItemVariants}
                      custom={navLinks.length}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      Login
                    </motion.button>
                    <motion.button
                      className="dashboard-button px-4 py-3 border border-blue-500 text-blue-400 rounded-lg hover:text-white transition-all duration-300 text-center font-medium"
                      variants={mobileNavItemVariants}
                      custom={navLinks.length + 1}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      Dashboard
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
