import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  showLeftSection?: boolean;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  showLeftSection = true,
}) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2    bg-transparent text-white relative">
      {showLeftSection && (
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center py-12">
          <div className="mb-8 w-full">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <Image
                src="/assets/xpips-logo.png"
                alt="XPips Logo"
                width={120}
                height={40}
              />
              <Link
                href="/"
                className="text-sm text-white hover:text-white/50 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Go Back Home
              </Link>
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-[44px] font-bold mb-2">
              Your Journey To Simulated
            </h1>
            <h2 className="text-3xl md:text-3xl lg:text-[44px] font-bold text-blue-500 mb-4 md:mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    'linear-gradient(90deg, #05328D 10.13%, #1F69FF 50.48%, #1F93FF 70.89%, #1F69FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Funded Trading
              </span>
            </h2>
            <p className="text-lg md:text-[20px] text-white">
              Signup With Xpips Today
            </p>
          </div>

          <div className="space-y-5 w-full">
            {[
              {
                phase: 'Phase 1',
                title: 'Choose our Evaluation',
                description: 'Achieve Your 8% Target without time limits',
              },
              {
                phase: 'Phase 2',
                title: 'Prove our skills',
                description: 'Establish your track record, hit a 5% target',
              },
              {
                phase: 'Phase 3',
                title: 'Get paid to trade Demo',
                description:
                  'Qualify as XPips Funded Trader, Start your trading',
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-2xl w-full backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <span
                    style={{
                      background:
                        'radial-gradient(50% 50% at 50% 50%, #0D80EB 20%, #0621B9 100%)',
                    }}
                    className=" text-white px-6 py-2 rounded-md text-sm"
                  >
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mt-3 md:mt-4 text-black">
                  {phase.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  );
};
