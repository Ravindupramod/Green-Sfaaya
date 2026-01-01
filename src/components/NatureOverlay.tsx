import { useEffect, useState } from 'react';

const NatureOverlay = () => {
    const [leaves, setLeaves] = useState<Array<{ id: number; left: number; delay: number; scale: number; rotation: number }>>([]);

    useEffect(() => {
        // Generate random leaves
        const newLeaves = Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 10,
            scale: 0.5 + Math.random() * 0.5,
            rotation: Math.random() * 360,
        }));
        setLeaves(newLeaves);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Botanical Shadows - Top Left */}
            <div className="absolute -top-10 -left-10 w-[400px] h-[400px] opacity-[0.03] animate-sway origin-top-left text-primary">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M45.7,13.6c0,0-10.3,55.9,28.6,88.9c25.4,21.6,6.7,50.1-23.9,46.2c-34.6-4.4-38.3-43.9-38.3-43.9s-5.6,35.3,18.9,59.3 c22.4,21.9,64.6,9.1,64.6,9.1s-21.7-27.4-17.6-59.3C84.3,58.8,118.8,12.7,45.7,13.6z" />
                    <path d="M96.7,25.6c0,0-20.3,45.9,8.6,78.9c15.4,11.6,3.7,40.1-23.9,36.2c-24.6-4.4-28.3-43.9-28.3-43.9s-5.6,35.3,18.9,59.3 c22.4,21.9,54.6,9.1,54.6,9.1s-21.7-27.4-17.6-59.3C114.3,50.8,128.8,12.7,96.7,25.6z" className="opacity-70" />
                </svg>
            </div>

            {/* Botanical Shadows - Bottom Right */}
            <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.03] animate-sway origin-bottom-right text-primary animation-delay-2000">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ transform: 'scale(-1, -1)' }}>
                    <path d="M96.7,25.6c0,0-20.3,45.9,8.6,78.9c15.4,11.6,3.7,40.1-23.9,36.2c-24.6-4.4-28.3-43.9-28.3-43.9s-5.6,35.3,18.9,59.3 c22.4,21.9,54.6,9.1,54.6,9.1s-21.7-27.4-17.6-59.3C114.3,50.8,128.8,12.7,96.7,25.6z" />
                </svg>
            </div>

            {/* Floating Leaves */}
            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="absolute -top-10 opacity-20 text-primary animate-leaf-fall"
                    style={{
                        left: `${leaf.left}%`,
                        width: `${leaf.scale * 30}px`,
                        height: `${leaf.scale * 30}px`,
                        animationDelay: `${leaf.delay}s`,
                        animationDuration: `${15 + leaf.delay}s`,
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C7.5 2 4 5 4 9C4 14 9 18 12 22C15 18 20 14 20 9C20 5 16.5 2 12 2ZM12 4C14.5 4 16 6 16 9C16 11.5 14 14 12 16V4Z" />
                    </svg>
                </div>
            ))}

            {/* Floating Pollen/Particles */}
            <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${20 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default NatureOverlay;
