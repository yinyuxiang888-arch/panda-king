namespace SpriteKind {
    export const trigger = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const musicnote = SpriteKind.create()
}
function Banboo2 () {
    for (let value_7 of tiles.getTilesByType(sprites.swamp.swampTile3)) {
        let Music_Note: Sprite = null
        Banboo = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . 7 . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . . . 7 7 . 7 . . . . 
            . . . . . . . . 7 7 . 7 . . . . 
            . . . . . . 7 . 7 7 . 7 . . . . 
            . . . . . . . 7 7 7 7 . . . . . 
            . . . . . . . 7 7 7 7 . . . . . 
            . . . . . . . 7 7 7 7 . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . 7 7 . . . 
            . . . . . 7 7 7 7 7 7 7 . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(Banboo, value_7)
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
        animation.runMovementAnimation(
        Music_Note,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
})
// Boss被攻击及切换逻辑
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile, enemy) {
    projectile.destroy()
    currentLife += 0 - 1
    sprites.destroy(player2, effects.confetti, 500)
    music.play(music.stringPlayable("B C5 A B C5 A B C5 ", 392), music.PlaybackMode.UntilDone)
    enemy.startEffect(effects.disintegrate, 100)
    if (currentLife > 0) {
        boss.say("Ouch!", 250)
    } else {
        enemy.destroy(effects.fire, 500)
        info.changeScoreBy(10)
        bossIndex += 1
        if (bossIndex < bossImages.length) {
            pause(700)
            game.splash("White Bone Demon transforms! Next round!")
        } else {
            game.splash("Victory! Monkey King defeats all forms of the White Bone Demon!")
            game.over(true)
        }
    }
})
// 孙悟空攻击
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        Shit = sprites.createProjectileFromSprite(assets.image`shit`, player2, 0, -100)
    } else if (direction == 1) {
        Shit = sprites.createProjectileFromSprite(assets.image`shit`, player2, 100, 0)
    } else if (direction == 2) {
        Shit = sprites.createProjectileFromSprite(assets.image`shit`, player2, -100, 0)
    } else if (direction == 3) {
        Shit = sprites.createProjectileFromSprite(assets.image`shit`, player2, 0, 100)
    }
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    Music = []
    _ = []
    for (let index = 0; index < randint(3, 8); index++) {
        let M: number[] = []
        M.push(Music._pickRandom())
        M.push(M._pickRandom())
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . . f 5 5 5 f . . . . 
        . . . . f 6 2 5 5 6 f . . . 
        . . . f 6 6 6 6 1 6 6 f . . 
        . . . f 6 6 6 6 6 1 6 f . . 
        . . . f d f d 6 6 6 1 f . . 
        . . . f d f d 6 6 6 6 f f . 
        . . . f d 3 d d 6 6 6 f 6 f 
        . . . . f d d d f f 6 f f . 
        . . . . . f f 5 3 f 6 6 6 f 
        . . . . f 5 3 3 f f f f f . 
        . . . . f 3 3 f d f . . . . 
        . . . . . f 3 f d f . . . . 
        . . . . f 3 5 3 f d f . . . 
        . . . . f f 3 3 f f . . . . 
        `,img`
        . . . . . . f 5 5 5 f . . . 
        . . . . . f 6 2 5 5 6 f . . 
        . . . . f 6 6 6 6 1 6 6 f . 
        . . . . f 6 6 6 6 6 1 6 f . 
        . . . . f d f d 6 6 6 1 f . 
        . . . . f d f d 6 6 6 6 f f 
        . . . . f d 3 d d 6 6 6 f 6 
        . . . . . f d d d f f 6 f f 
        . . . . . . f f 3 3 f f 6 6 
        . . . . . f d d d d f f f f 
        . . . . . f d d d f 3 f . . 
        . . . . . . f f f d 5 3 f . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f 5 5 5 f . . . 
        . . . . . f 6 2 5 5 6 f . . 
        . . . . f 6 6 6 6 1 6 6 f . 
        . . . . f 6 6 6 6 6 1 6 f . 
        . . . . f d f d 6 6 6 1 f . 
        . . . . f d f d 6 6 6 6 f f 
        . . . . f d 3 d d 6 6 6 f 6 
        . . . . . f d d d f f 6 f f 
        . . . . . . f f 3 3 f f 6 6 
        . . . . . f 5 3 3 d d f f f 
        . . . . . f 3 3 3 f d d f . 
        . . . . . . f 3 5 f f f . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    direction = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . . f 5 5 5 5 f . . . 
        . . . . f 6 6 6 6 6 6 f . . 
        . . . f 6 1 1 1 6 1 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . f f 6 6 6 6 6 6 6 6 f f 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 
        . . f f f 3 f f f f 3 f f f 
        . . . f d 5 3 3 3 3 5 d f . 
        . . f d d f 3 3 3 3 f d d f 
        . . . f f f 5 3 3 5 f f f . 
        . . . . f 3 3 5 5 3 3 f . . 
        . . . . f 3 3 3 3 3 3 f . . 
        `,img`
        . . . . . f 5 5 5 5 f . . . 
        . . . . f 6 6 6 6 6 6 f . . 
        . . . f 6 1 1 1 6 1 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . f f 6 6 6 6 6 6 6 6 f f 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 
        . . f f f 3 f f f f 5 f f f 
        . . . f d f 3 3 3 3 d d f . 
        . . . . f 3 5 3 3 f d d f . 
        . . . . f 3 3 5 5 3 f f . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,img`
        . . . . . f 5 5 5 5 f . . . 
        . . . . f 6 6 6 6 6 6 f . . 
        . . . f 6 1 1 1 6 1 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . f f 6 6 6 6 6 6 6 6 f f 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 
        . . f f f 5 f f f f 3 f f f 
        . . . f d d 3 3 3 3 f d f . 
        . . . f d d f 3 3 5 3 f . . 
        . . . . f f 3 5 5 3 3 f . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . 3 3 3 3 3 . 
        . . . . . 3 . 3 3 3 . 3 3 . 
        . . . . . . 3 3 . . . . 3 . 
        . . . . . 3 3 3 3 . . 3 3 . 
        . . . . . 3 3 . . 3 3 3 . . 
        . . . . 3 . 3 3 3 3 3 . . . 
        . . . . 3 3 . . 3 . . . . . 
        . . . . . 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    direction = 3
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(bossImages.spriteAttachedTo(), effects.warmRadial, 2000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
info.onScore(20, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ghost, function (sprite, otherSprite) {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . . f 5 5 5 f . . . . 
        . . . . f 6 2 5 5 6 f . . . 
        . . . f 6 6 6 6 1 6 6 f . . 
        . . . f 6 6 6 6 6 1 6 f . . 
        . . . f d f d 6 6 6 1 f . . 
        . . . f d f d 6 6 6 6 f f . 
        . . . f d 3 d d 6 6 6 f 6 f 
        . . . . f d d d f f 6 f f . 
        . . . . . f f 5 3 f 6 6 6 f 
        . . . . f 5 3 3 f f f f f . 
        . . . . f 3 3 f d f . . . . 
        . . . . . f 3 f d f . . . . 
        . . . . f 3 5 3 f d f . . . 
        . . . . f f 3 3 f f . . . . 
        `,img`
        . . . . . . f 5 5 5 f . . . 
        . . . . . f 6 2 5 5 6 f . . 
        . . . . f 6 6 6 6 1 6 6 f . 
        . . . . f 6 6 6 6 6 1 6 f . 
        . . . . f d f d 6 6 6 1 f . 
        . . . . f d f d 6 6 6 6 f f 
        . . . . f d 3 d d 6 6 6 f 6 
        . . . . . f d d d f f 6 f f 
        . . . . . . f f 3 3 f f 6 6 
        . . . . . f d d d d f f f f 
        . . . . . f d d d f 3 f . . 
        . . . . . . f f f d 5 3 f . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f 5 5 5 f . . . 
        . . . . . f 6 2 5 5 6 f . . 
        . . . . f 6 6 6 6 1 6 6 f . 
        . . . . f 6 6 6 6 6 1 6 f . 
        . . . . f d f d 6 6 6 1 f . 
        . . . . f d f d 6 6 6 6 f f 
        . . . . f d 3 d d 6 6 6 f 6 
        . . . . . f d d d f f 6 f f 
        . . . . . . f f 3 3 f f 6 6 
        . . . . . f 5 3 3 d d f f f 
        . . . . . f 3 3 3 f d d f . 
        . . . . . . f 3 5 f f f . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    direction = 2
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . . f 5 5 5 5 f . . . 
        . . . . f 6 6 6 6 6 6 f . . 
        . . . f 6 1 1 1 6 1 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . f f 6 6 6 6 6 6 6 6 f f 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 
        . . f f f 3 f f f f 3 f f f 
        . . . f d 5 3 3 3 3 5 d f . 
        . . f d d f 3 3 3 3 f d d f 
        . . . f f f 5 3 3 5 f f f . 
        . . . . f 3 3 5 5 3 3 f . . 
        . . . . f 3 3 3 3 3 3 f . . 
        `,img`
        . . . . . f 5 5 5 5 f . . . 
        . . . . f 6 6 6 6 6 6 f . . 
        . . . f 6 1 1 1 6 1 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . f f 6 6 6 6 6 6 6 6 f f 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 
        . . f f f 3 f f f f 5 f f f 
        . . . f d f 3 3 3 3 d d f . 
        . . . . f 3 5 3 3 f d d f . 
        . . . . f 3 3 5 5 3 f f . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,img`
        . . . . . f 5 5 5 5 f . . . 
        . . . . f 6 6 6 6 6 6 f . . 
        . . . f 6 1 1 1 6 1 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 6 6 f . 
        . . f f 6 6 6 6 6 6 6 6 f f 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 
        . . f f f 5 f f f f 3 f f f 
        . . . f d d 3 3 3 3 f d f . 
        . . . f d d f 3 3 5 3 f . . 
        . . . . f f 3 5 5 3 3 f . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    direction = 0
})
let _: number[] = []
let Music: number[] = []
let Shit: Sprite = null
let bossImages: Sprite = null
let bossIndex = 0
let boss: Sprite = null
let currentLife = 0
let Banboo: Sprite = null
let direction = 0
let player2: Sprite = null
info.setLife(3)
info.startCountdown(300)
music.play(music.createSong(assets.song`OPENING SOUND`), music.PlaybackMode.InBackground)
story.printCharacterText("Help Panda King eat all Bamboos to gain energy and fight against 3 monsters to protect his people")
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.setDialogFrame(img`
    999999999999999999999999999999999
    999999999999999999999999999999999
    999999999999999999999999999999999
    999999999999999999999999999999999
    999999999999999999999999999999999
    177111771177711111117717177777111
    117111771177711111117717177771111
    117711771177711111117717777711111
    117771771177711117717717777711111
    111771771177711771117717771711111
    111777771177117711117717771711111
    111777771177777711117717177111111
    111117771177777111117717771111111
    177717771177771117117711771111111
    177717771177711111777711711111111
    111777771177111111177717111111111
    111117771177111117777177111771111
    111111777177111177777177117771111
    111111777177111777177171177711111
    111111177177177771177177777111111
    111111177177771111177177771111111
    111111177177171111177177111111111
    555111177177711111177177111111111
    555111177177111111777177111115551
    555111177177111111777177111115551
    555111177177111555177171111115551
    171111177177111555177171111111711
    171111177177111171117171111111711
    171111177177111171117171111111711
    ddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddd
    `)
