import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="inset-0 w-screen h-screen flex flex-col justify-between p-6 md:px-8 lg:px-12 md:py-12 mx-auto"
      style={{
        background:
          'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(31, 105, 255, 0.5)  10%, rgba(3, 0, 31, 1) 100%)',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,105,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(31,105,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none z-0"></div>
      {children}
    </div>
  );
};

export default layout;
