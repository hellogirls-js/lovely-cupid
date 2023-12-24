import { Box, Container, Paper, Typography } from "@mui/material";
import aira_happy from "../assets/AIRABU_small_1.png";
import aira_serious from "../assets/AIRABU_small_2.png";
import { ReactElement } from "react";

export default function Question({question, description, mood = "happy", options}: {question: string, description?: string | ReactElement, mood?: "happy" | "serious", options: any}) {
  return (
    <Container sx={{ mt: 15, position: "relative", minHeight: "60vh" }}>
      <Box position="relative">
        <Box position="absolute" top={-100} className="mini-aira"><img src={mood === "happy" ? aira_happy : aira_serious} alt="aira" width={150} style={{ pointerEvents: "none", userSelect: "none"}} /></Box>
        <Paper sx={{ p: 4, pt: 8, pl: 8, fontSize: "1.4rem" }}>
          {question}
        </Paper>
      </Box>
      {description && <Typography component="p" sx={{color: "white", mt: 2}}>{description}</Typography>}
      {options}
    </Container>
  );
}