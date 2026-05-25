import styles from "./StatsBar.module.css";

type StatsBarProps = {
  stats: readonly {
    value: string;
    label: string;
  }[];
  actions?: {
    primary: string;
    secondary: string;
  };
};

export function StatsBar({ stats, actions }: StatsBarProps) {
  return (
    <>
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
      {actions ? (
        <div className={styles.mobileActions}>
          <a className="button buttonPrimary" href="#anfrage">
            {actions.primary}
          </a>
          <a className="button buttonSecondary" href="#technische-daten">
            {actions.secondary}
          </a>
        </div>
      ) : null}
    </>
  );
}
