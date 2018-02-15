// card component
const Card = (props) => {
	return (
		<div style={{ margin: '1em' }}>
			<img width="75" src={props.avatar_url} alt="" />
			<div style={{ display: 'inline-block', marginLeft: 10 }}>
				<div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
				<div>{props.company}</div>
			</div>
		</div>

	);
}

// function component
const CardList = (props) => {
	return (
		<div>
			{/* {props.cards.map(card => <Card name = {card.name} company = {card.company} avatar_url = {card.avatar_url}/>)} */}
			{/* version with spread operator */}
			{props.cards.map(card => <Card {...card} />)}
		</div>
	);
}

// Function Component
class Form extends React.Component {
	state = { userName: '' }

	handleSubmit = (event) => {
		event.preventDefault();		
		axios.get(`https://api.github.com/users/${this.state.userName}`)
			.then(resp => {
				this.props.onSubmit(resp);
				this.setState({userName:''})
			})
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					value = {this.state.userName}
					onChange = {(event) => this.setState({ userName: event.target.value})}
					// reft style
					// ref = {(input) => this.usernameInput = input}
					type="text" placeHolder="Github Username" required />
				<button type="submit">Add card</button>
			</form>
		);
	}
}

// Class Component 
class App extends React.Component {	
	state = {
		cards: [{ name: "Oguz Gelal", company: "Toptal", avatar_url: "https://avatars3.githubusercontent.com/u/2817993?v=4" },
		{ name: "Oscar Corredor", company: "Toptal", avatar_url: "https://avatars1.githubusercontent.com/u/1540961?v=4" }]
	};

	addNewCard = (cardInfo) => {
		this.setState(prevSate => ({cards : prevSate.cards.concat(cardInfo.data)}));
	}

	render() {
		return (
			<div>
				<CardList cards={this.state.cards} />
				<Form onSubmit = {this.addNewCard}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, mountNode);