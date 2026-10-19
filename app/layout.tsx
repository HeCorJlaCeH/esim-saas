import './globals.css';

export const metadata = {
  title: 'RoamFlow | Global eSIM Platform',
  description: 'Instant high-speed cellular data worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
