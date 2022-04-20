import React from 'react'
import 'styles/core/elements/xavatar.scss'
import AvatarImg from '../../assets/img/chat/profile-12.jpeg'

export default function XAvatar(props) {
    const getTitle = () => {
        if (props.title) {
            return <label className="avatar_title">{props.title}</label>
        }
    }
    const isOnline = () => {
        if (props.online) {
            return <div className="indicator_online"></div>
        }
    }
    return (
        <div className="custom_bcg">
            {getTitle()}
            <div className={'avatar ' + 'avatar-' + props.type}>
                {isOnline()}
                <img className="rounded_circle" alt="avatar" src={AvatarImg} />
            </div>
        </div>
    )
}
