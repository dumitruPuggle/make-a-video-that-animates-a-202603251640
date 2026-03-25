import React from 'react';
import {AbsoluteFill} from 'remotion';

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

export const ScreenshotRecreation: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#7a7775',
				fontFamily:
					'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundColor: 'rgba(255,255,255,0.10)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 315,
					top: 29,
					width: 430,
					height: 753,
					borderRadius: 10,
					backgroundColor: 'rgba(255,255,255,0.12)',
					border: '1px solid rgba(0,0,0,0.08)',
					boxSizing: 'border-box',
					padding: '34px 32px',
					color: 'rgba(0,0,0,0.55)',
				}}
			>
				<div style={{fontSize: 18, fontWeight: 700, letterSpacing: 0.2}}>
					RESCHEDULING MEETING
				</div>
				<div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
					<Avatar size={50} />
					<div style={{marginLeft: 22}}>
						<div style={{fontSize: 18, fontWeight: 700, color: 'rgba(0,0,0,0.6)'}}>
							Meeting with Kais Khimji
						</div>
						<div style={{display: 'flex', alignItems: 'center', marginTop: 6}}>
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
							<div style={{fontSize: 14}}>Kais Khimji</div>
						</div>
					</div>
				</div>
				<div style={{marginTop: 26, display: 'flex', alignItems: 'center', gap: 10}}>
					<IconClock color="rgba(0,0,0,0.38)" />
					<div style={{fontSize: 16}}>30 minutes</div>
				</div>
				<div style={{marginTop: 24, display: 'flex', alignItems: 'center', gap: 10}}>
					<IconVideo color="rgba(0,0,0,0.38)" />
					<div style={{fontSize: 16}}>Video call</div>
				</div>
				<div
					style={{
						height: 1,
						backgroundColor: 'rgba(0,0,0,0.08)',
						marginTop: 28,
						marginLeft: -32,
						marginRight: -32,
					}}
				/>
				<div style={{marginTop: 26, fontSize: 17, color: 'rgba(0,0,0,0.62)'}}>
					February 2026
				</div>
				<div
					style={{
						marginTop: 20,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: 180,
					}}
				>
					<ArrowLeft />
					<div style={{fontSize: 16}}>February 2026</div>
					<ArrowRight />
				</div>
				<div
					style={{
						marginTop: 28,
						display: 'grid',
						gridTemplateColumns: 'repeat(7, 1fr)',
						rowGap: 22,
						columnGap: 18,
						width: 180,
						opacity: 0.5,
						fontSize: 16,
					}}
				>
					{['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
						<div key={d}>{d}</div>
					))}
					{Array.from({length: 8}).map((_, i) => {
						const day = i + 1;
						const selected = day === 4;
						return (
							<div
								key={day}
								style={{
									width: 24,
									height: 24,
									borderRadius: 6,
									backgroundColor: selected ? 'rgba(212,110,86,0.55)' : 'transparent',
									color: selected ? '#fff' : 'rgba(0,0,0,0.35)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								{day}
							</div>
						);
					})}
				</div>
				<div style={{marginTop: 36, fontSize: 16}}>Time zone</div>
				<div
					style={{
						marginTop: 12,
						width: 220,
						height: 44,
						border: '1px solid rgba(0,0,0,0.15)',
						display: 'flex',
						alignItems: 'center',
						paddingLeft: 14,
						fontSize: 16,
						boxSizing: 'border-box',
					}}
				>
					America/Los_Angeles
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					left: 785,
					top: 30,
					width: 720,
					color: 'rgba(0,0,0,0.65)',
				}}
			>
				<div style={{fontSize: 46, fontWeight: 500, letterSpacing: 0.2}}>
					Reschedule meeting
				</div>
				<div
					style={{
						fontSize: 22,
						marginTop: 8,
						color: 'rgba(0,0,0,0.45)',
					}}
				>
					Select a new time for your meeting. Click a date on the calendar to see available slots.
				</div>
				<div
					style={{
						marginTop: 62,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: 720,
					}}
				>
					<div style={{fontSize: 24, fontWeight: 700, letterSpacing: 2}}>
						WEDNESDAY, FEBRUARY 4, 2026
					</div>
					<div style={{display: 'flex', gap: 36, alignItems: 'center', marginRight: 8}}>
						<div
							style={{
								width: 28,
								height: 28,
								borderRadius: 4,
								backgroundColor: 'rgba(255,255,255,0.18)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<ArrowLeft />
						</div>
						<ArrowRight />
					</div>
				</div>
				<div style={{marginTop: 38, fontSize: 16, fontWeight: 700, letterSpacing: 1}}>
					MORNING
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					left: 520,
					top: 242,
					width: 782,
					height: 638,
					backgroundColor: '#fff',
					border: '1px solid #e9e4dd',
					boxShadow: '0 10px 35px rgba(0,0,0,0.12)',
					boxSizing: 'border-box',
				}}
			>
				<div
					style={{
						height: 74,
						borderBottom: '1px solid #f0ebe5',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '0 20px',
						boxSizing: 'border-box',
					}}
				>
					<div style={{fontSize: 22, fontWeight: 700, color: '#1b1b1b'}}>
						Reschedule Meeting
					</div>
					<div
						style={{
							fontSize: 36,
							lineHeight: 1,
							color: '#9b9b9b',
							fontWeight: 300,
						}}
					>
						×
					</div>
				</div>

				<div style={{padding: 18, boxSizing: 'border-box'}}>
					<Card height={188}>
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
							<Field label="Your name" value="Francesco D'Alessio" width={348} />
							<Field
								label="Email address"
								value="francesco@keepproductive.com"
								width={348}
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
							marginTop: 52,
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
		</AbsoluteFill>
	);
};

export default ScreenshotRecreation;