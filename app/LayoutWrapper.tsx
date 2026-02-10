'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/app/navbar';
import { BackgroundPaths } from '@/components/ui/background-paths';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotFound = pathname !== '/';

  if (isNotFound) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <BackgroundPaths>
        {children}
      </BackgroundPaths>
    </>
  );
}
