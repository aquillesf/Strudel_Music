// @title ? @by Aquiles
setcpm(155/4)
samples('https://samples.grbt.com.au/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')
samples('shabda/speech:ba,bi,bo,bu,be,ta,boi')


let baseline = s("worldkit2_bd").pan(0.5)
  .struct("x x x x")
  .gain("<0.3 0.38 0.32>")
  .hpf(40)
  .lpf("<1400 1800 1200>")
  .room(0.9)


let baseline_elec = s("risckit_bd").pan(0.5)
  .struct("x x x x")
  .gain("<0.3 0.38 0.32>")
  .hpf(40)
  .lpf("<1400 1800 1200>")
  .room(0.9)

let hh = s("kdr_hh").struct("[x x x x]*2").gain(0.6)

let base_bongo =  s("congobongo").struct("<[x x x x]!4 [x x x x*2]*2!4 [[x [x - x]] [x x] x x*2]!6  [x [x [x x]]]!4>").gain("<0.35 0.45 0.55 0.4>").room(.8).lpf("<900 1200 1000>").early("<0 0.01>").lpd(0.08).lps(2).lpenv(3).lpf(1200).pan(0.4)

let base_bongo_elec =  s("sh5shortdetuneddirt").struct("<[x x x x]!4 [x x x x*2]*2!4 [[x [x - x]] [x x] x x*2]!6  [x [x [x x]]]!4>").gain("<0.3 0.33 0.35 0.3>").room(.8).lpf("<900 1200 1000>").early("<0 0.01>").lpd(0.08).lps(2).lpenv(3).lpf(1200).pan(0.4)

let bumba = s("braziliankit_perc").struct("<[x x x x] *2 !4 [x x x x]*3 !2 [x - [x x]] !4>").bpq("<0 2 5>").room(.9) .gain("<0.06 0.05 0.04 0.04>").bpq("<0 2 4 1>").early("<0 0.01>").delay("0.3").pan(0.6)

let bumba_elec = s("ww").struct("<[x x x x] *2 !4 [x x x x]*3 !2 [x - [x x]] !4>").bpq("<0 2 5>").room(.9) .gain("<0.06 0.05 0.04 0.04>").bpq("<0 2 4 1>").early("<0 0.01>").delay("0.3").pan(0.6)

let chocalho = s("marsprivate_tb").struct("<[x x x x*2] !8 [x [x [x x]]] !8 >").room(.9).gain("[0.02 0.03 0.03]")

let chocalho2 = s("rolandmc303_sh").struct("<[x x x x*2] !8 [x - x x*2] !8 >").room(.9).gain("[0.01 0.02 0.021]").early("<0 0.01>").delay("0.3")

let colher_feijão = s("bossdr550_cb ").struct("x - - x").room(.9).gain("0.07").delay("0.3")

let lata = s("bossdr550_cb").struct("x x*4 x -").gain("<0.03 0.025>").room(.4)

let lata_elec = s("risckit_cb").struct("x x*4 x -").gain("<0.1>").room(.4)

let barulho_massa = s("balafon_hard").struct("[x [x x]] [x x]").gain("<0.042 0.036>").room(.5)

let sina = s("alessir_16").struct("<[ - x x x] *2 !4 [- x x x]!4>").room(.3).hpf(1000)
.gain("0.03 0.04 0.05 0.07").pcurve("0 1")

let sina_elec = s("sh5exactpulse").struct("<[ - x x x] *2 !4 [- x x x]!4>").room(.3).hpf(1000)
.gain("0.02 0.03 0.02 0.04").pcurve("0 1")

let texture = s("gen2drone").gain("0.5")
  .lpf(sine.range(400, 1400))
  .slow("<8 6 12>")
  .room(0.9)

let jungle_bass = s("dbass")
  .struct("<x x x x>")
  .gain(0.18)
  .lpf(120)
  .room(0.9)

let extra = s("extra").struct("<[x x x x]*4>")
  .gain(0.11)
  .room(0.9)

//korgt3_perc
//tr909_rim
//mridangam_nam
//tiktakdrum
//mridangam_dhum

let flexaton = s("flexatone").room(0.7).gain(0.1)

let song = arrange(  
    [12, stack(flexaton, texture)],
    [40, stack(flexaton, baseline, base_bongo, bumba, chocalho, chocalho2, colher_feijão, lata, barulho_massa, sina)],
    [1, stack(s("sh5pinknoisemult3").delay("0.8").gain(0.7))],
    [12, stack(baseline_elec, base_bongo_elec, bumba_elec, chocalho, colher_feijão, lata_elec, barulho_massa, hh, sina_elec, jungle_bass)],
    [10, stack(baseline_elec, base_bongo_elec, bumba_elec, chocalho, colher_feijão, lata_elec, barulho_massa, hh, sina_elec, jungle_bass, bumba, lata)],
    [10, stack(baseline_elec, base_bongo_elec, bumba_elec, chocalho, colher_feijão, lata_elec, barulho_massa, hh, sina_elec, jungle_bass, bumba, lata, baseline, base_bongo, flexaton, sina, chocalho2, colher_feijão)],
    [12, stack(baseline_elec, base_bongo_elec, bumba_elec, chocalho, colher_feijão, lata_elec, barulho_massa, hh, sina_elec, jungle_bass, bumba, lata, baseline, base_bongo, flexaton, sina, chocalho2, extra, colher_feijão)],
)
song
