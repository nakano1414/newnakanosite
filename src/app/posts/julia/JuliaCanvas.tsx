'use client';

import { useEffect, useRef } from 'react';

type JuliaCanvasProps = {
  width?: number;
  height?: number;
  // z_{n+1} = z_n^2 + c の c
  cRe?: number;
  cIm?: number;
  maxIter?: number;
};

export default function JuliaCanvas({
  width = 400,
  height = 300,
  cRe = -0.8,
  cIm = 0.156,
  maxIter = 80,
}: JuliaCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    // 描画範囲（複素平面上）を決める
    const xMin = -1.5;
    const xMax = 1.5;
    const yMin = -1.2;
    const yMax = 1.2;

    for (let py = 0; py < height; py++) {
      const y0 = yMin + ((yMax - yMin) * py) / height;
      for (let px = 0; px < width; px++) {
        const x0 = xMin + ((xMax - xMin) * px) / width;

        let x = x0;
        let y = y0;

        let iter = 0;
        while (x * x + y * y <= 4 && iter < maxIter) {
          const xTemp = x * x - y * y + cRe;
          y = 2 * x * y + cIm;
          x = xTemp;
          iter++;
        }

        const idx = (py * width + px) * 4;

        if (iter === maxIter) {
          // 集合の中っぽい点（黒）
          data[idx] = 10;
          data[idx + 1] = 10;
          data[idx + 2] = 20;
          data[idx + 3] = 255;
        } else {
          // 発散の速さで色をつける
          const t = iter / maxIter;
          // 簡単なグラデーション（青〜紫っぽい）
          data[idx] = 40 + 160 * t; // R
          data[idx + 1] = 40 * (1 - t); // G
          data[idx + 2] = 120 + 120 * t; // B
          data[idx + 3] = 255; // A
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }, [width, height, cRe, cIm, maxIter]);

  return (
    <div className="julia-wrapper">
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
}
