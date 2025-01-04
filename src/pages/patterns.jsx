import React from "react";
import Footer from "../componnents/footer";
import {
  faStream,
  faHome,
  faBrain,
  faUserMd,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../componnents/header";

export default function Pattern() {
  const navLinks = [
    { path: "/", label: "الرئيسية", icon: faHome },
    { path: "/disorders", label: "الأمراض النفسية", icon: faBrain },
    { path: "/patterns", label: "الأنماط الفكرية", icon: faStream },
    { path: "/discorders", label: "الاضطرابات النفسية", icon: faUserMd },
    { path: "/podcasts", label: "البودكاستات", icon: faPodcast },
  ];
  return (
    <>
      <div lang="ar" dir="rtl">
        <Header
      logoSrc={"logo3.png"}
      tagline="نافذتك لفهم النفس والعقل"
          navLinks={navLinks}
        />
      </div>
      <Footer />
    </>
  );
}
