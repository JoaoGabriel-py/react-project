import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

type RoomCodeProps = {
    code: string;
}

export function RoomCode(prpos: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText('-McqWhO64t1b3bKVC7s5');
    }

    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #-McqWhO64t1b3bKVC7s5</span>
        </button>
    )
}