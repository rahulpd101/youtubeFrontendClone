import React from "react";
import "./App.css";
import { Create, Logo, MoreOptions, NotificationBell, SearchIcon, YoutubeApps } from "./assets";
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
				<LeftCol />
				<RightCol />
			</div>
		</div>
	);
};

export default App;
