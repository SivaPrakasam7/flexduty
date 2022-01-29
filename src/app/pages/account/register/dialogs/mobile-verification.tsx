import * as Mui from "@mui/material";
import * as React from "react";
import * as Router from "react-router-dom";
// import * as ReactFire from "reactfire";
import * as FirebaseAuth from "firebase/auth";
import ReactOTPInput from "react-otp-input";
import * as Formik from "formik";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const MobileVerification = ({
  secondaryAuth,
  close,
}: {
  secondaryAuth: FirebaseAuth.Auth;
  close: () => void;
}) => {
  const auth = FirebaseAuth.getAuth();
  const navigate = Router.useNavigate();
  const provider = new FirebaseAuth.PhoneAuthProvider(auth);
  const [otp, setOtp] = React.useState("");
  const {
    values: { contact },
  } = Formik.useFormikContext<Pages.Account.Register.register.Form>();

  const verifyOTP = async () => {
    const appVerifier = new FirebaseAuth.RecaptchaVerifier(
      "send-otp",
      { size: "invisible" },
      secondaryAuth
    );
    const verificationId = await provider.verifyPhoneNumber(
      contact,
      appVerifier
    );
    const phoneCredential = FirebaseAuth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );
    await FirebaseAuth.updatePhoneNumber(
      secondaryAuth.currentUser as FirebaseAuth.User,
      phoneCredential
    );
    await secondaryAuth.signOut();
    navigate("../success");
  };
  const handleChange = (value: string) => setOtp(value);

  return (
    <Components.Dialog icon maxWidth="xs">
      <Mui.Stack component={Mui.DialogContent} alignItems="center">
        <Mui.Typography variant="h5" color="primary">
          Mobile No Verfication
        </Mui.Typography>
        <Mui.Typography
          variant="body1"
          textAlign="center"
          sx={{
            p: 2,
            bgcolor: (theme) => `${theme.palette.grey[200]}`,
            borderRadius: 2,
          }}
        >
          Please enter your OTP(one-time-password)
        </Mui.Typography>
        <ReactOTPInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          separator={<Mui.Box sx={{ pl: 2 }} />}
          inputStyle={{ width: 25 }}
        />
        <Mui.Box id="send-otp" hidden />
        <Mui.Button variant="outlined" onClick={verifyOTP}>
          Verify
        </Mui.Button>
      </Mui.Stack>
    </Components.Dialog>
  );
};
