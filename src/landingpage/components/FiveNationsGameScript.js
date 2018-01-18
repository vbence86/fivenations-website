function demoScenario(game) {

  function addEntity(id, team, x, y) {
    game.eventEmitter.synced.entities.add({
      id: id || 'hurricane',
      team: team || 1,
      x: x || (50 + Math.random() * 700),
      y: y || (50 + Math.random() * 700),
    });
  };

  // show popup
  var popup = game.GUI.addPopup({
    pauseGame: true,
    text: 'Our small headquarter base is under attack by rebel pirates! Try to eliminate the intruders at all cost and hunt down the remaning forces that are reportedly on the prowl in this sector. To control the units just simply click on them and use the right mouse click shorthand or select the avaliable  commands on the panel. To scroll across the map you can use the minimap or press the cursor kyes.',
    onClick: () => popup.hide(),
    buttonLabel: '',
  });

  game.GUI.addButton({
    x: window.fivenations.window.width - 55,
    y: 15,
    customOverFrame: 195,
    customOutFrame: 194,
    customDownFrame: 195,
    fixedToCamera: true,
    onClick: () => popup.show(),
  });

  // Demo map
  var Starfield = game.map.Starfield;
  game.map.new({
    width: 96,
    height: 96,
    starfield: {
      backgroundTile: 'starfield-1',
      starfieldGenerator: Starfield.PlanetAreaGenerator
    }
  });  

  game.map.scrollToTile(35, 35);

  game.eventEmitter.synced.players.add({
    user: true,
    team: 1,
    authorised: true,
  });

  game.eventEmitter.synced.players.add({
    user: false,
    team: 2,
    authorised: false,
  });        

  game.eventEmitter.synced.players.add({
    user: false,
    team: 3,
    authorised: false,
    independent: true,
  });        

  // Federation base 
  addEntity('commandcenter', 1, 1900, 1784);
  addEntity('miningstation', 1, 2217, 1609);
  addEntity('shipfactory', 1, 1690, 1590);
  addEntity('civilianbase', 1, 1946, 1538);
  addEntity('solarstation', 1, 1668, 1883);
  addEntity('solarstation', 1, 1733, 1936);
  addEntity('solarstation', 1, 1648, 1954);
  addEntity('solarstation', 1, 2143, 1669);
  addEntity('defensesatellite', 1, 2074, 1515);
  addEntity('defensesatellite', 1, 2250, 1877);
  addEntity('defensesatellite', 1, 1495, 1789);
  addEntity('defensesatellite', 1, 1888, 2013);
  addEntity('hurricane', 1, 2073, 2000);
  addEntity('hurricane', 1, 2099, 1971);
  addEntity('hurricane', 1, 2128, 1995);
  addEntity('hurricane', 1, 1484, 1687);
  addEntity('hurricane', 1, 1825, 1489);
  addEntity('hurricane', 1, 2305, 1746);
  addEntity('hurricane', 1, 1551, 1980);
  addEntity('hurricane', 1, 1596, 2011);
  addEntity('hurricane', 1, 1547, 2025);
  addEntity('orca', 1, 2105, 1914);
  addEntity('orca', 1, 1575, 1734);
  addEntity('orca', 1, 1828, 1561);
  addEntity('orca', 1, 2048, 1613);
  addEntity('orca', 1, 1878, 2075);
  addEntity('hailstorm', 1, 1689, 1742);
  addEntity('stgeorge', 1, 2085, 1791);

  // Pirates 
  addEntity('hurricane', 2, 1941, 2185);
  addEntity('hurricane', 2, 1975, 2175);
  addEntity('hurricane', 2, 2017, 2160);
  addEntity('hurricane', 2, 1926, 2214);
  addEntity('hurricane', 2, 2090, 2179);
  addEntity('hurricane', 2, 2299, 1976);
  addEntity('hurricane', 2, 2313, 1927);
  addEntity('hurricane', 2, 2335, 1886);
  addEntity('hurricane', 2, 2331, 1944);
  addEntity('hurricane', 2, 2271, 1989);
  addEntity('hurricane', 2, 2317, 2024);
  addEntity('hurricane', 2, 2411, 1851);
  addEntity('hurricane', 2, 2193, 2107);
  addEntity('hurricane', 2, 2160, 2133);
  addEntity('hurricane', 2, 2293, 1426);
  addEntity('hurricane', 2, 2381, 1501);
  addEntity('hurricane', 2, 2334, 1459);
  addEntity('hurricane', 2, 1550, 1474);
  addEntity('orca', 2, 2433, 2006);
  addEntity('orca', 2, 2165, 2187);
  addEntity('orca', 2, 1793, 2235);
  addEntity('orca', 2, 1381, 1757);
  addEntity('orca', 2, 1464, 1562);
  addEntity('orca', 2, 2016, 1329);
  addEntity('orca', 2, 1912, 1387);
  addEntity('orca', 2, 2466, 2803);
  addEntity('orca', 2, 2513, 2761);
  addEntity('orca', 2, 2443, 2739);
  addEntity('orca', 2, 3173, 2191);
  addEntity('orca', 2, 3275, 2220);
  addEntity('orca', 2, 3178, 2262);
  addEntity('orca', 2, 3331, 714);
  addEntity('orca', 2, 504, 587);
  addEntity('orca', 2, 437, 811);
  addEntity('orca', 2, 769, 680);
  addEntity('orca', 2, 761, 2319);
  addEntity('orca', 2, 966, 3408);
  addEntity('hailstorm', 2, 904, 3374);
  addEntity('hailstorm', 2, 566, 727);
  addEntity('hailstorm', 2, 3357, 3145);
  addEntity('hurricane', 2, 3243, 3161);
  addEntity('hurricane', 2, 3362, 3243);
  addEntity('hurricane', 2, 3477, 3149);
  addEntity('hurricane', 2, 3245, 3185);
  addEntity('hurricane', 2, 3480, 3176);
  addEntity('hurricane', 2, 2379, 2770);
  addEntity('hurricane', 2, 2501, 2691);
  addEntity('hurricane', 2, 2592, 2758);
  addEntity('hurricane', 2, 2498, 2208);
  addEntity('hurricane', 2, 2608, 700);
  addEntity('hurricane', 2, 2713, 751);
  addEntity('hurricane', 2, 2531, 801);
  addEntity('hurricane', 2, 1688, 478);
  addEntity('hurricane', 2, 477, 717);
  addEntity('hurricane', 2, 603, 640);
  addEntity('hurricane', 2, 702, 781);
  addEntity('hurricane', 2, 587, 824);
  addEntity('hurricane', 2, 622, 2323);
  addEntity('hurricane', 2, 953, 3338);
  addEntity('hurricane', 2, 909, 3278);
  addEntity('hurricane', 2, 1075, 3375);
  addEntity('hurricane', 2, 3071, 2195);
  addEntity('hurricane', 2, 3104, 2357);
  addEntity('hurricane', 2, 3327, 763);          

  // ornaments
  addEntity('asteroid1', 3, 1661, 1429);
  addEntity('asteroid1', 3, 1680, 2054);
  addEntity('asteroid1', 3, 1853, 2780);
  addEntity('asteroid1', 3, 628, 3350);
  addEntity('asteroid1', 3, 575, 3089);
  addEntity('asteroid1', 3, 1174, 3053);
  addEntity('asteroid2', 3, 565, 3202);
  addEntity('asteroid2', 3, 1575, 1886);
  addEntity('asteroid2', 3, 448, 1564);
  addEntity('asteroid2', 3, 961, 1355);
  addEntity('asteroid2', 3, 961, 1783);
  addEntity('asteroid3', 3, 820, 1598);
  addEntity('asteroid3', 3, 394, 1760);
  addEntity('asteroid3', 3, 1001, 3034);
  addEntity('asteroid3', 3, 3753, 348);
  addEntity('asteroid3', 3, 3493, 312);
  addEntity('asteroid1', 3, 3567, 308);
  addEntity('asteroid4', 3, 3678, 441);
  addEntity('asteroid4', 3, 3177, 859);
  addEntity('asteroid4', 3, 649, 1712);
  addEntity('asteroid4', 3, 435, 1671);
  addEntity('asteroidbig1', 3, 607, 1889);
  addEntity('asteroidbig2', 3, 819, 1740);
  addEntity('asteroidbig2', 3, 1600, 3467);
  addEntity('asteroidsmall2', 3, 415, 1917);
  addEntity('asteroidsmall2', 3, 435, 1853);
  addEntity('asteroidsmall2', 3, 385, 1621);
  addEntity('asteroidsmall2', 3, 708, 1559);
  addEntity('asteroidsmall2', 3, 909, 1629);
  addEntity('asteroidsmall2', 3, 908, 1836);
  addEntity('asteroidsmall2', 3, 526, 1398);
  addEntity('asteroidsmall2', 3, 894, 1323);
  addEntity('asteroidsmall2', 3, 3218, 905);
  addEntity('asteroidsmall2', 3, 520, 3156);
  addEntity('asteroidsmall2', 3, 1083, 3095);
  addEntity('asteroidsmall2', 3, 924, 2988);
  addEntity('asteroidsmall1', 3, 635, 3107);
  addEntity('asteroidsmall1', 3, 1007, 3097);
  addEntity('asteroidsmall1', 3, 638, 1586);
  addEntity('asteroidsmall1', 3, 354, 1478);
  addEntity('asteroidsmall1', 3, 168, 1416);
  addEntity('asteroidsmall1', 3, 980, 1502);
  addEntity('asteroidsmall1', 3, 495, 2054);
  addEntity('asteroidsmall1', 3, 550, 2102);
  addEntity('asteroidsmall1', 3, 3122, 711);
  addEntity('asteroidsmall1', 3, 3664, 360);
  addEntity('asteroidsmall1', 3, 3319, 310);
  addEntity('asteroidsmall1', 3, 1477, 1929);
  addEntity('asteroidsmall1', 3, 1084, 2171);
  addEntity('asteroidtitanium1', 3, 2186, 1500);
  addEntity('asteroidtitanium2', 3, 2274, 1520);
  addEntity('asteroidtitanium2', 3, 2348, 1641);
  addEntity('asteroidtitaniumsmall2', 3, 2341, 1571);
  addEntity('asteroidtitaniumsmall1', 3, 2235, 1453);
  addEntity('asteroidtitaniumsmall1', 3, 2376, 1725);
  addEntity('asteroidsilicon1', 3, 492, 1773);
  addEntity('asteroidsilicon2', 3, 566, 1662);
  addEntity('asteroidsilicon2', 3, 823, 1862);
  addEntity('asteroidsilicon2', 3, 674, 3177);
  addEntity('asteroidsilicon2', 3, 2424, 1689);
}

export {demoScenario};
export default demoScenario;
