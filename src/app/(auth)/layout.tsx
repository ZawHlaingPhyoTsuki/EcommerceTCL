export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <h1>From auth layout</h1>
      <div className="h-screen flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}
