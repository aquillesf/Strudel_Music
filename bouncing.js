setcpm(130/4)

samples('https://samples.grbt.com.au/strudel.json')

let intro =  s("sh5lostradiofx").seg(4).dec(.4).lpf(sine.range(100, 1000).slow(4)).lpa(slider(0.07,0,5)).lpe(slider(0,0,10)).lpq(slider(0,0,15)) 

let signal = s("avhi").seg(16).dec(.9).lpf(sine.range(1000, 3000).slow(8)).lpa(slider(4.125,0,5)).lpe(slider(6.02,0,10)).lpq(slider(12.855,0,15)) 

let bum =  s("genome2_b").struct("<[x x x x*2]*2!8 [x x*2 x x]*2!8>").lpf(sine.range(600, 3000).slow(8)).room(.2)

let drums = stack(
  s("rolandmc202_bd:0.2").beat("0,7?,10",16).duck("3:4:5"),
  s("ajkpercusyn_sd:2").beat("4,12",16),
  s("rolandcompurhythm78_hh!8")
).gain(0.5)

let bum2 = s("risckit").room(.4)

let casio = s("casio").struct("[x*2 x - x*4]").gain(0.4).room(.1)

let tic = s("s950_cl").struct("<[x - - x]*2!8 [x x x x]*4 !8>").lpf(sine.range(1300, 2000).slow(8)).gain(0.34)

let ss = s("saw").gain(1.8).note("<27 30 32 34 32 30 29 27>").lpf(1000).fast(2).lpa(slider(0,0,5)).lpe(slider(2.48,0,10)).lpq(slider(5.175,0,15)) 

let vinyl = s("crackle*32").gain(slider(1, 0, 1, 0.02)).pan(sine.range(-0.5,0.5)).room(slider(1, 0, 1, 0.05)).size(slider(2, 0.1, 2, 0.1))

let song = arrange(
    [4, stack(intro, vinyl)],
    [4, stack(intro, vinyl, bum2)],
    [8, stack(intro, vinyl, bum2, drums)],
    [8, stack(intro, vinyl, bum2, drums, ss)],
    [16, stack(intro, vinyl, bum2, drums, ss, tic)],
    [4, stack(intro, vinyl, bum2, ss, tic, signal)],
    [8, stack(intro, vinyl, bum2, drums, ss, tic, signal)],
    [8, stack(intro, bum2, drums, ss, tic, signal)],
    [16, stack(intro, drums, ss, tic, signal, bum)],
    [4, stack(intro, ss, signal, casio, bum)],
    [4, stack(intro, tic, signal, casio, bum)],
    [16, stack(intro, drums, tic, signal, casio)],
    [16, stack(intro, drums, tic, ss, signal)],
    [16, stack(intro, drums, signal)],
    [4, stack(intro, signal)],
    [4, stack(intro)]
)

song
