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

  .icon_quota {
    display: block;
    margin-top: 25px;
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
  }

  @media only screen and (max-width: 768px) {
    table {
      width: 100%;
    }
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: inline-block;
    }

    .strategy-name,
    .strategy-funds {
      width: 100%;
      th {
        width: 100%;
      }
    }

    .fund-name-cell {
      width: 95%;

      .fund-risk-cell {
        & > div {
          width: 25px;
          height: 25px;
          left: none;
          position: relative;
          border-radius: 50%;
          margin-right: 10px;
          margin-top: 10px;
        }
      }

      .fund-icons {
        svg {
          margin-left: 8px;
        }
      }
    }

    .fund {
      width: 100%;
      td {
        border: none;

        position: relative;
        padding-left: 50%;
        width: 100%;
      }

      td:before {
        position: absolute;
        top: 6px;
        left: 8px;
        text-align: left;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        font-size: 12px;
      }
      td:nth-of-type(2):before {
        content: 'Data da cota:';
      }
      td:nth-of-type(3):before {
        content: 'Mes (%):';
      }
      td:nth-of-type(4):before {
        content: '2016 (%):';
      }
      td:nth-of-type(5):before {
        content: '12 M (%):';
      }
      td:nth-of-type(6):before {
        content: 'Aplicação mínima (R$):';
      }
      td:nth-of-type(7):before {
        content: 'Prazo do resgate';
      }

      .icon_quota {
        margin-top: 0px;
      }

      td:nth-of-type(8) {
        padding-left: 8px;

        .button-apply {
          width: 40%;
          border-radius: 4px;
          height: auto;
          text-transform: uppercase;
          display: block;

          @media only screen and (max-width: 480px) {
            width: 100%;
          }

          span {
            font-size: 1rem;
            margin-right: 20px;
          }
          svg {
            background: #fff;
            color: #119c9f;
            border-radius: 50%;
            margin-top: 0px;
          }
        }

        &:before {
          width: 0%;
        }
      }
    }

    .fund-detail {
      padding-top: 5px;
    }
  }
`;
