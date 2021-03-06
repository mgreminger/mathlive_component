import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { MathFieldComponent } from 'react-mathlive';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class MathLiveComponent extends Component {
    render() {
        const {id, label, latex, setProps} = this.props;

        return (
            <div id={id}>
                ExampleComponent 2: {label}&nbsp;
                <MathFieldComponent
                    latex={latex}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        latex => setProps({ latex: latex })
                    }
                />
            </div>
        );
    }

}



MathLiveComponent.defaultProps = {};

MathLiveComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    latex: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
