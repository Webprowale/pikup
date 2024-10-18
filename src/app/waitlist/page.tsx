"use client"; 

import React, { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div data-tf-live="01JABF404HHYBFJF1SENCK5JHW"></div>
    </div>
  );
};

export default Page;
