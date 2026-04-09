setcpm(30/4)
samples('https://samples.grbt.com.au/strudel.json')

let wind = s("wind").n("<A1>").speed(0.28).room(.9).gain(2.85)

let piano =  chord("<[C2,Eb2,G3]@1 [F#2,A1,C#2]@1 [C2,Eb3,G1]@1 [F#1,A2,C#3]@1>").sound("hbtpiano").room(0.98).legato(2).gain(0.06).att(slider(0.0511,0,0.1)).lpf(slider(500, 500, 4000)).room(1).dfb(slider(0.345,0,1))

let radio = n("<3 -2, 0 -6, -2 -1, 4 2>, [2 4 8 2]/3 <[2,0,-2]/2.5 [5,7 -4]>")
.scale("<C:minor F#:minor>/2")
.sound("sh5lostradiofx:2")
.speed("-2 -1@2 1!8")
.delay(0.2)
.fm(1)
.gain(0.05)
.room(.9)
.fmh(1)
.attack("0.1 0.4? 0.6 0.8?")
.postgain(2.5)
.distort(slider(0.757,0,1))
._scope()

let bass = n("<A1 F#1>").s("z_sine").loop(1).speed(0.1).room(.9).gain(1.4).distort(slider(0.586,0,1))

let drone =  n("<F#1 C1>").s("liddrone").gain(0.11).lpf(slider(4000, 500, 4000)).room(.9)

let sino = s("tubularbells").room(.9).gain("<2.0 3.0>").lpf(300)

let song = arrange(
    [1, stack(sino, wind)],
    [4, stack(sino, wind, drone, piano)],
    [4, stack(sino, radio, wind, drone, piano)],
    [4, stack(sino, radio, bass, wind, drone, piano)],
    [4, stack(sino, radio, wind, drone, piano)],
    [2, stack(sino, radio, wind, piano)],
    [4, stack(sino, wind, piano)],
    [5, stack(sino)],
    [4, stack()],
    
)

song
