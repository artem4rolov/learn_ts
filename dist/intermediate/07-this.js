"use strict";
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
// <button onclick={handleClick}>ClickMe</button>
function handleClick(event) {
    this.disabled = true;
}
