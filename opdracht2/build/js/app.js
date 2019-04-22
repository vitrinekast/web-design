"use strict";

// Javascripts
window.onload = function () {
  if (!keys) {
    console.error('It seems like your project is missing some keys....');
  }

  Router.init();
  Git.init();
};

var keys = {
  GITHUB_CLIENT_ID: 'f9e50c4b0ccd62204fbd',
  GITHUB_CLIENT_SECRET: '28c55d5fcd3147a7ab59b3e41d3fb758c9217699',
  FIREBASE_PROJECT_ID: 'cmd-web-design-opdracht-2'
};
var data = {
  title: 'Everything Web Share',
  content: "<p>At the Everything Web Share platform you&#39;ll find.... Well, anything. </p>\n<p>Read more about the minor&#39;s courses, view and review the work of your peers or share any type of inspiration. So if you run into an interesting article, helpful video or just an image that looks really cool, make sure to share it here.</p>",
  featured: {
    img: {
      lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
      md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
      sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
      alt: 'Table with pens'
    },
    title: 'Everything Web Share!',
    url: '/courses/web-design',
    subtitle: 'Get all your inspiration here!'
  },
  sections: [{
    type: 'courses',
    title: 'Most recent courses'
  }],
  course: {
    title: 'Courses',
    link: '/course',
    items: [{
      id: '0',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Web design',
      url: '/courses/web-design',
      description: "<p>In het vak Web design gaan we dingen ontwerpen voor echte mensen. Is er goede interactie? Kan je 'mens' je product op een prettige manier bedienen? Wat voor principes heb je gebruikt en getest? En zit er wel nonsense in?</p>",
      github: 'web-design-1819'
    }, {
      id: '1',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'CSS to the Rescue',
      url: '/courses/web-design',
      description: "<p>In dit vak gaan we aan de slag met CSS. We gaan goed werkende responsive oplossingen bedenken \xE9n maken voor complexe interfaces. Dat is erg belangrijk, te veel ontwerpers kunnen dit niet zo goed. Het is ook belangrijk om een aantal basisprincipes achter CSS goed te begrijpen. Niet alleen op praktisch niveau, ook op experimenteel niveau. Zonder goed begrip van de basisprincipes is CSS magisch en weird. Met een goed begrip heb je CSS onder controle en kan je het laten doen wat jij wil. En dat is nodig om webpagina\u2019s vorm te geven met attention to detail. Webpagina\u2019s waar mensen blij van worden.</p>",
      github: false
    }, {
      id: '2',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Browser Technologies',
      url: '/courses/web-design',
      description: "<p>Een van de mooiste principes van het web is dat het er echt is voor iedereen. Iedereen met een computer en een browser moet gebruik kunnen maken van het web. Het web is geen gecontroleerde (programmeer) omgeving. Je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij ziet in jouw browser. Er zijn natuurlijk de technische beperkingen. Zoals - Afmetingen van de browser - Grootte van het apparaat - Manier van interactie - Kwaliteit van de hardware - Kwaliteit van het netwerk. En er zijn mensen. Allemaal verschillende mensen \u2026\n                In het vak Browser Technologies leer je hoe je goede, robuuste, toegankelijke websites maakt. Je gaat leren over Progressive Enhancement, Feature Detection en Fallback. Het web is er voor iedereen. In dit vak leer je hoe je daarvoor kan zorgen.</p>",
      github: ''
    }, {
      id: '3',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Project 1 - Prototype for concept',
      url: '/courses/web-design',
      description: "<p>Een case waarin je gaat toepassen wat je bij de vakken Webapp from Scratch en CSS To The Rescue hebt geleerd.</p>",
      github: ''
    }, {
      id: '4',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Performance Matters',
      url: '/courses/web-design',
      description: "<p>In het vak Performance Matters gaan we van bestaande web applicaties de performance verbeteren. We werken aan HTML, CSS en JavaScript optimalistaties en hoe we het HTTP protocol beter kunnen benutten.\n                  Onder andere de Service Worker (als onderdeel van Progressive Web Apps) wordt ingezet om de performance van applicaties te verbeteren, maar ook om offline gebruik van de applicaties mogelijk te maken.</p>",
      github: ''
    }, {
      id: '5',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Project 2 - Solve & Debug',
      url: '/courses/web-design',
      description: "<p>Case waarin je gaat toepassen wat je bij de vakken Performance Maters en Brower technologies hebt geleerd.</p>",
      github: ''
    }, {
      id: '6',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Real-Time Web',
      url: '/courses/web-design',
      description: "<p>In het vak Real-Time Web leer je hoe je real-time / live data op een inzichtelijke manier toegankelijk kunt maken. Terwijl je bij het vak \u2018Web of Things\u2019 leert hoe je sensor data uit \u201Cslimme\u201D devices kunt lezen en deze devices zelfs kunt aansturen, ga je bij RTW precies dit soort data real-time inzichtelijk en toegankelijk maken voor eindgebruikers.</p>",
      github: ''
    }, {
      id: '7',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Web of Things',
      url: '/courses/web-design',
      description: "<p>WoT (Web of Things / Internet of Things) is een uitdagend nieuw veld voor de CMD'er; meer en meer diensten maken gebruik van een diversiteit aan connected devices voor een goede UX. In het vak Web of Things bouwt elke student zijn/haar eigen connected device waarmee (stand-alone of als sensornetwerk) data gegenereerd en op het web gepubliceerd kan worden, en andersom ook aangestuurd kan worden vanaf het web.</p>",
      github: ''
    }, {
      id: '8',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Project 3 - Woozers Non-Existing',
      url: '/courses/web-design',
      description: "<p>Case waarin je gaat toepassen wat je bij de vakken Real-time web en Web of things hebt geleerd.</p>",
      github: ''
    }, {
      id: '9',
      type: 'course',
      img: {
        lg: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1900',
        md: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=1200',
        sm: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?q=80&w=700',
        alt: 'Table with pens'
      },
      title: 'Meesterproef - Case voor een opdrachtgever',
      url: '/courses/web-design',
      description: "<p>In de meesterproef laten studenten zien wat ze allemaal hebben geleerd. Er worden een aantal projecten (voor echte opdrachtgevers) aangeboden waar studenten in 5 weken een oplossing voor een probleem moeten verzinnen en maken.</p>",
      github: ''
    }]
  },
  navigation: {
    items: [{
      title: 'Home',
      url: '/'
    }, {
      title: 'Courses',
      url: '/course'
    }]
  }
};

