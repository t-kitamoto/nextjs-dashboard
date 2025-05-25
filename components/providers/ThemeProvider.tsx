'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useMounted } from '@/hooks/useMounted';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const mounted = useMounted();
  if (!mounted) return null;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
