function AudioPool(audioSrc){
  this.audioSrc = audioSrc
  this.audioPool = []
}

AudioPool.prototype.playAudio = function(){
  if(this.audioPool.length === 0){
    const audio = document.createElement('audio')

    audio.onended = () => this.audioPool.push(audio)
    audio.src = this.audioSrc
    audio.play()
  }else{
    this.audioPool.shift().play()
  }
}