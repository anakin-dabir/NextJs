import Link from "next/link";

const NavBar = () => {
	return (
		<nav className="bg-primary bg-opacity-50">
			<div className="navbar container mx-auto lg:max-w-screen-xl p-2">
				<div className="navbar-start text-2xl font-bold">NextJS</div>
				<div className="navbar-end">
					<ul className="menu menu-horizontal">
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/about"}>About</Link>
						</li>
						<li>
							<Link href={"/post"}>About</Link>
						</li>
						<li>
							<Link href={"/cc"}>Error</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
