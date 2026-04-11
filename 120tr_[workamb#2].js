setcpm(140/4)
samples('https://samples.grbt.com.au/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')

let sino = s("tubularbells").room(.3).gain(0.5).lpf(300)

let bum = s("risckit_bd").struct("<[x x x x]!4  [x x x x*2]!4>").room(.9).gain(0.3).lpf(300)

let bass = note("<Bb2 [C3 F2]>").sound("sine").slow(2).delaytime("<0.6!8>").room(.3).gain(0.4)

let vinyl = s("crackle*32").gain(slider(0.14, 0, 1, 0.02)).pan(sine.range(-0.5,0.5)).room(slider(0.6, 0, 1, 0.05)).size(slider(2, 0.1, 2, 0.1))

let drums = chop(16, s("drum")).delay(0.125).delayfeedback(0.3).gain(0.5).loopAt(8).fit().scrub("<2 3 4 3 3 3 2 3 4 1>".div(8)).coarse(9).room(.8).lpf(sine.range(1200, 2000))

let n_chords = note("<Bb2*4 Db3*8 F3*4 ~ Gb2*4  Bb2*4  Db3*8 ~ F2 Db3*4  A2*4 ~ F2  A2  C3*4 ~>").sound("sh5toastedtriangle").legato(1.7).lpf(perlin.range(1200, 1800)).room(.5).gain(0.4).fast(8)

let bell = s("jinglebells").note("Bb2 G2 Eb3 Gb3 D3").legato("<0.9 1.0>").struct("<x [x x] x x*2 x>!4").delay(0.25).delayfeedback(0.7).delaytime("<0.25 0.5 0.75>").gain(slider(0.3, 0, 1, 0.05)).pan(sine.range(-1, 1).slow(8))

let wasp2 =  s("becklotsamodulationspringreverbunderwaterbubblestalking").note("Bb2 D4").legato("<0.9 1.0>").struct("<x*2 [x x] x x*2 x>!8").delay(0.25).delayfeedback(0.7).delaytime("<0.25 0.5 0.75>").lpf(perlin.range(1000, 2000)).gain(slider(0.25, 0, 1, 0.05))

let triangle = ("shakertriangle").struct("<[x ~ x x] [x x ~ x]>") .fast(2).gain(0.13).lpf(1600).delay(0.125)

let som = s("mm14").gain(0.6)

let tsan = s("vinyl_wb").gain(0.4).lpf(500).room(.9)

let lead =  s("sine").note("<F4 Eb4 Db4 Bb3>").struct("x x x x").legato(0.6).delay(0.3).delayfeedback(0.4).room(0.6).lpf(2000).gain(0.2)

let song = arrange(
    [5, stack(sino)],
    [8, stack(vinyl, sino, bass)],
    [4, stack(vinyl, sino, bass, lead)],
    [4, stack(vinyl, sino, lead, tsan, bass)],
    [4, stack(vinyl, lead, tsan, bass, triangle)],
    [8, stack(vinyl, lead, tsan, bass, triangle, bum)],
    [12, stack(vinyl, lead, n_chords, tsan, bass, bell, triangle, bum)],
    [2, stack(vinyl, bass, bell)],
    [8, stack(vinyl, lead, n_chords, tsan, bass, bell, triangle, bum, drums)],
    [9, stack(vinyl, lead, n_chords, tsan, wasp2, bell, triangle, bum, drums, triangle)],
    [8, stack(vinyl, lead, n_chords, wasp2, bell, bass, bum, drums, triangle)],
    [1, stack(vinyl, bell, som)],
    [8, stack(vinyl, sino, som, tsan, bell, wasp2, drums, lead, triangle)],
    [8, stack(vinyl, sino, tsan, bell, n_chords, drums)],
    [4, stack(vinyl, sino, tsan, bell, n_chords, drums, lead)],
    [8, stack(vinyl, sino, bell, lead, drums)],
    [8, stack(vinyl, sino, lead, bell, drums)],
    [2, stack(vinyl, sino, bell, drums)],
    [4, stack(bell)],
    [4, stack()],
)

song


//$drums:
//stack(
 // s(""),
 // s(""),
 // s("")
  //)
