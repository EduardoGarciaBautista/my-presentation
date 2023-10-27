import styled from "styled-components";

const StyledToolItem = styled.div`
  width: 50px;
  height: 50px;
  box-shadow: -4px -4px 6px 0px var(--neumorphic-top),
    4px 4px 6px 0px var(--neumorphic-bottom);
  border-radius: 5px;

  border: 4px solid var(--background);
  .box {
    box-shadow: inset -2px -2px 4px 0px var(--neumorphic-top),
      inset 2px 2px 4px 0px var(--neumorphic-bottom);
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i {
      font-size: 15px;
      color: var(--primary-color);
      text-shadow: -2px -2px 4px var(--neumorphic-top),
        2px 2px 4px var(--neumorphic-bottom);
    }
    p {
      font-size: 8px;
      margin-top: 4px;
    }
  }
`;

const ToolItem = ({ title, icon }) => {
  return (
    <StyledToolItem>
      <div className="box">
        <i className={icon}></i>
        <p>{title}</p>
      </div>
    </StyledToolItem>
  );
};

export default ToolItem;
