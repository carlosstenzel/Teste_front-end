import styled from 'styled-components';

export const Funds = styled.div`
  font-size: 13px;
  padding: 40px 0px !important;

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
  tbody tr:nth-child(2n) {
    background: #fff;
  }
  tbody tr {
    border-bottom: 1px solid #d2d2d2;
  }
  .fund:hover {
    background: #d9f5fb;
    cursor: pointer;
  }

  .nonefunds {
    th {
      padding: 50px 0;
      text-align: center !important;
    }
  }

  .spinner svg {
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
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
  .icon_quota {
    display: block;
    margin-top: 25px;
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
  .fund-risk-cell {
    & > div {
      bottom: 0px;
      float: left;
      height: calc(100% + 2px);
      left: 0px;
      position: absolute;
      top: -2px;
      width: 7px;
    }

    .fund-info-risk-level-1 {
      background: #a6ecfc;
    }
    .fund-info-risk-level-2 {
      background: #68f1dd;
    }
    .fund-info-risk-level-3 {
      background: #91ed6e;
    }
    .fund-info-risk-level-4 {
      background: #b0f42a;
    }
    .fund-info-risk-level-5 {
      background: #ddf40c;
    }
    .fund-info-risk-level-6 {
      background: #faf00e;
    }
    .fund-info-risk-level-7 {
      background: #ffdc00;
    }
    .fund-info-risk-level-8 {
      background: #fb0;
    }
    .fund-info-risk-level-9 {
      background: #f80;
    }
    .fund-info-risk-level-10 {
      background: #ff5e00;
    }
    .fund-info-risk-level-11 {
      background: #ff0600;
    }
    .fund-info-risk-level-12 {
      background: #b51414;
    }
  }

  .fund-detail {
    padding-top: 20px;
    color: #444;
    font-size: 14px;
    overflow: hidden;
    transition: visibility 0.3s ease;
    visibility: collapse;

    ul {
      list-style: none;
      margin: 0;
      margin-top: 4rem;
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
      strong {
        margin-right: 8px;
      }
      svg {
        margin-left: 8px;
      }
    }
  }
`;
