setcpm(130/4)

samples('https://samples.grbt.com.au/strudel.json')

//$intro: s("sh5slowriseres").seg(2).dec(.6).lpf(sine.range(100, 1000).slow(4)).lpa(slider(1.16,0,5)).lpe(slider(6.66,0,10)).lpq(slider(4.665,0,15)) 

//$signal: s("avhi").seg(16).dec(.9).lpf(sine.range(1000, 3000).slow(8)).lpa(slider(1.445,0,5)).lpe(slider(6.52,0,10)).lpq(slider(6.705,0,15)) 

//$bum: s("risc454k").struct("<[x x x x*2]*2!8 [x x*2 x x]*2!8>").lpf(sine.range(600, 3000).slow(8)).room(.2)

//$bum2: s("risckit").room(.4)

//$tic: s("s950_cl").struct("<[x x*2 - x]*4!8 [x x*2 x x]*4 !8>").lpf(sine.range(1300, 2000).slow(8)).gain(0.2)

//$s:s("saw").gain(2).note("<27 30 32 34 32 30 29 27>").lpf(400).fast(2).lpa(slider(0.12,0,5)).lpe(slider(0.82,0,10)).lpq(slider(4.395,0,15)) 

//$vinyl: s("crackle*32").gain(slider(1, 0, 1, 0.02)).pan(sine.range(-0.5,0.5)).room(slider(1, 0, 1, 0.05)).size(slider(2, 0.1, 2, 0.1))
