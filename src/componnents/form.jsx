import React, { useState } from 'react';
import '../FeedbackForm.css'; // ملف CSS لإضافة الأنماط

function FeedbackForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [rating, setRating] = useState(null);
  const [ratingMessage, setRatingMessage] = useState('');
  const [feedback, setFeedback] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
  });

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = async () => {
    if (rating) {
      setRatingMessage(`شكرًا على تقييمك بـ ${rating} نجوم!`);

      // إرسال البيانات إلى الخادم
      const data = { ...feedback, rating };
      try {
        const response = await fetch('/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('تم إرسال البيانات بنجاح');
        } else {
          console.error('حدث خطأ أثناء إرسال البيانات');
        }
      } catch (error) {
        console.error('خطأ في الاتصال بالخادم:', error);
      }
    } else {
      setRatingMessage('يرجى اختيار عدد النجوم للتقييم.');
    }
  };

  const handleInputChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h1>نموذج الفيدباك</h1>

      <button onClick={() => setIsFormVisible(true)} id="feedbackButton">
        إعطاء ملاحظات
      </button>

      {isFormVisible && (
        <div className="popup">
          <div className="popup-content">
            <button
              className="close-popup"
              onClick={() => setIsFormVisible(false)}
            >
              &times;
            </button>
            <form id="feedbackForm">
              <label htmlFor="q1">ما هو انطباعك العام عن الصفحة؟</label>
              <input
                type="text"
                id="q1"
                value={feedback.q1}
                onChange={handleInputChange}
                placeholder="اكتب هنا..."
              />

              <label htmlFor="q2">ما هو أكثر جزء استفدت منه؟</label>
              <input
                type="text"
                id="q2"
                value={feedback.q2}
                onChange={handleInputChange}
                placeholder="اكتب هنا..."
              />

              <label htmlFor="q3">
                هل واجهت صعوبة في التنقل بين أقسام الصفحة؟
              </label>
              <input
                type="text"
                id="q3"
                value={feedback.q3}
                onChange={handleInputChange}
                placeholder="اكتب هنا..."
              />

              <label htmlFor="q4">ما هو أكثر جزء استفدت منه في الصفحة؟</label>
              <input
                type="text"
                id="q4"
                value={feedback.q4}
                onChange={handleInputChange}
                placeholder="اكتب هنا..."
              />

              <label htmlFor="q5">هل هناك أي مواضيع ترى أنه يجب إضافتها؟</label>
              <input
                type="text"
                id="q5"
                value={feedback.q5}
                onChange={handleInputChange}
                placeholder="اكتب هنا..."
              />

              <label htmlFor="q6">
                إذا كانت لديك أي ملاحظات أو اقتراحات لتحسين الصفحة، يرجى
                ذكرها:
              </label>
              <input
                type="text"
                id="q6"
                value={feedback.q6}
                onChange={handleInputChange}
                placeholder="اكتب هنا..."
              />

              <div className="stars">
                {[5, 4, 3, 2, 1].map((value) => (
                  <React.Fragment key={value}>
                    <input
                      type="radio"
                      id={`star${value}`}
                      name="rating"
                      value={value}
                      checked={rating === String(value)}
                      onChange={handleRatingChange}
                    />
                    <label htmlFor={`star${value}`}>★</label>
                  </React.Fragment>
                ))}
              </div>

              <button type="button" onClick={handleSubmit} id="submitButton">
                إرسال
              </button>
            </form>
            {ratingMessage && <div id="ratingMessage">{ratingMessage}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;