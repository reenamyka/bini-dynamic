"use client";
import { corsiva } from "@/utils/fonts";
import { searchContact, sendEmail, sentEmail } from "@/utils/mail";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

const Newsletter = () => {
  const isMobileView = useMediaQuery("(max-width: 800px)");
  const [messageText, setMessageText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);
  const [captcha, setCaptcha] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const getErrorText = async () => {
    if (!captcha || !captchaVerified) return "Please complete captcha";
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) return "Please enter valid email";
    const search = await searchContact(email);
    if (search.result !== undefined) return "Email already registered";
    const sent = await sentEmail(email);
    if (sent) return "Verification email already sent";
    if (!terms) return "Confirm that you agree with Terms and Conditions";
    if (!privacy) return "Confirm that you agree with Privacy Policy";
    return "";
  };
  const onHandleSubmit = async () => {
    setErrorText("");
    setMessageText("");
    setSubmitEnabled(false);
    const error = await getErrorText();
    if (!error) {
      const formData = {};
      formData.name = name;
      formData.email = email;
      setErrorText("");
      setName("");
      setEmail("");
      setTerms(false);
      setPrivacy(false);
      setMessageText("Sent verification email");
      await sendEmail(formData);
    } else {
      setErrorText(error);
      setMessageText("");
    }
    setSubmitEnabled(true);
  };
  React.useEffect(() => {
    setCaptchaVerified(false);
    if (captcha) {
      verifyingCaptcha();
    }
  }, [captcha]);
  const verifyingCaptcha = async () => {
    const respond = await fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        captcha,
      }),
    });
    const respondResult = await respond.json();
    setCaptchaVerified(respondResult.success);
  };
  return (
    <Box
      component="section"
      id="artistSubscribe"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: isMobileView ? "40px 24px" : "60px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Stack direction="column" alignItems="center" gap="32px">
          <Stack direction="column" gap="16px">
            <Typography
              component="p"
              fontSize={isMobileView ? "32px" : "46px"}
              textAlign="center"
              color="#324B4E"
              className={corsiva.className}
              lineHeight="normal"
            >
              Subscribe to Our Newsletter
            </Typography>
            <Typography
              width={isMobileView ? "100%" : "522px"}
              component="p"
              fontSize="20px"
              textAlign="center"
              color="#454545"
              lineHeight={"normal"}
            >
              Sign up below for updates about new releases, ticket pre-sales,
              and exclusive events from BINI.
            </Typography>
          </Stack>

          <Stack width="100%" direction="column" gap="24px">
            {errorText && (
              <Typography
                width={isMobileView ? "100%" : "522px"}
                fontSize="15px"
                component="p"
                color="red"
              >
                {errorText}
              </Typography>
            )}
            {messageText && (
              <Typography
                width={isMobileView ? "100%" : "522px"}
                fontSize="15px"
                component="p"
                color="green"
              >
                {messageText}
              </Typography>
            )}
            <input
              type="email"
              placeholder="Email Address"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "white",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                color: "#93767A",
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Full Name (optional)"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "white",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                color: "#93767A",
              }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={setCaptcha}
              style={{
                alignSelf: "center",
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "20px",
                boxShadow: "none",
                backgroundColor: "#7ACAD2",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#7ACAD299",
                  boxShadow: "none",
                },
              }}
              onClick={() => onHandleSubmit()}
              disabled={!submitEnabled}
            >
              Sign Up
            </Button>
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            gap={{
              md: 2,
            }}
          >
            <Stack
              width="100%"
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ marginBottom: !isMobileView ? "-10px" : "0" }}
            >
              <Checkbox
                inputProps={{
                  "aria-label": "TermsAndConditions",
                }}
                size="small"
                sx={{
                  color: "#94B0B3",
                  marginTop: {
                    xs: -3,
                    sm: 0,
                    md: 0,
                  },
                  "&.Mui-checked": {
                    color: "#94B0B3",
                  },
                }}
                onChange={(e) => setTerms(e.target.checked)}
                checked={terms}
                style={{
                  width: "0",
                  height: "0",
                }}
              />
              <Typography component="p" color="#454545">
                I confirm that I have read and agree to{" "}
                <Typography
                  component="a"
                  target="_black"
                  href={process.env.NEXT_PUBLIC_TERMS_URL}
                  color="#011F4B"
                >
                  Terms and Conditions.
                </Typography>
              </Typography>
            </Stack>

            <Stack width="100%" direction="row" gap={1} alignItems="center">
              <Checkbox
                inputProps={{
                  "aria-label": "PrivacyPolicy",
                }}
                size="small"
                sx={{
                  color: "#94B0B3",
                  marginTop: {
                    xs: -3,
                    sm: 0,
                    md: 0,
                  },
                  "&.Mui-checked": {
                    color: "#94B0B3",
                  },
                }}
                onChange={(e) => setPrivacy(e.target.checked)}
                checked={privacy}
                style={{
                  width: "0",
                  height: "0",
                }}
              />
              <Typography component="p" color="#454545">
                I confirm that I have read and agree to{" "}
                <Typography
                  component="a"
                  target="_black"
                  href={process.env.NEXT_PUBLIC_PRIVACY_URL}
                  color="#011F4B"
                >
                  Privacy Policy.
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Newsletter;
