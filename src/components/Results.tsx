import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import charaData from "../chara_data.json";
import { useState } from "react";
import { BLOOD_MAP, HOROSCOPE_MAP, MBTI_MAP } from "../utility";
import "../styles/main.scss";
import { ExpandMore, Favorite } from "@mui/icons-material";

export default function Results({state}: {state: QuizState}) {
    const theme = useTheme();
    const [showAnimation, setShowAnimation] = useState(true);

    function computeResults(userData: UserInfo) {
        const changingData: CharacterInfo[] = charaData;
        let amtOfInfo = 5;
        if (userData.blood_type === "undefined" && userData.mbti === "undefined") {
            amtOfInfo = 3;
        } else if (userData.blood_type === "undefined" || userData.mbti === "undefined") {
            amtOfInfo = 4;
        }

        const MULTIPLIER = (100 / amtOfInfo) / 100;

        changingData.forEach((chara: CharacterInfo, index: number) => {
            chara.index = index;
            const sunValue = HOROSCOPE_MAP[userData.sun_sign as number][chara.sun_sign];
            const moonValue = HOROSCOPE_MAP[userData.moon_sign as number][chara.moon_sign];
            const venusValue = HOROSCOPE_MAP[userData.venus_sign as number][chara.venus_sign];
            const mbtiValue = userData.mbti !== "undefined" ? MBTI_MAP[userData.mbti as keyof typeof MBTI_MAP][Object.keys(MBTI_MAP).indexOf(chara.mbti)] : 0;
            const bloodValue = userData.blood_type !== "undefined" ? BLOOD_MAP[userData.blood_type as keyof typeof BLOOD_MAP][Object.keys(BLOOD_MAP).indexOf(chara.blood_type)] : 0;

            chara.compat_stats = {
                sun_sign: sunValue,
                moon_sign: moonValue,
                venus_sign: venusValue,
                mbti: userData.mbti !== "undefined" ? mbtiValue : undefined,
                blood_type: userData.blood_type !== "undefined" ? bloodValue : undefined,
            };

            let value = (sunValue * MULTIPLIER) + (moonValue * MULTIPLIER) + (venusValue * MULTIPLIER) + (mbtiValue * MULTIPLIER) + (bloodValue * MULTIPLIER);
            chara.compat_val = +value.toFixed(2);
        });

        changingData.sort((a, b) => { 
            if (b.compat_val && a.compat_val) {
                return b.compat_val- a.compat_val;
            } else {
                return 0;
            }
        });

        return changingData;
    }

    const resultsArray = computeResults(state.userInfo);
    const luckyBachelor = resultsArray[0];

    const STAT_COLORS = ["#c4ceff", "#abb8ff", "#8c9eff", "#6e84ff", "#546fff"];
    const BLOOD_COLORS = ["#c4ceff", "#8c9eff", "#6e84ff", "#546fff"];

    console.log(Math.round(luckyBachelor.compat_stats.blood_type / (100/3)), luckyBachelor.compat_stats.blood_type / (100/3), luckyBachelor.compat_stats.blood_type);
    console.log(resultsArray);

    return (
        <Container sx={{ mt: 3, mb: 5 }}>
            <Typography component="h1" variant="h1">your ideal match is <strong>{luckyBachelor.first_name === "Aira" ? "me, the Lovely~Cupid herself" : `${luckyBachelor.first_name.toLowerCase()} ${luckyBachelor.last_name.toLowerCase()}`}! Z</strong></Typography>
            <Paper sx={{ p: 3, mt: 3, transform: "rotate(-2deg)" }}>
                <img src={luckyBachelor.card} alt={luckyBachelor.first_name} style={{ width: "100%", borderRadius: theme.shape.borderRadius}} />
            </Paper>
            <Typography variant="h1" component="h1" sx={{color: "white", mt: 2, zIndex: 5, textAlign: "right"}}>{luckyBachelor.compat_val}% compatibility Y</Typography>
            <Box mt={12}>
                <Typography variant="h1" component="h1" my={3}>Stats!</Typography>
               <Grid container id="stats" spacing={2} py={2}>
                    <Grid item>
                        <Paper sx={{p: 2}}>
                            <Stack>
                                <strong>Sun sign compatibility</strong>
                                <Stack direction="row" mt={1}>
                                    {new Array(luckyBachelor.compat_stats.sun_sign / 25).fill(undefined).map((v, index) => <Favorite key={index} sx={{fill: STAT_COLORS[index]}} />)}
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper sx={{p: 2}}>
                            <Stack>
                                <strong>Moon sign compatibility</strong>
                                <Stack direction="row" mt={1}>
                                    {new Array(luckyBachelor.compat_stats.moon_sign / 25).fill(undefined).map((v, index) => <Favorite key={index} sx={{fill: STAT_COLORS[index]}} />)}
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper sx={{p: 2}}>
                            <Stack>
                                <strong>Venus sign compatibility</strong>
                                <Stack direction="row" mt={1}>
                                    {new Array(luckyBachelor.compat_stats.venus_sign / 25).fill(undefined).map((v, index) => <Favorite key={index} sx={{fill: STAT_COLORS[index]}} />)}
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    {luckyBachelor.compat_stats.mbti !== undefined && (
                        <Grid item>
                            <Paper sx={{p: 2}}>
                                <Stack>
                                    <strong>MBTI compatibility</strong>
                                    <Stack direction="row" mt={1}>
                                        {new Array(luckyBachelor.compat_stats.mbti / 25).fill(undefined).map((v, index) => <Favorite key={index} sx={{fill: STAT_COLORS[index]}} />)}
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Grid>
                    )}
                    {luckyBachelor.compat_stats.blood_type !== undefined && (
                        <Grid item>
                            <Paper sx={{p: 2}}>
                                <Stack>
                                    <strong>Blood type compatibility</strong>
                                    <Stack direction="row" mt={1}>
                                        {new Array(Math.round(luckyBachelor.compat_stats.blood_type / (100/3))).fill(undefined).map((v, index) => <Favorite sx={{fill: BLOOD_COLORS[index]}} />)}
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Grid>
                    )}
                </Grid> 
            </Box>
            <Accordion sx={{mt: 5}}>
                <AccordionSummary 
                    expandIcon={<ExpandMore />} 
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>View other candidates!</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack gap={5}>
                        {resultsArray.map(chara => 
                            <Stack direction="row" gap={3} justifyContent={"space-between"}>
                                <Typography>{chara.first_name} {chara.last_name}</Typography>
                                <Typography>{chara.compat_val}%</Typography>
                            </Stack>
                        )}
                    </Stack>
                    
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}