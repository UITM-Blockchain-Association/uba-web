'use client';

import { Magnetic } from '@/components/ui/magnetic';
import Image from 'next/image';

function MagneticNested() {
  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic
      intensity={0.2}
      springOptions={springOptions}
      actionArea='global'
      range={200}
    >
      <button
        type='button'
        className='inline-flex items-center rounded-lg border border-zinc-100 bg-zinc-100 px-6 py-3 text-base md:text-lg font-medium transition-all duration-200 hover:bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600'
      >
        <Magnetic
          intensity={0.1}
          springOptions={springOptions}
          actionArea='global'
          range={200}
        >
          <span className="flex items-center gap-2">
            <span>Join <span className="text-[#17D4E9]">UBA</span></span>
            <Image 
              src="/wow.gif" 
              alt="Wow" 
              width={20} 
              height={20} 
              className="rounded-full object-cover"
              unoptimized
            />
          </span>
        </Magnetic>
      </button>
    </Magnetic>
  );
}

export { MagneticNested } 