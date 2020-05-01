function Keyboard(keys){
  this.keys = keys
  this.$keys = []
  this.render()
}

// 渲染键盘
Keyboard.prototype.render = function(){
  const keyboard = document.createElement('div')

  keyboard.className = 'keyboard'

  const wrap = document.createElement('div')

  wrap.classList = 'keyboard-wrap'

  let fragment = document.createDocumentFragment()

  this.keys.forEach((keyGroup, rowIndex) => {
    const row = document.createElement('div')
    const delay = Math.abs(Math.floor(this.keys.length / 2) - rowIndex) * 100

    row.className = 'row'

    keyGroup.forEach(({ key, keyCode, code }, index) => {
      const $key = new Key(key, keyCode, code)
      const { $el } = $key

      Object.assign($el.style, {
        'animation-delay': `${Math.abs(Math.floor(keyGroup.length / 2) - index) * 100 + delay}ms`
      })
      row.appendChild($el)
      
      this.$keys.push($key)
    })

    fragment.appendChild(row)
  })

  wrap.appendChild(fragment)
  fragment = null
  keyboard.appendChild(wrap)
  document.body.appendChild(keyboard)
}

// 根据code获取对应的key实例
Keyboard.prototype.getKey = function(code){
  return this.$keys.find(($key) => $key.code === code)
}