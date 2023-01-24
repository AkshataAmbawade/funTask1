let ctx = require('axel');
let _=require('lodash')
ctx.clear(); 
ctx.bg(0,90,0);

let currPoint = [30, 20]
let prevPoint = [4, 24]
const points = [
    [3, 'L'], [2, 'U'], [3, 'R'], [2, 'U'], [2, 'R'], [14, 'U'], [2 ,'L'], [1, 'U'], [2,'L'], [1 ,'U'], [2,'R'], [1 ,'U'], [2, 'R'],
    [3,'U'], [2 ,'R'], [20,'D'], [2, 'R'], [2, 'D'], [3, 'R'], [2, 'D'], [3, 'L'], [2, 'D'], [3,'L']
];
_.reverse(points)

points.forEach(point => {
    prevPoint[0] = currPoint[0];
    prevPoint[1] = currPoint[1];
    switch(point[1]){
        case 'L':
            currPoint[1] = currPoint[1] - point[0];
            break
        case 'R':
            currPoint[1] = currPoint[1] + point[0];
            break
        case 'U':
            currPoint[0] = currPoint[0] + point[0];
            break
        case 'D':
            currPoint[0] = currPoint[0] - point[0];
            break
    }
    ctx.line(prevPoint[1], prevPoint[0], currPoint[1], currPoint[0]);
});
ctx.cursor.restore();