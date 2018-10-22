import { extendObservable, action } from 'mobx';
import SampleStore from './SampleStore.js';

class PhotoApp {

    constructor() {
        extendObservable(this, {
            photoList: [],
            getPhotos: action(()=>{
                this.photoList.replace(SampleStore);
            }),
            incrementLikes: action((index)=>{
                var selectedPhotoItem  = this.photoList[index];
				var newValue = {
					...selectedPhotoItem,
					likes:selectedPhotoItem.likes + 1
				}

				this.photoList = [
                    ...this.photoList.slice(0,index),
                    newValue,
                    ...this.photoList.slice(index+1),
                ]
            }),
            addComments:action(({ index, author, text }) => {

				let photoList = this.photoList.slice();
				let selectedPhotoItem = photoList[index];
				selectedPhotoItem.comments = [
					...selectedPhotoItem.comments,
					{
						author,
						text
					}
                ]
                
				this.photoList.replace(photoList)
                
			})
		
        });
    }
}

export default new PhotoApp();
