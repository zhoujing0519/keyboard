function Key(key, keyCode, code){
  this.$el = null
  this.key = key
  this.keyCode = keyCode
  this.code = code

  this.render()
}

Key.prototype.render = function(){
  const key = document.createElement('div')

  key.className = 'key'
  key.innerHTML = this.key
  key.setAttribute('data-code', this.code)
  this.$el = key
}

Key.prototype.keydownHandler = function(){
  this.$el.classList.add('keydown')
}

Key.prototype.keyupHandler = function(){
  this.$el.classList.remove('keydown')
  this.$el.classList.remove('keypress')
}

Key.prototype.keypressHandler = function(){
  this.$el.classList.add('keypress')
}