import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MapOne from './mapOne.json'
import MapTwo from './mapTwo.json'
import MapRow from './components/mapRow';

class App extends Component {
  constructor(props){
    super(props);

    this.mapStatus = {
      EMPTY : 0,
      WAY : 1,
      PLAYER : 2,
      LADDER : 3,
      ENEMY : 4,
      ITEM : 5
    }

    this.cssClasses = {
      EMPTY : 'boundary',
      FLOOR : 'floor',
      PLAYER : 'player',
      LADDER : 'ladder'
    }

    var mapYSize = MapOne.length;
    var mapXSize = MapOne[0].length;

    this.state = {
      gameOver : false,
      gameTime : 0,
      gameTick : 0,
      oldCharacterXPosition : 2,
      oldCharacterYPosition : 2,
      characterXPosition : 2,
      characterYPosition : 2,
      mapFloor : 0,
      mapCoordenates : MapOne,
      visibleMapCoordenates : [
        [],
        [],
        [],
        [],
        []
      ],
      visibleRows : 5,
      visibleColumns : 5,
      mapXSize : mapXSize,
      mapYSize : mapYSize,
      ladders :[
        {
          floor: 0,
          x: 7,
          y: 11
        }
      ],
      enemies :[
        {
          attack : 10,
          boss : false,
          cssClass : 'rat',
          id : 0,
          name: 'Rat',
          level: '1',
          health: 50,
          quantity: 10,
          experience : 50
        },
        {
          attack : 30,
          boss : true,
          cssClass : 'orc',
          id : 1,
          name: 'Orc (boss)',
          level: '3',
          health: 150,
          quantity: 1,
          experience : 150
        }
      ],
      mapEnemies : [ ],
      items : [
        {
          attack : 0,
          cssClass : 'minor-health-potion',
          id : 0,
          name : 'Minor health potion',
          healthRecovery : 50,
        },
        {
          attack : 5,
          cssClass : 'knife',
          id : 1,
          name : 'Knife',
          healthRecovery : 0,
        },
        {
          attack : 10,
          cssClass : 'sword',
          id : 2,
          name : 'Sword',
          healthRecovery : 50,
        }
      ],
      mapItems : [ 
        
      ],
      playerInfo : {
        alive : true,
        attack : 10,
        experience : 0,
        nextLevelExperience : 100,        
        health : 100,
        maxHealth : 100,
        level : 1,
        weapon : {
          attack : 0,
          name : 'None'
        }
      }
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.appDiv).focus();

    var mapEnemies = this.generateRandomEnemies();

    var mapItens = this.generateRandomItens();

    var visibleMapCoordenates = this.getVisibleMap(this.state.characterXPosition, this.state.characterYPosition);

    this.setState(
      {
        mapEnemies : mapEnemies,
        mapItems : mapItens,
        visibleMapCoordenates : visibleMapCoordenates
      }
    );

    this.update();
  }

  generateRandomEnemies(){
    var enemies = this.state.enemies;
    var mapEnemies = this.state.mapEnemies;    

    /* 5 Rat */
    for(var x = 0; x < 5; x++)
    {
      var position = this.generateRandomPosition();
      mapEnemies.push({
        boss : enemies[0].boss,
        id : enemies[0].id,
        floor : position.floor,
        health : enemies[0].health,
        x : position.x,
        y : position.y,
        alive : true
      })
    }

    for(x = 0; x < 1; x++)
    {
      position = this.generateRandomPosition();
      mapEnemies.push({
        boss : enemies[1].boss,        
        id : enemies[1].id,
        floor : 1,
        health : enemies[1].health,
        x : position.x,
        y : position.y,
        alive : true
      })
    }

    return mapEnemies;
  }

  generateRandomItens(){
    var items = this.state.items;
    var mapItems = this.state.mapItems;
    
    /* 5 Health potion */
    for(var x = 0; x < 5; x++)
    {
      var position = this.generateRandomPosition();
      mapItems.push({
        attack : items[0].attack,
        id : items[0].id,
        floor : position.floor,
        healthRecovery : items[0].healthRecovery,
        name : items[0].name,
        x : position.x,
        y : position.y,
        visible : true
      })
    }

    /* 2 knife */
    for(x = 0; x < 2; x++)
    {
      position = this.generateRandomPosition();
      mapItems.push({
        attack : items[1].attack,
        id : items[1].id,
        floor : position.floor,
        healthRecovery : items[1].healthRecovery,
        name : items[1].name,
        x : position.x,
        y : position.y,
        visible : true
      })
    }

    return mapItems;
  }

