
setcpm(119/4)
samples('https://glfmn.io/samples/pulsar23.json');

$wave:
  s("supersaw")
    .dur(3)
    .legato(1)
    .gain(slider( 0, 0, 8))
    .hpf(slider( 0, 0, 8000))
    .lpf(slider( 0, 0, 8000))



$base: s("mc202_bd!4").gain(0.6)

$piano: note("<[d6 a5 bb5 g5]*2!3 [g5 a5 bb5 d6]*2!3>/1").sound("fmpiano").legato(1.7).room(.9).gain(slider(0.538))

$piano2: note("[a3 bb3]!2 [d3 g3]!2 [d3*2? g3*2?]!2?").sound("gm_lead_1_square").room(.7).gain(slider(0.486)).lpf(slider( 4335.05, 50, 8000))

$flauta_nota: note("d5").s("gm_pan_flute").room(.4).gain(0.5)

$grave: note("<[g1]!4 [bb1]!4>").dur(1).sound("gm_synth_bass_1").orbit(8).seg(50).dec(.1).gain("<[0.3 0.4 0.5]>")

$base_bongo: s("bongo").struct("<[- x x x]*3!4  [x - x [x - x]] *2 !4>").gain("11.5 12.5 13.5 14.5").room(.5).bpq("<0 1 2 3>").pcurve("0 1").lpd(0.08).lps(2).lpenv(3)._pianoroll()

$bum: s("alesishr16_ht").struct("x").room(.5).gain("0.1")

$hihat: "<[hh hh hh hh]*2 !4 [hh hh hh hh*6]*2 !4>".s().bank("pulsar").gain("<0.3 0.46 0.3>")

$beep: s("compurhythm78_perc").struct("<[x*18 [x [x x]x]] !2 [x*2 [x [x x]x]] !2>").room(.5).gain("0.4")

$grave_perc: s("compurhythm8000_lt").struct("<[x x [x x] x*2]*2!4 [x [x [x x]] x x]*2!4>").room(.5).gain("0.4 0.5")

$laser: s("rx5_fx").struct("[- x - x]").gain(slider(0.411)).lps(2).lpenv(3)

$colher_feijão: s("bossdr550_cb ").struct("<[x - x -] !4 [x x*2 x*3 x*2]!4 [x*2 - x x] !4>").room(.5).gain("0.5") 
