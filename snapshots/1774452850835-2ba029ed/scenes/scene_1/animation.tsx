import React from 'react';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

const Avatar: React.FC<{size: number}> = ({size}) => (
	<div
		style={{
			width: size,
			height: size,
			borderRadius: '50%',
			background:
				'radial-gradient(circle at 45% 35%, #eec7ad 0 22%, #d29c7d 23% 33%, #1d140f 34% 58%, #0d0d0d 59% 100%)',
			boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15)',
			flexShrink: 0,
		}}
	/>
);

const IconClock: React.FC<{size?: number; color?: string}> = ({
	size = 16,
	color = '#5f5f5f',
}) => (
	<div
		style={{
			width: size,
			height: size,
			borderRadius: '50%',
			border: `2px solid ${color}`,
			position: 'relative',
			boxSizing: 'border-box',
		}}
	>
		<div
			style={{
				position: 'absolute',
				left: size / 2 - 1,
				top: 3,
				width: 2,
				height: size / 2 - 2,
				backgroundColor: color,
				borderRadius: 2,
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: size / 2 - 1,
				top: size / 2 - 1,
				width: size / 4,
				height: 2,
				backgroundColor: color,
				transformOrigin: 'left center',
				borderRadius: 2,
			}}
		/>
	</div>
);

const IconVideo: React.FC<{size?: number; color?: string}> = ({
	size = 16,
	color = '#5f5f5f',
}) => (
	<div style={{display: 'flex', alignItems: 'center'}}>
		<div
			style={{
				width: size,
				height: size - 4,
				border: `2px solid ${color}`,
				borderRadius: 2,
				boxSizing: 'border-box',
				position: 'relative',
			}}
		>
			<div
				style={{
					position: 'absolute',
					right: -6,
					top: 2,
					width: 0,
					height: 0,
					borderTop: '4px solid transparent',
					borderBottom: '4px solid transparent',
					borderLeft: `6px solid ${color}`,
				}}
			/>
		</div>
	</div>
);

const IconCalendar: React.FC<{size?: number; color?: string}> = ({
	size = 16,
	color = '#5f5f5f',
}) => (
	<div
		style={{
			width: size,
			height: size,
			border: `2px solid ${color}`,
			borderRadius: 3,
			boxSizing: 'border-box',
			position: 'relative',
		}}
	>
		<div
			style={{
				position: 'absolute',
				left: 0,
				top: 4,
				right: 0,
				height: 2,
				backgroundColor: color,
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 3,
				top: -3,
				width: 2,
				height: 5,
				backgroundColor: color,
				borderRadius: 2,
			}}
		/>
		<div
			style={{
				position: 'absolute',
				right: 3,
				top: -3,
				width: 2,
				height: 5,
				backgroundColor: color,
				borderRadius: 2,
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 4,
				top: 9,
				width: 3,
				height: 3,
				backgroundColor: color,
				borderRadius: 1,
			}}
		/>
	</div>
);

const ArrowLeft: React.FC = () => (
	<div
		style={{
			width: 10,
			height: 10,
			borderLeft: '2px solid #6e6e6e',
			borderBottom: '2px solid #6e6e6e',
			transform: 'rotate(45deg)',
		}}
	/>
);

const ArrowRight: React.FC = () => (
	<div
		style={{
			width: 10,
			height: 10,
			borderRight: '2px solid #6e6e6e',
			borderTop: '2px solid #6e6e6e',
			transform: 'rotate(45deg)',
		}}
	/>
);

const Field: React.FC<{label: string; value: string; width: number}> = ({
	label,
	value,
	width,
}) => (
	<div style={{width}}>
		<div
			style={{
				fontSize: 18,
				color: '#383838',
				marginBottom: 8,
				fontWeight: 500,
			}}
		>
			{label}
			<span style={{color: '#c47070'}}>*</span>
		</div>
		<div
			style={{
				height: 44,
				border: '2px solid #e3e0db',
				backgroundColor: '#fff',
				boxSizing: 'border-box',
				padding: '10px 16px',
				fontSize: 16,
				color: '#757575',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			{value}
		</div>
	</div>
);

const Card: React.FC<{children: React.ReactNode; height?: number}> = ({
	children,
	height,
}) => (
	<div
		style={{
			border: '2px solid #ece7df',
			borderRadius: 14,
			backgroundColor: '#fff',
			boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
			padding: 22,
			height,
			boxSizing: 'border-box',
		}}
	>
		{children}
	</div>
);

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const bump = (frame: number, start: number, mid: number, end: number) => {
	if (frame <= start || frame >= end) {
		return 0;
	}
	if (frame <= mid) {
		return interpolate(frame, [start, mid], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.cubic),
		});
	}
	return interpolate(frame, [mid, end], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.cubic),
	});
};

