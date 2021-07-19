import React from 'react';
import _ from 'lodash';

import {getData, withPrefix, markdownify} from '../utils';

export default class ContentSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let pubData = getData(this.props.pageContext.site.data, _.get(section, 'pubFile', null));
        return (
            <section className="section">
              <div className="container container--md align-center">
                  {_.get(section, 'title', null) && (
                  <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                  )}
                  <div className="responsive-table">
                    <table>
                      <thead>
                        <tr>
                        {_.map(_.keys(pubData), (key, key_idx) => {
                            let ref = "#" + key
                            return (
                                <th key={key_idx}>
                                  <a href={ref}>{key}</a>
                                </th>
                            )
                        })}
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                  {_.map(_.keys(pubData), (key, key_idx) => {
                      return (
                          <div>
                              <h4 className="section__subtitle" id={key}>{key}</h4>
                              <div key={key_idx} className="responsive-table">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Article</th>
                                      <th>Full Text</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {_.map(_.get(pubData, key, null), (entry, entry_idx) => {
                                        return (
                                            <tr key={entry_idx}>
                                              {entry.raw && (
                                              <td>{markdownify(entry.raw)}</td>
                                              )}
                                              {entry.href && (
                                              <td><a href={withPrefix(entry.href)} target="_blank" rel="noreferrer">PDF</a></td>
                                              )}
                                            </tr>
                                        )
                                    })}
                                  </tbody>
                                </table>
                              </div>
                              <br></br>
                          </div>
                      )
                  })}
              </div>
            </section>
        );
    }
}

// <h4 className="section__subtitle">Conferences</h4>
// <div className="responsive-table">
//   <table>
//     <thead>
//       <tr>
//         <th>ID</th>
//         <th>Article</th>
//         <th>Full Text</th>
//       </tr>
//     </thead>
//     <tbody>
//       {_.map(_.get(pubData, 'Conferences', null), (entry, entry_idx) => {
//           return (
//               <tr key={entry_idx}>
//                 {entry.id && (
//                 <td>{markdownify(entry.id)}</td>
//                 )}
//                 {entry.raw && (
//                 <td>{markdownify(entry.raw)}</td>
//                 )}
//                 {entry.href && (
//                 <td><a href={withPrefix(entry.href)} target="_blank">PDF</a></td>
//                 )}
//               </tr>
//           )
//       })}
//     </tbody>
//   </table>
// </div>
// <h4 className="section__subtitle">Journals</h4>
// <div className="responsive-table">
//   <table>
//     <thead>
//       <tr>
//         <th>ID</th>
//         <th>Article</th>
//         <th>Full Text</th>
//       </tr>
//     </thead>
//     <tbody>
//       {_.map(_.get(pubData, 'Journals', null), (entry, entry_idx) => {
//           return (
//               <tr key={entry_idx}>
//                 {entry.id && (
//                 <td>{markdownify(entry.id)}</td>
//                 )}
//                 {entry.raw && (
//                 <td>{markdownify(entry.raw)}</td>
//                 )}
//                 {entry.href && (
//                 <td><a href={withPrefix(entry.href)} target="_blank">PDF</a></td>
//                 )}
//               </tr>
//           )
//       })}
//     </tbody>
//   </table>
// </div>
// <h4 className="section__subtitle">Miscellaneous</h4>
// <div className="responsive-table">
//   <table>
//     <thead>
//       <tr>
//         <th>ID</th>
//         <th>Article</th>
//         <th>Full Text</th>
//       </tr>
//     </thead>
//     <tbody>
//       {_.map(_.get(pubData, 'Miscellaneous', null), (entry, entry_idx) => {
//           return (
//               <tr key={entry_idx}>
//                 {entry.id && (
//                 <td>{markdownify(entry.id)}</td>
//                 )}
//                 {entry.raw && (
//                 <td>{markdownify(entry.raw)}</td>
//                 )}
//                 {entry.href && (
//                 <td><a href={withPrefix(entry.href)} target="_blank">PDF</a></td>
//                 )}
//               </tr>
//           )
//       })}
//     </tbody>
//   </table>
// </div>
