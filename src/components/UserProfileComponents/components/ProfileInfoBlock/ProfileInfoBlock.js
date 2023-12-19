import "./styles.css"

const ProfileInfoBlock = (props) => {
    return(
        <div className={"infoBlockWrapper"}>
            <span style={{fontSize:"16px"}}>{props.blockName}</span>
            <span style={{fontSize:"24px"}}>{props.blockInfo}</span>
        </div>
    )
}

export default ProfileInfoBlock