import React from 'react';
import Masonry from 'react-masonry-css';
import _ from 'lodash';

import {getData, getPages} from '../utils';
import BlogFeedItemFilter from './BlogFeedItemFilter';

export default class BlogFeedSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let section_author = false;
        let section_category = false;
        let posts_all = getPages(this.props.pageContext.pages, '/blog');
        let posts_sorted = _.orderBy(posts_all, 'frontmatter.date', 'desc');
        let show_recent = _.get(section, 'show_recent', null);
        let recent_count = _.get(section, 'recent_count', null);
        let post_count = 0;
        if (_.get(section, 'author', null)) {
             section_author = getData(this.props.pageContext.site.data, _.get(section, 'author', null));
        }
        if (_.get(section, 'category', null)) {
             section_category = getData(this.props.pageContext.site.data, _.get(section, 'category', null));
        }
        const breakpointColumnsObj = {
          default: 3,
          900: 2,
          600: 1
        };
        return (
            <section className="section section--posts">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_col">
                  {_.map(posts_sorted, (post, post_idx) => {
                      let is_post = false;
                      if ((_.get(post, 'frontmatter.template', null) === 'post')) {
                           is_post = true;
                      }
                      return (<React.Fragment key={post_idx + '.1'}>
                        {(is_post && ((show_recent === false) || (post_count < recent_count))) && ((() => {
                             post_count = post_count + 1;
                            return (
                              <BlogFeedItemFilter key={post_idx} {...this.props} blog_feed_section={section} post_page={post} section_author={section_author} section_category={section_category} />
                            );
                        })())}
                      </React.Fragment>)
                  })}
                </Masonry>
              </div>
            </section>
        );
    }
}
// <Masonry breakpointCols={3} className="masonry-grid" columnClassName="masonry-grid_col">
