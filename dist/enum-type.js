var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
const dir = Direction.North;
const dName = Direction[dir];
