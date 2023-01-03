
const fakeFirebase = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        fakeFirebase.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback: VoidFunction) {
        fakeFirebase.isAuthenticated = false;
        setTimeout(callback, 100);

    }
}

export {fakeFirebase};