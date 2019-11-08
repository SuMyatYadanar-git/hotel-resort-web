import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";

import MyButton from "./myButton";

const MyDatePicker = props => {
  const { Date, HandleSelect, value, HandleToggle, IsOpen } = props;

  // const _handleSelect = (value) => {
  //     setValue(value)
  // }

  return (
    <div className="w-100">
      <MyButton
        style={{ height: 60, minWidth: "240px" }}
        fontSize={"24px"}
        onClick={HandleToggle}
        text={Date}
        Icon={"fa fa-calendar"}
      />
      {IsOpen && (
        <div className="position-absolute" style={{ zIndex: 5 }}>
          <DateRangePicker
            singleDateRange={true}
            className="bg-light my-2 border rounded"
            // numberOfCalendars={2}
            onSelect={HandleSelect}
            value={value}
          />
        </div>
      )}
      {/* <div className='col-lg-3 bg-light'>
                Depature Date is
        <div>{endDate}</div>
        </div> */}
    </div>
  );
};

export default MyDatePicker;

// import DateRangePicker from 'react-daterange-picker';
// import moment from 'moment-range';
// import React from 'react'

// const stateDefinitions = {
//   available: {
//     color: null,
//     label: 'Available',
//   },
//   enquire: {
//     color: '#ffd200',
//     label: 'Enquire',
//   },
//   unavailable: {
//     selectable: false,
//     color: '#78818b',
//     label: 'Unavailable',
//   },
// };

// const dateRanges = [
//   {
//     state: 'enquire',
//     range: moment.range(
//       moment().add(2, 'weeks').subtract(5, 'days'),
//       moment().add(2, 'weeks').add(6, 'days')
//     ),
//   },
//   {
//     state: 'unavailable',
//     range: moment.range(
//       moment().add(3, 'weeks'),
//       moment().add(3, 'weeks').add(5, 'days')
//     ),
//   },
// ];

// class MyDatePicker extends React.Component{
//   getInitialState() {
//     return {
//       value: null,
//     };
//   }
//   handleSelect(range, states) {
//     // range is a moment-range object
//     this.setState({
//       value: range,
//       states: states,
//     });
//   }

//   render() {
//     return (
//       <DateRangePicker
//         firstOfWeek={1}
//         numberOfCalendars={2}
//         selectionType='range'
//         minimumDate={new Date()}
//         stateDefinitions={stateDefinitions}
//         dateStates={dateRanges}
//         defaultState="available"
//         showLegend={true}
//         value={this.state.value}
//         onSelect={this.handleSelect} />
//     );
//   }
// }

// export default MyDatePicker;
