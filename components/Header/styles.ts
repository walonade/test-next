import styled, {css} from "styled-components"
type HeaderProps = {
    visible: boolean
}
const Header = styled.header<HeaderProps>`
    background-color: #000000;
    color: #ffffff;
    max-height: 350px;
    padding: 90px 10px;
    z-index: 1;
    overflow: hidden;
    display: grid;
    @media (max-width: 750px) {
        padding: 10px 30px 10px 10px;
    }
    ${({visible}) => !visible && css`
        max-height: 20px;
        margin-top: 0;
        width: 100%;
        position: fixed;
        padding: 20px 20px 20px 20px;
    `}
`
const Logo = styled.div`
    font-size: 24px;
    grid-column-start: 1;
    grid-column-end: 3;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    grid-row-start: 1;
    grid-row-end: 2;
    span {
        margin-left: 10px;
        @media (max-width: 750px) {
            display: none;
        }
    }
`
const Menu = styled.div`
    cursor: pointer;
    grid-column-start: 3;
    grid-column-end: 4;
    display: flex;
    font-size: 18px;
    justify-content: flex-end;
`
const IconButton = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 20px;
    span {
        margin-left: 10px;
        &::before {
            content: "";
            position: absolute;
            background: #ffffff;
            width: 100%;
            height: 1px;
            bottom: 0;
            right: 0;
            transform: scaleX(0);
            transform-origin: right;
            transition: 0.5s;
        }
        &:hover {
            &::before {
                transform: scaleX(0.5);
            }
        }
        @media (max-width: 750px) {
            display: none;
        }
    }
`
const Search = styled.div<HeaderProps>`
    margin-top: 40px;
    display: flex;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    display: flex;
    align-content: flex-end;
    flex-direction: column;
    overflow-x: hidden;
    ${visible => !visible && css`
        display: none
    `}
`
const CSSFormAndSlider = css`
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    p {
        outline: none;
        margin-right: 10px;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
`
const Form = styled.form`
    font-size: 72px;
    position: relative;
    height: 80px;
    overflow: hidden;
    span {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
    input {
        font-size: inherit;
        color: #ffffff;
        bottom: 0;
        outline: none;
        position: absolute;
        background: transparent;
        border: none;
        border-bottom: 1px solid #ffffff;
        width: 100%;
    }
    @media (max-width: 600px) {
        font-size: 36px;
        span {
            transform: translate(-50%, 50%);
        }
    }
    ${CSSFormAndSlider}
`
const InputGradient = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwLjQ3OSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
    background-image: -webkit-gradient(
        linear,
        0% 0%,
        100% 0%,
        color-stop(0, rgb(0, 0, 0)),
        color-stop(0.479, rgba(0, 0, 0, 0)),
        color-stop(1, rgb(0, 0, 0))
    );
    background-image: -webkit-repeating-linear-gradient(
        left,
        rgb(0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 47.9%,
        rgb(0, 0, 0) 100%
    );
    background-image: repeating-linear-gradient(
        to right,
        rgb(0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 47.9%,
        rgb(0, 0, 0) 100%
    );
    background-image: -ms-repeating-linear-gradient(
        left,
        rgb(0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 47.9%,
        rgb(0, 0, 0) 100%
    );
`
const SliderContainer = styled.div`
    margin-top: 20px;
    height: 50px;
    font-size: 18px;
    overflow: hidden;
    position: relative;
    ${CSSFormAndSlider}
    @media (max-width: 800px) {
        width: 100%;
    }
`
const SliderGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 20px;
    top: 20px;
    z-index: 1;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.17);
    background-image: -webkit-gradient(
        linear,
        0% 0%,
        100% 0%,
        color-stop(0, rgba(0, 0, 0, 0)),
        color-stop(0.659, rgba(0, 0, 0, 0)),
        color-stop(1, rgb(0, 0, 0))
    );
    background-image: -webkit-repeating-linear-gradient(
        left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 65.9%,
        rgb(0, 0, 0) 100%
    );
    background-image: repeating-linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 65.9%,
        rgb(0, 0, 0) 100%
    );
    background-image: -ms-repeating-linear-gradient(
        left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 65.9%,
        rgb(0, 0, 0) 100%
    );
`
export {Header, Logo, Menu, IconButton, Search, Form, InputGradient, SliderContainer, SliderGradient}