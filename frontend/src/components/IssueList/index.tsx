import React from 'react';
import { useFetchIssues } from '../../hooks/useFetchIssues';
import { Issue } from '../../types';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHeaderCell,
  Actions,
  Button,
  ErrorMessage,
  LoadingMessage,
  StatusBadge,
} from './styles';

interface IssueListProps {
  onSelectIssue: (issue: Issue) => void;
  onDeleteIssue: (id: string) => void;
}

const IssueList: React.FC<IssueListProps> = ({ onSelectIssue, onDeleteIssue }) => {
  const { issues, loading, error } = useFetchIssues();

  if (loading) {
    return <LoadingMessage>Loading issues...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map(issue => (
          <TableRow key={issue.id}>
            <TableCell>{issue.title}</TableCell>
            <TableCell>
              <StatusBadge status={issue.status}>{issue.status}</StatusBadge>
            </TableCell>
            <TableCell>
              <Actions>
                <Button onClick={() => onSelectIssue(issue)}>View Details</Button>
                <Button onClick={() => onDeleteIssue(issue.id)}>Delete</Button>
              </Actions>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default IssueList;