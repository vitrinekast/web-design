var Git = (function () {

    const BASE_USER = 'cmda-minor-web';
    const BASE_URL = 'https://api.github.com'
    const RAW_URL = 'https://raw.githubusercontent.com'
    const REPOS_STR = 'repos';
    const FORKS_STR = 'forks';
    const FORKS_TARGET_SELECTOR = '.fn-forks';
    const README_TARGET_SELECTOR = '.fn-readme';
    const REPO_TARGET_SELECTOR = '.fn-repo'

    let mdConverter;
    let currentConfig = {};
    let votenav;
    let votenavUp;
    let votenavDown;
    let votes;

    var init = function () {
        mdConverter = new showdown.Converter();
    }

    var getCourse = function (config) {
        return data.course.items.find((item) => {
            return item.id === config.courseid
        })
    }

    var getForks = function (config) {
        const course = getCourse(config);
        let url = `${BASE_URL}/${REPOS_STR}/${BASE_USER}/${course.github}/${FORKS_STR}?client_id=${keys.GITHUB_CLIENT_ID}&client_secret=${keys.GITHUB_CLIENT_SECRET}`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (str) {
                Router.getPartial('list.ejs', FORKS_TARGET_SELECTOR, str);
            })
    }

    var getReadme = function (config) {
        let url = `${RAW_URL}/${config.user}/${config.repo}/master/README.md?client_id=${keys.GITHUB_CLIENT_ID}&client_secret=${keys.GITHUB_CLIENT_SECRET}`;
        currentConfig = config;
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (str) {
                var html = marked(str);
                document.querySelector(README_TARGET_SELECTOR).innerHTML = html + document.querySelector(README_TARGET_SELECTOR).innerHTML;
                setVoteNav();
            })
    }
    // get readme
    var getRepo = function (config, cb) {
        const course = getCourse(config);

        let url = `${BASE_URL}/${REPOS_STR}/${config.user}/${config.repo}?client_id=${keys.GITHUB_CLIENT_ID}&client_secret=${keys.GITHUB_CLIENT_SECRET}`;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (str) {
                str.course = course
                cb(str)
            })

    }

    var setVoteNav = function () {
        votenav = document.querySelector('.nav-vote');
        votenavUp = votenav.querySelector('.fn-vote-up');
        votenavDown = votenav.querySelector('.fn-vote-down');
        let contentElements = document.querySelectorAll(README_TARGET_SELECTOR + '> *');
        let voteHeight = votenav.getBoundingClientRect().height;
        contentElements.forEach((elem, index) => {
            elem.setAttribute('tabindex', 0);
            elem.setAttribute('id', index);
            elem.addEventListener('focus', function (e) {

                const bounds = e.currentTarget.getBoundingClientRect();
                const parBounds = e.currentTarget.parentNode.getBoundingClientRect();
                var distance = Math.abs(bounds.top - parBounds.top );
                votenav.setAttribute('data-current-index', e.currentTarget.id);
                votenav.style.transform = `translate3d(-50%, ${distance - voteHeight - 10}px, 0)`;
            })
        })
        getVotes();


        votenavUp.addEventListener('click', onVoteUp)
        votenavDown.addEventListener('click', onVoteDown)
        
        document.onkeydown = function (e) {
          console.log(e)
          console.log('ho');
            const charCode = e.keyCode || e.which;
            console.log(e.keyCode);
            
            if(charCode === 72) {
                onVoteUp(e);
            }
            if(charCode === 70) {
                onVoteDown(e);
            }
            
            if (e.keyCode == 37) {      
                document.querySelector("*:focus").previousElementSibling.focus();

            }
            if (e.keyCode == 38) {      
                //code for up key   
                document.querySelector("*:focus").previousElementSibling.focus();
                
            }
            if (e.keyCode == 39) {      
                document.querySelector("*:focus").nextElementSibling.focus(); 

            }
            if (e.keyCode == 40) {      
                //code for down key
                document.querySelector("*:focus").nextElementSibling.focus(); 
            }
        };
        contentElements[0].focus()
    }
    
    let upTimeout = false;
    let downTimeout = false;
    
    var onVoteUp = function (e) {
        e.preventDefault();
        console.log('up')
        votenavUp.classList.add('animate');
        
        upTimeout = window.setTimeout(() => votenavUp.classList.remove('animate'), 100);
        console.log(upTimeout)
        castVote(votenav.getAttribute('data-current-index'), 'up');
    }
    var onVoteDown = function (e) {
        e.preventDefault();
        votenavDown.classList.add('animate');
        downTimeout = window.setTimeout(() => votenavDown.classList.remove('animate'), 100);
        castVote(votenav.getAttribute('data-current-index'), 'down');
    }

    var displayVotes = function () {
        let contentElements = document.querySelectorAll(README_TARGET_SELECTOR + '> *');
        console.log('about to display the votes', votes)
        if(!votes) { return false }

        for(var property in votes) {
            if(votes.hasOwnProperty(property)) {
                // Do things here
                if(votes[property]) { 
                    contentElements[votes[property].id].setAttribute('data-vote-up', votes[property].up)
                    contentElements[votes[property].id].setAttribute('data-vote-down', votes[property].down)
                }
            }
        }


    }
    var castVote = function (index, vote) {
        index = parseInt(index);
        let currentVote;

        if(!votes[index]) {
            currentVote = {
                id: index,
                up: 0,
                down: 0
            }
        } else {
            currentVote = votes[index]
        }
        currentVote[vote]++;

        const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/${currentConfig.user}/${currentConfig.repo}/votes/${index}.json`;

        fetch(url, {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(currentVote), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(function (response) {
                console.log('Success:', JSON.stringify(response));
                getVotes()
            })
            .catch(error => console.error('Error:', error));
    }

    var getVotes = function () {

        const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/${currentConfig.user}/${currentConfig.repo}/votes.json`;
        console.log(url)
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(error => console.error('Error:', error))
            .then(function (str) {
                console.log('getVotes', str)
                if(!str) { str = [] }
                votes = str;
                displayVotes();
            })
    }

    return {
        init: init,
        getForks: getForks,
        getRepo: getRepo,
        getReadme: getReadme
    }
})();
