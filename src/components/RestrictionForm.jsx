import React, { useState } from 'react';

/**
 * Form Component to add restrictions for members.
 * @param {Array} members - Array of members.
 * @param {Object} restrictions - Restrictions object for each member.
 * @param {function} setRestriction - Function to set restriction for a member.
 */
function RestrictionForm({ members, restrictions, setRestriction }) {
    const [selectedMember, setSelectedMember] = useState('');
    const [restrictedMember, setRestrictedMember] = useState('');
  
    const handleAddRestriction = () => {
      if (selectedMember && restrictedMember && selectedMember !== restrictedMember) {
        setRestriction(selectedMember, [
          ...(restrictions[selectedMember] || []),
          restrictedMember,
        ]);
        setRestrictedMember('');
      }
    };
  
    return (
      <div className="table-container">
        <h3>Add Restrictions</h3>
        <label>Member:</label>
        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
          className="select"
        >
          <option value="">Select Member</option>
          {members.map((member) => (
            <option key={member} value={member}>
              {member}
            </option>
          ))}
        </select>
        <label>Should Not Give To:</label>
        <select
          value={restrictedMember}
          onChange={(e) => setRestrictedMember(e.target.value)}
          className="select"
        >
          <option value="">Select Member</option>
          {members
            .filter((member) => member !== selectedMember)
            .map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
        </select>
        <button onClick={handleAddRestriction} className="add-button">Add Restriction</button>
      </div>
    );
  }

  export default RestrictionForm;