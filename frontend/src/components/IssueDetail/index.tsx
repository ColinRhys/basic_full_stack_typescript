import React, { useState } from 'react';
import { Issue, IssueStatus } from '../../types';
import { useUpdateIssueStatus } from '../../hooks/useUpdateIssueStatus';
import {
  Container,
  Title,
  Description,
  Label,
  Select,
  Button,
  ErrorMessage,
  InfoRow,
  InfoLabel,
  InfoValue,
} from './styles';
import { formatDate } from '../../utils/dateUtils';

interface IssueDetailProps {
  issue: Issue;
  onClose: () => void;
  onIssueUpdated: () => void;
}

const IssueDetail: React.FC<IssueDetailProps> = ({ issue, onClose, onIssueUpdated }) => {
  const [status, setStatus] = useState<IssueStatus>(issue.status);
  const { changeIssueStatus, loading, error } = useUpdateIssueStatus();
  const [currentIssue, setCurrentIssue] = useState<Issue>(issue);

  const handleStatusUpdate = async () => {
    const result = await changeIssueStatus(currentIssue.id, status);

    if (result) {
      setCurrentIssue(result); // Update the issue with the latest data
      onIssueUpdated();
    }
  };

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Title>{currentIssue.title}</Title>

      <InfoRow>
        <InfoLabel>Priority:</InfoLabel>
        <InfoValue>{currentIssue.priority}</InfoValue>
      </InfoRow>

      <InfoRow>
        <InfoLabel>Status:</InfoLabel>
        <InfoValue>{currentIssue.status}</InfoValue>
      </InfoRow>

      <InfoRow>
        <InfoLabel>Created At:</InfoLabel>
        <InfoValue>{formatDate(currentIssue.createdAt)}</InfoValue>
      </InfoRow>

      <InfoRow>
        <InfoLabel>Updated At:</InfoLabel>
        <InfoValue>{formatDate(currentIssue.updatedAt)}</InfoValue>
      </InfoRow>

      <Description>{currentIssue.description}</Description>

      <Label>
        Update Status
        <Select
          value={status}
          onChange={e => setStatus(e.target.value as IssueStatus)}
          disabled={loading}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </Select>
      </Label>
      <Button onClick={handleStatusUpdate} disabled={loading}>
        {loading ? 'Updating...' : 'Update Status'}
      </Button>
      <Button type="button" onClick={onClose}>
        Close
      </Button>
    </Container>
  );
};

export default IssueDetail;