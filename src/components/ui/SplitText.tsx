"use client";

import { useSprings, animated, SpringConfig, easings } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';
import type { AnimatedProps } from '@react-spring/web';

interface SplitTextProps {
    text?: string;
    className?: string;
    delay?: number;
    animationFrom?: { opacity: number; transform: string };
    animationTo?: { opacity: number; transform: string };
    easing?: SpringConfig['easing'];
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
    onLetterAnimationComplete?: () => void;
    variant?: 'title' | 'subtitle';
}

interface VariantConfig {
    className: string;
    delay: number;
    animationFrom: { opacity: number; transform: string };
    animationTo: { opacity: number; transform: string };
    easing: SpringConfig['easing'];
    threshold: number;
    rootMargin: string;
    textAlign: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
}

const VARIANTS: Record<Required<SplitTextProps>['variant'], VariantConfig> = {
    title: {
        className: "text-3xl sm:text-4xl md:text-5xl font-bold text-left mb-2 sm:mb-4",
        delay: 150,
        animationFrom: { opacity: 0, transform: 'translate3d(0,50px,0)' },
        animationTo: { opacity: 1, transform: 'translate3d(0,0,0)' },
        easing: easings.easeOutCubic,
        threshold: 0.2,
        rootMargin: '-50px',
        textAlign: 'left'
    },
    subtitle: {
        className: "text-xl sm:text-2xl md:text-3xl text-gray-400 text-left",
        delay: 100,
        animationFrom: { opacity: 0, transform: 'translate3d(0,30px,0)' },
        animationTo: { opacity: 1, transform: 'translate3d(0,0,0)' },
        easing: easings.easeOutCubic,
        threshold: 0.2,
        rootMargin: '-50px',
        textAlign: 'left'
    }
};

const AnimatedSpan = animated('span');

const SplitText: React.FC<SplitTextProps> = ({
    text = '',
    className = '',
    delay,
    animationFrom,
    animationTo,
    easing,
    threshold,
    rootMargin,
    textAlign,
    onLetterAnimationComplete,
    variant
}) => {
    const variantConfig = variant ? VARIANTS[variant] : {} as VariantConfig;
    const finalConfig = {
        className: className || variantConfig.className || '',
        delay: delay ?? variantConfig.delay ?? 100,
        animationFrom: animationFrom ?? variantConfig.animationFrom ?? { opacity: 0, transform: 'translate3d(0,40px,0)' },
        animationTo: animationTo ?? variantConfig.animationTo ?? { opacity: 1, transform: 'translate3d(0,0,0)' },
        easing: easing ?? variantConfig.easing ?? ((t: number) => t),
        threshold: threshold ?? variantConfig.threshold ?? 0.1,
        rootMargin: rootMargin ?? variantConfig.rootMargin ?? '-100px',
        textAlign: textAlign ?? variantConfig.textAlign ?? 'center'
    };

    const words = text.split(' ').map(word => word.split(''));
    const letters = words.flat();
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: finalConfig.threshold, rootMargin: finalConfig.rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [finalConfig.threshold, finalConfig.rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: finalConfig.animationFrom,
            to: inView
                ? async (next: (props: any) => Promise<void>) => {
                    await next(finalConfig.animationTo);
                    animatedCount.current += 1;
                    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                        onLetterAnimationComplete();
                    }
                }
                : finalConfig.animationFrom,
            delay: i * finalConfig.delay,
            config: { easing: finalConfig.easing },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent overflow-hidden inline ${finalConfig.className}`}
            style={{ textAlign: finalConfig.textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.map((letter, letterIndex) => {
                        const index = words
                            .slice(0, wordIndex)
                            .reduce((acc, w) => acc + w.length, 0) + letterIndex;

                        return (
                            <AnimatedSpan
                                key={index}
                                style={springs[index]}
                                className="inline-block transform transition-opacity will-change-transform"
                            >
                                {letter}
                            </AnimatedSpan>
                        );
                    })}
                    <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
                </span>
            ))}
        </p>
    );
};

export default SplitText; 