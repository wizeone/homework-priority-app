import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as api from '../api';

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const ClassesList = () => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadClasses = async () => {
    setIsLoading(true);

    const classes: any = await (await api.getClasses()).data.data;

    setClasses(classes);
    setIsLoading(false);
  };

  useEffect(() => {
    loadClasses();
  }, []);

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <div>loading classes...</div>
        ) : (
          classes.map((classObj: any, key: any) => (
            <div>
              <span>Class name: {classObj.name}</span>
            </div>
          ))
        )}
      </Wrapper>
    </>
  );
};

export default ClassesList;
