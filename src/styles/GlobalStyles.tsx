import { Global, css } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "Arita-dotum-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-dotum-Medium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "ChosunSm";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.1/ChosunSm.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: "Pretendard Variable";
  }

  * {
    font-family: "Pretendard Variable" !important;
  }

  body {
  }

  a {
    text-decoration: none;
  }

  a:hover {
  }

  //스크롤바 스타일링
  /* *::-webkit-scrollbar {
    width: 5px;
    background-color: #ffffff;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #b4b4b4;
    border-radius: 10px;
  } */

  .no-scroll-bar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .no-scroll-bar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  // 커브
  .curve {
    svg,
    .background {
      position: fixed;
      height: calc(100vh + 600px);
      width: 100vw;
      pointer-events: none;
      left: 0;
      top: 0;
      z-index: 1000;
    }
    .background {
      transition: opacity 0s linear 0.1s;
    }
    .route {
      position: absolute;
      left: 50%;
      top: 40%;
      color: white;
      font-size: 46px;
      z-index: 3;
      transform: translateX(-50%);
      text-align: center;
    }
  }
  //롤링 배너
  .rolling-banner-wrapper {
    .slide-container {
      overflow: hidden;
      // background-color: black;
      .slide-wrapper {
        display: flex;
        flex-wrap: nowrap;
      }

      .slide {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
        //border-top: 1px solid #bbb;
        //border-bottom: 1px solid #bbb;
        padding: 5px 0;

        &.stop {
          animation-play-state: paused;
        }

        .item {
          margin: 0 15px;
          cursor: pointer;
          z-index: 2;
          transition: 0.3s;
          transform: scale(1);
        }
      }
    }
  }

  @keyframes rollingBanner1 {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    50.1% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes rollingBanner2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
  @keyframes rollingBannerReverse1 {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(100%);
    }
    50.1% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  @keyframes rollingBannerReverse2 {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export default function GlobalStyles() {
  return <Global styles={style} />;
}
