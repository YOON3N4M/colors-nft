import { Global, css } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "Arita-dotum-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-dotum-Medium.woff")
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
`;

export default function GlobalStyles() {
  return <Global styles={style} />;
}