const mixPoint = (
	frame: number,
	start: number,
	end: number,
	from: {x: number; y: number},
	to: {x: number; y: number},
) => {
	const t = interpolate(frame, [start, end], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.cubic),
	});
	return {
		x: from.x + (to.x - from.x) * t,
		y: from.y + (to.y - from.y) * t,
	};
};

const Cursor: React.FC<{
	x: number;
	y: number;
	opacity: number;
	scale?: number;
	click?: number;
}> = ({x, y, opacity, scale = 1, click = 0}) => {
	const clickScale = 1 - click * 0.12;
	return (
		<div
			style={{
				position: 'absolute',
				left: x,
				top: y,
				transform: `translate(-6px, -4px) scale(${scale * clickScale}) rotate(-10deg)`,
				transformOrigin: '8px 6px',
				opacity,
				filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.18))',
				pointerEvents: 'none',
			}}
		>
			<svg width="38" height="48" viewBox="0 0 38 48">
				<path
					d="M5 3 L28 23 L18 26 L24 43 L18 45 L12 28 L5 36 Z"
					fill="#ffffff"
					stroke="#111111"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

const ClickRing: React.FC<{x: number; y: number; strength: number}> = ({x, y, strength}) => {
	if (strength <= 0) {
		return null;
	}
	const size = 16 + strength * 26;
	return (
		<div
			style={{
				position: 'absolute',
				left: x - size / 2,
				top: y - size / 2,
				width: size,
				height: size,
				borderRadius: '50%',
				border: `2px solid rgba(242,165,143,${0.65 - strength * 0.35})`,
				opacity: 0.8 - strength * 0.45,
				boxSizing: 'border-box',
			}}
		/>
	);
};

const TimeButton: React.FC<{
	label: string;
	left: number;
	top: number;
	selected?: boolean;
	focus: number;
}> = ({label, left, top, selected = false, focus}) => {
	const scale = 1 + focus * 0.04;
	const border = selected ? '#e3b5a7' : '#cfc7bf';
	return (
		<div
			style={{
				position: 'absolute',
				left,
				top,
				width: 198,
				height: 66,
				border: `3px solid ${border}`,
				backgroundColor: `rgba(242,165,143,${selected ? 0.12 + focus * 0.14 : focus * 0.08})`,
				boxSizing: 'border-box',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: 28,
				fontWeight: 600,
				color: '#222',
				transform: `scale(${scale})`,
				transformOrigin: 'center center',
				boxShadow: `0 ${8 * focus}px ${22 * focus}px rgba(0,0,0,${0.10 * focus})`,
				opacity: 1 - focus * 0.02,
			}}
		>
			{label}
		</div>
	);
};

