setcpm(140/4)

$baseline: s("alesishr16_bd").struct("x !4").gain("<0.16 0.15>").hpf(50)._pianoroll()

$base_bongo: s("bongo").struct("<[x x x x]!4 [x x x x]*2!4 [[x [x - x]] [x x] x x *2]!6  [x [x [x x]]]!4>")
.gain("5.5 6.5 7.5 8.5").room(.5).bpq("<0 1 2 3>").pcurve("0 1").lpd(0.08).lps(2).lpenv(3)._pianoroll()

$tum: s("alesishr16_ht").struct("x").gain(0.03).room(0.6).lpf(600)

$scratch: s("alesishr16_sh").struct("x").lpf(1000).gain("0.6").room(.3) 

$lata: s("alesissr16_cb").struct("x x x x").gain("<0.04 0.02>")

$barulho_massa: s("balafon_hard").struct("[x [x x]] [x x]").gain("<0.09 0.08>").room(.5)._pianoroll() 

$lata2: s("akaixr10_cb").struct("- x x x").gain("<0.04 0.05>").room(.5).hpf(50)

$bumba: s("9000_perc").struct("<[x x x x] *2 !4 [x x x x]*3 !2 [x - [x x]] !4>").gain("0.12 0.11 *2").bpq("<0 2 5>").room(.3)._pianoroll()


$sina: s("alesissr16_perc").struct("<[ - x x x] *2 !4 [- x x x] !4>").room(.3).hpf(1000)
.gain("0.05 0.08 0.05 0.08").pcurve("0 1")._pianoroll()

$colher_feijão: s("bossdr550_cb ").struct("x - - x").room(.5).gain("0.09") 


$chocalho: s("alesissr16_tb").struct("<[x x x x*2] !8 [x [x [x x]]] !8 >").room(0.4).gain("[0.01 0.02 0.021]")

$chocalho2: s("alesishr16_sh").struct("<[x x x x *2] !8 [x x x x *2] !8 >").room(0.4).gain("[0.01 0.02 0.021]")



