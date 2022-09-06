export function deleteObject(id, key) {
    var objects = JSON.parse(localStorage.getItem(key) || "[]");
    var pos;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id == id) {
            pos = i;
            break;
        }
    }
    objects.splice(pos, 1);
    localStorage.setItem(key, JSON.stringify(objects));
}