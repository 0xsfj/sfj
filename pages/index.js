import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const TitleSVG = (props) => {
  return (
    <svg width={383} height={162} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M40.723 126.119l7.353-5.985 21.717-15.561.17-5.472c0-11.457-27.188-14.022-36.08-15.903-6.498-1.539-10.944-5.13-10.944-11.97V55.154c2.907-1.368 6.498-2.223 10.773.342l12.483 8.892.01.01c.33.322 8.43 8.068 19.484 1.871 5.985-3.591 9.063-10.431 9.063-10.431-4.446 3.249-11.8-1.368-12.312-1.71L44.485 42.329c-2.907-2.052-7.011-1.71-9.747.513l-7.524 5.985L5.497 64.388v.342c0 23.769 23.769 20.178 34.029 21.888 10.43 1.71 13.338 8.721 13.338 16.587l-.171 10.602c-2.736 1.368-6.67 2.223-10.944-.342l-12.654-8.892-.01-.01c-.333-.326-8.43-8.066-19.313-1.871-5.985 3.591-9.063 10.431-9.063 10.431 4.446-3.249 11.799 1.368 12.312 1.71l17.955 11.799c2.907 2.052 7.01 1.881 9.747-.513zM96.137 128l11.628-14.364s.17 0 .17-.171c0 0-.854-2.052-5.813-3.762V57.035h4.788l6.498-14.535h-11.286l.17-19.323c2.908-1.368 7.012-2.394 11.629.342l12.996 9.405.044.036.09.072c1.173.923 9.95 7.303 21.24 1.26 5.815-3.078 8.55-10.26 8.55-10.26-4.787 3.249-12.311-1.539-12.824-1.881l-18.81-12.483c-3.25-2.052-7.353-1.881-10.431.513l-7.695 6.327-22.743 16.416V42.5l-2.394.171-5.13 14.364h7.353v55.746c-2.223 1.539-5.472 5.985-5.472 5.985s.5-.086 1.36-.096h.244c3.11.017 10.156 1.066 15.838 9.33zm16.255 31.464l7.695-6.327L143 136.721l-.171-79.002c2.394-1.539 5.643-5.985 5.643-5.985s-.5.086-1.36.096h-.244c-3.11-.017-10.157-1.066-15.838-9.33l-11.628 14.364-.018.018-.135.135-.018.018s.684 2.052 5.643 3.762l.17 85.671c-2.906 1.368-6.497 3.078-11.627-.342 0 0-6.156-4.446-8.208-5.814-10.944-8.037-18.297-7.011-22.914-3.762-4.96 3.42-6.84 9.063-6.84 9.063 8.208-5.472 20.52 9.918 26.676 14.193 3.078 2.394 7.182 2.052 10.26-.342zM163.702 128l9.234-9.234-8.892-8.892-9.234 9.234 8.892 8.892zm45.667-1.881l7.695-6.327 19.323-13.851v-2.394l-15.048 8.721c-2.907 1.368-7.182 2.394-11.799-.342l-12.141-8.55v-5.985l34.371-27.36c9.918-1.197 15.048-14.022 15.048-14.022-2.816 4.485-9.96.763-16.384-3.871l-.629-.459c-3.865-2.842-7.404-5.932-9.492-7.64-2.907-2.394-7.353-1.881-10.26.513l-7.866 6.327-22.914 16.416v46.341c.513.342.855.513 1.026.513l18.81 12.483c3.078 2.052 7.353 1.881 10.26-.513zm-11.97-34.542V57.548c2.907-1.368 7.011-2.736 11.628.342l2.324 1.66.484.346 3.34 2.385.884.632 6.135 4.382c2.223 1.368 1.539 1.368 3.42 1.71l-28.215 22.572zM298.641 110.9s-.067.089-.197.245l-.095.113c-1.457 1.719-8.163 8.808-15.269 3.062l-5.643-4.788V48.143l17.955.171v-5.643l-17.955-.171v-3.42c0-26.676 5.472-27.873 5.472-27.873-15.732 0-23.427 13.851-23.427 31.293h-8.037v5.643h8.037v60.363c-4.617 3.249-6.327 8.379-6.327 8.379 2.565-1.881 6.327 1.368 6.327 1.368l9.747 6.669c21.033 11.799 29.412-14.022 29.412-14.022zM365 128l11.8-14.364s.17 0 0-.171c0 0-.685-2.052-5.644-3.762V70.544c7.695-3.42 11.8-12.312 11.8-12.312-4.618 3.42-12.313-1.539-12.826-1.881l-18.81-12.312c-3.078-2.052-7.353-1.881-10.26.513l-9.918 8.037-2.736 2.052V27.794v-.023l-.001-.07-.001-.185v-.28c.01-3.257.395-19.894 7.013-26.973l-15.219 9.234-13.509 8.037s3.762 2.394 3.762 10.26v84.987c-2.12 1.467-5.172 5.578-5.451 5.957l-.02.028s.499-.086 1.357-.096h.243c3.103.017 10.118 1.066 15.67 9.33l11.8-14.364s.17 0 .17-.171l-.005-.01c-.073-.16-1.056-2.113-5.809-3.752V57.377c2.907-1.368 7.182-2.223 11.628.513l13.167 9.405v45.486c-2.12 1.467-5.172 5.578-5.451 5.957l-.02.028s.499-.086 1.357-.096h.243c3.103.017 10.118 1.066 15.67 9.33z"
        fill="#EB4727"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>sfj.eth</title>
        <meta name="description" content="Web3 Interface Developer" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" href="/fonts/Tendencious.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Rockyeah-Sans.otf" as="font" crossOrigin="" /> */}
      </Head>

      <main className={styles.main}>
        <TitleSVG />
        {/* <h1 className={styles.title}>sfj.eth</h1> */}

        {/* <footer className={styles.footer}>
          <div className={styles.footerContent}>
            </div>
          <p className="project">ERP Calculation Tool</p>
          <p className="description">React Native iPad Dashboard</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <p className="project">Halloween Horror</p>
            <p className="description">NFT Game with Nextjs & Solidity on Testnet</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <p className="project">Astros NFT</p>
            <p className="description">Nextjs & Solidity on Testnet</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <p className="project">Solidity Guild</p>
            <p className="description">Nextjs Website</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <p className="project">Halloween Horror</p>
            <p className="description">NFT Game with Nextjs & Solidity on Testnet</p>
          </a>
        </footer> */}
      </main>
    </>
  );
}
