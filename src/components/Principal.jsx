import Preguntas from "./Preguntas";
import "./Principal.css";
import { useState } from "react";

function HomePage() {
	const categories = [
		"Terror",
		"Drama",
		"Romance",
		"Acción",
		"Ciencia Ficción",
		"Comedia",
		"Aventura",
		"Suspenso",
	];

	const [isContentVisible, setIsContentVisible] = useState(false);

	const toggleContentVisibility = () => {
		setIsContentVisible((prevState) => !prevState);
	};

	const [startIndex, setStartIndex] = useState(0);
	const itemsToShow = 3;

	const handleNext = () => {
		setStartIndex(
			(prevIndex) => (prevIndex + itemsToShow) % categories.length
		);
	};

	const handlePrev = () => {
		setStartIndex(
			(prevIndex) =>
				(prevIndex - itemsToShow + categories.length) %
				categories.length
		);
	};
	const handleButtonClick = () => {
		window.location.href = "/Preguntas";
	};

	return (
		<div className="homePage">
			<h1 className="title">Welcome</h1>
			<>
				<div className="discoveryBegins">
					<img src="/img/homePageTitle.png" alt="Home Page Title" />
					<div className="leftSquare">
						<center>

            <h2>¿Don't know what movie to watch?</h2>
						<button
							id="discoveryButton"
							onClick={handleButtonClick}
              >
							Start Discovery
						</button>
              </center>
					</div>
				</div>
			</>
		</div>
	);
}

export default HomePage;
