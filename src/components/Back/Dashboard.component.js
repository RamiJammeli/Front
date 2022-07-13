import axios from 'axios';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Bestcategorie from './statistique/bestcategorie.component';
import BestUser from './statistique/bestuser.component';

ChartJS.register(ArcElement, Tooltip, Legend);

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

    }













    render() {
        return (
            <div className='row'>
                <div className='col-6 col-lg-4 col-md-4'>
                    <Bestcategorie />
                </div>

                <div className='col-6 col-lg-4 col-md-4'>
                    <BestUser />
                </div>

                
                
            </div>

        );
    }
}