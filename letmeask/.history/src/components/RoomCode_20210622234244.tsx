import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Cppy room code" />
            </div>
            <span>Sala #-McqWhO64t1b3bKVC7s5</span>
        </button>
    )
}