import React from "react"
import { Link } from "gatsby"

export default props => (
    <article>
        <Link to={props.path} ><h2>{props.title}</h2></Link>
    </article>
)