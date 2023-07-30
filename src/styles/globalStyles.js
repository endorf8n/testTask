import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  margin: 0;
  background: linear-gradient(to right, #be93c5, #7bc6cc);
 height: 100vh;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

  `;
