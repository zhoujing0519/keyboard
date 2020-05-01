> 模拟真实键盘输入

- 提供键位按下的声音
- 提供键位回弹的声音
- 由于模拟的是真实键盘，不需要考虑keypress的情况，且需要对重复触发的keydown事件做处理

> 键位比对，使用code

- keyCode
  - 在 keypress 中与 keydown 和 keyup 事件中不一致
  - 存在 keyCode 值相同的情况
- key
  - 存在值相同的情况如 ShiftRight 和 ShiftLeft
- code 是独一无二的

> keypress 与 keydown 和 keyup 派发的部分 keyCode 不一致

- 回车一致
- 字母不一致，差32

> 不监听keypress的按钮

- 方向键
- ctrl, alt, cmd, shift