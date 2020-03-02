// const firstName = this.props.firstName
// const familyName = this.props.lastname
// const onClick = this.props.onClick

const { firstname, lastName: familyName, onClick} = this.props

const person = {
    firstname: 'John',
    lastName: 'Smith',

    set fullName(fullName) {
        // const names = fullName.split(' ')
        // this.firstName = names[0]
        // this.lastName = names[1]
        [this.firstname, this.lastName] = fullName.split(' ');
    }
}