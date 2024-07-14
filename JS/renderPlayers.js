export const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

function addPlayersToDom(filteredPlayers) {
    const playerBox = document.querySelector('.player_box');
    playerBox.innerHTML = ''; // Clear previous players
    const playerHTML = filteredPlayers.map(player => {
        return `
            <div class="player">
                <h2>${player.name}</h2>
                <p>Тривалість гри: ${player.timePlayed}</p>
                <p>Досвід: ${player.points}</p>
                <p class="${player.online ? 'online' : 'offline'}">Статус: ${player.online ? 'Грає' : 'Відпочиває'}</p>
            </div>
        `;
    }).join('');
    playerBox.insertAdjacentHTML("beforeend", playerHTML);
}

function filterPlayers() {
    const statusFilter = document.getElementById('statusFilter').value;
    const pointsFilter = document.getElementById('pointsFilter').value;
    const filteredPlayers = players.filter(player => {
        const statusCondition = statusFilter === 'all' || (statusFilter === 'online' && player.online) || (statusFilter === 'offline' && !player.online);
        const pointsCondition = player.points >= pointsFilter;
        return statusCondition && pointsCondition;
    });
    addPlayersToDom(filteredPlayers);
}

document.addEventListener("DOMContentLoaded", () => {
    addPlayersToDom(players);

    document.getElementById('statusFilter').addEventListener('change', filterPlayers);
    document.getElementById('pointsFilter').addEventListener('input', filterPlayers);
});
