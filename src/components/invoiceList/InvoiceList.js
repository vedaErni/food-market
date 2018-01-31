import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class InvoiceList extends React.Component {
    state = {
        startDate: moment()
    };

    handleChange = (date) => this.setState({startDate: date});

    render() {
        console.log('state', this.state)
        return (
            <div> Invoice List
                <span> From</span><DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <span>To</span><DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <button type="button" className="btn btn-primary">Primary</button>
            </div>
        )
    }
}

export default InvoiceList;