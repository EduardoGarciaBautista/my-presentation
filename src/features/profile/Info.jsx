import styled from "styled-components";
import Modal from "../../ui/Modal";
import { useBrowser } from "../../hooks/useBrowser";
import { getScreenHeigth } from "../../utils/utils";

const SLICE_SIZE = 200;
const SCREEN_SIZE = 615;
const SLICE_SIZE_SMALLEST = 180;

const StyledInfo = styled.section`
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 25px;
  }
  h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 2rem;
  }
`;

const FullInfo = styled.p`
  color: var(--font-secondary-color);
`;

const ShortInfo = styled.p`
  font-size: 15px;
  color: var(--font-secondary-color);
  > span {
    font-size: 15px;
    background-color: transparent;
    color: var(--font-color);
    border: none;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Info({ profile = {} }) {
  const { isMovile } = useBrowser();

  const description = isMovile
    ? profile.description.slice(
        0,
        getScreenHeigth() <= SCREEN_SIZE ? SLICE_SIZE_SMALLEST : SLICE_SIZE
      )
    : profile.description;
  return (
    <StyledInfo>
      <h1>{profile.name}</h1>
      <h3>{profile.jobDescription}</h3>
      <Modal title="More about me">
        <ShortInfo>
          {description}
          {isMovile && (
            <>
              ...
              <Modal.Open>
                <span>See more</span>
              </Modal.Open>
            </>
          )}
        </ShortInfo>

        <Modal.Window>
          <Modal.Close>
            <i className="fa-regular fa-circle-xmark"></i>
          </Modal.Close>
          <FullInfo>{profile.description}</FullInfo>
        </Modal.Window>
      </Modal>
    </StyledInfo>
  );
}
