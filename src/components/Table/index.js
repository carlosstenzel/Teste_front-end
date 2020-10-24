import React, { useRef, useState } from 'react';
import { Funds } from './styles';

import {
  MdReply,
  MdStars,
  MdHelpOutline,
  MdInfoOutline,
  MdBlock,
} from 'react-icons/md';

import Tooltip from '../Tooltip';
import SpinnerTable from '../../_layout/spinnerTable';
import NotFoundFund from '../../_layout/notFoundFund';

import formateDate from '../../utils/formateDate';
import formateAmout from '../../utils/formateAmout';
import DetailsFund from './detailsFund';

export function TableContainer({ data }) {
  const funds = data;

  return (
    <Funds className="card">
      <table>
        <thead className="hidden-small hidden-medium">
          <tr>
            <th>Fundo</th>
            <th>Data da cota</th>
            <th>Mes (%)</th>
            <th>2016 (%)</th>
            <th>12 M (%)</th>
            <th>Aplicação mínima (R$)</th>
            <th>Prazo do resgate</th>
            <th>Aplicar</th>
          </tr>
        </thead>
        <tbody>
          {funds === null ? (
            <SpinnerTable />
          ) : funds.length > 0 ? (
            funds.map((nameFunds, index) => {
              return (
                <React.Fragment key={index}>
                  <tr className="strategy-name ">
                    <th colSpan="8">{nameFunds.nameMacro}</th>
                  </tr>
                  {Object.keys(nameFunds.filterFundClass).map((item) => (
                    <React.Fragment key={item}>
                      <tr className="strategy-funds">
                        <th colSpan="8">{item}</th>
                      </tr>
                      {Object.keys(item).map((li) => {
                        var ObjFunds = nameFunds.filterFundClass[item][li];

                        return (
                          <React.Fragment key={li}>
                            {ObjFunds ? (
                              <TableChildren
                                data={ObjFunds}
                                nameMacro={nameFunds.nameMacro}
                                nameMacroSub={item}
                              />
                            ) : null}
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              );
            })
          ) : (
            <NotFoundFund />
          )}
        </tbody>
      </table>
    </Funds>
  );
}

export function TableChildren({ data, nameMacro, nameMacroSub }) {
  const ObjFunds = data;

  const [setActive, setActiveState] = useState(false);
  const [, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleAccordion(ObjFunds) {
    setActiveState(!setActive ? true : false);
    setHeightState(setActive ? '0px' : `${content.current.scrollHeight}px`);
  }

  return (
    <>
      <tr onClick={toggleAccordion} className="fund">
        <td className="fund-name-cell">
          <div className="fund-risk-cell">
            <div
              className={`fund-info-risk-level-${ObjFunds.specification.fund_risk_profile.score_range_order}`}
            ></div>
          </div>
          <p className="fund-icons">
            {ObjFunds.simple_name}

            {ObjFunds.specification.is_qualified ? (
              <Tooltip title="Fundo para investidor qualificado">
                <MdStars color="#639d31" size={16} />
              </Tooltip>
            ) : null}

            <span className="fund-type">
              {nameMacro} | {nameMacroSub}
            </span>
          </p>
        </td>
        <td className="text-center">{formateDate(ObjFunds.quota_date)}</td>
        <td className="text-center">
          {(ObjFunds.profitabilities.month * 100).toFixed(2)}
        </td>
        <td className="text-center">
          {(ObjFunds.profitabilities.year * 100).toFixed(2)}
        </td>
        <td className="text-center">
          {(ObjFunds.profitabilities.m12 * 100).toFixed(2)}
        </td>
        <td className="text-center">
          {formateAmout(
            ObjFunds.operability.minimum_initial_application_amount
          )}
        </td>
        <td className="text-center icon_quota">
          <Tooltip
            className="hidden-small hidden-medium"
            title={ObjFunds.operability.retrieval_quotation_days_str}
            dark={false}
          >
            <MdInfoOutline color="#444" size={20} />
          </Tooltip>
          <span className="hidden-large">
            {ObjFunds.operability.retrieval_quotation_days_str}
          </span>
        </td>
        <td className="text-center">
          {!ObjFunds.is_closed_to_capture ? (
            <button className="button small button-apply" type="button">
              <span className="hidden-large"> Aplicar </span>
              <MdReply size={20} />
            </button>
          ) : (
            <MdBlock color="#9c9d9e" size={25} />
          )}
        </td>
      </tr>
      <tr
        className="fund-detail"
        ref={content}
        style={{
          visibility: `${setActive ? 'visible' : 'collapse'}`,
          display: `${setActive ? 'contents' : 'none'}`,
        }}
      >
        <td colSpan="8">
          <div className="grid-container">
            <div className="grid-x">
              <div className="small-12 medium-6 large-6  cell"></div>
              <div className="small-12 medium-6 large-6  cell">
                <DetailsFund fund={ObjFunds} />
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
