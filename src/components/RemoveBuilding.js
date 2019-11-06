import React from 'react';

class RemoveBuilding extends React.Component {
	render() {
		const { data, removedUpdate, selectedBuilding } = this.props;
		return(
			<div>
				<button onClick = { () => removedUpdate(selectedBuilding)}>
					<i>
						Click to delete
					</i>

				</button>
			</div>
		);
	}
}

export default RemoveBuilding;
