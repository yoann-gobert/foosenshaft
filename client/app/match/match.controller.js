'use strict';

angular.module('foosenshaftApp')
.controller('MatchCtrl', function ($scope, $timeout, $http) {

    var timerMatch = null;
    var playersList = [
        'Alexander M.',
        'Annabelle S.',
        'Ben F.',
        'Hannah B.',
        'Jingjin H.',
        'Matt B.',
        'Matt S.',
        'Yoann G.',
    ];
    $scope.goalTypesList = [
        {
            type: 'goal',
            value: 1,
            name: 'Regular'
        },{
            type: 'goal',
            value: 1,
            name: 'Service'
        },{
            type: 'goal',
            value: 1,
            name: 'Slow ball'
        },{
            type: 'goal',
            value: 1,
            name: 'Lucky'
        },{
            type: 'goal',
            value: 1,
            name: 'Foosenshaft'
        }
    ];
    $scope.goalAgainstTheTeam = {
        type: 'goal',
        value: -1,
        name: 'Against the team'
    };
    $scope.timer = 0;

    function millisecondsToSeconds(milliseconds){
        return Math.floor(milliseconds / 1000);
    }
    function slugify(text){
        return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    }
    function preparePlayersList(playersList){
        //sort the original players list
        playersList.sort();

        var result = {};

        for (var i = 0; i < playersList.length; i++) {
            var player = {
                type: 'playerList',
                name: playersList[i],
                slug: slugify(playersList[i]),
                selected: false
            };
            result[player.slug] = player;
        }
        return result;
    }
    var chronoExecution = function(){
        var currentTime = new Date();
        $scope.timer = millisecondsToSeconds(currentTime.getTime()) - $scope.startTime;
        startTimer();
    };
    function startTimer(){
        timerMatch = $timeout(chronoExecution, 1000);
    }
    function stopTimer(){
        $timeout.cancel(timerMatch);
    }
    function createPlayer(position, team){
        return {
            type: 'player',
            name: '',
            slug: '',
            position: position,
            team: team
        };
    }
    // Reinitialise a match
    function initMatch(){
        $scope.playersList = preparePlayersList(playersList);
        $scope.players = [
            createPlayer('offence', 0),
            createPlayer('defence', 0),
            createPlayer('offence', 1),
            createPlayer('defence', 1)
        ];
        $scope.teamsCreated = false;
        $scope.matchStatus = 'choose-team';
        $scope.buttonActionActive = true;
        $scope.buttonActionText = 'Team-up';
        $scope.score = [0,0];
        $scope.matchData = [];
        $scope.timer = 0;
        $scope.startTime = 0;
        stopTimer();
        $scope.goalDialog = false;
    }

    //create the teams
    function actionCreateTeams(){
        $scope.buttonActionActive = true;
        $scope.matchStatus = 'start';
        $scope.buttonActionText = 'Start';
    }

    // Start a match
    function actionStart(){
        var dateObject = new Date();
        $scope.buttonActionActive = false;
        $scope.matchStatus = 'started';
        $scope.startTime = millisecondsToSeconds(dateObject.getTime());
        startTimer();
    }

    // Add a goal
    function actionGoal(){
        $scope.goalDialog = true;
    }

    // End a match
    function actionEndMatch(){
        $scope.matchStatus = 'ended';
        $scope.buttonActionActive = true;
        $scope.buttonActionText = 'New match?';
        stopTimer();

        $http.post('/api/matches', {
            name: $scope.newThing,
            timestamp: $scope.startTime,
            players: $scope.players,
            score: $scope.score,
            timer: $scope.timer,
            data: $scope.matchData
        });
    }
    // Restart a match
    function actionRestart(){
        initMatch();
    }

    $scope.currentlySelectedPlayer = null;

    $scope.dispatchAction = function(){
        switch ($scope.matchStatus) {
        case 'choose-team':
            actionCreateTeams();
            break;
        case 'start':
            actionStart();
            break;
        case 'started':
            actionGoal();
            //actionEndMatch();

            break;
        case 'ended':
            actionRestart();
            break;
        default:

        }
    };

    function addSwapDataToMatch(teamIndex){
        var swap = {
            type: 'swap',
            team: {
                index: teamIndex
            }
        };
        addMatchData(swap);
    }

    function updateGoals(playerTeam, goalValue){

        //set the team index
        var isTeam1 = true;
        if(playerTeam === 1){
            isTeam1 = false;
        }

        //invert the team index if
        if(goalValue < 0){
            isTeam1 = !isTeam1;
        }

        //add the goal
        var indexTeam = (isTeam1)? 0 : 1;
        $scope.score[indexTeam]++;

    }

    function addMatchData(data){
        //add the timer value
        data.timer = $scope.timer;
        //add the data to the match data
        $scope.matchData.push(data);
    }
    function addGoalDataToMatch(currentPlayer, goalData){

        var goal = {
            type: 'goal',
            player: {
                slug: currentPlayer.slug,
                name: currentPlayer.name,
                team: currentPlayer.team,
                position: currentPlayer.position
            },
            goal: {
                name: goalData.name,
                value: goalData.value
            }
        };

        addMatchData(goal);
    }

    function checkMatchEnd(){
        if($scope.score[0] === 8 || $scope.score[1] === 8){
            actionEndMatch();
        }
    }

    function updatePlayersList(){
        //update the players list
        var indexPlayerList;
        for (indexPlayerList in $scope.playersList) {
            if ($scope.playersList.hasOwnProperty(indexPlayerList)) {
                $scope.playersList[indexPlayerList].selected = false;
            }
        }
        //hide the selected players
        for (var i = 0; i < $scope.players.length; i++) {
            if( $scope.playersList.hasOwnProperty($scope.players[i].slug) ){
                $scope.playersList[$scope.players[i].slug].selected = true;
            }
        }
    }
    function populateNewPlayer(toPlayer, fromPlayer){
        toPlayer.slug = fromPlayer.slug;
        toPlayer.name = fromPlayer.name;
    }
    function swapPlayer(player, newPlayer){
        //copy the new player's data
        var newPlayerDataCopy = {};
        populateNewPlayer(newPlayerDataCopy, newPlayer);

        //find the original player and populate it with the data
        //from the target player
        for (var i = 0; i < $scope.players.length; i++) {
            if($scope.players[i].slug !== '' && newPlayer.slug === $scope.players[i].slug){
                populateNewPlayer($scope.players[i], player);
            }
        }

        populateNewPlayer(player, newPlayerDataCopy);
    }
    function checkTeamsComposition(){
        var playersSet = 0;
        for (var i = 0; i < $scope.players.length; i++) {
            if($scope.players[i].slug){
                playersSet ++;
            }
        }
        if(playersSet === $scope.players.length){
            $scope.teamsCreated = true;
        }else{
            $scope.teamsCreated = false;
        }
    }

    function onDropCompleteChooseTeam(player, data){
        if('type' in data){
            switch (data.type) {
            case 'playerList':
                //initialise the player from the list
                populateNewPlayer(player, data);
                //update the players list
                updatePlayersList();
                break;
            case 'player':
                //swap the player
                swapPlayer(player, data);
                break;
            }

            //check if the teams are created
            checkTeamsComposition();
        }
    }

    function scoreGoal(player, data){
        $scope.goalDialog = false;
        //add the data to the match
        addGoalDataToMatch(player, data);
        //update the goals
        updateGoals(player.team, data.value);
        //check the end of the match
        checkMatchEnd();
    }

    function onDropCompleteMatchStarted(player, data){
        if('type' in data){
            switch (data.type) {
            case 'goal':
                scoreGoal(player, data);
                break;
            case 'player':
                //swap the player
                if(player.team === data.team){
                    //add the swap data
                    addSwapDataToMatch(player.team);
                    swapPlayer(player, data);
                }
                break;
            }

            //check if the teams are created
            checkTeamsComposition();
        }
    }

    function onDropComplete(player, data){
        switch ($scope.matchStatus) {
        case 'choose-team':
            onDropCompleteChooseTeam(player, data);
            break;
        case 'started':
            onDropCompleteMatchStarted(player, data);
            break;

        }
    }

    $scope.onDropCompletePlayer0 = function(data, event){
        onDropComplete($scope.players[0], data, event)
    };
    $scope.onDropCompletePlayer1 = function(data, event){
        onDropComplete($scope.players[1], data, event)
    };
    $scope.onDropCompletePlayer2 = function(data, event){
        onDropComplete($scope.players[2], data, event)
    };
    $scope.onDropCompletePlayer3 = function(data, event){
        onDropComplete($scope.players[3], data, event)
    };

    //initialise the match
    initMatch();

});
