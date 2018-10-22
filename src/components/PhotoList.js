import React from 'react';
import { observer, inject } from 'mobx-react';
import PhotoItemBox from './PhotoItemBox.js';

class PhotoList extends React.Component {
    render() {
        return (
            <section className="row">
			 	<section className="col-sm-10 col-sm-offset-1">
                    {
                        this.props.photoAppStore.photoList.map((photoItem, index)=>{
                            return (
                                <PhotoItemBox 
                                    key={photoItem.id}
                                    photoItem={photoItem}
                                    index={index}
                                    incrementLikes={this.props.photoAppStore.incrementLikes}
                                />
                            )
                        })
                    }
                </section>
            </section>
        )
    }
}

export default inject("photoAppStore")(observer(PhotoList));