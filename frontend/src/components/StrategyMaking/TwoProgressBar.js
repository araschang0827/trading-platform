import React from "react";
import "./css/TwoProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useNavigate } from "react-router-dom";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  const navigate = useNavigate();


  return (
    <ProgressBar percent={49.5}>
      <Step>
        {(accomplished) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : null}`}
            onClick={() => navigate('/Choose')}
          >
            選擇<br />標的
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : null}`}

          >
            策略<br />制定
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep threestep`}

            style={{ backgroundColor: 'rgb(190, 190, 190)' }}
          >
            資訊<br />一覽
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep fourstep`}

            style={{ backgroundColor: 'rgb(190, 190, 190)' }}
          >
            線上<br />交易
          </div>
        )}
      </Step>
    </ProgressBar>
  )
};


export default MultiStepProgressBar;
