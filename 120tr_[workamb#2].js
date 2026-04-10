setcpm(115/4)
samples('https://samples.grbt.com.au/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')

$sino: s("tubularbells").room(.3).gain(0.5).lpf(300)

$bd: s("s950_bd").struct("<[x x x x]!4 [x x x x*2]!4>").room(.9).gain(0.6).lpf(320)

$triangle: note("<Bb2 [C2 G2]>").sound("sine").slow(2).delaytime("<0.6!8 0.4!16>").room(.3).gain(0.6)

$vinyl: s("crackle*32").gain(slider(0.28, 0, 1, 0.02)).pan(sine.range(-0.5,0.5)).room(slider(1, 0, 1, 0.05)).size(slider(2, 0.1, 2, 0.1))

$drum: chop(16, s("drum")).delay(0.125).delayfeedback(0.3).gain(0.7).loopAt(8).fit().scrub("<2 3 4 3 3 3 2 3 4 1>".div(8)).coarse(9).room(.4).lpf(sine.range(1200, 2000).slow(4))

$hh: s("tapedk_hh").struct("[x x x x]").fast(2).sometimesBy(slider(0.736, 0, 1) , x=>x.fast(2)).n(rand.range(0, 5)).o(2).att(slider(0.0452,0, 0.1)).gain(slider(0.857,0,1)).lpf(1900)

$wasp1: s("waspbrokensystem").note("Bb2 G2 Eb3 Gb3 D3").legato("<0.9 1.0>").gain(0.25).struct("x x x x x").lpf(perlin.range(2000, 3000)).gain(slider(0.95, 0, 1, 0.05))
//.pan(sine.range(-1, 1).slow(8))

$wasp2: s("waspbrokensystem").note("Bb2 G2 Eb3 Gb3 D3").legato("<0.9 1.0>").struct("<x [x x] x x*2 x>!8").delay(0.25).delayfeedback(0.7).delaytime("<0.25 0.5 0.75>").gain(slider(0.15, 0, 1, 0.05))//.pan(sine.range(-1, 1).slow(8))

$wasp3: s("waspbrokensystem").note("Bb2 G2 Eb3 Gb3 D3").legato("<0.9 1.0>").struct("<x [x x] x x*2 x>!8").delay(0.25).delayfeedback(0.7).delaytime("<0.25 0.5 0.75>").lpf(perlin.range(1000, 2000)).gain(slider(0.25, 0, 1, 0.05))
//.pan(sine.range(-1, 1).slow(8))

$tsan: s("vinyl_wb").gain(0.43).lpf(500).room(.9)

$lead: s("sine")
  .note("<F4 Eb4 Db4 Bb3>")
  .struct("x x ~ x")
  .lpf(200)
  .gain(0.29).room(.9)

//$drums:
//stack(
 // s(""),
 // s(""),
 // s("")
  //)
