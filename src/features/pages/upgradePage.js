// import React from 'react'

// import bg1 from '../../assets/image/pageImg/backgound1.jpg'
// import bg2 from '../../assets/image/pageImg/bg2.jpg'
// import bg3 from '../../assets/image/pageImg/bg3.jpg'


// const UpgradePage = props => {
//     return (

//         <div className="d-flex flex-column align-items-center ">
//             <div className="py-3"> comming soon</div>
//             <div className="py-3">WE ARE WORKING HARDER! </div>
//             <div className="py-3">The website will be open</div>
//         </div>
//     )
// };

// <div>
//     <div className="position-absolute w-100 h-100">
//         <img src={bg3} className="img-fluid " />
//     </div>
//     <div className="position-realative text-dark">
//         <p>helloF</p>
//     </div>
// </div>

// export default UpgradePage

import React from 'react';
import moment from 'moment';

export default class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
                <h1>Countdown</h1>
                <div className="countdown-wrapper">
                    {days && (
                        <div className="countdown-item">
                            <SVGCircle radius={daysRadius} />
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                            <SVGCircle radius={hoursRadius} />
                            {hours}
                            <span>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);