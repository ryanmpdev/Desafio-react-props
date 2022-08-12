import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import styled from "styled-components";

export const Caixa = styled.div`
    background: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
  Header{
    margin-top: 10px;
    background: #065A82;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 32vh  
  }

  Main {
    background: #1C7293;
    width: 100%;
    height: 32vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
  }

  Footer {
    background: #9EB3C2;
    width: 100%;
    height: 32vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
  }
`

export default class App extends Component{
    render(){
        return(
            <Caixa>
              <Header nome= "Ryan"/>
              <Main idade= {16} />
              <Footer estudo= "React js" />
            </Caixa>
        )
    }
}