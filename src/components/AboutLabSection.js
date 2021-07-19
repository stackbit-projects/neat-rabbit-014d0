import React from 'react';
import _ from 'lodash';

import {getData, getPages} from '../utils';
import BlogFeedItemFilter from './BlogFeedItemFilter';

export default class AboutLabSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let section_author = false;
        let section_category = false;
        let about_posts = _.get(section, 'about_posts', [])
        let posts_all = getPages(this.props.pageContext.pages, '/blog');
        let all_about_posts = _.filter(posts_all, (post) => {
            return about_posts.includes(post.relativePath)
        })
        let posts_sorted = _.orderBy(all_about_posts, 'frontmatter.date', 'asc');
        let post_count = 0;
        if (_.get(section, 'author', null)) {
             section_author = getData(this.props.pageContext.site.data, _.get(section, 'author', null));
        }
        if (_.get(section, 'category', null)) {
             section_category = getData(this.props.pageContext.site.data, _.get(section, 'category', null));
        }
        return (
            <section className="section section--posts">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                <div className="flex flex--col-3">
                  {_.map(posts_sorted, (post, post_idx) => {
                      let is_post = false;
                      if ((_.get(post, 'frontmatter.template', null) === 'post')) {
                           is_post = true;
                      }
                      return (<React.Fragment key={post_idx + '.1'}>
                        {(is_post) && ((() => {
                             post_count = post_count + 1;
                            return (
                              <BlogFeedItemFilter key={post_idx} {...this.props} blog_feed_section={section} post_page={post} section_author={section_author} section_category={section_category} />
                            );
                        })())}
                      </React.Fragment>)
                  })}
                </div>
              </div>
            </section>
        );
    }
}
