setcpm(130/4)

samples('https://samples.grbt.com.au/strudel.json')

$intro: s("sh5slowriseres").seg(16).dec(.3).lpf(sine.range(100, 1000).slow(4))

$signal: s("avhi").seg(8).dec(.9).lpf(sine.range(1000, 3000).slow(8))

$bum: s("risc454k").struct("<[x x*2 x x*2]!8 [x - - x]!8>").lpf(sine.range(600, 3000).slow(8)).room(.2)

$bum2: s("risckit").room(.4)

$tic: s("s950_cl").struct("<[x x x x*2]*2!8 [x x x x]*2 !8>").lpf(sine.range(1300, 2000).slow(8)).gain(0.2)

$s:s("saw").gain(2).note("<27 30 32 34 32 30 29 27>").lpf(400).fast(2).lpa(slider(3.15,0,5)).lpe(slider(4.23,0,10)).lpq(slider(3.255,0,15)) 
