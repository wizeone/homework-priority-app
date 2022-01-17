import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as api from '../api';

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const AssignmentsList = () => {
  const [assignments, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadClasses = async () => {
    setIsLoading(true);

    const assignments: any = await (await api.getAssignments()).data.data;

    setClasses(assignments);
    setIsLoading(false);
  };

  useEffect(() => {
    loadClasses();
  }, []);

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <div>loading assignments...</div>
        ) : (
          assignments.map((assignment: any, key: any) => (
            <div>
              <span>Class name: {assignment.name}</span>
            </div>
          ))
        )}
      </Wrapper>
    </>
  );
};

export default AssignmentsList;
