console.log('YoAPITokenConcealer v0.1')

var keyCache = {}

function bindClickFunction () {
  var rows = document.getElementsByClassName('api-token')
  Array.prototype.forEach.call(rows, function (row) {
    var keyNode = row.getElementsByTagName('span')[1]
    if (!keyNode) return
    var key = keyNode.innerHTML
    if (keyCache[key]) return
    keyCache[key] = true
    keyNode.style.display = 'none'
    var icon = row.getElementsByTagName('i')[0]
    icon.style.cursor = 'pointer'
    icon.onclick = function (e) {
      keyNode.style.display = (keyNode.style.display === 'none' ? 'inline' : 'none')
    }
  })
}

document.addEventListener('DOMNodeInserted', bindClickFunction, false)
