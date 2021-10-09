import React from 'react';
import _ from 'lodash';

import {Link, classNames, withPrefix, markdownify} from '../utils';

export default class SeeMoreResearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: false}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        let pubs_jsx = <div>
            <h6 className="section__subtitle">Recent Publications</h6>
            <ul>
                {_.map(_.get(this.props, 'pubs', []), (entry, entry_idx) => {
                    return (
                        <li key={entry_idx}>
                          {entry.raw && (
                          markdownify(entry.raw.substring(0, entry.raw.length-6) + ' <a href={withPrefix(entry.href)} target="_blank" rel="noreferrer">PDF</a></div>')
                          )}
                        </li>
                    )
                })}
            </ul>
        </div>;
        let posts_jsx = <div className="section__miniposts">
            <h6 className="section__subtitle">Recent Posts</h6>
            <ul>
            {_.map(_.get(this.props, 'posts', []), (post, post_idx) => {
                let title = post.frontmatter.title
                let excerpt = post.frontmatter.excerpt
                return (
                    <li key={post_idx}>
                        <Link to={withPrefix(_.get(post, 'url', null))} >{title}</Link>
                        <em> - {excerpt}</em>
                    </li>
                )
            })}
            </ul>
        </div>;
        let moreinfo = <div>{pubs_jsx}{posts_jsx}</div>;
        return (
            <div>
                {this.state.isToggleOn ?
                    <div>
                        {moreinfo}
                        <button className="btn btn--red" onClick={this.handleClick}>See Less &#8593;</button>
                    </div> : <div>
                        <button className="btn btn--red" onClick={this.handleClick}>See More &#8595;</button>
                    </div>
                }
            </div>
        );
    }
}
