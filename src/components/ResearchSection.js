import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix, markdownify} from '../utils';
import {getData, getPages} from '../utils';
import SeeMoreResearch from './SeeMoreResearch.js';

export default class ResearchSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);

        let feats = _.get(section, 'features', null);
        let posts_all = getPages(this.props.pageContext.pages, '/blog');
        let feature_posts = _.map(feats, (feat, feat_idx) => {
            let feat_posts = _.get(feat, 'posts', [])
            let valid_feat_posts =  _.filter(posts_all, (post) => {
                return feat_posts.includes(post.relativePath)
            })
            return _.orderBy(valid_feat_posts, 'frontmatter.date', 'desc');
        })

        let pubData = getData(this.props.pageContext.site.data, _.get(section, 'pubFile', null));
        let pubs_all = _.flatten(_.values(pubData))
        let feature_pubs = _.map(feats, (feat, feat_idx) => {
            let paper_ids = _.get(feat, 'paper_ids', [])
            return _.filter(pubs_all, (pub) => {
                return paper_ids.includes(pub.id)
            })
        })

        return (
            <section className="section section--features">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  {_.get(feature, 'image', null) && (
                  <div className={classNames('cell', 'section__media2', {'section__media--right': _.get(feature, 'image_position', null) === 'right'})}>
                    <img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="section__body cell">
                    {_.get(feature, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title">{_.get(feature, 'title', null)}</h3>
                      ) :
                      <h2 className="section__title">{_.get(feature, 'title', null)}</h2>
                    )}
                    {_.get(feature, 'content', null) && (
                    <div className="section__copy">
                      {markdownify(_.get(feature, 'content', null))}
                    </div>
                    )}
                    <SeeMoreResearch key={feature_idx} {...this.props} pubs={feature_pubs[feature_idx]} posts={feature_posts[feature_idx]} />


                  </div>
                </div>
                ))}
              </div>
            </section>
        );
    }
}

// <div>
//     <div>
//         <h4 className="section__subtitle">Recent Publications</h4>
//         <ul>
//             {_.map(feature_pubs[feature_idx], (entry, entry_idx) => {
//                 return (
//                     <li key={entry_idx}>
//                       {entry.raw && (markdownify(entry.raw.substring(0, entry.raw.length-6) + ' <a href={withPrefix(entry.href)} target="_blank" rel="noreferrer">PDF</a></div>'))}
//
//                     </li>
//                 )
//             })}
//         </ul>
//     </div>
//     <div className="section__miniposts">
//         <h4 className="section__subtitle">Recent Posts</h4>
//         <ul>
//         {_.map(feature_posts[feature_idx], (post, post_idx) => {
//             let title = post.frontmatter.title
//             let excerpt = post.frontmatter.excerpt
//             return (
//                 <li key={post_idx}>
//                     <Link to={withPrefix(_.get(post, 'url', null))} >{title}</Link>
//                     <em> - {excerpt}</em>
//                 </li>
//             )
//         })}
//         </ul>
//     </div>
// </div>
