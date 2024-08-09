import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ButtonMenu } from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="mainBody">
					{/* <h1>Doggo Ipsum</h1> */}
					<ButtonMenu />
					{children}
				</div>
			</body>
		</html>
	);
}
