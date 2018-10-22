import React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

class PhotoItemBox extends React.Component {
    render() {
        const { photoItem, incrementLikes, index } = this.props;

        return (
            <section className="col-sm-4 text-center">
                <section className="thumbnail">
                    <section>
                        <img className="img-responsive" src={photoItem.imagelinks} alt=""  />
                    </section>

                    <h3>
                        {photoItem.name}
                    </h3>
                <footer className="photoitem__footer clearfix">
                    <div>
                        <NavLink to={`/${photoItem.name}-${photoItem.id}`}>
                            <i className="fa fa-comments"></i>
                            <span>{photoItem.comments.length}</span>
                        </NavLink>
                    </div>
                    <div>
                        <i onClick={()=>{
                            incrementLikes(index)
                        }} className="fa fa-thumbs-up"></i>
                        <span>{photoItem.likes}</span>
                    </div>
                    </footer>
                </section>
            </section>
        )
    }
}

export default observer(PhotoItemBox);