  generateRandomPosition(){
    var validPosition = false;
    var maxX = this.state.mapXSize;
    var maxY = this.state.mapYSize;
    var mapCoordenates = MapOne;
    var position = {};

    while(!validPosition){
      var floor = Math.floor(Math.random() * 50);

      if (floor >= 25)
      {
        floor = 1;
        mapCoordenates = MapTwo;
      }
      else
      {
        floor = 0;        
      }        

      var x = Math.floor(Math.random() * maxX);
      var y = Math.floor(Math.random() * maxY);      

      if (mapCoordenates[y][x] !== 0)
      {
        position.x = x;
        position.y = y;
        position.floor = floor;
        validPosition = true;
      }
    }

    return position;
  }

  update(){
    this.setCharacterPosition();

    if (!this.state.playerInfo.alive)
    {
      this.setState({
        gameOver : true
      });
      return;
    }

    var gameTime = this.state.gameTime;
    var gameTick = this.state.gameTick;

    gameTick++;

    if (gameTick % 10 === 0)
    {
      gameTick = 0;
      gameTime++;
    }

    this.setState({
      gameTime : gameTime,
      gameTick : gameTick
    });

    var that = this;
    setTimeout(function(){
      that.update();
    }, 100);
  }

  getRenderInfoOfMapCoordenate(x, y){
    if (x < 0 || y < 0)
      return  {
       status : this.mapStatus.EMPTY,
       cssClass : this.cssClasses.EMPTY
      }

    if (x >= this.state.mapXSize || y >= this.state.mapYSize)
      return  {
        status : this.mapStatus.EMPTY,
        cssClass : this.cssClasses.EMPTY
      }

    var mapCoordenates = this.state.mapCoordenates;

    var cssClass = '';

    switch(mapCoordenates[y][x])
    {
      case 0: {
        cssClass = this.cssClasses.EMPTY;
        break;
      }
      case 1: {
        cssClass = this.cssClasses.FLOOR;
        break;
      }
      default: {
        console.log(mapCoordenates[y][x]);
      }
    }
    return {
      cssClass : cssClass,
      status : mapCoordenates[y][x]
    };
  }

  getInfoOfVisibleMap(renderX, renderY, mapX, mapY ){
    if (renderX === 0 && renderY === 0)
      return {
        cssClass : this.cssClasses.PLAYER,
        status : this.mapStatus.PLAYER
      } 

    // Check if has ladders on position
    var hasLadder = this.checkIfLadderOnPosition(mapX, mapY)
    if (hasLadder)
      return {
        status : this.mapStatus.LADDER,
        cssClass : this.cssClasses.LADDER
      }

    var enemy = this.getEnemyOnPosition(mapX, mapY);

    if (enemy && enemy.alive)
      return {
        cssClass : enemy.cssClass,
        status : this.mapStatus.ENEMY
      }

    var item = this.getItemOnPosition(mapX, mapY);

    if (item && item.visible)
      return {
        cssClass : item.cssClass,
        status : this.mapStatus.ITEM
      };
    
    return this.getRenderInfoOfMapCoordenate(mapX, mapY);
  }

  getVisibleMap(characterXPosition, characterYPosition){
    var visibleMapRenderInfo = this.state.visibleMapCoordenates;
    var initialX = -(this.state.visibleColumns - 1)/2;
    var initialY = -(this.state.visibleRows - 1)/2;
    var finalX = (this.state.visibleColumns - 1) / 2;
    var finalY = (this.state.visibleRows - 1) / 2;

    var renderX = 0;
    var renderY = 0;

    for(var y = initialY; y <= finalY; y++)
    {
      renderX = 0;
      for (var x = initialX; x <= finalX; x++)
      {
        visibleMapRenderInfo[renderY][renderX] = this.getInfoOfVisibleMap(x, y, characterXPosition + x, characterYPosition + y);
        renderX++;
      }
      renderY++;
    }

    return visibleMapRenderInfo;
  }

  checkIfLadderOnPosition(x, y){
    var ladders = this.state.ladders;
    var mapFloor = this.state.mapFloor;

    var hasLadder = false;
    ladders.forEach(function(ladder){
      if (ladder.x === x && ladder.y === y && ladder.floor === mapFloor)
        hasLadder = true;
    });

    return hasLadder;
  }

