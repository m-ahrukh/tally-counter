import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tally Counter</title>
        <meta name="description" content="Tally Counter Application created by MnM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Makes the page mobile-friendly */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sofia&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`sofia-regular antialiased`}
      >
        {children}
      </body>
    </html >
  );
}
