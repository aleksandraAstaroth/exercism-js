// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
this.width = width
this.height = height
}
Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
}

export function Position(x = 0,y = 0) {
    this.x = x
    this.y = y
}
Position.prototype.move = function(newX, newY)  {
    this.x = newX
    this.y = newY
}

export class ProgramWindow {
    constructor () {
    this.screenSize =  new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
    }
    
    resize(newSize) {
       let newWidth = newSize.width
       let newHeight = newSize.height
    
        
       newWidth = newWidth < 1 ? 1 : newWidth
       newHeight =  newHeight < 1 ? 1 : newHeight

    //other way
    // if (this.screenSize.width < (newWidth + this.position.x)) newWidth = this.screenSize.width - this.position.x 
    // if (this.screenSize.height < (newHeight + this.position.y)) newHeight = this.screenSize.height - this.position.y 
    if (newWidth > (this.screenSize.width - this.position.x)) newWidth = this.screenSize.width - this.position.x
    if (newHeight > (this.screenSize.height - this.position.y)) newHeight = this.screenSize.height - this.position.y
    this.size = new Size(newWidth, newHeight)
    }

    move(newPosition) {
    let newX = newPosition.x
    let newY = newPosition.y
    newX = newX >= 0 ? newX : 0
    newY = newY >= 0 ? newY : 0
    if (newX > (this.screenSize.width - this.size.width)) newX = this.screenSize.width - this.size.width
    if (newY > (this.screenSize.height - this.size.height)) newY = this.screenSize.height - this.size.height

    this.position = new Position(newX, newY)
    }
}
export function changeWindow(programWindow) {
    programWindow.size.width = 400
    programWindow.size.height = 300
    programWindow.position.x = 100
    programWindow.position.y = 150
    return programWindow

}
