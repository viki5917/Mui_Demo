// import { Stack, TextField } from "@mui/material";

// import { DatePicker, TimePicker, DateTimePicker } from "@mui/lab";

// import { useState } from "react";

// export const MuiPicker = () => {
//   // State to handle date
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   console.log({ selectedDate });

//   //State to handle time
//   const [selectedTime, setSelectedTime] = useState<Date | null>(null);
//   console.log({ selectedTime });
//   console.log({
//     selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
//   });

//   //State to handle both Date and Time
//   const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
//   console.log({ selectedDateTime });

//   return (
//     <Stack spacing={4} sx={{ width: "250px" }}>
//       {/* Date picker */}
//       <DatePicker
//         label="Date Picker"
//         renderInput={(params) => <TextField {...params} />}
//         value={selectedDate}
//         onChange={(newValue) => {
//           setSelectedDate(newValue);
//         }}
//       />

//       {/* Time picker */}
//       <TimePicker
//         label="Time Picker"
//         renderInput={(params) => <TextField {...params} />}
//         value={selectedTime}
//         onChange={(newValue) => {
//           setSelectedTime(newValue);
//         }}
//       />

//       {/* Date and Time Picker */}
//       <DateTimePicker
//         label="Date Time Picker"
//         renderInput={(params) => <TextField {...params} />}
//         value={selectedDateTime}
//         onChange={(newValue) => {
//           setSelectedDateTime(newValue);
//         }}
//       />
//     </Stack>
//   );
// };
