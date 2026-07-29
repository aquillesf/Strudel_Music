setcpm(90/4)
samples('https://samples.grbt.com.au/strudel.json')

let mel1 = note("e3 d3 g3 b2 _ _ _ ").s("sin").room(.9).legato(1).slow(2).delay(.35).gain(0.3)

let mel2 = note("<[[b5 b5] [b5*8 [b6 b5 _ ]] ~ ~]!12 [e5 e5*8 [e5 [g2 e5 _ ]] ~ ~]!12>").s("zzfx").room(.9).gain(0.009).legato(1)

let mel3 = note("[b5 e5 e6]*8").s("gm_synth_choir").room(.9).gain(0.01).room(1).delay(.2).delaytime(.125).gain("0.009 0.008 0.007 0.006 0.005 0.004 0.0045 0.003 0.001").delay(.7).delaytime(.5)

let drum = s("one").struct("~ x x*2 ~").gain(0.4).room(.9)

let hh = s("compurhythm8000_ht").struct("x x x x").gain(0.03)

let bass = note("A2 E1 ~ ~").s("piano").legato(4).gain(0.1).delay(.2).delaytime(.125).slow(4)

let song = arrange(
  [4, stack(mel1)],
  [8, stack(mel1, drum, hh)],
  [4, stack(mel1, drum, bass, hh)],
  [4, stack(mel1, drum, mel3, hh)],
  [16, stack(mel1, drum, mel2, hh, bass)],
)

stack(song)
