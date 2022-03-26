import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
export const Boxes = styled(motion.div)(({ theme }) => ({
  backgroundColor: "pink",
  width: "250px",
  height: "50px",
  borderRadius: "10px",
  marginBottom: "20px",
}));
export const Buttons = styled(Button)(({ theme, isDisable }) =>
  isDisable
    ? {
        backgroundColor: "grey",
        color: "white",
        "&:hover": {
          backgroundColor: "grey",
        },
      }
    : {
        backgroundColor: "pink",
        color: "white",
        "&:hover": {
          backgroundColor: "pink",
        },
      }
);
