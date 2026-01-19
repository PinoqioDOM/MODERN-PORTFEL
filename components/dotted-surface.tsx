/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		particles: THREE.Points[];
		animationId: number;
		count: number;
	} | null>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		console.log('=== DottedSurface useEffect ===');
		console.log('containerRef.current:', containerRef.current);
		console.log('mounted:', mounted);
		
		if (!containerRef.current || !mounted) {
			console.log('Early return - container or mounted not ready');
			return;
		}

		// theme-ის რეალური მნიშვნელობის განსაზღვრა
		const currentTheme = theme === 'system' ? systemTheme : theme;
		const isDark = currentTheme === 'dark' || currentTheme === undefined;

		console.log('Current theme:', currentTheme, 'isDark:', isDark);
		console.log('Creating Three.js scene...');

		const SEPARATION = 150;
		const AMOUNTX = 40;
		const AMOUNTY = 60;

		// Get container dimensions instead of window
		const width = containerRef.current.clientWidth;
		const height = containerRef.current.clientHeight;
		
		console.log('Container dimensions:', width, 'x', height);

		// Scene setup
		const scene = new THREE.Scene();
		const fogColor = isDark ? 0x000000 : 0xffffff;
		scene.fog = new THREE.Fog(fogColor, 2000, 10000);

		const camera = new THREE.PerspectiveCamera(
			75,
			width / height,
			1,
			10000,
		);
		camera.position.set(0, 200, 800);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);
		renderer.setClearColor(fogColor, 0);

		containerRef.current.appendChild(renderer.domElement);
		console.log('Renderer canvas appended to container');
		console.log('Canvas size:', renderer.domElement.width, 'x', renderer.domElement.height);

		const positions: number[] = [];
		const colors: number[] = [];

		// Create geometry for all particles
		const geometry = new THREE.BufferGeometry();

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0;
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				
				// ფერები 0-1 range-ში (არა 0-255)
				if (isDark) {
					colors.push(1, 1, 1); // თეთრი
				} else {
					colors.push(0, 0, 0); // შავი
				}
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		// Create material
		const material = new THREE.PointsMaterial({
			size: 15,
			vertexColors: true,
			transparent: true,
			opacity: 1,
			sizeAttenuation: true,
		});

		// Create points object
		const points = new THREE.Points(geometry, material);
		scene.add(points);
		console.log('Points added to scene. Total particles:', AMOUNTX * AMOUNTY);
		console.log('Particle color (first particle):', colors[0], colors[1], colors[2]);

		let count = 0;
		let animationId: number = 0;

		// Animation function
		const animate = () => {
			animationId = requestAnimationFrame(animate);

			const positionAttribute = geometry.attributes.position;
			const positions = positionAttribute.array as Float32Array;

			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					const index = i * 3;

					// Animate Y position with sine waves
					positions[index + 1] =
						Math.sin((ix + count) * 0.3) * 50 +
						Math.sin((iy + count) * 0.5) * 50;

					i++;
				}
			}

			positionAttribute.needsUpdate = true;

			renderer.render(scene, camera);
			count += 0.1;
		};

		// Handle window resize
		const handleResize = () => {
			if (!containerRef.current) return;
			const width = containerRef.current.clientWidth;
			const height = containerRef.current.clientHeight;
			
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};

		window.addEventListener('resize', handleResize);

		// Start animation
		animate();
		console.log('Animation started');
		console.log('Camera position:', camera.position.x, camera.position.y, camera.position.z);

		// Store references
		sceneRef.current = {
			scene,
			camera,
			renderer,
			particles: [points],
			animationId,
			count,
		};

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);

			if (sceneRef.current) {
				cancelAnimationFrame(sceneRef.current.animationId);

				sceneRef.current.scene.traverse((object) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((material) => material.dispose());
						} else {
							object.material.dispose();
						}
					}
				});

				sceneRef.current.renderer.dispose();

				if (containerRef.current && sceneRef.current.renderer.domElement) {
					containerRef.current.removeChild(
						sceneRef.current.renderer.domElement,
					);
				}
			}
		};
	}, [theme, systemTheme, mounted]);

	if (!mounted) {
		return (
			<div
				className={cn('pointer-events-none fixed inset-0 -z-1', className)}
				{...props}
			/>
		);
	}

	return (
		<div
			ref={containerRef}
			className={cn('pointer-events-none absolute inset-0 z-0', className)}
			{...props}
		/>
	);
}