"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const element = document.documentElement;
    const ScrollTop = element.scrollTop || document.body.scrollTop;
    const ScrollHeight = element.scrollHeight || document.body.scrollHeight;
    const percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;

    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  return (
    <div className="progressBar" style={{ width: `${width}%` }}>
      <style jsx>{`
        .progressBar {
          position: fixed;
          z-index: 50;
          top: 0;
          left: 0px;
          height: 6px;
          border-radius: 0px 2px 0px 0px;
          background: linear-gradient(90deg, #7dc7d6, #e8c8bc);
        }
      `}</style>
      <style global jsx>{`
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      `}</style>
    </div>
  );
}
