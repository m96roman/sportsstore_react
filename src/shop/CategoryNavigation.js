import React, { Component, Fragment } from "react";
import { ToogleLink } from '../ToogleLink';

export class CategoryNavigation extends Component {
    render = () => {
        return <Fragment>
            <ToogleLink to={this.props.baseUrl} exact={true}>All</ToogleLink>
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