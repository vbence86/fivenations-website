function demoScenario(game) {
  game.loadMap('promotionalmap01-1');

  // locations
  game.locationManager.add({
    x: 2404 - 250,
    y: 493 - 280,
    width: 500,
    height: 560,
  });

  game.locationManager.add({
    x: 2032,
    y: 2900,
    width: 1800,
    height: 800,
  });

  game.GUI.addButton({
    x: window.fivenations.window.width - 55,
    y: 15,
    customOverFrame: 195,
    customOutFrame: 194,
    customDownFrame: 195,
    fixedToCamera: true,
    onClick: () => startPopup.show(),
  });

  var startPopup = game.GUI.addPopup({
    offsetY: -100,
    pauseGame: true,
    onClick: () => {
      var icaruses = game.entityManager
        .entities(':player(2)')
        .filter((entity) => {
          return entity
            .getDataObject()
            .getId() === 'icarus';
        })
        .forEach(entity => entity.selectedAsTarget());
      showMissionOjbective();
      startPopup.hide();
    },
    buttonLabel: '',
    buttonOffsetY: 0,
    spritesheet: 'gui.popups',
    frameName: 'promotionalmap_popup_start.png',
    overlay: true,
  });

  var capturePopup = game.GUI.addPopup({
    offsetY: -100,
    pauseGame: true,
    onClick: () => capturePopup.hide(),
    buttonLabel: '',
    buttonOffsetY: -50,
    spritesheet: 'gui.popups',
    frameName: 'promotionalmap_popup_event.png',
    overlay: true,
  });
  window.p = capturePopup;
  capturePopup.hide();    

  var defeatPopup = game.GUI.addPopup({
    pauseGame: true,
    spritesheet: 'gui.endgametitles',
    frameName: 'endgame_defeat.png',
    overlay: true,
  });
  defeatPopup.hide();  

  var victoryPopup = game.GUI.addPopup({
    pauseGame: true,
    spritesheet: 'gui.endgametitles',
    frameName: 'endgame_victory.png',
    overlay: true,
  });
  victoryPopup.hide();

  // End game conditions
  var gameEnded = false;
  setTimeout(function endGameCheck() {
    if (gameEnded) return;
    // DEFEAT
    var icaruses = game.entityManager
      .entities(':player(2)')
      .filter((entity) => {
        return entity
          .getDataObject()
          .getId() === 'icarus';
      });
    if (icaruses.length === 0) {
      defeatPopup.show();
      gameEnded = true;
    }

    const location = game.locationManager.getLocationById(1);
    if (game.locationManager.hasEntitiesInLocationFromTeam(location, 2)) {
      const deliveredEntities = game.locationManager.getEntitiesInLocationFromTeam(location, 2);
      const icarusesDelivered = deliveredEntities
        .filter((entity) => {
          return entity
            .getDataObject()
            .getId() === 'icarus';
        });
      if (icarusesDelivered.length === 2) {
        victoryPopup.show();
        gameEnded = true;
      }
    }

    setTimeout(endGameCheck, 5000);
  }, 5000);

  // Logic to rescue Orcas from Player 7
  var orcasRescued = false;
  setTimeout(function checkPlayer7Orcas() {
    if (orcasRescued) return;
    const location = game.locationManager.getLocationById(0);
    if (game.locationManager.hasEntitiesInLocationFromTeam(location, 2)) {
      const rescuables = game.locationManager.getEntitiesInLocationFromTeam(location, 7);
      const playerManager = game.playerManager;
      rescuables.forEach((entity) => {
        entity
          .getDataObject()
          .setTeam(2);
        entity.player = playerManager.getPlayerByTeam(2);
        entity.colorIndicator = game.GUI.addColorIndicator(entity);
      });
      capturePopup.on('dismiss', () => {
        rescuables.forEach(entity => entity.selectedAsTarget());
      });
      capturePopup.show();
      orcasRescued = true;          
    }
    setTimeout(checkPlayer7Orcas, 2000);
  }, 2000);

  // Logic to rescue Orcas from Player 7
  var baseResouced = false;
  setTimeout(function checkBaseRescued() {
    if (baseResouced) return;
    const location = game.locationManager.getLocationById(1);
    if (game.locationManager.hasEntitiesInLocationFromTeam(location, 2)) {
      const rescuables = game.locationManager.getEntitiesInLocationFromTeam(location, 7);
      const playerManager = game.playerManager;
      rescuables.forEach((entity) => {
        entity
          .getDataObject()
          .setTeam(2);
        entity.player = playerManager.getPlayerByTeam(2);
        entity.colorIndicator = game.GUI.addColorIndicator(entity);
        entity.selectedAsTarget();
      });
      baseResouced = true;
    }
    setTimeout(checkBaseRescued, 2000);
  }, 2000);

  // Notifications for the win condition
  function showMissionOjbective() {
    if (gameEnded) return;
    game.GUI.showMinimapNotification({
      x: 3250,
      y: 3250,
    });
    game.GUI.showNotification('Take both Icarus to James Longstreet installation!');
    setTimeout(showMissionOjbective, 60000);
  };
}

export {demoScenario};
export default demoScenario;
