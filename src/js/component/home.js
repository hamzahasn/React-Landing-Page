import React, { useEffect } from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	useEffect(() => {
		document.title = "React Landing Page";
	}, []);
	const menu = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "#" },
		{ label: "Contact", url: "#" }
	];
	const carddata = [
		{
			title: "Dragonball",
			description:
				"The series begins with a young monkey-tailed boy named Goku befriending a teenage girl named Bulma. Together, they go on an adventure to find the seven mystical Dragon Balls, which have the ability to summon the powerful dragon Shenron, who can grant whoever summoned him their greatest desire.   ",
			button: "Instant Transmission",
			image:
				"https://static1.srcdn.com/wordpress/wp-content/uploads/2018/12/Dragon-Ball-Young-Goku-Young-Krillin-Fist-Bump.jpg?q=50&fit=crop&w=740&h=453",
			link: "https://dragonball.fandom.com/wiki/Dragon_Ball_(anime)"
		},
		{
			title: "Dragonball Z",
			description:
				"Dragon Ball Z is a Japanese anime television series produced by Toei Animation. It is the sequel to Dragon Ball and adapts the latter 325 chapters of the original 519-chapter Dragon Ball manga series created by Akira Toriyama which ran in Weekly Shōnen Jump from 1988 to 1995. ",
			button: "Instant Transmission",
			image:
				"https://am24.mediaite.com/tms/cnt/uploads/2018/09/Dragon-Ball-Z-03152018.jpg",
			link: "https://dragonball.fandom.com/wiki/Dragon_Ball_Z"
		},
		{
			title: "Dragonball GT",
			description:
				"The first half of the series focuses on Goku, Pan, and Trunks, while the second half brings back most of the prominent characters from Dragon Ball and Dragon Ball Z. The series follows the Dragon Team against far more powerful foes such as the Luud Cult, the Machine Mutants, Baby, Super 17, and the Shadow Dragons.",
			button: "Instant Transmission",
			image: "https://i.ytimg.com/vi/eCKbdB12gYU/maxresdefault.jpg",
			link: "https://dragonball.fandom.com/wiki/Dragon_Ball_GT"
		},
		{
			title: "Dragonball Super",
			description:
				"Dragon Ball Super is the fourth anime installment in the Dragon Ball franchise, which ran from July 5th, 2015 to March 25th, 2018. It is set between Dragon Ball Z episodes 288 and 289 and is the first Dragon Ball television series featuring a new storyline in 18 years since the final episode of Dragon Ball GT in 1997.  ",
			button: "Instant Transmission",
			image:
				"https://pm1.narvii.com/7226/301a69d9873b3c7acd28b3c34141ef3b0a723c05r1-1280-720v2_00.jpg",
			link: "https://dragonball.fandom.com/wiki/Dragon_Ball_Super_(anime)"
		}
	];
	return (
		<div>
			<Navbar
				menu={menu}
				icon="https://img.icons8.com/dusk/64/000000/son-goku.png"
				brand="Dragonball"
			/>

			<Jumbo
				goku="https://i.pinimg.com/originals/58/ad/2f/58ad2f47db26a501c802f76ea8223b0f.png"
				about="Dragon Ball is a Japanese media franchise created
							by Akira Toriyama in 1984. The initial manga,
							written and illustrated by Toriyama, was serialized
							in Weekly Shōnen Jump from 1984 to 1995, with the
							519 individual chapters collected into 42 tankōbon
							volumes by its publisher Shueisha. Dragon Ball was
							initially inspired by the classical 16th century
							Chinese novel Journey to the West, as well as Hong
							Kong martial arts films. The series follows the
							adventures of the protagonist, Son Goku, from his
							childhood through adulthood as he trains in martial
							arts. He spends his childhood far from civilization
							until he meets a teen girl named Bulma, who
							encourages him to join her quest in exploring the
							world in search of the seven orbs known as the
							Dragon Balls, which summon a wish-granting dragon
							when gathered. Along his journey, Goku makes several
							other friends, becomes a family man, discovers his
							alien heritage, and battles a wide variety of
                            villains, many of whom also seek the Dragon Balls."
				jumbolink="https://en.wikipedia.org/wiki/Dragon_Ball"
				jumboheading="About"
				jumboit="Instant Transmission"
			/>
			<div className="container-fluid">
				<div className="row">
					{carddata.map((item, index) => {
						return (
							<div key={index} className="col-sm">
								<Card
									name={item.title}
									text={item.description}
									btn={item.button}
									img={item.image}
									cardlink={item.link}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
