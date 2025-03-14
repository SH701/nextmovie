import "../styles/global.css";
import Navigation from "./components/navigation";
import ClientThemeprovider from "./clientthemeprovider";

export const metadata = {
  title: 'My Movie',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientThemeprovider>
          <Navigation />
          {children}
        </ClientThemeprovider>
      </body>
    </html>
  );
}
