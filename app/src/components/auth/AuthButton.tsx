import React from 'react';
import { motion } from 'framer-motion';

interface AuthButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  type = 'button',
  variant = 'primary',
  children,
  onClick,
  fullWidth = true,
}) => {
  return (
    <motion.button
      type={type}
      className={`text-sm sm:text-[16px] font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 ${
        variant === 'primary'
          ? 'text-white hover:text-white hover:shadow-lg hover:shadow-blue-500/25'
          : 'underline text-gray-300 hover:text-white relative overflow-hidden group'
      } ${fullWidth ? 'w-full' : 'w-auto'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={
        variant === 'primary'
          ? {
              background:
                'radial-gradient(50% 50% at 50% 50%, #0D80EB 0%, #0621B9 100%)',
            }
          : undefined
      }
      whileHover={
        variant === 'primary'
          ? {
              background:
                'radial-gradient(50% 50% at 50% 50%, #1F93FF 40%, #0621B9 100%)',
            }
          : undefined
      }
      onClick={onClick}
    >
      {variant === 'secondary' ? (
        <>
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};
