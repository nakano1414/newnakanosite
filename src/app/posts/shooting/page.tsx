'use client';

import React, { useEffect, useRef } from 'react';

const CANVAS_WIDTH = 360;
const CANVAS_HEIGHT = 520;

type Player = {
  x: number;
  y: number;
  size: number;
};

type Bullet = {
  x: number;
  y: number;
};

type Enemy = {
  x: number;
  y: number;
  size: number;
};

type KeyState = {
  left: boolean;
  right: boolean;
};

export default function ShootingGamePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    let player: Player = { x: 160, y: 450, size: 20 };
    let bullets: Bullet[] = [];
    let enemies: Enemy[] = [];
    let score = 0;
    let lives = 3;
    let frame = 0;
    let animationId: number;

    const key: KeyState = { left: false, right: false };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') key.left = true;
      if (e.key === 'ArrowRight') key.right = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') key.left = false;
      if (e.key === 'ArrowRight') key.right = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const loop = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // --- Player move ---
      if (key.left) player.x -= 5;
      if (key.right) player.x += 5;

      // 画面外に出ないように clamp
      player.x = Math.max(0, Math.min(CANVAS_WIDTH - player.size, player.x));

      ctx.fillStyle = 'cyan';
      ctx.fillRect(player.x, player.y, player.size, player.size);

      // --- Bullets ---
      bullets.forEach((b) => {
        b.y -= 6;
      });
      bullets = bullets.filter((b) => b.y > -10);

      ctx.fillStyle = 'white';
      bullets.forEach((b) => {
        ctx.fillRect(b.x, b.y, 4, 10);
      });

      // 一定フレームごとに自動射撃
      if (frame % 10 === 0) {
        bullets.push({
          x: player.x + player.size / 2 - 2,
          y: player.y,
        });
      }

      // --- Enemies spawn & move ---
      if (frame % 30 === 0) {
        enemies.push({
          x: Math.random() * (CANVAS_WIDTH - 20),
          y: -20,
          size: 20,
        });
      }

      enemies.forEach((e) => {
        e.y += 2;
      });

      // --- Collision (bullet vs enemy / player vs enemy) ---
      for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];

        // bullet hit
        for (let j = bullets.length - 1; j >= 0; j--) {
          const bullet = bullets[j];
          const hitBullet =
            bullet.x < enemy.x + enemy.size &&
            bullet.x + 4 > enemy.x &&
            bullet.y < enemy.y + enemy.size &&
            bullet.y + 10 > enemy.y;

          if (hitBullet) {
            enemies.splice(i, 1);
            bullets.splice(j, 1);
            score++;
            break;
          }
        }

        // player hit
        const hitPlayer =
          player.x < enemy.x + enemy.size &&
          player.x + player.size > enemy.x &&
          player.y < enemy.y + enemy.size &&
          player.y + player.size > enemy.y;

        if (hitPlayer) {
          enemies.splice(i, 1);
          lives--;
        }
      }

      // --- Draw enemies ---
      ctx.fillStyle = 'tomato';
      enemies.forEach((e) => {
        ctx.fillRect(e.x, e.y, e.size, e.size);
      });

      // --- HUD ---
      ctx.fillStyle = 'yellow';
      ctx.font = '16px sans-serif';
      ctx.fillText(`Score: ${score}`, 10, 20);
      ctx.fillText(`Lives: ${lives}`, 10, 40);

      // Game Over
      if (lives <= 0) {
        ctx.fillStyle = 'red';
        ctx.font = '28px sans-serif';
        ctx.fillText('GAME OVER', 90, 250);
        ctx.fillText(`Score: ${score}`, 120, 290);
        return; // ここで loop を止める（次の requestAnimationFrame を呼ばない）
      }

      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    animationId = window.requestAnimationFrame(loop);

    // クリーンアップ
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#020617',
        color: '#e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: 700 }}>
        Simple Shooting Game
      </h1>
      <p style={{ fontSize: '14px', opacity: 0.8 }}>
        ← → キーで左右移動。3回当たると GAME OVER。
      </p>
      <canvas
        ref={canvasRef}
        style={{
          background: '#0f172a',
          borderRadius: '8px',
          border: '1px solid #1f2937',
        }}
      />
    </main>
  );
}
