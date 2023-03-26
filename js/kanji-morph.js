const INU_URL = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/072ac.svg"
const sanUrl = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/04e09.svg"

class KanjiMorph {
  constructor(initialKanji) {
    this.char = initialKanji
    this.morphingTo = null
    // init visual placeholder
    this.item = new Path.Circle(new Point(view.center), view.size.width / 10)
    this.item.strokeColor = 'black'
    this.strokes = []
    this.loaded = false

    let kanjiSvgUrl = this.getSvgFromUnicode(initialKanji)
    paper.project.importSVG(kanjiSvgUrl, {
      insert: false,
      onLoad: (kanjiSvg) => {
        let kanji = kanjiSvg.children[1]
        kanji.position = new paper.Point(view.center)
        kanji.scale(4)
        // kanji.fullySelected = true;

        // populate KanjiMorph helper state
        this.collectPaths(kanji)

        this.item.remove() // remove placeholder
        this.item = kanji
        paper.project.activeLayer.addChild(kanji);
        this.loaded = true
      }
    })
  }
  
  // recursively find path objects, add them to strokes
  collectPaths(item) {
    if (item instanceof Path) {
      this.strokes.push(item)
    } else if (item instanceof Group) {
      item.children.forEach((child) => this.collectPaths(child));
    }
  }

  addPathToMargin() {
    let center = this.item.position;
    let sides = this.strokes.length;
    let radius = this.item.bounds.size.width;
    let periphery = new Path.RegularPolygon(center, sides, radius);
    periphery.rotate(30)
    periphery.strokeColor = 'green';
    periphery.closed = false
  }

  // TODO
  getSvgFromUnicode(char) {
    return INU_URL;
  }
}

createGrid();
let kanjiMorph = new KanjiMorph("犬");

function onFrame(event) {
  if (kanjiMorph.loaded && event.count > 30) {
    // debugger;
    // kanjiMorph.addPathToMargin();
  }
}

// function onMouseMove(event) {}

function onKeyDown(event) {
  if (event.key == 'space') {
    // kanjiMorph.item.scale(1.1)
    // kanjiMorph.strokes[0].smooth()
    kanjiMorph.addPathToMargin()
  }

  if (event.key == 'p') {
    debugger;
  }
}

function createGrid() {
  for (let y = 0; y < view.size.height; y += 100) {
    let myPath = new Path();
    myPath.strokeColor = 'black';
    myPath.add(new Point(0, y), new Point(view.size.width, y));
  }
  
  for (let x = 0; x < view.size.width; x += 100) {
    let myPath = new Path();
    myPath.strokeColor = 'black';
    myPath.add(new Point(x, 0), new Point(x, view.size.height));
  }
}