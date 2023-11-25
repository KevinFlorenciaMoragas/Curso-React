import { useState } from "react";

export function TwitterFollowCard ({formatUserName,userName, name, avatarURL, initialIsFollowing}){
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    const imageSrc = `https://unavatar.io/${avatarURL}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt = "El avatar de midudev" src={imageSrc}></img>
        </header>
        <div className='tw-folloCard-info'>
            <strong className='tw-folloCard-infoUserName'> {name}</strong>
            <span>{formatUserName(userName)}</span>
        </div>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text} 
            </button>
        </aside>
    </article>
    )
}