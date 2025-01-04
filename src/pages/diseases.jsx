import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Header from "../componnents/header";
import {
  faStream,
  faHome,
  faBrain,
  faUserMd,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../componnents/footer";

export default function Disease() {
  const podcastsData = [
    {
      image:
        "https://i.pinimg.com/736x/42/88/0d/42880d8a91dcfb5d34fbb5d80bb8e623.jpg",
      title: "كيف تحافظ على صحتك النفسية",
      description: "نصائح وخبرات تساعدك على التغلب على التوتر والقلق.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/c9/b1/13/c9b113e73df1854686203d7ead50834a.jpg",
      title: "تطوير الذات في بيئة العمل",
      description: "طرق لتعزيز الإنتاجية والتعامل مع الضغوط اليومية.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/cf/3a/d2/cf3ad2a348fa509f9dabb28a17fc8df0.jpg",
      title: "أساسيات العناية بالصحة النفسية",
      description: "خطوات بسيطة لتحسين حالتك المزاجية وتقليل التوتر.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/15/68/3f/15683fcccee1a8d5050ee850978b3316.jpg",
      title: "العلاقات الاجتماعية والصحة النفسية",
      description: "دور العلاقات الجيدة في تحسين صحتك النفسية.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/1f/77/70/1f77705c01583da27eb70b68262a6d3d.jpg",
      title: "النوم الصحي وأثره على الصحة النفسية",
      description: "كيفية تحسين جودة نومك لدعم صحتك النفسية.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/f8/83/ac/f883ac20ed84f7181c12a6e6d6afcf5d.jpg",
      title: "أهمية الحديث عن مشاعرك",
      description: "كيف يساعدك التعبير عن مشاعرك في تحسين صحتك النفسية.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/16/f0/20/16f020513cc5d3a5894e89c465d8df06.jpg",
      title: "التغذية وتأثيرها على الصحة النفسية",
      description: "الأطعمة التي تساعد في تعزيز حالتك المزاجية.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/e3/68/d0/e368d0395259f4e0909d9359fe4beb4f.jpg",
      title: "كيفية التعامل مع الضغط النفسي في العمل",
      description: "استراتيجيات فعالة للتعامل مع الضغوط اليومية.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/236x/c6/fe/9c/c6fe9c44fbf1cfc20a337c04902f0cd2.jpg",
      title: "التعامل مع القلق في الحياة اليومية",
      description: "طرق عملية للتغلب على القلق وتحقيق التوازن.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/236x/d7/e5/a3/d7e5a35852e0c7c5a7be0db460168be2.jpg",
      title: "التأمل وأثره على الصحة النفسية",
      description: "كيف يمكن للتأمل أن يقلل من التوتر ويعزز الهدوء الداخلي.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/2b/9f/a6/2b9fa64fc754c7d8ba976a24a0a3c529.jpg",
      title: "أسرار التفكير الإيجابي",
      description: "اكتشف كيف يؤثر التفكير الإيجابي على حياتك.",
      link: "video.html?video=video2.mp4",
    },
    {
      image:
        "https://i.pinimg.com/736x/19/80/8e/19808e20f92245e6b3dd9c7ecb6a1496.jpg",
      title: "راحة القلب",
      description: "كيف يمكن للنوم الجيد تحسين صحتك النفسية.",
      link: "video.html?video=video2.mp4",
    },
  ];
  const navLinks = [
    { path: "/", label: "الرئيسية", icon: faHome },
    { path: "/diseases", label: "الأمراض النفسية", icon: faBrain },
    { path: "/patterns", label: "الأنماط الفكرية", icon: faStream },
    { path: "/discorders", label: "الاضطرابات النفسية", icon: faUserMd },
    { path: "/podcasts", label: "البودكاستات", icon: faPodcast },
  ];

  return (
    <>
      <Header
        logoSrc={"logo3.png"}
        tagline="نافذتك لفهم النفس والعقل"
        navLinks={navLinks}
      />
      <main>
        {/* Featured Episodes Section */}
        <section className="featured-episodes">
          <h2>الحلقات المميزة</h2>
          <div className="podcast-list">
            {podcastsData.map((podcast, index) => (
              <div className="podcast" key={index}>
                <img src={podcast.image} alt={podcast.title} />
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
                <Link to={podcast.link} className="btn">
                  مشاهدة الفيديو
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
