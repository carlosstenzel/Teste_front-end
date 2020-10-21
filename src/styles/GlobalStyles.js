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
   -moz-osx-font-smoothing: grayscale;
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






 .strategy-name {



   th {
    background: #e1e1e1 !important;
    text-transform: uppercase;
    padding-left: 16px !important;
    text-align: left;
    color: #505152;
   }

 }


.legenda {
  color: #444;
  h6 {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    margin: 0;

    li {
      margin-bottom: 10px;

      & > svg {
        margin-right: 10px;
        margin-bottom: -6px;
      }

      & > button {
        float: left;
        margin-right: 10px;
      }
   }
  }
}

`;
