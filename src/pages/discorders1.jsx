import React from 'react'
import Footer from '../componnents/footer'
import logo from './logo3.png'
import { faStream, faHome, faBrain, faUserMd, faPodcast } from "@fortawesome/free-solid-svg-icons";
import Header from "../componnents/header";

 function Discorders() {
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
        <section class="hero">
            <h2>الاضطرابات النفسية</h2>
            <p>هي الحالات التي تؤثر على التفكير والشعور والسلوك وتنعكس على قدرة الفرد في التكيف مع الحياة اليومية مما يتطلب فهماً عميقاً لتحقيق التوازن النفسي </p>
        </section>
        <section class="featured-episodes">
            <h2>اشهر الاضطرابات النفسيه </h2>
            <div class="podcast-list">
                <div class="podcast topic">
                    <img src="ikt2ab.jpeg" alt="حلقة عن الصحة النفسية"/>
                    <h3>الاكتئاب</h3>
                    <p>اضطراب مزاجي يسبب شعورًا دائمًا بالحزن وفقدان الاهتمام</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="8ala81.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطراب القلق العام</h3>
                    <p>شعور دائم بالقلق المفرط</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="sadma.jpeg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطراب ما بعد الصدمة</h3>
                    <p>حالة صحية عقلية يستثيرها حدث مخيف قد يحدث لك أو قد تشهده</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="waswas.webp" alt="حلقة عن الصحة النفسية"/>
                    <h3>الوسواس القهري </h3>
                    <p> نمط من الأفكار والمخاوف غير المرغوب فيها</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="hal3.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطراب الهلع</h3>
                    <p> نوبة مفاجئة من الخوف الشديد</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="alfisam.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>الانفصام في الشخصيه</h3>
                    <p> مرض عقلي خطير يؤثر في طريقة تفكير الأشخاص وشعورهم وتصرفاتهم</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="tawhd.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطراب التوحد</h3>
                    <p> حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="hedeh.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطراب الشخصية الحدية</h3>
                    <p> أحد أمراض الصحة العقلية يؤثر في الطريقة التي يشعر بها الأشخاص</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="qotob.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطراب ثنائي القطب</h3>
                    <p> حالة صحية عقلية تتسبب في تقلبات مزاجية مفرطة</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="eating.png" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطرابات الأكل</h3>
                    <p> تؤثر على صحتك الجسدية والعقلية. وتشمل هذه الحالات مشكلات في طبيعة تفكيرك في الطعام والأكل</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="sleep.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطرابات النوم </h3>
                    <p>  هي أمراض ينتج عنها تغيرات في طريقة نومك</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
                <div class="podcast topic">
                    <img src="over.jpg" alt="حلقة عن الصحة النفسية"/>
                    <h3>اضطراب فرط الحركة ونقص الانتباه</h3>
                    <p>  مجموعة من المشكلات المستمرة مثل صعوبة الحفاظ على الانتباه وفرط النشاط والسلوك الاندفاعي.</p>
                    <a href='/ekt2ab' className="btn">المزيد</a>
                </div>
            </div>
        </section>
        </main>
        <Footer/>
   </>
  )
}

export default Discorders;