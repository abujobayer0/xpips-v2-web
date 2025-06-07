import React from 'react';
import { motion } from 'motion/react';
import { ActionButtonsProps } from '../types';

const ActionButtons: React.FC<ActionButtonsProps> = ({ buttons }) => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto">
    {buttons.map((button, index) => (
      <motion.button
        key={index}
        className={`text-sm sm:text-[16px] font-medium py-3 px-6 sm:px-8 rounded w-full sm:w-auto transition-all duration-300 ${
          button.variant === 'primary'
            ? 'text-gray-300 hover:text-white hover:shadow-lg hover:shadow-blue-500/25'
            : 'underline text-gray-300 hover:text-white relative overflow-hidden group'
        }`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        style={
          button.variant === 'primary'
            ? {
                background:
                  'radial-gradient(50% 50% at 50% 50%, #0D80EB 0%, #0621B9 100%)',
              }
            : undefined
        }
        whileHover={
          button.variant === 'primary'
            ? {
                background:
                  'radial-gradient(50% 50% at 50% 50%, #1F93FF 0%, #05328D 100%)',
              }
            : undefined
        }
        onClick={button.onClick}
      >
        {button.variant === 'secondary' ? (
          <>
            <span className="relative z-10">{button.text}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </>
        ) : (
          button.text
        )}
      </motion.button>
    ))}
  </div>
);

export default ActionButtons;
