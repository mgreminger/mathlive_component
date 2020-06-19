import mathlive_component
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    mathlive_component.MathLiveComponent(
        id='input',
        latex='x^2',
        label='my-label'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'latex')])
def display_output(latex):
    return 'You have entered the value {}'.format(latex)


if __name__ == '__main__':
    app.run_server(debug=True)
