import type { InferGetStaticPropsType } from 'next';
import Card from '../components/Card/Card';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { launchData } from '../lib/launchData';

export const getStaticProps = async () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      options: {
        limit: 10,
        select: {
          name: 1,
          date_utc: 1,
          links: {
            patch: {
              small: 1,
            },
          },
          cores: {
            core: 1,
          },
          success: 1,
          failures: 1,
        },
        populate: [
          {
            path: 'payloads',
            select: {
              id: 1,
              type: 1,
            },
          },
          {
            path: 'cores',
            populate: [
              {
                path: 'core',
                select: {
                  serial: 1,
                },
              },
            ],
          },
        ],
      },
    }),
  };

  const launchesRes = await fetch('https://api.spacexdata.com/v5/launches/query', options);
  const launchesData = await launchesRes.json();

  return {
    props: { launches: launchesData },
  };
};

const Home = ({ launches }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
        </style>
      </Head>
      <div className={styles.cntnr}>
        {launches.docs.map((item: launchData) => (
          <Card
            key={item.id}
            image={item.links.patch.small}
            name={item.name}
            date={item.date_utc}
            core={item.cores[0].core.serial}
            payloadId={item.payloads[0].id}
            payloadType={item.payloads[0].type}
            success={item.success}
            failure={item.failures}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
