import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect, useState } from "react";

type DateTimeSelectorProps = {
    className?: string;
    date: Date | null;
    onChange: (newValue: Date | null) => void;
};

const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({ className, date, onChange }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(date);

    useEffect(() => {
        setSelectedDate(date);
    }, [date]);

    const handleChange = (newDate: Date | null) => {
        setSelectedDate(newDate);
        onChange(newDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimeField
                value={selectedDate ?? null}
                onChange={handleChange}
                slotProps={{
                    textField: {
                        className,
                        fullWidth: true,
                        required: true,
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default DateTimeSelector;
