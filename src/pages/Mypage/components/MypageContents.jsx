import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { TAB_LIST, TAB_MAPPING_TITLE, TAB_MAPPING_OBJ } from '../uidata';
import Title from './Common/Title';

const MypageContents = () => {
  const location = useLocation();
  const url = location.pathname.split('/').pop();

  return (
    <Container>
      <Aside>
        <TabMenu>
          {TAB_LIST.map(tab => (
            <Tab key={tab.id} to={tab.url}>
              {tab.title}
            </Tab>
          ))}
        </TabMenu>
      </Aside>
      <Contents>
        <Title title={TAB_MAPPING_TITLE[url]} />
        {TAB_MAPPING_OBJ[url]}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 56px;
`;

const Aside = styled.aside`
  width: 236px;
  height: 100%;
  margin-right: 60px;
`;

const Contents = styled.div`
  padding-bottom: 80px;
`;

const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 236px;
  border: 1px solid #d9d9d9;
`;

const Tab = styled(Link)`
  display: inline-block;
  padding: 28px 0;
  color: #333;
  border-top: 1px solid #d9d9d9;
  text-align: center;
  text-decoration: none;
`;

export default MypageContents;
