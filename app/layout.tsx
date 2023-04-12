import './globals.css';

export const metadata = {
  title: 'Intro Section With Dropdown Navigation',
  icons: {
    icon: 'favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
