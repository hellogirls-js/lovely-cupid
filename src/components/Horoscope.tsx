import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, Fragment, ReactNode, useEffect, useState } from "react";
import { VALUE_TO_SIGN } from "../utility";

export default function Horoscope({state, dispatch}: {state: QuizState, dispatch: Dispatch<QuizAction>}) {
    const [sunSign, setSunSign] = useState("");
    const [moonSign, setMoonSign] = useState("");
    const [venusSign, setVenusSign] = useState("")

    useEffect(() => {
        if (+sunSign > 0 && +moonSign > 0 && +venusSign > 0) {
            dispatch({type: "set_horoscope", payload: JSON.stringify({
                sun_sign: +sunSign - 1,
                moon_sign: +moonSign - 1 ,
                venus_sign: +venusSign - 1
            })})
        }
    }, [sunSign, moonSign, venusSign]);

    function SunSign() {
        const handleChange = (event: SelectChangeEvent, child: ReactNode) => {
            setSunSign(event.target.value);
        }

        return (
            <FormControl fullWidth sx={{ mt: 3 }}>
                <InputLabel id="sun-sign-id">
                    Sun sign
                </InputLabel>
                <Select label="Sun sign" labelId="sun-sign-id" inputProps={{ "aria-label": "select your sun sign"}} value={sunSign} onChange={handleChange}>
                    {VALUE_TO_SIGN.map((sign, index) => <MenuItem value={index + 1} key={sign}>{sign}</MenuItem>)}
                </Select>
            </FormControl>
        )
    }

    function MoonSign() {
        const handleChange = (event: SelectChangeEvent, child: ReactNode) => {
            setMoonSign(event.target.value);
        }

        return (
            <FormControl fullWidth sx={{ mt: 3 }}>
                <InputLabel id="moon-sign-id">
                    Moon sign
                </InputLabel>
                <Select label="Moon sign" labelId="moon-sign-id" inputProps={{ "aria-label": "select your moon sign"}} value={moonSign} onChange={handleChange}>
                    {VALUE_TO_SIGN.map((sign, index) => <MenuItem value={index + 1} key={sign}>{sign}</MenuItem>)}
                </Select>
            </FormControl>
        )
    }

    function VenusSign() {
        const handleChange = (event: SelectChangeEvent, child: ReactNode) => {
            setVenusSign(event.target.value);
        }

        return (
            <FormControl fullWidth sx={{ mt: 3 }}>
                <InputLabel id="moon-sign-id">
                    Venus sign
                </InputLabel>
                <Select label="Venus sign" labelId="venus-sign-id" inputProps={{ "aria-label": "select your venus sign"}} value={venusSign} onChange={handleChange}>
                    {VALUE_TO_SIGN.map((sign, index) => <MenuItem value={index + 1} key={sign}>{sign}</MenuItem>)}
                </Select>
            </FormControl>
        )
    }

    return (
        <Fragment>
            <SunSign />
            <MoonSign />
            <VenusSign />
        </Fragment>
    );
    // const [sunSign, setSunSign] = useState("");
    // const [moonSign, setMoonSign] = useState("");
    // const [venusSign, setVenusSign] = useState("");

    // useEffect(() => {
    //     if (sunSign.length > 0 && moonSign.length > 0 && venusSign.length > 0) {
    //         console.log("hi");
    //         dispatch({type: "set_horoscope"});
    //     }
    // }, [sunSign, moonSign, venusSign]);

    // function SunSign() {
    //     const handleChange = (event: SelectChangeEvent, child: ReactNode) => {
    //         console.log("sun", event.target.value);
    //         setSunSign(event.target.value)
    //     }

    //     useEffect(() => {
    //         dispatch({type: "set_sun", payload: (parseInt(sunSign) - 1).toString()});
    //     }, [sunSign]);

    //     return (
    //         <FormControl fullWidth sx={{mt: 3, zIndex: 3}}>
    //             <InputLabel id="sun-sign-label">Sun sign</InputLabel>
    //             <Select label="Sun sign" labelId="sun-sign-label" inputProps={{ "aria-label": "select your sun sign"}} value={sunSign} onChange={handleChange}>
    //                 {VALUE_TO_SIGN.map((sign, index) => {
    //                     const val = (index + 1).toString()
    //                     return <MenuItem value={val} key={sign}>{sign}</MenuItem>
    //                 })}
    //             </Select>
    //         </FormControl>
    //     )
    // }

    // function MoonSign() {
    //     const handleChange = (event: SelectChangeEvent, child: ReactNode) => {
    //         console.log("moon", event.target.value);
    //         setMoonSign(event.target.value);
    //     }

    //     useEffect(() => {
    //         dispatch({type: "set_moon", payload: (parseInt(moonSign) - 1).toString()});
    //     }, [moonSign]);

    //     return (
    //         <FormControl fullWidth sx={{mt: 3, zIndex: 3}}>
    //             <InputLabel id="moon-sign-label">Moon sign</InputLabel>
    //             <Select label="Moon sign" labelId="moon-sign-label" inputProps={{ "aria-label": "select your moon sign"}} value={moonSign} onChange={handleChange}>
    //                 {VALUE_TO_SIGN.map((sign, index) => {
    //                     const val = (index + 1).toString()
    //                     return <MenuItem value={val} key={sign}>{sign}</MenuItem>
    //                 })}
    //             </Select>
    //         </FormControl>
    //     )
    // }

    // function VenusSign() {
    //     const handleChange = (event: SelectChangeEvent, child: ReactNode) => {
    //         console.log("venus", event.target.value);
    //         setVenusSign(event.target.value);   
    //     }

    //     useEffect(() => {
    //         dispatch({type: "set_venus", payload: (parseInt(venusSign) - 1).toString()});
    //     }, [venusSign]);

    //     return (
    //         <FormControl fullWidth sx={{mt: 3, zIndex: 3}}>
    //             <InputLabel id="venus-sign-label">Venus sign</InputLabel>
    //             <Select label="Venus sign" labelId="venus-sign-label" inputProps={{ "aria-label": "select your venus sign"}} value={venusSign} onChange={handleChange}>
    //                 {VALUE_TO_SIGN.map((sign, index) => {
    //                     const val = (index + 1).toString()
    //                     return <MenuItem value={val} key={sign}>{sign}</MenuItem>
    //                 })}
    //             </Select>
    //         </FormControl>
    //     )
    // }

    // return (
    //     <Fragment>
    //         <SunSign />
    //         <MoonSign />
    //         <VenusSign />
    //     </Fragment>
    // )
}