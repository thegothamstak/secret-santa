import React, { useState } from 'react';

/**
 * Form Component to add new members.
 * @param {function} addMember - Function to add a member to the list.
 */
function AddMemberForm({ addMember }) {
    const [name, setName] = useState('');
  
    const handleAdd = (e) => {
      e.preventDefault();
      addMember(name.trim());
      setName('');
    };
  
    return (
      <form onSubmit={handleAdd} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter member name"
          required
          className="input"
        />
        <button type="submit" className="add-button">Add Member</button>
      </form>
    );
  }

  export default AddMemberForm;