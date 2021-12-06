import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { ForwardCounter, PreviousCounter } from "./assets";
import { sliderData } from "./data";

const RightCol: React.FC = () => {
	const [leftVisible, setLeftVisible] = useState(false);
	const [rightVisible, setRightVisible] = useState(true);
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
					<img onClick={moveLeft} className="backwardCounter" src={PreviousCounter} alt="Previous" />
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
								className="sliderItem"
								style={{
									display: "flex",
								}}>
								{item}
							</div>
						);
					})}
				</div>
				{rightVisible && (
					<img onClick={moveRight} className="forwardCounter" src={ForwardCounter} alt="Next" />
				)}
			</div>
			<div
				className="container"
				style={{
					display: "flex",
					height: "calc(100vh - 114px)",
					width: "calc(100vw - 240px)",
					overflowY: "hidden",
				}}>
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
	);
};
export default RightCol;
