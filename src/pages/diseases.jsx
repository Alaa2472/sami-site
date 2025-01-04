import React from 'react';
import '../App.css';
import Header from '../componnents/header';
import Footer from '../componnents/footer';
import { faStream, faHome, faBrain, faUserMd, faPodcast } from "@fortawesome/free-solid-svg-icons";

function Disease() {
  const podcasts = [
    { img: "https://i.pinimg.com/736x/f5/08/75/f50875fcca6176859dca68e75d2e7339.jpg", title: "فهم اضطرابات المزاج", description: "معلومات حول أنواع اضطرابات المزاج وأثرها على الحياة اليومية." },
    { img: "https://i.pinimg.com/236x/54/03/f8/5403f8689a2c1b5402ddcf755935ebe0.jpg", title: "القلق: صديق أم عدو؟", description: "كيفية التعامل مع القلق وأثره على جودة حياتك اليومية." },
    { img: "https://i.pinimg.com/736x/cf/3a/d2/cf3ad2a348fa509f9dabb28a17fc8df0.jpg", title: "اضطرابات النوم والصحة النفسية", description: "تعرف على العلاقة بين النوم الجيد والحالة النفسية المستقرة." },
    { img: "https://i.pinimg.com/736x/15/68/3f/15683fcccee1a8d5050ee850978b3316.jpg", title: "دور الدعم الاجتماعي", description: "كيف يمكن للعلاقات الاجتماعية الجيدة تحسين حالتك النفسية." },
    { img: "https://i.pinimg.com/736x/98/72/25/987225ca256713ea0144a5b9a87d5db0.jpg", title: "فهم الاكتئاب وأسبابه", description: "مناقشة شاملة حول أعراض الاكتئاب، أسبابه، وطرق العلاج الحديثة." },
    { img: "https://i.pinimg.com/736x/08/3f/e7/083fe7f1c3cda41dafa06ffb5be3e36b.jpg", title: "أهمية العلاج النفسي", description: "كيف يمكن للعلاج النفسي مساعدتك على التغلب على التحديات النفسية." },
  ];

   const navLinks = [
          { path: "/", label: "الرئيسية", icon: faHome },
          { path: "/diseases", label: "الأمراض النفسية", icon: faBrain },
          { path: "/patterns", label: "الأنماط الفكرية", icon: faStream },
          { path: "/discorders", label: "الاضطرابات النفسية", icon: faUserMd },
          { path: "/podcasts", label: "البودكاستات", icon: faPodcast },
        ];
  return (
    <div>
      <Header
      logoSrc={"logo3.png"}
      tagline="نافذتك لفهم النفس والعقل"
      navLinks={navLinks}
    />

      <main>
        <section className="hero">
          <h2>الأمراض النفسية</h2>
          <p>تعرف على أكثر الأمراض النفسية شيوعًا، أسبابها، وكيفية التعامل معها من خلال حلقات متخصصة.</p>
        </section>

        <section className="featured-episodes">
          <h2>بعض الامراض</h2>
          <div className="podcast-list">
            {podcasts.map((podcast, index) => (
              <div key={index} className="podcast">
                <img src={podcast.img} alt={podcast.title} />
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
                <a href="/diseases" className="btn">المزيد</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default Disease;