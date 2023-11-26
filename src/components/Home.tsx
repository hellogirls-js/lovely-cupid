import { Box, Button, Container, List, ListItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import "../styles/main.scss";
import aira_big from "../assets/AIRABU_big.png";
import aira_small from "../assets/AIRABU_small_1.png";
import { Dispatch } from "react";

export default function Home({dispatch}: {dispatch: Dispatch<QuizAction>}) {
  const isMobile = useMediaQuery("(max-width: 812px)");
  const theme = useTheme();
  
  return (
    <Box sx={{ width: "100vw", height: "100vh", boxSizing: "border-box", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <Container sx={theme => ({ overflow: "hidden", height: "100vh", maxHeight: "100vh", position: "relative", borderRadius: isMobile ? 0 : theme.shape.borderRadius, 
        "& .MuiContainer-root": {
          "@media (min-width: 1200px)": {
            maxWidth: "none",
          }
        } })}>
          <Stack direction="column" sx={{ zIndex: 2, width: isMobile ? "100%" : "50%", position: "relative", gap: isMobile ? 2 : 5 }}>
            <Box sx={{ height: "100%", color: "white" }}>
              <h1 style={{ margin: 0, padding: 0, marginTop: 10 }}>you can call me the Lovely~Cupid! Z</h1>
            </Box>
            <Typography component="p" sx={theme => ({ p: isMobile ? 0 : 2, borderRadius: theme.shape.borderRadius, color: "white", fontSize: "1.4rem" })}>As a super fan, I know a lot about the idols at Ensemble Square! I LOVE them so much! Since I also love love, I can determine which idol you'd be the most compatible with.</Typography>
            <Typography component="p" sx={theme => ({ px: isMobile ? 0 : 2, borderRadius: theme.shape.borderRadius, color: "white", fontSize: "1.4rem" })}>
              This quiz will ask for the following information:
            </Typography>
            <List sx={{ color: "white"}}>
              <ListItem>- MBTI (optional)</ListItem>
              <ListItem>- Blood type (optional)</ListItem>
              <ListItem>- Horoscope information (required, must know your birthday and birth location)</ListItem>
            </List>
            <Button variant="contained" disableElevation onClick={() => {
              dispatch({ type: "go_mbti"});
            }}>Start!</Button>
          </Stack>
          
        </Container>
        <Box sx={{ height: "100%", position: "absolute", top: isMobile ? "20%" : 0, left: isMobile ? "20%" : "30%", zIndex: 1 }} id="aira-container">
          <img src={isMobile ? aira_small : aira_big} alt="aira" style={{ height: isMobile ? "10%" : "100%", filter: isMobile ? "none" : `drop-shadow(20px 20px #fff)`, userSelect: "none", pointerEvents: "none" }} />
        </Box>
        <Box sx={{ width: "100vw", height: "100vh", position: "absolute", top: 0 }} id="animation">
          <Stack direction="row" gap={3} alignItems="flex-end" justifyContent="flex-end" sx={{height: "100%"}}>
            {[1,2,3,4,5,6,7,8,9,10].map((v) => <div key={v} className="animated-bar" id={`bar-${v}`} style={{ height: `1%`, width: "100%", backgroundColor: theme.palette.primary.light}}></div>)}
          </Stack>
        </Box>
    </Box>
  )
}