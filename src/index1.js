import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

const Trello = ({ files }) => (
		<div className="card">
		<h4 className="head">
			{files.title}
			<i className="fas fa-ellipsis-h"></i>
		</h4>
	 	<ul className="list-items">
	 		{files.cards.map((file) => (
	 			<li key={file.id} className="list-item">
	 				{file.title}
	 			</li>
	 			))}
		</ul>
		<div className="foot">Add a card...</div>
	</div>
)

Trello.propTypes = {
	files: PropTypes.object.isRequired
}

const Board = ({ files: {title, lists} } ) => (
	<div className="board">
		<h4 className="board-title">{title}</h4>
		<div className="board-list">
			{lists.map(list => <Trello key= {list.id} files={list}/>)}
		</div>
	</div>
)


let list1 = {
  id: 0,
  title: 'Phone Features',
  cards: [
    {
      id: 0,
      title: 'Subwoofer'
    },
    {
      id: 1,
      title: 'Non-porous, washable'
    },
    {
      id: 2,
      title: 'Wings'
    },
    {
      id: 3,
      title: 'Beveled Bezel'
    },
    {
      id: 4,
      title: 'Bezeled Bevel'
    },
    {
      id: 5,
      title: 'Seedless'
    }
  ]
};

let list2 = {
  id: 1,
  title: 'Lyrics',
  cards: [
    {
      id: 0,
      title: 'This was a triumph'
    },
    {
      id: 1,
      title: "I'm making a note here"
    },
    {
      id: 2,
      title: 'HUGE SUCCESS'
    },
    {
      id: 3,
      title: "It's hard to overstate my satisfaction"
    }
  ]
};

const board = {
	title: 'A Demo',
	lists: [list1, list2]
}


ReactDOM.render(<Board files={board}/>, document.querySelector('#root'));
 

