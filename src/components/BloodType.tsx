import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, ReactNode, useEffect, useState } from "react";
import { BLOOD_MAP } from "../utility";

export default function BloodType({dispatch}: {dispatch: Dispatch<QuizAction>}) {
    const [value, setValue] = useState("");

    function handleChange(event: SelectChangeEvent<string>, child: ReactNode) {
        setValue(event.target.value);
    }

    useEffect(() => {
        if (value.length > 0) {
            dispatch({type: "set_bloodType", payload: value});
        }
    }, [value])

    return (
        <FormControl fullWidth sx={{mt: 3, zIndex: 3}}>
            <InputLabel id="blood-type-label">Blood type</InputLabel>
            <Select label="Blood type" labelId="blood-type-label" inputProps={{ "aria-label": "select your blood type"}} value={value} onChange={handleChange}>
                <MenuItem value="undefined">I don't know</MenuItem>
                {Object.keys(BLOOD_MAP).map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>
    );
}