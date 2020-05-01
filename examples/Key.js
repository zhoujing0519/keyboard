function Key(key, keyCode, code){
  this.$el = null
  this.key = key
  this.keyCode = keyCode
  this.code = code

  this.render()
}

// 创建键
Key.prototype.render = function(){
  const key = document.createElement('div')

  key.className = 'key'
  key.innerHTML = this.key
  key.setAttribute('data-code', this.code)
  this.$el = key
}

// 键盘按下的处理
Key.prototype.keydownHandler = function(){
  this.$el.classList.add('keydown')
}

// 键盘回弹的处理
Key.prototype.keyupHandler = function(){
  this.$el.classList.remove('keydown')
  this.$el.classList.remove('keypress')
}

// 键盘处于按压状态的处理
Key.prototype.keypressHandler = function(){
  this.$el.classList.add('keypress')
}