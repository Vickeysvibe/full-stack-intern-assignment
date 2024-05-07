"use client";

import Image from "next/image";
import google from "@/public/google.svg";
import mail from "@/public/mail.svg";
import logo from "@/public/Frame 4.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "@/app/firebase/config";
import { useRouter } from "next/navigation";
export const HomePage = () => {
  const router = useRouter();
  const handle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/homepage");
  };
  return (
    <div className="container">
      <Image className="h3" src={logo} alt="hello" />
      <p className="h4">Journey to a trillion miles starts from here!!</p>
      <div>
        <header>
          <h1>Sign up</h1>
          <h2>Choose a sign up method</h2>
        </header>
        <buttons className="buttons">
          <button
            onClick={() => {
              handle();
            }}
            className="div"
          >
            <Image className="img" src={google} alt="logo" />
            <p>Sign up with Google</p>
          </button>
          <button onClick={() => {}} className="div">
            <Image className="img" src={mail} alt="logo" />
            <p>Sign up with Email</p>
          </button>
        </buttons>
        <section className="section">
          Already a user ? <a href="/">log in</a>
        </section>
      </div>
    </div>
  );
};
