import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Ласкаво просимо до нашого магазину!</h1>
      <p>Тут ви знайдете товари з китайських магазинів за вигідними цінами.</p>

      <div className={styles.block}>
        <div className={styles.text}>
          <h2>Дитячі товари</h2>
          <p>Наш асортимент дитячих товарів включає все, що потрібно для вашої дитини: іграшки, одяг, аксесуари та багато іншого. Ми пропонуємо тільки якісні товари, які відповідають усім стандартам безпеки.</p>
        </div>
        <div className={styles.image}>
          <img src="https://i.postimg.cc/XqsdRjwT/generated-image-1.jpg" alt="Дитячі товари" />
        </div>
      </div>

      <div className={`${styles.block} ${styles.reversed}`}>
        <div className={styles.text}>
          <h2>Аксесуари</h2>
          <p>Наш магазин пропонує широкий вибір аксесуарів для будь-якого випадку. Тут ви знайдете стильні сумки, гаманці, окуляри та інші аксесуари, які допоможуть вам доповнити свій образ.</p>
        </div>
        <div className={styles.image}>
          <img src="https://i.postimg.cc/Hx4Qt4jW/generated-image.jpg" alt="Аксесуари" />
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.text}>
          <h2>Жіночий одяг</h2>
          <p>Наш магазин пропонує модний жіночий одяг на будь-який смак. Ви знайдете сукні, блузи, спідниці, брюки та багато іншого. Ми обираємо тільки найкращі моделі, щоб ви завжди виглядали стильно та елегантно.</p>
        </div>
        <div className={styles.image}>
          <img src="https://i.postimg.cc/4N3zzcGZ/generated-image-2.jpg" alt="Жіночий одяг" />
        </div>
      </div>

      <div className={`${styles.block} ${styles.reversed}`}>
        <div className={styles.text}>
          <h2>Чоловічий одяг</h2>
          <p>Для чоловіків ми пропонуємо якісний та стильний одяг. В нашому асортименті ви знайдете сорочки, брюки, костюми, светри та інші предмети гардеробу, які підійдуть для будь-якого випадку.</p>
        </div>
        <div className={styles.image}>
          <img src="https://i.postimg.cc/8zJMYVs0/generated-image-3.jpg" alt="Чоловічий одяг" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
