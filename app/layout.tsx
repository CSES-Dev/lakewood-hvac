import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";

import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
            </Head>

            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NavigationBar />
                {children}
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
