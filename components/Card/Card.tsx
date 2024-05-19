import Image from 'next/image';
import styles from '../../styles/Card.module.css';
import Outcome from '../Outcome/Outcome';

type CardProps = {
  name: string;
  date: string;
  core: string;
  image: string;
  payloadId: string;
  payloadType: string;
  success: boolean;
  failure: [
    {
      alititude: string;
      reason: string;
      time: string;
    }
  ];
};

const Card = ({ name, date, core, image, payloadId, payloadType, success, failure }: CardProps) => {
  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <div className={styles.cntnr} data-cy="card">
      <div className={styles.img_cntnr}>
        <Image className={styles.img} src={image} alt={`A patch for the ${name} launch`} width={100} height={100} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <ul className={styles.launch_data}>
          <li>Launch date: {formattedDate}</li>
          <li>Serial: {core}</li>
          <li>Payload ID: {payloadId}</li>
          <li>Payload: {payloadType}</li>
        </ul>
        <Outcome success={success} failure={failure[0]?.reason} />
      </div>
    </div>
  );
};

export default Card;
