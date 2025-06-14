import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-4 right-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
      <Link href="/terms" className="hover:text-white transition-colors">
        Terms
      </Link>
      <Link href="/privacy" className="hover:text-white transition-colors">
        Privacy
      </Link>
      <Link href="/docs" className="hover:text-white transition-colors">
        Docs
      </Link>
      <Link href="/helps" className="hover:text-white transition-colors">
        Helps
      </Link>
      <div className="flex items-center">
        <span className="mr-2">English</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
