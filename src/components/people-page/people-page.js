import React, { Component } from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component{
    swapiService = new SwapiService();
    state = {
        selectedItem: 1
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render(){
        const itemList = (
            <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPeople}>
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
            );
        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}/>
        );
        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        );
    }
}