setcpm(100/4)
samples('https://samples.grbt.com.au/strudel.json')
  
let bum = note("c2(4, 16)").s("kdr_bd:4")
  
let snare = note("35(8,16,4)").s("<bbox_hh s950_oh:2>*8").cut(1).gain(0.19)
  
let tambourine = s("tambourine2").room(.9).struct("x").degradeBy(0.3)
  
let casio = s("casio").struct("[x x x x]").degradeBy(0.4).sometimesBy(0.2, x=>x.fast(4)).att(slider(0.1,0, 0.1)).gain(slider(0.186,0,1)).room(.6)
  
let radio = s("sh5lostradiofx").gain(0.18)

let zim = s("spacedrum_oh").struct("[x x x x]").gain(0.8).fast(2).sometimesBy(slider(0.266, 0, 1) , x=>x.fast(2)).n(rand.range(0, 5)).o(2).att(slider(0.0561,0, 0.1)).gain(slider(0.83,0,1)).lpf(2500)

let hihat = s("hh hh hh hh").fast(2).sometimesBy(slider(0.518, 0, 1) , x=>x.fast(2)).n(rand.range(0, 5)).o(2).att(slider(0.0848,0, 0.1)).gain(slider(1,0,1))
  
let chords = note("[A2,C3,E3,G3] [G2,B2,D3,F3] [F2,A2,C3,E3] [E2,G#2,B2,D3]").s("supersaw").slow(4).gain(0.12).att(slider(0.043,0,0.1)).lpf(slider(769.5, 500, 4000)).room(1).dfb(slider(0.857,0,1))

let random_n = chooseCycles("A2","B2","C3","D3","E3","F3","~","~","~").note().s("xylophone_soft_pp").velocity(0.6).gain(4.9).room(.6).fast(8).degradeBy(0.3)

let continuo = ("A1").s("supersaw").gain(1).lpf(300).room(1).dfb(1).slow(4)
  
let bass = note("A1 ~ A1 ~ D2 ~ E2 ~ A1 ~ [A1 E1] ~ A1 ~ A1 ~").s("gm_acoustic_bass").gain(0.6).slow(4).lpf(147)

let voice = note("<A1>").s("voicing").gain(0.45).room(.8)

let misc = s("yamaharm50_misc").gain(0.27).room(.9)

let song = arrange(
    [8, stack(radio)],
    [4, stack(radio, tambourine, bum, hihat)],
    [4, stack(radio, continuo, bum, hihat, tambourine, bass)],
    [8, stack(radio, continuo, bum, hihat, tambourine, snare, bass)],
    [8, stack(radio, continuo, bum, hihat, tambourine, snare, chords, bass)],
    [8, stack(radio, continuo, bum, hihat, tambourine, snare, chords, random_n, bass)],
    [4, stack(radio, bum, casio, chords, random_n, bass)],
    [8, stack(radio, continuo, bum, hihat, tambourine, snare, casio, chords, bass, random_n)],
    [4, stack(radio, continuo, bum, hihat, tambourine, snare, zim, casio, chords, bass, random_n)],
    [1, stack(radio, continuo, bum, hihat, tambourine, snare, zim, casio, chords, bass, random_n, misc)],
    [12, stack(radio, continuo, bum, hihat, tambourine, snare, casio, chords, bass, random_n)],
    [1, stack(radio, voice, continuo, bum, hihat, tambourine, snare, casio, chords, bass, random_n)],
    [15, stack(radio, continuo, bum, hihat, tambourine, snare, casio, chords, bass, random_n)],
    [1, stack(radio, continuo, bum, hihat, tambourine, snare, casio, chords, bass, random_n, misc)],
    [2, stack(radio, bum, tambourine)],
    [8, stack(radio, bum, chords, random_n)],
    [2, stack(radio, continuo, random_n)],
    [2, stack(radio, random_n)],
    [16, stack()],
  
  
)

song
