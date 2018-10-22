import React from "react";
import { observer, inject } from "mobx-react";
import PhotoItemBox from "./PhotoItemBox.js";

class PhotoDetails extends React.Component {
	constructor(props) {
		super(props);

		let Id = props.match.params.imageName.split("-").pop();

		this.photoIndex = props.photoAppStore.photoList.findIndex(
			(photoListItem) => {
				return parseInt(photoListItem.id, 10) === parseInt(Id, 10);
			}
		);
    }
    

	render() {
        const { photoAppStore } = this.props;
        
		return (
			<section className="row">
				<section className="col-md-8 col-md-offset-2">
					<div className="row">
						<PhotoItemBox
							increamentLikes={photoAppStore.increamentLikes}
							index={this.photoIndex}
							photoItem={photoAppStore.photoList[this.photoIndex]}
						/>

						<div className="col-sm-8">
							<section className="photodetails">
								<ul>
									{photoAppStore.photoList[
										this.photoIndex
									].comments.map(commentsItem => {
										return (
											<li>
												<div>{commentsItem.author}</div>
												<div>{commentsItem.text}</div>
											</li>
										);
									})}
								</ul>
								<form onSubmit={(e) => {
									e.preventDefault();
									photoAppStore.addComments({ 
										index:this.photoIndex,
										author: this.refs.author.value,
										text:this.refs.text.value 
									})
									this.refs.author.value = ""
									this.refs.text.value = ""
								}}>

									<div className="form-group">
										<label htmlFor="exampleInputEmail1">
											Name
										</label>
										<input
											type="text"
											ref="author"
											className="form-control"
											id="exampleInputEmail1"
											placeholder="name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputPassword1">
											Comments
										</label>
										<input
											type="text"
											ref="text"
											className="form-control"
											id="exampleInputPassword1"
											placeholder="comments"
										/>
									</div>
									<button type="submit" className="btn btn-default">
										Submit
									</button>
								</form>
							</section>
						</div>
					</div>
				</section>
			</section>
		);
	}
}

export default inject("photoAppStore")(observer(PhotoDetails));