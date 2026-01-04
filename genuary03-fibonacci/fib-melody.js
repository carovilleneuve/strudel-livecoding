//////////////////////////////////////////////////////////////
//  Created by Caro (@carovilleneuve)
//  Made for Genuary 2026 - Day 3: Fibonacci Forever
//
//  https://www.patreon.com/carovilleneuve
//
//////////////////////////////////////////////////////////////

setcpm(120/4)

const fib = "<0 1 1 2 3 5 8 13 21 34 55>"


$:
  n(fib)
  .scale("c:minor")
  .s("piano")
  .lpf(600)
  .struct("x ~ x ~ ~ x ~ ~ ~ x ~ ~ ~ ~ x")
  .delay(0.3)
  .room(0.7)
  .postgain(0.35)


$:
  n(fib)
  .scale("c:minor")
  .s("woodblock")
  .struct("x ~ x ~ ~ x ~ ~ ~ x ~ ~ ~ ~ x")
  .sometimes(x => x.rev())
  .hpf(900)
  .delay(0.15)
  .room(0.6)
  .postgain(0.15)


$:
  n("0")
  .scale("c:minor")
  .s("triangle")
  .struct("[x ~ ~ ~ x ~ ~ ~ x ~ ~ ~ x ~ ~ ~]")
  .adsr(0.2, 1.5, 0.3, 3.5)
  .octave(-1)
  .lpf(120)
  .release(0.25)
  .delay(0.05)
  .postgain(0.35)

// OSC PART
$:
  n(fib)
  .scale("c:minor")
  .s("piano")
  .lpf(600)
  .struct("x ~ x ~ ~ x ~ ~ ~ x ~ ~ ~ ~ x")
  .delay(0.3)
  .room(0.7)
  .postgain(0.35).osc()
