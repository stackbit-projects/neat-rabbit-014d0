import React from 'react';
import _ from 'lodash';

import {Link, getData, withPrefix, mailTo, markdownify} from '../utils';

export default class TeamSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--team">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                <div className="flex flex--col-3">
                  {_.map(_.get(section, 'team', null), (person, person_idx) => {
                      let person_data = getData(this.props.pageContext.site.data, person);
                      return (
                      <div key={person_idx} className="cell">
                        <Link to={withPrefix(_.get(person_data, 'link', null))}>
                        <div className="card team-member">
                        {person_data.photo && (
                        <figure className="card__media card__media--bottom">
                          <img src={withPrefix(person_data.photo)} alt={person_data.photo_alt} />
                        </figure>
                        )}
                          <div className="card__body">
                            <header className="card__header">
                              <h3 className="h3 card__title">{person_data.first_name} {person_data.last_name}</h3>
                            </header>
                            <footer className="card__footer">
                            {person_data.email && (
                                <a href={mailTo(person_data.email)}>{person_data.email}</a>
                            )}
                            </footer>
                          </div>
                        </div>
                        </Link>
                      </div>
                      )
                  })}
                </div>
              </div>
            </section>
        );
    }
}



// {person_data.bio && (
// <div className="card__copy">
//   {markdownify(person_data.bio)}
// </div>
// )}
