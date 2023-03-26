var INU_URL = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/072ac.svg"
var sanUrl = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/04e09.svg"

var kanjiA, kanjiB;

class KanjiMorph {
  constructor(initialKanji) {
    // init to placeholder
    this.item = new Path.Circle(new Point(view.center), view.size.width / 10)
    this.item.strokeColor = 'black'
    this.strokes = []
    this.loaded = false
    
    // TODO: convert unicode kanji to accessed svg
    var kanjiSvgUrl = INU_URL // temp hardcoded to inu
    
    paper.project.importSVG(kanjiSvgUrl, (kanjiSvg) => {
      kanjiSvg.position = new paper.Point(view.center)
      kanjiSvg.scale(4)
      kanjiSvg.children[2].visible = false // disable stroke numbers
      getAllChildPaths(kanjiSvg, this.strokes)
      this.item.remove()
      this.item = kanjiSvg
      this.loaded = true
    })
  }
}

var kanjiA = new KanjiMorph("犬")

// recursively find all path objects in item children, add them to pathList
function getAllChildPaths(item, pathList) {
  if (item instanceof Path) {
    pathList.push(item)
  } else if (item instanceof Group) {
    item.children.forEach(function (item) { getAllChildPaths(item, pathList) });
  }
}

function onFrame(event) {
  if (kanjiA.loaded && event.count > 30) {
    // debugger;
  }
}

function onMouseMove(event) {
  if (kanjiA.loaded) {
    kanjiA.strokes[0].segments[0].point = event.point;
  }
}

function onKeyDown(event) {
  if (event.key == 'space') {
    kanjiA.item.scale(1.1)
  }
}