scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.showLongText("Greg: hi my name is Greg can you get 3 things for me be quick!", DialogLayout.Bottom)
    game.showLongText("Greg: or else...", DialogLayout.Bottom)
    info.startCountdown(15)
    tiles.setCurrentTilemap(tilemap`level0`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f e e e e e e e e e e e e f . 
        . f e e e e e e e e e e e e f . 
        . . f e e e e e e e e e e f . . 
        . . f d d 6 6 6 6 6 6 f f f . . 
        . . f f f 7 7 7 7 7 f d d f . . 
        . . . . f a a a a a f f f . . . 
        . . . . f a a f f f f f . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f e e e e e e e e e e e e f . 
        . f e e e e e e e e e e e e f . 
        . . f e e e e e e e e e e f . . 
        . . f f f 6 6 6 6 6 6 d d f . . 
        . . f d d f 7 7 7 7 7 f f f . . 
        . . . f f f a a a a a f . . . . 
        . . . . f f f f f a a f . . . . 
        . . . . . . . . . f f f . . . . 
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    game.showLongText("join us ", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`myTile82`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level35`)
    mySprite.setPosition(0, 106)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    game.showLongText("HAHAHAHA!", DialogLayout.Bottom)
    game.gameOver(false)
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
    true
    )
    info.setScore(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    info.startCountdown(30)
    tiles.setCurrentTilemap(tilemap`level93`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e 8 e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f d d d d f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d f d d f d f e f . . 
        . f e e e f d d d d f e e e f . 
        . f e e f f f f f f f f e e f . 
        . f f f f 7 7 7 7 7 7 f f f f . 
        . . f d d f 6 6 6 6 f d d f . . 
        . . f d d f 7 7 7 7 f d d f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f a a a a a a f . . . . 
        . . . . f a a f f a a f . . . . 
        . . . . f f f . . f f f . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.showLongText("HAHAHAHA!", DialogLayout.Bottom)
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f f f f e e e e f . . . 
        . . . . f d d d f e e e f . . . 
        . . . . f d f d f e e e e f . . 
        . . . . f d f d d f e e e f . . 
        . . . . f d d d d f e e e e f . 
        . . . . . f f f f e e e e e f . 
        . . . . . . f 7 7 f e e e e f . 
        . . . . . . f 6 6 6 f e e f . . 
        . . . . . f f 7 7 7 f f f . . . 
        . . . . . f f a a a f f . . . . 
        . . . . f f c c f a a f f . . . 
        . . . . f c c f . f a a f . . . 
        . . . . f f f . . f f f f . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f f f f e e e e f . . . 
        . . . . f d d d f e e e f . . . 
        . . . . f d f d f e e e e f . . 
        . . . . f d f d d f e e e f . . 
        . . . . f d d d d f e e e e f . 
        . . . . . f f f f e e e e e f . 
        . . . . . . f 7 7 f e e e e f . 
        . . . . . . f 6 6 6 f e e f . . 
        . . . . . f f 7 7 7 f f f . . . 
        . . . . . f f a a a f f . . . . 
        . . . . f f c c f a a f f . . . 
        . . . . f c c f . f a a f . . . 
        . . . . f f f . . f f f f . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f f f f e e e e f . . . 
        . . . . f d d d f e e e f . . . 
        . . . . f d f d f e e e e f . . 
        . . . . f d f d d f e e e f . . 
        . . . . f d d d d f e e e e f . 
        . . . . . f f f f e e e e e f . 
        . . . . . . f 7 7 f e e e e f . 
        . . . . . . f 6 6 6 f e e f . . 
        . . . . . . f 7 7 7 f f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f c a a f . . . . . 
        . . . . . . f c a a f . . . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f f f f e e e e f . . . 
        . . . . f d d d f e e e f . . . 
        . . . . f d f d f e e e e f . . 
        . . . . f d f d d f e e e f . . 
        . . . . f d d d d f e e e e f . 
        . . . . . f f f f e e e e e f . 
        . . . . . . f 7 7 f e e e e f . 
        . . . . . . f 6 6 6 f e e f . . 
        . . . . . f f 7 7 7 f f f . . . 
        . . . . . f f a a a f f . . . . 
        . . . . f f a a f c c f f . . . 
        . . . . f a a f . f c c f . . . 
        . . . . f f f . . f f f f . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f f f f e e e e f . . . 
        . . . . f d d d f e e e f . . . 
        . . . . f d f d f e e e e f . . 
        . . . . f d f d d f e e e f . . 
        . . . . f d d d d f e e e e f . 
        . . . . . f f f f e e e e e f . 
        . . . . . . f 7 7 f e e e e f . 
        . . . . . . f 6 6 6 f e e f . . 
        . . . . . f f 7 7 7 f f f . . . 
        . . . . . f f a a a f f . . . . 
        . . . . f f a a f c c f f . . . 
        . . . . f a a f . f c c f . . . 
        . . . . f f f . . f f f f . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f f f f e e e e f . . . 
        . . . . f d d d f e e e f . . . 
        . . . . f d f d f e e e e f . . 
        . . . . f d f d d f e e e f . . 
        . . . . f d d d d f e e e e f . 
        . . . . . f f f f e e e e e f . 
        . . . . . . f 7 7 f e e e e f . 
        . . . . . . f 6 6 6 f e e f . . 
        . . . . . . f 7 7 7 f f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f a a c f . . . . . 
        . . . . . . f a a c f . . . . . 
        . . . . . . f f f f f . . . . . 
        `],
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.setPosition(82, -3)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e f f f f . . . . 
        . . . f e e e f d d d f . . . . 
        . . f e e e e f d f d f . . . . 
        . . f e e e f d d f d f . . . . 
        . f e e e e f d d d d f . . . . 
        . f e e e e e f f f f . . . . . 
        . f e e e e f 7 7 f . . . . . . 
        . . f e e f 6 6 6 f . . . . . . 
        . . . f f f 7 7 7 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f a a a f . . . . . . 
        . . . . . f a a a f . . . . . . 
        . . . . . f f f f f . . . . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e e e e e e f . . . 
        . . . . f f f f e e e e f . . . 
        . . . . f d d d f e e e f . . . 
        . . . . f d f d f e e e e f . . 
        . . . . f d f d d f e e e f . . 
        . . . . f d d d d f e e e e f . 
        . . . . . f f f f e e e e e f . 
        . . . . . . f 7 7 f e e e e f . 
        . . . . . . f 6 6 6 f e e f . . 
        . . . . . . f 7 7 7 f f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f a a a f . . . . . 
        . . . . . . f a a a f . . . . . 
        . . . . . . f f f f f . . . . . 
        `],
    200,
    true
    )
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile85`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level50`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile90`, function (sprite, location) {
    game.showLongText("M: You have come a long way", DialogLayout.Bottom)
    game.showLongText("M: For now ", DialogLayout.Bottom)
    game.showLongText("M: This is the end Ava!", DialogLayout.Bottom)
    game.showLongText("M: Soon it will be just me and Mary", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level54`)
    game.splash("Beware of the spikes")
    bossbattle1()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    game.showLongText("open the portal with a button", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level23`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.showLongText("HAHAHAHA!", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    game.showLongText("arym si ont owh uoy iknth hse si", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level48`)
    tiles.setTileAt(location, assets.tile`coop`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile81`, function (sprite, location) {
    game.splash("Dont fall")
    tiles.setCurrentTilemap(tilemap`level43`)
    mySprite.setPosition(-1, 119)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    music.play(music.stringPlayable("D - F - A - - - ", 706), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level95`)
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffff1ffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffffffffffffffffffffffffff1ffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffff1ffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffffffffffff1fffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffff1fffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffff1ffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffff1ffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffff1fffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffff1fffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e f f f f . . . . 
        . . . f e e e f d d d f . . . . 
        . . f e e e e f d f d f . . . . 
        . . f e e e f d d f d f . . . . 
        . f e e e e f d d d d f . . . . 
        . f e e e e e f f f f . . . . . 
        . f e e e e f 7 7 f . . . . . . 
        . . f e e f 6 6 6 f . . . . . . 
        . . . f f f 7 7 7 f f . . . . . 
        . . . . f f a a a f f . . . . . 
        . . . f f a a f c c f f . . . . 
        . . . f a a f . f c c f . . . . 
        . . . f f f f . . f f f . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e f f f f . . . . 
        . . . f e e e f d d d f . . . . 
        . . f e e e e f d f d f . . . . 
        . . f e e e f d d f d f . . . . 
        . f e e e e f d d d d f . . . . 
        . f e e e e e f f f f . . . . . 
        . f e e e e f 7 7 f . . . . . . 
        . . f e e f 6 6 6 f . . . . . . 
        . . . f f f 7 7 7 f f . . . . . 
        . . . . f f a a a f f . . . . . 
        . . . f f a a f c c f f . . . . 
        . . . f a a f . f c c f . . . . 
        . . . f f f f . . f f f . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e f f f f . . . . 
        . . . f e e e f d d d f . . . . 
        . . f e e e e f d f d f . . . . 
        . . f e e e f d d f d f . . . . 
        . f e e e e f d d d d f . . . . 
        . f e e e e e f f f f . . . . . 
        . f e e e e f 7 7 f . . . . . . 
        . . f e e f 6 6 6 f . . . . . . 
        . . . f f f 7 7 7 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f a a c f . . . . . . 
        . . . . . f a a c f . . . . . . 
        . . . . . f f f f f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e f f f f . . . . 
        . . . f e e e f d d d f . . . . 
        . . f e e e e f d f d f . . . . 
        . . f e e e f d d f d f . . . . 
        . f e e e e f d d d d f . . . . 
        . f e e e e e f f f f . . . . . 
        . f e e e e f 7 7 f . . . . . . 
        . . f e e f 6 6 6 f . . . . . . 
        . . . f f f 7 7 7 f f . . . . . 
        . . . . f f a a a f f . . . . . 
        . . . f f c c f a a f f . . . . 
        . . . f c c f . f a a f . . . . 
        . . . f f f f . . f f f . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e f f f f . . . . 
        . . . f e e e f d d d f . . . . 
        . . f e e e e f d f d f . . . . 
        . . f e e e f d d f d f . . . . 
        . f e e e e f d d d d f . . . . 
        . f e e e e e f f f f . . . . . 
        . f e e e e f 7 7 f . . . . . . 
        . . f e e f 6 6 6 f . . . . . . 
        . . . f f f 7 7 7 f f . . . . . 
        . . . . f f a a a f f . . . . . 
        . . . f f c c f a a f f . . . . 
        . . . f c c f . f a a f . . . . 
        . . . f f f f . . f f f . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e f f f f . . . . 
        . . . f e e e f d d d f . . . . 
        . . f e e e e f d f d f . . . . 
        . . f e e e f d d f d f . . . . 
        . f e e e e f d d d d f . . . . 
        . f e e e e e f f f f . . . . . 
        . f e e e e f 7 7 f . . . . . . 
        . . f e e f 6 6 6 f . . . . . . 
        . . . f f f 7 7 7 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f c a a f . . . . . . 
        . . . . . f c a a f . . . . . . 
        . . . . . f f f f f . . . . . . 
        `],
    150,
    true
    )
})
function bossbattle1 () {
    timer.after(1, function () {
        music.play(music.createSong(assets.song`boss battle music`), music.PlaybackMode.UntilDone)
    })
    timer.after(500, function () {
        tiles.setCurrentTilemap(tilemap`level52`)
    })
    timer.after(2500, function () {
        tiles.setCurrentTilemap(tilemap`level53`)
    })
    timer.after(3000, function () {
        tiles.setCurrentTilemap(tilemap`level56`)
    })
    timer.after(4000, function () {
        game.showLongText("Mary: that is not me ", DialogLayout.Bottom)
        game.showLongText("Mary: this is the real me ", DialogLayout.Bottom)
        game.showLongText("Mary: this is not the real world", DialogLayout.Bottom)
        game.showLongText("Mary: you need to escape ", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level55`)
        bossbattle2()
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile84`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level50`)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f e e e e e e e e e e e e f . 
        . f e e e e e e e e e e e e f . 
        . . f e e e e e e e e e e f f . 
        . . f d d 6 6 6 6 6 6 d d f . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . . . f a a a a a a f . . . . 
        . . . . f a a f f a a f . . . . 
        . . . . f f f . . f f f . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.setPosition(82, -3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile93`, function (sprite, location) {
    timer.after(500, function () {
        game.gameOver(false)
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e 8 e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f d d d d f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d f d d f d f e f . . 
        . f e e e f d d d d f e e e f . 
        . f e e f f f f f f f f f f f . 
        . f e f 7 7 7 7 7 7 f d d f f . 
        . . f f f 6 6 6 6 6 f d d f . . 
        . . f d d f 7 7 7 7 f f f . . . 
        . . f d d f f f f f f f . . . . 
        . . . f f f a a a a a f . . . . 
        . . . . f f f f f a a f . . . . 
        . . . . . . . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e 8 e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f d d d d f e f . . . 
        . . f e f d f d d f d f e f . . 
        . . f e f d f d d f d f e f . . 
        . f e e e f d d d d f e e e f . 
        . f f f f f f f f f f f e e f . 
        . f f d d f 7 7 7 7 7 7 f e f . 
        . . f d d f 6 6 6 6 6 f f f . . 
        . . . f f f 7 7 7 7 f d d f . . 
        . . . . f f f f f f f d d f . . 
        . . . . f a a a a a f f f . . . 
        . . . . f a a f f f f f . . . . 
        . . . . f f f . . . . . . . . . 
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    game.showLongText("join us", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`myTile82`)
})
function bossbattle2 () {
    timer.after(2000, function () {
        tiles.setCurrentTilemap(tilemap`level65`)
    })
    timer.after(3000, function () {
        tiles.setCurrentTilemap(tilemap`level61`)
    })
    timer.after(4000, function () {
        tiles.setCurrentTilemap(tilemap`level62`)
    })
    timer.after(6500, function () {
        tiles.setCurrentTilemap(tilemap`level63`)
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.showLongText("Hey Ava i know that you are very smart so can you solve my riddle", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level14`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile96`, function (sprite, location) {
    info.stopCountdown()
    mySprite.setPosition(124, 111)
    tiles.setCurrentTilemap(tilemap`level20`)
    game.showLongText("Ava: where am i now Mary", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    game.showLongText("William: my show is going wonderfully!", DialogLayout.Bottom)
    game.showLongText("William: it only starts in half an hour ", DialogLayout.Bottom)
    game.showLongText("Ava: what kind of show is it?", DialogLayout.Bottom)
    game.showLongText("William: its a comedy show ", DialogLayout.Bottom)
    game.showLongText("Ava: why in a church then?", DialogLayout.Bottom)
    game.showLongText("William: its a fundraiser ", DialogLayout.Bottom)
    game.showLongText("William: our goal is 5000 dollars", DialogLayout.Bottom)
    game.showLongText("Ava: thats wonderful  ", DialogLayout.Bottom)
    game.showLongText("William: since your so interested why don't you see backstage ", DialogLayout.Bottom)
    game.showLongText("William: there might be a ticket there", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level45`)
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
mySprite = sprites.create(assets.image`concept fyrir ava`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(13)
