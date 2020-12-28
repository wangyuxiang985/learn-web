var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var People = /** @class */ (function () {
        function People(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        return People;
    }());
    var Woman = /** @class */ (function (_super) {
        __extends(Woman, _super);
        function Woman(name, age) {
            return _super.call(this, name, age, "女") || this;
        }
        return Woman;
    }(People));
    function show(people) {
        return people.name + "_" + people.age;
    }
    var people = {
        name: "张三",
        age: 15,
        sex: "男"
    };
    var xiaohua = new Woman("小花", 15);
    console.log(show(people));
    console.log(xiaohua.sex);
})();
