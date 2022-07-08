import React from "react";
import xtype from 'xtypejs';
class App extends React.Component {

	// Constructor---Super(): It is used to call the constructor of its parent class. 
            // This is required when we need to access some variables of its parent class. 
            // Props: It is a special keyword that is used in react stands for properties. 
            // Used for passing data from one component to another.
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
           "https://f4lm346i22.execute-api.ap-south-1.amazonaws.com/urban/%7Bproxy+%7D")
// "https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
 
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
////////////////CHECKING TYPE//////////////////////////
        console.log("Api data", items)
        console.log(typeof(items))
        console.log(xtype(items))
        console.log(xtype.type(items))
/////////////////////////////////////////////////////////////

		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;
        // if(!DataisLoaded)
        //   console.log("Api data", items)
		return (
            
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
                //Map is used to itterate over an array 
				items.map((item) => (
				<ol key = { item.id } >
					ndvi_mean: { item.ndvi_mean },
					{/* Full_Name: { item.name }, */}
					{/* User_Email: { item.email } */}
					</ol>
				))
			}
		</div>
	);
}
}

export default App;



// import React from "react";

// export default class FetchRandomUser extends React.Component {
//   state = {
//     loading: true,
//     person: null
//   };

//   async componentDidMount() {
//     // const url = "https://api.randomuser.me/";
//     const url = "https://4bvx9tyxl6.execute-api.ap-south-1.amazonaws.com/lambdaefs/lambdaefs";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     this.setState({ person: data.MONTH[0], loading: false });
    
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }

//     if (!this.state.person) {
//       return <div>didn't get a person</div>;
//     }

//     return (
//       <div>
//         <div>{this.state.person.name.MONTH}</div>
//         <div>{this.state.person.name.first}</div>
//         <div>{this.state.person.name.last}</div>
//         <img src={this.state.person.picture.large} />
//       </div>
//     );
//   }
// }