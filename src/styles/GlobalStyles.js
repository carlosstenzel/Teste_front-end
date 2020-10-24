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
   -webkit-font-smoothing: antialiased !important;
 }

 h1, h2, h3, h4, h5, h6, p {
  font-family: 'Roboto Slab', serif;
 }

 .card {
   border-radius: 5px;
   padding: 25px 15px 35px;

   .color-footer-card {
      color: #333;

      @media (max-width: 480px) {
      font-size: 0.9rem;

    }
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

.button-apply {
    background: #119c9f;
    border: solid 2px transparent;
    color: #fff;

    height: 20px;
    display: flex;
    width: 20px;

    border-radius: 50%;

    svg {
      transform: rotate(90deg) translateX(-1px) translateY(-1px);
      color: #fff;
      text-align: center;
      margin-left: -9px;
      margin-top: -8px;
      z-index: 999;
      position: absolute;
    }
  }

    @media (max-width: 480px) {
      .hidden-small {
        display: none !important;

      }
    }
    @media (min-width: 481px) and (max-width:812px) {

      .hidden-medium {
        display: none !important;

      }
    }

    @media (min-width: 813px) {

      .hidden-large {
        display: none !important;
      }
    }


`;
