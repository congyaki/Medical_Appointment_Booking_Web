import React, { useState } from 'react';
import dayjs from 'dayjs';
import { generateDate, months } from '../../utils/calendar';
import cn from '../../utils/cn';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import '../../styles/Calendar.scss';

export default function Calendar({ onNextClick, onBackClick }) {
	const days = ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const times = [
		'09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
		'11:00 AM', '11:30 AM', '14:00 PM', '14:30 PM',
		'15:00 PM', '15:30 PM', '16:00 PM', '16:30 PM'
	];

	return (
		<div className="calendar-container">
			<div className="calendar">
				<div className="header">
					<SlArrowLeft
						className="icon"
						onClick={() => {
							setToday(today.month(today.month() - 1));
						}}
					/>
					<h1 className="month-year">
						{months[today.month()]}, {today.year()}
					</h1>
					<SlArrowRight
						className="icon"
						onClick={() => {
							setToday(today.month(today.month() + 1));
						}}
					/>
				</div>
				<div className="days">
					{days.map((day, index) => (
						<h1
							key={index}
							className={`day ${index === 0 ? 'sunday' : index === 6 ? 'saturday' : ''}`}
						>
							{day}
						</h1>
					))}
				</div>

				<div className="dates">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => (
							<div key={index} className="date">
								<h1
									className={cn(
										"date-number",
										currentMonth ? "current-month" : "other-month",
										today ? "today" : "",
										selectDate && selectDate.toDate().toDateString() === date.toDate().toDateString() ? "selected" : ""
									)}
									onClick={() => {
										setSelectDate(date);
									}}
								>
									{date.date()}
								</h1>
							</div>
						)
					)}
				</div>
				{selectDate && (
					<div className="time-selector">
						<div className="time-buttons">
							{times.map((time, index) => (
								<button
									key={index}
									className={selectedTime === time ? 'selected' : ''}
									onClick={() => setSelectedTime(time)}
								>
									{time}
								</button>
							))}
						</div>
						<button className="next-button" onClick={onNextClick} >NEXT</button>
						<button onClick={onBackClick} className='back'>Back</button>
					</div>
				)}
			</div>
		</div>
	);
}
