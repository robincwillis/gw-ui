##TODO

1. Work out order panel create / edit
2. Products customers etc need to get state from props on edit
3. Strategy for Updating prices / customers
4. Update customer on order create / edit


##Webpack React

````
~ npm install
~ npm start

http://localhost:3000
````

if stuff gets screwed up

````
~ rm -rf node_modules && npm install
````

##Firebase

1. Go Login and create a new testing firebase and a new user.
2. Find the credentials for the testing database
3. Create this file in the project

````
/src/js/config.js

````

4. Copy this into the `config.js`

````
export const firebase = {
  apiKey: '******',
  authDomain: '******',
  databaseURL: '******',
  storageBucket: '******',
  messagingSenderId: '******'
};

export default { firebase };
````

5. Replace credentials with the one from your testing database


##Garbage Stuff


````
<Column
	width={100}
	align="right"
	header={<Cell>Id</Cell>}
	className="custom-class" //You can pass custom props in here
	col="id" //The Key for the value to put in this cell
	cell={<Cell />}
/>

<Column
	header="Actions"
	cell={ ({item}) => {
		return(<Cell key={item.id} className="align-right" width={100}>
			<Button
				buttonClass="small secondary square"
				icon={editIcon}
				onClick={this.props.editCustomer.bind(this, item)}
			/>
			<Button
				buttonClass="small secondary square"
				icon={trashIcon}
				onClick={this.props.deleteCustomer.bind(this, item)}
			/>
		</Cell>);
	}
	}
/>
```