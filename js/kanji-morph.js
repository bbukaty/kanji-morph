
class KanjiMorph {
  constructor(initialChar) {
    // state
    this.char = initialChar
    this.loaded = false
    this.strokes = []
    this.periphery = null
    this.morphingTo = null
    this.tStart = 0
    this.interval = 3

    // visual placeholder
    this.item = new Path.Circle(new Point(view.center), view.size.width / 10)
    this.item.strokeColor = 'black'

    let kanjiSvgUrl = this.getSvgFromUnicode(initialChar)
    paper.project.importSVG(kanjiSvgUrl, {
      insert: false,
      onLoad: (kanjiSvg) => {
        let kanji = kanjiSvg.children[1]
        this.item.remove() // remove placeholder
        this.item = kanji
        paper.project.activeLayer.addChild(kanji);
        this.loaded = true
        this.initialize()
      }
    })
  }

  getSvgFromUnicode(char) {
    return "../data/kanji/" + char.charCodeAt(0).toString(16).padStart(5, '0') + '.svg'
  }

  initialize() {
    this.item.position = new paper.Point(view.center)
    this.item.scale(4)
    this.item.selected = true
    // this.item.fullySelected = true;

    this.findStrokes(this.item)
    this.createPeriphery()
  }

  // recursively find path objects, add them to strokes
  findStrokes(item) {
    if (item instanceof Path) {
      this.strokes.push(item)
    } else if (item instanceof Group) {
      item.children.forEach((child) => this.findStrokes(child));
    }
  }

  createPeriphery() {
    let center = this.item.position
    let sides = this.strokes.length
    let radius = this.item.bounds.size.width
    let periphery = new Path.RegularPolygon(center, sides, radius)
    periphery.strokeColor = 'green'
    periphery.closed = false
    periphery.visible = false
    this.periphery = periphery
  }

  startMorph(targetChar, time) {
    // TODO get info from targetChar, store in state
    this.morphingTo = targetChar
    this.tStart = time
  }

  step(frameEvent) {
    if (!this.loaded) return;
    if (this.morphingTo) {
      if (!this.tStart) this.tStart = frameEvent.time;
      let factor = Math.min(1, (frameEvent.time - this.tStart) / this.interval)
      this.strokes[0].interpolate(this.strokes[0], this.periphery, factor)
    }
  }
}

// createGrid();
let kanjiMorph = new KanjiMorph('大');

function onFrame(event) {
  kanjiMorph.step(event);
}

// function onMouseMove(event) {}

function onKeyDown(event) {
  if (event.key == 'space') {
    kanjiMorph.startMorph('三')
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