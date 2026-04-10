setcpm(115/4)
samples('https://samples.grbt.com.au/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')
samples('https://samiiautumn.github.io/samples/strudel.json')

$sino: s("tubularbells").room(.3).gain(0.5).lpf(300)

//$triangle: note("Bb3 [A3 G3] Eb3 D3").sound("sine").slow(2).delay(0.3).delayfeedback("<0.6!8 0.8!16>").delaytime("<0.6!8 0.4!16>").hpf("<900 1000>").lpf(800).room(.9).gain(6).crush(6)

$vinyl: s("crackle*32").gain(slider(0.72, 0, 1, 0.02)).pan(sine.range(-0.5,0.5)).room(slider(1, 0, 1, 0.05)).size(slider(2, 0.1, 2, 0.1))

$drum: chop(16, s("drum")).delay(0.125).delayfeedback(0.3).gain(0.9).loopAt(8).fit().scrub("<2 3 4 3 3 3 2 3 4 1>".div(8)).coarse(9).room(.4).lpf(sine.range(1200, 2000).slow(4)).cut(1).almostNever(ply(" 2 | 4 "))

$hh: s("tapedk_hh").struct("[x x x x]").fast(2).sometimesBy(slider(0.395, 0, 1) , x=>x.fast(2)).n(rand.range(0, 5)).o(2).att(slider(0.0759,0, 0.1)).gain(slider(1,0,1)).lpf(1800)




//$drums:
//stack(
 // s(""),
 // s(""),
 // s("")
  //)
