import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { MBTI_MAP } from "../utility";
import { Dispatch, ReactNode, useEffect, useState } from "react";

export default function Mbti({ dispatch }: { dispatch: Dispatch<QuizAction>}) {
    const [value, setValue] = useState("");

    function handleChange(event: SelectChangeEvent, child: ReactNode) {
        setValue(event.target.value);
    }

    useEffect(() => {
        if (value.length > 0) {
            dispatch({ type: "set_mbti", payload: value });
        }
    }, [value]);

    return (
        <FormControl fullWidth sx={{ mt: 3, zIndex: 3 }}>
            <InputLabel id="mbti-label">MBTI</InputLabel>
            <Select label="MBTI" labelId="mbti-label" inputProps={{ "aria-label": "select your mbti"}} value={value} onChange={handleChange}>
                <MenuItem value="undefined">I don't know</MenuItem> 
                {Object.keys(MBTI_MAP).map((type: string) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>
        
    )
}