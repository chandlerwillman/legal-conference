import React from 'react';

export default function Event(props) {
    const { id, title, img, description } = props.event;

    return (
        <div>
            <img scr={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => props.deleteEvent(id)}>Delete</button>
        </div>
    );
}