Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Issue2493.Operation3", {
        methods: {
            Add: function (a, b) {
                return ((a + b) | 0);
            }
        }
    });
});
