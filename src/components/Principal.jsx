import "./Principal.css";
import Netflix from "../assets/streamingServices/icons8-netflix-desktop-app-144.png";
import HBOMax from "../assets/streamingServices/icons8-hbo-max-128.png";
import DisneyPlus from "../assets/streamingServices/icons8-disney-plus-144.png";
import AmazonPrimeVideo from "../assets/streamingServices/icons8-amazon-prime-video-144.png";
import AppleTVPlus from "../assets/streamingServices/icons8-apple-tv-144.png";

function HomePage() {
	const handleButtonClick = () => {
		window.location.href = "/Preguntas";
	};

	return (
		<div className="homePage">
			<h1 className="title" style={{ fontSize: "70px" }}>
				Welcome
			</h1>
			<p className="paragraph" style={{ fontSize: "25px" }}>
				On this page you can search for movies and find the perfect
				movie for the moment.
			</p>

			<h1 className="secondTitle" style={{ fontSize: "40px" }}>
				Streaming Services
			</h1>
			<p className="paragraph" style={{ fontSize: "25px" }}>In this pages you can watch movies to legal form and payful</p>
			<div className="streamingGird">
				<a href="https://www.netflix.com/browse">
					<div className="plataform">
						<img src={Netflix} style={{ width: "90px" }} />
					</div>
				</a>
				<a href="https://www.max.com/ar/es">
					<div className="plataform">
						<img src={HBOMax} style={{ width: "90px" }} />
					</div>
				</a>
				<a href="https://www.disneyplus.com/es-ar?cid=DTCI-Synergy-DisneyLatino-Site-Awareness-LatamOnGoing-SSLA-DisneyPlus-NA-SSLA-GlobalNav-LatamSite-GlobalChrome-NA">
					<div className="plataform">
						<img src={DisneyPlus} style={{ width: "97px" }} />
					</div>
				</a>
				<a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root">
					<div className="plataform">
						<img src={AmazonPrimeVideo} style={{ width: "97px" }} />
					</div>
				</a>
				<a href="https://tv.apple.com/?l=es-MX">
					<div className="plataform">
						<img src={AppleTVPlus} style={{ width: "97px" }} />
					</div>
				</a>
			</div>
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
