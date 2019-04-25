var Vote = (function () {
    let votes = [];
    var castVote = function (id, direction) {
        let params = router.lastRouteResolved().params;
        let currentVote = getCurrentVote(id);
        const url = `https://${FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${params.fileid}/votes/${id}.json`;
        currentVote[direction] = true;
        Api.post(url, currentVote)
            .then((response) => {
                Vote.displayVotes(params);
            })
            .catch(error => console.error('Error:', error));
    }
    var getCurrentVote = function (id) {
        id = parseInt(id);
        return  {
            id: id,
            up: false,
            down: false
        }
    }
    var displayVotesOnElements = function () {
        if(votes.length === 0) {
            return false
        }
        votes.forEach((vote) => {
            if(vote) {
                let targetElement = document.querySelector(`.hljs-ln-numbers[data-line-number="${vote.id}"]`);
                if(targetElement) {
                    vote.up ? targetElement.setAttribute('data-vote-up', vote.up) : targetElement.removeAttribute('data-vote-up');
                    vote.down ? targetElement.setAttribute('data-vote-down', vote.down) : targetElement.removeAttribute('data-vote-down');
                    targetElement.classList.add('voted')
                } else {}
            }
        })
    }
    var displayVotes = function (params) {
        const url = `https://${FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${params.fileid}/votes.json`;
        Api.getApi(url)
            .then((response) => {
                votes = response ? response : []
            })
        fetch(url)
            .then(res => res.json())
            .then(function (response) {
                votes = response ? response : []
                displayVotesOnElements();
            })
            .catch(error => console.error('Error:', error));
    }
    return {
        displayVotes: displayVotes,
        castVote: castVote
    }
})();
