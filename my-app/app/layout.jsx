import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
	title: "Home",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
