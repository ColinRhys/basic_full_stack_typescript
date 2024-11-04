import React, { useState } from 'react';
import styled from 'styled-components';
import IssueList from '../components/IssueList';
import IssueForm from '../components/IssueForm';
import IssueDetail from '../components/IssueDetail';
import Modal from '../components/Modal';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Issue } from '../types';
import { useDeleteIssue } from '../hooks/useDeleteIssue';

const HomePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [reload, setReload] = useState<boolean>(false);
  const { removeIssue } = useDeleteIssue();

  const handleIssueCreatedOrUpdated = () => {
    setReload(!reload); // Trigger re-fetch in IssueList
  };

  const handleDeleteIssue = async (id: string) => {
    await removeIssue(id);
    setReload(!reload); // Trigger re-fetch in IssueList
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <Title>Issue Tracker</Title>
          <Button onClick={() => setShowForm(true)}>Create New Issue</Button>
        </Header>
        <IssueList
          key={reload.toString()} // Force re-render on reload
          onSelectIssue={issue => setSelectedIssue(issue)}
          onDeleteIssue={handleDeleteIssue}
        />
        {showForm && (
          <Modal onClose={() => setShowForm(false)}>
            <IssueForm
              onClose={() => setShowForm(false)}
              onIssueCreated={handleIssueCreatedOrUpdated}
            />
          </Modal>
        )}
        {selectedIssue && (
          <Modal onClose={() => setSelectedIssue(null)}>
            <IssueDetail
              issue={selectedIssue}
              onClose={() => setSelectedIssue(null)}
              onIssueUpdated={handleIssueCreatedOrUpdated}
            />
          </Modal>
        )}
      </Container>
    </>
  );
};

export default HomePage;

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;