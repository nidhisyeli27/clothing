import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';

import './colections-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'


const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
        {
            collections.map( ({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps= createStructuredSelector({
    collections:selectCollectionsForPreview
})
    
export default connect(mapStateToProps)(CollectionsOverview);