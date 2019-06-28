// each user has an object
const user = {
    ip: req.connection.remoteAddress,
    id: ++playerIdIndex,
    currentGame: null,
}

// when a player is added to a game
user.currentGame = runningGames[roomId]

// connecting the user to the current game
user.currentGame = {
    '1': { id: 1, score: 0, isGameLeader: false }, // name added eventually
    roomId: 'game1',
    maxRounds: 5,
    currentRound: 0,
    remainingPrompts: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
    ],
    playerKeys: [1],
    leader: 1,
    hasGameBegun: false,
    submissions: [],
    totalVotes: 0,
}

// stores all the games
const runningGames = {}

// on newGame
// remainingPrompts is filled with all the existing prompt ID numbers

runningGames[roomId] = {
    roomId,
    maxRounds: maxRounds,
    currentRound: 0,
    remainingPrompts: [],
    playerKeys: [user.id],
    leader: user.id,
    hasGameBegun: false,
    submissions: [],
    totalVotes: 0,
}


// notes from live test:
// scoring doubling by accident
// searching doesn’t erase
// moblie got booted
// need more time on voting
// searching - need to cancel previous search when performing new search & need indicator that theres a current search loading
// “vote: x”
// score = total score
// submit button at top where it can be seen
// waiting on x players to submit
// need placeholder image in search
// one second delay not long enough for the slow typers
