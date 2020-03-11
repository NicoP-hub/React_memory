render(){
    const {defaultNick, name, placeholder, required} = this.props
    return (
        <p>
            <label>
                Surnom :
                <input
                    defaultValue=={defaultNick}
                    name={name}
                    placeholder={placeholder}
                    ref={(field => {this.nicknameField = field}}
                    required={required}
                    type="text"
                />
            </label>
        </p>
    )
}