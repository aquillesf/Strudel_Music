setcpm(100/4)
samples('https://samples.grbt.com.au/strudel.json')
  
let bum = note("c2(4, 16)").s("kdr_bd:4")
  
let snare = note("35(8,16,4)").s("<bbox_hh s950_oh:2>*8").cut(1).gain(0.19)
  
let tambourine = s("tambourine2").room(.9).struct("x").degradeBy(0.3)
  
let casio = s("casio").struct("[x - x*4 x]").degradeBy(0.4).sometimesBy(0.3, x=>x.fast(4)).att(slider(0,0, 0.1)).gain(slider(0,0,1))
  
let radio = s("sh5lostradiofx").gain(0.2)
  
let hihat = s("hh hh hh hh").fast(2).sometimesBy(slider(1, 0, 1) , x=>x.fast(2)).n(rand.range(0, 5)).o(2).att(slider(0,0, 0.1)).gain(slider(0,0,1))
  
let chords = note("[A2,C3,E3,G3] [G2,B2,D3,F3] [F2,A2,C3,E3] [E2,G#2,B2,D3]").s("supersaw").slow(4).gain(0.12).att(slider(0,0,0.1)).lpf(slider(500, 500, 4000)).room(1).dfb(slider(0,0,1))

let random_n = chooseCycles("A2","B2","C3","D3","E3","F3","~","~","~").note().s("xylophone_soft_pp").velocity(0.6).gain(3.5).room(.6).fast(8).degradeBy(0.3)

let continuo = ("A1").s("supersaw").gain(1).lpf(300).room(1).dfb(1).slow(4)
  
let bass = note("A1 ~ A1 ~ D2 ~ E2 ~ A1 ~ [A1 E1] ~ A1 ~ A1 ~").s("gm_acoustic_bass").gain(0.6).slow(4)

let song = arrange(
    [4, stack(radio)],
    [8, stack(radio, continuo)],
    [4, stack(radio, continuo, bum)],
    [4, stack(radio, continuo, bum, hihat)],
    [8, stack(radio, continuo, bum, hihat, tambourine)],
    [8, stack(radio, continuo, bum, hihat, tambourine, snare)],
    [8, stack(radio, continuo, bum, hihat, tambourine, snare, chords)],
    [8, stack(radio, continuo, bum, hihat, tambourine, snare, chords, random_n)],
    [4, stack(radio, bum, casio, chords, random_n, bass)],
    [24, stack(radio, continuo, bum, hihat, tambourine, snare, casio, chords, bass, random_n)],
    [2, stack(radio, casio, chords, bass)],
    [16, stack(radio, continuo, bum, hihat, tambourine, snare, casio, chords, bass, random_n)],
    [4, stack(bum, tambourine)],
    [8, stack(radio, bum, chords, bass, hihat, random_n)],
    [4, stack(radio, continuo, bass)],
    [4, stack(radio, bass)],
    [16, stack()],
  
  
)

song
