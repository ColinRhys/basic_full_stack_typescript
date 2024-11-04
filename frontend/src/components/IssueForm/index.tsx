import React, { useState } from 'react';
import { useCreateIssue } from '../../hooks/useCreateIssue';
import { NewIssue, IssuePriority } from '../../types';
import {
  Form,
  Label,
  Input,
  TextArea,
  Select,
  Button,
  ErrorMessage,
  SuccessMessage,
} from './styles';

interface IssueFormProps {
  onClose: () => void;
  onIssueCreated: () => void;
}

const IssueForm: React.FC<IssueFormProps> = ({ onClose, onIssueCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<IssuePriority>('Low');
  const { addIssue, loading, error } = useCreateIssue();
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and Description are required.');
      return;
    }

    const newIssue: NewIssue = { title, description, priority };
    const result = await addIssue(newIssue);

    if (result) {
      setSuccess(true);
      // Reset form fields
      setTitle('');
      setDescription('');
      setPriority('Low');
      // Notify parent component
      onIssueCreated();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Issue created successfully!</SuccessMessage>}
      <Label>
        Title
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </Label>
      <Label>
        Description
        <TextArea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </Label>
      <Label>
        Priority
        <Select
          value={priority}
          onChange={e => setPriority(e.target.value as IssuePriority)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
      </Label>
      <Button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Issue'}
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </Form>
  );
};

export default IssueForm;