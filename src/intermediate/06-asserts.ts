type User = {
  name: string;
  displayName: string | null;
};

// утверждаем (asserts), что user действительно является экземпляром User и его displayName это строка
function assertDisplayName(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error("user has no displayName");
}

function logUserByDisplayName(user: User) {
  assertDisplayName(user);
  console.log("Hello", user.displayName.toUpperCase());
}
