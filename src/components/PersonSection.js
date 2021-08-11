import React from 'react';
import _ from 'lodash';

import {Link, mailTo, getData, withPrefix, markdownify} from '../utils';
import Action from './Action';

export default class PersonSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let person = false
        if (_.get(section, 'person_data_file', null)) {
            person = getData(this.props.pageContext.site.data, _.get(section, 'person_data_file', null))
        }
        let name = false
        if (person) {
            name = _.get(person, 'first_name', null) + ' ' + _.get(person, 'last_name', null)
            if (_.get(person, 'suffix', null)) {
                name = name + ', ' + person.suffix
            }
        }
        let members_action = {'url': withPrefix('/people'), 'style': "secondary", 'label': 'View all members'}
        return (
            <section className="section section--person">
              <div className="container container--lg">
                <div className="flex flex--middle flex--center flex--col-2">
                  {_.get(person, 'photo', null) && (
                  <div className="cell section__media section__media--right align-center">
                    <img src={withPrefix(_.get(person, 'photo', null))} alt={_.get(person, 'photo_alt', null)} />
                  </div>
                  )}
                  <div class="section__body cell">
                    <h2 className="section__title">{name}</h2>
                    <div class="person">{person.workplace}</div>
                    <div className="section__copy">
                        <div>
                          {_.get(person, 'bio', null) && {markdownify(person.bio)}}
                          <span>
                            <span><strong>Contact</strong>: </span>
                            {_.get(person, 'email', null) && (
                              <span><a href={mailTo(person.email)}>Email</a></span>
                            )}
                            {_.get(person, 'personal_website', null) && (
                              <span> | <Link to={person.personal_website}>Personal Website</Link></span>
                            )}
                            {_.get(person, 'linkedin', null) && (
                              <span> | <Link to={person.linkedin}>LinkedIn</Link></span>
                            )}
                          </span>
                        </div>
                    </div>
                    <br/>
                    <span><Action action={members_action}></Action></span>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
// <div className="container container--lg">
//   {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
//   <div key={feature_idx} className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
//     {_.get(feature, 'image', null) && (
//     <div className={classNames('cell', 'section__media', {'section__media--right': _.get(feature, 'image_position', null) === 'right'})}>
//       <img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
//     </div>
//     )}
//     <div className="section__body cell">
//       {_.get(feature, 'title', null) && (
//         _.get(section, 'title', null) ? (
//         <h3 className="section__title">{_.get(feature, 'title', null)}</h3>
//         ) :
//         <h2 className="section__title">{_.get(feature, 'title', null)}</h2>
//       )}
//       {_.get(feature, 'content', null) && (
//       <div className="section__copy">
//         {markdownify(_.get(feature, 'content', null))}
//       </div>
//       )}
//       {_.get(feature, 'actions', null) && (
//       <div className="section__actions btn-group">
//         <SectionActions {...this.props} actions={_.get(feature, 'actions', null)} />
//       </div>
//       )}
//     </div>
//   </div>
//   ))}
// </div>
