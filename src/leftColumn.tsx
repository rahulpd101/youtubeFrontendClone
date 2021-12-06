import React, { MouseEvent } from "react";
import "./App.css";
import { data } from "./data";

const LeftCol: React.FC = () => {
	const changeBackground = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		if (e.currentTarget) {
			e.currentTarget.style.backgroundColor = "darkgray";
		}
	};

	return (
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
	);
};
export default LeftCol;
