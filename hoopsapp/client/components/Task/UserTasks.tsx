async function addTask(task) {
    try {
        let response = await fetch("https://url", {
            method: "POST",
            body: JSON.stringify({
                AppId: appId,
                Key: item,
                Value: item,
                someBoolean: false,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let result = await response.json();
        return result;
    } catch (err) {
    }
}

async function removeTask(id) {
    try {
        let response = await fetch(`https://url/${id}`, {
            method: "DELETE",
        });
    } catch (err) {
    }
}

async function updateTask(task) {
    try {
        let response = await fetch(`https://url/${item.id}`, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
    }
}
