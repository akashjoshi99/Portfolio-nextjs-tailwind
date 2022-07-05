import Image from "next/image";
import One from "../public/images/11.png";
import Two from "../public/images/Neymar2.png";
import Three from "../public/images/Rocket\ league.png";
import Four from "../public/images/TAG_profile.png";
import Five from "../public/images/VGL_main3.png";
import Six from "../public/images/VGL_valo4.png";
import { Element } from "react-scroll";

function works() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				<p className="text-sm uppercase text-gray-400">Portfolio</p>
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					All Creative Works
				</h1>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="object-center p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>

				<h1 className="text-blue-900 text-base my-10">
					Discover all projects on{" "}
					<a href="#" className="text-black font-semibold">
						dribbble{" "}
					</a>
				</h1>
			</div>
		</Element>
	);
}

export default works;
