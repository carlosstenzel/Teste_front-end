import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
 }

 body {
   background: #e6e6e6 !important;
   color: #000;
   font-family: 'Roboto Slab', serif;
 }

 h1, h2, h3, h4, h5, h6, p {
  font-family: 'Roboto Slab', serif;
 }

 .card {
   border-radius: 5px;
   padding: 25px 15px 35px;

   .color-footer-card {
      color: #333;
   }
 }

 .search {
    border-top: none;
    border-left: none;
    border-right: none;
    background-image: url("/assets/icon-search.svg");
    background-position: 99% 0.625rem;
    background-repeat: no-repeat;
    box-shadow: none;

    &::placeholder{
      color: #333;
    }

    &:focus {
      border: none;
      border-bottom: 1px solid #119C9F;
      box-shadow: none;
    }
 }

`;
