import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 15px;
        font-family: 'Nunito';
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
    }

    label.circle-checkbox {
        display: inline-block;
        position: relative;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        input {
            position: relative;
            opacity: 0;
            height: 0;
            width: 0;
        }
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            background-color: #FFF; //background do checkbox
            box-shadow: 1px 1px 5px #BFBFBF;
        }
        &:hover input ~ .checkmark {
            background-color: #f0f0f0; //background do checkbox no hover
        }
        input:checked ~ .checkmark { 
            background-color: #EB9328; //background do checkbox no checked
            box-shadow: none;
        }
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        input:checked ~ .checkmark:after {
            display: block;
        }
        .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white; //cor do check
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
    
    label.square-checkbox {
        display: inline-block;
        position: relative;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        input {
            position: relative;
            opacity: 0;
            height: 0;
            width: 0;
        }
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            border-radius: 2px;
            background-color: #FFF; //background do checkbox
            box-shadow: 1px 1px 5px #BFBFBF;
        }
        &:hover input ~ .checkmark {
            background-color: #f0f0f0; //background do checkbox no hover
        }
        input:checked ~ .checkmark { 
            background-color: #34EBC3; //background do checkbox no checked
            box-shadow: none;
        }
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        input:checked ~ .checkmark:after {
            display: block;
        }
        .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white; //cor do check
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
`