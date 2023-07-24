import Image from "next/image";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			{/* Logo */}
			<div className="p-5">
				<Image
					src="/assets/images/logo.png"
					alt="JOM Intl. Logo"
					width={200}
					height={200}
					className="object-contain"
				/>
			</div>

			<h1 className="head_text text-center">
				Connecting the World &nbsp;
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">SOON!</span>
			</h1>

			<p className="desc text-center">
				We're still working on our website! For inquiries, you can email us
				at&nbsp;
				<span className="blue_gradient">inquiry@jomintl.com</span> or call us at{" "}
				<span className="blue_gradient">+971-50-891-5830</span>
			</p>
		</section>
	);
};

export default Home;
