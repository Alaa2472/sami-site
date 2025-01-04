import React from 'react';
import logo from './logo3.png'
import { faStream, faHome, faBrain, faUserMd, faPodcast } from "@fortawesome/free-solid-svg-icons";
import Header from "../componnents/header";

function VideoSection() {
    const navLinks = [
        { path: "/", label: "الرئيسية", icon: faHome },
        { path: "/discorders", label: "الأمراض النفسية", icon: faBrain },
        { path: "/patterns", label: "الأنماط الفكرية", icon: faStream },
        { path: "/discorders", label: "الاضطرابات النفسية", icon: faUserMd },
        { path: "/podcasts", label: "البودكاستات", icon: faPodcast },
      ];
  return (
    <>
<Header
      logoSrc={logo}
      tagline="نافذتك لفهم النفس والعقل"
      navLinks={navLinks}
    />
<main>
      <section className="video-section">
        <h2>مشاهدة الفيديو</h2>
        <iframe
          width="100%"
          height="800"
          src="https://www.youtube.com/embed/-i1uF3pa0oI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title='iframe'
        />
      </section>
    </main>
    </>

  );
}

export default VideoSection;