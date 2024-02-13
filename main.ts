scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.showLongText("Greg: hi my name is Greg can you get 3 things for me be quick!", DialogLayout.Bottom)
    game.showLongText("Greg: or else...", DialogLayout.Bottom)
    info.startCountdown(15)
    tiles.setCurrentTilemap(tilemap`level0`)
    timer.after(10, function () {
        music.play(music.createSong(hex`0078000408090402001c000c960064006d019001000478002c010000640032000000000a0600055a0050005400012554005800012258005c0001225c0060000124600064000127640068000124e400e8000124e800ec000127ec00f0000124f000f4000127f400f800012408010c01011e10011401012218011c01011e1c012001011e03001c0001dc00690000045e0100040000000000000000000005640001040003ab0004000800012008000c0001250c001000012010001400012514001800012034003800012038003c0001253c004000012068006c00042225272a70007400042225272a78007c00042225272a8400880001249000940001229c00a0000120a800ac000120b000b4000120b800bc000120c000c4000125c400c8000120c800cc000127cc00d0000120d400d8000120d800dc000120dc00e000012008010c01012210011401012418011c01012206001c00010a006400f4016400000400000000000000000000000000000000025a0004000800012008000c0001250c001000012010001400012514001800012034003800012038003c0001253c004000012050005400012554005800012258005c0001225c006000012460006400012764006800012468006c00012a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80089010000010001020400050001040800090001020c000d0001041000110001021400150001041800190001021c001d0001042000210001022400250001042800290001022c002d0001043000310001023400350001043800390001023c003d0001044000410001024400450001024800490001024c004d0001025000510002020754005500020205580059000202055c005d0002060860006100020208640065000106680069000501020406086c006d0001067000710001027800790001028000810001028400850001048800890001028c008d0001049000910001029400950001049800990001029c009d000104a000a1000102a400a5000104a800a9000102ac00ad000104b000b1000102b400b5000104b800b9000102bc00bd000104c000c1000102c400c5000104c800c9000102cc00cd000104d000d1000102d400d5000104d800d9000102dc00dd000104e000e1000102e400e5000104e800e9000102ec00ed000104f000f1000102f400f5000104f800f9000102fc00fd000104000101010102040105010102`), music.PlaybackMode.UntilDone)
    })
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
    music.play(music.stringPlayable("D - F - A - - - ", 500), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level1`)
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
        tiles.setCurrentTilemap(tilemap`level58`)
    })
    timer.after(3000, function () {
        tiles.setCurrentTilemap(tilemap`level61`)
    })
    timer.after(4000, function () {
        tiles.setCurrentTilemap(tilemap`level62`)
    })
    timer.after(7000, function () {
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
