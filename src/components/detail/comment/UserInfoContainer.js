import styled from "styled-components";
import { Link } from "react-router-dom";

const UserInfoContainer = ({
  width,
  profileFontSize,
  textArea,
  editButtons,
  height,
  username,
  createAt,
}) => {
  return (
    <StprofileContainer>
      <StProfileBox profileFontSize={profileFontSize}>
        <Link to={`/`}>
          <StprofileImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEAm6C-SVkvqJQ4_eMz0_KcL3wTuKHo-wYQ&usqp=CAU"
            alt="profile"
            width={width}
            height={height}
          />
        </Link>
        <div>
          <h1>{username}</h1>
          <h3>{createAt}</h3>
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
  height: ${(props) => props.height};

  border-radius: 50%;
  object-fit: cover;
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
  margin-bottom: 40px;
  h3 {
    font-family: "light";
  }
`;
