/** tslint-disable */
import point from '../audio/sfx_point.wav'
import flap from '../audio/sfx_flap.wav'
import hit from '../audio/sfx_hit.wav'
import swooshing from '../audio/sfx_swooshing.wav'
import die from '../audio/sfx_die.wav'

export const SCORE_S = new Audio()
SCORE_S.src = point

export const FLAP = new Audio()
FLAP.src = flap

export const HIT = new Audio()
HIT.src = hit

export const SWOOSHING = new Audio()
SWOOSHING.src = swooshing

export const DIE = new Audio()
DIE.src = die
