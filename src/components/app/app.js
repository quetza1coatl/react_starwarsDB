import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorButton from "../error-button/error-button";
import PeoplePage from "../people-page/people-page";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
    swapiService = new SwapiService();

    render(){
        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    {/*<RandomPlanet />*/}
                    {/*<ErrorButton />*/}
                    {/*<PeoplePage />*/}
                    <Row
                        left={personDetails}
                        right={starshipDetails} />
                </div>
            </ErrorBoundry>
        );
    }
}
