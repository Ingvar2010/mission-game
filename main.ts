scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.showLongText("hi my name is Greg can you get 3 things for me be quick!", DialogLayout.Bottom)
    info.startCountdown(30)
    tiles.setCurrentTilemap(tilemap`level0`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    game.showLongText("Jerry: this is so boring ", DialogLayout.Bottom)
    game.showLongText("Ava: why are you here then?", DialogLayout.Bottom)
    game.showLongText("Jerry: its my dad's show that's why", DialogLayout.Bottom)
    game.showLongText("Ava: oh i understand", DialogLayout.Bottom)
    game.showLongText("Ava: the boy outside said that this place is haunted ", DialogLayout.Bottom)
    game.showLongText("Jerry: not haunted just boring ", DialogLayout.Bottom)
    game.showLongText("Jerry: You should talk to my dad he can tell you more", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level42`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level35`)
    mySprite.setPosition(0, 106)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level27`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level28`)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . . . . . . . . . 
        . . . 7 7 7 . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . 7 
        . . . . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 . . . . . . . . . . . . . 
        . . . 7 7 . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . . . . . . . . . . 7 
        . . 7 . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . 7 7 7 7 7 7 . . . . . . 
        . 7 7 . . . . . . . 7 7 . . . . 
        . . . 7 7 . . . . . 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . e 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . 7 7 7 7 . . . . . 7 
        . . 7 . . e e e e e e . . . 7 7 
        . 7 7 7 e e e 7 7 7 7 e e e . . 
        . 7 . . e e 7 7 7 d 7 7 e e . . 
        . 7 7 . . . d d d d d 7 7 7 . . 
        . . . 7 7 d d d d d d 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 a a a a . . . 7 
        . . . 7 . . . a a . . . . . . 7 
        . . . . 7 7 f 7 7 7 7 7 f 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 7 . . . . . . . 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 d 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 d e . . . . 
        7 7 7 . e d f d d 7 7 e . . . . 
        7 7 . . e d d d d d 7 7 . . . . 
        7 7 7 7 e e d d d d e 7 . . . . 
        7 7 7 . e e e d d e e 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . 7 7 7 7 7 7 . . . . 7 
        . . . . . 7 a a a a 7 . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e e e d d e e e . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    false
    )
    info.setScore(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    mySprite.setPosition(124, 111)
    tiles.setCurrentTilemap(tilemap`level20`)
    game.showLongText("Ava: where am i now Mary", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . a a a . c . . . . . . 
        . . . . . a . . . c c f . . . . 
        . . . . f f . . . . . f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . . a . c . . . . . . 
        . . . . . . . a . c . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . c c c . a . . . . . . 
        . . . . . c . . . a a f . . . . 
        . . . . f f . . . . . f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . . c . a . . . . . . 
        . . . . . . . c . a . . . . . . 
        . . . . . . f f f f . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.setPosition(82, -3)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level28`)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . . . . . . . . . 
        . . . 7 7 7 . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . 7 
        . . . . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 . . . . . . . . . . . . . 
        . . . 7 7 . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . . . . . . . . . . 7 
        . . 7 . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . 7 7 7 7 7 7 . . . . . . 
        . 7 7 . . . . . . . 7 7 . . . . 
        . . . 7 7 . . . . . 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . e 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . 7 7 7 7 . . . . . 7 
        . . 7 . . e e e e e e . . . 7 7 
        . 7 7 7 e e e 7 7 7 7 e e e . . 
        . 7 . . e e 7 7 7 d 7 7 e e . . 
        . 7 7 . . . d d d d d 7 7 7 . . 
        . . . 7 7 d d d d d d 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 a a a a . . . 7 
        . . . 7 . . . a a . . . . . . 7 
        . . . . 7 7 f 7 7 7 7 7 f 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 7 . . . . . . . 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 d 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 d e . . . . 
        7 7 7 . e d f d d 7 7 e . . . . 
        7 7 . . e d d d d d 7 7 . . . . 
        7 7 7 7 e e d d d d e 7 . . . . 
        7 7 7 . e e e d d e e 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . 7 7 7 7 7 7 . . . . 7 
        . . . . . 7 a a a a 7 . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e e e d d e e e . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    false
    )
    info.setScore(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    game.showLongText("open the portal with a button", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level23`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . c . a a a . . . . . 
        . . . . f c c . . . a . . . . . 
        . . . . f . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . c . a . . . . . . . 
        . . . . . . c . a . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a . c c c . . . . . 
        . . . . f a a . . . c . . . . . 
        . . . . f . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a . c . . . . . . . 
        . . . . . . a . c . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.setPosition(82, -3)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . . . . . f f . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
info.onScore(3, function () {
    tiles.setCurrentTilemap(tilemap`level10`)
    info.setScore(5)
    info.stopCountdown()
    game.splash("Greg: Bye! Thank you!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.showLongText("Hey Ava i know that you are very smart so can you solve my riddle", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level14`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.showLongText("what has 4 legs but cant walk", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level19`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    game.showLongText("Danny: be careful the church is haunted", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level34`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level28`)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . . . . . . . . . 
        . . . 7 7 7 . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . 7 
        . . . . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 . . . . . . . . . . . . . 
        . . . 7 7 . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . . . . . . . . . . 7 
        . . 7 . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . 7 7 7 7 7 7 . . . . . . 
        . 7 7 . . . . . . . 7 7 . . . . 
        . . . 7 7 . . . . . 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . e 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . 7 7 7 7 . . . . . 7 
        . . 7 . . e e e e e e . . . 7 7 
        . 7 7 7 e e e 7 7 7 7 e e e . . 
        . 7 . . e e 7 7 7 d 7 7 e e . . 
        . 7 7 . . . d d d d d 7 7 7 . . 
        . . . 7 7 d d d d d d 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 a a a a . . . 7 
        . . . 7 . . . a a . . . . . . 7 
        . . . . 7 7 f 7 7 7 7 7 f 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 7 . . . . . . . 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 d 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 d e . . . . 
        7 7 7 . e d f d d 7 7 e . . . . 
        7 7 . . e d d d d d 7 7 . . . . 
        7 7 7 7 e e d d d d e 7 . . . . 
        7 7 7 . e e e d d e e 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . 7 7 7 7 7 7 . . . . 7 
        . . . . . 7 a a a a 7 . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e e e d d e e e . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    false
    )
    info.setScore(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level28`)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . 7 5 . . . . . . . . . . . . 
        . . 7 7 . . . . . . . . . . . . 
        . . . 7 7 7 . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . 7 
        . . . . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 . . . . . . . . . . . . . 
        . . . 7 7 . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . . . . 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 . 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . . . . . . . . . . 7 
        . . 7 . . . . . . . . . . . 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . . 7 7 7 7 7 7 . . . . . . 
        . 7 7 . . . . . . . 7 7 . . . . 
        . . . 7 7 . . . . . 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 . . . . . . . 7 
        . . . 7 . . . . . . . . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 . e 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . 7 7 7 7 . . . . . 7 
        . . 7 . . e e e e e e . . . 7 7 
        . 7 7 7 e e e 7 7 7 7 e e e . . 
        . 7 . . e e 7 7 7 d 7 7 e e . . 
        . 7 7 . . . d d d d d 7 7 7 . . 
        . . . 7 7 d d d d d d 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 7 7 7 a a a a . . . 7 
        . . . 7 . . . a a . . . . . . 7 
        . . . . 7 7 f 7 7 7 7 7 f 7 7 7 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . . . . . 
        . 7 7 7 . . . . . . . 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 d 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 d e . . . . 
        7 7 7 . e d f d d 7 7 e . . . . 
        7 7 . . e d d d d d 7 7 . . . . 
        7 7 7 7 e e d d d d e 7 . . . . 
        7 7 7 . e e e d d e e 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . 7 7 7 7 7 7 . . . . 7 
        . . . . . 7 a a a a 7 . . . . 7 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . 7 7 f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e e e d d e e e . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    false
    )
    info.setScore(10)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level7`)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(13)
