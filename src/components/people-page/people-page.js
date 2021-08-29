import React, { Component } from 'react';
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component{
    swapiService = new SwapiService();
    state = {
        selectedPerson: 1
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render(){
        const itemList = (
            <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}>
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
            );
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );
        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
}