import React from 'react';

import { Link } from 'react-router-dom';

const ContactItem = (props) => (
  <div className="box">
    <article className="media">
      <div className="media-center">
        <figure className="image is-32x32">
        <Link to={`/contacts/${props.id}`}>
          <img src={props.pictureUrl} alt="Images"/>
          </Link>
        </figure>
      </div>

      <div className="media-content">
        <div className="content">
          <p>
            <Link to={`/contacts/${props.id}`}>
              <strong>{props.name}</strong> <small>{props.popularity}</small>
            </Link>
          </p>
        </div>
      </div>        
    </article>
  </div>
);

export default ContactItem;