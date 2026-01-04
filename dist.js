setcpm(140/4)
const Roland =  "tr909"

$pulse: s("sbd!4").gain("<0.8> <1.6> <1.6> <2.4>")

pulse: s("pulse").orbit(4).seg(16).dec(.1).gain(8.0)

$hihat: s("hh*8").gain("0.5")

$clap: s("cp*1").gain("0.6")

$bass: note("<[cb5 cb4]*16 [bb3 bb2]*16 [fb1 fb2]*16 [gb2 gb3]*16>/2, - - - - <[cb6 cb5]*10 [bb4 bb3]*10 [fb3 fb4]*10 [gb4 gb5]*10>/2")
  .sound("gm_synth_bass_1").scale("c:minor").lpf(800).gain("<1.0> <1.0> <7.8>")

$glitch: note("<[[g3*8] a3*8] [[f2*8]g2*4] [e3*4] [[d2*8] d3*8]>").sound("gm_tinkle_bell").scale("c:minor").distort(3.0)