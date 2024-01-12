import styled from "styled-components";

const StyledJobsTaks = styled.div`
  flex: 1.5;
`;

const TaskList = styled.ul`
  list-style: none;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TaskListItem = styled.li`
  li {
    padding-left: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    i {
      color: var(--primary-color);
      position: absolute;
      left: 0;
    }
  }
`;

const JobsTaks = ({ tasks = [] }) => {
  return (
    <StyledJobsTaks>
      <TaskList>
        {tasks.map((task) => (
          <TaskListItem key={task}>
            <i className="fa-regular fa-circle-check"></i>
            {task}
          </TaskListItem>
        ))}
      </TaskList>
    </StyledJobsTaks>
  );
};

export default JobsTaks;
