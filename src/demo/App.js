/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { MathLiveComponent } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'dash'
        };
    }

    setProps = (newProps) => {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <MathLiveComponent
                    label={'Dash'}
                    value={this.state.value}
                    setProps={this.setProps}
                />
            </div>
        )
    }
}

export default App;
