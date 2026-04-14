setcpm(150/4)
samples('https://samples.grbt.com.au/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')
samples('github:tidalcycles/dirt-samples')
samples('github:k09/samples')

let intro =
  note("<[G3 Bb3 D4 F4] [A3 C4 E4 G4] [F3 A3 C4 E4] [D3 F#3 A3 C4]>")
  .sound("newnotes")
  .legato(1.2)
  .slow(3)
  .struct("x [x x] x x*2")
  .room(0.9).size(0.1)
  .delay("0.3").delayfeedback(0.85)
  .gain(0.28)
  .lpf(perlin.range(300, 4000))
  .hpf(sine.range(0, 800))

let soundintro = s("r88_bd").struct("~ ~ [x x] ~ ~").gain(0.3).room(.3).pan(0.7)

let cbintro = s("spacedrum_cb").struct("~ ~ x ~").gain(0.05).room(.3).lpf(1300).pan(0.3)

let introsine = s("waspinsectbling").note("<F2>").gain(0.04).room(.3).lpf(1300).pan(0.5).delay("0.6")

let isqintro = s("rolandtr626_sh").struct("~ ~ ~ x").gain(0.1).room(0.7).pan(1.3).delay("0.1")

let melodia = intro

let oi = sound("oi")
  .struct("[x x x x]")
  .gain("<0.4 0.3 0.2 0.3>").room(0.35)

let base_funk1 = sound("<[[sergemodular_bd - - mpc1000_perc] [- -  mpc1000_perc -] [- - - -] [mpc1000_perc - - -]]!8 [[sergemodular_bd - -  mpc1000_perc] [- -  mpc1000_perc -] [- - sergemodular_bd -] [- tr505_perc - -]]!8>").gain(0.9)

let funk_variação = sound("<[[sergemodular_bd - - -] [sergemodular_bd - mpc1000_perc -] [- - - mpc1000_perc] [- - - tr505_perc]]!8    [[- - mpc1000_perc -] [- sergemodular_bd - -] [sergemodular_bd - - mpc1000_perc] [- tr505_perc sergemodular_bd tr505_perc]]!8>").gain(1.0)

let base_funk2 = sound("<[[mc202_bd - - mc202_bd] [- -  mc202_bd -] [- - mc202_bd -] [- - - -]]!8 [[- - - mc202_bd] [- -  mc202_bd -] [- - - -] [- - - mc202_bd*2]]!8>").gain(0.9)

let hh = s("<[[hh27 hh27 hh27 hh27]]!8*2 [[hh27*2 - hh27 -]]!8*2>").gain(0.9)

let chocalho = s("rolandmt32_tb").struct("<[x x x x*2] !8 [x [x [x x]]] !8 >").room(.9).gain("0.3")

let snare_main = s("sp12_sd:3").struct("~ x ~ x").gain(0.2).room(0.25)

let ghost = s("jd990_sd:2").struct("~ ~ [~ x] ~ ~ x ~ [~ ~] ~ ~ x ~ ~ [x ~] ~").gain(perlin.range(0.08, 0.22)).pan(perlin.range(0.35, 0.65)).speed(perlin.range(0.9, 1.1))

let fx_metal = s("tg33_misc:<0 3 7>").struct("~ ~ ~ ~ ~ ~ ~ x").gain(0.12).room(1).speed(perlin.range(0.5, 2)).delay("0.8").delayfeedback(0.7).pan(rand.range(0, 1))

let sub_kick = s("rm50_bd:<0 3 7 14 22>").struct("x ~ ~ ~ x ~ x ~").gain(0.65).lpf(120).room(0.1).sometimesBy(0.2, x => x.gain(0))

let sh09_layer = s("sh09_bd:<0 5 12 30>").struct("x ~ ~ ~ ~ ~ x ~").gain(0.45).lpf(200).speed(perlin.range(0.85, 1.0))


let hh_poli = stack(
  s("hh27").struct("x*8").gain(0.5).pan(0.4),
  s("hh27").struct("x*12").gain(0.25).pan(0.6)
    .speed(perlin.range(0.85, 1.15)),
  s("hh27").struct("[~ x]*3").gain(0.35).pan(0.5)
    .sometimesBy(0.4, x => x.speed(2))
).lpf(8000)

let tabla_layer = stack(
  s("mridangam_dhi:<0 3 5>").struct("x ~ x ~ ~ x ~ x").gain(0.48).room(0.7).pan(0.4),
  s("mridangam_ka:<0 2 7>").struct("~ x ~ ~ x ~ x ~").gain(0.42).room(0.7).pan(0.6),
  s("mridangam_thom:<0 3>").struct("~ ~ ~ x ~ ~ x ~").gain(0.45).room(0.8).pan(0.5)
).lpf(2500).sometimes(x => x.speed(0.85))


let perc = arrange(
  [1, stack(soundintro)],
  [3, silence],
  [1, stack(isqintro)],
  [2, silence],
  [1, stack(cbintro, soundintro)],
  [2, silence],
  [1, stack(introsine, isqintro)],
  [4, silence],
  [1, stack(soundintro, cbintro, introsine, isqintro)],
)

let song = arrange(
  [85, stack(perc, intro, chocalho, base_funk1, base_funk2, hh, oi, soundintro, tabla_layer, snare_main, sub_kick, isqintro, fx_metal)],
  [15, stack(perc)],
)

song
