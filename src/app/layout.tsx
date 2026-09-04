import './globals.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// The [locale]/layout.tsx renders the full <html> shell; the root layout
// only passes children through (not-found is handled per locale).
export default function RootLayout({ children }: Props) {
  return children;
}
