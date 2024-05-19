import styles from '../../styles/Outcome.module.css';

type OutcomeProps = {
  success: boolean;
  failure: string;
};

const Outcome = ({ success, failure }: OutcomeProps) => {
  return (
    <>
      {success ? (
        <div className={styles.success}>
          <h3 className={styles.success_text}>Success</h3>
        </div>
      ) : (
        <div className={styles.failure}>
          <h3 className={styles.failure_text}>Failure</h3>
          <ul>
            <li>Reason for failure: {failure}.</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Outcome;
