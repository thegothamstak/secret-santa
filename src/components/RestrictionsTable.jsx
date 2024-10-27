import React, { useState } from 'react';

/**
 * Component to display restrictions in a table format.
 * @param {Object} restrictions - Restrictions object for each member.
 */
function RestrictionsTable({ restrictions }) {
    const restrictionEntries = Object.entries(restrictions).flatMap(([member, restrictedList]) =>
      restrictedList.map((restrictedMember) => ({ member, restrictedMember }))
    );
  
    return (
      <div className="table-container">
        <h3>Restrictions</h3>
        {restrictionEntries.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Cannot Give To</th>
              </tr>
            </thead>
            <tbody>
              {restrictionEntries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.member}</td>
                  <td>{entry.restrictedMember}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No restrictions added yet.</p>
        )}
      </div>
    );
  }

  export default RestrictionsTable;