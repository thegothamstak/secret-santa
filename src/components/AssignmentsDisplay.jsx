import React from 'react';

/**
 * Component to display Secret Santa assignments.
 * @param {Array} assignments - Array of assignments in [giver, receiver] format.
 */
function AssignmentsDisplay({ assignments }) {
    return (
      <div className="table-container">
        <h3>Secret Santa Assignments</h3>
        {assignments.length > 0 ? (
          <ul className="assignments-list">
            {assignments.map(([giver, receiver]) => (
              <li key={giver}>
                {giver} is giving a gift to {receiver}.
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments generated yet.</p>
        )}
      </div>
    );
  }

  export default AssignmentsDisplay;