const myVotePrototype = {
    init: function(id) {
        this.voteId = id;
        // Prepare for voting clicks
        this.bindEvents();
    },
    votes: 0,
    upVote: function() {
        this.votes++;
        this.setVoteDirection('up');
    },
    downVote: function() {
        this.votes--;
        this.setVoteDirection('down');
    },
    setVoteDirection: function(direction) {
        let voteObj = document.getElementById(this.voteId);
        if (direction === 'up') {
            voteObj.classList.add('vote-up');
            if (voteObj.classList.contains('vote-down')) {
                voteObj.classList.remove('vote-down');
            }
        } else if (direction === 'down') {
            voteObj.classList.add('vote-down');
            if (voteObj.classList.contains('vote-up')) {
                voteObj.classList.remove('vote-up');
            }
        }
    },
    updateUI: function() {
        document.querySelector(`#${this.voteId} .number`).innerHTML = Number(this.votes);
    },
    bindEvents: function() {
        document
            .querySelector(`#${this.voteId} .up-vote`)
            .addEventListener('click', () => {
                this.upVote();
                this.updateUI();
            });
        document
            .querySelector(`#${this.voteId} .down-vote`)
            .addEventListener('click', () => {
                this.downVote();
                this.updateUI();
            })
    }
};

function myVote(id) {
    function V() {};
    V.prototype = myVotePrototype;

    let v = new V();

    v.init(id);
    return v;
}

// Loop through all votes in the UI
const votes = document.querySelectorAll('.vote');
votes.forEach((vote, index) => {
    // Create an id
    let voteId = `vote_${index}`;
    // Set the id in the UI so we can find it later for updating
    vote.setAttribute('id', voteId);
    // Create a new vote object, passing in the vote id
    myVote(voteId);
});