  getEnemyOnPosition(x, y){
    var baseEnemies = this.state.enemies;
    var enemies = this.state.mapEnemies;
    var mapFloor = this.state.mapFloor;

    var targetEnemy = null;
    enemies.forEach(function(enemy){
      if (enemy.x === x && enemy.y === y && enemy.floor === mapFloor)
        targetEnemy = enemy;
    });

    if (targetEnemy)
    {
      targetEnemy.attack = baseEnemies[targetEnemy.id].attack;
      targetEnemy.cssClass = baseEnemies[targetEnemy.id].cssClass;
      targetEnemy.experience = baseEnemies[targetEnemy.id].experience;
    }

    return targetEnemy;
  }

  getItemOnPosition(x, y ){
    var baseItens = this.state.items;
    var itens = this.state.mapItems;
    var mapFloor = this.state.mapFloor;

    var targetItem = null;
    itens.forEach(function(item){
      if (item.x === x && item.y === y && item.floor === mapFloor)
        targetItem = item;
    });

    if (targetItem)
    {
      targetItem.attack = baseItens[targetItem.id].attack;
      targetItem.cssClass = baseItens[targetItem.id].cssClass;
      targetItem.name = baseItens[targetItem.id].name;
      targetItem.healthRecovery = baseItens[targetItem.id].healthRecovery;
    }

    return targetItem;
  }

  setEnemyState(enemyInfo){
    if (enemyInfo.health <= 0)
      enemyInfo.alive = false;

    var mapEnemies = this.state.mapEnemies;

    mapEnemies.forEach(function(enemy){
      if (enemy.id === enemyInfo.id)
        enemy = enemyInfo;
    });

    this.setState({
      mapEnemies : mapEnemies
    })
  }

  setItemState(itemInfo){
    var mapItems = this.state.mapItems;

    mapItems.forEach(function(item){
      if (item.id === itemInfo.id)
        item = itemInfo;
    });

    this.setState({
      mapItems : mapItems
    })
  }

  getExperienceFromNextLevel(currentLevel) {
    var nextLevelExperience = 0;

    switch(currentLevel)
    {
      case 2: {
        nextLevelExperience = 250;
        break;
      }
      case 3: {
        nextLevelExperience = 500;
        break;
      }
      case 4: {
        nextLevelExperience = 1000;
        break;
      }      
    }

    return nextLevelExperience;
  }

  setCharacterPosition(){
    var characterXPosition = this.state.characterXPosition;
    var characterYPosition = this.state.characterYPosition;
    var playerInfo = this.state.playerInfo;

    // Decide what happens with player on new position
    var hasLadder = this.checkIfLadderOnPosition(characterXPosition, characterYPosition);

    if (hasLadder)
    {
      var mapFloor = this.state.mapFloor;
      mapFloor++;
      characterXPosition = 1;
      characterYPosition = 1;

      this.setState({
        mapFloor : mapFloor,
        mapCoordenates : MapTwo
      });
    }

    var enemy = this.getEnemyOnPosition(characterXPosition, characterYPosition);

    if (enemy && enemy.alive)
    {
      playerInfo.health -= enemy.attack;

      if (playerInfo.health <= 0)
      {
        playerInfo.health = 0;
        playerInfo.alive = false;
      }

      enemy.health -= (playerInfo.attack * playerInfo.level) + playerInfo.weapon.attack;

      var gameOver = this.state.gameOver;

      if (enemy.health <= 0)
      {
        playerInfo.experience += enemy.experience;

        if (enemy.boss)
          gameOver = true;

        if (playerInfo.experience >= playerInfo.nextLevelExperience)
        {
          playerInfo.level++;
          playerInfo.maxHealth += 50;
          playerInfo.health = playerInfo.maxHealth;
          playerInfo.nextLevelExperience = this.getExperienceFromNextLevel(playerInfo.level);
        }        
      }

      characterXPosition = this.state.oldCharacterXPosition;
      characterYPosition = this.state.oldCharacterYPosition;

      this.setState({
        gameOver : gameOver,
        playerInfo : playerInfo,
        characterXPosition : characterXPosition,
        characterYPosition : characterYPosition
      });

      this.setEnemyState(enemy);
    }

    var item = this.getItemOnPosition(characterXPosition, characterYPosition);

    if (item && item.visible)
    {
      if (item.healthRecovery > 0)
      {
        playerInfo.health += item.healthRecovery;
        
        if (playerInfo.health > playerInfo.maxHealth)
          playerInfo.health = playerInfo.maxHealth;
      }
      else
      {
        playerInfo.weapon.name = item.name;
        playerInfo.weapon.attack = item.attack;
      }

      item.visible = false;

      this.setState({
        playerInfo : playerInfo
      });

      this.setItemState(item);
    }

    var visibleMapCoordenates = this.getVisibleMap(characterXPosition, characterYPosition);

    this.setState(
        {
          characterXPosition : characterXPosition,
          characterYPosition : characterYPosition,
          visibleMapCoordenates : visibleMapCoordenates
        }
     );
  }

