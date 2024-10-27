import React from 'react';

/**
 * Component to display members in a table format.
 * @param {Array} members - Array of members in the Secret Santa list.
 */
function MembersTable({ members }) {
    return (
      <div className="table-container">
        <h3>Added Members</h3>
        {members.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Member</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No members added yet.</p>
        )}
      </div>
    );
  }

  export default MembersTable;