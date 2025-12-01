//////////////////////////////////////////////////////////////
//  Strudel Composition – “OSC Visuals Tutorial Song”
//  Created by Caro (@carovilleneuve)
//  Made for the TouchDesigner × Strudel Tutorial (2025)
//
//  Tutorial link:
//  https://www.patreon.com/carovilleneuve
//
//////////////////////////////////////////////////////////////

setcpm(94/4)
const delaySlider = slider(0,0,0.4);
const hpfSlider = slider(0,0,1200);

const kick_osc = s("compurhythm8000_bd*4")
  .gain(1.5)
  .distort(0.2)
  .attack(0)
  .lpf(400)

const melody_osc = n(irand("8,8 8,16").rib(0, 4)).s("supersaw").struct("[x ~ ~ x]!2").scale("<C:minor!2 G:minor>").add(0.12).lpf(1200).room(0.4).every(4, x=>x.jux(rev))
.delay(delaySlider)

$: stack(
  kick_osc,
  melody_osc.orbit(3)
).hpf(hpfSlider).osc()

/////
const kick = s("compurhythm8000_bd*4")
  .gain(1.5)
  .distort(0.2)
  .attack(0)
  .lpf(400)

const melody = n(irand("8,8 8,16").rib(0, 4)).s("supersaw").struct("[x x ~ x]!2").scale("<C:minor!2 G:minor>").add(0.12).lpf(1200).room(0.4).every(4, x=>x.jux(rev))
.delay(delaySlider)

$: stack(
  kick,
  melody.orbit(3)
).hpf(hpfSlider)