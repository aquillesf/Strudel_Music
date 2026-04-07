setcpm(130/4)

samples('https://samples.grbt.com.au/strudel.json')

let intro =  s("sh5slowriseres").seg(1).dec(.8).lpf(sine.range(100, 1000).slow(4)).lpa(slider(2.115,0,5)).lpe(slider(3.84,0,10)).lpq(slider(15,0,15)) 

let signal = s("avhi").seg(16).dec(.9).lpf(sine.range(1000, 3000).slow(8)).lpa(slider(2.76,0,5)).lpe(slider(6.02,0,10)).lpq(slider(12.855,0,15)) 

let bum =  s("house").struct("<[x x x x*2]*2!8 [x x*2 x x]*2!8>").lpf(sine.range(600, 3000).slow(8)).room(.2)

let drums = stack(
  s("bd:1").beat("0,7?,10",16).duck("3:4:5"),
  s("s950_sd:2").beat("4,12",16),
  s("s950_hh!8").gain(0.4)
).gain(0.5)

let bum2 = s("risckit").room(.4)

let tic = s("s950_cl").struct("<[x x x x]*2!8 [x x x x]*4 !8>").lpf(sine.range(1300, 2000).slow(8)).gain(0.4)

let ss = s("saw").gain(1.8).note("<27 30 32 34 32 30 29 27>").lpf(400).fast(16).lpa(slider(1.055,0,5)).lpe(slider(3.3,0,10)).lpq(slider(5.7,0,15)) 

let vinyl = s("crackle*32").gain(slider(1, 0, 1, 0.02)).pan(sine.range(-0.5,0.5)).room(slider(1, 0, 1, 0.05)).size(slider(2, 0.1, 2, 0.1))

let song = arrange(
    [4, stack(intro, vinyl)],
    [4, stack(intro, vinyl, bum2)],
    [16, stack(intro, vinyl, bum2, drums)],
    [16, stack(intro, vinyl, bum2, drums, ss)],
    [16, stack(intro, vinyl, bum2, drums, ss, tic)],
    [4, stack(intro, vinyl, bum2, ss, tic, signal)],
    [16, stack(intro, vinyl, bum2, drums, ss, tic, signal)],
    [16, stack(intro, bum2, drums, ss, tic, signal)],
    [16, stack(intro, drums, ss, tic, signal)],
    [4, stack(intro, ss, tic, signal)],
    [8, stack(intro, tic, signal)],
    [16, stack(intro, drums, tic, signal)],
    [16, stack(intro, drums, tic, ss, signal)],
    [16, stack(intro, drums, signal)],
    [4, stack(intro, signal)],
    [4, stack(intro)]
)

song
