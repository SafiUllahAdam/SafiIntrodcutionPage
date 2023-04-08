import Link from 'next/link';
import styles from './FirstPost.module.css';

export default function FirstPost() {
  return (
    <>
      <h1>Hello There ! My Name is Safi Ullah Adam</h1>
      <h2>
        <Link href="/">Back To Main Page</Link>
      </h2>
      <h2 className={styles.title}>
        Click here{' '}
        <a href="http://localhost:3000/post/secondpost">to Know about my details
        </a>
      </h2>
    </>
  );
}
