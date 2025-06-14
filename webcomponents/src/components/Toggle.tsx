import styled from "styled-components";

interface ToggleProps {
  isChecked: boolean;
  onToggle: () => void;
}
const Toggle = ({ isChecked, onToggle }: ToggleProps) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input checked={isChecked} onChange={onToggle} type="checkbox" />
        <div className="slider">
          <div className="circle">
            <svg
              className="cross"
              xmlSpace="preserve"
              style={{}}
              viewBox="0 0 365.696 365.696"
              y={0}
              x={0}
              height={6}
              width={6}
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  data-original="#000000"
                  fill="currentColor"
                  d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                />
              </g>
            </svg>
            <svg
              className="checkmark"
              xmlSpace="preserve"
              style={{}}
              viewBox="0 0 24 24"
              y={0}
              x={0}
              height={10}
              width={10}
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  data-original="#000000"
                  fill="currentColor"
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                />
              </g>
            </svg>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex; /* Ensure the wrapper itself is a flex container */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  width: auto; /* Allow the wrapper to size itself based on content */
  height: auto; /* Allow the wrapper to size itself based on content */
  margin: 0; /* Remove any default margins */
  padding: 0; /* Remove any default paddings */

  .switch {
    /* Existing styles for the switch */
    --switch-width: 46px;
    --switch-height: 24px;
    --switch-bg: rgb(131, 131, 131);
    --switch-checked-bg: rgb(0, 218, 80);
    --switch-offset: calc((var(--switch-height) - var(--circle-diameter)) / 2);
    --switch-transition: all 0.2s cubic-bezier(0.27, 0.2, 0.25, 1.51);
    /* circle */
    --circle-diameter: 18px;
    --circle-bg: #fff;
    --circle-shadow: 1px 1px 2px rgba(146, 146, 146, 0.45);
    --circle-checked-shadow: -1px 1px 2px rgba(163, 163, 163, 0.45);
    --circle-transition: var(--switch-transition);
    /* icon */
    --icon-transition: all 0.2s cubic-bezier(0.27, 0.2, 0.25, 1.51);
    --icon-cross-color: var(--switch-bg);
    --icon-cross-size: 6px;
    --icon-checkmark-color: var(--switch-checked-bg);
    --icon-checkmark-size: 10px;
    /* effect line */
    --effect-width: calc(var(--circle-diameter) / 2);
    --effect-height: calc(var(--effect-width) / 2 - 1px);
    --effect-bg: var(--circle-bg);
    --effect-border-radius: 1px;
    --effect-transition: all 0.2s ease-in-out;
  }

  .switch {
    display: inline-block;
  }

  .slider {
    /* Existing styles for the slider */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .circle {
    /* Existing styles for the circle */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .switch input {
    display: none;
  }

  .switch svg {
    -webkit-transition: var(--icon-transition);
    -o-transition: var(--icon-transition);
    transition: var(--icon-transition);
    position: absolute;
    height: auto;
  }

  .switch .checkmark {
    width: var(--icon-checkmark-size);
    color: var(--icon-checkmark-color);
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .switch .cross {
    width: var(--icon-cross-size);
    color: var(--icon-cross-color);
  }

  .slider {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: var(--switch-width);
    height: var(--switch-height);
    background: var(--switch-bg);
    border-radius: 999px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    -webkit-transition: var(--switch-transition);
    -o-transition: var(--switch-transition);
    transition: var(--switch-transition);
    cursor: pointer;
  }

  .circle {
    width: var(--circle-diameter);
    height: var(--circle-diameter);
    background: var(--circle-bg);
    border-radius: inherit;
    -webkit-box-shadow: var(--circle-shadow);
    box-shadow: var(--circle-shadow);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: var(--circle-transition);
    -o-transition: var(--circle-transition);
    transition: var(--circle-transition);
    z-index: 1;
    position: absolute;
    left: var(--switch-offset);
  }

  .slider::before {
    content: "";
    position: absolute;
    width: var(--effect-width);
    height: var(--effect-height);
    left: calc(var(--switch-offset) + (var(--effect-width) / 2));
    background: var(--effect-bg);
    border-radius: var(--effect-border-radius);
    -webkit-transition: var(--effect-transition);
    -o-transition: var(--effect-transition);
    transition: var(--effect-transition);
  }

  /* actions */

  .switch input:checked + .slider {
    background: var(--switch-checked-bg);
  }

  .switch input:checked + .slider .checkmark {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  .switch input:checked + .slider .cross {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .switch input:checked + .slider::before {
    left: calc(
      100% - var(--effect-width) - (var(--effect-width) / 2) -
        var(--switch-offset)
    );
  }

  .switch input:checked + .slider .circle {
    left: calc(100% - var(--circle-diameter) - var(--switch-offset));
    -webkit-box-shadow: var(--circle-checked-shadow);
    box-shadow: var(--circle-checked-shadow);
  }
`;

export default Toggle;
