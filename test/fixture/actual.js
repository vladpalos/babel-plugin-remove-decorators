function classDec (){};
function methodDec (){};

@classDec
class DecoratedClass {
    @methodFoo(true)
    method() { }
}