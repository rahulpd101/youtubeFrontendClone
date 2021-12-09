import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { ForwardCounter, PreviousCounter } from "./assets";
import { sliderData, videoData } from "./data";

const RightCol: React.FC = () => {
	const [leftVisible, setLeftVisible] = useState(false);
	const [rightVisible, setRightVisible] = useState(true);
	const [selectedItem, setselectedItem] = useState(sliderData[0]);

	const sliderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	useEffect(() => {
		const currentRef = sliderRef.current;
		if (!currentRef) return;

		if (currentRef) {
			currentRef.addEventListener("scroll", () => {
				const end = currentRef.scrollWidth - currentRef.getBoundingClientRect().width - 8;
				console.log(end);
				setLeftVisible(currentRef.scrollLeft !== 0);
				setRightVisible(currentRef.scrollLeft <= end);
			});
		}
	}, [sliderRef]);

	const moveLeft = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft -= 200;
		console.log("movedLeft");
	}, [sliderRef]);

	const moveRight = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft += 200;
		console.log("movedRight");
	}, [sliderRef]);

	return (
		<div className="rightCol" style={{ display: "flex", flexDirection: "column" }}>
			<div className="sliderContainer" style={{ display: "flex", alignItems: "center" }}>
				{leftVisible && (
					<div className="backwardCounter">
						<img onClick={moveLeft} src={PreviousCounter} alt="Previous" />
					</div>
				)}
				<div
					ref={sliderRef}
					className="slider"
					style={{
						display: "flex",
					}}>
					{sliderData.map((item) => {
						return (
							<div
								onClick={() => {
									setselectedItem(item);
								}}
								className={selectedItem === item ? "sliderItem active" : "sliderItem"}
								style={{
									display: "flex",
								}}>
								{item}
							</div>
						);
					})}
				</div>
				{rightVisible && (
					<div className="forwardCounter">
						<img onClick={moveRight} src={ForwardCounter} alt="Next" />
					</div>
				)}
			</div>
			<div
				className="container"
				style={{
					display: "flex",
					height: "calc(100vh - 114px)",
					width: "calc(100vw - 240px)",
					overflowY: "auto",
				}}>
				<div
					className="videoListContainer"
					style={{
						display: "flex",
						margin: "20px",
						height: "820px",
						width: "calc(100vw - 280px)",
					}}>
					{videoData.map(({ videoPreview, channelLogo, videoTitle, channelName, views, timeOfPost }) => {
						return (
							<div
								className="videoContainer"
								style={{ display: "flex", flexDirection: "column", marginRight: 20 }}>
								<video
									key={videoPreview}
									className="videoPreview"
									// onMouseOver={(e) => e.target.play()}
									// onMouseOut={(e) => e.target.pause()}
									src={videoPreview}
								/>
								<div style={{ display: "flex", paddingTop: "10px" }}>
									<img
										style={{ borderRadius: "50%", height: 35, width: 35 }}
										src={channelLogo}
										alt="channel Logo"
									/>
									<div style={{ display: "flex", width: 350, flexDirection: "column", marginLeft: 10 }}>
										<div className="videoTitle">{videoTitle}</div>
										<div className="channelName">{channelName}</div>
										<div className="timeline">
											{views} • {timeOfPost}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default RightCol;
