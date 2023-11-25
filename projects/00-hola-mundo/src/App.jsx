import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const format = (userName) => `@${userName}`
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            avatarURL: 'midudev',
            isFollowing: true
        },
        {
            userName: 'wesbos',
            name: 'Wes Bos',
            avatarURL: 'wesbos',
            isFollowing: false
        },
        {
            userName: 'getify',
            name: 'Kyle Simpson',
            avatarURL: 'getify',
            isFollowing: false
        },
        {
            userName: 'kentcdodds',
            name: 'Kent C. Dodds',
            avatarURL: 'kentcdodds',
            isFollowing: true
        }
    ]
    return (
        <section className='App'>{
        users.map((user) => (
        <TwitterFollowCard
            key={user.userName}
            formatUserName={format}
            userName={user.userName}
            name={user.name}
            avatarURL={user.avatarURL}
            initialIsFollowing={user.isFollowing}
        />
        ))
        }
        </section>
    )
}