let hit_wall = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    `, SpriteKind.trigger)
tiles.placeOnTile(hit_wall, tiles.getTileLocation(22, 34))
game.setDialogTextColor(15)
game.showLongText("  PANDA KING IS BACK!!!", DialogLayout.Center)
tiles.setCurrentTilemap(tilemap`level1`)
// 孙悟空角色
player2 = sprites.create(img`
    . . . 2 2 . . . . 
    . . 2 4 4 2 . . . 
    . 2 4 5 5 4 2 . . 
    2 4 5 3 3 5 4 2 . 
    . 2 3 3 3 2 . . . 
    . 2 5 5 5 2 . . . 
    . 2 2 5 2 2 . . . 
    8 8 e e e 8 8 . . 
    . . e . e . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2)
scene.cameraFollowSprite(player2)
player2.setStayInScreen(true)
player2.setPosition(80, 100)
tiles.placeOnRandomTile(player2, assets.tile`transparency16`)
let bossLife2 = 0
let ASTEROIO = [
"a",
"b",
"c",
""
]
let text_list = [
"a",
"b",
"c",
""
]
info.setScore(0)
direction = 0
game.onUpdate(function () {
    if (info.score() < 6 && player2.overlapsWith(hit_wall)) {
        player2.sayText("You have to collect all Banboos to gain energy!", 1000, false)
    }
})
// Boss移动
game.onUpdate(function () {
    if (boss) {
        boss.x += Math.sin(game.runtime() / (350 - bossIndex * 100)) * (2 + bossIndex)
    }
})
game.onUpdateInterval(15000, function () {
    bossImages = sprites.create(assets.image`monster1`, SpriteKind.ghost)
    bossImages.follow(player2, 20)
    tiles.placeOnRandomTile(bossImages, sprites.castle.tileGrass1)
})
