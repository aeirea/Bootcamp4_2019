import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		const val = this.searchValue.value;
		//console.log(val);
		this.props.filterUpdate(val);
	}
	render() {
		//console.log('filtered value: ', this.props.filterText)
		return (
			<form>
				<input
				type="text"
				ref={ (value) => this.searchValue = value }
				placeholder="Type to Filter"
				onChange={this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;
