import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreveiw = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">
				{title.toUpperCase()} <span className="sub">click for more</span>
			</h1>

			<div key={items.id} className="preview">
				{items.filter((item, idx) => idx < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default CollectionPreveiw;
