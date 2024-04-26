import profile_photo from "../images/profile_photo.jpg"

const Introduction = () => {
  return <div>
    <div><img src={profile_photo} alt="It is my profile photo" width="120"/></div>
    <div><p>Hi everyone! I happy to see you here!</p></div>
  </div>
}
export default Introduction;