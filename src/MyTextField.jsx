import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

export const MyTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
        marginBottom: "12px",
        height: "36px",
        "& input": {
            height: "100%",
            padding: "8px",
            fontSize: "14px",
            lineHeight: "1",
        },
    },
    "& .MuiInputLabel-root": {
        fontSize: "14px",
        transition: "all 0.2s ease-out",
        transform: "translateY(0)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        fontSize: "12px",
        transform: "translateY(-6px)",
    },
}));