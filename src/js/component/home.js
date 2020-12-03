import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const menu = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "#" },
		{ label: "Contact", url: "#" }
	];
	const carddata = [
		{
			title: "Dragonball",
			description:
				"Dragon Ball (Japanese: ドラゴンボール,) is a Japanese media franchise created by Akira Toriyama in 1984. The initial manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected into 42 tankōbon volumes by its publisher Shueisha. Dragon Ball was initially inspired by the classical 16th century Chinese novel Journey to the West, as well as Hong Kong martial arts films. The series follows the adventures of the protagonist, Son Goku, from his childhood through adulthood as he trains in martial arts.  ",
			button: "Instant Transmission",
			image:
				"https://static1.srcdn.com/wordpress/wp-content/uploads/2018/12/Dragon-Ball-Young-Goku-Young-Krillin-Fist-Bump.jpg?q=50&fit=crop&w=740&h=453",
			link: "https://dragonball.fandom.com/wiki/Dragon_Ball_(anime)"
		},
		{
			title: "Dragonball Z",
			description:
				"Dragon Ball Z (Japanese: ドラゴンボールZ, commonly abbreviated as DBZ) is a Japanese anime television series produced by Toei Animation. It is the sequel to Dragon Ball and adapts the latter 325 chapters of the original 519-chapter Dragon Ball manga series created by Akira Toriyama which ran in Weekly Shōnen Jump from 1988 to 1995. Dragon Ball Z aired in Japan on Fuji TV from April 1989 to January 1996, before getting dubbed in territories including the United States, Canada, Australia, Europe, Asia, and Latin America. It was broadcast in at least 81 countries worldwide. ",
			button: "Instant Transmission",
			image:
				"https://am24.mediaite.com/tms/cnt/uploads/2018/09/Dragon-Ball-Z-03152018.jpg",
			link: "https://dragonball.fandom.com/wiki/Dragon_Ball_Z"
		},
		{
			title: "Dragonball GT",
			description:
				"Dragon Ball GT (Japanese: ドラゴンボールGT, ) is a Japanese anime series based on Akira Toriyama's Dragon Ball manga. Produced by Toei Animation, the series premiered in Japan on Fuji TV and ran for 64 episodes from February 1996 to November 1997.Unlike the previous two anime in the Dragon Ball franchise, Dragon Ball GT does not adapt the manga by Toriyama, but is an anime-exclusive sequel show to the Dragon Ball Z anime with an original story using the same characters and universe, which follows the exploits of Goku, his granddaughter Pan, and their various associates. ",
			button: "Instant Transmission",
			image: "https://i.ytimg.com/vi/eCKbdB12gYU/maxresdefault.jpg",
			link: "https://dragonball.fandom.com/wiki/Dragon_Ball_GT"
		},
		{
			title: "Dragonball Super",
			description:
				"Dragon Ball Super (Japanese: ドラゴンボール超, ) is a Japanese manga series and anime television series. The series is a sequel to the original Dragon Ball manga, with its overall plot outline written by creator Akira Toriyama. The manga is illustrated by Toyotarou, with story and editing by Toriyama, and began serialization in Shueisha's shōnen manga magazine V Jump in June 2015. The anime was produced by Toei Animation, with individual episodes written by different screenwriters, and aired on Fuji TV from July 2015 to March 2018.The series chronicles the adventures of Goku during the ten-year timeskip after the defeat of Majin Buu. ",
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
				about="Dragon Ball (Japanese: ドラゴンボール, Hepburn:
							Doragon Bōru) is a Japanese media franchise created
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