const ChooseTimeLayout: React.FC<{frame: number}> = ({frame}) => {
	const introLeft = interpolate(frame, [0, 16], [28, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});
	const introRight = interpolate(frame, [4, 20], [36, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});
	const introOpacity = interpolate(frame, [0, 12], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const dayFocus = bump(frame, 14, 20, 28);
	const slotFocus = bump(frame, 34, 42, 55);

	const days = Array.from({length: 8}).map((_, i) => i + 1);
	const dottedDays = [4, 5, 6, 10, 11, 12];

	return (
		<div
			style={{
				position: 'absolute',
				inset: 0,
				opacity: introOpacity,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 212,
					top: 92 + introLeft,
					width: 520,
					height: 794,
					borderRadius: 18,
					backgroundColor: '#ffffff',
					border: '1px solid #e7ddd3',
					boxShadow: '0 14px 40px rgba(85,57,35,0.08)',
					boxSizing: 'border-box',
					padding: '34px 34px 28px 34px',
					color: '#181818',
				}}
			>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<Avatar size={58} />
					<div style={{marginLeft: 22}}>
						<div style={{fontSize: 24, fontWeight: 700}}>Meeting with Kais Khimji</div>
						<div style={{display: 'flex', alignItems: 'center', marginTop: 8}}>
							<div
								style={{
									width: 14,
									height: 14,
									borderRadius: '50%',
									border: '1.5px solid rgba(0,0,0,0.35)',
									marginRight: 8,
									boxSizing: 'border-box',
								}}
							/>
							<div style={{fontSize: 14, color: 'rgba(0,0,0,0.58)'}}>Kais Khimji</div>
						</div>
					</div>
				</div>

				<div style={{marginTop: 36, display: 'flex', alignItems: 'center', gap: 12}}>
					<IconClock color="rgba(0,0,0,0.42)" size={18} />
					<div style={{fontSize: 18, color: 'rgba(0,0,0,0.68)'}}>30 minutes</div>
				</div>

				<div style={{marginTop: 22, display: 'flex', alignItems: 'center', gap: 12}}>
					<IconVideo color="rgba(0,0,0,0.42)" size={18} />
					<div style={{fontSize: 18, color: 'rgba(0,0,0,0.68)'}}>Video call</div>
				</div>

				<div
					style={{
						height: 1,
						backgroundColor: '#eee5dc',
						marginTop: 28,
					}}
				/>

				<div
					style={{
						marginTop: 30,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div style={{fontSize: 18, color: '#2c2c2c'}}>February 2026</div>
					<div style={{fontSize: 16, color: 'rgba(0,0,0,0.45)'}}>7 available days</div>
				</div>

				<div
					style={{
						marginTop: 26,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<ArrowLeft />
					<div style={{fontSize: 22, color: '#363636'}}>February 2026</div>
					<ArrowRight />
				</div>

				<div
					style={{
						marginTop: 28,
						display: 'grid',
						gridTemplateColumns: 'repeat(7, 1fr)',
						rowGap: 16,
						columnGap: 16,
						fontSize: 18,
						color: 'rgba(0,0,0,0.26)',
						textAlign: 'center',
					}}
				>
					{['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
						<div key={d}>{d}</div>
					))}
					{days.map((day) => {
						const selected = day === 10;
						const available = dottedDays.includes(day);
						const scale = selected ? 1 + dayFocus * 0.08 : 1;
						return (
							<div
								key={day}
								style={{
									width: 46,
									height: 46,
									justifySelf: 'center',
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									borderRadius: 0,
									backgroundColor: selected ? `rgba(242,165,143,${0.95 - dayFocus * 0.08})` : 'transparent',
									color: selected ? '#ffffff' : available ? 'rgba(221,130,105,0.95)' : 'rgba(0,0,0,0.16)',
									fontSize: 18,
									fontWeight: selected ? 700 : 500,
									transform: `scale(${scale})`,
									transformOrigin: 'center center',
									opacity: selected ? 1 : 0.9,
								}}
							>
								{day}
								{available && !selected ? (
									<div
										style={{
											position: 'absolute',
											bottom: -1,
											left: '50%',
											width: 6,
											height: 6,
											borderRadius: '50%',
											backgroundColor: '#2559a8',
											transform: 'translateX(-50%)',
										}}
									/>
								) : null}
							</div>
						);
					})}
				</div>

				<div style={{marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8}}>
					<div
						style={{
							width: 10,
							height: 10,
							borderRadius: '50%',
							backgroundColor: '#2559a8',
						}}
					/>
					<div style={{fontSize: 17, color: 'rgba(0,0,0,0.52)'}}>Available</div>
				</div>

				<div style={{marginTop: 34, fontSize: 18, color: '#272727'}}>Time zone</div>
				<div
					style={{
						marginTop: 12,
						height: 54,
						border: '2px solid #e1d8cf',
						padding: '0 16px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						boxSizing: 'border-box',
						fontSize: 17,
						color: '#575757',
					}}
				>
					<div>America/Los_Angeles</div>
					<div style={{fontSize: 12, color: '#9a9a9a'}}>⌄</div>
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					left: 816,
					top: 92 + introRight,
					width: 920,
					color: '#121212',
				}}
			>
				<div style={{fontSize: 72, fontWeight: 500, letterSpacing: 0.2, lineHeight: 1.02}}>
					Choose a time
				</div>
				<div
					style={{
						fontSize: 24,
						marginTop: 14,
						color: 'rgba(0,0,0,0.48)',
						maxWidth: 900,
						lineHeight: 1.28,
					}}
				>
					Select a time that works best for you. Click a date on the calendar to see available slots.
				</div>

				<div
					style={{
						marginTop: 74,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: 900,
					}}
				>
					<div style={{fontSize: 32, fontWeight: 700, letterSpacing: 3.2}}>
						TUESDAY, FEBRUARY 10, 2026
					</div>
					<div style={{display: 'flex', gap: 44, alignItems: 'center'}}>
						<ArrowLeft />
						<ArrowRight />
					</div>
				</div>

				<div style={{marginTop: 60, fontSize: 18, fontWeight: 700, letterSpacing: 1}}>AFTERNOON</div>

				<TimeButton label="1:00pm" left={0} top={220} focus={0} />
				<TimeButton label="2:00pm" left={228} top={220} selected focus={slotFocus} />
				<TimeButton label="2:30pm" left={456} top={220} focus={0} />
				<TimeButton label="3:00pm" left={684} top={220} focus={0} />
				<TimeButton label="3:30pm" left={0} top={300} focus={0} />

				<div style={{marginTop: 206, fontSize: 18, fontWeight: 700, letterSpacing: 1}}>LATER</div>
				<TimeButton label="4:00pm" left={0} top={446} focus={0} />
				<TimeButton label="4:30pm" left={228} top={446} focus={0} />
			</div>
		</div>
	);
};

const RescheduleModal: React.FC<{frame: number}> = ({frame}) => {
	const modalOpacity = interpolate(frame, [52, 67], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});
	const modalScale = interpolate(frame, [52, 67], [0.965, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});
	const modalBlur = interpolate(frame, [52, 66], [18, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const cardY = interpolate(frame, [54, 68], [18, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});
	return (
		<div
			style={{
				position: 'absolute',
				left: 540,
				top: 160 + cardY,
				width: 840,
				height: 676,
				backgroundColor: '#fff',
				border: '1px solid #e9e4dd',
				boxShadow: '0 18px 60px rgba(0,0,0,0.16)',
				boxSizing: 'border-box',
				transform: `scale(${modalScale})`,
				transformOrigin: 'center center',
				opacity: modalOpacity,
				filter: `blur(${modalBlur}px)`,
			}}
		>
			<div
				style={{
					height: 78,
					borderBottom: '1px solid #f0ebe5',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '0 22px',
					boxSizing: 'border-box',
				}}
			>
				<div style={{fontSize: 24, fontWeight: 700, color: '#1b1b1b'}}>Reschedule Meeting</div>
				<div
					style={{
						fontSize: 38,
						lineHeight: 1,
						color: '#9b9b9b',
						fontWeight: 300,
					}}
				>
					×
				</div>
			</div>

			<div style={{padding: 18, boxSizing: 'border-box'}}>
				<Card height={190}>
					<div style={{display: 'flex', alignItems: 'center'}}>
						<Avatar size={50} />
						<div style={{marginLeft: 18}}>
							<div style={{fontSize: 20, fontWeight: 700, color: '#1f1f1f'}}>
								Meeting with Kais Khimji
							</div>
							<div
								style={{
									marginTop: 6,
									display: 'flex',
									alignItems: 'center',
									color: '#5f5f5f',
									fontSize: 16,
								}}
							>
								<div
									style={{
										width: 14,
										height: 14,
										borderRadius: '50%',
										border: '1.5px solid #7d7d7d',
										marginRight: 8,
										boxSizing: 'border-box',
									}}
								/>
								Kais Khimji
							</div>
						</div>
					</div>

					<div
						style={{
							height: 1,
							backgroundColor: '#f2ede7',
							marginTop: 18,
							marginLeft: -22,
							marginRight: -22,
						}}
					/>

					<div
						style={{
							marginTop: 16,
							display: 'flex',
							alignItems: 'center',
							gap: 14,
							color: '#4e4e4e',
							fontSize: 16,
							flexWrap: 'wrap',
						}}
					>
						<div style={{display: 'flex', alignItems: 'center', gap: 8}}>
							<IconCalendar size={15} />
							<span>Wednesday, Feb 4, 2026</span>
						</div>
						<div style={{display: 'flex', alignItems: 'center', gap: 8}}>
							<IconClock size={15} />
							<span>11:00am PST - 11:30am PST (30 minutes)</span>
						</div>
						<div style={{display: 'flex', alignItems: 'center', gap: 8}}>
							<IconVideo size={15} />
							<span>Video Call</span>
						</div>
					</div>

					<div
						style={{
							marginTop: 16,
							fontSize: 12,
							fontWeight: 700,
							color: '#393939',
							letterSpacing: 0.3,
						}}
					>
						RESCHEDULING
					</div>
				</Card>

				<div style={{height: 30}} />

				<Card height={226}>
					<div style={{fontSize: 22, fontWeight: 700, color: '#222'}}>Attendee Information</div>
					<div style={{display: 'flex', gap: 8, marginTop: 28}}>
						<Field label="Your name" value="Francesco D'Alessio" width={377} />
						<Field
							label="Email address"
							value="francesco@keepproductive.com"
							width={377}
						/>
					</div>
					<div
						style={{
							marginTop: 20,
							fontSize: 18,
							color: '#444',
							fontWeight: 500,
						}}
					>
						+ Add Another Attendee
					</div>
				</Card>

				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						gap: 48,
						marginTop: 54,
						paddingRight: 2,
					}}
				>
					<div style={{fontSize: 18, color: '#333'}}>Cancel</div>
					<div
						style={{
							height: 44,
							padding: '0 30px',
							backgroundColor: '#f2a58f',
							border: '2px solid #d59584',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: 18,
							color: '#4a2f27',
							boxSizing: 'border-box',
						}}
					>
						Reschedule Meeting
					</div>
				</div>
			</div>
		</div>
	);
};

export const Scene: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const open = spring({
		fps,
		frame,
		config: {
			damping: 200,
			stiffness: 120,
			mass: 0.9,
		},
	});

	const cameraScale = interpolate(frame, [0, 48, 90], [0.982, 1, 1.018], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const chooseOpacity = interpolate(frame, [0, 6, 54, 66], [0, 1, 1, 0.28], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const chooseBlur = interpolate(frame, [50, 66], [0, 12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const dimOpacity = interpolate(frame, [50, 66], [0, 0.42], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const cursorVisible = clamp01(interpolate(frame, [10, 14, 54, 58], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	}));

	const start = {x: 462, y: 424};
	const dayPick = {x: 465, y: 516};
	const slotPick = {x: 1152, y: 348};

	let cursor = start;
	if (frame < 24) {
		cursor = mixPoint(frame, 12, 24, start, dayPick);
	} else if (frame < 42) {
		cursor = mixPoint(frame, 28, 42, dayPick, slotPick);
	} else {
		cursor = slotPick;
	}

	const dayClick = bump(frame, 20, 23, 28);
	const slotClick = bump(frame, 40, 43, 49);
	const cursorClick = Math.max(dayClick, slotClick);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#f6f1eb',
				fontFamily:
					'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				overflow: 'hidden',
			}}
		>
			{/* TRANSPILED_SHOWCASE_SCENE_2 */}
			{/* COMPONENT_REFERENCE_ID:82880697-8cf2-4f5c-8429-ce1de8aaa4ca */}

			<div
				style={{
					position: 'absolute',
					inset: -120,
					background:
						'radial-gradient(circle at 22% 24%, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 26%, rgba(246,241,235,0.18) 56%), radial-gradient(circle at 74% 20%, rgba(244,226,214,0.28) 0%, rgba(244,226,214,0.06) 34%, transparent 60%), linear-gradient(180deg, #fbf8f5 0%, #f2ece5 100%)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0) 18%, rgba(95,67,44,0.03) 100%)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					transform: `scale(${cameraScale + open * 0.004})`,
					transformOrigin: 'center center',
				}}
			>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						opacity: chooseOpacity,
						filter: `blur(${chooseBlur}px)`,
					}}
				>
					<ChooseTimeLayout frame={frame} />
				</div>

				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: `rgba(33,24,18,${dimOpacity})`,
					}}
				/>

				<RescheduleModal frame={frame} />
			</div>

			<Cursor x={cursor.x} y={cursor.y} opacity={cursorVisible} scale={1.02} click={cursorClick} />
			<ClickRing x={dayPick.x} y={dayPick.y} strength={dayClick} />
			<ClickRing x={slotPick.x} y={slotPick.y} strength={slotClick} />
		</AbsoluteFill>
	);
};

export default Scene;