'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ThemeType = 'light' | 'dark' | 'system';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  // Type guard to ensure theme is one of allowed values
  const isValidTheme = (value: unknown): value is ThemeType =>
    value === 'light' || value === 'dark' || value === 'system';

  const safeTheme: ThemeType = isValidTheme(theme) ? theme : 'system';

  return (
    <Sonner
      theme={safeTheme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
