import React from 'react';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => {
				return (
					directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
					directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<button onClick={() => selectedUpdate(directory.id)}>
							<td><b>{directory.code} </b>:</td>
							<td>{directory.name} </td>
						</button>
					</tr>
				);
		});
		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
