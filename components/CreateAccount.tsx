import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Label } from "../styles/createAccountStyle";

function CreateAcount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [label, setLabel] = useState({ email: false, password: false });

  return (
    <Box
      sx={{
        maxWidth: "420px",
        margin: "0 auto",
        padding: "1rem 0 10rem",
      }}
    >
      <Typography sx={{ color: "#333", fontSize: "0.8rem", marginTop: "2rem" }}>
        PASUL 1 DIN 3
      </Typography>
      <Typography
        sx={{
          color: "#333",
          fontSize: "2rem",
          fontWeight: "bold",
          lineHeight: "2.4rem",
        }}
      >
        Creează o parolă pentru a activa abonamentul.
      </Typography>
      <Typography
        sx={{
          color: "#333",
          marginTop: "0.8rem",
          lineHeight: "1.4rem",
          fontFamily: "Netflix Light",
          maxWidth: "310px",
        }}
      >
        Au mai rămas doar câțiva pași și gata!
      </Typography>
      <Typography
        sx={{
          color: "#333",
          marginTop: "0.8rem",
          lineHeight: "1.4rem",
          fontFamily: "Netflix Light",
          maxWidth: "310px",
        }}
      >
        Nici nouă nu ne plac formularele.
      </Typography>
      <form
        onSubmit={handleSubmit(() => {
          console.log(errors);
        })}
      >
        <Box
          sx={{
            margin: errors.email ? "1.5rem 0 1.7rem" : "1.5rem 0 0.7rem",
            height: "60px",
            border: errors.email ? "1px solid #b92d2b" : "1px solid gray",
            borderRadius: "2px",
          }}
          onFocus={() => setLabel({ ...label, email: true })}
          onBlur={() => {
            if (watch().email.length <= 0) {
              setLabel({ ...label, email: false });
            }
          }}
        >
          <Label
            style={{
              transform: label.email ? "translateY(5px)" : "translateY(18px)",
              fontSize: label.email ? "0.8rem" : "1rem",
            }}
          >
            E-mail
          </Label>
          <Input
            type="text"
            {...register("email", {
              validate: (value) => {
                const strLen = value.length < 5 || value.length > 50;
                const regex =
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (strLen) {
                  return "Adresa de e-mail trebuie să conțină între 5 și 50 de caractere.";
                }
                if (!regex.test(value)) {
                  return "Introdu o adresă de e-mail validă.";
                }
                return true;
              },
              required: {
                value: true,
                message: "E-mailul este obligatoriu.",
              },
            })}
          />
          {errors.email && (
            <Typography
              sx={{
                color: "rgba(229,0,20,1)",
                fontSize: "0.8rem",
              }}
            >
              {errors.email.message as string}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            height: "60px",
            border: errors.password ? "1px solid #b92d2b" : "1px solid gray",
            borderRadius: "2px",
          }}
          onFocus={() => setLabel({ ...label, password: true })}
          onBlur={() => {
            if (watch().password.length <= 0) {
              setLabel({ ...label, password: false });
            }
          }}
        >
          <Label
            style={{
              transform: label.password
                ? "translateY(5px)"
                : "translateY(18px)",
              fontSize: label.password ? "0.8rem" : "1rem",
            }}
          >
            Adauga o parola
          </Label>
          <Input
            type="password"
            {...register("password", {
              validate: (value) =>
                value.length < 6 || value.length > 60
                  ? "Parola trebuie să conțină între 6 și 60 de caractere."
                  : true,
              required: {
                value: true,
                message: "Parola este obligatorie.",
              },
            })}
          />
          {errors.password && (
            <Typography sx={{ color: "rgba(229,0,20,1)", fontSize: "0.8rem" }}>
              {errors.password.message as string}
            </Typography>
          )}
        </Box>
        <Button
          sx={{
            color: "white",
            background: "rgba(229,0,20,1)",
            "&:hover": { background: "rgba(229,0,20,0.85)" },
            textTransform: "none",
            fontSize: "1.5rem",
            width: "100%",
            marginTop: "3.5rem",
            padding: "0.6rem 0",
          }}
          type="submit"
        >
          Inainte
        </Button>
      </form>
    </Box>
  );
}

export default CreateAcount;