  isBoundary(x, y){
    var mapCoordenates = this.state.mapCoordenates;

    return mapCoordenates[y][x] === 0;
  }

  onKeyPress(event){
    var key = event.key.toLowerCase();

    var oldCharacterXPosition = this.state.characterXPosition;
    var oldCharacterYPosition = this.state.characterYPosition;
    var characterXPosition = this.state.characterXPosition;
    var characterYPosition = this.state.characterYPosition;

    if (key === 'w' && !this.isBoundary(characterXPosition, characterYPosition - 1))
      characterYPosition--;

    if (key === 's' && !this.isBoundary(characterXPosition, characterYPosition + 1))
      characterYPosition++;

    if (key === 'a' && !this.isBoundary(characterXPosition - 1, characterYPosition))
      characterXPosition--;

    if (key === 'd' && !this.isBoundary(characterXPosition + 1, characterYPosition))
      characterXPosition++;

    this.setState(
        {
          oldCharacterXPosition : oldCharacterXPosition,
          oldCharacterYPosition : oldCharacterYPosition,
          characterXPosition : characterXPosition,
          characterYPosition : characterYPosition
        }
     );
  }

  render() {
    var mapRows = this.state.visibleMapCoordenates.map((row, i) =>
      <MapRow squareMeters={row} key={i} />
    )

    /* Debug */

    var positionX = this.state.characterXPosition;
    var positionY = this.state.characterYPosition;
    var oldPositionX = this.state.oldCharacterXPosition;
    var oldPositionY = this.state.oldCharacterYPosition;
    var gameTick = this.state.gameTick;
    var gameTime = this.state.gameTime;

    var enemyRows = this.state.mapEnemies.map(enemy =>
      <div>
        <span>ID : {enemy.id}</span>
        <span>Health :{enemy.health}</span>
      </div>
    );

    var health = this.state.playerInfo.health;
    var maxHealth = this.state.playerInfo.maxHealth;
    var experience = this.state.playerInfo.experience;
    var nextLevelExperience = this.state.playerInfo.nextLevelExperience;    
    var level = this.state.playerInfo.level;
    var weaponName = this.state.playerInfo.weapon.name;
    var weaponAttack = this.state.playerInfo.weapon.attack;
    var power = 10 * level + weaponAttack;    
    
    var gameOver = this.state.gameOver;
    var playerAlive = this.state.playerInfo.alive;

    var debug = false;

    return (
      <div tabIndex="0" className="app" ref="appDiv" onKeyDown={this.onKeyPress.bind(this)}>
        { !gameOver &&
        <div className="clearfix app-wrap">
          <div className="commands pull-left">
            <div className="player-info">
              <span>Health: { health } / { maxHealth }</span>
              <span>Level: { level }</span>
              <span>Experience: { experience } / { nextLevelExperience }</span>
              <span>Weapon: { weaponName } - +{ weaponAttack }</span>
              <span>Attack Power: { power }</span>
            </div>
          </div>
          <div className="main-wrap pull-left">            
            <div className="map-wrap">
              <table className="map">
                <tbody>
                  { mapRows }
                </tbody>
              </table>
            </div>           
          </div>       
        </div>
         }
        { gameOver &&
          <div className="game-over-wrap">
            <h2>GameOver</h2>
            { playerAlive &&
              <div className="info">
                <h4>You win</h4>
              </div>
            }
            { !playerAlive &&
                <div className="info">
                  <h4>You lose</h4>
                  <span>Refresh browser to start again</span>
                </div>
            }

          </div>
        }
        { debug &&
          <div className="debugInfo">
            { enemyRows }

            <span>------------</span>
            <span>PlayerX: { positionX }</span>
            <span>PlayerY: { positionY }</span>
            <span>OldPlayerX: { oldPositionX }</span>
            <span>OldPlayerY: { oldPositionY }</span>
            <span>Game Time: { gameTime }</span>
            <span>Game Tick: { gameTick }</span>
          </div>
        }        

      </div>
    );
  }
}

export default App;
