function Keyboard(keys){
  this.keys = keys
  this.$keys = []
  this.render()
}

Keyboard.prototype.render = function(){
  const keyboard = document.createElement('div')

  keyboard.className = 'keyboard'

  const wrap = document.createElement('div')

  wrap.classList = 'keyboard-wrap'

  let fragment = document.createDocumentFragment()

  this.keys.forEach((keyGroup) => {
    const row = document.createElement('div')

    row.className = 'row'

    keyGroup.forEach(({ key, keyCode, code }) => {
      const $key = new Key(key, keyCode, code)
      
      row.appendChild($key.$el)
      
      this.$keys.push($key)
    })

    fragment.appendChild(row)
  })

  wrap.appendChild(fragment)
  fragment = null
  keyboard.appendChild(wrap)
  document.body.appendChild(keyboard)
}

Keyboard.prototype.getKey = function(code){
  return this.$keys.find(($key) => $key.code === code)
}