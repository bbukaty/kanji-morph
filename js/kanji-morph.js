var inuUrl = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/072ac.svg"
var sanUrl = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/04e09.svg"

var kanjiA, kanjiB;
var strokesA = []
var aLoaded = false;

paper.project.importSVG(inuUrl, function (kanji) {
  kanji.position = new paper.Point(view.center)
  kanji.scale(4)
  kanji.children[2].visible = false // disable stroke numbers

  // kanji.fullySelected = true

  
  // quick and dirty global access
  kanjiA = kanji
  getAllChildPaths(kanji, strokesA)
  aLoaded = true
});

function getAllChildPaths(item, pathList) {
  if (item instanceof Path) {
    pathList.push(item)
  } else if (item instanceof Group) {
    item.children.forEach(function (item) { getAllChildPaths(item, pathList) });
  }
}

function onFrame(event) {
  if (aLoaded && event.count > 30) {
    // debugger;
  }
}

function onMouseMove(event) {
  strokesA[0].segments[0].point = event.point;
}