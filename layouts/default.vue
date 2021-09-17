<template>
  <div class="wrap">
    <Nuxt />
  </div>
</template>
<style>
/* Box sizing rules */
/* Box sizingの定義 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
/* デフォルトのpaddingを削除 */
ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* Remove default margin */
/* デフォルトのmarginを削除 */
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
/* bodyのデフォルトを定義 */
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements */
ul,
ol {
  list-style: none;
}

/* A elements that don't have a class get default styles */
/* classを持たない要素はデフォルトのスタイルを取得 */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
/* img要素の扱いを簡単にする */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
/* article要素内の要素に自然な流れとリズムを定義 */
/*
article > * + * {
  margin-top: 1em;
}
*/
/* Inherit fonts for inputs and buttons */
/* inputやbuttonなどのフォントは継承を定義 */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
/* 見たくない人用に、すべてのアニメーションとトランジションを削除 */
/*
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}*/
.wrap {
  padding: 20px 0 60px;
  min-height: 100vh;
  background-color: #bfdcff;
}
body {
  color: #000000d1;
}
.blogTitle {
  width: 680px;
  margin: auto;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: gray;
}
article {
  width: 680px;
  margin: auto;
  padding: 25px;
  background-color: #fff;
  border-radius: 5px;
}
article + article {
  margin-top: 30px;
}
.title {
  font-size: 32px;
  font-weight: bold;
  border-bottom: 1px solid #e3e3e3;
  line-height: 1.6;
}
.date {
  padding-top: 16px;
  text-align: right;
  font-size: 12px;
  color: gray;
}
.body {
  padding: 16px 0;
}
</style>