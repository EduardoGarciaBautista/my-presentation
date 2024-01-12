import styled from "styled-components";

const StyledToolItem = styled.div`
  width: 60px;
  height: 60px;
  box-shadow: -4px -4px 6px 0px var(--neumorphic-top),
    4px 4px 6px 0px var(--neumorphic-bottom);
  border-radius: 5px;
  border: 4px solid var(--background);
`;

const ItemBox = styled.div`
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
    font-size: 10px;
    margin-top: 4px;
    font-weight: 500;
  }
`;

const ToolItem = ({ title, icon }) => {
  return (
    <StyledToolItem>
      <ItemBox className="box">
        <i className={icon}></i>
        <p>{title}</p>
      </ItemBox>
    </StyledToolItem>
  );
};

export default ToolItem;
