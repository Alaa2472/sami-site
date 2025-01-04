import React from 'react'
import '../index.css';
import Header from '../componnents/header';
import Footer from '../componnents/footer';
import { faStream, faHome, faBrain, faUserMd, faPodcast } from "@fortawesome/free-solid-svg-icons";


export default function Index() {
    const navLinks = [
            { path: "/", label: "الرئيسية", icon: faHome },
    { path: "/diseases", label: "الأمراض النفسية", icon: faBrain },            { path: "/patterns", label: "الأنماط الفكرية", icon: faStream },
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
        <section class="intro">
            <div class="container">
                <h2>مرحبًا بك في نَفْس</h2>
                <p>منصة تهدف إلى نشر الوعي حول الصحة النفسية والضغوطات التي تواجهنا في حياتنا اليومية، ودعمًا معرفيًا يمكّنك من العناية بصحتك النفسية وتحقيق التوازن الداخلي في عالم مليء بالتحديات.</p>
                <img src="https://i.pinimg.com/736x/35/33/4d/35334dde0e2455c3a2ecf64616c4b29e.jpg" alt="صورة تعبيرية للصحة النفسية"/>
            </div>
        </section>

        <section class="topics">
            <div class="container">
                <h2>المواضيع الرئيسية</h2>
                <div class="topic-list">
                    <div class="topic">
                        <img src="https://i.pinimg.com/736x/6b/d5/84/6bd58447976cf7e39c5caab77146e924.jpg" alt="الأمراض النفسية"/>
                        <h3>الأمراض النفسية</h3>
                        <p>تعرف على أكثر الأمراض النفسية شيوعًا مثل الاكتئاب والقلق وأحدث طرق العلاج.</p>
                        <a href="/discorders" class="btn">المزيد</a>
                    </div>
                    <div class="topic">
                        <img src="https://i.pinimg.com/736x/06/f2/3b/06f23ba8d600723e6c8faf075a96d99c.jpg" alt="الأنماط الفكرية"/>
                        <h3>الأنماط الفكرية</h3>
                        <p>فهم الأنماط الفكرية الإيجابية والسلبية وكيفية تحسين تفكيرك.</p>
                        <a href="/patterns" class="btn">المزيد</a>
                    </div>
                    <div class="topic">
                        <img src="https://i.pinimg.com/736x/35/98/1a/35981a1526e88473a0d4d65be5cf6013.jpg" alt="الاضطرابات النفسية"/>
                        <h3>الاضطرابات النفسية</h3>
                        <p>استكشف الأنواع المختلفة من الاضطرابات النفسية مثل الفصام، الاضطراب الثنائي القطب.</p>
                        <a href="/discorders" class="btn">المزيد</a>
                    </div>
                    <div class="topic">
                        <img src="https://i.pinimg.com/736x/4b/1a/ae/4b1aae66eb3046a54e9eb44c2eb4c6a4.jpg" alt="البودكاستات"/>
                        <h3>البودكاستات</h3>
                        <p>استمع إلى حلقات فريدة تغطي مواضيع الصحة النفسية، التنمية الذاتية، والمزيد.</p>
                        <a href="/podcasts" class="btn">المزيد</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="call-to-action">
            <div class="container">
                <h2>ابدأ رحلتك الآن</h2>
                <p>اكتشف المزيد من المصادر والأدوات التي تدعم صحتك النفسية.</p>
                <a href="/contact" class="btn">تواصل معنا</a>
            </div>
        </section>
    </main>
    <Footer />
    </>
    
)
}
