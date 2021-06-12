import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class ContentSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section">
              <div className="container container--md">
                  {_.get(section, 'title', null) && (
                  <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                  )}
                  <div class="responsive-table">
                    <table>
                        <caption>Conferences</caption>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Article</th>
                          <th>Full Text</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Body content 1</td>
                          <td>Body content 2</td>
                          <td>Body content 3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="responsive-table">
                    <table>
                        <caption>Journals</caption>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Article</th>
                          <th>Full Text</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Body content 1</td>
                          <td>Body content 2</td>
                          <td>Body content 3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="responsive-table">
                    <table>
                        <caption>Miscellaneous</caption>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Article</th>
                          <th>Full Text</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Body content 1</td>
                          <td>Body content 2</td>
                          <td>Body content 3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
            </section>
        );
    }
}
