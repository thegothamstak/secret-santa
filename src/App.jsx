import React, { useState } from 'react';
import AddMemberForm from './components/AddMemberForm';
import AssignmentsDisplay from './components/AssignmentsDisplay';
import MembersTable from './components/MembersTable';
import RestrictionForm from './components/RestrictionForm';
import RestrictionsTable from './components/RestrictionsTable';
import './App.css'; // Import CSS styles for styling

// Main App Component
function App() {
  // State for members, restrictions, and assignments
  const [members, setMembers] = useState([]);
  const [restrictions, setRestrictions] = useState({});
  const [assignments, setAssignments] = useState([]);

  /**
   * Adds a new member to the Secret Santa list and initializes
   * an empty restriction array for that member.
   * @param {string} name - Name of the new member to add.
   */
  const addMember = (name) => {
    if (name && !members.includes(name)) {
      setMembers((prevMembers) => [...prevMembers, name]);
      setRestrictions((prevRestrictions) => ({ ...prevRestrictions, [name]: [] }));
    }
  };

  /**
   * Sets a restriction for a specific member.
   * @param {string} member - Member who has a restriction.
   * @param {Array} restriction - Array of members the selected member cannot give gifts to.
   */
  const setRestriction = (member, restriction) => {
    setRestrictions((prev) => ({
      ...prev,
      [member]: restriction,
    }));
  };

  /**
   * Generates Secret Santa assignments while adhering to restrictions.
   * Retries if assignments fail due to restrictions.
   */
  const generateAssignments = () => {
    const availableMembers = [...members];
    const result = {};
    let retries = 5; // Retry mechanism for difficult assignments

    const canAssign = (giver, receiver) =>
      giver !== receiver &&
      !restrictions[giver]?.includes(receiver) &&
      !Object.values(result).includes(receiver);

    for (const giver of members) {
      let assigned = false;
      const attempts = [];

      while (!assigned && retries > 0) {
        const receiver =
          availableMembers[Math.floor(Math.random() * availableMembers.length)];
        if (canAssign(giver, receiver)) {
          result[giver] = receiver;
          assigned = true;
          availableMembers.splice(availableMembers.indexOf(receiver), 1);
        } else {
          attempts.push(receiver);
          if (attempts.length >= availableMembers.length) {
            // Retry if assignments fail
            retries -= 1;
            return generateAssignments();
          }
        }
      }
    }
    setAssignments(Object.entries(result));
  };

  return (
    <div className="app-container">
      <h1>Secret Santa Generator</h1>
      <AddMemberForm addMember={addMember} />
      <MembersTable members={members} />
      <RestrictionForm members={members} restrictions={restrictions} setRestriction={setRestriction} />
      <RestrictionsTable restrictions={restrictions} />
      <button className="generate-button" onClick={generateAssignments} disabled={members.length < 2}>
        Generate Secret Santa Assignments
      </button>
      <AssignmentsDisplay assignments={assignments} />
    </div>
  );
}

export default App;
