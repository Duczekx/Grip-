import styles from "./StatsBar.module.css";

type StatsBarProps = {
  stats: readonly {
    value: string;
    label: string;
  }[];
};

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className={styles.stats} aria-label="Product statistics">
      <div className={styles.inner}>
        {stats.map((stat) => (
          <div className={styles.item} key={`${stat.value}-${stat.label}`}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
