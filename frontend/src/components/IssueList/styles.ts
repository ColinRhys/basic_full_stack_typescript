import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 12px;
`;

export const TableCell = styled.td`
  padding: 12px;
  vertical-align: top;
`;

export const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  color: #fff;
  font-size: 12px;
  background-color: ${(props) => {
    switch (props.status) {
      case "Open":
        return "#28a745"; // Green
      case "In Progress":
        return "#ffc107"; // Yellow
      case "Resolved":
        return "#dc3545"; // Red
      default:
        return "#6c757d"; // Gray
    }
  }};
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #005bb5;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`;

export const LoadingMessage = styled.div`
  margin-top: 20px;
`;
