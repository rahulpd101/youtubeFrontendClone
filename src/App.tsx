import React, { MouseEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import { Create, Logo, MoreOptions, NotificationBell, SearchIcon, YoutubeApps } from "./assets";
import { data } from "./data";
import { sliderData } from "./data";

const App: React.FC = () => {
	const changeBackground = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		if (e.currentTarget) {
			e.currentTarget.style.backgroundColor = "darkgray";
		}
	};

	const sliderRef = useRef(null);
	const [leftVisible, setLeftVisible] = useState(false);
	const [rightVisible, setRightVisible] = useState(true);

	// useEffect(() => {
	// 	const currentRef = sliderRef.current;
	// 	if (currentRef === null) return;
	// 	else {
	// 		const listener = currentRef.addEventListener("scroll", () => {});
	// 	}
	// });
	return (
		<div className="App">
			<div className="header">
				<div
					style={{
						display: "flex",
						height: "25px",
						width: "140px",
						marginRight: "auto",
					}}>
					<MoreOptions style={{ width: "50px" }} />
					<Logo style={{ width: "90px" }} />
				</div>
				<div style={{ display: "flex", alignItems: "center", height: 56 }}>
					<div className="searchBar">
						<input placeholder="Search" />
						<SearchIcon />
					</div>
					<div className="headerButtons">
						<Create />
						<YoutubeApps />
						<NotificationBell />
					</div>
				</div>
			</div>
			<div style={{ display: "flex" }}>
				<div
					className="leftCol"
					onMouseEnter={(e) => (e.currentTarget.style.overflowY = "scroll")}
					onMouseLeave={(e) => (e.currentTarget.style.overflowY = "hidden")}>
					{data.map(({ title, items }) => {
						return (
							<div className="delimiter" style={{ paddingTop: 15, paddingBottom: 15 }}>
								{title !== "" && (
									<div
										style={{
											paddingLeft: "23px",
											fontWeight: "bold",
											opacity: "80%",
											fontSize: 15,
											paddingBottom: 5,
										}}>
										{title}
									</div>
								)}
								{items.map(({ image, itemName }) => {
									return (
										<div
											onMouseEnter={changeBackground}
											onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "inherit")}
											style={{
												display: "flex",
												color: "white",
												alignItems: "center",
												paddingLeft: "23px",
												paddingTop: "10px",
												paddingBottom: "10px",
												cursor: "pointer",
											}}>
											<img
												src={image}
												style={{
													height: "25px",
													width: "25px",
													borderRadius: title !== "" ? "50%" : "",
												}}
												alt=""
											/>
											<div
												style={{
													paddingLeft: "25px",
													fontSize: 16,
													fontWeight: "400",
												}}>
												{itemName}
											</div>
										</div>
									);
								})}
							</div>
						);
					})}

					<div className="links">
						<ul>
							<li>About</li>
							<li>Press</li>
							<li>Copyright</li>
							<li>Contact us</li>
							<li>Creators</li>
							<li>Advertise</li>
							<li>Developers</li>
						</ul>
					</div>
					<div className="links">
						<ul>
							<li>Terms</li>
							<li>Privacy</li>
							<li>Policy & Safety</li>
							<li>How YouTube works</li>
							<li>Test new features</li>
						</ul>
					</div>
					<div className="copyright">© 2021 Google LLC</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						className="slider"
						style={{
							display: "flex",
							alignItems: "center",
							width: "calc(100vw - 240px)",
							height: "55px",
							borderTop: "1px solid grey",
							borderBottom: "1px solid grey",
						}}>
						{sliderData.map((i) => {
							return (
								<div
									style={{
										display: "flex",
										alignItems: "center",
										paddingLeft: "10px",
										paddingRight: "10px",
										whiteSpace: "nowrap",
										textOverflow: "ellipsis",
										height: "35px",
										color: "white",
										border: "1px solid rgba(93, 93, 93, 0.5)",
										borderRadius: "110px",
										marginLeft: "25px",
										backgroundColor: "rgba(93, 93, 93, 0.5)",
									}}>
									{i}
								</div>
							);
						})}
					</div>
					<div
						className="rightCol"
						style={{ display: "flex", height: "calc(100vh - 56px)", width: "calc(100vw - 240px)" }}>
						<div
							className="videoListContainer"
							style={{
								display: "flex",
								margin: "20px 20px 20px 20px",
								height: "250px",
								width: "calc(100vw - 280px)",
							}}>
							<div className="videoContainer" style={{ display: "flex", flexDirection: "column" }}>
								<div className="videoPreview"></div>
								<div className="videoTitle"></div>
								<div className="channelName"></div>
								<div className="timeline"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
