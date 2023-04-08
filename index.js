import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


const YourComponent = () => (
  <Image
    src="/images/safi.jpeg" // Route of the image file
    height={170} // Desired size with correct aspect ratio
    width={170} // Desired size with correct aspect ratio
    alt="Safi Ullah"
  />
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App with SAFI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Read <a href="http://localhost:3000/post/firstpost">This Page </a>
          For MY INTRODUCTION
        </h1>
        <YourComponent/>

        <p className={styles.description}>
          Learn More About Safi
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/SafiUllahAdam" className={styles.card}>
            <h3>My Github &rarr;</h3>
            <p>GitHub provides version control, collaboration, and code management for developers in one platform.</p>
          </a>

          <a href="https://www.linkedin.com/in/safi-ullah-adam/" className={styles.card}>
            <h3>My Linkedin &rarr;</h3>
            <p>LinkedIn provides a platform for networking, career development and industry insights to help to establish professional identity</p>
          </a>
        </div>
      </main>

      <footer>
        <a
        >
           {' '}
          <img src="/WhatsApp.svg.png" alt="My Whatsapp" className={styles.logo} />
        </a>
        <p>+92 318 7696133</p>
        <a
        >
           {' '}
          <img src="/Gmail.png" alt="My Email" className={styles.logo} />
        </a>
        <div><p>   .  safiullahf20@nutech.edu.pk</p></div>
        
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
