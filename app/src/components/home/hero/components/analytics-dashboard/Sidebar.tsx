import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Settings } from 'lucide-react';
import { SidebarProps } from './types';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC<SidebarProps> = ({
  logoSrc,
  menuItems,
  onMenuItemClick,
}) => (
  <motion.div
    className="w-64 bg-white/2 rounded-xl"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-6 flex flex-col justify-start items-start">
      <motion.div
        className="flex-shrink-0 flex mb-2 items-center gap-1 justify-center mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={logoSrc} alt="logo" width={100} height={100} />
        </motion.div>
      </motion.div>

      <motion.nav
        className="space-y-1 mt-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          >
            <SidebarItem {...item} onClick={() => onMenuItemClick?.(item)} />
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        className="mt-4 pt-2 border-t w-full border-white/10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <SidebarItem
          icon={Settings}
          label="Settings"
          onClick={() =>
            onMenuItemClick?.({ icon: Settings, label: 'Settings' })
          }
        />
      </motion.div>
    </div>
  </motion.div>
);

export default Sidebar;
