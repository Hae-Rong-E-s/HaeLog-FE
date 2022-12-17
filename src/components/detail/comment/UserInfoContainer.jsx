import styled from "styled-components";
import { Link } from "react-router-dom";

const UserInfoContainer = ({
  width,
  profileFontSize,
  textArea,
  editButtons,
}) => {
  return (
    <StprofileContainer>
      <StProfileBox profileFontSize={profileFontSize}>
        <Link to={`/login`}>
          <StprofileImage
            src="/imgs/github-mark-white.png"
            alt="profile"
            width={width}
          />
        </Link>
        <div>
          <h1>Noa</h1>
          <div>몰입</div>
        </div>
      </StProfileBox>
      {textArea}
      {editButtons}
      <hr />
    </StprofileContainer>
  );
};

export default UserInfoContainer;

const StprofileImage = styled.img`
  width: ${(props) => props.width};
`;

const StprofileContainer = styled.div`
  margin-bottom: 40px;
`;

const StProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  align-items: center;
  color: white;
  font-size: ${(props) => props.profileFontSize};
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 40px;
`;
