'use client';
import TrustpilotRating from '@/components/ui/TrustPilotRatings';
import Image from 'next/image';
import React from 'react';
import { HeroProps } from './types';
import { defaultHeroConfig } from './config';
import BackgroundSvg from './components/BackgroundSvg';
import Statistics from './components/Statistics';
import ActionButtons from './components/ActionButtons';
import AnalyticsDashboard from './components/analytics-dashboard/AnalyticsDashboard';

const Hero: React.FC<HeroProps> = (props = {}) => {
  const config = { ...defaultHeroConfig, ...props };

  return (
    <div>
      <section className="relative max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mt-8 sm:mt-14">
          <Image
            src={config.logo.src}
            alt={config.logo.alt}
            width={config.logo.width}
            height={config.logo.height}
            className="object-cover w-20 sm:w-24 lg:w-[120px]  py-4"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-center leading-tight">
            {config.title.main}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  'linear-gradient(90deg, #05328D 10.13%, #1F69FF 50.48%, #1F93FF 70.89%, #1F69FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {config.title.highlighted}
            </span>
          </h1>

          {config.title.secondary && (
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-extrabold text-center">
              {config.title.secondary}
            </h2>
          )}

          <p className="text-gray-400 text-center text-sm sm:text-base">
            {config.description.split(config.highlightedAmount)[0]}
            <span className="text-white"> {config.highlightedAmount} </span>
            {config.description.split(config.highlightedAmount)[1]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {config.showTrustpilot && <TrustpilotRating />}
            <Image
              src={config.sponsorLogo.src}
              alt={config.sponsorLogo.alt}
              width={config.sponsorLogo.width}
              height={config.sponsorLogo.height}
              className="w-28 h-20 sm:w-32 lg:w-[138px] object-contain"
            />
          </div>

          <ActionButtons buttons={config.buttons} />
          <Statistics statistics={config.statistics} />
        </div>
      </section>
      <div className="relative w-full overflow-hidden mt-6 h-[450px]">
        {config.showBackgroundSvg && <BackgroundSvg />}
        <div className="absolute bottom-0 left-0 w-full h-full p-0">
          <AnalyticsDashboard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