var Git = function () {
  var BASE_USER = 'cmda-minor-web';
  var BASE_URL = 'https://api.github.com';
  var RAW_URL = 'https://raw.githubusercontent.com';
  var REPOS_STR = 'repos';
  var FORKS_STR = 'forks';
  var FORKS_TARGET_SELECTOR = '.fn-forks';
  var README_TARGET_SELECTOR = '.fn-readme';
  var REPO_TARGET_SELECTOR = '.fn-repo';
  var mdConverter;
  var currentConfig = {};
  var votenav;
  var votenavUp;
  var votenavDown;
  var votes;

  var init = function init() {
    mdConverter = new showdown.Converter();
  };

  var getCourse = function getCourse(config) {
    return data.course.items.find(function (item) {
      return item.id === config.courseid;
    });
  };

  var getForks = function getForks(config) {
    var course = getCourse(config);
    var url = "".concat(BASE_URL, "/").concat(REPOS_STR, "/").concat(BASE_USER, "/").concat(course.github, "/").concat(FORKS_STR, "?client_id=").concat(keys.GITHUB_CLIENT_ID, "&client_secret=").concat(keys.GITHUB_CLIENT_SECRET);
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (str) {
      Router.getPartial('list.ejs', FORKS_TARGET_SELECTOR, str);
    });
  };

  var getReadme = function getReadme(config) {
    var url = "".concat(RAW_URL, "/").concat(config.user, "/").concat(config.repo, "/master/README.md?client_id=").concat(keys.GITHUB_CLIENT_ID, "&client_secret=").concat(keys.GITHUB_CLIENT_SECRET);
    currentConfig = config;
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (str) {
      var html = marked(str);
      document.querySelector(README_TARGET_SELECTOR).innerHTML = html + document.querySelector(README_TARGET_SELECTOR).innerHTML;
      setVoteNav();
    });
  }; // get readme


  var getRepo = function getRepo(config, cb) {
    var course = getCourse(config);
    var url = "".concat(BASE_URL, "/").concat(REPOS_STR, "/").concat(config.user, "/").concat(config.repo, "?client_id=").concat(keys.GITHUB_CLIENT_ID, "&client_secret=").concat(keys.GITHUB_CLIENT_SECRET);
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (str) {
      str.course = course;
      cb(str);
    });
  };

  var setVoteNav = function setVoteNav() {
    votenav = document.querySelector('.nav-vote');
    votenavUp = votenav.querySelector('.fn-vote-up');
    votenavDown = votenav.querySelector('.fn-vote-down');
    var contentElements = document.querySelectorAll(README_TARGET_SELECTOR + '> *');
    var voteHeight = votenav.getBoundingClientRect().height;
    contentElements.forEach(function (elem, index) {
      elem.setAttribute('tabindex', 0);
      elem.setAttribute('id', index);
      elem.addEventListener('focus', function (e) {
        var bounds = e.currentTarget.getBoundingClientRect();
        var parBounds = e.currentTarget.parentNode.getBoundingClientRect();
        var distance = Math.abs(bounds.top - parBounds.top);
        votenav.setAttribute('data-current-index', e.currentTarget.id);
        votenav.style.transform = "translate3d(-50%, ".concat(distance - voteHeight - 10, "px, 0)");
      });
    });
    getVotes();
    votenavUp.addEventListener('click', onVoteUp);
    votenavDown.addEventListener('click', onVoteDown);

    document.onkeydown = function (e) {
      console.log(e);
      console.log('ho');
      var charCode = e.keyCode || e.which;
      console.log(e.keyCode);

      if (charCode === 72) {
        onVoteUp(e);
      }

      if (charCode === 70) {
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

    contentElements[0].focus();
  };

  var upTimeout = false;
  var downTimeout = false;

  var onVoteUp = function onVoteUp(e) {
    e.preventDefault();
    console.log('up');
    votenavUp.classList.add('animate');
    upTimeout = window.setTimeout(function () {
      return votenavUp.classList.remove('animate');
    }, 100);
    console.log(upTimeout);
    castVote(votenav.getAttribute('data-current-index'), 'up');
  };

  var onVoteDown = function onVoteDown(e) {
    e.preventDefault();
    votenavDown.classList.add('animate');
    downTimeout = window.setTimeout(function () {
      return votenavDown.classList.remove('animate');
    }, 100);
    castVote(votenav.getAttribute('data-current-index'), 'down');
  };

  var displayVotes = function displayVotes() {
    var contentElements = document.querySelectorAll(README_TARGET_SELECTOR + '> *');
    console.log('about to display the votes', votes);

    if (!votes) {
      return false;
    }

    for (var property in votes) {
      if (votes.hasOwnProperty(property)) {
        // Do things here
        if (votes[property]) {
          contentElements[votes[property].id].setAttribute('data-vote-up', votes[property].up);
          contentElements[votes[property].id].setAttribute('data-vote-down', votes[property].down);
        }
      }
    }
  };

  var castVote = function castVote(index, vote) {
    index = parseInt(index);
    var currentVote;

    if (!votes[index]) {
      currentVote = {
        id: index,
        up: 0,
        down: 0
      };
    } else {
      currentVote = votes[index];
    }

    currentVote[vote]++;
    var url = "https://".concat(keys.FIREBASE_PROJECT_ID, ".firebaseio.com/").concat(currentConfig.user, "/").concat(currentConfig.repo, "/votes/").concat(index, ".json");
    fetch(url, {
      method: 'PUT',
      // or 'PUT'
      body: JSON.stringify(currentVote),
      // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (response) {
      console.log('Success:', JSON.stringify(response));
      getVotes();
    })["catch"](function (error) {
      return console.error('Error:', error);
    });
  };

  var getVotes = function getVotes() {
    var url = "https://".concat(keys.FIREBASE_PROJECT_ID, ".firebaseio.com/").concat(currentConfig.user, "/").concat(currentConfig.repo, "/votes.json");
    console.log(url);
    fetch(url).then(function (response) {
      return response.json();
    })["catch"](function (error) {
      return console.error('Error:', error);
    }).then(function (str) {
      console.log('getVotes', str);

      if (!str) {
        str = [];
      }

      votes = str;
      displayVotes();
    });
  };

  return {
    init: init,
    getForks: getForks,
    getRepo: getRepo,
    getReadme: getReadme
  };
}();

var Router = function () {
  var APP_SELECTOR = '.fn-app';
  var appContainer;
  var router;

  var init = function init() {
    // setup the navigo router
    // Navigo Router is a simple vanilla JS micro router 
    // Docs / source: https://github.com/krasimir/navigo
    var routeRoot = null;
    var useHash = true;
    var hash = '#!';
    router = new Navigo(routeRoot, useHash, hash);
    appContainer = document.querySelector(APP_SELECTOR); // set the view attribute on the body so the styling can display the correct views

    router.on({
      ':category': function category(params) {
        getView('courses.ejs', params);
        window.scrollTo(0, 0);
      },
      ':category/:courseid': function categoryCourseid(params) {
        getView('detail.ejs', params);
        Git.getForks(params);
        window.scrollTo(0, 0);
      },
      'course/:courseid/:user/:repo': function courseCourseidUserRepo(params) {
        Git.getRepo(params, function (apiData) {
          getView('work.ejs', params, apiData);
          Git.getReadme(params);
        });
        window.scrollTo(0, 0);
      },
      'cool': function cool(params) {
        getView('cool.ejs', {});
        window.scrollTo(0, 0);
      },
      '*': function _(params) {
        getView('home.ejs', {});
        window.scrollTo(0, 0);
      }
    }).resolve();
  };

  var createView = function createView(str, params) {
    if (!params) {
      params = {};
    }

    var subdata = data;

    if (params.category) {
      subdata = subdata[params.category];
    }

    if (params.courseid) {
      subdata = subdata.items.find(function (item) {
        return item.id === params.courseid;
      });
    }

    parseViewData(str, subdata);
  };

  var parseViewData = function parseViewData(str, subdata) {
    var template = ejs.compile(str, {});
    var html = ejs.render(str, {
      data: subdata
    }, {});
    appContainer.innerHTML = html;
    router.updatePageLinks();
  };

  var getView = function getView(url, params, apiData) {
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (str) {
      if (apiData) {
        parseViewData(str, apiData);
      } else {
        createView(str, params, data);
      }
    });
  };

  var getPartial = function getPartial(url, selector, apiData) {
    fetch(url).then(function (response) {
      return response.text();
    })["catch"](function (error) {
      return console.error('Error:', error);
    }).then(function (str) {
      if (apiData.message === 'Not Found') {
        return false;
      }

      var template = ejs.compile(str, {});
      var html = ejs.render(str, {
        data: apiData
      }, {});
      document.querySelector(selector).innerHTML = html;
      router.updatePageLinks();
    });
  };

  return {
    init: init,
    getView: getView,
    getPartial: getPartial
  };
}();