import { Title } from '@solidjs/meta';
import Counter from '~/components/Counter';
import styles from './index.module.scss';
import { createSignal, For, onMount, Show } from 'solid-js';

const GALLERY = [
  {
    img: '/gallery/zara.png',
    url: 'https://zarazahed.github.io/overflow/',
    slack: '@zara',
    slackUrl: 'https://hackclub.slack.com/team/U08T43WFW80',
  },
];

export default function Home() {
  const [page, setPage] = createSignal(0);
  const [typing, setTyping] = createSignal('');

  onMount(() => {
    const text = '* {	overflow: hidden;}a ysws without scroll';
    const interval = setInterval(() => {
      setTyping(text.slice(0, typing().length + 1));
    }, 100);

    document.onkeydown = (e) => {
      if (e.key === 'ArrowRight') {
        if (page() === 0) {
          setPage(1);
        } else if (page() === 3) {
          setPage(0);
        }
      } else if (e.key === 'ArrowUp') {
        if (page() === 0) {
          setPage(2);
        } else if (page() === 4) {
          setPage(0);
        }
      } else if (e.key === 'ArrowLeft') {
        if (page() === 0) {
          setPage(3);
        } else if (page() === 1) {
          setPage(0);
        }
      } else if (e.key === 'ArrowDown') {
        if (page() === 0) {
          setPage(4);
        } else if (page() === 2) {
          setPage(0);
        }
      }
    };

    return () => clearInterval(interval);
  });

  return (
    <main class={styles.main}>
      <div
        class={styles.content}
        style={`transform: translateX(${
          page() === 1 ? -80 : page() === 3 ? 80 : 0
        }vw) translateY(${page() === 2 ? 75 : page() === 4 ? -75 : 0}vh);`}
      >
        <div class={styles.background}>
          <svg
            width="2000"
            height="2000"
            viewBox="0 0 2000 2000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_13_59)">
              <rect width="2000" height="2000" fill="white" />
              <path
                d="M-1618.49 -41.933C-1497.21 -31.0196 -1138.62 16.1523 -890.835 23.5472C-643.047 30.9421 -384.782 9.47333 -131.756 2.4364C121.27 -4.60054 355.62 -4.63019 627.323 -18.6744C899.026 -32.7186 1240.2 -60.36 1498.46 -81.8288C1756.73 -103.298 2063.84 -136.544 2176.91 -147.487L2858.05 1667.96L-503.715 2929.27L-1618.49 -41.933Z"
                fill="url(#paint0_linear_13_59)"
              />
              <path
                d="M-1649.26 -123.943C-1557.01 -133.616 -1312.39 -163.05 -1095.78 -181.977C-879.173 -200.904 -560.983 -233.011 -349.614 -237.507C-138.245 -242.002 -20.2584 -211.461 172.434 -208.949C365.126 -206.437 576.495 -210.932 806.541 -222.435C1036.59 -233.938 1327.9 -280.894 1552.71 -277.965C1777.51 -275.036 2054.94 -217.044 2155.38 -204.86L2858.05 1667.96L-503.715 2929.27L-1649.26 -123.943Z"
                fill="#5E8EFF"
              />
              <path
                d="M-1526.27 143.853C-1406.89 149.714 -1008.44 189.572 -809.991 179.021C-611.547 168.469 -520.611 98.5218 -335.605 80.5461C-150.599 62.5704 61.2832 59.4438 300.042 71.1663C538.802 82.8888 885.068 154.008 1096.95 150.881C1308.83 147.755 1372.89 62.9579 1571.34 52.4067C1769.78 41.8556 2168.24 81.7131 2287.62 87.5743L2858.05 1607.96L-503.715 2869.27L-1526.27 143.853Z"
                fill="#4C81FF"
              />
              <path
                d="M-1557.04 211.842C-1464.28 203.539 -1199.44 171.204 -1000.48 162.022C-801.524 152.839 -575.689 158.506 -363.293 156.748C-150.897 154.99 34.6218 138.383 273.895 151.474C513.167 164.566 833.071 222.204 1072.34 235.296C1311.62 248.387 1510.57 239.204 1709.53 230.022C1908.49 220.84 2173.33 188.505 2266.09 180.201L2858.05 1757.96L-503.715 3019.27L-1557.04 211.842Z"
                fill="#427AFF"
              />
              <path
                d="M-1510.93 404.735C-1424.92 419 -1182.61 505.091 -994.877 490.326C-807.145 475.56 -567.033 316.477 -384.539 316.143C-202.045 315.81 -90.6082 466.802 100.086 488.325C290.78 509.848 566.657 474.478 759.627 445.281C952.597 416.083 1075.41 313.475 1257.91 313.142C1440.4 312.808 1677.33 429.181 1854.59 443.28C2031.85 457.378 2243.63 405.323 2321.44 397.732L2858.05 1827.96L-503.715 3089.27L-1510.93 404.735Z"
                fill="#3B73F5"
              />
              <path
                d="M-1464.82 597.628C-1378.59 612.48 -1125.14 671.467 -947.448 686.738C-769.752 702.01 -600.256 695.425 -398.646 689.258C-197.035 683.09 87.4815 670.75 262.215 649.733C436.949 628.716 475.023 584.174 649.757 563.158C824.49 542.141 1109.01 529.801 1310.62 523.633C1512.23 517.466 1681.72 510.881 1859.42 526.152C2037.12 541.424 2290.56 600.411 2376.79 615.262L2858.05 1897.96L-503.715 3159.27L-1464.82 597.628Z"
                fill="#3668DD"
              />
              <path
                d="M-1338 705.309C-1204.4 692.286 -787.886 609.922 -536.4 627.172C-284.914 644.422 -75.3324 777.126 170.915 808.808C417.163 840.49 673.887 843.308 941.087 817.263C1208.29 791.217 1512.15 664.149 1774.12 652.535C2036.08 640.921 2389.74 731.739 2512.86 747.58L2861.89 1677.84L-499.88 2939.15L-1338 705.309Z"
                fill="#2958C7"
              />
              <path
                d="M-1373 836.309C-1306.02 830.264 -1137.21 811.724 -971.148 800.044C-805.086 788.364 -556.124 770.494 -376.627 766.229C-197.129 761.965 -54.9848 771.716 105.836 774.459C266.657 777.202 427.478 779.945 588.299 782.688C749.12 785.431 901.747 766.336 1070.76 790.918C1239.78 815.5 1452.05 898.59 1602.39 930.179C1752.72 961.769 1825.4 985.125 1972.79 980.453C2120.18 975.78 2401.05 915.195 2486.7 902.144L2856.95 1888.98L-504.813 3150.29L-1373 836.309Z"
                fill="#1F4AB1"
              />
              <path
                d="M-1249.62 921.211C-1115.4 909.83 -688.839 854.251 -444.32 852.929C-199.802 851.608 -29.9903 878.315 217.49 913.282C464.97 948.249 755.728 1041.78 1040.56 1062.73C1325.39 1083.68 1663.3 1047.32 1926.49 1039C2189.68 1030.67 2504.19 1017.13 2619.73 1012.76L2858.05 1647.96L-503.715 2909.27L-1249.62 921.211Z"
                fill="#1D429A"
              />
              <path
                d="M-1280.39 1114.2C-1156.34 1132.5 -808.11 1208.86 -536.098 1224.03C-264.087 1239.2 74.4296 1204.48 351.679 1205.22C628.928 1205.96 869.927 1142.25 1128.5 1150C1387.07 1157.75 1657.98 1251.37 1903.12 1251.69C2148.25 1252.02 2482.36 1233.94 2598.2 1230.38L2858.05 1922.96L-503.715 3184.27L-1280.39 1114.2Z"
                fill="#132C69"
              />
              <path
                d="M-1157.4 1357C-1044.17 1346.48 -680.553 1293.48 -478.001 1293.88C-275.448 1294.28 -158.078 1351.57 57.9131 1359.39C273.904 1367.21 583.277 1340 817.945 1340.82C1052.61 1341.63 1260.4 1327.6 1465.92 1364.29C1671.43 1400.97 1840.28 1538.68 2051.03 1560.94C2261.79 1583.19 2617.2 1508.34 2730.43 1497.82L2858.05 1837.96L-503.715 3099.27L-1157.4 1357Z"
                fill="#0E255B"
              />
              <path
                d="M-1111 1450.31C-975.859 1441.39 -573.399 1378.35 -300.156 1396.81C-26.9121 1415.26 287.333 1543 528.462 1561.04C769.591 1579.08 886.812 1494.01 1146.62 1505.04C1406.42 1516.07 1814.05 1608.77 2087.29 1627.22C2360.54 1645.68 2669.61 1617.68 2786.08 1615.77L2858.34 1808.38L-503.422 3069.69L-1111 1450.31Z"
                fill="#07173E"
              />
              <path
                d="M-1065.18 1622.78C-951.438 1613.63 -586.282 1564.74 -382.702 1567.87C-179.123 1571.01 -68.9257 1609.18 156.293 1641.6C381.511 1674.02 724.713 1736.97 968.607 1762.38C1212.5 1787.79 1410.84 1805.36 1619.66 1794.06C1828.48 1782.77 2017.93 1691.47 2221.51 1694.61C2425.09 1697.74 2737.87 1793.17 2841.14 1812.88L2858.05 1857.96L-503.715 3119.27L-1065.18 1622.78Z"
                fill="#07122C"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_13_59"
                x1="62.3971"
                y1="-672.587"
                x2="1177.17"
                y2="2298.61"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="1" stop-color="#020803" />
              </linearGradient>
              <clipPath id="clip0_13_59">
                <rect width="2000" height="2000" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class={`${styles.page} ${styles.center}`}>
          <div class={styles.content}>
            <h1 class={styles.code}>
              {typing().slice(0, 3)}
              {typing().length < 3 ? <p class={styles.blinking}>|</p> : ''}
            </h1>
            <h1>
              {typing().slice(3, 21)}
              {typing().length >= 3 && typing().length < 21 ? (
                <p class={styles.blinking}>|</p>
              ) : (
                ''
              )}
            </h1>
            <h1 class={styles.code}>
              {typing().slice(21, 22)}
              {typing().length >= 21 && typing().length < 22 ? (
                <p class={styles.blinking}>|</p>
              ) : (
                ''
              )}
            </h1>
            <h2>
              {typing().slice(22)}
              {typing().length >= 22 ? <p class={styles.blinking}>|</p> : ''}
            </h2>
          </div>
        </div>
        <div class={`${styles.page} ${styles.right}`}>
          <div class={styles.content}>
            <h1>About</h1>
            <p>
              scrolling on websites is no fun. to solve this, simply add this to
              your css:
            </p>
            <h3>
              {'* {'}
              <br />
              {'	'}overflow: hidden;
              <br />
              {'}'}
            </h3>
            <p>
              your challenge is to make a website that doesn't require
              scrolling.
            </p>
            <p>
              you must use at least 3 interactive elements to reveal more
              information (such as the buttons on this site to switch panels)
            </p>
            <p>
              as a reward, you get a sticker + some flex tape (to stop overflow)
            </p>
          </div>
        </div>

        <div class={`${styles.page} ${styles.bottom}`}>
          <div class={styles.content}>
            <h1>Submit</h1>
            <p>
              To submit, push to github, host your site (I recommend just using
              github sites), and submit using the form below
            </p>
            <a
              href="https://airtable.com/appUSdIXVBUHjchTJ/pagOa02ALSWJGFHb0/form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>SUBMIT!</button>
            </a>
          </div>
        </div>

        <div class={`${styles.page} ${styles.left}`}>
          <div class={styles.content}>
            <h1>FAQ</h1>
            <p>
              <strong>
                My website broke after adding {'* { overflow: hidden; }'}!
              </strong>
              <br />
              That's okay, you can just disable overflow on specific elements or
              re-enable it on specific elements (using overflow: visible;). As
              long as you don't have any scrollbars, you're good. (I had to do
              this on this website)
              <br />
              <br />
              <strong>Where can I find help with html / css / hosting?</strong>
              <br />
              Use the boba drops guide{' '}
              <a
                href="https://www.canva.com/design/DAGr1zQLfE4/eqe5sSP6hE9-4SZez72QFA/view?utm_content=DAGr1zQLfE4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h25bb5bce98"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{' '}
              or ask in{' '}
              <a
                href="https://hackclub.slack.com/archives/C095HDJK3TQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                #overflow-hidden
              </a>
              <br />
              <br />
              <strong>
                If I have an element within the page with a scrollbar, is that
                okay?
              </strong>
              <br />
              No, you can't have any native scrollbars on the page.
              <br />
              <br />
              <strong>I have another question!</strong>
              <br />
              Ask in{' '}
              <a
                href="https://hackclub.slack.com/archives/C095HDJK3TQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                #overflow-hidden
              </a>
              !
            </p>
          </div>
        </div>

        <div class={`${styles.page} ${styles.top}`}>
          <div class={`${styles.content}`}>
            <h1>Gallery</h1>
            <div class={styles.gallery}>
              <For each={GALLERY}>
                {(item) => (
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.img} alt={`${item.slack}'s project`} />
                    </a>
                    <p class={styles.slack}>
                      Made by{' '}
                      <a
                        href={item.slackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.slack}
                      </a>
                    </p>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>

        <div class={styles.buttons}>
          <div
            class={`${styles.button} ${styles.right} ${
              page() === 1 ? styles.backwards : ''
            }`}
            onclick={() => {
              if (page() === 0) {
                setPage(1);
              } else {
                setPage(0);
              }
            }}
          >
            <svg
              width="51"
              height="40"
              viewBox="0 0 51 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1847 1.75531C30.1916 0.747974 31.8243 0.748484 32.8315 1.75531L49.2446 18.1758C50.2518 19.1834 50.2518 20.8166 49.2446 21.8242L32.8315 38.2447C31.8243 39.2515 30.1916 39.252 29.1847 38.2447C28.1778 37.2373 28.1783 35.6039 29.1847 34.5963L41.1955 22.5801H3.57896C2.15464 22.5801 1 21.425 1 20C1 18.575 2.15464 17.4199 3.57896 17.4199H41.1955L29.1847 5.40375C28.1783 4.39609 28.1778 2.76265 29.1847 1.75531Z"
                fill="white"
                stroke="#DBE7FF"
                stroke-width="1.5"
              />
            </svg>
            <Show when={page() !== 1} fallback={<p>back</p>}>
              <p>about</p>
            </Show>
          </div>
          <div
            class={`${styles.button} ${styles.left} ${
              page() === 3 ? styles.backwards : ''
            }`}
            onclick={() => {
              if (page() === 0) {
                setPage(3);
              } else {
                setPage(0);
              }
            }}
          >
            <svg
              width="51"
              height="40"
              viewBox="0 0 51 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1847 1.75531C30.1916 0.747974 31.8243 0.748484 32.8315 1.75531L49.2446 18.1758C50.2518 19.1834 50.2518 20.8166 49.2446 21.8242L32.8315 38.2447C31.8243 39.2515 30.1916 39.252 29.1847 38.2447C28.1778 37.2373 28.1783 35.6039 29.1847 34.5963L41.1955 22.5801H3.57896C2.15464 22.5801 1 21.425 1 20C1 18.575 2.15464 17.4199 3.57896 17.4199H41.1955L29.1847 5.40375C28.1783 4.39609 28.1778 2.76265 29.1847 1.75531Z"
                fill="white"
                stroke="#DBE7FF"
                stroke-width="1.5"
              />
            </svg>
            <Show when={page() !== 3} fallback={<p>back</p>}>
              <p>faq</p>
            </Show>
          </div>
          <div
            class={`${styles.button} ${styles.bottom} ${
              page() === 4 ? styles.backwards : ''
            }`}
            onclick={() => {
              if (page() === 0) {
                setPage(4);
              } else {
                setPage(0);
              }
            }}
          >
            <svg
              width="51"
              height="40"
              viewBox="0 0 51 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1847 1.75531C30.1916 0.747974 31.8243 0.748484 32.8315 1.75531L49.2446 18.1758C50.2518 19.1834 50.2518 20.8166 49.2446 21.8242L32.8315 38.2447C31.8243 39.2515 30.1916 39.252 29.1847 38.2447C28.1778 37.2373 28.1783 35.6039 29.1847 34.5963L41.1955 22.5801H3.57896C2.15464 22.5801 1 21.425 1 20C1 18.575 2.15464 17.4199 3.57896 17.4199H41.1955L29.1847 5.40375C28.1783 4.39609 28.1778 2.76265 29.1847 1.75531Z"
                fill="white"
                stroke="#DBE7FF"
                stroke-width="1.5"
              />
            </svg>
            <Show when={page() !== 4} fallback={<p>back</p>}>
              <p>submit</p>
            </Show>
          </div>
          <div
            class={`${styles.button} ${styles.top} ${
              page() === 2 ? styles.backwards : ''
            }`}
            onclick={() => {
              if (page() === 0) {
                setPage(2);
              } else {
                setPage(0);
              }
            }}
          >
            <svg
              width="51"
              height="40"
              viewBox="0 0 51 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1847 1.75531C30.1916 0.747974 31.8243 0.748484 32.8315 1.75531L49.2446 18.1758C50.2518 19.1834 50.2518 20.8166 49.2446 21.8242L32.8315 38.2447C31.8243 39.2515 30.1916 39.252 29.1847 38.2447C28.1778 37.2373 28.1783 35.6039 29.1847 34.5963L41.1955 22.5801H3.57896C2.15464 22.5801 1 21.425 1 20C1 18.575 2.15464 17.4199 3.57896 17.4199H41.1955L29.1847 5.40375C28.1783 4.39609 28.1778 2.76265 29.1847 1.75531Z"
                fill="white"
                stroke="#DBE7FF"
                stroke-width="1.5"
              />
            </svg>
            <Show when={page() !== 2} fallback={<p>back</p>}>
              <p>gallery</p>
            </Show>
          </div>
        </div>
      </div>
    </main>
  );
}
