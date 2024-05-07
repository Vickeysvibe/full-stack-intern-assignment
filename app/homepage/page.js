"use client";

import Image from "next/image";
import logo from "@/public/Frame 4.png";
import first from "@/public/first.png";
import second from "@/public/second.png";
import third from "@/public/third.png";
import forth from "@/public/forth.png";
import data from "@/data/database.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [user, setUser] = useState();
  const router = useRouter();
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        router.push("/");
      }
    });
  });
  return (
    <div className="homePage">
      <nav>
        <Image className="logo" src={logo} alt="Logo" />
        <h1>Sign-out</h1>
      </nav>
      <div className="rec">
        <h3>Popular topics 🔥</h3>
        <div className="comps">
          {data.map((item, index) => (
            <div className="box" key={index}>
              <div className="flex">
                <Image
                  width={120}
                  height={120}
                  src={item.image}
                  alt="Topic Image"
                />
                <div className="content">
                  <h1>{item.topic}</h1>
                  <p>{item.content}</p>
                </div>
              </div>
              <button>Read</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
