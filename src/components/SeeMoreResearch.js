import React from 'react';
import _ from 'lodash';

import {Link, classNames, withPrefix, markdownify} from '../utils';

export default class SeeMoreResearch extends React.Component {
    render() {
        let pubs = _.get(this.props, 'pubs', [])
        let posts = _.get(this.props, 'posts', [])
        return (
            <div>
                <div>
                    <h4 className="section__subtitle">Recent Publications</h4>
                    <ul>
                        {_.map(pubs, (entry, entry_idx) => {
                            return (
                                <li key={entry_idx}>
                                  {entry.raw && (
                                  markdownify(entry.raw.substring(0, entry.raw.length-6) + ' <a href={withPrefix(entry.href)} target="_blank" rel="noreferrer">PDF</a></div>')
                                  )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="section__miniposts">
                    <h4 className="section__subtitle">Recent Posts</h4>
                    <ul>
                    {_.map(posts, (post, post_idx) => {
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
                </div>
            </div>
        );
    }
}
