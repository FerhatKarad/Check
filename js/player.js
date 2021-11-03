class Player {

    constructor() {
        this.width = 90;
        this.height = 130;
        this.x = 0;
        this.y = height - this.height;
        this.shot

    }

    collisionGoku(enemyInfo) {
        const enemyX = enemyInfo.x + enemyInfo.width / 2
        const enemyY = enemyInfo.y + enemyInfo.height / 2

        const playerX = this.x + this.width / 2
        const playerY = this.y + this.height / 2
        if (dist(enemyX, enemyY, playerX, playerY) > 50) {

            return false 
        } else {
            console.log('collisionGoku')
            return true
        }
    }

    moveUp() {

        if (this.y >= 0) {
            this.y -= 5;
        }

    }
    moveDown() {
        if (this.y <= 600 - this.height) {
            this.y += 5;
        }
    }

    moveRight() {
        if (this.x <= 1000 - this.width) {
            this.x += 5;
        }
    }

    moveLeft() {
        if (this.x >= 0) {
            this.x -= 5;
        }
    }


    draw() {


        image(game.playerImage, this.x, this.y, this.width, this.height)

        if (keyIsDown(37)) {
            this.moveLeft()
        }


        if (keyIsDown(38)) {
            this.moveUp()
        }


        if (keyIsDown(39)) {
            this.moveRight()
        }


        if (keyIsDown(40)) {
            this.moveDown()
        }

        if (keyIsDown(32)) {
            //this.shot
        }


    }
}
