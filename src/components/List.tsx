import { Sup } from './../types.d';
import styled from 'styled-components';

interface Props {
	sups: Array<Sup>;
}

const List = ({ sups }: Props) => {
	const renderList = (): JSX.Element[] => {
		return sups.map((sup) => (
			<Card key={sup.nick}>
				<img src={sup.avatar} alt={`Avatar for ${sup.nick}`} />
				<h4>
					{sup.nick} (<small>{sup.supMonths}</small>)
				</h4>
				<p>{sup.description?.substring(0, 100)}</p>
			</Card>
		));
	};
	return <Container>{renderList()}</Container>;
};
export default List;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 5%;
`;
const Card = styled.div`
	border: 1px solid grey;
	width: 10%;
	margin: 15px 15px;
	padding: 15px;
	border-radius: 10px;
	img {
		width: 100%;
		height: 50%;
		object-fit: cover;
	}
`;
