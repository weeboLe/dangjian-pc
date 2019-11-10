" Menu Translations:	Hungarian (Magyar)
" Original Translation:	Zoltán Árpádffy
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
" Igyekeztem mindenhez gyorsbillentyût rendelni, lehetõleg nem ékezeteset.
" További tennivaló az y és z gyorsbillentyûk kiirtása, ezenkívül a g, j
" billentyûk irtása is, mivel ez utóbbiak aláhúzott változatát nem könnyû
" felismerni.
" Amennyiben valahol nem egyértelmûk a gyorsbillentyûk (a gyorsbillentyût
" leütve nem hajtódik végre a kiszemelt menüpont, hanem csak kiválasztódik,
" vagy másik menüpont választódik ki), vagy egyéb hibát találsz, kérlek jelezd
" nekem a fenti email címen.
" Mindennemû visszajelzést szívesen fogadok.

" Quit when menu translations have already been done.
if exists("did_menu_trans")
  finish
endif
let did_menu_trans = 1
let s:keepcpo= &cpo
set cpo&vim