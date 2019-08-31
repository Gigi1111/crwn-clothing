import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([ selectShop ], (shop) => shop.collections);
//because now our shop.data is an obj n not array, selectCollections doesn't work
//that's why we are using this selector to change it into Object
export const selectCollectionsForPreview = createSelector([ selectCollections ], (collections) =>
	Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
	createSelector([ selectCollections ], (collections) => collections[collectionUrlParam]);
