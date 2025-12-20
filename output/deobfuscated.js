var __p_Jdte_cache = Object.create(null);
var __p_YYMf_payload;
function __p_YfEL_dispatcher_0(name, flagArg, returnTypeArg, fnLengths = {
  Sac2L8: 1
}) {
  var output;
  var fns = {
    Sac2L8: function () {
      var [name] = __p_YYMf_payload;
      var output = "Hello " + name + "!";
      console.log(output);
    }
  };
  if (flagArg === "jllsMi9E3E") {
    __p_YYMf_payload = [];
  }
  if (flagArg === "V0331dbu7i") {
    function createFunction() {
      function fn(...args) {
        __p_YYMf_payload = args;
        return fns[name].apply(this);
      }
      var fnLength = fnLengths[name];
      if (fnLength) {}
      return fn;
    }
    output = __p_Jdte_cache[name] ||= createFunction();
  } else {
    output = fns[name]();
  }
  if (returnTypeArg === "NQg4XHv7tc") {
    return {
      DWX2C2QlB0: output
    };
  } else {
    return output;
  }
}
__p_YYMf_payload = ["Internet User"];
new __p_YfEL_dispatcher_0("Sac2L8", "o6eTrhVSbS", "NQg4XHv7tc").DWX2C2QlB0;