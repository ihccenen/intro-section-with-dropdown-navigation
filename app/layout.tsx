import { Epilogue } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Intro Section With Dropdown Navigation',
  icons: {
    icon: 'favicon-32x32.png',
  },
};

const epilogue = Epilogue({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
