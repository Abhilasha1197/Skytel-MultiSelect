import React, { useState } from "react";
import "./Multiselect.css";
const options = [
	{ value: "Australia", label: "Australia" },
	{ value: "India", label: "India" },
	{ value: "Bermuda", label: "Bermuda" },
	{ value: "Canada", label: "Canada" },
	{ value: "America", label: "America" },
	{ value: "Brazil", label: "Brazil" },
	{ value: "France", label: "France" },
	{ value: "Denmark", label: "Denmark" },
	{ value: "Germany", label: "Germany" },
];

const Multiselect = ({ value, readonly }) => {
	const [selectedValues, setSelectedValues] = useState(value || []);
	const [open, setOpen] = useState(false);

	const handleCheckboxChange = (optionValue) => {
		if (selectedValues.includes(optionValue)) {
			setSelectedValues(
				selectedValues.filter((value) => value !== optionValue)
			);
		} else {
			setSelectedValues([...selectedValues, optionValue]);
		}
	};

	return (
		<div className="multiselect">
			<div
				className="selected-values"
				onClick={() => readonly || setOpen((open) => !open)}
			>
				{selectedValues.length === 0
					? "Select Options"
					: selectedValues.join(", ")}
			</div>
			{!readonly && open && (
				<div className="dropdown-list">
					{options.map((option) => (
						<label
							key={option.value}
							className="dropdown-option"
						>
							<input
								type="checkbox"
								value={option.value}
								checked={selectedValues.includes(option.value)}
								onChange={() => handleCheckboxChange(option.value)}
							/>
							{option.label}
						</label>
					))}
				</div>
			)}
		</div>
	);
};

export default Multiselect;
