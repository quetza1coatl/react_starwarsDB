import React, { Component } from 'react';
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import './people-page.css';
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component{
    swapiService = new SwapiService();
    state = {
        selectedPerson: 1,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch(){
        this.setState({ hasError: true });
    }

    render(){
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return (
            <div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPeople}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}