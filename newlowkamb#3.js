setcpm(165/4)
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

let soundintro = s("r88_bd").struct("~ ~ [x x] ~ ~").gain(0.01).room(.3).pan(0.7)

let cbintro = s("spacedrum_cb").struct("~ ~ x ~").gain(0.02).room(.3).lpf(1300).pan(0.3)

let introsine = s("waspinsectbling").note("<F2>").gain(0.02).room(.3).lpf(1300).pan(0.5).delay("0.6")

let isqintro = s("rolandtr626_sh").struct("~ ~ ~ x").gain(0.008).room(0.7).pan(1.3).delay("0.1")

let melodia = intro

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
  [15, stack(perc, intro)],
)

song
