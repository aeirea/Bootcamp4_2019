import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding} = this.props
		const buildingInfo = data.filter(
			building => {
				return building.id === selectedBuilding
			}
		).map(
			building => {
				let coordinate, addr = '';
				if(typeof building.coordinates !== 'undefined' && !isNaN(building.coordinates.latitude) && !isNaN(building.coordinates.longitude)){
					coordinate = building.coordinates.latitude + ',' + building.coordinates.longitude;
				}
				else{
					coordinate = 'N/A';
				}
				if( building.address !== '' && typeof building.address !== 'undefined'){
					addr = building.address;
				}
				else{
					addr = 'N/A';
				}
				return (
					<div>
						<p>
							<strong><b> Code: </b>{building.code} </strong>
						</p>
						<p>
							<strong><b> Name: </b>{building.name} </strong>
						</p>
						<p>
							<strong><b> Coordinates: </b>{coordinate} </strong>
						</p>
						<p>
							<strong><b> Address: </b>{addr} </strong>
						</p>
					</div>
				);
			}
		)
		return (
			<div>
				<p>
					{'	'}
					<i>Click on a name to view more information</i>
					<div>{buildingInfo}</div>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
