//generics
function displayData<T>(data: T): T {
    return data;
}

console.log(displayData<string>("Hello TypeScript"));
console.log(displayData<number>(100));
console.log(displayData<boolean>(true));

//union
type Status = "success" | "error" | "loading";

function showStatus(status: Status): void {
    console.log(`Current status: ${status}`);
}

showStatus("success");
showStatus("loading");

//async/await with ts
interface User {
    id: number;
    name: string;
}

async function getUser(): Promise<User> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/5"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    const user: User = await response.json();

    return user;
}

getUser()
    .then((user) => console.log(user.name))
    .catch((error: Error) => console.log(error.message));