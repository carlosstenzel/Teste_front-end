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


 .funds {
   font-size: 13px;
   padding: 40px 0px;

   thead {
     background: #fff;
     border: none;
     color: #444;

     th {
      padding-left: 16px !important;
     }




   }
   tbody th {
       background: #fff;

     }
     tbody tr:nth-child(2n){
      background: #fff;
     }
 }

.fund:hover{

background: #d9f5fb;

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

 .strategy-funds {
  th {
    background: #f4f5f7 !important;
    padding-left: 16px !important;
    text-align: left;
    color: #505152;
   }
 }

 .fund-name-cell {
  width: 35%;
  padding: 16px 5px 16px 15px !important;
  position: relative;


  .fund-type {
    color: #757678;
    display: block;
  }
  .fund-icons {
    margin-left: 8px;

    svg {
      cursor: pointer;
    }
  }
 }
.fund-risk-cell{

  & > div {
    bottom: 0px;
    float: left;
    height: calc(100% + 2px);
    left: 0px;
    position: absolute;
    top: -2px;
    width: 7px;
  }

 .fund-info-risk-level-1 {background: #a6ecfc;}
 .fund-info-risk-level-2 {background: #68f1dd;}
 .fund-info-risk-level-3 {background: #91ed6e;}
 .fund-info-risk-level-4 {background: #b0f42a;}
 .fund-info-risk-level-5 {background: #ddf40c;}
 .fund-info-risk-level-6 {background: #faf00e;}
 .fund-info-risk-level-7 {background: #ffdc00;}
 .fund-info-risk-level-8 {background: #fb0;}
 .fund-info-risk-level-9 {background: #f80;}
 .fund-info-risk-level-10 {background: #ff5e00;}
 .fund-info-risk-level-11 {background: #ff0600;}
 .fund-info-risk-level-12 {background: #b51414;}




}

.button-apply {
  background: #119c9f;
  border: solid 2px transparent;
  color: #fff;
  display: block;


  height: 20px;
  position: relative;

  width: 20px;
  border-radius: 50% 50%;

  svg {
    transform: rotate(101deg) translateX(-1px) translateY(-1px);
    margin-top: -10px;
    margin-left: -10px;
  }
}

.fund-detail{
  padding-top: 20px;
  color: #444;
  font-size: 14px;

  ul {
    list-style: none;
    margin: 0;


  }

  .fund-link {
      margin-top: 30px;
      text-decoration: underline;
      margin-bottom: 60px;

      a {
        color: #444;
      }
    }

  li {

    strong{
      margin-right: 8px;
    }
    a {
      margin-left: 8px;
    }
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
