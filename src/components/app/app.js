import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorButton from "../error-button/error-button";
import PeoplePage from "../people-page/people-page";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ItemList from '../item-list';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from "../sw-components";

export default class App extends Component {
    swapiService = new SwapiService();

    render(){
        const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople } = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="EyeColor"/>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    {/*<RandomPlanet />*/}
                    {/*<ErrorButton />*/}
                    {/*<PeoplePage />*/}

                    <PersonDetails itemId={11} />

                    <PlanetDetails itemId={5} />

                    <StarshipDetails itemId={9} />

                    <PersonList />

                    <PlanetList />

                    <StarshipList />

                </div>
            </ErrorBoundry>
        );
    }
}
