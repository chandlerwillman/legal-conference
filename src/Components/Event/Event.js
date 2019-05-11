import React from 'react';
import './Event.css';

export default function Event(props) {
    const { id, title, img, description } = props.event;

    return (
        <div className="card">
            <div className="card-content">
                <img src={img} alt={title}/>
                <h3><strong>{title}</strong></h3>
                <p>{description}</p>
                <button onClick={() => props.deleteEvent(id)}>Delete</button>
                </div>
        </div>
    );
}