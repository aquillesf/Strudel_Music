setcpm(103/2)

samples('https://samples.grbt.com.au/strudel.json')

let percintro = stack(
   s("yamahatg33_bd").struct("<[X - - -] [ - [x x] - x]>").room(.5).gain("<0.3 0.25 0.28 0.3>"),
   s("korgddm110_bd").struct("<[X - - -] [ - [x x] - x]>").room(.9).gain("<0.3 0.25 0.28 0.3>"),
   s("concertmatemg1_bd").struct("<[X - - -] [ - [x x] - x]>").room(.9).gain(0.6)
  ).room(.8).gain("<0.4 0.45 0.4 0.4>")

let percintro2 = stack(
   s("yamahatg33_bd").struct("<[X X X X] [ - - x x]>").room(.5).gain("<0.3 0.25 0.28 0.3>"),
   s("korgddm110_bd").struct("<[X X X X] [ - - x x]>").room(.9).gain("<0.3 0.25 0.28 0.3>"),
   s("concertmatemg1_bd").struct("<[X - X -] [ - - x x]>").room(.9).gain(0.6)
  ).room(.8).gain("<0.4 0.45 0.4 0.4>")

let percintro3 = stack(
   s("yamahatg33_bd").struct("<[X X X X] [ - - [x x]]>").room(.5).gain("<0.3 0.25 0.28 0.3>"),
   s("korgddm110_bd").struct("<[X X X X] [ - - x x]>").room(.9).gain("<0.3 0.25 0.28 0.3>"),
   s("concertmatemg1_bd").struct("<[X - X -] [ - - [x x]]>").room(.9).gain(0.6)
  ).room(.8).gain("<0.4 0.45 0.4 0.4>")

let perc1 = s("yamahatg33_bd").struct("<[X - - -] [ - [x x] - x]>").room(.8).gain("<0.4 0.3 0.4 0.3>")

let perc2 = s("ry30_perc").struct("<[x - x -] [x - x -]>").gain(0.14).room(.6).note("<34>")
let perc3 = s("ry30_perc").struct("<[- x - x] [[- x] [- x] - x]>").gain(0.15).room(.6).note("<36>")

let perc4 = s("xdrumlm8953_sd")
  .struct("<[- x x x] [x x - x] [x - x x] [x - x x]>")
  .gain("0.035")
  .room(0.5)
  .fast(2).note("<[36 36.6 36 36.6]>")

let perc5 = s("xdrumlm8953_sd").struct("<[x - - -] [- - x -] [- x - -] [- x - -]>").gain(0.14).room(.5).fast(2).late(0.014).note("<36 36.8>")

let perc6 = s("yamaharm50_sh").struct("<[x - x -] [x - x -] [x - x -] [x - x -]>").gain(0.25).room(.9).fast(2).late(0.005).note("<[36 36.8]>")

let perc9 = s("rm50_perc").struct("<<[x - - x] [x - - x] [x - - x]>!4 <[x x x x]>>").gain(0.25).room(.9).note("<[32 32.5]>").fast(2)

let perc7 = s("lm2_hh").struct("[x x x x]").gain(0.2).room(.5).note("<[36 37]>")

let perc10 = s("dr220_perc").struct("<[x - [x x]] [x - [x x]] [x x x x] [x x x x]>").gain(0.07).room(.8).fast(2).late(0.014).note("<[[[36 38]]]>")

let song = arrange(  
    [4, stack(perc2)],
    [4, stack(perc2, perc3)],
    [8, stack(perc2, perc3, perc4, perc5)],
    [16, stack(perc2, perc3, perc4, perc5, perc6, perc7)],
    [16, stack(percintro, perc2, perc3, perc4, perc5, perc6, perc7, perc9)],
    [2, stack(perc4, perc5, perc6, perc7, perc9)],
    [8, stack(percintro2, perc2, perc3, perc4, perc5, perc6, perc7, perc9, perc10)],
    [16, stack(percintro3, perc2, perc3, perc4, perc5, perc6, perc7, perc9, perc10)],
    [16.5, stack(percintro3, perc3, perc4, perc5, perc6, perc9, perc7, perc10)],
    [16.5, stack()],
)
song
