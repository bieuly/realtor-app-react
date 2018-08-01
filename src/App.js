import React, { Component } from 'react'
import './App.css';
import { Transition, Icon } from 'semantic-ui-react'
import RealtyApp from './RealtorApp'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            hover: true,
            showApp: false
        }
    }

    handleOnHover = () => {
        console.log("heuy")
        this.setState((prevState)=>{
            return {
                hover: !prevState.hover
            }
        })
    }

    handleOnClick = () => {
        this.setState({showApp: true})
    }

    render() {
        if(this.state.showApp) {
            return <RealtyApp/>
        }
        return (
            <div id="titleScreen" className="App App-title-header">
                {/* Why can't I provide class here for css on h1? */}
                <Transition animation="fade up" transitionOnMount={true} duration={1600}>
                <h1>
                    Welcome.
                    <Transition animation="tada" visible={this.state.hover} duration={550}>
                        <Icon name="building outline" size="large" onClick={()=>console.log("hi")} onMouseOver={this.handleOnHover} onClick={this.handleOnClick}/>
                    </Transition>
                    </h1>
                </Transition>
            </div>
        );
    }
}