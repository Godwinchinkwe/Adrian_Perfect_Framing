import React from 'react'
import "./TestimonialCard.css"

const TestimonialCard = ({classname, children}) => {
    return (
        <article className={`cardxyz ${classname}`}>
            {children}
        </article>
    )
}

export default TestimonialCard