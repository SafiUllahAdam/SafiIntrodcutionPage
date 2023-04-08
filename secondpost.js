import Link from 'next/link';
import styles from './secondpost.module.css';

export default function FirstPost() {
    return (
        <>
            <h1>Hello There ! My Name is Safi Ullah Adam</h1>
            <p>I am an Undergraduate Student in National University of Technology(NUTECH)
                Allow me to introduce you to myself, an accomplished undergraduate student at NUTECH university,
                with a keen interest in technology and a wealth of knowledge in various fields. </p>

            <p>I am an individual with a keen interest in cutting-edge technologies, particularly in web 3.0, Solidity,
                and Node.js. I am highly motivated to stay up-to-date with the latest trends and developments in the technology
                industry. I believe that web 3.0 is the future of the internet and has the potential to change the way we interact
                with the online world.</p>

            <p>I am also fascinated by Solidity, an important programming language used to write smart contracts
                on the Ethereum blockchain, which has the potential to disrupt industries such as finance, real estate, and supply chain management.
                Additionally, I have a strong interest in Node.js, a popular server-side JavaScript runtime that enables developers to build high-performance,
                scalable, and efficient applications. With my enthusiasm for these cutting-edge technologies, I am well positioned to become a thought leader
                in my field and make a significant contribution to the future of technology.</p>

            <h2>SKILLS</h2>
            <ul>
                <li><div>
                    Entrepreneurship, Administrative Qualities
                </div></li>
                <li><div>
                    Excellent Communication
                </div></li>
                <li><div>
                    Multitasking Abilities, Decision-Making
                </div></li>
                <li><div>
                    Computer Netwroking
                </div></li>
                <li><div>
                    MATLAB, Packet Tracer
                </div></li>
                <li><div>
                    HTML, CSS, Visual Studio Code
                </div></li>
                <li><div>
                    JavaScript, Node.js, Next.js
                </div></li>
                <li><div>
                    C, C++, Python, Github
                </div></li>
            </ul>

            <h2>
                <Link href="/post/firstpost">Back To Previous Page</Link>
            </h2>

            <h3>
                <Link href="/">Back To Main Page</Link>
            </h3>
        </>
    );
}
