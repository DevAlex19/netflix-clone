import { Box, Button, Link, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, db } from "../assets/firebase/firebaseConfig";
import { Input, Label } from "../styles/homePageStyle";

function SignInForm() {
  const [label, setLabel] = useState({ email: false, password: false });
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm();
  const router = useRouter();

  async function onSubmit({ email, password }: any) {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const q = query(collection(db, "users"), where("email", "==", email));
      const docs = await getDocs(q);
      if (docs.docs.length > 0) {
        localStorage.setItem("auth", docs.docs[0].id);
      }
      clearErrors();
      router.push("/browse");
    } catch (e) {
      setError("custom", { type: "custom", message: "error" });
    }
  }

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "1",
        maxWidth: "450px",
        borderRadius: "5px",
        margin: "2rem auto 7rem",
        color: "white",
        background: "rgba(0,0,0,.75)",
        padding: "3rem 4rem 9rem",
      }}
    >
      <Typography
        sx={{ fontSize: "1.9rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Conectare
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.custom ? (
          <Box
            sx={{
              background: "#e87c03",
              borderRadius: "5px",
              padding: "0.5rem 1.2rem",
              marginBottom: "1.5rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontFamily: "Netflix Light",
                lineHeight: "1.1rem",
              }}
            >
              Ne pare rău, nu s-a găsit niciun cont cu această adresă de e-mail.
              Încearcă din nou sau{" "}
              <Link style={{ color: "white" }} href="/signup">
                creează un cont nou
              </Link>
              .
            </Typography>
          </Box>
        ) : null}
        <Box
          sx={{
            marginBottom: "1rem",
            height: errors.email ? "52px" : "50px",
            borderRadius: "5px",
            overflow: "hidden",
            display: "flex",
            alignItems: "end",
            background: "#333",
            borderBottom: errors.email ? "2px solid #e87c03" : "none",
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
              transform: label.email
                ? "translateY(-30px)"
                : "translateY(-12px)",
              fontSize: label.email ? "0.7rem" : "1rem",
              padding: "0 1rem",
              fontFamily: "Netflix Light",
            }}
          >
            E-mail
          </Label>
          <Input
            {...register("email", {
              validate: (value: string) => {
                const regex =
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (!regex.test(value)) {
                  return "Introdu o adresă de e-mail validă.";
                }
                return true;
              },
            })}
            style={{
              width: "100%",
              display: "block",
              outline: "none",
              border: "none",
              height: "80%",
              background: "#333",
              color: "white",
              fontSize: "1rem",
              padding: "0 1rem",
            }}
          />
        </Box>
        {errors.email && (
          <Typography
            sx={{
              color: "#e87c03",
              fontSize: "0.8rem",
              marginTop: "-0.7rem",
              marginBottom: errors.email ? "0.9rem" : "0",
            }}
          >
            {errors.email.message as string}
          </Typography>
        )}
        <Box
          sx={{
            marginBottom: "1rem",
            height: errors.password ? "52px" : "50px",
            borderRadius: "5px",
            overflow: "hidden",
            display: "flex",
            alignItems: "end",
            background: "#333",
            borderBottom: errors.password ? "2px solid #e87c03" : "none",
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
                ? "translateY(-30px)"
                : "translateY(-12px)",
              fontSize: label.password ? "0.7rem" : "1rem",
              padding: "0 1rem",
              fontFamily: "Netflix Light",
            }}
          >
            Parola
          </Label>
          <Input
            type="password"
            {...register("password", {
              validate: (value: string) => {
                if (value.length < 4 || value.length > 60) {
                  return "Parola trebuie să conțină între 4 și 60 de caractere.";
                }
                return true;
              },
            })}
            style={{
              width: "100%",
              display: "block",
              outline: "none",
              border: "none",
              height: "80%",
              background: "#333",
              color: "white",
              fontSize: "1rem",
              padding: "0 1rem",
            }}
          />
        </Box>
        {errors.password && (
          <Typography
            sx={{ color: "#e87c03", fontSize: "0.8rem", marginTop: "-0.7rem" }}
          >
            {errors.password.message as string}
          </Typography>
        )}
        <Button
          type="submit"
          sx={{
            color: "white",
            background: "rgba(229,0,20,1)",
            "&:hover": { background: "rgba(229,0,20,0.85)" },
            textTransform: "none",
            fontSize: "1.1rem",
            width: "100%",
            marginTop: "2rem",
            padding: "0.6rem 0",
          }}
        >
          Conectare
        </Button>
      </form>

      <Typography
        sx={{
          color: "#6f7373",
          fontFamily: "Netflix Light",
          fontSize: "1rem",
          marginTop: "3.5rem",
        }}
      >
        Ești nou pe Netflix?{" "}
        <Link href="/signup" style={{ color: "white", textDecoration: "none" }}>
          Înregistrează-te acum
        </Link>
      </Typography>
      <Typography
        sx={{
          color: "#6f7373",
          fontFamily: "Netflix Light",
          fontSize: "0.85rem",
          lineHeight: "1rem",
          marginTop: "1rem",
        }}
      >
        Această pagină este protejată prin Google reCAPTCHA pentru a ne asigura
        că nu ești un robot. <span style={{ color: "#0071eb" }}>Detalii.</span>
      </Typography>
    </Box>
  );
}

export default SignInForm;
