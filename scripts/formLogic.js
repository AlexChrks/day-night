export default function formLogic(storage, form) {
    storage.setItem('userName', form.children[0].value);
}