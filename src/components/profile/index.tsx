import { ProfileStyled } from './profile.styled';
import { user } from '../../database/database.json';

type User = { name: string; avatar_url: string; location: string; bio: string };

const Profile = () => {
    return (
        <ProfileStyled id="profile">
            <h1 className="myName">{user.name}</h1>

            <div className="myAvatarContainer">
                <img
                    className="myAvatar"
                    src={user.avatar_url}
                    alt="imagem profile"
                />
            </div>
            <span>{user.location}</span>
            <span>{user.bio}</span>
        </ProfileStyled>
    );
};

export default Profile;
