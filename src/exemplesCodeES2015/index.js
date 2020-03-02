function CoolComponent() {
    return React.createElement('p', {}, 'Yppupi So Cool !')
}

ReactDOM.render(
    React.createElement(CoolComponent),
    document.getElementById('root')
)
