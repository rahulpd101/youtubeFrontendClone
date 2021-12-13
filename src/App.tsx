import React from "react";
import "./App.css";
import { Create, Logo, MoreOptions, NotificationBell, SearchIcon, VoiceSearch, YoutubeApps } from "./assets";
import LeftCol from "./leftColumn";
import RightCol from "./RightColumn";

const App: React.FC = () => {
	return (
		<div className="App">
			<div className="header">
				<div
					style={{
						display: "flex",
						height: "25px",
						width: "140px",
						marginLeft: "10px",
					}}>
					<MoreOptions style={{ width: "50px" }} />
					<Logo style={{ width: "90px" }} />
				</div>
				<div className="searchBarContainer">
					<div className="searchBar">
						<input placeholder="Search" />
						<SearchIcon />
					</div>
					<div className="voiceInput" aria-label="Search with your voice">
						<VoiceSearch style={{ height: 25, width: 25 }} />
					</div>
				</div>
				<div className="headerButtons">
					<Create />
					<YoutubeApps />
					<NotificationBell />
				</div>
			</div>
			<div style={{ display: "flex" }}>
				<LeftCol />
				<RightCol />
			</div>
		</div>
	);
};

export default App;
