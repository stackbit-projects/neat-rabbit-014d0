import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class TimelineSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1LNhfuBuHPIW7cYumNSG9FrKvo8rmZn0LrfL8io5-HW8&font=Default&lang=en&start_at_end=true&debug=true&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
        );
    }
}
