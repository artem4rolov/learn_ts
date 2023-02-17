const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// <button onclick={handleClick}>ClickMe</button>
function handleClick(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
