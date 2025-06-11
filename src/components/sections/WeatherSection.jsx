import styles from "./WeatherSection.module.css";

function WeatherSection({ temp, wind, rain, weather, backgroundImage, currentIndex, setCurrentIndex }) {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const month = monthNames[now.getMonth()];
  const dateString = `${month} ${day}`;

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})`,
      }}
    >
      <div className={styles.leftInfo}>
        <div className={styles.temp}>{temp}℃</div>
        <p className={styles.location}>UIWANG, KOREA</p>
        <div className={styles.date}>{dateString}</div>
      </div>

      <div className={styles.bottomInfo}>
        <div className={styles.weather}>{weather}</div>
        <div>{wind} m/s</div>
        <div>{rain} mm</div>
      </div>

      {/* ✅ 동그라미 네비게이션 */}
      <div className={styles.dotContainer}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default WeatherSection;





