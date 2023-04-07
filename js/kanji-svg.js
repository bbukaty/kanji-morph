// stores a unicode character + a paper.js Item of that kanji loaded from SVG.
// actually stores two copies of the Item so that we always have a ground truth
// that we can reference, i.e. for interpolation.
const KanjiSvg = class KanjiSvg {
  constructor(character, onKanjiLoaded) {
    this.char = character
    this.item = null
    this.strokes = []
    this.original = {
      item: null,
      strokes: []
    }

    let kanjiSvgUrl = this.getSvgFromUnicode(character)
    paper.project.importSVG(kanjiSvgUrl, {
      insert: false,
      onLoad: (kanjiSvg) => {
        this.original.item = kanjiSvg.children[1]
        this.initializeItem(this.original.item)
        this.original.strokes = this.collectStrokes(this.original.item, [])
        this.restoreFromOriginal()
        onKanjiLoaded(this)
      }
    })
  }

  // look in /data/kanji for the kanjivg svg file corresponding with a unicode kanji char
  getSvgFromUnicode(char) {
    return "../data/kanji/" + char.charCodeAt(0).toString(16).padStart(5, '0') + '.svg'
  }

  // scaling, positioning, etc. that we want to perform on all kanji svgs on load.
  initializeItem(item) {
    item.position = new paper.Point(view.center)
    item.scale(4)
    // item.strokeWidth = 3
    // item.selected = true
    // item.fullySelected = true;
  }

  restoreFromOriginal() {
    this.item = this.original.item.clone()
    this.strokes = this.collectStrokes(this.item, [])
  }

  // recursively find all path objects, add them to the provided strokeList
  collectStrokes(item, collectedStrokes) {
    let newStrokes = []
    if (item instanceof Path) {
      item.strokeColor = '#000000';
      item.strokeWidth = 10;
      newStrokes.push(item)
    } else if (item instanceof Group) {
      item.children.forEach((child) => {
        newStrokes = newStrokes.concat(this.collectStrokes(child, []))
      });
    }
    return collectedStrokes.concat(newStrokes);
  }
}

window.KanjiSvg = KanjiSvg; // see kanji-morph header