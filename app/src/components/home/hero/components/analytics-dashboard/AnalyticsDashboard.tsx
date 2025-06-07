'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import { DashboardProps, SidebarItemProps } from './types';
import { defaultChartData, defaultMenuItems, defaultMetrics } from './data';

import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import MetricCard from './MetricCard';
import OverviewChart from './OverviewChart';
import WinRateGauge from './WinRateGauge';

const AnalyticsDashboard: React.FC<DashboardProps> = ({
  chartData = defaultChartData,
}) => {
  const [activeTab, setActiveTab] = useState('Instant Funding');
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleMenuItemClick = (item: SidebarItemProps) => {
    setActiveMenuItem(item.label);
    setIsMobileSidebarOpen(false);
  };

  const menuItems = defaultMenuItems.map((item) => ({
    ...item,
    active: item.label === activeMenuItem,
  }));

  return (
    <motion.div
      className="max-w-7xl h-full mx-auto bg-[#03001F] text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col lg:flex-row gap-4 bg-[#03001F] rounded-xl border-2 border-[#1F69FF] p-2 sm:p-4 relative"
        style={{
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div
          className="lg:hidden flex justify-between items-center p-4 border border-white/10 rounded-xl bg-[#03001F] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <Image
              src={'/assets/xpips-logo.png'}
              alt="Logo"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="text-white font-semibold">Dashboard</span>
          </div>
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isMobileSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </motion.div>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <motion.div
            className="lg:hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-50 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-80 max-w-[80%] bg-black border-r border-white/10 p-4 rounded-l-xl"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar
                logoSrc={'/assets/xpips-logo.png'}
                menuItems={menuItems}
                onMenuItemClick={handleMenuItemClick}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Desktop Sidebar */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Sidebar
            logoSrc={'/assets/xpips-logo.png'}
            menuItems={menuItems}
            onMenuItemClick={handleMenuItemClick}
          />
        </motion.div>

        <motion.div
          className="flex-1 p-3 sm:p-6 rounded-xl bg-white/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <DashboardHeader
            title="Dashboard"
            subtitle="You can see your dashboard information from here."
          />

          <motion.div
            className="flex flex-col sm:flex-row mb-4 items-start sm:items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              {['Instant Funding', 'Check Limits', 'Profit Summary'].map(
                (tab, index) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 overflow-hidden group ${
                      activeTab === tab
                        ? 'bg-[#1F69FF] text-white shadow-lg shadow-[#1F69FF]/25'
                        : 'text-gray-400 bg-white/5 backdrop-blur-sm border border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/10'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    <span className="relative font-bold text-[10px] sm:text-[12px] z-10 whitespace-nowrap">
                      {tab}
                    </span>
                  </motion.button>
                )
              )}
            </div>
            <motion.div
              className="w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center justify-center sm:justify-start space-x-2 bg-[#1F69FF] px-3 py-2 rounded-lg">
                <span className="text-white text-sm font-bold">Live</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {defaultMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <MetricCard
                  index={index}
                  length={defaultMetrics.length}
                  title={metric.title}
                  value={metric.value}
                  icon={metric.icon}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 xl:grid-cols-3 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="xl:col-span-2"
            >
              <OverviewChart data={chartData} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <WinRateGauge percentage={74} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnalyticsDashboard;
