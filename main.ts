namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const Player_2 = SpriteKind.create()
    export const Power_up = SpriteKind.create()
    export const Energy_Drink = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const UI = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 d d d . . . . 
. . . 1 1 1 1 1 1 1 1 d d . . . 
1 1 1 1 1 1 1 1 1 1 1 1 d d d . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 
. . . . 1 1 1 1 1 1 d d d d . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f f . . 
. . . . f f f 7 7 7 7 7 7 f f . 
. . . f f 7 7 7 2 7 7 2 7 7 f . 
. . f f 7 7 2 7 7 2 7 7 7 7 7 f 
. f f 7 7 7 7 2 7 7 7 7 7 7 7 f 
f f 7 7 7 7 7 7 7 7 7 2 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f 7 7 7 7 7 7 7 f . . . . . 
. . f 7 7 7 7 7 7 7 f . . . . . 
. . f 7 7 7 7 7 7 7 f . . . . . 
. . f 7 7 7 7 7 7 7 f . . . . . 
. . f 7 7 7 7 7 7 7 f . . . . . 
. . f 7 7 7 7 7 7 7 f . . . . . 
. . f 7 7 7 7 7 7 7 f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . f e e e f . . . . . . . 
. . . . f e e e f . . . . . . . 
. . . . f e e e f . . . . . . . 
. . . . f e e e f . . . . . . . 
. . . . f e e e f . . . . . . . 
. . . . f e e e f . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
b b b b b b b b b b b b b f b b 
b b b f b b b b b b b b b b b b 
b b b b b b b f b b b f b b b b 
b b b b b b b b b b b b b b b b 
b b f b b b b b b b b b b b b b 
b b b b b b b f b b b b b b b b 
b b b b b b b b b b b b f b b b 
b b b b b b b b b b b b b b b b 
b b f b b b b b b b b b b b b b 
b b b b b b f b b b b f b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f b b b b b b b b b b b b b 
b b b b b b b f b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b f b b 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b f b b b 
b b f f b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b f b b b b b b b 
b b b b f b b b b b b b b b b b 
b f b b b b b b b b b f b b b b 
b b b b b f b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b f b 
b b b b b b b b b b b b b b b b 
b b b b b b b f b b b b b b b b 
b b b b f b b b b b b b b b b b 
b b b b b b b b b b f b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
b b b b b b f b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b f b b f b b b b b b b b b b b 
b b b b b b b b b b b b f b b b 
b b b b b b b b b b f b b b b b 
b b b b b f b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b f 
b b b f b b b b b f b b b b b b 
b b b b b b b b b b b f b b b b 
b b b b b b b b b b b b b b b b 
b b b f b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b f b b b b b b 
b b b b b b b b b b b b b b b b 
`
}
function Boss_Battle_UI () {
    Boss_Life3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f . . . . f f f . . . 
. . f f 2 f f . . f f 2 f f . . 
. . f 2 2 2 f f f f 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f f 2 2 2 2 2 2 2 2 f f . . 
. . . f f 2 2 2 2 2 2 f f . . . 
. . . . f f 2 2 2 2 f f . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.UI)
    Boss_Life2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f . . . . f f f . . . 
. . f f 2 f f . . f f 2 f f . . 
. . f 2 2 2 f f f f 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f f 2 2 2 2 2 2 2 2 f f . . 
. . . f f 2 2 2 2 2 2 f f . . . 
. . . . f f 2 2 2 2 f f . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.UI)
    Boss_Live1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f . . . . f f f . . . 
. . f f 2 f f . . f f 2 f f . . 
. . f 2 2 2 f f f f 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f f 2 2 2 2 2 2 2 2 f f . . 
. . . f f 2 2 2 2 2 2 f f . . . 
. . . . f f 2 2 2 2 f f . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.UI)
    Boss_Life3.setPosition(5, 0)
    Boss_Life2.setPosition(23, 0)
    Boss_Live1.setPosition(36, 0)
    Boss_Life3.setFlag(SpriteFlag.StayInScreen, true)
    Boss_Life3.setFlag(SpriteFlag.RelativeToCamera, true)
    Boss_Life2.setFlag(SpriteFlag.StayInScreen, true)
    Boss_Life2.setFlag(SpriteFlag.RelativeToCamera, false)
    Boss_Live1.setFlag(SpriteFlag.RelativeToCamera, false)
    Boss_Live1.setFlag(SpriteFlag.StayInScreen, true)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("Left")
    A.setImage(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 f 5 5 5 5 f 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 f f f 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`)
})
controller.combos.attachCombo("a+u", function () {
    game.splash("How to play the game", "arrows = move | get to the green \"G\" and don't get caught by the red squares!! ")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("down")
    A.setImage(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 f 5 5 5 5 5 5 5 f 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 f f f f f 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Energy_Drink, function (sprite, otherSprite) {
    otherSprite.setPosition(Math.randomRange(0, 50), Math.randomRange(0, 50))
    controller.moveSprite(sprite, 120, 120)
    pause(5000)
    controller.moveSprite(sprite, 100, 100)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Ap2.setImage(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 f 7 7 7 7 7 7 7 f 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 f f f f f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
    Ap2.setVelocity(50, 30)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    Boss_1.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f f f f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 f f f 4 4 4 4 4 4 4 4 4 f f f 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 f f 4 4 4 4 4 4 f f 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f f f 4 4 4 4 4 4 f f 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 f f f f 4 4 4 4 4 4 4 4 4 f f 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 f f f f 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f f f f f f f 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f f f f f f f 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f f f f f f f f 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f f f f f f f f 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 f f f f f f f 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
    projectile.destroy(effects.disintegrate, 100)
    pause(200)
    Boss_1.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f f f f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 f 4 f f 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 f f f 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 f f 4 4 4 4 4 4 4 4 4 f f 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 f f 4 4 4 4 4 4 4 4 4 f f 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 f 4 4 4 4 f f 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 f f 4 4 4 4 4 f f 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f f 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f f f 4 4 4 4 4 4 4 f 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
    Boss_HIT += 1
    if (Boss_HIT == 1) {
        Boss_Life3.destroy(effects.fire, 100)
    } else if (Boss_HIT == 2) {
        Boss_Life2.destroy(effects.blizzard, 100)
    } else if (Boss_HIT == 3) {
        Boss_Live1.destroy(effects.trail, 100)
        Boss_1.setImage(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b f f b b b f f f f f f b b b b b b f f b b b b 
b b f b b b b b b f f b b b f f f f f f b b f b b b f f b b b b 
b b b b b b b b b f f b b b f f b b b b b b b b b b f f b b b b 
b b b b b b b b b f f b b b f f b b b b f b b b b b f f b b b b 
b b b b b b b b b f f b b b f f b b b b b b b b b b f f b b b b 
b b b b b b b b b f f b b b f f f f f f b b b b b b f f b b b b 
b b b b f f f f f f f b b b f f f f f f b f f f f f f f b b b b 
b b b b f f f f f f f b b b f f b b b b b f f f f f f f b b b b 
b b b b f f b b b f f b b b f f b b b b b f f b b b f f b b b b 
b b b b f f b f b f f b b b f f b b b b b f f b b f f f b b b b 
b b b b f f b b b f f b b b f f b b b b b f f b b b f f b b b b 
b b b b f f b b b f f b b b f f f f f f b f f f f f f f b b b b 
b b b b f f f f f f f b b b f f f f f f b f f f f f f f b b b b 
b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f b b b b b b b b b b f f f f f b b b b b b b b b b b b b b 
b b b b b b b b b b b b f 5 5 5 5 5 f b b b b b b b b b b f b b 
b b b b b b b b b b b b f 5 f 5 f 5 f b b b b b b b b b b b b b 
b b b b b b b b b f b b f 5 5 5 5 5 f b b b b b b b b b b b b b 
b b b b b b b b b b b b f 5 f f f 5 f b b b b b b b b b b b b b 
b b b b b b b b b b b b f 5 5 5 5 5 f b b b b b b f b b b b b b 
b b b b b b b b b b b b b f f f f f b b b f b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b f b b b b b b b b b b b b f b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
        Boss_1.setVelocity(0, 0)
        myEnemy.destroy(effects.warmRadial, 500)
        Win = 1
        pause(500)
        game.over(true)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Ap2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 f 7 7 7 7 7 7 7 f 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 f 7 7 7 7 7 7 f 7 7 7 f 
f 7 7 7 7 f f f f f f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Player_2)
    Ap2.setPosition(A.x, A.y)
    controller.player2.moveSprite(Ap2, 100, 0)
    Ap2.setFlag(SpriteFlag.StayInScreen, true)
    console.log("Player 2 connected successfully!")
    info.player2.setScore(0)
})
controller.combos.attachCombo("A+B", function () {
    console.log("Reset Combo Loaded!")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player_2, SpriteKind.Enemy, function (sprite, otherSprite) {
    console.log("P2 Died")
    otherSprite.say("P2 is kil")
    otherSprite.setImage(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 f f 2 2 2 f f 2 2 2 2 f 
f 2 2 2 2 f f 2 f f 2 2 2 2 2 f 
f 2 2 2 2 2 f f f 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 f 2 2 2 2 2 2 2 f 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 f 2 2 2 f 2 2 2 2 2 f 
f 2 2 2 2 f f f f f 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`)
    pause(100)
    music.stopAllSounds()
    game.over(false)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    console.log("P2 Left")
    Ap2.setImage(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 f 7 7 7 7 f 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 f f f 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    console.log("P2 Up")
    Ap2.setImage(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 f 7 7 7 7 7 7 7 7 7 f 7 f 
f 7 7 7 7 7 7 f f f f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
    Ap2.setVelocity(50, -36)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    console.log("P1 Died")
    otherSprite.say("P1 is kil")
    otherSprite.setImage(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 f f 2 2 2 f f 2 2 2 2 f 
f 2 2 2 2 f f 2 f f 2 2 2 2 2 f 
f 2 2 2 2 2 f f f 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 f 2 2 2 2 2 2 2 f 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 f 2 2 2 f 2 2 2 2 2 f 
f 2 2 2 2 f f f f f 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`)
    music.stopAllSounds()
    pause(100)
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("Right")
    A.setImage(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 f 5 5 5 5 f 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 f f f f 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    console.log("P2 right")
    Ap2.setImage(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 f 7 7 7 7 f 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 f f f f 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Power_up, function (sprite, otherSprite) {
    otherSprite.setPosition(Math.randomRange(0, 50), Math.randomRange(0, 50))
    projectile = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f f . . . 
. . . . f f 7 f 7 7 7 7 f . . . 
. . . . . f f 7 f 7 7 7 f . . . 
. . . . . . f 7 7 7 2 f f . . . 
. . . . . f f f 7 2 2 f . . . . 
. . . . f f c c f 7 7 f . . . . 
. . . f f c c f . f f f . . . . 
. . f f c c f f . . . . . . . . 
. f f c c f f . . . . . . . . . 
. f c c f f . . . . . . . . . . 
. f c c f . . . . . . . . . . . 
. f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    console.log("powerup colected!")
    projectile.setPosition(sprite.x, sprite.y)
    projectile.follow(Boss_1, 150)
    pause(2000)
    projectile.destroy(effects.disintegrate, 100)
    console.log("Projectile committed kil")
})
sprites.onOverlap(SpriteKind.Player_2, SpriteKind.Power_up, function (sprite, otherSprite) {
    otherSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 200))
    projectile = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f f . . . 
. . . . f f 7 f 7 7 7 7 f . . . 
. . . . . f f 7 f 7 7 7 f . . . 
. . . . . . f 7 7 7 2 f f . . . 
. . . . . f f f 7 2 2 f . . . . 
. . . . f f c c f 7 7 f . . . . 
. . . f f c c f . f f f . . . . 
. . f f c c f f . . . . . . . . 
. f f c c f f . . . . . . . . . 
. f c c f f . . . . . . . . . . 
. f c c f . . . . . . . . . . . 
. f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    console.log("P2 powerup colected!")
    projectile.setPosition(sprite.x, sprite.y)
    projectile.follow(Boss_1, 100)
    projectile.follow(myEnemy, 100)
    pause(2000)
    projectile.destroy(effects.disintegrate, 100)
    console.log("Projectile committed kil")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("up")
    A.setImage(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 f 5 5 5 5 5 5 5 5 5 f 5 f 
f 5 5 5 5 5 5 f f f f 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`)
})
sprites.onOverlap(SpriteKind.Player_2, SpriteKind.Energy_Drink, function (sprite, otherSprite) {
    otherSprite.setPosition(Math.randomRange(0, 50), Math.randomRange(0, 50))
    controller.moveSprite(Ap2, 120, 120)
    pause(5000)
    controller.moveSprite(Ap2, 100, 100)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let Ap2: Sprite = null
let Boss_Live1: Sprite = null
let Boss_Life2: Sprite = null
let Win = 0
let Boss_HIT = 0
let Boss_Life3: Sprite = null
let A: Sprite = null
let Boss_1: Sprite = null
game.splash("Depression in a nutshell: Boss Rush!", "PineappleDEV 2020 |   Press A to start!")
game.splash("Kill all the bosses!")
tiles.setTilemap(tiles.createTilemap(
            hex`1000100007070707070707070707070707070706060808080808080808080808080808060608080808080808080808080808080606080808080808080808080808080806060808080808080808080808080808060608080808080808080808080808080606080808080808080808080808080806060808080808080808080808080808060608080808080808080808080808080606080808080808080808080808080806060808080808080808080808080808060608080808080808080808080808080606080808080808080808080808080806060808080808080808080808080808060608080808080808080808080808080607070707070707070707070707070707`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8],
            TileScale.Sixteen
        ))
Boss_1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f f f f f f f f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f f 4 4 f f 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 f f 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 f f 4 4 4 4 4 4 4 4 4 4 4 f f 4 4 4 4 4 f . . . . 
. . . f 4 4 4 f f 4 4 4 4 4 4 4 4 4 4 4 f f 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 f f 4 4 4 4 4 4 f f 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 f 1 f f 4 4 4 4 f f f f 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 f 1 f 1 f f f f f d f f f 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 f 1 f 1 f 1 f d f d f d f 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 f 1 f 1 f 1 f d f d f d f 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 f 1 f 1 f 1 f d f d f f f 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 f 1 f 1 f 1 f d f d f f 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 f f f f f f f f f f f 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . 
. . . f f f f f f f f f f f f f f f f f f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Boss)
Boss_1.setPosition(70, 30)
Boss_1.setFlag(SpriteFlag.StayInScreen, true)
A = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 f 5 5 5 5 5 5 5 f 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 f f f f f 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)
A.setPosition(70, 120)
controller.moveSprite(A, 100, 100)
A.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(Boss_Life3)
Boss_Battle_UI()
Boss_HIT = 0
let Energy_Drink = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . d d e . . . . . . . 
. . . . . . d d d . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f 8 8 8 6 f f . . . . 
. . . . f f 8 8 8 6 9 f . . . . 
. . . . f 8 8 8 8 6 9 f . . . . 
. . . . f 8 8 8 8 6 9 f . . . . 
. . . . f 8 8 8 6 6 9 f . . . . 
. . . . f 8 8 8 6 6 9 f . . . . 
. . . . f f 8 8 6 9 f f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Energy_Drink)
let Rocket_Launcher = sprites.create(img`
. . . . . . . . . . f f f . . . 
. . . . . . . . f f f 7 f f . . 
. . . . . . . . f 7 7 f 7 f f . 
. . . . . . f f f 7 7 f 2 f f . 
. . . . . f f d f f 7 7 2 f . . 
. . . . f f d c d f f f 7 f . . 
. . . f f d c d d f f . f . . . 
f . f f d c d d d f f . . . . . 
f f f d d d d d f . . . . . . . 
f c c d d d d f f . . . . . . . 
f c c c f f f . . . . . . . . . 
f f c f f . . . . . . . . . . . 
. f c f f . . . . . . . . . . . 
. f c c f . . . . . . . . . . . 
. . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Power_up)
Rocket_Launcher.setPosition(Math.randomRange(0, 50), 50)
Win = 0
forever(function () {
    music.playMelody("E B C5 A B G A F ", 160)
})
forever(function () {
    pause(5000)
    myEnemy = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 f 2 2 2 2 2 2 2 f 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 f 2 2 2 2 f 2 2 2 f 
f 2 2 2 2 2 2 f 2 2 f 2 2 2 2 f 
f 2 2 2 2 2 2 2 f f 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Enemy)
    myEnemy.setPosition(Boss_1.x, Boss_1.y)
    myEnemy.follow(A, Math.randomRange(10, 70))
})
forever(function () {
	
})
forever(function () {
    Boss_1.setVelocity(Math.randomRange(-70, 70), Math.randomRange(-70, 70))
    pause(1000)
    Boss_1.setVelocity(Math.randomRange(-70, 70), Math.randomRange(-70, -70))
    pause(1000)
    if (Win == 1) {
        Boss_1.setVelocity(0, 0)
        myEnemy.destroy(effects.warmRadial, 500)
    }
})
