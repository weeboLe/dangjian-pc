" Menu Translations:	Hungarian (Magyar)
" Original Translation:	Zolt�n �rp�dffy
" Maintained By:	Kontra Gergely <kgergely@mcl.hu>
" Last Change:		2012 May 01
" I'm working on defining (unaccented) hotkeys for everything.
" I want to remove y and z hotkeys, because on the hungarian keymap they're at
" a differrent place.
" I also want to avoid g and j shortcuts, because you cannot see, wheter
" they're underlined or not.
" If the hotkeys are not uniq (pressing the hotkey doesn't executes the menu,
" just one menupoint is selected), or you find any other undesired behaviour,
" please report it to me.
" All kind of feedback is welcome.
"
" Igyekeztem mindenhez gyorsbillenty�t rendelni, lehet�leg nem �kezeteset.
" Tov�bbi tennival� az y �s z gyorsbillenty�k kiirt�sa, ezenk�v�l a g, j
" billenty�k irt�sa is, mivel ez ut�bbiak al�h�zott v�ltozat�t nem k�nny�
" felismerni.
" Amennyiben valahol nem egy�rtelm�k a gyorsbillenty�k (a gyorsbillenty�t
" le�tve nem hajt�dik v�gre a kiszemelt men�pont, hanem csak kiv�laszt�dik,
" vagy m�sik men�pont v�laszt�dik ki), vagy egy�b hib�t tal�lsz, k�rlek jelezd
" nekem a fenti email c�men.
" Mindennem� visszajelz�st sz�vesen fogadok.

" Quit when menu translations have already been done.
if exists("did_menu_trans")
  finish
endif
let did_menu_trans = 1
let s:keepcpo= &cpo
set cpo&vim