import Image from "next/image";
import google from "@/public/google.svg";
import mail from "@/public/mail.svg";

export const Test = () => {
  return (
    <div className="container">
      <h3>logo</h3>
      <div>
        <header>
          <h1>Sign up</h1>
          <h2>Choose a sign up method</h2>
        </header>
        <buttons className="buttons">
          <div className="div">
            <Image className="img" src={google} alt="logo" />
            <p>Sign up with Google</p>
          </div>
          <div className="div">
            <Image className="img" src={mail} alt="logo" />
            <p>Sign up with Email</p>
          </div>
        </buttons>
        <section className="section">
          Already a user ? <a href="/">log in</a>
        </section>
      </div>
    </div>
  );
};
