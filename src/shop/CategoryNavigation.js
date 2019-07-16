import React, { Component, Fragment } from "react";
import { ToogleLink } from '../ToogleLink';

export class CategoryNavigation extends Component {
    render = () => {
        console.log("CategoryNavigation: render");
        return <Fragment>
            <ToogleLink to={`${this.props.baseUrl}/all`} exact={false}>All</ToogleLink>
            {
                this.props.categories && this.props.categories.map(cat =>
                    <ToogleLink
                        key={cat}
                        to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                        {cat}
                    </ToogleLink>)
            }
        </Fragment>
    }
}