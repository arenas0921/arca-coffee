import styles from "./SectionTitle.module.css";

function SectionTitle({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      {subtitle && (
        <p>{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;