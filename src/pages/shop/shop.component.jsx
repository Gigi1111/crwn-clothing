import React from 'react';
//import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
const ShopPage = ({ collections }) => (
	<div className="shop-page">
		{collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
